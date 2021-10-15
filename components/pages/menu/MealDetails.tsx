import { Box, Text } from "@chakra-ui/react";

import { Meal } from "interfaces";

type Props = {
  meal: Meal;
};

export const MealDetails = ({ meal }: Props) => {
  return (
    <Box>
      <Text fontSize="lg">Detail for {meal.title}</Text>
      <Text>type: {meal.type}</Text>
    </Box>
  );
};
