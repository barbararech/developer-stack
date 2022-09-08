import { Request, Response } from "express";
import * as questionsService from "../services/questionService";
import * as answersService from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const question = req.body;

  await questionsService.newQuestion(question);

  return res.status(200).send("Question created successfully!");
}

export async function createAnswer(req: Request, res: Response) {
  const answer = req.body;
  const questionId = Number(req.params.id);

  await answersService.newAnswer(questionId, answer);

  return res.status(200).send("Answer created successfully!");
}

export async function get(req: Request, res: Response) {
  const questions = await questionsService.getQuestions();

  return res.status(200).send({ questions });
}

export async function getById(req: Request, res: Response) {
  // TODO
}
