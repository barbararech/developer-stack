// TODO
import * as answersRepository from "../repositories/answerRepository";
import * as answerTypes from "../types/answerTypes";

export async function newAnswer(
  questionId: number,
  answer: answerTypes.NewAnswer
) {
  await answersRepository.insertNewAnswer({
    ...answer,
    questionId,
  });

  return;
}

export async function getAnswersById(questionId: number) {
  const answers = await answersRepository.getAnswersById(questionId);
  return answers;
}
