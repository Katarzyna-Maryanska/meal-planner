export interface DailyMealPlan {
  id: string;
  title: string;
  meals: Meal[];
}
export interface Meal {
  id: string;
  type: string;
  title: string;
}
