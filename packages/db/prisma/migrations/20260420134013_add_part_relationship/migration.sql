-- DropForeignKey
ALTER TABLE "job_list" DROP CONSTRAINT "job_list_lineItemId_fkey";

-- AlterTable
ALTER TABLE "job_list" ADD COLUMN     "partId" TEXT,
ALTER COLUMN "lineItemId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "job_list" ADD CONSTRAINT "job_list_partId_fkey" FOREIGN KEY ("partId") REFERENCES "part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_list" ADD CONSTRAINT "job_list_lineItemId_fkey" FOREIGN KEY ("lineItemId") REFERENCES "po_line_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
