-- AlterTable
ALTER TABLE "routing_step" ADD COLUMN     "defaultMachineId" TEXT;

-- AddForeignKey
ALTER TABLE "routing_step" ADD CONSTRAINT "routing_step_defaultMachineId_fkey" FOREIGN KEY ("defaultMachineId") REFERENCES "machine"("id") ON DELETE SET NULL ON UPDATE CASCADE;
