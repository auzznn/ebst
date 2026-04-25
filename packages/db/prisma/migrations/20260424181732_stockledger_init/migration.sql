-- CreateEnum
CREATE TYPE "LedgerTransactionType" AS ENUM ('RECEIPT', 'ADJUSTMENT', 'USAGE', 'RETURN');

-- CreateTable
CREATE TABLE "stock_ledger" (
    "id" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "transactionType" "LedgerTransactionType" NOT NULL,
    "qtyChange" DECIMAL(10,3) NOT NULL,
    "balanceAfter" DECIMAL(10,3) NOT NULL,
    "reason" TEXT,
    "referenceId" TEXT,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stock_ledger_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "stock_ledger" ADD CONSTRAINT "stock_ledger_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_ledger" ADD CONSTRAINT "stock_ledger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
