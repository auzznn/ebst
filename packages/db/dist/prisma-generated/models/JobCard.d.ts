import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model JobCard
 *
 */
export type JobCardModel = runtime.Types.Result.DefaultSelection<Prisma.$JobCardPayload>;
export type AggregateJobCard = {
    _count: JobCardCountAggregateOutputType | null;
    _min: JobCardMinAggregateOutputType | null;
    _max: JobCardMaxAggregateOutputType | null;
};
export type JobCardMinAggregateOutputType = {
    id: string | null;
    jobNo: string | null;
    purchaseOrderId: string | null;
    status: $Enums.JobCardStatus | null;
    createdById: string | null;
    createdAt: Date | null;
    completedAt: Date | null;
};
export type JobCardMaxAggregateOutputType = {
    id: string | null;
    jobNo: string | null;
    purchaseOrderId: string | null;
    status: $Enums.JobCardStatus | null;
    createdById: string | null;
    createdAt: Date | null;
    completedAt: Date | null;
};
export type JobCardCountAggregateOutputType = {
    id: number;
    jobNo: number;
    purchaseOrderId: number;
    status: number;
    createdById: number;
    createdAt: number;
    completedAt: number;
    _all: number;
};
export type JobCardMinAggregateInputType = {
    id?: true;
    jobNo?: true;
    purchaseOrderId?: true;
    status?: true;
    createdById?: true;
    createdAt?: true;
    completedAt?: true;
};
export type JobCardMaxAggregateInputType = {
    id?: true;
    jobNo?: true;
    purchaseOrderId?: true;
    status?: true;
    createdById?: true;
    createdAt?: true;
    completedAt?: true;
};
export type JobCardCountAggregateInputType = {
    id?: true;
    jobNo?: true;
    purchaseOrderId?: true;
    status?: true;
    createdById?: true;
    createdAt?: true;
    completedAt?: true;
    _all?: true;
};
export type JobCardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JobCard to aggregate.
     */
    where?: Prisma.JobCardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobCards to fetch.
     */
    orderBy?: Prisma.JobCardOrderByWithRelationInput | Prisma.JobCardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.JobCardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobCards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobCards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JobCards
    **/
    _count?: true | JobCardCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JobCardMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JobCardMaxAggregateInputType;
};
export type GetJobCardAggregateType<T extends JobCardAggregateArgs> = {
    [P in keyof T & keyof AggregateJobCard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJobCard[P]> : Prisma.GetScalarType<T[P], AggregateJobCard[P]>;
};
export type JobCardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobCardWhereInput;
    orderBy?: Prisma.JobCardOrderByWithAggregationInput | Prisma.JobCardOrderByWithAggregationInput[];
    by: Prisma.JobCardScalarFieldEnum[] | Prisma.JobCardScalarFieldEnum;
    having?: Prisma.JobCardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobCardCountAggregateInputType | true;
    _min?: JobCardMinAggregateInputType;
    _max?: JobCardMaxAggregateInputType;
};
export type JobCardGroupByOutputType = {
    id: string;
    jobNo: string;
    purchaseOrderId: string | null;
    status: $Enums.JobCardStatus;
    createdById: string;
    createdAt: Date;
    completedAt: Date | null;
    _count: JobCardCountAggregateOutputType | null;
    _min: JobCardMinAggregateOutputType | null;
    _max: JobCardMaxAggregateOutputType | null;
};
export type GetJobCardGroupByPayload<T extends JobCardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JobCardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JobCardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JobCardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JobCardGroupByOutputType[P]>;
}>>;
export type JobCardWhereInput = {
    AND?: Prisma.JobCardWhereInput | Prisma.JobCardWhereInput[];
    OR?: Prisma.JobCardWhereInput[];
    NOT?: Prisma.JobCardWhereInput | Prisma.JobCardWhereInput[];
    id?: Prisma.StringFilter<"JobCard"> | string;
    jobNo?: Prisma.StringFilter<"JobCard"> | string;
    purchaseOrderId?: Prisma.StringNullableFilter<"JobCard"> | string | null;
    status?: Prisma.EnumJobCardStatusFilter<"JobCard"> | $Enums.JobCardStatus;
    createdById?: Prisma.StringFilter<"JobCard"> | string;
    createdAt?: Prisma.DateTimeFilter<"JobCard"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"JobCard"> | Date | string | null;
    jobLists?: Prisma.JobListListRelationFilter;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderNullableScalarRelationFilter, Prisma.PurchaseOrderWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type JobCardOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    jobNo?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    jobLists?: Prisma.JobListOrderByRelationAggregateInput;
    purchaseOrder?: Prisma.PurchaseOrderOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
};
export type JobCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    jobNo?: string;
    purchaseOrderId?: string;
    AND?: Prisma.JobCardWhereInput | Prisma.JobCardWhereInput[];
    OR?: Prisma.JobCardWhereInput[];
    NOT?: Prisma.JobCardWhereInput | Prisma.JobCardWhereInput[];
    status?: Prisma.EnumJobCardStatusFilter<"JobCard"> | $Enums.JobCardStatus;
    createdById?: Prisma.StringFilter<"JobCard"> | string;
    createdAt?: Prisma.DateTimeFilter<"JobCard"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"JobCard"> | Date | string | null;
    jobLists?: Prisma.JobListListRelationFilter;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderNullableScalarRelationFilter, Prisma.PurchaseOrderWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "jobNo" | "purchaseOrderId">;
