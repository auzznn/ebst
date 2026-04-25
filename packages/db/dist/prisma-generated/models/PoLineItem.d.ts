import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PoLineItem
 *
 */
export type PoLineItemModel = runtime.Types.Result.DefaultSelection<Prisma.$PoLineItemPayload>;
export type AggregatePoLineItem = {
    _count: PoLineItemCountAggregateOutputType | null;
    _avg: PoLineItemAvgAggregateOutputType | null;
    _sum: PoLineItemSumAggregateOutputType | null;
    _min: PoLineItemMinAggregateOutputType | null;
    _max: PoLineItemMaxAggregateOutputType | null;
};
export type PoLineItemAvgAggregateOutputType = {
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
};
export type PoLineItemSumAggregateOutputType = {
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
};
export type PoLineItemMinAggregateOutputType = {
    id: string | null;
    purchaseOrderId: string | null;
    partId: string | null;
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
};
export type PoLineItemMaxAggregateOutputType = {
    id: string | null;
    purchaseOrderId: string | null;
    partId: string | null;
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
};
export type PoLineItemCountAggregateOutputType = {
    id: number;
    purchaseOrderId: number;
    partId: number;
    quantity: number;
    unitPrice: number;
    _all: number;
};
export type PoLineItemAvgAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
};
export type PoLineItemSumAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
};
export type PoLineItemMinAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    partId?: true;
    quantity?: true;
    unitPrice?: true;
};
export type PoLineItemMaxAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    partId?: true;
    quantity?: true;
    unitPrice?: true;
};
export type PoLineItemCountAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    partId?: true;
    quantity?: true;
    unitPrice?: true;
    _all?: true;
};
export type PoLineItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PoLineItem to aggregate.
     */
    where?: Prisma.PoLineItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PoLineItems to fetch.
     */
    orderBy?: Prisma.PoLineItemOrderByWithRelationInput | Prisma.PoLineItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PoLineItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PoLineItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PoLineItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PoLineItems
    **/
    _count?: true | PoLineItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PoLineItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PoLineItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PoLineItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PoLineItemMaxAggregateInputType;
};
export type GetPoLineItemAggregateType<T extends PoLineItemAggregateArgs> = {
    [P in keyof T & keyof AggregatePoLineItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePoLineItem[P]> : Prisma.GetScalarType<T[P], AggregatePoLineItem[P]>;
};
export type PoLineItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoLineItemWhereInput;
    orderBy?: Prisma.PoLineItemOrderByWithAggregationInput | Prisma.PoLineItemOrderByWithAggregationInput[];
    by: Prisma.PoLineItemScalarFieldEnum[] | Prisma.PoLineItemScalarFieldEnum;
    having?: Prisma.PoLineItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PoLineItemCountAggregateInputType | true;
    _avg?: PoLineItemAvgAggregateInputType;
    _sum?: PoLineItemSumAggregateInputType;
    _min?: PoLineItemMinAggregateInputType;
    _max?: PoLineItemMaxAggregateInputType;
};
export type PoLineItemGroupByOutputType = {
    id: string;
    purchaseOrderId: string;
    partId: string;
    quantity: number;
    unitPrice: runtime.Decimal;
    _count: PoLineItemCountAggregateOutputType | null;
    _avg: PoLineItemAvgAggregateOutputType | null;
    _sum: PoLineItemSumAggregateOutputType | null;
    _min: PoLineItemMinAggregateOutputType | null;
    _max: PoLineItemMaxAggregateOutputType | null;
};
export type GetPoLineItemGroupByPayload<T extends PoLineItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PoLineItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PoLineItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PoLineItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PoLineItemGroupByOutputType[P]>;
}>>;
export type PoLineItemWhereInput = {
    AND?: Prisma.PoLineItemWhereInput | Prisma.PoLineItemWhereInput[];
    OR?: Prisma.PoLineItemWhereInput[];
    NOT?: Prisma.PoLineItemWhereInput | Prisma.PoLineItemWhereInput[];
    id?: Prisma.StringFilter<"PoLineItem"> | string;
    purchaseOrderId?: Prisma.StringFilter<"PoLineItem"> | string;
    partId?: Prisma.StringFilter<"PoLineItem"> | string;
    quantity?: Prisma.IntFilter<"PoLineItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"PoLineItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.XOR<Prisma.JobListNullableScalarRelationFilter, Prisma.JobListWhereInput> | null;
    part?: Prisma.XOR<Prisma.PartScalarRelationFilter, Prisma.PartWhereInput>;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderScalarRelationFilter, Prisma.PurchaseOrderWhereInput>;
};
export type PoLineItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    jobList?: Prisma.JobListOrderByWithRelationInput;
    part?: Prisma.PartOrderByWithRelationInput;
    purchaseOrder?: Prisma.PurchaseOrderOrderByWithRelationInput;
};
export type PoLineItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PoLineItemWhereInput | Prisma.PoLineItemWhereInput[];
    OR?: Prisma.PoLineItemWhereInput[];
    NOT?: Prisma.PoLineItemWhereInput | Prisma.PoLineItemWhereInput[];
    purchaseOrderId?: Prisma.StringFilter<"PoLineItem"> | string;
    partId?: Prisma.StringFilter<"PoLineItem"> | string;
    quantity?: Prisma.IntFilter<"PoLineItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"PoLineItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.XOR<Prisma.JobListNullableScalarRelationFilter, Prisma.JobListWhereInput> | null;
    part?: Prisma.XOR<Prisma.PartScalarRelationFilter, Prisma.PartWhereInput>;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderScalarRelationFilter, Prisma.PurchaseOrderWhereInput>;
}, "id">;
export type PoLineItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    _count?: Prisma.PoLineItemCountOrderByAggregateInput;
    _avg?: Prisma.PoLineItemAvgOrderByAggregateInput;
    _max?: Prisma.PoLineItemMaxOrderByAggregateInput;
    _min?: Prisma.PoLineItemMinOrderByAggregateInput;
    _sum?: Prisma.PoLineItemSumOrderByAggregateInput;
};
export type PoLineItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.PoLineItemScalarWhereWithAggregatesInput | Prisma.PoLineItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.PoLineItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PoLineItemScalarWhereWithAggregatesInput | Prisma.PoLineItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PoLineItem"> | string;
    purchaseOrderId?: Prisma.StringWithAggregatesFilter<"PoLineItem"> | string;
    partId?: Prisma.StringWithAggregatesFilter<"PoLineItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"PoLineItem"> | number;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"PoLineItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemCreateInput = {
    id?: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListCreateNestedOneWithoutLineItemInput;
    part: Prisma.PartCreateNestedOneWithoutLineItemsInput;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutLineItemsInput;
};
export type PoLineItemUncheckedCreateInput = {
    id?: string;
    purchaseOrderId: string;
    partId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUncheckedCreateNestedOneWithoutLineItemInput;
};
export type PoLineItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUpdateOneWithoutLineItemNestedInput;
    part?: Prisma.PartUpdateOneRequiredWithoutLineItemsNestedInput;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutLineItemsNestedInput;
};
export type PoLineItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUncheckedUpdateOneWithoutLineItemNestedInput;
};
export type PoLineItemCreateManyInput = {
    id?: string;
    purchaseOrderId: string;
    partId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemListRelationFilter = {
    every?: Prisma.PoLineItemWhereInput;
    some?: Prisma.PoLineItemWhereInput;
    none?: Prisma.PoLineItemWhereInput;
};
export type PoLineItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PoLineItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
};
export type PoLineItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
};
export type PoLineItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
};
export type PoLineItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
};
export type PoLineItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
};
export type PoLineItemNullableScalarRelationFilter = {
    is?: Prisma.PoLineItemWhereInput | null;
    isNot?: Prisma.PoLineItemWhereInput | null;
};
export type PoLineItemCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.PoLineItemCreateWithoutPurchaseOrderInput, Prisma.PoLineItemUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PoLineItemCreateWithoutPurchaseOrderInput[] | Prisma.PoLineItemUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PoLineItemCreateOrConnectWithoutPurchaseOrderInput | Prisma.PoLineItemCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.PoLineItemCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
};
export type PoLineItemUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.PoLineItemCreateWithoutPurchaseOrderInput, Prisma.PoLineItemUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PoLineItemCreateWithoutPurchaseOrderInput[] | Prisma.PoLineItemUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PoLineItemCreateOrConnectWithoutPurchaseOrderInput | Prisma.PoLineItemCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.PoLineItemCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
};
export type PoLineItemUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.PoLineItemCreateWithoutPurchaseOrderInput, Prisma.PoLineItemUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PoLineItemCreateWithoutPurchaseOrderInput[] | Prisma.PoLineItemUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PoLineItemCreateOrConnectWithoutPurchaseOrderInput | Prisma.PoLineItemCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.PoLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PoLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.PoLineItemCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    disconnect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    delete?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    connect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    update?: Prisma.PoLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PoLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.PoLineItemUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.PoLineItemUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.PoLineItemScalarWhereInput | Prisma.PoLineItemScalarWhereInput[];
};
export type PoLineItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.PoLineItemCreateWithoutPurchaseOrderInput, Prisma.PoLineItemUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PoLineItemCreateWithoutPurchaseOrderInput[] | Prisma.PoLineItemUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PoLineItemCreateOrConnectWithoutPurchaseOrderInput | Prisma.PoLineItemCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.PoLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PoLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.PoLineItemCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    disconnect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    delete?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    connect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    update?: Prisma.PoLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PoLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.PoLineItemUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.PoLineItemUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.PoLineItemScalarWhereInput | Prisma.PoLineItemScalarWhereInput[];
};
export type PoLineItemCreateNestedManyWithoutPartInput = {
    create?: Prisma.XOR<Prisma.PoLineItemCreateWithoutPartInput, Prisma.PoLineItemUncheckedCreateWithoutPartInput> | Prisma.PoLineItemCreateWithoutPartInput[] | Prisma.PoLineItemUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PoLineItemCreateOrConnectWithoutPartInput | Prisma.PoLineItemCreateOrConnectWithoutPartInput[];
    createMany?: Prisma.PoLineItemCreateManyPartInputEnvelope;
    connect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
};
export type PoLineItemUncheckedCreateNestedManyWithoutPartInput = {
    create?: Prisma.XOR<Prisma.PoLineItemCreateWithoutPartInput, Prisma.PoLineItemUncheckedCreateWithoutPartInput> | Prisma.PoLineItemCreateWithoutPartInput[] | Prisma.PoLineItemUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PoLineItemCreateOrConnectWithoutPartInput | Prisma.PoLineItemCreateOrConnectWithoutPartInput[];
    createMany?: Prisma.PoLineItemCreateManyPartInputEnvelope;
    connect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
};
export type PoLineItemUpdateManyWithoutPartNestedInput = {
    create?: Prisma.XOR<Prisma.PoLineItemCreateWithoutPartInput, Prisma.PoLineItemUncheckedCreateWithoutPartInput> | Prisma.PoLineItemCreateWithoutPartInput[] | Prisma.PoLineItemUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PoLineItemCreateOrConnectWithoutPartInput | Prisma.PoLineItemCreateOrConnectWithoutPartInput[];
    upsert?: Prisma.PoLineItemUpsertWithWhereUniqueWithoutPartInput | Prisma.PoLineItemUpsertWithWhereUniqueWithoutPartInput[];
    createMany?: Prisma.PoLineItemCreateManyPartInputEnvelope;
    set?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    disconnect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    delete?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    connect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    update?: Prisma.PoLineItemUpdateWithWhereUniqueWithoutPartInput | Prisma.PoLineItemUpdateWithWhereUniqueWithoutPartInput[];
    updateMany?: Prisma.PoLineItemUpdateManyWithWhereWithoutPartInput | Prisma.PoLineItemUpdateManyWithWhereWithoutPartInput[];
    deleteMany?: Prisma.PoLineItemScalarWhereInput | Prisma.PoLineItemScalarWhereInput[];
};
export type PoLineItemUncheckedUpdateManyWithoutPartNestedInput = {
    create?: Prisma.XOR<Prisma.PoLineItemCreateWithoutPartInput, Prisma.PoLineItemUncheckedCreateWithoutPartInput> | Prisma.PoLineItemCreateWithoutPartInput[] | Prisma.PoLineItemUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PoLineItemCreateOrConnectWithoutPartInput | Prisma.PoLineItemCreateOrConnectWithoutPartInput[];
    upsert?: Prisma.PoLineItemUpsertWithWhereUniqueWithoutPartInput | Prisma.PoLineItemUpsertWithWhereUniqueWithoutPartInput[];
    createMany?: Prisma.PoLineItemCreateManyPartInputEnvelope;
    set?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    disconnect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    delete?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    connect?: Prisma.PoLineItemWhereUniqueInput | Prisma.PoLineItemWhereUniqueInput[];
    update?: Prisma.PoLineItemUpdateWithWhereUniqueWithoutPartInput | Prisma.PoLineItemUpdateWithWhereUniqueWithoutPartInput[];
    updateMany?: Prisma.PoLineItemUpdateManyWithWhereWithoutPartInput | Prisma.PoLineItemUpdateManyWithWhereWithoutPartInput[];
    deleteMany?: Prisma.PoLineItemScalarWhereInput | Prisma.PoLineItemScalarWhereInput[];
};
export type PoLineItemCreateNestedOneWithoutJobListInput = {
    create?: Prisma.XOR<Prisma.PoLineItemCreateWithoutJobListInput, Prisma.PoLineItemUncheckedCreateWithoutJobListInput>;
    connectOrCreate?: Prisma.PoLineItemCreateOrConnectWithoutJobListInput;
    connect?: Prisma.PoLineItemWhereUniqueInput;
};
export type PoLineItemUpdateOneWithoutJobListNestedInput = {
    create?: Prisma.XOR<Prisma.PoLineItemCreateWithoutJobListInput, Prisma.PoLineItemUncheckedCreateWithoutJobListInput>;
    connectOrCreate?: Prisma.PoLineItemCreateOrConnectWithoutJobListInput;
    upsert?: Prisma.PoLineItemUpsertWithoutJobListInput;
    disconnect?: Prisma.PoLineItemWhereInput | boolean;
    delete?: Prisma.PoLineItemWhereInput | boolean;
    connect?: Prisma.PoLineItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PoLineItemUpdateToOneWithWhereWithoutJobListInput, Prisma.PoLineItemUpdateWithoutJobListInput>, Prisma.PoLineItemUncheckedUpdateWithoutJobListInput>;
};
export type PoLineItemCreateWithoutPurchaseOrderInput = {
    id?: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListCreateNestedOneWithoutLineItemInput;
    part: Prisma.PartCreateNestedOneWithoutLineItemsInput;
};
export type PoLineItemUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string;
    partId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUncheckedCreateNestedOneWithoutLineItemInput;
};
export type PoLineItemCreateOrConnectWithoutPurchaseOrderInput = {
    where: Prisma.PoLineItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoLineItemCreateWithoutPurchaseOrderInput, Prisma.PoLineItemUncheckedCreateWithoutPurchaseOrderInput>;
};
export type PoLineItemCreateManyPurchaseOrderInputEnvelope = {
    data: Prisma.PoLineItemCreateManyPurchaseOrderInput | Prisma.PoLineItemCreateManyPurchaseOrderInput[];
    skipDuplicates?: boolean;
};
export type PoLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.PoLineItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.PoLineItemUpdateWithoutPurchaseOrderInput, Prisma.PoLineItemUncheckedUpdateWithoutPurchaseOrderInput>;
    create: Prisma.XOR<Prisma.PoLineItemCreateWithoutPurchaseOrderInput, Prisma.PoLineItemUncheckedCreateWithoutPurchaseOrderInput>;
};
export type PoLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.PoLineItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.PoLineItemUpdateWithoutPurchaseOrderInput, Prisma.PoLineItemUncheckedUpdateWithoutPurchaseOrderInput>;
};
export type PoLineItemUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: Prisma.PoLineItemScalarWhereInput;
    data: Prisma.XOR<Prisma.PoLineItemUpdateManyMutationInput, Prisma.PoLineItemUncheckedUpdateManyWithoutPurchaseOrderInput>;
};
export type PoLineItemScalarWhereInput = {
    AND?: Prisma.PoLineItemScalarWhereInput | Prisma.PoLineItemScalarWhereInput[];
    OR?: Prisma.PoLineItemScalarWhereInput[];
    NOT?: Prisma.PoLineItemScalarWhereInput | Prisma.PoLineItemScalarWhereInput[];
    id?: Prisma.StringFilter<"PoLineItem"> | string;
    purchaseOrderId?: Prisma.StringFilter<"PoLineItem"> | string;
    partId?: Prisma.StringFilter<"PoLineItem"> | string;
    quantity?: Prisma.IntFilter<"PoLineItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"PoLineItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemCreateWithoutPartInput = {
    id?: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListCreateNestedOneWithoutLineItemInput;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutLineItemsInput;
};
export type PoLineItemUncheckedCreateWithoutPartInput = {
    id?: string;
    purchaseOrderId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUncheckedCreateNestedOneWithoutLineItemInput;
};
export type PoLineItemCreateOrConnectWithoutPartInput = {
    where: Prisma.PoLineItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoLineItemCreateWithoutPartInput, Prisma.PoLineItemUncheckedCreateWithoutPartInput>;
};
export type PoLineItemCreateManyPartInputEnvelope = {
    data: Prisma.PoLineItemCreateManyPartInput | Prisma.PoLineItemCreateManyPartInput[];
    skipDuplicates?: boolean;
};
export type PoLineItemUpsertWithWhereUniqueWithoutPartInput = {
    where: Prisma.PoLineItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.PoLineItemUpdateWithoutPartInput, Prisma.PoLineItemUncheckedUpdateWithoutPartInput>;
    create: Prisma.XOR<Prisma.PoLineItemCreateWithoutPartInput, Prisma.PoLineItemUncheckedCreateWithoutPartInput>;
};
export type PoLineItemUpdateWithWhereUniqueWithoutPartInput = {
    where: Prisma.PoLineItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.PoLineItemUpdateWithoutPartInput, Prisma.PoLineItemUncheckedUpdateWithoutPartInput>;
};
export type PoLineItemUpdateManyWithWhereWithoutPartInput = {
    where: Prisma.PoLineItemScalarWhereInput;
    data: Prisma.XOR<Prisma.PoLineItemUpdateManyMutationInput, Prisma.PoLineItemUncheckedUpdateManyWithoutPartInput>;
};
export type PoLineItemCreateWithoutJobListInput = {
    id?: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    part: Prisma.PartCreateNestedOneWithoutLineItemsInput;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutLineItemsInput;
};
export type PoLineItemUncheckedCreateWithoutJobListInput = {
    id?: string;
    purchaseOrderId: string;
    partId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemCreateOrConnectWithoutJobListInput = {
    where: Prisma.PoLineItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoLineItemCreateWithoutJobListInput, Prisma.PoLineItemUncheckedCreateWithoutJobListInput>;
};
export type PoLineItemUpsertWithoutJobListInput = {
    update: Prisma.XOR<Prisma.PoLineItemUpdateWithoutJobListInput, Prisma.PoLineItemUncheckedUpdateWithoutJobListInput>;
    create: Prisma.XOR<Prisma.PoLineItemCreateWithoutJobListInput, Prisma.PoLineItemUncheckedCreateWithoutJobListInput>;
    where?: Prisma.PoLineItemWhereInput;
};
export type PoLineItemUpdateToOneWithWhereWithoutJobListInput = {
    where?: Prisma.PoLineItemWhereInput;
    data: Prisma.XOR<Prisma.PoLineItemUpdateWithoutJobListInput, Prisma.PoLineItemUncheckedUpdateWithoutJobListInput>;
};
export type PoLineItemUpdateWithoutJobListInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    part?: Prisma.PartUpdateOneRequiredWithoutLineItemsNestedInput;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutLineItemsNestedInput;
};
export type PoLineItemUncheckedUpdateWithoutJobListInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemCreateManyPurchaseOrderInput = {
    id?: string;
    partId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUpdateOneWithoutLineItemNestedInput;
    part?: Prisma.PartUpdateOneRequiredWithoutLineItemsNestedInput;
};
export type PoLineItemUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUncheckedUpdateOneWithoutLineItemNestedInput;
};
export type PoLineItemUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemCreateManyPartInput = {
    id?: string;
    purchaseOrderId: string;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemUpdateWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUpdateOneWithoutLineItemNestedInput;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutLineItemsNestedInput;
};
export type PoLineItemUncheckedUpdateWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUncheckedUpdateOneWithoutLineItemNestedInput;
};
export type PoLineItemUncheckedUpdateManyWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PoLineItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    partId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    jobList?: boolean | Prisma.PoLineItem$jobListArgs<ExtArgs>;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poLineItem"]>;
export type PoLineItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    partId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poLineItem"]>;
export type PoLineItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    partId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poLineItem"]>;
export type PoLineItemSelectScalar = {
    id?: boolean;
    purchaseOrderId?: boolean;
    partId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
};
export type PoLineItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "purchaseOrderId" | "partId" | "quantity" | "unitPrice", ExtArgs["result"]["poLineItem"]>;
export type PoLineItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobList?: boolean | Prisma.PoLineItem$jobListArgs<ExtArgs>;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
};
export type PoLineItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
};
export type PoLineItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
};
export type $PoLineItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PoLineItem";
    objects: {
        jobList: Prisma.$JobListPayload<ExtArgs> | null;
        part: Prisma.$PartPayload<ExtArgs>;
        purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        purchaseOrderId: string;
        partId: string;
        quantity: number;
        unitPrice: runtime.Decimal;
    }, ExtArgs["result"]["poLineItem"]>;
    composites: {};
};
export type PoLineItemGetPayload<S extends boolean | null | undefined | PoLineItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload, S>;
export type PoLineItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PoLineItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PoLineItemCountAggregateInputType | true;
};
export interface PoLineItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PoLineItem'];
        meta: {
            name: 'PoLineItem';
        };
    };
    /**
     * Find zero or one PoLineItem that matches the filter.
     * @param {PoLineItemFindUniqueArgs} args - Arguments to find a PoLineItem
     * @example
     * // Get one PoLineItem
     * const poLineItem = await prisma.poLineItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoLineItemFindUniqueArgs>(args: Prisma.SelectSubset<T, PoLineItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PoLineItemClient<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PoLineItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoLineItemFindUniqueOrThrowArgs} args - Arguments to find a PoLineItem
     * @example
     * // Get one PoLineItem
     * const poLineItem = await prisma.poLineItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoLineItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PoLineItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PoLineItemClient<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PoLineItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemFindFirstArgs} args - Arguments to find a PoLineItem
     * @example
     * // Get one PoLineItem
     * const poLineItem = await prisma.poLineItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoLineItemFindFirstArgs>(args?: Prisma.SelectSubset<T, PoLineItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__PoLineItemClient<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PoLineItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemFindFirstOrThrowArgs} args - Arguments to find a PoLineItem
     * @example
     * // Get one PoLineItem
     * const poLineItem = await prisma.poLineItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoLineItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PoLineItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PoLineItemClient<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PoLineItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoLineItems
     * const poLineItems = await prisma.poLineItem.findMany()
     *
     * // Get first 10 PoLineItems
     * const poLineItems = await prisma.poLineItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const poLineItemWithIdOnly = await prisma.poLineItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PoLineItemFindManyArgs>(args?: Prisma.SelectSubset<T, PoLineItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PoLineItem.
     * @param {PoLineItemCreateArgs} args - Arguments to create a PoLineItem.
     * @example
     * // Create one PoLineItem
     * const PoLineItem = await prisma.poLineItem.create({
     *   data: {
     *     // ... data to create a PoLineItem
     *   }
     * })
     *
     */
    create<T extends PoLineItemCreateArgs>(args: Prisma.SelectSubset<T, PoLineItemCreateArgs<ExtArgs>>): Prisma.Prisma__PoLineItemClient<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PoLineItems.
     * @param {PoLineItemCreateManyArgs} args - Arguments to create many PoLineItems.
     * @example
     * // Create many PoLineItems
     * const poLineItem = await prisma.poLineItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PoLineItemCreateManyArgs>(args?: Prisma.SelectSubset<T, PoLineItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PoLineItems and returns the data saved in the database.
     * @param {PoLineItemCreateManyAndReturnArgs} args - Arguments to create many PoLineItems.
     * @example
     * // Create many PoLineItems
     * const poLineItem = await prisma.poLineItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PoLineItems and only return the `id`
     * const poLineItemWithIdOnly = await prisma.poLineItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PoLineItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PoLineItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PoLineItem.
     * @param {PoLineItemDeleteArgs} args - Arguments to delete one PoLineItem.
     * @example
     * // Delete one PoLineItem
     * const PoLineItem = await prisma.poLineItem.delete({
     *   where: {
     *     // ... filter to delete one PoLineItem
     *   }
     * })
     *
     */
    delete<T extends PoLineItemDeleteArgs>(args: Prisma.SelectSubset<T, PoLineItemDeleteArgs<ExtArgs>>): Prisma.Prisma__PoLineItemClient<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PoLineItem.
     * @param {PoLineItemUpdateArgs} args - Arguments to update one PoLineItem.
     * @example
     * // Update one PoLineItem
     * const poLineItem = await prisma.poLineItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PoLineItemUpdateArgs>(args: Prisma.SelectSubset<T, PoLineItemUpdateArgs<ExtArgs>>): Prisma.Prisma__PoLineItemClient<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PoLineItems.
     * @param {PoLineItemDeleteManyArgs} args - Arguments to filter PoLineItems to delete.
     * @example
     * // Delete a few PoLineItems
     * const { count } = await prisma.poLineItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PoLineItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, PoLineItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PoLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoLineItems
     * const poLineItem = await prisma.poLineItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PoLineItemUpdateManyArgs>(args: Prisma.SelectSubset<T, PoLineItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PoLineItems and returns the data updated in the database.
     * @param {PoLineItemUpdateManyAndReturnArgs} args - Arguments to update many PoLineItems.
     * @example
     * // Update many PoLineItems
     * const poLineItem = await prisma.poLineItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PoLineItems and only return the `id`
     * const poLineItemWithIdOnly = await prisma.poLineItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends PoLineItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PoLineItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PoLineItem.
     * @param {PoLineItemUpsertArgs} args - Arguments to update or create a PoLineItem.
     * @example
     * // Update or create a PoLineItem
     * const poLineItem = await prisma.poLineItem.upsert({
     *   create: {
     *     // ... data to create a PoLineItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoLineItem we want to update
     *   }
     * })
     */
    upsert<T extends PoLineItemUpsertArgs>(args: Prisma.SelectSubset<T, PoLineItemUpsertArgs<ExtArgs>>): Prisma.Prisma__PoLineItemClient<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PoLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemCountArgs} args - Arguments to filter PoLineItems to count.
     * @example
     * // Count the number of PoLineItems
     * const count = await prisma.poLineItem.count({
     *   where: {
     *     // ... the filter for the PoLineItems we want to count
     *   }
     * })
    **/
    count<T extends PoLineItemCountArgs>(args?: Prisma.Subset<T, PoLineItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PoLineItemCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PoLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PoLineItemAggregateArgs>(args: Prisma.Subset<T, PoLineItemAggregateArgs>): Prisma.PrismaPromise<GetPoLineItemAggregateType<T>>;
    /**
     * Group by PoLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoLineItemGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PoLineItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PoLineItemGroupByArgs['orderBy'];
    } : {
        orderBy?: PoLineItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PoLineItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoLineItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PoLineItem model
     */
    readonly fields: PoLineItemFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PoLineItem.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PoLineItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    jobList<T extends Prisma.PoLineItem$jobListArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PoLineItem$jobListArgs<ExtArgs>>): Prisma.Prisma__JobListClient<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    part<T extends Prisma.PartDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PartDefaultArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    purchaseOrder<T extends Prisma.PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PoLineItem model
 */
export interface PoLineItemFieldRefs {
    readonly id: Prisma.FieldRef<"PoLineItem", 'String'>;
    readonly purchaseOrderId: Prisma.FieldRef<"PoLineItem", 'String'>;
    readonly partId: Prisma.FieldRef<"PoLineItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"PoLineItem", 'Int'>;
    readonly unitPrice: Prisma.FieldRef<"PoLineItem", 'Decimal'>;
}
/**
 * PoLineItem findUnique
 */
export type PoLineItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PoLineItem to fetch.
     */
    where: Prisma.PoLineItemWhereUniqueInput;
};
/**
 * PoLineItem findUniqueOrThrow
 */
