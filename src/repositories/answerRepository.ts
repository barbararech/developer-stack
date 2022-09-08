import { prisma } from "../config/database";
import * as answerTypes from "../types/answerTypes";

export async function insertNewAnswer(answer: answerTypes.NewAnswer) {
  return prisma.answers.create({
    data: answer,
  });
}
