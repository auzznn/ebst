import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Material
 *
 */
export type MaterialModel = runtime.Types.Result.DefaultSelection<Prisma.$MaterialPayload>;
export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null;
    _avg: MaterialAvgAggregateOutputType | null;
    _sum: MaterialSumAggregateOutputType | null;
    _min: MaterialMinAggregateOutputType | null;
    _max: MaterialMaxAggregateOutputType | null;
};
export type MaterialAvgAggregateOutputType = {
    stockQty: runtime.Decimal | null;
    reorderThreshold: runtime.Decimal | null;
    reorderQty: runtime.Decimal | null;
    unitCost: runtime.Decimal | null;
};
export type MaterialSumAggregateOutputType = {
    stockQty: runtime.Decimal | null;
    reorderThreshold: runtime.Decimal | null;
    reorderQty: runtime.Decimal | null;
    unitCost: runtime.Decimal | null;
};
export type MaterialMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    description: string | null;
    unit: $Enums.MaterialUnit | null;
    stockQty: runtime.Decimal | null;
    reorderThreshold: runtime.Decimal | null;
    reorderQty: runtime.Decimal | null;
    supplierId: string | null;
    unitCost: runtime.Decimal | null;
    createdAt: Date | null;
};
export type MaterialMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    description: string | null;
    unit: $Enums.MaterialUnit | null;
    stockQty: runtime.Decimal | null;
    reorderThreshold: runtime.Decimal | null;
    reorderQty: runtime.Decimal | null;
    supplierId: string | null;
    unitCost: runtime.Decimal | null;
    createdAt: Date | null;
};
export type MaterialCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    description: number;
    unit: number;
    stockQty: number;
    reorderThreshold: number;
    reorderQty: number;
    supplierId: number;
    unitCost: number;
    createdAt: number;
    _all: number;
};
export type MaterialAvgAggregateInputType = {
    stockQty?: true;
    reorderThreshold?: true;
    reorderQty?: true;
    unitCost?: true;
};
export type MaterialSumAggregateInputType = {
    stockQty?: true;
    reorderThreshold?: true;
    reorderQty?: true;
    unitCost?: true;
};
export type MaterialMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    unit?: true;
    stockQty?: true;
    reorderThreshold?: true;
    reorderQty?: true;
    supplierId?: true;
    unitCost?: true;
    createdAt?: true;
};
export type MaterialMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    unit?: true;
    stockQty?: true;
    reorderThreshold?: true;
    reorderQty?: true;
    supplierId?: true;
    unitCost?: true;
    createdAt?: true;
};
export type MaterialCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    unit?: true;
    stockQty?: true;
    reorderThreshold?: true;
    reorderQty?: true;
    supplierId?: true;
    unitCost?: true;
    createdAt?: true;
    _all?: true;
};
export type MaterialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Materials to fetch.
     */
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Materials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType;
};
export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
    [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaterial[P]> : Prisma.GetScalarType<T[P], AggregateMaterial[P]>;
};
export type MaterialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithAggregationInput | Prisma.MaterialOrderByWithAggregationInput[];
    by: Prisma.MaterialScalarFieldEnum[] | Prisma.MaterialScalarFieldEnum;
    having?: Prisma.MaterialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MaterialCountAggregateInputType | true;
    _avg?: MaterialAvgAggregateInputType;
    _sum?: MaterialSumAggregateInputType;
    _min?: MaterialMinAggregateInputType;
    _max?: MaterialMaxAggregateInputType;
};
export type MaterialGroupByOutputType = {
    id: string;
    name: string;
    code: string;
    description: string | null;
    unit: $Enums.MaterialUnit;
    stockQty: runtime.Decimal;
    reorderThreshold: runtime.Decimal;
    reorderQty: runtime.Decimal;
    supplierId: string | null;
    unitCost: runtime.Decimal | null;
    createdAt: Date;
    _count: MaterialCountAggregateOutputType | null;
    _avg: MaterialAvgAggregateOutputType | null;
    _sum: MaterialSumAggregateOutputType | null;
    _min: MaterialMinAggregateOutputType | null;
    _max: MaterialMaxAggregateOutputType | null;
};
export type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MaterialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MaterialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MaterialGroupByOutputType[P]>;
}>>;
export type MaterialWhereInput = {
    AND?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    OR?: Prisma.MaterialWhereInput[];
    NOT?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    id?: Prisma.StringFilter<"Material"> | string;
    name?: Prisma.StringFilter<"Material"> | string;
    code?: Prisma.StringFilter<"Material"> | string;
    description?: Prisma.StringNullableFilter<"Material"> | string | null;
    unit?: Prisma.EnumMaterialUnitFilter<"Material"> | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: Prisma.StringNullableFilter<"Material"> | string | null;
    unitCost?: Prisma.DecimalNullableFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    supplier?: Prisma.XOR<Prisma.SupplierNullableScalarRelationFilter, Prisma.SupplierWhereInput> | null;
    usages?: Prisma.MaterialUsageListRelationFilter;
    adjustments?: Prisma.StockAdjustmentListRelationFilter;
    parts?: Prisma.PartListRelationFilter;
    jobMaterials?: Prisma.JobMaterialListRelationFilter;
};
export type MaterialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
    reorderThreshold?: Prisma.SortOrder;
    reorderQty?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    unitCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
    usages?: Prisma.MaterialUsageOrderByRelationAggregateInput;
    adjustments?: Prisma.StockAdjustmentOrderByRelationAggregateInput;
    parts?: Prisma.PartOrderByRelationAggregateInput;
    jobMaterials?: Prisma.JobMaterialOrderByRelationAggregateInput;
};
export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    OR?: Prisma.MaterialWhereInput[];
    NOT?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    name?: Prisma.StringFilter<"Material"> | string;
    description?: Prisma.StringNullableFilter<"Material"> | string | null;
    unit?: Prisma.EnumMaterialUnitFilter<"Material"> | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: Prisma.StringNullableFilter<"Material"> | string | null;
    unitCost?: Prisma.DecimalNullableFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    supplier?: Prisma.XOR<Prisma.SupplierNullableScalarRelationFilter, Prisma.SupplierWhereInput> | null;
    usages?: Prisma.MaterialUsageListRelationFilter;
    adjustments?: Prisma.StockAdjustmentListRelationFilter;
    parts?: Prisma.PartListRelationFilter;
    jobMaterials?: Prisma.JobMaterialListRelationFilter;
}, "id" | "code">;
export type MaterialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
    reorderThreshold?: Prisma.SortOrder;
    reorderQty?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    unitCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MaterialCountOrderByAggregateInput;
    _avg?: Prisma.MaterialAvgOrderByAggregateInput;
    _max?: Prisma.MaterialMaxOrderByAggregateInput;
    _min?: Prisma.MaterialMinOrderByAggregateInput;
    _sum?: Prisma.MaterialSumOrderByAggregateInput;
};
export type MaterialScalarWhereWithAggregatesInput = {
    AND?: Prisma.MaterialScalarWhereWithAggregatesInput | Prisma.MaterialScalarWhereWithAggregatesInput[];
    OR?: Prisma.MaterialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MaterialScalarWhereWithAggregatesInput | Prisma.MaterialScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Material"> | string | null;
    unit?: Prisma.EnumMaterialUnitWithAggregatesFilter<"Material"> | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalWithAggregatesFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalWithAggregatesFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalWithAggregatesFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: Prisma.StringNullableWithAggregatesFilter<"Material"> | string | null;
    unitCost?: Prisma.DecimalNullableWithAggregatesFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Material"> | Date | string;
};
export type MaterialCreateInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    supplier?: Prisma.SupplierCreateNestedOneWithoutMaterialsInput;
    usages?: Prisma.MaterialUsageCreateNestedManyWithoutMaterialInput;
    adjustments?: Prisma.StockAdjustmentCreateNestedManyWithoutMaterialInput;
    parts?: Prisma.PartCreateNestedManyWithoutMaterialInput;
    jobMaterials?: Prisma.JobMaterialCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: string | null;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    usages?: Prisma.MaterialUsageUncheckedCreateNestedManyWithoutMaterialInput;
    adjustments?: Prisma.StockAdjustmentUncheckedCreateNestedManyWithoutMaterialInput;
    parts?: Prisma.PartUncheckedCreateNestedManyWithoutMaterialInput;
    jobMaterials?: Prisma.JobMaterialUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneWithoutMaterialsNestedInput;
    usages?: Prisma.MaterialUsageUpdateManyWithoutMaterialNestedInput;
    adjustments?: Prisma.StockAdjustmentUpdateManyWithoutMaterialNestedInput;
    parts?: Prisma.PartUpdateManyWithoutMaterialNestedInput;
    jobMaterials?: Prisma.JobMaterialUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usages?: Prisma.MaterialUsageUncheckedUpdateManyWithoutMaterialNestedInput;
    adjustments?: Prisma.StockAdjustmentUncheckedUpdateManyWithoutMaterialNestedInput;
    parts?: Prisma.PartUncheckedUpdateManyWithoutMaterialNestedInput;
    jobMaterials?: Prisma.JobMaterialUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCreateManyInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: string | null;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
};
export type MaterialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialNullableScalarRelationFilter = {
    is?: Prisma.MaterialWhereInput | null;
    isNot?: Prisma.MaterialWhereInput | null;
};
export type MaterialScalarRelationFilter = {
    is?: Prisma.MaterialWhereInput;
    isNot?: Prisma.MaterialWhereInput;
};
export type MaterialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
    reorderThreshold?: Prisma.SortOrder;
    reorderQty?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MaterialAvgOrderByAggregateInput = {
    stockQty?: Prisma.SortOrder;
    reorderThreshold?: Prisma.SortOrder;
    reorderQty?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
};
export type MaterialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
    reorderThreshold?: Prisma.SortOrder;
    reorderQty?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MaterialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    stockQty?: Prisma.SortOrder;
    reorderThreshold?: Prisma.SortOrder;
    reorderQty?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MaterialSumOrderByAggregateInput = {
    stockQty?: Prisma.SortOrder;
    reorderThreshold?: Prisma.SortOrder;
    reorderQty?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
};
export type MaterialListRelationFilter = {
    every?: Prisma.MaterialWhereInput;
    some?: Prisma.MaterialWhereInput;
    none?: Prisma.MaterialWhereInput;
};
export type MaterialOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MaterialCreateNestedOneWithoutPartsInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutPartsInput, Prisma.MaterialUncheckedCreateWithoutPartsInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutPartsInput;
    connect?: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateOneWithoutPartsNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutPartsInput, Prisma.MaterialUncheckedCreateWithoutPartsInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutPartsInput;
    upsert?: Prisma.MaterialUpsertWithoutPartsInput;
    disconnect?: Prisma.MaterialWhereInput | boolean;
    delete?: Prisma.MaterialWhereInput | boolean;
    connect?: Prisma.MaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialUpdateToOneWithWhereWithoutPartsInput, Prisma.MaterialUpdateWithoutPartsInput>, Prisma.MaterialUncheckedUpdateWithoutPartsInput>;
};
export type MaterialCreateNestedOneWithoutJobMaterialsInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutJobMaterialsInput, Prisma.MaterialUncheckedCreateWithoutJobMaterialsInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutJobMaterialsInput;
    connect?: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateOneRequiredWithoutJobMaterialsNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutJobMaterialsInput, Prisma.MaterialUncheckedCreateWithoutJobMaterialsInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutJobMaterialsInput;
    upsert?: Prisma.MaterialUpsertWithoutJobMaterialsInput;
    connect?: Prisma.MaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialUpdateToOneWithWhereWithoutJobMaterialsInput, Prisma.MaterialUpdateWithoutJobMaterialsInput>, Prisma.MaterialUncheckedUpdateWithoutJobMaterialsInput>;
};
export type EnumMaterialUnitFieldUpdateOperationsInput = {
    set?: $Enums.MaterialUnit;
};
export type MaterialCreateNestedOneWithoutUsagesInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutUsagesInput, Prisma.MaterialUncheckedCreateWithoutUsagesInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutUsagesInput;
    connect?: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateOneRequiredWithoutUsagesNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutUsagesInput, Prisma.MaterialUncheckedCreateWithoutUsagesInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutUsagesInput;
    upsert?: Prisma.MaterialUpsertWithoutUsagesInput;
    connect?: Prisma.MaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialUpdateToOneWithWhereWithoutUsagesInput, Prisma.MaterialUpdateWithoutUsagesInput>, Prisma.MaterialUncheckedUpdateWithoutUsagesInput>;
};
export type MaterialCreateNestedOneWithoutAdjustmentsInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutAdjustmentsInput, Prisma.MaterialUncheckedCreateWithoutAdjustmentsInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutAdjustmentsInput;
    connect?: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateOneRequiredWithoutAdjustmentsNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutAdjustmentsInput, Prisma.MaterialUncheckedCreateWithoutAdjustmentsInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutAdjustmentsInput;
    upsert?: Prisma.MaterialUpsertWithoutAdjustmentsInput;
    connect?: Prisma.MaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialUpdateToOneWithWhereWithoutAdjustmentsInput, Prisma.MaterialUpdateWithoutAdjustmentsInput>, Prisma.MaterialUncheckedUpdateWithoutAdjustmentsInput>;
};
export type MaterialCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutSupplierInput, Prisma.MaterialUncheckedCreateWithoutSupplierInput> | Prisma.MaterialCreateWithoutSupplierInput[] | Prisma.MaterialUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutSupplierInput | Prisma.MaterialCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.MaterialCreateManySupplierInputEnvelope;
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
};
export type MaterialUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutSupplierInput, Prisma.MaterialUncheckedCreateWithoutSupplierInput> | Prisma.MaterialCreateWithoutSupplierInput[] | Prisma.MaterialUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutSupplierInput | Prisma.MaterialCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.MaterialCreateManySupplierInputEnvelope;
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
};
export type MaterialUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutSupplierInput, Prisma.MaterialUncheckedCreateWithoutSupplierInput> | Prisma.MaterialCreateWithoutSupplierInput[] | Prisma.MaterialUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutSupplierInput | Prisma.MaterialCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.MaterialUpsertWithWhereUniqueWithoutSupplierInput | Prisma.MaterialUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.MaterialCreateManySupplierInputEnvelope;
    set?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    disconnect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    delete?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    update?: Prisma.MaterialUpdateWithWhereUniqueWithoutSupplierInput | Prisma.MaterialUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.MaterialUpdateManyWithWhereWithoutSupplierInput | Prisma.MaterialUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.MaterialScalarWhereInput | Prisma.MaterialScalarWhereInput[];
};
export type MaterialUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutSupplierInput, Prisma.MaterialUncheckedCreateWithoutSupplierInput> | Prisma.MaterialCreateWithoutSupplierInput[] | Prisma.MaterialUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutSupplierInput | Prisma.MaterialCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.MaterialUpsertWithWhereUniqueWithoutSupplierInput | Prisma.MaterialUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.MaterialCreateManySupplierInputEnvelope;
    set?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    disconnect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    delete?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    update?: Prisma.MaterialUpdateWithWhereUniqueWithoutSupplierInput | Prisma.MaterialUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.MaterialUpdateManyWithWhereWithoutSupplierInput | Prisma.MaterialUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.MaterialScalarWhereInput | Prisma.MaterialScalarWhereInput[];
};
export type MaterialCreateWithoutPartsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    supplier?: Prisma.SupplierCreateNestedOneWithoutMaterialsInput;
    usages?: Prisma.MaterialUsageCreateNestedManyWithoutMaterialInput;
    adjustments?: Prisma.StockAdjustmentCreateNestedManyWithoutMaterialInput;
    jobMaterials?: Prisma.JobMaterialCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateWithoutPartsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: string | null;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    usages?: Prisma.MaterialUsageUncheckedCreateNestedManyWithoutMaterialInput;
    adjustments?: Prisma.StockAdjustmentUncheckedCreateNestedManyWithoutMaterialInput;
    jobMaterials?: Prisma.JobMaterialUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialCreateOrConnectWithoutPartsInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutPartsInput, Prisma.MaterialUncheckedCreateWithoutPartsInput>;
};
export type MaterialUpsertWithoutPartsInput = {
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutPartsInput, Prisma.MaterialUncheckedUpdateWithoutPartsInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutPartsInput, Prisma.MaterialUncheckedCreateWithoutPartsInput>;
    where?: Prisma.MaterialWhereInput;
};
export type MaterialUpdateToOneWithWhereWithoutPartsInput = {
    where?: Prisma.MaterialWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutPartsInput, Prisma.MaterialUncheckedUpdateWithoutPartsInput>;
};
export type MaterialUpdateWithoutPartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneWithoutMaterialsNestedInput;
    usages?: Prisma.MaterialUsageUpdateManyWithoutMaterialNestedInput;
    adjustments?: Prisma.StockAdjustmentUpdateManyWithoutMaterialNestedInput;
    jobMaterials?: Prisma.JobMaterialUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateWithoutPartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usages?: Prisma.MaterialUsageUncheckedUpdateManyWithoutMaterialNestedInput;
    adjustments?: Prisma.StockAdjustmentUncheckedUpdateManyWithoutMaterialNestedInput;
    jobMaterials?: Prisma.JobMaterialUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCreateWithoutJobMaterialsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    supplier?: Prisma.SupplierCreateNestedOneWithoutMaterialsInput;
    usages?: Prisma.MaterialUsageCreateNestedManyWithoutMaterialInput;
    adjustments?: Prisma.StockAdjustmentCreateNestedManyWithoutMaterialInput;
    parts?: Prisma.PartCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateWithoutJobMaterialsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: string | null;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    usages?: Prisma.MaterialUsageUncheckedCreateNestedManyWithoutMaterialInput;
    adjustments?: Prisma.StockAdjustmentUncheckedCreateNestedManyWithoutMaterialInput;
    parts?: Prisma.PartUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialCreateOrConnectWithoutJobMaterialsInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutJobMaterialsInput, Prisma.MaterialUncheckedCreateWithoutJobMaterialsInput>;
};
export type MaterialUpsertWithoutJobMaterialsInput = {
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutJobMaterialsInput, Prisma.MaterialUncheckedUpdateWithoutJobMaterialsInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutJobMaterialsInput, Prisma.MaterialUncheckedCreateWithoutJobMaterialsInput>;
    where?: Prisma.MaterialWhereInput;
};
export type MaterialUpdateToOneWithWhereWithoutJobMaterialsInput = {
    where?: Prisma.MaterialWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutJobMaterialsInput, Prisma.MaterialUncheckedUpdateWithoutJobMaterialsInput>;
};
export type MaterialUpdateWithoutJobMaterialsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneWithoutMaterialsNestedInput;
    usages?: Prisma.MaterialUsageUpdateManyWithoutMaterialNestedInput;
    adjustments?: Prisma.StockAdjustmentUpdateManyWithoutMaterialNestedInput;
    parts?: Prisma.PartUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateWithoutJobMaterialsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usages?: Prisma.MaterialUsageUncheckedUpdateManyWithoutMaterialNestedInput;
    adjustments?: Prisma.StockAdjustmentUncheckedUpdateManyWithoutMaterialNestedInput;
    parts?: Prisma.PartUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCreateWithoutUsagesInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    supplier?: Prisma.SupplierCreateNestedOneWithoutMaterialsInput;
    adjustments?: Prisma.StockAdjustmentCreateNestedManyWithoutMaterialInput;
    parts?: Prisma.PartCreateNestedManyWithoutMaterialInput;
    jobMaterials?: Prisma.JobMaterialCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateWithoutUsagesInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: string | null;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    adjustments?: Prisma.StockAdjustmentUncheckedCreateNestedManyWithoutMaterialInput;
    parts?: Prisma.PartUncheckedCreateNestedManyWithoutMaterialInput;
    jobMaterials?: Prisma.JobMaterialUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialCreateOrConnectWithoutUsagesInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutUsagesInput, Prisma.MaterialUncheckedCreateWithoutUsagesInput>;
};
export type MaterialUpsertWithoutUsagesInput = {
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutUsagesInput, Prisma.MaterialUncheckedUpdateWithoutUsagesInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutUsagesInput, Prisma.MaterialUncheckedCreateWithoutUsagesInput>;
    where?: Prisma.MaterialWhereInput;
};
export type MaterialUpdateToOneWithWhereWithoutUsagesInput = {
    where?: Prisma.MaterialWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutUsagesInput, Prisma.MaterialUncheckedUpdateWithoutUsagesInput>;
};
export type MaterialUpdateWithoutUsagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneWithoutMaterialsNestedInput;
    adjustments?: Prisma.StockAdjustmentUpdateManyWithoutMaterialNestedInput;
    parts?: Prisma.PartUpdateManyWithoutMaterialNestedInput;
    jobMaterials?: Prisma.JobMaterialUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateWithoutUsagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adjustments?: Prisma.StockAdjustmentUncheckedUpdateManyWithoutMaterialNestedInput;
    parts?: Prisma.PartUncheckedUpdateManyWithoutMaterialNestedInput;
    jobMaterials?: Prisma.JobMaterialUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCreateWithoutAdjustmentsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    supplier?: Prisma.SupplierCreateNestedOneWithoutMaterialsInput;
    usages?: Prisma.MaterialUsageCreateNestedManyWithoutMaterialInput;
    parts?: Prisma.PartCreateNestedManyWithoutMaterialInput;
    jobMaterials?: Prisma.JobMaterialCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateWithoutAdjustmentsInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: string | null;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    usages?: Prisma.MaterialUsageUncheckedCreateNestedManyWithoutMaterialInput;
    parts?: Prisma.PartUncheckedCreateNestedManyWithoutMaterialInput;
    jobMaterials?: Prisma.JobMaterialUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialCreateOrConnectWithoutAdjustmentsInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutAdjustmentsInput, Prisma.MaterialUncheckedCreateWithoutAdjustmentsInput>;
};
export type MaterialUpsertWithoutAdjustmentsInput = {
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutAdjustmentsInput, Prisma.MaterialUncheckedUpdateWithoutAdjustmentsInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutAdjustmentsInput, Prisma.MaterialUncheckedCreateWithoutAdjustmentsInput>;
    where?: Prisma.MaterialWhereInput;
};
export type MaterialUpdateToOneWithWhereWithoutAdjustmentsInput = {
    where?: Prisma.MaterialWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutAdjustmentsInput, Prisma.MaterialUncheckedUpdateWithoutAdjustmentsInput>;
};
export type MaterialUpdateWithoutAdjustmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneWithoutMaterialsNestedInput;
    usages?: Prisma.MaterialUsageUpdateManyWithoutMaterialNestedInput;
    parts?: Prisma.PartUpdateManyWithoutMaterialNestedInput;
    jobMaterials?: Prisma.JobMaterialUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateWithoutAdjustmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usages?: Prisma.MaterialUsageUncheckedUpdateManyWithoutMaterialNestedInput;
    parts?: Prisma.PartUncheckedUpdateManyWithoutMaterialNestedInput;
    jobMaterials?: Prisma.JobMaterialUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCreateWithoutSupplierInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    usages?: Prisma.MaterialUsageCreateNestedManyWithoutMaterialInput;
    adjustments?: Prisma.StockAdjustmentCreateNestedManyWithoutMaterialInput;
    parts?: Prisma.PartCreateNestedManyWithoutMaterialInput;
    jobMaterials?: Prisma.JobMaterialCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateWithoutSupplierInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    usages?: Prisma.MaterialUsageUncheckedCreateNestedManyWithoutMaterialInput;
    adjustments?: Prisma.StockAdjustmentUncheckedCreateNestedManyWithoutMaterialInput;
    parts?: Prisma.PartUncheckedCreateNestedManyWithoutMaterialInput;
    jobMaterials?: Prisma.JobMaterialUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialCreateOrConnectWithoutSupplierInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutSupplierInput, Prisma.MaterialUncheckedCreateWithoutSupplierInput>;
};
export type MaterialCreateManySupplierInputEnvelope = {
    data: Prisma.MaterialCreateManySupplierInput | Prisma.MaterialCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type MaterialUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.MaterialWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutSupplierInput, Prisma.MaterialUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutSupplierInput, Prisma.MaterialUncheckedCreateWithoutSupplierInput>;
};
export type MaterialUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.MaterialWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutSupplierInput, Prisma.MaterialUncheckedUpdateWithoutSupplierInput>;
};
export type MaterialUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.MaterialScalarWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyWithoutSupplierInput>;
};
export type MaterialScalarWhereInput = {
    AND?: Prisma.MaterialScalarWhereInput | Prisma.MaterialScalarWhereInput[];
    OR?: Prisma.MaterialScalarWhereInput[];
    NOT?: Prisma.MaterialScalarWhereInput | Prisma.MaterialScalarWhereInput[];
    id?: Prisma.StringFilter<"Material"> | string;
    name?: Prisma.StringFilter<"Material"> | string;
    code?: Prisma.StringFilter<"Material"> | string;
    description?: Prisma.StringNullableFilter<"Material"> | string | null;
    unit?: Prisma.EnumMaterialUnitFilter<"Material"> | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplierId?: Prisma.StringNullableFilter<"Material"> | string | null;
    unitCost?: Prisma.DecimalNullableFilter<"Material"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
};
export type MaterialCreateManySupplierInput = {
    id?: string;
    name: string;
    code: string;
    description?: string | null;
    unit: $Enums.MaterialUnit;
    stockQty?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
};
export type MaterialUpdateWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usages?: Prisma.MaterialUsageUpdateManyWithoutMaterialNestedInput;
    adjustments?: Prisma.StockAdjustmentUpdateManyWithoutMaterialNestedInput;
    parts?: Prisma.PartUpdateManyWithoutMaterialNestedInput;
    jobMaterials?: Prisma.JobMaterialUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usages?: Prisma.MaterialUsageUncheckedUpdateManyWithoutMaterialNestedInput;
    adjustments?: Prisma.StockAdjustmentUncheckedUpdateManyWithoutMaterialNestedInput;
    parts?: Prisma.PartUncheckedUpdateManyWithoutMaterialNestedInput;
    jobMaterials?: Prisma.JobMaterialUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateManyWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unit?: Prisma.EnumMaterialUnitFieldUpdateOperationsInput | $Enums.MaterialUnit;
    stockQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderThreshold?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reorderQty?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MaterialCountOutputType
 */
