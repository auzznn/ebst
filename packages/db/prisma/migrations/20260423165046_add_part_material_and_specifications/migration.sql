-- CreateTable
CREATE TABLE "part_material" (
    "id" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "ratio" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "part_material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "part_specification" (
    "id" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "length" DECIMAL(10,2),
    "width" DECIMAL(10,2),
    "height" DECIMAL(10,2),
    "weight" DECIMAL(10,2),
    "unit" TEXT NOT NULL DEFAULT 'mm',
    "tolerance" TEXT,
    "surfaceFinish" TEXT,
    "otherSpecs" JSONB DEFAULT '{}',

    CONSTRAINT "part_specification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "part_material_partId_materialId_key" ON "part_material"("partId", "materialId");

-- CreateIndex
CREATE UNIQUE INDEX "part_specification_partId_key" ON "part_specification"("partId");

-- AddForeignKey
ALTER TABLE "part_material" ADD CONSTRAINT "part_material_partId_fkey" FOREIGN KEY ("partId") REFERENCES "part"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "part_material" ADD CONSTRAINT "part_material_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "part_specification" ADD CONSTRAINT "part_specification_partId_fkey" FOREIGN KEY ("partId") REFERENCES "part"("id") ON DELETE CASCADE ON UPDATE CASCADE;
