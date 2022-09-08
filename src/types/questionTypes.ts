import { Questions } from "@prisma/client";

export type NewQuestion = Omit<Questions, "id">;