export type MaterialCountOutputType = {
    usages: number;
    adjustments: number;
    parts: number;
    jobMaterials: number;
};
export type MaterialCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usages?: boolean | MaterialCountOutputTypeCountUsagesArgs;
    adjustments?: boolean | MaterialCountOutputTypeCountAdjustmentsArgs;
    parts?: boolean | MaterialCountOutputTypeCountPartsArgs;
    jobMaterials?: boolean | MaterialCountOutputTypeCountJobMaterialsArgs;
};
/**
 * MaterialCountOutputType without action
 */
export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: Prisma.MaterialCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MaterialCountOutputType without action
 */
export type MaterialCountOutputTypeCountUsagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialUsageWhereInput;
};
/**
 * MaterialCountOutputType without action
 */
export type MaterialCountOutputTypeCountAdjustmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockAdjustmentWhereInput;
};
/**
 * MaterialCountOutputType without action
 */
export type MaterialCountOutputTypeCountPartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartWhereInput;
};
/**
 * MaterialCountOutputType without action
 */
export type MaterialCountOutputTypeCountJobMaterialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobMaterialWhereInput;
};
export type MaterialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    unit?: boolean;
    stockQty?: boolean;
    reorderThreshold?: boolean;
    reorderQty?: boolean;
    supplierId?: boolean;
    unitCost?: boolean;
    createdAt?: boolean;
    supplier?: boolean | Prisma.Material$supplierArgs<ExtArgs>;
    usages?: boolean | Prisma.Material$usagesArgs<ExtArgs>;
    adjustments?: boolean | Prisma.Material$adjustmentsArgs<ExtArgs>;
    parts?: boolean | Prisma.Material$partsArgs<ExtArgs>;
    jobMaterials?: boolean | Prisma.Material$jobMaterialsArgs<ExtArgs>;
    _count?: boolean | Prisma.MaterialCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    unit?: boolean;
    stockQty?: boolean;
    reorderThreshold?: boolean;
    reorderQty?: boolean;
    supplierId?: boolean;
    unitCost?: boolean;
    createdAt?: boolean;
    supplier?: boolean | Prisma.Material$supplierArgs<ExtArgs>;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    unit?: boolean;
    stockQty?: boolean;
    reorderThreshold?: boolean;
    reorderQty?: boolean;
    supplierId?: boolean;
    unitCost?: boolean;
    createdAt?: boolean;
    supplier?: boolean | Prisma.Material$supplierArgs<ExtArgs>;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    unit?: boolean;
    stockQty?: boolean;
    reorderThreshold?: boolean;
    reorderQty?: boolean;
    supplierId?: boolean;
    unitCost?: boolean;
    createdAt?: boolean;
};
export type MaterialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "code" | "description" | "unit" | "stockQty" | "reorderThreshold" | "reorderQty" | "supplierId" | "unitCost" | "createdAt", ExtArgs["result"]["material"]>;
export type MaterialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.Material$supplierArgs<ExtArgs>;
    usages?: boolean | Prisma.Material$usagesArgs<ExtArgs>;
    adjustments?: boolean | Prisma.Material$adjustmentsArgs<ExtArgs>;
    parts?: boolean | Prisma.Material$partsArgs<ExtArgs>;
    jobMaterials?: boolean | Prisma.Material$jobMaterialsArgs<ExtArgs>;
    _count?: boolean | Prisma.MaterialCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MaterialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.Material$supplierArgs<ExtArgs>;
};
export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.Material$supplierArgs<ExtArgs>;
};
export type $MaterialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Material";
    objects: {
        supplier: Prisma.$SupplierPayload<ExtArgs> | null;
        usages: Prisma.$MaterialUsagePayload<ExtArgs>[];
        adjustments: Prisma.$StockAdjustmentPayload<ExtArgs>[];
        parts: Prisma.$PartPayload<ExtArgs>[];
        jobMaterials: Prisma.$JobMaterialPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        code: string;
        description: string | null;
        unit: $Enums.MaterialUnit;
        stockQty: runtime.Decimal;
        reorderThreshold: runtime.Decimal;
        reorderQty: runtime.Decimal;
        supplierId: string | null;
        unitCost: runtime.Decimal | null;
        createdAt: Date;
    }, ExtArgs["result"]["material"]>;
    composites: {};
};
export type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MaterialPayload, S>;
export type MaterialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MaterialCountAggregateInputType | true;
};
export interface MaterialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Material'];
        meta: {
            name: 'Material';
        };
    };
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: Prisma.SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: Prisma.SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     *
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MaterialFindManyArgs>(args?: Prisma.SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     *
     */
    create<T extends MaterialCreateArgs>(args: Prisma.SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MaterialCreateManyArgs>(args?: Prisma.SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     *
     */
    delete<T extends MaterialDeleteArgs>(args: Prisma.SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MaterialUpdateArgs>(args: Prisma.SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: Prisma.SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: Prisma.SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: Prisma.SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(args?: Prisma.Subset<T, MaterialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MaterialCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialAggregateArgs>(args: Prisma.Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>;
    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends MaterialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MaterialGroupByArgs['orderBy'];
    } : {
        orderBy?: MaterialGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Material model
     */
    readonly fields: MaterialFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Material.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    supplier<T extends Prisma.Material$supplierArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$supplierArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usages<T extends Prisma.Material$usagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$usagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    adjustments<T extends Prisma.Material$adjustmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$adjustmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    parts<T extends Prisma.Material$partsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$partsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    jobMaterials<T extends Prisma.Material$jobMaterialsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$jobMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Material model
 */
export interface MaterialFieldRefs {
    readonly id: Prisma.FieldRef<"Material", 'String'>;
    readonly name: Prisma.FieldRef<"Material", 'String'>;
    readonly code: Prisma.FieldRef<"Material", 'String'>;
    readonly description: Prisma.FieldRef<"Material", 'String'>;
    readonly unit: Prisma.FieldRef<"Material", 'MaterialUnit'>;
    readonly stockQty: Prisma.FieldRef<"Material", 'Decimal'>;
    readonly reorderThreshold: Prisma.FieldRef<"Material", 'Decimal'>;
    readonly reorderQty: Prisma.FieldRef<"Material", 'Decimal'>;
    readonly supplierId: Prisma.FieldRef<"Material", 'String'>;
    readonly unitCost: Prisma.FieldRef<"Material", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"Material", 'DateTime'>;
}
/**
 * Material findUnique
 */
export type MaterialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    /**
     * Filter, which Material to fetch.
     */
    where: Prisma.MaterialWhereUniqueInput;
};
/**
 * Material findUniqueOrThrow
 */
export type MaterialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    /**
     * Filter, which Material to fetch.
     */
    where: Prisma.MaterialWhereUniqueInput;
};
/**
 * Material findFirst
 */
export type MaterialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    /**
     * Filter, which Material to fetch.
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Materials to fetch.
     */
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Materials.
     */
    cursor?: Prisma.MaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Materials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Materials.
     */
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
/**
 * Material findFirstOrThrow
 */
export type MaterialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    /**
     * Filter, which Material to fetch.
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Materials to fetch.
     */
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Materials.
     */
    cursor?: Prisma.MaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Materials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Materials.
     */
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
/**
 * Material findMany
 */
export type MaterialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    /**
     * Filter, which Materials to fetch.
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Materials to fetch.
     */
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Materials.
     */
    cursor?: Prisma.MaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Materials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Materials.
     */
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
/**
 * Material create
 */
export type MaterialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    /**
     * The data needed to create a Material.
     */
    data: Prisma.XOR<Prisma.MaterialCreateInput, Prisma.MaterialUncheckedCreateInput>;
};
/**
 * Material createMany
 */
export type MaterialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: Prisma.MaterialCreateManyInput | Prisma.MaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Material createManyAndReturn
 */
export type MaterialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * The data used to create many Materials.
     */
    data: Prisma.MaterialCreateManyInput | Prisma.MaterialCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Material update
 */
export type MaterialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    /**
     * The data needed to update a Material.
     */
    data: Prisma.XOR<Prisma.MaterialUpdateInput, Prisma.MaterialUncheckedUpdateInput>;
    /**
     * Choose, which Material to update.
     */
    where: Prisma.MaterialWhereUniqueInput;
};
/**
 * Material updateMany
 */
export type MaterialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyInput>;
    /**
     * Filter which Materials to update
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * Limit how many Materials to update.
     */
    limit?: number;
};
/**
 * Material updateManyAndReturn
 */
export type MaterialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * The data used to update Materials.
     */
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyInput>;
    /**
     * Filter which Materials to update
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * Limit how many Materials to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Material upsert
 */
export type MaterialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: Prisma.MaterialWhereUniqueInput;
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: Prisma.XOR<Prisma.MaterialCreateInput, Prisma.MaterialUncheckedCreateInput>;
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MaterialUpdateInput, Prisma.MaterialUncheckedUpdateInput>;
};
/**
 * Material delete
 */
export type MaterialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    /**
     * Filter which Material to delete.
     */
    where: Prisma.MaterialWhereUniqueInput;
};
/**
 * Material deleteMany
 */