export type JobCardOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    jobNo?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.JobCardCountOrderByAggregateInput;
    _max?: Prisma.JobCardMaxOrderByAggregateInput;
    _min?: Prisma.JobCardMinOrderByAggregateInput;
};
export type JobCardScalarWhereWithAggregatesInput = {
    AND?: Prisma.JobCardScalarWhereWithAggregatesInput | Prisma.JobCardScalarWhereWithAggregatesInput[];
    OR?: Prisma.JobCardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JobCardScalarWhereWithAggregatesInput | Prisma.JobCardScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"JobCard"> | string;
    jobNo?: Prisma.StringWithAggregatesFilter<"JobCard"> | string;
    purchaseOrderId?: Prisma.StringNullableWithAggregatesFilter<"JobCard"> | string | null;
    status?: Prisma.EnumJobCardStatusWithAggregatesFilter<"JobCard"> | $Enums.JobCardStatus;
    createdById?: Prisma.StringWithAggregatesFilter<"JobCard"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"JobCard"> | Date | string;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"JobCard"> | Date | string | null;
};
export type JobCardCreateInput = {
    id?: string;
    jobNo: string;
    status?: $Enums.JobCardStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    jobLists?: Prisma.JobListCreateNestedManyWithoutJobCardInput;
    purchaseOrder?: Prisma.PurchaseOrderCreateNestedOneWithoutJobCardsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedJobCardsInput;
};
export type JobCardUncheckedCreateInput = {
    id?: string;
    jobNo: string;
    purchaseOrderId?: string | null;
    status?: $Enums.JobCardStatus;
    createdById: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    jobLists?: Prisma.JobListUncheckedCreateNestedManyWithoutJobCardInput;
};
export type JobCardUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    jobLists?: Prisma.JobListUpdateManyWithoutJobCardNestedInput;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneWithoutJobCardsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedJobCardsNestedInput;
};
export type JobCardUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    jobLists?: Prisma.JobListUncheckedUpdateManyWithoutJobCardNestedInput;
};
export type JobCardCreateManyInput = {
    id?: string;
    jobNo: string;
    purchaseOrderId?: string | null;
    status?: $Enums.JobCardStatus;
    createdById: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type JobCardUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type JobCardUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type JobCardListRelationFilter = {
    every?: Prisma.JobCardWhereInput;
    some?: Prisma.JobCardWhereInput;
    none?: Prisma.JobCardWhereInput;
};
export type JobCardOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JobCardCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobNo?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type JobCardMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobNo?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type JobCardMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobNo?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type JobCardScalarRelationFilter = {
    is?: Prisma.JobCardWhereInput;
    isNot?: Prisma.JobCardWhereInput;
};
export type JobCardCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.JobCardCreateWithoutCreatedByInput, Prisma.JobCardUncheckedCreateWithoutCreatedByInput> | Prisma.JobCardCreateWithoutCreatedByInput[] | Prisma.JobCardUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.JobCardCreateOrConnectWithoutCreatedByInput | Prisma.JobCardCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.JobCardCreateManyCreatedByInputEnvelope;
    connect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
};
export type JobCardUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.JobCardCreateWithoutCreatedByInput, Prisma.JobCardUncheckedCreateWithoutCreatedByInput> | Prisma.JobCardCreateWithoutCreatedByInput[] | Prisma.JobCardUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.JobCardCreateOrConnectWithoutCreatedByInput | Prisma.JobCardCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.JobCardCreateManyCreatedByInputEnvelope;
    connect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
};
export type JobCardUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.JobCardCreateWithoutCreatedByInput, Prisma.JobCardUncheckedCreateWithoutCreatedByInput> | Prisma.JobCardCreateWithoutCreatedByInput[] | Prisma.JobCardUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.JobCardCreateOrConnectWithoutCreatedByInput | Prisma.JobCardCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.JobCardUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.JobCardUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.JobCardCreateManyCreatedByInputEnvelope;
    set?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    disconnect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    delete?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    connect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    update?: Prisma.JobCardUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.JobCardUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.JobCardUpdateManyWithWhereWithoutCreatedByInput | Prisma.JobCardUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.JobCardScalarWhereInput | Prisma.JobCardScalarWhereInput[];
};
export type JobCardUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.JobCardCreateWithoutCreatedByInput, Prisma.JobCardUncheckedCreateWithoutCreatedByInput> | Prisma.JobCardCreateWithoutCreatedByInput[] | Prisma.JobCardUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.JobCardCreateOrConnectWithoutCreatedByInput | Prisma.JobCardCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.JobCardUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.JobCardUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.JobCardCreateManyCreatedByInputEnvelope;
    set?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    disconnect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    delete?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    connect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    update?: Prisma.JobCardUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.JobCardUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.JobCardUpdateManyWithWhereWithoutCreatedByInput | Prisma.JobCardUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.JobCardScalarWhereInput | Prisma.JobCardScalarWhereInput[];
};
export type JobCardCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.JobCardCreateWithoutPurchaseOrderInput, Prisma.JobCardUncheckedCreateWithoutPurchaseOrderInput> | Prisma.JobCardCreateWithoutPurchaseOrderInput[] | Prisma.JobCardUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.JobCardCreateOrConnectWithoutPurchaseOrderInput | Prisma.JobCardCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.JobCardCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
};
export type JobCardUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.JobCardCreateWithoutPurchaseOrderInput, Prisma.JobCardUncheckedCreateWithoutPurchaseOrderInput> | Prisma.JobCardCreateWithoutPurchaseOrderInput[] | Prisma.JobCardUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.JobCardCreateOrConnectWithoutPurchaseOrderInput | Prisma.JobCardCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.JobCardCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
};
export type JobCardUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.JobCardCreateWithoutPurchaseOrderInput, Prisma.JobCardUncheckedCreateWithoutPurchaseOrderInput> | Prisma.JobCardCreateWithoutPurchaseOrderInput[] | Prisma.JobCardUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.JobCardCreateOrConnectWithoutPurchaseOrderInput | Prisma.JobCardCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.JobCardUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.JobCardUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.JobCardCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    disconnect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    delete?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    connect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    update?: Prisma.JobCardUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.JobCardUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.JobCardUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.JobCardUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.JobCardScalarWhereInput | Prisma.JobCardScalarWhereInput[];
};
export type JobCardUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.JobCardCreateWithoutPurchaseOrderInput, Prisma.JobCardUncheckedCreateWithoutPurchaseOrderInput> | Prisma.JobCardCreateWithoutPurchaseOrderInput[] | Prisma.JobCardUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.JobCardCreateOrConnectWithoutPurchaseOrderInput | Prisma.JobCardCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.JobCardUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.JobCardUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.JobCardCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    disconnect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    delete?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    connect?: Prisma.JobCardWhereUniqueInput | Prisma.JobCardWhereUniqueInput[];
    update?: Prisma.JobCardUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.JobCardUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.JobCardUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.JobCardUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.JobCardScalarWhereInput | Prisma.JobCardScalarWhereInput[];
};
export type EnumJobCardStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobCardStatus;
};
export type JobCardCreateNestedOneWithoutJobListsInput = {
    create?: Prisma.XOR<Prisma.JobCardCreateWithoutJobListsInput, Prisma.JobCardUncheckedCreateWithoutJobListsInput>;
    connectOrCreate?: Prisma.JobCardCreateOrConnectWithoutJobListsInput;
    connect?: Prisma.JobCardWhereUniqueInput;
};
export type JobCardUpdateOneRequiredWithoutJobListsNestedInput = {
    create?: Prisma.XOR<Prisma.JobCardCreateWithoutJobListsInput, Prisma.JobCardUncheckedCreateWithoutJobListsInput>;
    connectOrCreate?: Prisma.JobCardCreateOrConnectWithoutJobListsInput;
    upsert?: Prisma.JobCardUpsertWithoutJobListsInput;
    connect?: Prisma.JobCardWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JobCardUpdateToOneWithWhereWithoutJobListsInput, Prisma.JobCardUpdateWithoutJobListsInput>, Prisma.JobCardUncheckedUpdateWithoutJobListsInput>;
};
export type JobCardCreateWithoutCreatedByInput = {
    id?: string;
    jobNo: string;
    status?: $Enums.JobCardStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    jobLists?: Prisma.JobListCreateNestedManyWithoutJobCardInput;
    purchaseOrder?: Prisma.PurchaseOrderCreateNestedOneWithoutJobCardsInput;
};
export type JobCardUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    jobNo: string;
    purchaseOrderId?: string | null;
    status?: $Enums.JobCardStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    jobLists?: Prisma.JobListUncheckedCreateNestedManyWithoutJobCardInput;
};
export type JobCardCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.JobCardWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobCardCreateWithoutCreatedByInput, Prisma.JobCardUncheckedCreateWithoutCreatedByInput>;
};
export type JobCardCreateManyCreatedByInputEnvelope = {
    data: Prisma.JobCardCreateManyCreatedByInput | Prisma.JobCardCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type JobCardUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.JobCardWhereUniqueInput;
    update: Prisma.XOR<Prisma.JobCardUpdateWithoutCreatedByInput, Prisma.JobCardUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.JobCardCreateWithoutCreatedByInput, Prisma.JobCardUncheckedCreateWithoutCreatedByInput>;
};
export type JobCardUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.JobCardWhereUniqueInput;
    data: Prisma.XOR<Prisma.JobCardUpdateWithoutCreatedByInput, Prisma.JobCardUncheckedUpdateWithoutCreatedByInput>;
};
export type JobCardUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.JobCardScalarWhereInput;
    data: Prisma.XOR<Prisma.JobCardUpdateManyMutationInput, Prisma.JobCardUncheckedUpdateManyWithoutCreatedByInput>;
};
export type JobCardScalarWhereInput = {
    AND?: Prisma.JobCardScalarWhereInput | Prisma.JobCardScalarWhereInput[];
    OR?: Prisma.JobCardScalarWhereInput[];
    NOT?: Prisma.JobCardScalarWhereInput | Prisma.JobCardScalarWhereInput[];
    id?: Prisma.StringFilter<"JobCard"> | string;
    jobNo?: Prisma.StringFilter<"JobCard"> | string;
    purchaseOrderId?: Prisma.StringNullableFilter<"JobCard"> | string | null;
    status?: Prisma.EnumJobCardStatusFilter<"JobCard"> | $Enums.JobCardStatus;
    createdById?: Prisma.StringFilter<"JobCard"> | string;
    createdAt?: Prisma.DateTimeFilter<"JobCard"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"JobCard"> | Date | string | null;
};
export type JobCardCreateWithoutPurchaseOrderInput = {
    id?: string;
    jobNo: string;
    status?: $Enums.JobCardStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    jobLists?: Prisma.JobListCreateNestedManyWithoutJobCardInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedJobCardsInput;
};
export type JobCardUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string;
    jobNo: string;
    status?: $Enums.JobCardStatus;
    createdById: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    jobLists?: Prisma.JobListUncheckedCreateNestedManyWithoutJobCardInput;
};
export type JobCardCreateOrConnectWithoutPurchaseOrderInput = {
    where: Prisma.JobCardWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobCardCreateWithoutPurchaseOrderInput, Prisma.JobCardUncheckedCreateWithoutPurchaseOrderInput>;
};
export type JobCardCreateManyPurchaseOrderInputEnvelope = {
    data: Prisma.JobCardCreateManyPurchaseOrderInput | Prisma.JobCardCreateManyPurchaseOrderInput[];
    skipDuplicates?: boolean;
};
export type JobCardUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.JobCardWhereUniqueInput;
    update: Prisma.XOR<Prisma.JobCardUpdateWithoutPurchaseOrderInput, Prisma.JobCardUncheckedUpdateWithoutPurchaseOrderInput>;
    create: Prisma.XOR<Prisma.JobCardCreateWithoutPurchaseOrderInput, Prisma.JobCardUncheckedCreateWithoutPurchaseOrderInput>;
};
export type JobCardUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.JobCardWhereUniqueInput;
    data: Prisma.XOR<Prisma.JobCardUpdateWithoutPurchaseOrderInput, Prisma.JobCardUncheckedUpdateWithoutPurchaseOrderInput>;
};
export type JobCardUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: Prisma.JobCardScalarWhereInput;
    data: Prisma.XOR<Prisma.JobCardUpdateManyMutationInput, Prisma.JobCardUncheckedUpdateManyWithoutPurchaseOrderInput>;
};
export type JobCardCreateWithoutJobListsInput = {
    id?: string;
    jobNo: string;
    status?: $Enums.JobCardStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    purchaseOrder?: Prisma.PurchaseOrderCreateNestedOneWithoutJobCardsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedJobCardsInput;
};
export type JobCardUncheckedCreateWithoutJobListsInput = {
    id?: string;
    jobNo: string;
    purchaseOrderId?: string | null;
    status?: $Enums.JobCardStatus;
    createdById: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type JobCardCreateOrConnectWithoutJobListsInput = {
    where: Prisma.JobCardWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobCardCreateWithoutJobListsInput, Prisma.JobCardUncheckedCreateWithoutJobListsInput>;
};
export type JobCardUpsertWithoutJobListsInput = {
    update: Prisma.XOR<Prisma.JobCardUpdateWithoutJobListsInput, Prisma.JobCardUncheckedUpdateWithoutJobListsInput>;
    create: Prisma.XOR<Prisma.JobCardCreateWithoutJobListsInput, Prisma.JobCardUncheckedCreateWithoutJobListsInput>;
    where?: Prisma.JobCardWhereInput;
};
export type JobCardUpdateToOneWithWhereWithoutJobListsInput = {
    where?: Prisma.JobCardWhereInput;
    data: Prisma.XOR<Prisma.JobCardUpdateWithoutJobListsInput, Prisma.JobCardUncheckedUpdateWithoutJobListsInput>;
};
export type JobCardUpdateWithoutJobListsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneWithoutJobCardsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedJobCardsNestedInput;
};
export type JobCardUncheckedUpdateWithoutJobListsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type JobCardCreateManyCreatedByInput = {
    id?: string;
    jobNo: string;
    purchaseOrderId?: string | null;
    status?: $Enums.JobCardStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type JobCardUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    jobLists?: Prisma.JobListUpdateManyWithoutJobCardNestedInput;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneWithoutJobCardsNestedInput;
};
export type JobCardUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    jobLists?: Prisma.JobListUncheckedUpdateManyWithoutJobCardNestedInput;
};
export type JobCardUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type JobCardCreateManyPurchaseOrderInput = {
    id?: string;
    jobNo: string;
    status?: $Enums.JobCardStatus;
    createdById: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type JobCardUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    jobLists?: Prisma.JobListUpdateManyWithoutJobCardNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedJobCardsNestedInput;
};
export type JobCardUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    jobLists?: Prisma.JobListUncheckedUpdateManyWithoutJobCardNestedInput;
};
export type JobCardUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobNo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type JobCardCountOutputType
 */
