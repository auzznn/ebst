/*
  Warnings:

  - You are about to drop the column `drawingRef` on the `part` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[drawingId]` on the table `part` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "DocumentType" ADD VALUE 'DRAWING';

-- AlterTable
ALTER TABLE "part" DROP COLUMN "drawingRef",
ADD COLUMN     "drawingId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "part_drawingId_key" ON "part"("drawingId");

-- AddForeignKey
ALTER TABLE "part" ADD CONSTRAINT "part_drawingId_fkey" FOREIGN KEY ("drawingId") REFERENCES "business_document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