export type MaterialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * Limit how many Materials to delete.
     */
    limit?: number;
};
/**
 * Material.supplier
 */
export type Material$supplierArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    where?: Prisma.SupplierWhereInput;
};
/**
 * Material.usages
 */
export type Material$usagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialUsage
     */
    select?: Prisma.MaterialUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MaterialUsage
     */
    omit?: Prisma.MaterialUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialUsageInclude<ExtArgs> | null;
    where?: Prisma.MaterialUsageWhereInput;
    orderBy?: Prisma.MaterialUsageOrderByWithRelationInput | Prisma.MaterialUsageOrderByWithRelationInput[];
    cursor?: Prisma.MaterialUsageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialUsageScalarFieldEnum | Prisma.MaterialUsageScalarFieldEnum[];
};
/**
 * Material.adjustments
 */
export type Material$adjustmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: Prisma.StockAdjustmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: Prisma.StockAdjustmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockAdjustmentInclude<ExtArgs> | null;
    where?: Prisma.StockAdjustmentWhereInput;
    orderBy?: Prisma.StockAdjustmentOrderByWithRelationInput | Prisma.StockAdjustmentOrderByWithRelationInput[];
    cursor?: Prisma.StockAdjustmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StockAdjustmentScalarFieldEnum | Prisma.StockAdjustmentScalarFieldEnum[];
};
/**
 * Material.parts
 */
export type Material$partsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: Prisma.PartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Part
     */
    omit?: Prisma.PartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartInclude<ExtArgs> | null;
    where?: Prisma.PartWhereInput;
    orderBy?: Prisma.PartOrderByWithRelationInput | Prisma.PartOrderByWithRelationInput[];
    cursor?: Prisma.PartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartScalarFieldEnum | Prisma.PartScalarFieldEnum[];
};
/**
 * Material.jobMaterials
 */
export type Material$jobMaterialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMaterial
     */
    select?: Prisma.JobMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobMaterial
     */
    omit?: Prisma.JobMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobMaterialInclude<ExtArgs> | null;
    where?: Prisma.JobMaterialWhereInput;
    orderBy?: Prisma.JobMaterialOrderByWithRelationInput | Prisma.JobMaterialOrderByWithRelationInput[];
    cursor?: Prisma.JobMaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JobMaterialScalarFieldEnum | Prisma.JobMaterialScalarFieldEnum[];
};
/**
 * Material without action
 */
export type MaterialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
};
