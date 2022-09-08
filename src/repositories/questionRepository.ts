import { prisma } from "../config/database";
import * as questionTypes from "../types/questionTypes";

export async function insertNewquestion(question: questionTypes.NewQuestion) {
  return prisma.questions.create({
    data: question,
  });
}
