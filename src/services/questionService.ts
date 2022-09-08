// TODO
import * as questionsRepository from "../repositories/questionRepository";
import * as questionTypes from "../types/questionTypes";
import * as answersService from "../services/answerService";

export async function newQuestion(question: questionTypes.NewQuestion) {
  await questionsRepository.insertNewQuestion({
    ...question,
  });

  return;
}

export async function getQuestions() {
  const questions = await questionsRepository.getQuestions();

  return questions;
}

export async function getQuestionById(questionId: number) {
  const question = await questionsRepository.getQuestionById(questionId);
  const answers = await answersService.getAnswersById(questionId);
  
  console.log(question)
  console.log(answers)
  const result = {...question, answers}

  return result;
}