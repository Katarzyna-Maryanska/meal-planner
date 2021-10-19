-- CreateTable
CREATE TABLE "MealPlan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DailyMealPlan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "mealPlanId" TEXT,
    CONSTRAINT "DailyMealPlan_mealPlanId_fkey" FOREIGN KEY ("mealPlanId") REFERENCES "MealPlan" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_DailyMealPlan" ("id", "title") SELECT "id", "title" FROM "DailyMealPlan";
DROP TABLE "DailyMealPlan";
ALTER TABLE "new_DailyMealPlan" RENAME TO "DailyMealPlan";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
