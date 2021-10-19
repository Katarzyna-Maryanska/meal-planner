export interface DailyMealPlan {
  id: string;
  title: string;
  meals: Meal[];
}
export interface Meal {
  id: string;
  type: string;
  title: string;
  ingredients: Ingredient[];
  preparation: Step[];
  tips: string;
}

export interface Step {
  id: string;
  number: number;
  description: string;
}

export interface Ingredient {
  id: string;
  number: number;
  description: string;
}
