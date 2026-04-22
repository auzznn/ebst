/*
  Warnings:

  - You are about to drop the column `material` on the `part` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "part" DROP COLUMN "material",
ADD COLUMN     "materialId" TEXT;

-- CreateTable
CREATE TABLE "job_material" (
    "id" TEXT NOT NULL,
    "jobListId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "quantity" DECIMAL(10,3) NOT NULL,

    CONSTRAINT "job_material_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "part" ADD CONSTRAINT "part_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "material"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_material" ADD CONSTRAINT "job_material_jobListId_fkey" FOREIGN KEY ("jobListId") REFERENCES "job_list"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_material" ADD CONSTRAINT "job_material_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
