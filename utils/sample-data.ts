import { DailyMealPlan } from "../interfaces";

/** Dummy meal plan data. */
export const mealPlanData: DailyMealPlan[] = [
  {
    id: "1",
    title: "Day 1",
    meals: [
      {
        id: "66347c0c-81d6-4c6a-a4dc-e6c99cc68ef5",
        title: "Ham, Egg, and Cheese Breakfast Quesadilla",
        type: "breakfast",
      },
      {
        id: "9d27c455-5c02-43e0-8b99-b6ce192b7584",
        title: "Sorta salmon niçoise",
        type: "main course",
      },
      {
        id: "152144a7-97e1-4825-b9f1-1ee5d7789303",
        title: "Prawn & chorizo orzo",
        type: "main course",
      },
    ],
  },
  {
    id: "2",
    title: "Day 2",
    meals: [
      {
        id: "6a982866-0287-4f90-977a-b1100a1e3c1d",
        title: "Sticky cinnamon fig & yoghurt breakfast bowls",
        type: "breakfast",
      },
      {
        id: "caad4891-27cb-4d96-b4fe-45847ee7653f",
        title: "Herb tabbouleh with pomegranate & za’atar dressing",
        type: "main course",
      },
      {
        id: "d7a3f76e-eda4-4513-9131-f667f26e0d43",
        title: "Chicken & spring green bun cha",
        type: "main course",
      },
    ],
  },
];
