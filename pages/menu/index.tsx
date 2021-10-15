import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Box, List, ListItem, Text } from "@chakra-ui/react";

import { Layout, SEO } from "components/app";
import { DailyMealPlan } from "interfaces";
import { mealPlanData } from "utils/sample-data";

const Menu = ({ mealPlan }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO
        title="DietPlanner | Meal plan for whole week"
        metatitle="DietPlanner | Meal plan for whole week"
        description=""
      />
      <Layout>
        <Text fontWeight="medium">Your menu for whole week</Text>
        {mealPlan.map((dailyMealPlan) => (
          <Box key={dailyMealPlan.id}>
            <Text>{dailyMealPlan.title}</Text>

            <List key={dailyMealPlan.id}>
              {dailyMealPlan.meals.map((meal) => (
                <Link
                  key={meal.id}
                  href="/menu/[mealId]"
                  as={`/menu/${meal.id}`}
                >
                  <a>
                    <ListItem>{meal.title}</ListItem>
                  </a>
                </Link>
              ))}
            </List>
          </Box>
        ))}
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mealPlan: DailyMealPlan[] = mealPlanData;
  return { props: { mealPlan } };
};

export default Menu;
