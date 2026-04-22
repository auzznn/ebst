import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Part
 *
 */
export type PartModel = runtime.Types.Result.DefaultSelection<Prisma.$PartPayload>;
export type AggregatePart = {
    _count: PartCountAggregateOutputType | null;
    _min: PartMinAggregateOutputType | null;
    _max: PartMaxAggregateOutputType | null;
};
export type PartMinAggregateOutputType = {
    id: string | null;
    partNo: string | null;
    description: string | null;
    castingType: $Enums.CastingType | null;
    materialId: string | null;
    drawingRef: string | null;
    createdAt: Date | null;
};
export type PartMaxAggregateOutputType = {
    id: string | null;
    partNo: string | null;
    description: string | null;
    castingType: $Enums.CastingType | null;
    materialId: string | null;
    drawingRef: string | null;
    createdAt: Date | null;
};
export type PartCountAggregateOutputType = {
    id: number;
    partNo: number;
    description: number;
    castingType: number;
    materialId: number;
    drawingRef: number;
    createdAt: number;
    _all: number;
};
export type PartMinAggregateInputType = {
    id?: true;
    partNo?: true;
    description?: true;
    castingType?: true;
    materialId?: true;
    drawingRef?: true;
    createdAt?: true;
};
export type PartMaxAggregateInputType = {
    id?: true;
    partNo?: true;
    description?: true;
    castingType?: true;
    materialId?: true;
    drawingRef?: true;
    createdAt?: true;
};
export type PartCountAggregateInputType = {
    id?: true;
    partNo?: true;
    description?: true;
    castingType?: true;
    materialId?: true;
    drawingRef?: true;
    createdAt?: true;
    _all?: true;
};
export type PartAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: Prisma.PartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Parts to fetch.
     */
    orderBy?: Prisma.PartOrderByWithRelationInput | Prisma.PartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Parts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType;
};
export type GetPartAggregateType<T extends PartAggregateArgs> = {
    [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePart[P]> : Prisma.GetScalarType<T[P], AggregatePart[P]>;
};
export type PartGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartWhereInput;
    orderBy?: Prisma.PartOrderByWithAggregationInput | Prisma.PartOrderByWithAggregationInput[];
    by: Prisma.PartScalarFieldEnum[] | Prisma.PartScalarFieldEnum;
    having?: Prisma.PartScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PartCountAggregateInputType | true;
    _min?: PartMinAggregateInputType;
    _max?: PartMaxAggregateInputType;
};
export type PartGroupByOutputType = {
    id: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    materialId: string | null;
    drawingRef: string | null;
    createdAt: Date;
    _count: PartCountAggregateOutputType | null;
    _min: PartMinAggregateOutputType | null;
    _max: PartMaxAggregateOutputType | null;
};
export type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PartGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PartGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PartGroupByOutputType[P]>;
}>>;
export type PartWhereInput = {
    AND?: Prisma.PartWhereInput | Prisma.PartWhereInput[];
    OR?: Prisma.PartWhereInput[];
    NOT?: Prisma.PartWhereInput | Prisma.PartWhereInput[];
    id?: Prisma.StringFilter<"Part"> | string;
    partNo?: Prisma.StringFilter<"Part"> | string;
    description?: Prisma.StringFilter<"Part"> | string;
    castingType?: Prisma.EnumCastingTypeFilter<"Part"> | $Enums.CastingType;
    materialId?: Prisma.StringNullableFilter<"Part"> | string | null;
    drawingRef?: Prisma.StringNullableFilter<"Part"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Part"> | Date | string;
    material?: Prisma.XOR<Prisma.MaterialNullableScalarRelationFilter, Prisma.MaterialWhereInput> | null;
    routing?: Prisma.XOR<Prisma.RoutingTemplateNullableScalarRelationFilter, Prisma.RoutingTemplateWhereInput> | null;
    lineItems?: Prisma.PoLineItemListRelationFilter;
    jobLists?: Prisma.JobListListRelationFilter;
};
export type PartOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    partNo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    castingType?: Prisma.SortOrder;
    materialId?: Prisma.SortOrderInput | Prisma.SortOrder;
    drawingRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    material?: Prisma.MaterialOrderByWithRelationInput;
    routing?: Prisma.RoutingTemplateOrderByWithRelationInput;
    lineItems?: Prisma.PoLineItemOrderByRelationAggregateInput;
    jobLists?: Prisma.JobListOrderByRelationAggregateInput;
};
export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    partNo?: string;
    AND?: Prisma.PartWhereInput | Prisma.PartWhereInput[];
    OR?: Prisma.PartWhereInput[];
    NOT?: Prisma.PartWhereInput | Prisma.PartWhereInput[];
    description?: Prisma.StringFilter<"Part"> | string;
    castingType?: Prisma.EnumCastingTypeFilter<"Part"> | $Enums.CastingType;
    materialId?: Prisma.StringNullableFilter<"Part"> | string | null;
    drawingRef?: Prisma.StringNullableFilter<"Part"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Part"> | Date | string;
    material?: Prisma.XOR<Prisma.MaterialNullableScalarRelationFilter, Prisma.MaterialWhereInput> | null;
    routing?: Prisma.XOR<Prisma.RoutingTemplateNullableScalarRelationFilter, Prisma.RoutingTemplateWhereInput> | null;
    lineItems?: Prisma.PoLineItemListRelationFilter;
    jobLists?: Prisma.JobListListRelationFilter;
}, "id" | "partNo">;
export type PartOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    partNo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    castingType?: Prisma.SortOrder;
    materialId?: Prisma.SortOrderInput | Prisma.SortOrder;
    drawingRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PartCountOrderByAggregateInput;
    _max?: Prisma.PartMaxOrderByAggregateInput;
    _min?: Prisma.PartMinOrderByAggregateInput;
};
export type PartScalarWhereWithAggregatesInput = {
    AND?: Prisma.PartScalarWhereWithAggregatesInput | Prisma.PartScalarWhereWithAggregatesInput[];
    OR?: Prisma.PartScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PartScalarWhereWithAggregatesInput | Prisma.PartScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Part"> | string;
    partNo?: Prisma.StringWithAggregatesFilter<"Part"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Part"> | string;
    castingType?: Prisma.EnumCastingTypeWithAggregatesFilter<"Part"> | $Enums.CastingType;
    materialId?: Prisma.StringNullableWithAggregatesFilter<"Part"> | string | null;
    drawingRef?: Prisma.StringNullableWithAggregatesFilter<"Part"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Part"> | Date | string;
};
export type PartCreateInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    drawingRef?: string | null;
    createdAt?: Date | string;
    material?: Prisma.MaterialCreateNestedOneWithoutPartsInput;
    routing?: Prisma.RoutingTemplateCreateNestedOneWithoutPartInput;
    lineItems?: Prisma.PoLineItemCreateNestedManyWithoutPartInput;
    jobLists?: Prisma.JobListCreateNestedManyWithoutPartInput;
};
export type PartUncheckedCreateInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    materialId?: string | null;
    drawingRef?: string | null;
    createdAt?: Date | string;
    routing?: Prisma.RoutingTemplateUncheckedCreateNestedOneWithoutPartInput;
    lineItems?: Prisma.PoLineItemUncheckedCreateNestedManyWithoutPartInput;
    jobLists?: Prisma.JobListUncheckedCreateNestedManyWithoutPartInput;
};
export type PartUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.MaterialUpdateOneWithoutPartsNestedInput;
    routing?: Prisma.RoutingTemplateUpdateOneWithoutPartNestedInput;
    lineItems?: Prisma.PoLineItemUpdateManyWithoutPartNestedInput;
    jobLists?: Prisma.JobListUpdateManyWithoutPartNestedInput;
};
export type PartUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    materialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    routing?: Prisma.RoutingTemplateUncheckedUpdateOneWithoutPartNestedInput;
    lineItems?: Prisma.PoLineItemUncheckedUpdateManyWithoutPartNestedInput;
    jobLists?: Prisma.JobListUncheckedUpdateManyWithoutPartNestedInput;
};
export type PartCreateManyInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    materialId?: string | null;
    drawingRef?: string | null;
    createdAt?: Date | string;
};
export type PartUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    materialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartScalarRelationFilter = {
    is?: Prisma.PartWhereInput;
    isNot?: Prisma.PartWhereInput;
};
export type PartCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partNo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    castingType?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    drawingRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PartMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partNo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    castingType?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    drawingRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PartMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partNo?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    castingType?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    drawingRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PartNullableScalarRelationFilter = {
    is?: Prisma.PartWhereInput | null;
    isNot?: Prisma.PartWhereInput | null;
};
export type PartListRelationFilter = {
    every?: Prisma.PartWhereInput;
    some?: Prisma.PartWhereInput;
    none?: Prisma.PartWhereInput;
};
export type PartOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PartCreateNestedOneWithoutLineItemsInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutLineItemsInput, Prisma.PartUncheckedCreateWithoutLineItemsInput>;
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutLineItemsInput;
    connect?: Prisma.PartWhereUniqueInput;
};
export type PartUpdateOneRequiredWithoutLineItemsNestedInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutLineItemsInput, Prisma.PartUncheckedCreateWithoutLineItemsInput>;
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutLineItemsInput;
    upsert?: Prisma.PartUpsertWithoutLineItemsInput;
    connect?: Prisma.PartWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PartUpdateToOneWithWhereWithoutLineItemsInput, Prisma.PartUpdateWithoutLineItemsInput>, Prisma.PartUncheckedUpdateWithoutLineItemsInput>;
};
export type EnumCastingTypeFieldUpdateOperationsInput = {
    set?: $Enums.CastingType;
};
export type PartCreateNestedOneWithoutRoutingInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutRoutingInput, Prisma.PartUncheckedCreateWithoutRoutingInput>;
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutRoutingInput;
    connect?: Prisma.PartWhereUniqueInput;
};
export type PartUpdateOneRequiredWithoutRoutingNestedInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutRoutingInput, Prisma.PartUncheckedCreateWithoutRoutingInput>;
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutRoutingInput;
    upsert?: Prisma.PartUpsertWithoutRoutingInput;
    connect?: Prisma.PartWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PartUpdateToOneWithWhereWithoutRoutingInput, Prisma.PartUpdateWithoutRoutingInput>, Prisma.PartUncheckedUpdateWithoutRoutingInput>;
};
export type PartCreateNestedOneWithoutJobListsInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutJobListsInput, Prisma.PartUncheckedCreateWithoutJobListsInput>;
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutJobListsInput;
    connect?: Prisma.PartWhereUniqueInput;
};
export type PartUpdateOneWithoutJobListsNestedInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutJobListsInput, Prisma.PartUncheckedCreateWithoutJobListsInput>;
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutJobListsInput;
    upsert?: Prisma.PartUpsertWithoutJobListsInput;
    disconnect?: Prisma.PartWhereInput | boolean;
    delete?: Prisma.PartWhereInput | boolean;
    connect?: Prisma.PartWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PartUpdateToOneWithWhereWithoutJobListsInput, Prisma.PartUpdateWithoutJobListsInput>, Prisma.PartUncheckedUpdateWithoutJobListsInput>;
};
export type PartCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutMaterialInput, Prisma.PartUncheckedCreateWithoutMaterialInput> | Prisma.PartCreateWithoutMaterialInput[] | Prisma.PartUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutMaterialInput | Prisma.PartCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.PartCreateManyMaterialInputEnvelope;
    connect?: Prisma.PartWhereUniqueInput | Prisma.PartWhereUniqueInput[];
};
export type PartUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutMaterialInput, Prisma.PartUncheckedCreateWithoutMaterialInput> | Prisma.PartCreateWithoutMaterialInput[] | Prisma.PartUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutMaterialInput | Prisma.PartCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.PartCreateManyMaterialInputEnvelope;
    connect?: Prisma.PartWhereUniqueInput | Prisma.PartWhereUniqueInput[];
};
export type PartUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutMaterialInput, Prisma.PartUncheckedCreateWithoutMaterialInput> | Prisma.PartCreateWithoutMaterialInput[] | Prisma.PartUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutMaterialInput | Prisma.PartCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.PartUpsertWithWhereUniqueWithoutMaterialInput | Prisma.PartUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.PartCreateManyMaterialInputEnvelope;
    set?: Prisma.PartWhereUniqueInput | Prisma.PartWhereUniqueInput[];
    disconnect?: Prisma.PartWhereUniqueInput | Prisma.PartWhereUniqueInput[];
    delete?: Prisma.PartWhereUniqueInput | Prisma.PartWhereUniqueInput[];
    connect?: Prisma.PartWhereUniqueInput | Prisma.PartWhereUniqueInput[];
    update?: Prisma.PartUpdateWithWhereUniqueWithoutMaterialInput | Prisma.PartUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.PartUpdateManyWithWhereWithoutMaterialInput | Prisma.PartUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.PartScalarWhereInput | Prisma.PartScalarWhereInput[];
};
export type PartUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutMaterialInput, Prisma.PartUncheckedCreateWithoutMaterialInput> | Prisma.PartCreateWithoutMaterialInput[] | Prisma.PartUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutMaterialInput | Prisma.PartCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.PartUpsertWithWhereUniqueWithoutMaterialInput | Prisma.PartUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.PartCreateManyMaterialInputEnvelope;
    set?: Prisma.PartWhereUniqueInput | Prisma.PartWhereUniqueInput[];
    disconnect?: Prisma.PartWhereUniqueInput | Prisma.PartWhereUniqueInput[];
    delete?: Prisma.PartWhereUniqueInput | Prisma.PartWhereUniqueInput[];
    connect?: Prisma.PartWhereUniqueInput | Prisma.PartWhereUniqueInput[];
    update?: Prisma.PartUpdateWithWhereUniqueWithoutMaterialInput | Prisma.PartUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.PartUpdateManyWithWhereWithoutMaterialInput | Prisma.PartUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.PartScalarWhereInput | Prisma.PartScalarWhereInput[];
};
export type PartCreateWithoutLineItemsInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    drawingRef?: string | null;
    createdAt?: Date | string;
    material?: Prisma.MaterialCreateNestedOneWithoutPartsInput;
    routing?: Prisma.RoutingTemplateCreateNestedOneWithoutPartInput;
    jobLists?: Prisma.JobListCreateNestedManyWithoutPartInput;
};
export type PartUncheckedCreateWithoutLineItemsInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    materialId?: string | null;
    drawingRef?: string | null;
    createdAt?: Date | string;
    routing?: Prisma.RoutingTemplateUncheckedCreateNestedOneWithoutPartInput;
    jobLists?: Prisma.JobListUncheckedCreateNestedManyWithoutPartInput;
};
export type PartCreateOrConnectWithoutLineItemsInput = {
    where: Prisma.PartWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartCreateWithoutLineItemsInput, Prisma.PartUncheckedCreateWithoutLineItemsInput>;
};
export type PartUpsertWithoutLineItemsInput = {
    update: Prisma.XOR<Prisma.PartUpdateWithoutLineItemsInput, Prisma.PartUncheckedUpdateWithoutLineItemsInput>;
    create: Prisma.XOR<Prisma.PartCreateWithoutLineItemsInput, Prisma.PartUncheckedCreateWithoutLineItemsInput>;
    where?: Prisma.PartWhereInput;
};
export type PartUpdateToOneWithWhereWithoutLineItemsInput = {
    where?: Prisma.PartWhereInput;
    data: Prisma.XOR<Prisma.PartUpdateWithoutLineItemsInput, Prisma.PartUncheckedUpdateWithoutLineItemsInput>;
};
export type PartUpdateWithoutLineItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.MaterialUpdateOneWithoutPartsNestedInput;
    routing?: Prisma.RoutingTemplateUpdateOneWithoutPartNestedInput;
    jobLists?: Prisma.JobListUpdateManyWithoutPartNestedInput;
};
export type PartUncheckedUpdateWithoutLineItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    materialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    routing?: Prisma.RoutingTemplateUncheckedUpdateOneWithoutPartNestedInput;
    jobLists?: Prisma.JobListUncheckedUpdateManyWithoutPartNestedInput;
};
export type PartCreateWithoutRoutingInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    drawingRef?: string | null;
    createdAt?: Date | string;
    material?: Prisma.MaterialCreateNestedOneWithoutPartsInput;
    lineItems?: Prisma.PoLineItemCreateNestedManyWithoutPartInput;
    jobLists?: Prisma.JobListCreateNestedManyWithoutPartInput;
};
export type PartUncheckedCreateWithoutRoutingInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    materialId?: string | null;
    drawingRef?: string | null;
    createdAt?: Date | string;
    lineItems?: Prisma.PoLineItemUncheckedCreateNestedManyWithoutPartInput;
    jobLists?: Prisma.JobListUncheckedCreateNestedManyWithoutPartInput;
};
export type PartCreateOrConnectWithoutRoutingInput = {
    where: Prisma.PartWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartCreateWithoutRoutingInput, Prisma.PartUncheckedCreateWithoutRoutingInput>;
};
export type PartUpsertWithoutRoutingInput = {
    update: Prisma.XOR<Prisma.PartUpdateWithoutRoutingInput, Prisma.PartUncheckedUpdateWithoutRoutingInput>;
    create: Prisma.XOR<Prisma.PartCreateWithoutRoutingInput, Prisma.PartUncheckedCreateWithoutRoutingInput>;
    where?: Prisma.PartWhereInput;
};
export type PartUpdateToOneWithWhereWithoutRoutingInput = {
    where?: Prisma.PartWhereInput;
    data: Prisma.XOR<Prisma.PartUpdateWithoutRoutingInput, Prisma.PartUncheckedUpdateWithoutRoutingInput>;
};
export type PartUpdateWithoutRoutingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.MaterialUpdateOneWithoutPartsNestedInput;
    lineItems?: Prisma.PoLineItemUpdateManyWithoutPartNestedInput;
    jobLists?: Prisma.JobListUpdateManyWithoutPartNestedInput;
};
export type PartUncheckedUpdateWithoutRoutingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    materialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineItems?: Prisma.PoLineItemUncheckedUpdateManyWithoutPartNestedInput;
    jobLists?: Prisma.JobListUncheckedUpdateManyWithoutPartNestedInput;
};
export type PartCreateWithoutJobListsInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    drawingRef?: string | null;
    createdAt?: Date | string;
    material?: Prisma.MaterialCreateNestedOneWithoutPartsInput;
    routing?: Prisma.RoutingTemplateCreateNestedOneWithoutPartInput;
    lineItems?: Prisma.PoLineItemCreateNestedManyWithoutPartInput;
};
export type PartUncheckedCreateWithoutJobListsInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    materialId?: string | null;
    drawingRef?: string | null;
    createdAt?: Date | string;
    routing?: Prisma.RoutingTemplateUncheckedCreateNestedOneWithoutPartInput;
    lineItems?: Prisma.PoLineItemUncheckedCreateNestedManyWithoutPartInput;
};
export type PartCreateOrConnectWithoutJobListsInput = {
    where: Prisma.PartWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartCreateWithoutJobListsInput, Prisma.PartUncheckedCreateWithoutJobListsInput>;
};
export type PartUpsertWithoutJobListsInput = {
    update: Prisma.XOR<Prisma.PartUpdateWithoutJobListsInput, Prisma.PartUncheckedUpdateWithoutJobListsInput>;
    create: Prisma.XOR<Prisma.PartCreateWithoutJobListsInput, Prisma.PartUncheckedCreateWithoutJobListsInput>;
    where?: Prisma.PartWhereInput;
};
export type PartUpdateToOneWithWhereWithoutJobListsInput = {
    where?: Prisma.PartWhereInput;
    data: Prisma.XOR<Prisma.PartUpdateWithoutJobListsInput, Prisma.PartUncheckedUpdateWithoutJobListsInput>;
};
export type PartUpdateWithoutJobListsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.MaterialUpdateOneWithoutPartsNestedInput;
    routing?: Prisma.RoutingTemplateUpdateOneWithoutPartNestedInput;
    lineItems?: Prisma.PoLineItemUpdateManyWithoutPartNestedInput;
};
export type PartUncheckedUpdateWithoutJobListsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    materialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    routing?: Prisma.RoutingTemplateUncheckedUpdateOneWithoutPartNestedInput;
    lineItems?: Prisma.PoLineItemUncheckedUpdateManyWithoutPartNestedInput;
};
export type PartCreateWithoutMaterialInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    drawingRef?: string | null;
    createdAt?: Date | string;
    routing?: Prisma.RoutingTemplateCreateNestedOneWithoutPartInput;
    lineItems?: Prisma.PoLineItemCreateNestedManyWithoutPartInput;
    jobLists?: Prisma.JobListCreateNestedManyWithoutPartInput;
};
export type PartUncheckedCreateWithoutMaterialInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    drawingRef?: string | null;
    createdAt?: Date | string;
    routing?: Prisma.RoutingTemplateUncheckedCreateNestedOneWithoutPartInput;
    lineItems?: Prisma.PoLineItemUncheckedCreateNestedManyWithoutPartInput;
    jobLists?: Prisma.JobListUncheckedCreateNestedManyWithoutPartInput;
};
export type PartCreateOrConnectWithoutMaterialInput = {
    where: Prisma.PartWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartCreateWithoutMaterialInput, Prisma.PartUncheckedCreateWithoutMaterialInput>;
};
export type PartCreateManyMaterialInputEnvelope = {
    data: Prisma.PartCreateManyMaterialInput | Prisma.PartCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type PartUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.PartWhereUniqueInput;
    update: Prisma.XOR<Prisma.PartUpdateWithoutMaterialInput, Prisma.PartUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.PartCreateWithoutMaterialInput, Prisma.PartUncheckedCreateWithoutMaterialInput>;
};
export type PartUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.PartWhereUniqueInput;
    data: Prisma.XOR<Prisma.PartUpdateWithoutMaterialInput, Prisma.PartUncheckedUpdateWithoutMaterialInput>;
};
export type PartUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.PartScalarWhereInput;
    data: Prisma.XOR<Prisma.PartUpdateManyMutationInput, Prisma.PartUncheckedUpdateManyWithoutMaterialInput>;
};
export type PartScalarWhereInput = {
    AND?: Prisma.PartScalarWhereInput | Prisma.PartScalarWhereInput[];
    OR?: Prisma.PartScalarWhereInput[];
    NOT?: Prisma.PartScalarWhereInput | Prisma.PartScalarWhereInput[];
    id?: Prisma.StringFilter<"Part"> | string;
    partNo?: Prisma.StringFilter<"Part"> | string;
    description?: Prisma.StringFilter<"Part"> | string;
    castingType?: Prisma.EnumCastingTypeFilter<"Part"> | $Enums.CastingType;
    materialId?: Prisma.StringNullableFilter<"Part"> | string | null;
    drawingRef?: Prisma.StringNullableFilter<"Part"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Part"> | Date | string;
};
export type PartCreateManyMaterialInput = {
    id?: string;
    partNo: string;
    description: string;
    castingType: $Enums.CastingType;
    drawingRef?: string | null;
    createdAt?: Date | string;
};
export type PartUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    routing?: Prisma.RoutingTemplateUpdateOneWithoutPartNestedInput;
    lineItems?: Prisma.PoLineItemUpdateManyWithoutPartNestedInput;
    jobLists?: Prisma.JobListUpdateManyWithoutPartNestedInput;
};
export type PartUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    routing?: Prisma.RoutingTemplateUncheckedUpdateOneWithoutPartNestedInput;
    lineItems?: Prisma.PoLineItemUncheckedUpdateManyWithoutPartNestedInput;
    jobLists?: Prisma.JobListUncheckedUpdateManyWithoutPartNestedInput;
};
export type PartUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partNo?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    castingType?: Prisma.EnumCastingTypeFieldUpdateOperationsInput | $Enums.CastingType;
    drawingRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PartCountOutputType
 */
