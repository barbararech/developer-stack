import { prisma } from "../config/database";
import * as questionTypes from "../types/questionTypes";

export async function insertNewQuestion(question: questionTypes.NewQuestion) {
  return prisma.questions.create({
    data: question,
  });
}

export async function getQuestions() {
  return prisma.questions.findMany();
}

export async function getQuestionById(id: number) {
  return prisma.questions.findFirst({
    where: { id },
  });
}