export type PoLineItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PoLineItem to fetch.
     */
    where: Prisma.PoLineItemWhereUniqueInput;
};
/**
 * PoLineItem findFirst
 */
export type PoLineItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PoLineItem to fetch.
     */
    where?: Prisma.PoLineItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PoLineItems to fetch.
     */
    orderBy?: Prisma.PoLineItemOrderByWithRelationInput | Prisma.PoLineItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PoLineItems.
     */
    cursor?: Prisma.PoLineItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PoLineItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PoLineItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PoLineItems.
     */
    distinct?: Prisma.PoLineItemScalarFieldEnum | Prisma.PoLineItemScalarFieldEnum[];
};
/**
 * PoLineItem findFirstOrThrow
 */
export type PoLineItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PoLineItem to fetch.
     */
    where?: Prisma.PoLineItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PoLineItems to fetch.
     */
    orderBy?: Prisma.PoLineItemOrderByWithRelationInput | Prisma.PoLineItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PoLineItems.
     */
    cursor?: Prisma.PoLineItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PoLineItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PoLineItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PoLineItems.
     */
    distinct?: Prisma.PoLineItemScalarFieldEnum | Prisma.PoLineItemScalarFieldEnum[];
};
/**
 * PoLineItem findMany
 */
