-- CreateEnum
CREATE TYPE "FindingCategory" AS ENUM ('DIMENSION', 'SURFACE', 'CHEMICAL', 'VISUAL', 'FUNCTIONAL', 'OTHER');

-- AlterTable
ALTER TABLE "qc_log" ADD COLUMN     "actionRequired" TEXT,
ADD COLUMN     "totalScore" INTEGER;

-- CreateTable
CREATE TABLE "qc_finding" (
    "id" TEXT NOT NULL,
    "qcLogId" TEXT NOT NULL,
    "category" "FindingCategory" NOT NULL DEFAULT 'OTHER',
    "parameter" TEXT NOT NULL,
    "specification" TEXT,
    "measuredValue" TEXT,
    "unit" TEXT,
    "description" TEXT,
    "severity" INTEGER NOT NULL DEFAULT 0,
    "isConforming" BOOLEAN NOT NULL DEFAULT true,
    "documentId" TEXT,

    CONSTRAINT "qc_finding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "qc_finding_documentId_key" ON "qc_finding"("documentId");

-- AddForeignKey
ALTER TABLE "qc_finding" ADD CONSTRAINT "qc_finding_qcLogId_fkey" FOREIGN KEY ("qcLogId") REFERENCES "qc_log"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qc_finding" ADD CONSTRAINT "qc_finding_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "business_document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