export type PartCountOutputType = {
    lineItems: number;
    jobLists: number;
};
export type PartCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lineItems?: boolean | PartCountOutputTypeCountLineItemsArgs;
    jobLists?: boolean | PartCountOutputTypeCountJobListsArgs;
};
/**
 * PartCountOutputType without action
 */
export type PartCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartCountOutputType
     */
    select?: Prisma.PartCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PartCountOutputType without action
 */
export type PartCountOutputTypeCountLineItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoLineItemWhereInput;
};
/**
 * PartCountOutputType without action
 */
export type PartCountOutputTypeCountJobListsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobListWhereInput;
};
export type PartSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partNo?: boolean;
    description?: boolean;
    castingType?: boolean;
    materialId?: boolean;
    drawingRef?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.Part$materialArgs<ExtArgs>;
    routing?: boolean | Prisma.Part$routingArgs<ExtArgs>;
    lineItems?: boolean | Prisma.Part$lineItemsArgs<ExtArgs>;
    jobLists?: boolean | Prisma.Part$jobListsArgs<ExtArgs>;
    _count?: boolean | Prisma.PartCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["part"]>;
export type PartSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partNo?: boolean;
    description?: boolean;
    castingType?: boolean;
    materialId?: boolean;
    drawingRef?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.Part$materialArgs<ExtArgs>;
}, ExtArgs["result"]["part"]>;
export type PartSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partNo?: boolean;
    description?: boolean;
    castingType?: boolean;
    materialId?: boolean;
    drawingRef?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.Part$materialArgs<ExtArgs>;
}, ExtArgs["result"]["part"]>;
export type PartSelectScalar = {
    id?: boolean;
    partNo?: boolean;
    description?: boolean;
    castingType?: boolean;
    materialId?: boolean;
    drawingRef?: boolean;
    createdAt?: boolean;
};
export type PartOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "partNo" | "description" | "castingType" | "materialId" | "drawingRef" | "createdAt", ExtArgs["result"]["part"]>;
export type PartInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.Part$materialArgs<ExtArgs>;
    routing?: boolean | Prisma.Part$routingArgs<ExtArgs>;
    lineItems?: boolean | Prisma.Part$lineItemsArgs<ExtArgs>;
    jobLists?: boolean | Prisma.Part$jobListsArgs<ExtArgs>;
    _count?: boolean | Prisma.PartCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PartIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.Part$materialArgs<ExtArgs>;
};
export type PartIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.Part$materialArgs<ExtArgs>;
};
export type $PartPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Part";
    objects: {
        material: Prisma.$MaterialPayload<ExtArgs> | null;
        routing: Prisma.$RoutingTemplatePayload<ExtArgs> | null;
        lineItems: Prisma.$PoLineItemPayload<ExtArgs>[];
        jobLists: Prisma.$JobListPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        partNo: string;
        description: string;
        castingType: $Enums.CastingType;
        materialId: string | null;
        drawingRef: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["part"]>;
    composites: {};
};
export type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PartPayload, S>;
export type PartCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PartCountAggregateInputType | true;
};
export interface PartDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Part'];
        meta: {
            name: 'Part';
        };
    };
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartFindUniqueArgs>(args: Prisma.SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Part that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartFindFirstArgs>(args?: Prisma.SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     *
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PartFindManyArgs>(args?: Prisma.SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     *
     */
    create<T extends PartCreateArgs>(args: Prisma.SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Parts.
     * @param {PartCreateManyArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PartCreateManyArgs>(args?: Prisma.SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Parts and returns the data saved in the database.
     * @param {PartCreateManyAndReturnArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PartCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     *
     */
    delete<T extends PartDeleteArgs>(args: Prisma.SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PartUpdateArgs>(args: Prisma.SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PartDeleteManyArgs>(args?: Prisma.SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PartUpdateManyArgs>(args: Prisma.SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Parts and returns the data updated in the database.
     * @param {PartUpdateManyAndReturnArgs} args - Arguments to update many Parts.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.updateManyAndReturn({
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
    updateManyAndReturn<T extends PartUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
     */
    upsert<T extends PartUpsertArgs>(args: Prisma.SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(args?: Prisma.Subset<T, PartCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PartCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartAggregateArgs>(args: Prisma.Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>;
    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PartGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PartGroupByArgs['orderBy'];
    } : {
        orderBy?: PartGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Part model
     */
    readonly fields: PartFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Part.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PartClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    material<T extends Prisma.Part$materialArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Part$materialArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    routing<T extends Prisma.Part$routingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Part$routingArgs<ExtArgs>>): Prisma.Prisma__RoutingTemplateClient<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lineItems<T extends Prisma.Part$lineItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Part$lineItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    jobLists<T extends Prisma.Part$jobListsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Part$jobListsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Part model
 */
export interface PartFieldRefs {
    readonly id: Prisma.FieldRef<"Part", 'String'>;
    readonly partNo: Prisma.FieldRef<"Part", 'String'>;
    readonly description: Prisma.FieldRef<"Part", 'String'>;
    readonly castingType: Prisma.FieldRef<"Part", 'CastingType'>;
    readonly materialId: Prisma.FieldRef<"Part", 'String'>;
    readonly drawingRef: Prisma.FieldRef<"Part", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Part", 'DateTime'>;
}
/**
 * Part findUnique
 */
export type PartFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Part to fetch.
     */
    where: Prisma.PartWhereUniqueInput;
};
/**
 * Part findUniqueOrThrow
 */
export type PartFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Part to fetch.
     */
    where: Prisma.PartWhereUniqueInput;
};
/**
 * Part findFirst
 */
export type PartFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Part to fetch.
     */
    where?: Prisma.PartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Parts to fetch.
     */
    orderBy?: Prisma.PartOrderByWithRelationInput | Prisma.PartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Parts.
     */
    cursor?: Prisma.PartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Parts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Parts.
     */
    distinct?: Prisma.PartScalarFieldEnum | Prisma.PartScalarFieldEnum[];
};
/**
 * Part findFirstOrThrow
 */
export type PartFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Part to fetch.
     */
    where?: Prisma.PartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Parts to fetch.
     */
    orderBy?: Prisma.PartOrderByWithRelationInput | Prisma.PartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Parts.
     */
    cursor?: Prisma.PartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Parts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Parts.
     */
    distinct?: Prisma.PartScalarFieldEnum | Prisma.PartScalarFieldEnum[];
};
/**
 * Part findMany
 */
export type PartFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Parts to fetch.
     */
    where?: Prisma.PartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Parts to fetch.
     */
    orderBy?: Prisma.PartOrderByWithRelationInput | Prisma.PartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Parts.
     */
    cursor?: Prisma.PartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Parts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Parts.
     */
    distinct?: Prisma.PartScalarFieldEnum | Prisma.PartScalarFieldEnum[];
};
/**
 * Part create
 */
export type PartCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Part.
     */
    data: Prisma.XOR<Prisma.PartCreateInput, Prisma.PartUncheckedCreateInput>;
};
/**
 * Part createMany
 */
export type PartCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: Prisma.PartCreateManyInput | Prisma.PartCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Part createManyAndReturn
 */
export type PartCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: Prisma.PartSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Part
     */
    omit?: Prisma.PartOmit<ExtArgs> | null;
    /**
     * The data used to create many Parts.
     */
    data: Prisma.PartCreateManyInput | Prisma.PartCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Part update
 */
export type PartUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Part.
     */
    data: Prisma.XOR<Prisma.PartUpdateInput, Prisma.PartUncheckedUpdateInput>;
    /**
     * Choose, which Part to update.
     */
    where: Prisma.PartWhereUniqueInput;
};
/**
 * Part updateMany
 */
export type PartUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: Prisma.XOR<Prisma.PartUpdateManyMutationInput, Prisma.PartUncheckedUpdateManyInput>;
    /**
     * Filter which Parts to update
     */
    where?: Prisma.PartWhereInput;
    /**
     * Limit how many Parts to update.
     */
    limit?: number;
};
/**
 * Part updateManyAndReturn
 */
export type PartUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: Prisma.PartSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Part
     */
    omit?: Prisma.PartOmit<ExtArgs> | null;
    /**
     * The data used to update Parts.
     */
    data: Prisma.XOR<Prisma.PartUpdateManyMutationInput, Prisma.PartUncheckedUpdateManyInput>;
    /**
     * Filter which Parts to update
     */
    where?: Prisma.PartWhereInput;
    /**
     * Limit how many Parts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Part upsert
 */
export type PartUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: Prisma.PartWhereUniqueInput;
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: Prisma.XOR<Prisma.PartCreateInput, Prisma.PartUncheckedCreateInput>;
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PartUpdateInput, Prisma.PartUncheckedUpdateInput>;
};
/**
 * Part delete
 */
export type PartDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Part to delete.
     */
    where: Prisma.PartWhereUniqueInput;
};
/**
 * Part deleteMany
 */
export type PartDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: Prisma.PartWhereInput;
    /**
     * Limit how many Parts to delete.
     */
    limit?: number;
};
/**
 * Part.material
 */
export type Part$materialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.MaterialWhereInput;
};
/**
 * Part.routing
 */
export type Part$routingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutingTemplate
     */
    select?: Prisma.RoutingTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoutingTemplate
     */
    omit?: Prisma.RoutingTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoutingTemplateInclude<ExtArgs> | null;
    where?: Prisma.RoutingTemplateWhereInput;
};
/**
 * Part.lineItems
 */
export type Part$lineItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: Prisma.PoLineItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: Prisma.PoLineItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PoLineItemInclude<ExtArgs> | null;
    where?: Prisma.PoLineItemWhereInput;
    orderBy?: Prisma.PoLineItemOrderByWithRelationInput | Prisma.PoLineItemOrderByWithRelationInput[];
    cursor?: Prisma.PoLineItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PoLineItemScalarFieldEnum | Prisma.PoLineItemScalarFieldEnum[];
};
/**
 * Part.jobLists
 */
export type Part$jobListsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobList
     */
    select?: Prisma.JobListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobList
     */
    omit?: Prisma.JobListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobListInclude<ExtArgs> | null;
    where?: Prisma.JobListWhereInput;
    orderBy?: Prisma.JobListOrderByWithRelationInput | Prisma.JobListOrderByWithRelationInput[];
    cursor?: Prisma.JobListWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JobListScalarFieldEnum | Prisma.JobListScalarFieldEnum[];
};
/**
 * Part without action
 */
export type PartDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
