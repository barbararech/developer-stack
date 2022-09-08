import { Request, Response } from 'express';
import * as questionsService from '../services/questionService'

export async function createQuestion(req: Request, res: Response) {
  const question = req.body;

  await questionsService.newQuestion(question);

  return res.status(200).send("Question created successfully!");
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
