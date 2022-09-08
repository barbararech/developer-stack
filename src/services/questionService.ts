// TODO
import * as questionsRepository from "../repositories/questionRepository";
import * as questionTypes from "../types/questionTypes";

export async function newQuestion(question: questionTypes.NewQuestion) {
  await questionsRepository.insertNewquestion({
    ...question,
  });

  return;
}