export type JobCardCountOutputType = {
    jobLists: number;
};
export type JobCardCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobLists?: boolean | JobCardCountOutputTypeCountJobListsArgs;
};
/**
 * JobCardCountOutputType without action
 */
export type JobCardCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCardCountOutputType
     */
    select?: Prisma.JobCardCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * JobCardCountOutputType without action
 */
export type JobCardCountOutputTypeCountJobListsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobListWhereInput;
};
export type JobCardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobNo?: boolean;
    purchaseOrderId?: boolean;
    status?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
    jobLists?: boolean | Prisma.JobCard$jobListsArgs<ExtArgs>;
    purchaseOrder?: boolean | Prisma.JobCard$purchaseOrderArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.JobCardCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jobCard"]>;
export type JobCardSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobNo?: boolean;
    purchaseOrderId?: boolean;
    status?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
    purchaseOrder?: boolean | Prisma.JobCard$purchaseOrderArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jobCard"]>;
export type JobCardSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobNo?: boolean;
    purchaseOrderId?: boolean;
    status?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
    purchaseOrder?: boolean | Prisma.JobCard$purchaseOrderArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jobCard"]>;
export type JobCardSelectScalar = {
    id?: boolean;
    jobNo?: boolean;
    purchaseOrderId?: boolean;
    status?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
};
export type JobCardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "jobNo" | "purchaseOrderId" | "status" | "createdById" | "createdAt" | "completedAt", ExtArgs["result"]["jobCard"]>;
export type JobCardInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobLists?: boolean | Prisma.JobCard$jobListsArgs<ExtArgs>;
    purchaseOrder?: boolean | Prisma.JobCard$purchaseOrderArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.JobCardCountOutputTypeDefaultArgs<ExtArgs>;
};
export type JobCardIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.JobCard$purchaseOrderArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type JobCardIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.JobCard$purchaseOrderArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $JobCardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JobCard";
    objects: {
        jobLists: Prisma.$JobListPayload<ExtArgs>[];
        purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs> | null;
        createdBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        jobNo: string;
        purchaseOrderId: string | null;
        status: $Enums.JobCardStatus;
        createdById: string;
        createdAt: Date;
        completedAt: Date | null;
    }, ExtArgs["result"]["jobCard"]>;
    composites: {};
};
export type JobCardGetPayload<S extends boolean | null | undefined | JobCardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JobCardPayload, S>;
export type JobCardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JobCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JobCardCountAggregateInputType | true;
};
export interface JobCardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JobCard'];
        meta: {
            name: 'JobCard';
        };
    };
    /**
     * Find zero or one JobCard that matches the filter.
     * @param {JobCardFindUniqueArgs} args - Arguments to find a JobCard
     * @example
     * // Get one JobCard
     * const jobCard = await prisma.jobCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobCardFindUniqueArgs>(args: Prisma.SelectSubset<T, JobCardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JobCardClient<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one JobCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobCardFindUniqueOrThrowArgs} args - Arguments to find a JobCard
     * @example
     * // Get one JobCard
     * const jobCard = await prisma.jobCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobCardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JobCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JobCardClient<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JobCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCardFindFirstArgs} args - Arguments to find a JobCard
     * @example
     * // Get one JobCard
     * const jobCard = await prisma.jobCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobCardFindFirstArgs>(args?: Prisma.SelectSubset<T, JobCardFindFirstArgs<ExtArgs>>): Prisma.Prisma__JobCardClient<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JobCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCardFindFirstOrThrowArgs} args - Arguments to find a JobCard
     * @example
     * // Get one JobCard
     * const jobCard = await prisma.jobCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobCardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JobCardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JobCardClient<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more JobCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobCards
     * const jobCards = await prisma.jobCard.findMany()
     *
     * // Get first 10 JobCards
     * const jobCards = await prisma.jobCard.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobCardWithIdOnly = await prisma.jobCard.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobCardFindManyArgs>(args?: Prisma.SelectSubset<T, JobCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a JobCard.
     * @param {JobCardCreateArgs} args - Arguments to create a JobCard.
     * @example
     * // Create one JobCard
     * const JobCard = await prisma.jobCard.create({
     *   data: {
     *     // ... data to create a JobCard
     *   }
     * })
     *
     */
    create<T extends JobCardCreateArgs>(args: Prisma.SelectSubset<T, JobCardCreateArgs<ExtArgs>>): Prisma.Prisma__JobCardClient<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many JobCards.
     * @param {JobCardCreateManyArgs} args - Arguments to create many JobCards.
     * @example
     * // Create many JobCards
     * const jobCard = await prisma.jobCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobCardCreateManyArgs>(args?: Prisma.SelectSubset<T, JobCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many JobCards and returns the data saved in the database.
     * @param {JobCardCreateManyAndReturnArgs} args - Arguments to create many JobCards.
     * @example
     * // Create many JobCards
     * const jobCard = await prisma.jobCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JobCards and only return the `id`
     * const jobCardWithIdOnly = await prisma.jobCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobCardCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JobCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a JobCard.
     * @param {JobCardDeleteArgs} args - Arguments to delete one JobCard.
     * @example
     * // Delete one JobCard
     * const JobCard = await prisma.jobCard.delete({
     *   where: {
     *     // ... filter to delete one JobCard
     *   }
     * })
     *
     */
    delete<T extends JobCardDeleteArgs>(args: Prisma.SelectSubset<T, JobCardDeleteArgs<ExtArgs>>): Prisma.Prisma__JobCardClient<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one JobCard.
     * @param {JobCardUpdateArgs} args - Arguments to update one JobCard.
     * @example
     * // Update one JobCard
     * const jobCard = await prisma.jobCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobCardUpdateArgs>(args: Prisma.SelectSubset<T, JobCardUpdateArgs<ExtArgs>>): Prisma.Prisma__JobCardClient<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more JobCards.
     * @param {JobCardDeleteManyArgs} args - Arguments to filter JobCards to delete.
     * @example
     * // Delete a few JobCards
     * const { count } = await prisma.jobCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobCardDeleteManyArgs>(args?: Prisma.SelectSubset<T, JobCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JobCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobCards
     * const jobCard = await prisma.jobCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobCardUpdateManyArgs>(args: Prisma.SelectSubset<T, JobCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JobCards and returns the data updated in the database.
     * @param {JobCardUpdateManyAndReturnArgs} args - Arguments to update many JobCards.
     * @example
     * // Update many JobCards
     * const jobCard = await prisma.jobCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more JobCards and only return the `id`
     * const jobCardWithIdOnly = await prisma.jobCard.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobCardUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JobCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one JobCard.
     * @param {JobCardUpsertArgs} args - Arguments to update or create a JobCard.
     * @example
     * // Update or create a JobCard
     * const jobCard = await prisma.jobCard.upsert({
     *   create: {
     *     // ... data to create a JobCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobCard we want to update
     *   }
     * })
     */
    upsert<T extends JobCardUpsertArgs>(args: Prisma.SelectSubset<T, JobCardUpsertArgs<ExtArgs>>): Prisma.Prisma__JobCardClient<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of JobCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCardCountArgs} args - Arguments to filter JobCards to count.
     * @example
     * // Count the number of JobCards
     * const count = await prisma.jobCard.count({
     *   where: {
     *     // ... the filter for the JobCards we want to count
     *   }
     * })
    **/
    count<T extends JobCardCountArgs>(args?: Prisma.Subset<T, JobCardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JobCardCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a JobCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobCardAggregateArgs>(args: Prisma.Subset<T, JobCardAggregateArgs>): Prisma.PrismaPromise<GetJobCardAggregateType<T>>;
    /**
     * Group by JobCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCardGroupByArgs} args - Group by arguments.
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
    groupBy<T extends JobCardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JobCardGroupByArgs['orderBy'];
    } : {
        orderBy?: JobCardGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JobCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JobCard model
     */
    readonly fields: JobCardFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for JobCard.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__JobCardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    jobLists<T extends Prisma.JobCard$jobListsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JobCard$jobListsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    purchaseOrder<T extends Prisma.JobCard$purchaseOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JobCard$purchaseOrderArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the JobCard model
 */
export interface JobCardFieldRefs {
    readonly id: Prisma.FieldRef<"JobCard", 'String'>;
    readonly jobNo: Prisma.FieldRef<"JobCard", 'String'>;
    readonly purchaseOrderId: Prisma.FieldRef<"JobCard", 'String'>;
    readonly status: Prisma.FieldRef<"JobCard", 'JobCardStatus'>;
    readonly createdById: Prisma.FieldRef<"JobCard", 'String'>;
    readonly createdAt: Prisma.FieldRef<"JobCard", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"JobCard", 'DateTime'>;
}
/**
 * JobCard findUnique
 */
export type JobCardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardInclude<ExtArgs> | null;
    /**
     * Filter, which JobCard to fetch.
     */
    where: Prisma.JobCardWhereUniqueInput;
};
/**
 * JobCard findUniqueOrThrow
 */
export type JobCardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardInclude<ExtArgs> | null;
    /**
     * Filter, which JobCard to fetch.
     */
    where: Prisma.JobCardWhereUniqueInput;
};
/**
 * JobCard findFirst
 */
export type JobCardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardInclude<ExtArgs> | null;
    /**
     * Filter, which JobCard to fetch.
     */
    where?: Prisma.JobCardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobCards to fetch.
     */
    orderBy?: Prisma.JobCardOrderByWithRelationInput | Prisma.JobCardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobCards.
     */
    cursor?: Prisma.JobCardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobCards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobCards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobCards.
     */
    distinct?: Prisma.JobCardScalarFieldEnum | Prisma.JobCardScalarFieldEnum[];
};
/**
 * JobCard findFirstOrThrow
 */