export type PoLineItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PoLineItems to fetch.
     */
    where?: Prisma.PoLineItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PoLineItems to fetch.
     */
    orderBy?: Prisma.PoLineItemOrderByWithRelationInput | Prisma.PoLineItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PoLineItems.
     */
    cursor?: Prisma.PoLineItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PoLineItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PoLineItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PoLineItems.
     */
    distinct?: Prisma.PoLineItemScalarFieldEnum | Prisma.PoLineItemScalarFieldEnum[];
};
/**
 * PoLineItem create
 */
export type PoLineItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a PoLineItem.
     */
    data: Prisma.XOR<Prisma.PoLineItemCreateInput, Prisma.PoLineItemUncheckedCreateInput>;
};
/**
 * PoLineItem createMany
 */
export type PoLineItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoLineItems.
     */
    data: Prisma.PoLineItemCreateManyInput | Prisma.PoLineItemCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PoLineItem createManyAndReturn
 */
export type PoLineItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: Prisma.PoLineItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: Prisma.PoLineItemOmit<ExtArgs> | null;
    /**
     * The data used to create many PoLineItems.
     */
    data: Prisma.PoLineItemCreateManyInput | Prisma.PoLineItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PoLineItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PoLineItem update
 */
export type PoLineItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a PoLineItem.
     */
    data: Prisma.XOR<Prisma.PoLineItemUpdateInput, Prisma.PoLineItemUncheckedUpdateInput>;
    /**
     * Choose, which PoLineItem to update.
     */
    where: Prisma.PoLineItemWhereUniqueInput;
};
/**
 * PoLineItem updateMany
 */
