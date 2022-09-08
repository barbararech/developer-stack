import { Answers } from "@prisma/client";

export type NewAnswer = Omit<Answers, "id">;
