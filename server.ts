import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.get("/meals", async (req: Request, res: Response) => {
  const meals = await prisma.meal.findMany();
  res.json(meals);
});

const PORT = 3001;
app.listen(PORT);
