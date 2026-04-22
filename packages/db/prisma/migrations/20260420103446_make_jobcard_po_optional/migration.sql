/*
  Warnings:

  - You are about to alter the column `dppHargaJual` on the `invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(15,0)`.
  - You are about to alter the column `dppNilaiLain` on the `invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(15,0)`.
  - You are about to alter the column `ppn` on the `invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(15,0)`.
  - You are about to alter the column `total` on the `invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(15,0)`.
  - You are about to alter the column `unitPrice` on the `invoice_item` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(15,0)`.
  - You are about to alter the column `qty` on the `invoice_item` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(15,0)`.
  - You are about to alter the column `amount` on the `invoice_item` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(15,0)`.
  - You are about to drop the `Channel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChannelMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[purchaseOrderId]` on the table `invoice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "CastingType" AS ENUM ('INVESTMENT', 'SAND');

-- CreateEnum
CREATE TYPE "JobCardStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'ON_HOLD', 'CANCELLED');

-- CreateEnum
CREATE TYPE "OperationStatus" AS ENUM ('WAITING', 'QUEUED', 'IN_PROGRESS', 'COMPLETED', 'REJECTED');

-- CreateEnum
CREATE TYPE "QcResult" AS ENUM ('PASS', 'REPAIR', 'REJECT');

-- CreateEnum
CREATE TYPE "MaterialUnit" AS ENUM ('KG', 'GRAM', 'LITRE', 'PIECE', 'METRE');

-- CreateEnum
CREATE TYPE "CheckSheetType" AS ENUM ('MELTING', 'FINISHING');

-- DropForeignKey
ALTER TABLE "ChannelMember" DROP CONSTRAINT "ChannelMember_channelId_fkey";

-- DropForeignKey
ALTER TABLE "ChannelMember" DROP CONSTRAINT "ChannelMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_channelId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_fkey";

-- DropForeignKey
ALTER TABLE "invoice" DROP CONSTRAINT "invoice_customerId_fkey";

-- AlterTable
ALTER TABLE "invoice" ADD COLUMN     "purchaseOrderId" TEXT,
ALTER COLUMN "dppHargaJual" SET DATA TYPE DECIMAL(15,0),
ALTER COLUMN "dppNilaiLain" SET DATA TYPE DECIMAL(15,0),
ALTER COLUMN "ppn" SET DATA TYPE DECIMAL(15,0),
ALTER COLUMN "total" SET DATA TYPE DECIMAL(15,0);

-- AlterTable
ALTER TABLE "invoice_item" ALTER COLUMN "unitPrice" SET DATA TYPE DECIMAL(15,0),
ALTER COLUMN "qty" SET DATA TYPE DECIMAL(15,0),
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(15,0);

-- DropTable
DROP TABLE "Channel";

-- DropTable
DROP TABLE "ChannelMember";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "customers";

-- CreateTable
CREATE TABLE "channel" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "isDM" BOOLEAN NOT NULL DEFAULT false,
    "dmKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastMessage" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "channel_member" (
    "userId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "channel_member_pkey" PRIMARY KEY ("userId","channelId")
);

-- CreateTable
CREATE TABLE "message" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'text',
    "fileUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_order" (
    "id" TEXT NOT NULL,
    "poNumber" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchase_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "po_line_item" (
    "id" TEXT NOT NULL,
    "purchaseOrderId" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(15,0) NOT NULL,

    CONSTRAINT "po_line_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "part" (
    "id" TEXT NOT NULL,
    "partNo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "castingType" "CastingType" NOT NULL,
    "material" TEXT NOT NULL,
    "drawingRef" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routing_template" (
    "id" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "routing_template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routing_step" (
    "id" TEXT NOT NULL,
    "routingTemplateId" TEXT NOT NULL,
    "stepOrder" INTEGER NOT NULL,
    "operationName" TEXT NOT NULL,
    "defaultMachineType" TEXT,
    "estimatedMinutes" INTEGER,

    CONSTRAINT "routing_step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machine" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "machineType" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "machine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_card" (
    "id" TEXT NOT NULL,
    "jobNo" TEXT NOT NULL,
    "purchaseOrderId" TEXT,
    "status" "JobCardStatus" NOT NULL DEFAULT 'PENDING',
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "job_card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_list" (
    "id" TEXT NOT NULL,
    "jobCardId" TEXT NOT NULL,
    "lineItemId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" "JobCardStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "job_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "operation" (
    "id" TEXT NOT NULL,
    "jobListId" TEXT NOT NULL,
    "routingStepId" TEXT NOT NULL,
    "stepOrder" INTEGER NOT NULL,
    "operationName" TEXT NOT NULL,
    "machineId" TEXT,
    "operatorId" TEXT,
    "status" "OperationStatus" NOT NULL DEFAULT 'WAITING',
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "notes" TEXT,

    CONSTRAINT "operation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qc_log" (
    "id" TEXT NOT NULL,
    "operationId" TEXT NOT NULL,
    "result" "QcResult" NOT NULL,
    "reason" TEXT,
    "inspectorId" TEXT NOT NULL,
    "loggedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "qc_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "check_sheet" (
    "id" TEXT NOT NULL,
    "type" "CheckSheetType" NOT NULL,
    "operationId" TEXT NOT NULL,
    "documentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "check_sheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "check_sheet_row" (
    "id" TEXT NOT NULL,
    "checkSheetId" TEXT NOT NULL,
    "parameterName" TEXT NOT NULL,
    "targetValue" TEXT,
    "actualValue" TEXT,
    "minTolerance" DECIMAL(10,4),
    "maxTolerance" DECIMAL(10,4),
    "isPass" BOOLEAN,

    CONSTRAINT "check_sheet_row_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "check_sheet_config" (

);

-- CreateTable
CREATE TABLE "material" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "unit" "MaterialUnit" NOT NULL,
    "stockQty" DECIMAL(10,3) NOT NULL DEFAULT 0,
    "reorderThreshold" DECIMAL(10,3) NOT NULL,
    "reorderQty" DECIMAL(10,3) NOT NULL,
    "supplierId" TEXT,
    "unitCost" DECIMAL(15,0),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_usage" (
    "id" TEXT NOT NULL,
    "operationId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "qtyUsed" DECIMAL(10,3) NOT NULL,
    "loggedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "material_usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock_adjustment" (
    "id" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "qty" DECIMAL(10,3) NOT NULL,
    "reason" TEXT NOT NULL,
    "adjustedById" TEXT NOT NULL,
    "adjustedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stock_adjustment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "channel_dmKey_key" ON "channel"("dmKey");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_order_poNumber_key" ON "purchase_order"("poNumber");

-- CreateIndex
CREATE UNIQUE INDEX "part_partNo_key" ON "part"("partNo");

-- CreateIndex
CREATE UNIQUE INDEX "routing_template_partId_key" ON "routing_template"("partId");

-- CreateIndex
CREATE UNIQUE INDEX "routing_step_routingTemplateId_stepOrder_key" ON "routing_step"("routingTemplateId", "stepOrder");

-- CreateIndex
CREATE UNIQUE INDEX "job_card_jobNo_key" ON "job_card"("jobNo");

-- CreateIndex
CREATE UNIQUE INDEX "job_card_purchaseOrderId_key" ON "job_card"("purchaseOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "job_list_lineItemId_key" ON "job_list"("lineItemId");

-- CreateIndex
CREATE UNIQUE INDEX "operation_jobListId_stepOrder_key" ON "operation"("jobListId", "stepOrder");

-- CreateIndex
CREATE UNIQUE INDEX "qc_log_operationId_key" ON "qc_log"("operationId");

-- CreateIndex
CREATE UNIQUE INDEX "check_sheet_operationId_key" ON "check_sheet"("operationId");

-- CreateIndex
CREATE UNIQUE INDEX "check_sheet_documentId_key" ON "check_sheet"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "material_code_key" ON "material"("code");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_purchaseOrderId_key" ON "invoice"("purchaseOrderId");

-- AddForeignKey
ALTER TABLE "channel_member" ADD CONSTRAINT "channel_member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "channel_member" ADD CONSTRAINT "channel_member_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_purchaseOrderId_fkey" FOREIGN KEY ("purchaseOrderId") REFERENCES "purchase_order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_order" ADD CONSTRAINT "purchase_order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "po_line_item" ADD CONSTRAINT "po_line_item_purchaseOrderId_fkey" FOREIGN KEY ("purchaseOrderId") REFERENCES "purchase_order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "po_line_item" ADD CONSTRAINT "po_line_item_partId_fkey" FOREIGN KEY ("partId") REFERENCES "part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routing_template" ADD CONSTRAINT "routing_template_partId_fkey" FOREIGN KEY ("partId") REFERENCES "part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routing_step" ADD CONSTRAINT "routing_step_routingTemplateId_fkey" FOREIGN KEY ("routingTemplateId") REFERENCES "routing_template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_card" ADD CONSTRAINT "job_card_purchaseOrderId_fkey" FOREIGN KEY ("purchaseOrderId") REFERENCES "purchase_order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_card" ADD CONSTRAINT "job_card_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_list" ADD CONSTRAINT "job_list_jobCardId_fkey" FOREIGN KEY ("jobCardId") REFERENCES "job_card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_list" ADD CONSTRAINT "job_list_lineItemId_fkey" FOREIGN KEY ("lineItemId") REFERENCES "po_line_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operation" ADD CONSTRAINT "operation_jobListId_fkey" FOREIGN KEY ("jobListId") REFERENCES "job_list"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operation" ADD CONSTRAINT "operation_routingStepId_fkey" FOREIGN KEY ("routingStepId") REFERENCES "routing_step"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operation" ADD CONSTRAINT "operation_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "machine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operation" ADD CONSTRAINT "operation_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qc_log" ADD CONSTRAINT "qc_log_operationId_fkey" FOREIGN KEY ("operationId") REFERENCES "operation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qc_log" ADD CONSTRAINT "qc_log_inspectorId_fkey" FOREIGN KEY ("inspectorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_sheet" ADD CONSTRAINT "check_sheet_operationId_fkey" FOREIGN KEY ("operationId") REFERENCES "operation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_sheet" ADD CONSTRAINT "check_sheet_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "business_document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_sheet_row" ADD CONSTRAINT "check_sheet_row_checkSheetId_fkey" FOREIGN KEY ("checkSheetId") REFERENCES "check_sheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material" ADD CONSTRAINT "material_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_operationId_fkey" FOREIGN KEY ("operationId") REFERENCES "operation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_adjustment" ADD CONSTRAINT "stock_adjustment_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_adjustment" ADD CONSTRAINT "stock_adjustment_adjustedById_fkey" FOREIGN KEY ("adjustedById") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