export type JobCardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardInclude<ExtArgs> | null;
    /**
     * Filter, which JobCard to fetch.
     */
    where?: Prisma.JobCardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobCards to fetch.
     */
    orderBy?: Prisma.JobCardOrderByWithRelationInput | Prisma.JobCardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobCards.
     */
    cursor?: Prisma.JobCardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobCards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobCards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobCards.
     */
    distinct?: Prisma.JobCardScalarFieldEnum | Prisma.JobCardScalarFieldEnum[];
};
/**
 * JobCard findMany
 */
export type JobCardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardInclude<ExtArgs> | null;
    /**
     * Filter, which JobCards to fetch.
     */
    where?: Prisma.JobCardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobCards to fetch.
     */
    orderBy?: Prisma.JobCardOrderByWithRelationInput | Prisma.JobCardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JobCards.
     */
    cursor?: Prisma.JobCardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobCards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobCards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobCards.
     */
    distinct?: Prisma.JobCardScalarFieldEnum | Prisma.JobCardScalarFieldEnum[];
};
/**
 * JobCard create
 */
export type JobCardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardInclude<ExtArgs> | null;
    /**
     * The data needed to create a JobCard.
     */
    data: Prisma.XOR<Prisma.JobCardCreateInput, Prisma.JobCardUncheckedCreateInput>;
};
/**
 * JobCard createMany
 */