export type PoLineItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PoLineItems.
     */
    data: Prisma.XOR<Prisma.PoLineItemUpdateManyMutationInput, Prisma.PoLineItemUncheckedUpdateManyInput>;
    /**
     * Filter which PoLineItems to update
     */
    where?: Prisma.PoLineItemWhereInput;
    /**
     * Limit how many PoLineItems to update.
     */
    limit?: number;
};
/**
 * PoLineItem updateManyAndReturn
 */
export type PoLineItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoLineItem
     */
    select?: Prisma.PoLineItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PoLineItem
     */
    omit?: Prisma.PoLineItemOmit<ExtArgs> | null;
    /**
     * The data used to update PoLineItems.
     */
    data: Prisma.XOR<Prisma.PoLineItemUpdateManyMutationInput, Prisma.PoLineItemUncheckedUpdateManyInput>;
    /**
     * Filter which PoLineItems to update
     */
    where?: Prisma.PoLineItemWhereInput;
    /**
     * Limit how many PoLineItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PoLineItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PoLineItem upsert
 */
export type PoLineItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the PoLineItem to update in case it exists.
     */
    where: Prisma.PoLineItemWhereUniqueInput;
    /**
     * In case the PoLineItem found by the `where` argument doesn't exist, create a new PoLineItem with this data.
     */
    create: Prisma.XOR<Prisma.PoLineItemCreateInput, Prisma.PoLineItemUncheckedCreateInput>;
    /**
     * In case the PoLineItem was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PoLineItemUpdateInput, Prisma.PoLineItemUncheckedUpdateInput>;
};
/**
 * PoLineItem delete
 */
export type PoLineItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which PoLineItem to delete.
     */
    where: Prisma.PoLineItemWhereUniqueInput;
};
/**
 * PoLineItem deleteMany
 */
export type PoLineItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PoLineItems to delete
     */
    where?: Prisma.PoLineItemWhereInput;
    /**
     * Limit how many PoLineItems to delete.
     */
    limit?: number;
};
/**
 * PoLineItem.jobList
 */
export type PoLineItem$jobListArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * PoLineItem without action
 */
export type PoLineItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
