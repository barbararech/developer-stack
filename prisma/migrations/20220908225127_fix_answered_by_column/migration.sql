/*
  Warnings:

  - You are about to drop the column `asweredBy` on the `Answers` table. All the data in the column will be lost.
  - Added the required column `answeredBy` to the `Answers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "asweredBy",
ADD COLUMN     "answeredBy" TEXT NOT NULL;