export type JobCardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobCards.
     */
    data: Prisma.JobCardCreateManyInput | Prisma.JobCardCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * JobCard createManyAndReturn
 */
export type JobCardCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * The data used to create many JobCards.
     */
    data: Prisma.JobCardCreateManyInput | Prisma.JobCardCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * JobCard update
 */
export type JobCardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardInclude<ExtArgs> | null;
    /**
     * The data needed to update a JobCard.
     */
    data: Prisma.XOR<Prisma.JobCardUpdateInput, Prisma.JobCardUncheckedUpdateInput>;
    /**
     * Choose, which JobCard to update.
     */
    where: Prisma.JobCardWhereUniqueInput;
};
/**
 * JobCard updateMany
 */
export type JobCardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update JobCards.
     */
    data: Prisma.XOR<Prisma.JobCardUpdateManyMutationInput, Prisma.JobCardUncheckedUpdateManyInput>;
    /**
     * Filter which JobCards to update
     */
    where?: Prisma.JobCardWhereInput;
    /**
     * Limit how many JobCards to update.
     */
    limit?: number;
};
/**
 * JobCard updateManyAndReturn
 */
export type JobCardUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * The data used to update JobCards.
     */
    data: Prisma.XOR<Prisma.JobCardUpdateManyMutationInput, Prisma.JobCardUncheckedUpdateManyInput>;
    /**
     * Filter which JobCards to update
     */
    where?: Prisma.JobCardWhereInput;
    /**
     * Limit how many JobCards to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * JobCard upsert
 */
