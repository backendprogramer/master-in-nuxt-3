/*
  Warnings:

  - You are about to drop the column `compeleted` on the `LessonProgress` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LessonProgress" DROP COLUMN "compeleted",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
