/*
  Warnings:

  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bill_lines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `invoice_lines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `invoices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `journal_entries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `journal_lines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payroll_entries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payroll_runs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tax_codes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vendors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_parentId_fkey";

-- DropForeignKey
ALTER TABLE "bill_lines" DROP CONSTRAINT "bill_lines_accountId_fkey";

-- DropForeignKey
ALTER TABLE "bill_lines" DROP CONSTRAINT "bill_lines_billId_fkey";

-- DropForeignKey
ALTER TABLE "bills" DROP CONSTRAINT "bills_taxCodeId_fkey";

-- DropForeignKey
ALTER TABLE "bills" DROP CONSTRAINT "bills_vendorId_fkey";

-- DropForeignKey
ALTER TABLE "invoice_lines" DROP CONSTRAINT "invoice_lines_accountId_fkey";

-- DropForeignKey
ALTER TABLE "invoice_lines" DROP CONSTRAINT "invoice_lines_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_customerId_fkey";

-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_taxCodeId_fkey";

-- DropForeignKey
ALTER TABLE "journal_entries" DROP CONSTRAINT "journal_entries_createdById_fkey";

-- DropForeignKey
ALTER TABLE "journal_lines" DROP CONSTRAINT "journal_lines_accountId_fkey";

-- DropForeignKey
ALTER TABLE "journal_lines" DROP CONSTRAINT "journal_lines_journalEntryId_fkey";

-- DropForeignKey
ALTER TABLE "payroll_entries" DROP CONSTRAINT "payroll_entries_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "payroll_entries" DROP CONSTRAINT "payroll_entries_payrollRunId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "role";

-- DropTable
DROP TABLE "accounts";

-- DropTable
DROP TABLE "bill_lines";

-- DropTable
DROP TABLE "bills";

-- DropTable
DROP TABLE "customers";

-- DropTable
DROP TABLE "invoice_lines";

-- DropTable
DROP TABLE "invoices";

-- DropTable
DROP TABLE "journal_entries";

-- DropTable
DROP TABLE "journal_lines";

-- DropTable
DROP TABLE "payroll_entries";

-- DropTable
DROP TABLE "payroll_runs";

-- DropTable
DROP TABLE "tax_codes";

-- DropTable
DROP TABLE "vendors";

-- DropEnum
DROP TYPE "AccountType";

-- DropEnum
DROP TYPE "BillStatus";

-- DropEnum
DROP TYPE "InvoiceStatus";

-- DropEnum
DROP TYPE "JournalEntryStatus";

-- DropEnum
DROP TYPE "PayrollStatus";

-- DropEnum
DROP TYPE "Role";
