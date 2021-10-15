import { GetStaticProps, GetStaticPaths } from "next";
import { Text, Box } from "@chakra-ui/react";

import { Meal } from "interfaces";
import { mealPlanData } from "utils/sample-data";
import { Layout, SEO } from "components/app";
import { MealDetails } from "components/pages/menu";

type Props = {
  meal?: Meal;
  errors?: string;
};

const StaticPropsDetail = ({ meal, errors }: Props) => {
  if (errors) {
    return (
      <>
        <SEO
          title="DietPlanner | error"
          metatitle="DietPlanner | error"
          description=""
        />
        <Layout>
          <Text>
            <Box as="span" color="red">
              Error:
            </Box>{" "}
            {errors}
          </Text>
        </Layout>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`DietPlanner | ${meal ? meal.title : "Meal Detail"}`}
        metatitle={`DietPlanner | ${meal ? meal.title : "Meal Detail"}`}
        description=""
      />
      <Layout>{meal && <MealDetails meal={meal} />}</Layout>
    </>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mealPlanData.flatMap((dailyMealPlan) =>
    dailyMealPlan.meals.map((meal) => ({
      params: { mealId: meal.id },
    }))
  );

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const mealId = params?.mealId;
    const meal = mealPlanData
      .find((dailyMealPlan) =>
        dailyMealPlan.meals.find((meal) => meal.id === mealId)
      )
      .meals.find((meal) => meal.id === mealId);
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { meal } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