export type JobCardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardInclude<ExtArgs> | null;
    /**
     * The filter to search for the JobCard to update in case it exists.
     */
    where: Prisma.JobCardWhereUniqueInput;
    /**
     * In case the JobCard found by the `where` argument doesn't exist, create a new JobCard with this data.
     */
    create: Prisma.XOR<Prisma.JobCardCreateInput, Prisma.JobCardUncheckedCreateInput>;
    /**
     * In case the JobCard was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.JobCardUpdateInput, Prisma.JobCardUncheckedUpdateInput>;
};
/**
 * JobCard delete
 */
export type JobCardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardInclude<ExtArgs> | null;
    /**
     * Filter which JobCard to delete.
     */
    where: Prisma.JobCardWhereUniqueInput;
};
/**
 * JobCard deleteMany
 */
export type JobCardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JobCards to delete
     */
    where?: Prisma.JobCardWhereInput;
    /**
     * Limit how many JobCards to delete.
     */
    limit?: number;
};
/**
 * JobCard.jobLists
 */
export type JobCard$jobListsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * JobCard.purchaseOrder
 */
export type JobCard$purchaseOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderWhereInput;
};
/**
 * JobCard without action
 */
export type JobCardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCard
     */
    select?: Prisma.JobCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobCard
     */
    omit?: Prisma.JobCardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobCardInclude<ExtArgs> | null;
};
