/*
  Warnings:

  - You are about to drop the column `severity` on the `qc_finding` table. All the data in the column will be lost.
  - You are about to drop the column `actionRequired` on the `qc_log` table. All the data in the column will be lost.
  - You are about to drop the column `totalScore` on the `qc_log` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "DocumentType" ADD VALUE 'CHECK_SHEET';

-- AlterTable
ALTER TABLE "qc_finding" DROP COLUMN "severity";

-- AlterTable
ALTER TABLE "qc_log" DROP COLUMN "actionRequired",
DROP COLUMN "totalScore";
