import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model JobList
 *
 */
export type JobListModel = runtime.Types.Result.DefaultSelection<Prisma.$JobListPayload>;
export type AggregateJobList = {
    _count: JobListCountAggregateOutputType | null;
    _avg: JobListAvgAggregateOutputType | null;
    _sum: JobListSumAggregateOutputType | null;
    _min: JobListMinAggregateOutputType | null;
    _max: JobListMaxAggregateOutputType | null;
};
export type JobListAvgAggregateOutputType = {
    quantity: number | null;
};
export type JobListSumAggregateOutputType = {
    quantity: number | null;
};
export type JobListMinAggregateOutputType = {
    id: string | null;
    jobCardId: string | null;
    lineItemId: string | null;
    quantity: number | null;
    status: $Enums.JobCardStatus | null;
    partId: string | null;
};
export type JobListMaxAggregateOutputType = {
    id: string | null;
    jobCardId: string | null;
    lineItemId: string | null;
    quantity: number | null;
    status: $Enums.JobCardStatus | null;
    partId: string | null;
};
export type JobListCountAggregateOutputType = {
    id: number;
    jobCardId: number;
    lineItemId: number;
    quantity: number;
    status: number;
    partId: number;
    _all: number;
};
export type JobListAvgAggregateInputType = {
    quantity?: true;
};
export type JobListSumAggregateInputType = {
    quantity?: true;
};
export type JobListMinAggregateInputType = {
    id?: true;
    jobCardId?: true;
    lineItemId?: true;
    quantity?: true;
    status?: true;
    partId?: true;
};
export type JobListMaxAggregateInputType = {
    id?: true;
    jobCardId?: true;
    lineItemId?: true;
    quantity?: true;
    status?: true;
    partId?: true;
};
export type JobListCountAggregateInputType = {
    id?: true;
    jobCardId?: true;
    lineItemId?: true;
    quantity?: true;
    status?: true;
    partId?: true;
    _all?: true;
};
export type JobListAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JobList to aggregate.
     */
    where?: Prisma.JobListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobLists to fetch.
     */
    orderBy?: Prisma.JobListOrderByWithRelationInput | Prisma.JobListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.JobListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobLists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JobLists
    **/
    _count?: true | JobListCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: JobListAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: JobListSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JobListMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JobListMaxAggregateInputType;
};
export type GetJobListAggregateType<T extends JobListAggregateArgs> = {
    [P in keyof T & keyof AggregateJobList]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJobList[P]> : Prisma.GetScalarType<T[P], AggregateJobList[P]>;
};
export type JobListGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobListWhereInput;
    orderBy?: Prisma.JobListOrderByWithAggregationInput | Prisma.JobListOrderByWithAggregationInput[];
    by: Prisma.JobListScalarFieldEnum[] | Prisma.JobListScalarFieldEnum;
    having?: Prisma.JobListScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobListCountAggregateInputType | true;
    _avg?: JobListAvgAggregateInputType;
    _sum?: JobListSumAggregateInputType;
    _min?: JobListMinAggregateInputType;
    _max?: JobListMaxAggregateInputType;
};
export type JobListGroupByOutputType = {
    id: string;
    jobCardId: string;
    lineItemId: string | null;
    quantity: number;
    status: $Enums.JobCardStatus;
    partId: string | null;
    _count: JobListCountAggregateOutputType | null;
    _avg: JobListAvgAggregateOutputType | null;
    _sum: JobListSumAggregateOutputType | null;
    _min: JobListMinAggregateOutputType | null;
    _max: JobListMaxAggregateOutputType | null;
};
export type GetJobListGroupByPayload<T extends JobListGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JobListGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JobListGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JobListGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JobListGroupByOutputType[P]>;
}>>;
export type JobListWhereInput = {
    AND?: Prisma.JobListWhereInput | Prisma.JobListWhereInput[];
    OR?: Prisma.JobListWhereInput[];
    NOT?: Prisma.JobListWhereInput | Prisma.JobListWhereInput[];
    id?: Prisma.StringFilter<"JobList"> | string;
    jobCardId?: Prisma.StringFilter<"JobList"> | string;
    lineItemId?: Prisma.StringNullableFilter<"JobList"> | string | null;
    quantity?: Prisma.IntFilter<"JobList"> | number;
    status?: Prisma.EnumJobCardStatusFilter<"JobList"> | $Enums.JobCardStatus;
    partId?: Prisma.StringNullableFilter<"JobList"> | string | null;
    jobCard?: Prisma.XOR<Prisma.JobCardScalarRelationFilter, Prisma.JobCardWhereInput>;
    lineItem?: Prisma.XOR<Prisma.PoLineItemNullableScalarRelationFilter, Prisma.PoLineItemWhereInput> | null;
    part?: Prisma.XOR<Prisma.PartNullableScalarRelationFilter, Prisma.PartWhereInput> | null;
    jobMaterials?: Prisma.JobMaterialListRelationFilter;
    operations?: Prisma.OperationListRelationFilter;
};
export type JobListOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    jobCardId?: Prisma.SortOrder;
    lineItemId?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    partId?: Prisma.SortOrderInput | Prisma.SortOrder;
    jobCard?: Prisma.JobCardOrderByWithRelationInput;
    lineItem?: Prisma.PoLineItemOrderByWithRelationInput;
    part?: Prisma.PartOrderByWithRelationInput;
    jobMaterials?: Prisma.JobMaterialOrderByRelationAggregateInput;
    operations?: Prisma.OperationOrderByRelationAggregateInput;
};
export type JobListWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    lineItemId?: string;
    AND?: Prisma.JobListWhereInput | Prisma.JobListWhereInput[];
    OR?: Prisma.JobListWhereInput[];
    NOT?: Prisma.JobListWhereInput | Prisma.JobListWhereInput[];
    jobCardId?: Prisma.StringFilter<"JobList"> | string;
    quantity?: Prisma.IntFilter<"JobList"> | number;
    status?: Prisma.EnumJobCardStatusFilter<"JobList"> | $Enums.JobCardStatus;
    partId?: Prisma.StringNullableFilter<"JobList"> | string | null;
    jobCard?: Prisma.XOR<Prisma.JobCardScalarRelationFilter, Prisma.JobCardWhereInput>;
    lineItem?: Prisma.XOR<Prisma.PoLineItemNullableScalarRelationFilter, Prisma.PoLineItemWhereInput> | null;
    part?: Prisma.XOR<Prisma.PartNullableScalarRelationFilter, Prisma.PartWhereInput> | null;
    jobMaterials?: Prisma.JobMaterialListRelationFilter;
    operations?: Prisma.OperationListRelationFilter;
}, "id" | "lineItemId">;
export type JobListOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    jobCardId?: Prisma.SortOrder;
    lineItemId?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    partId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.JobListCountOrderByAggregateInput;
    _avg?: Prisma.JobListAvgOrderByAggregateInput;
    _max?: Prisma.JobListMaxOrderByAggregateInput;
    _min?: Prisma.JobListMinOrderByAggregateInput;
    _sum?: Prisma.JobListSumOrderByAggregateInput;
};
export type JobListScalarWhereWithAggregatesInput = {
    AND?: Prisma.JobListScalarWhereWithAggregatesInput | Prisma.JobListScalarWhereWithAggregatesInput[];
    OR?: Prisma.JobListScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JobListScalarWhereWithAggregatesInput | Prisma.JobListScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"JobList"> | string;
    jobCardId?: Prisma.StringWithAggregatesFilter<"JobList"> | string;
    lineItemId?: Prisma.StringNullableWithAggregatesFilter<"JobList"> | string | null;
    quantity?: Prisma.IntWithAggregatesFilter<"JobList"> | number;
    status?: Prisma.EnumJobCardStatusWithAggregatesFilter<"JobList"> | $Enums.JobCardStatus;
    partId?: Prisma.StringNullableWithAggregatesFilter<"JobList"> | string | null;
};
export type JobListCreateInput = {
    id?: string;
    quantity: number;
    status?: $Enums.JobCardStatus;
    jobCard: Prisma.JobCardCreateNestedOneWithoutJobListsInput;
    lineItem?: Prisma.PoLineItemCreateNestedOneWithoutJobListInput;
    part?: Prisma.PartCreateNestedOneWithoutJobListsInput;
    jobMaterials?: Prisma.JobMaterialCreateNestedManyWithoutJobListInput;
    operations?: Prisma.OperationCreateNestedManyWithoutJobListInput;
};
export type JobListUncheckedCreateInput = {
    id?: string;
    jobCardId: string;
    lineItemId?: string | null;
    quantity: number;
    status?: $Enums.JobCardStatus;
    partId?: string | null;
    jobMaterials?: Prisma.JobMaterialUncheckedCreateNestedManyWithoutJobListInput;
    operations?: Prisma.OperationUncheckedCreateNestedManyWithoutJobListInput;
};
export type JobListUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    jobCard?: Prisma.JobCardUpdateOneRequiredWithoutJobListsNestedInput;
    lineItem?: Prisma.PoLineItemUpdateOneWithoutJobListNestedInput;
    part?: Prisma.PartUpdateOneWithoutJobListsNestedInput;
    jobMaterials?: Prisma.JobMaterialUpdateManyWithoutJobListNestedInput;
    operations?: Prisma.OperationUpdateManyWithoutJobListNestedInput;
};
export type JobListUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    partId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jobMaterials?: Prisma.JobMaterialUncheckedUpdateManyWithoutJobListNestedInput;
    operations?: Prisma.OperationUncheckedUpdateManyWithoutJobListNestedInput;
};
export type JobListCreateManyInput = {
    id?: string;
    jobCardId: string;
    lineItemId?: string | null;
    quantity: number;
    status?: $Enums.JobCardStatus;
    partId?: string | null;
};
export type JobListUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
};
export type JobListUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    partId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type JobListNullableScalarRelationFilter = {
    is?: Prisma.JobListWhereInput | null;
    isNot?: Prisma.JobListWhereInput | null;
};
export type JobListListRelationFilter = {
    every?: Prisma.JobListWhereInput;
    some?: Prisma.JobListWhereInput;
    none?: Prisma.JobListWhereInput;
};
export type JobListOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JobListCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobCardId?: Prisma.SortOrder;
    lineItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
};
export type JobListAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type JobListMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobCardId?: Prisma.SortOrder;
    lineItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
};
export type JobListMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobCardId?: Prisma.SortOrder;
    lineItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
};
export type JobListSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type JobListScalarRelationFilter = {
    is?: Prisma.JobListWhereInput;
    isNot?: Prisma.JobListWhereInput;
};
export type JobListCreateNestedOneWithoutLineItemInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutLineItemInput, Prisma.JobListUncheckedCreateWithoutLineItemInput>;
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutLineItemInput;
    connect?: Prisma.JobListWhereUniqueInput;
};
export type JobListUncheckedCreateNestedOneWithoutLineItemInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutLineItemInput, Prisma.JobListUncheckedCreateWithoutLineItemInput>;
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutLineItemInput;
    connect?: Prisma.JobListWhereUniqueInput;
};
export type JobListUpdateOneWithoutLineItemNestedInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutLineItemInput, Prisma.JobListUncheckedCreateWithoutLineItemInput>;
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutLineItemInput;
    upsert?: Prisma.JobListUpsertWithoutLineItemInput;
    disconnect?: Prisma.JobListWhereInput | boolean;
    delete?: Prisma.JobListWhereInput | boolean;
    connect?: Prisma.JobListWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JobListUpdateToOneWithWhereWithoutLineItemInput, Prisma.JobListUpdateWithoutLineItemInput>, Prisma.JobListUncheckedUpdateWithoutLineItemInput>;
};
export type JobListUncheckedUpdateOneWithoutLineItemNestedInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutLineItemInput, Prisma.JobListUncheckedCreateWithoutLineItemInput>;
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutLineItemInput;
    upsert?: Prisma.JobListUpsertWithoutLineItemInput;
    disconnect?: Prisma.JobListWhereInput | boolean;
    delete?: Prisma.JobListWhereInput | boolean;
    connect?: Prisma.JobListWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JobListUpdateToOneWithWhereWithoutLineItemInput, Prisma.JobListUpdateWithoutLineItemInput>, Prisma.JobListUncheckedUpdateWithoutLineItemInput>;
};
export type JobListCreateNestedManyWithoutPartInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutPartInput, Prisma.JobListUncheckedCreateWithoutPartInput> | Prisma.JobListCreateWithoutPartInput[] | Prisma.JobListUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutPartInput | Prisma.JobListCreateOrConnectWithoutPartInput[];
    createMany?: Prisma.JobListCreateManyPartInputEnvelope;
    connect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
};
export type JobListUncheckedCreateNestedManyWithoutPartInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutPartInput, Prisma.JobListUncheckedCreateWithoutPartInput> | Prisma.JobListCreateWithoutPartInput[] | Prisma.JobListUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutPartInput | Prisma.JobListCreateOrConnectWithoutPartInput[];
    createMany?: Prisma.JobListCreateManyPartInputEnvelope;
    connect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
};
export type JobListUpdateManyWithoutPartNestedInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutPartInput, Prisma.JobListUncheckedCreateWithoutPartInput> | Prisma.JobListCreateWithoutPartInput[] | Prisma.JobListUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutPartInput | Prisma.JobListCreateOrConnectWithoutPartInput[];
    upsert?: Prisma.JobListUpsertWithWhereUniqueWithoutPartInput | Prisma.JobListUpsertWithWhereUniqueWithoutPartInput[];
    createMany?: Prisma.JobListCreateManyPartInputEnvelope;
    set?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    disconnect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    delete?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    connect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    update?: Prisma.JobListUpdateWithWhereUniqueWithoutPartInput | Prisma.JobListUpdateWithWhereUniqueWithoutPartInput[];
    updateMany?: Prisma.JobListUpdateManyWithWhereWithoutPartInput | Prisma.JobListUpdateManyWithWhereWithoutPartInput[];
    deleteMany?: Prisma.JobListScalarWhereInput | Prisma.JobListScalarWhereInput[];
};
export type JobListUncheckedUpdateManyWithoutPartNestedInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutPartInput, Prisma.JobListUncheckedCreateWithoutPartInput> | Prisma.JobListCreateWithoutPartInput[] | Prisma.JobListUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutPartInput | Prisma.JobListCreateOrConnectWithoutPartInput[];
    upsert?: Prisma.JobListUpsertWithWhereUniqueWithoutPartInput | Prisma.JobListUpsertWithWhereUniqueWithoutPartInput[];
    createMany?: Prisma.JobListCreateManyPartInputEnvelope;
    set?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    disconnect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    delete?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    connect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    update?: Prisma.JobListUpdateWithWhereUniqueWithoutPartInput | Prisma.JobListUpdateWithWhereUniqueWithoutPartInput[];
    updateMany?: Prisma.JobListUpdateManyWithWhereWithoutPartInput | Prisma.JobListUpdateManyWithWhereWithoutPartInput[];
    deleteMany?: Prisma.JobListScalarWhereInput | Prisma.JobListScalarWhereInput[];
};
export type JobListCreateNestedManyWithoutJobCardInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutJobCardInput, Prisma.JobListUncheckedCreateWithoutJobCardInput> | Prisma.JobListCreateWithoutJobCardInput[] | Prisma.JobListUncheckedCreateWithoutJobCardInput[];
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutJobCardInput | Prisma.JobListCreateOrConnectWithoutJobCardInput[];
    createMany?: Prisma.JobListCreateManyJobCardInputEnvelope;
    connect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
};
export type JobListUncheckedCreateNestedManyWithoutJobCardInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutJobCardInput, Prisma.JobListUncheckedCreateWithoutJobCardInput> | Prisma.JobListCreateWithoutJobCardInput[] | Prisma.JobListUncheckedCreateWithoutJobCardInput[];
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutJobCardInput | Prisma.JobListCreateOrConnectWithoutJobCardInput[];
    createMany?: Prisma.JobListCreateManyJobCardInputEnvelope;
    connect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
};
export type JobListUpdateManyWithoutJobCardNestedInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutJobCardInput, Prisma.JobListUncheckedCreateWithoutJobCardInput> | Prisma.JobListCreateWithoutJobCardInput[] | Prisma.JobListUncheckedCreateWithoutJobCardInput[];
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutJobCardInput | Prisma.JobListCreateOrConnectWithoutJobCardInput[];
    upsert?: Prisma.JobListUpsertWithWhereUniqueWithoutJobCardInput | Prisma.JobListUpsertWithWhereUniqueWithoutJobCardInput[];
    createMany?: Prisma.JobListCreateManyJobCardInputEnvelope;
    set?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    disconnect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    delete?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    connect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    update?: Prisma.JobListUpdateWithWhereUniqueWithoutJobCardInput | Prisma.JobListUpdateWithWhereUniqueWithoutJobCardInput[];
    updateMany?: Prisma.JobListUpdateManyWithWhereWithoutJobCardInput | Prisma.JobListUpdateManyWithWhereWithoutJobCardInput[];
    deleteMany?: Prisma.JobListScalarWhereInput | Prisma.JobListScalarWhereInput[];
};
export type JobListUncheckedUpdateManyWithoutJobCardNestedInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutJobCardInput, Prisma.JobListUncheckedCreateWithoutJobCardInput> | Prisma.JobListCreateWithoutJobCardInput[] | Prisma.JobListUncheckedCreateWithoutJobCardInput[];
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutJobCardInput | Prisma.JobListCreateOrConnectWithoutJobCardInput[];
    upsert?: Prisma.JobListUpsertWithWhereUniqueWithoutJobCardInput | Prisma.JobListUpsertWithWhereUniqueWithoutJobCardInput[];
    createMany?: Prisma.JobListCreateManyJobCardInputEnvelope;
    set?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    disconnect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    delete?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    connect?: Prisma.JobListWhereUniqueInput | Prisma.JobListWhereUniqueInput[];
    update?: Prisma.JobListUpdateWithWhereUniqueWithoutJobCardInput | Prisma.JobListUpdateWithWhereUniqueWithoutJobCardInput[];
    updateMany?: Prisma.JobListUpdateManyWithWhereWithoutJobCardInput | Prisma.JobListUpdateManyWithWhereWithoutJobCardInput[];
    deleteMany?: Prisma.JobListScalarWhereInput | Prisma.JobListScalarWhereInput[];
};
export type JobListCreateNestedOneWithoutJobMaterialsInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutJobMaterialsInput, Prisma.JobListUncheckedCreateWithoutJobMaterialsInput>;
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutJobMaterialsInput;
    connect?: Prisma.JobListWhereUniqueInput;
};
export type JobListUpdateOneRequiredWithoutJobMaterialsNestedInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutJobMaterialsInput, Prisma.JobListUncheckedCreateWithoutJobMaterialsInput>;
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutJobMaterialsInput;
    upsert?: Prisma.JobListUpsertWithoutJobMaterialsInput;
    connect?: Prisma.JobListWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JobListUpdateToOneWithWhereWithoutJobMaterialsInput, Prisma.JobListUpdateWithoutJobMaterialsInput>, Prisma.JobListUncheckedUpdateWithoutJobMaterialsInput>;
};
export type JobListCreateNestedOneWithoutOperationsInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutOperationsInput, Prisma.JobListUncheckedCreateWithoutOperationsInput>;
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutOperationsInput;
    connect?: Prisma.JobListWhereUniqueInput;
};
export type JobListUpdateOneRequiredWithoutOperationsNestedInput = {
    create?: Prisma.XOR<Prisma.JobListCreateWithoutOperationsInput, Prisma.JobListUncheckedCreateWithoutOperationsInput>;
    connectOrCreate?: Prisma.JobListCreateOrConnectWithoutOperationsInput;
    upsert?: Prisma.JobListUpsertWithoutOperationsInput;
    connect?: Prisma.JobListWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JobListUpdateToOneWithWhereWithoutOperationsInput, Prisma.JobListUpdateWithoutOperationsInput>, Prisma.JobListUncheckedUpdateWithoutOperationsInput>;
};
export type JobListCreateWithoutLineItemInput = {
    id?: string;
    quantity: number;
    status?: $Enums.JobCardStatus;
    jobCard: Prisma.JobCardCreateNestedOneWithoutJobListsInput;
    part?: Prisma.PartCreateNestedOneWithoutJobListsInput;
    jobMaterials?: Prisma.JobMaterialCreateNestedManyWithoutJobListInput;
    operations?: Prisma.OperationCreateNestedManyWithoutJobListInput;
};
export type JobListUncheckedCreateWithoutLineItemInput = {
    id?: string;
    jobCardId: string;
    quantity: number;
    status?: $Enums.JobCardStatus;
    partId?: string | null;
    jobMaterials?: Prisma.JobMaterialUncheckedCreateNestedManyWithoutJobListInput;
    operations?: Prisma.OperationUncheckedCreateNestedManyWithoutJobListInput;
};
export type JobListCreateOrConnectWithoutLineItemInput = {
    where: Prisma.JobListWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobListCreateWithoutLineItemInput, Prisma.JobListUncheckedCreateWithoutLineItemInput>;
};
export type JobListUpsertWithoutLineItemInput = {
    update: Prisma.XOR<Prisma.JobListUpdateWithoutLineItemInput, Prisma.JobListUncheckedUpdateWithoutLineItemInput>;
    create: Prisma.XOR<Prisma.JobListCreateWithoutLineItemInput, Prisma.JobListUncheckedCreateWithoutLineItemInput>;
    where?: Prisma.JobListWhereInput;
};
export type JobListUpdateToOneWithWhereWithoutLineItemInput = {
    where?: Prisma.JobListWhereInput;
    data: Prisma.XOR<Prisma.JobListUpdateWithoutLineItemInput, Prisma.JobListUncheckedUpdateWithoutLineItemInput>;
};
export type JobListUpdateWithoutLineItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    jobCard?: Prisma.JobCardUpdateOneRequiredWithoutJobListsNestedInput;
    part?: Prisma.PartUpdateOneWithoutJobListsNestedInput;
    jobMaterials?: Prisma.JobMaterialUpdateManyWithoutJobListNestedInput;
    operations?: Prisma.OperationUpdateManyWithoutJobListNestedInput;
};
export type JobListUncheckedUpdateWithoutLineItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    partId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jobMaterials?: Prisma.JobMaterialUncheckedUpdateManyWithoutJobListNestedInput;
    operations?: Prisma.OperationUncheckedUpdateManyWithoutJobListNestedInput;
};
export type JobListCreateWithoutPartInput = {
    id?: string;
    quantity: number;
    status?: $Enums.JobCardStatus;
    jobCard: Prisma.JobCardCreateNestedOneWithoutJobListsInput;
    lineItem?: Prisma.PoLineItemCreateNestedOneWithoutJobListInput;
    jobMaterials?: Prisma.JobMaterialCreateNestedManyWithoutJobListInput;
    operations?: Prisma.OperationCreateNestedManyWithoutJobListInput;
};
export type JobListUncheckedCreateWithoutPartInput = {
    id?: string;
    jobCardId: string;
    lineItemId?: string | null;
    quantity: number;
    status?: $Enums.JobCardStatus;
    jobMaterials?: Prisma.JobMaterialUncheckedCreateNestedManyWithoutJobListInput;
    operations?: Prisma.OperationUncheckedCreateNestedManyWithoutJobListInput;
};
export type JobListCreateOrConnectWithoutPartInput = {
    where: Prisma.JobListWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobListCreateWithoutPartInput, Prisma.JobListUncheckedCreateWithoutPartInput>;
};
export type JobListCreateManyPartInputEnvelope = {
    data: Prisma.JobListCreateManyPartInput | Prisma.JobListCreateManyPartInput[];
    skipDuplicates?: boolean;
};
export type JobListUpsertWithWhereUniqueWithoutPartInput = {
    where: Prisma.JobListWhereUniqueInput;
    update: Prisma.XOR<Prisma.JobListUpdateWithoutPartInput, Prisma.JobListUncheckedUpdateWithoutPartInput>;
    create: Prisma.XOR<Prisma.JobListCreateWithoutPartInput, Prisma.JobListUncheckedCreateWithoutPartInput>;
};
export type JobListUpdateWithWhereUniqueWithoutPartInput = {
    where: Prisma.JobListWhereUniqueInput;
    data: Prisma.XOR<Prisma.JobListUpdateWithoutPartInput, Prisma.JobListUncheckedUpdateWithoutPartInput>;
};
export type JobListUpdateManyWithWhereWithoutPartInput = {
    where: Prisma.JobListScalarWhereInput;
    data: Prisma.XOR<Prisma.JobListUpdateManyMutationInput, Prisma.JobListUncheckedUpdateManyWithoutPartInput>;
};
export type JobListScalarWhereInput = {
    AND?: Prisma.JobListScalarWhereInput | Prisma.JobListScalarWhereInput[];
    OR?: Prisma.JobListScalarWhereInput[];
    NOT?: Prisma.JobListScalarWhereInput | Prisma.JobListScalarWhereInput[];
    id?: Prisma.StringFilter<"JobList"> | string;
    jobCardId?: Prisma.StringFilter<"JobList"> | string;
    lineItemId?: Prisma.StringNullableFilter<"JobList"> | string | null;
    quantity?: Prisma.IntFilter<"JobList"> | number;
    status?: Prisma.EnumJobCardStatusFilter<"JobList"> | $Enums.JobCardStatus;
    partId?: Prisma.StringNullableFilter<"JobList"> | string | null;
};
export type JobListCreateWithoutJobCardInput = {
    id?: string;
    quantity: number;
    status?: $Enums.JobCardStatus;
    lineItem?: Prisma.PoLineItemCreateNestedOneWithoutJobListInput;
    part?: Prisma.PartCreateNestedOneWithoutJobListsInput;
    jobMaterials?: Prisma.JobMaterialCreateNestedManyWithoutJobListInput;
    operations?: Prisma.OperationCreateNestedManyWithoutJobListInput;
};
export type JobListUncheckedCreateWithoutJobCardInput = {
    id?: string;
    lineItemId?: string | null;
    quantity: number;
    status?: $Enums.JobCardStatus;
    partId?: string | null;
    jobMaterials?: Prisma.JobMaterialUncheckedCreateNestedManyWithoutJobListInput;
    operations?: Prisma.OperationUncheckedCreateNestedManyWithoutJobListInput;
};
export type JobListCreateOrConnectWithoutJobCardInput = {
    where: Prisma.JobListWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobListCreateWithoutJobCardInput, Prisma.JobListUncheckedCreateWithoutJobCardInput>;
};
export type JobListCreateManyJobCardInputEnvelope = {
    data: Prisma.JobListCreateManyJobCardInput | Prisma.JobListCreateManyJobCardInput[];
    skipDuplicates?: boolean;
};
export type JobListUpsertWithWhereUniqueWithoutJobCardInput = {
    where: Prisma.JobListWhereUniqueInput;
    update: Prisma.XOR<Prisma.JobListUpdateWithoutJobCardInput, Prisma.JobListUncheckedUpdateWithoutJobCardInput>;
    create: Prisma.XOR<Prisma.JobListCreateWithoutJobCardInput, Prisma.JobListUncheckedCreateWithoutJobCardInput>;
};
export type JobListUpdateWithWhereUniqueWithoutJobCardInput = {
    where: Prisma.JobListWhereUniqueInput;
    data: Prisma.XOR<Prisma.JobListUpdateWithoutJobCardInput, Prisma.JobListUncheckedUpdateWithoutJobCardInput>;
};
export type JobListUpdateManyWithWhereWithoutJobCardInput = {
    where: Prisma.JobListScalarWhereInput;
    data: Prisma.XOR<Prisma.JobListUpdateManyMutationInput, Prisma.JobListUncheckedUpdateManyWithoutJobCardInput>;
};
export type JobListCreateWithoutJobMaterialsInput = {
    id?: string;
    quantity: number;
    status?: $Enums.JobCardStatus;
    jobCard: Prisma.JobCardCreateNestedOneWithoutJobListsInput;
    lineItem?: Prisma.PoLineItemCreateNestedOneWithoutJobListInput;
    part?: Prisma.PartCreateNestedOneWithoutJobListsInput;
    operations?: Prisma.OperationCreateNestedManyWithoutJobListInput;
};
export type JobListUncheckedCreateWithoutJobMaterialsInput = {
    id?: string;
    jobCardId: string;
    lineItemId?: string | null;
    quantity: number;
    status?: $Enums.JobCardStatus;
    partId?: string | null;
    operations?: Prisma.OperationUncheckedCreateNestedManyWithoutJobListInput;
};
export type JobListCreateOrConnectWithoutJobMaterialsInput = {
    where: Prisma.JobListWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobListCreateWithoutJobMaterialsInput, Prisma.JobListUncheckedCreateWithoutJobMaterialsInput>;
};
export type JobListUpsertWithoutJobMaterialsInput = {
    update: Prisma.XOR<Prisma.JobListUpdateWithoutJobMaterialsInput, Prisma.JobListUncheckedUpdateWithoutJobMaterialsInput>;
    create: Prisma.XOR<Prisma.JobListCreateWithoutJobMaterialsInput, Prisma.JobListUncheckedCreateWithoutJobMaterialsInput>;
    where?: Prisma.JobListWhereInput;
};
export type JobListUpdateToOneWithWhereWithoutJobMaterialsInput = {
    where?: Prisma.JobListWhereInput;
    data: Prisma.XOR<Prisma.JobListUpdateWithoutJobMaterialsInput, Prisma.JobListUncheckedUpdateWithoutJobMaterialsInput>;
};
export type JobListUpdateWithoutJobMaterialsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    jobCard?: Prisma.JobCardUpdateOneRequiredWithoutJobListsNestedInput;
    lineItem?: Prisma.PoLineItemUpdateOneWithoutJobListNestedInput;
    part?: Prisma.PartUpdateOneWithoutJobListsNestedInput;
    operations?: Prisma.OperationUpdateManyWithoutJobListNestedInput;
};
export type JobListUncheckedUpdateWithoutJobMaterialsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    partId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    operations?: Prisma.OperationUncheckedUpdateManyWithoutJobListNestedInput;
};
export type JobListCreateWithoutOperationsInput = {
    id?: string;
    quantity: number;
    status?: $Enums.JobCardStatus;
    jobCard: Prisma.JobCardCreateNestedOneWithoutJobListsInput;
    lineItem?: Prisma.PoLineItemCreateNestedOneWithoutJobListInput;
    part?: Prisma.PartCreateNestedOneWithoutJobListsInput;
    jobMaterials?: Prisma.JobMaterialCreateNestedManyWithoutJobListInput;
};
export type JobListUncheckedCreateWithoutOperationsInput = {
    id?: string;
    jobCardId: string;
    lineItemId?: string | null;
    quantity: number;
    status?: $Enums.JobCardStatus;
    partId?: string | null;
    jobMaterials?: Prisma.JobMaterialUncheckedCreateNestedManyWithoutJobListInput;
};
export type JobListCreateOrConnectWithoutOperationsInput = {
    where: Prisma.JobListWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobListCreateWithoutOperationsInput, Prisma.JobListUncheckedCreateWithoutOperationsInput>;
};
export type JobListUpsertWithoutOperationsInput = {
    update: Prisma.XOR<Prisma.JobListUpdateWithoutOperationsInput, Prisma.JobListUncheckedUpdateWithoutOperationsInput>;
    create: Prisma.XOR<Prisma.JobListCreateWithoutOperationsInput, Prisma.JobListUncheckedCreateWithoutOperationsInput>;
    where?: Prisma.JobListWhereInput;
};
export type JobListUpdateToOneWithWhereWithoutOperationsInput = {
    where?: Prisma.JobListWhereInput;
    data: Prisma.XOR<Prisma.JobListUpdateWithoutOperationsInput, Prisma.JobListUncheckedUpdateWithoutOperationsInput>;
};
export type JobListUpdateWithoutOperationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    jobCard?: Prisma.JobCardUpdateOneRequiredWithoutJobListsNestedInput;
    lineItem?: Prisma.PoLineItemUpdateOneWithoutJobListNestedInput;
    part?: Prisma.PartUpdateOneWithoutJobListsNestedInput;
    jobMaterials?: Prisma.JobMaterialUpdateManyWithoutJobListNestedInput;
};
export type JobListUncheckedUpdateWithoutOperationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    partId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jobMaterials?: Prisma.JobMaterialUncheckedUpdateManyWithoutJobListNestedInput;
};
export type JobListCreateManyPartInput = {
    id?: string;
    jobCardId: string;
    lineItemId?: string | null;
    quantity: number;
    status?: $Enums.JobCardStatus;
};
export type JobListUpdateWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    jobCard?: Prisma.JobCardUpdateOneRequiredWithoutJobListsNestedInput;
    lineItem?: Prisma.PoLineItemUpdateOneWithoutJobListNestedInput;
    jobMaterials?: Prisma.JobMaterialUpdateManyWithoutJobListNestedInput;
    operations?: Prisma.OperationUpdateManyWithoutJobListNestedInput;
};
export type JobListUncheckedUpdateWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    jobMaterials?: Prisma.JobMaterialUncheckedUpdateManyWithoutJobListNestedInput;
    operations?: Prisma.OperationUncheckedUpdateManyWithoutJobListNestedInput;
};
export type JobListUncheckedUpdateManyWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    lineItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
};
export type JobListCreateManyJobCardInput = {
    id?: string;
    lineItemId?: string | null;
    quantity: number;
    status?: $Enums.JobCardStatus;
    partId?: string | null;
};
export type JobListUpdateWithoutJobCardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    lineItem?: Prisma.PoLineItemUpdateOneWithoutJobListNestedInput;
    part?: Prisma.PartUpdateOneWithoutJobListsNestedInput;
    jobMaterials?: Prisma.JobMaterialUpdateManyWithoutJobListNestedInput;
    operations?: Prisma.OperationUpdateManyWithoutJobListNestedInput;
};
export type JobListUncheckedUpdateWithoutJobCardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    partId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jobMaterials?: Prisma.JobMaterialUncheckedUpdateManyWithoutJobListNestedInput;
    operations?: Prisma.OperationUncheckedUpdateManyWithoutJobListNestedInput;
};
export type JobListUncheckedUpdateManyWithoutJobCardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lineItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumJobCardStatusFieldUpdateOperationsInput | $Enums.JobCardStatus;
    partId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type JobListCountOutputType
 */
export type JobListCountOutputType = {
    jobMaterials: number;
    operations: number;
};
export type JobListCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobMaterials?: boolean | JobListCountOutputTypeCountJobMaterialsArgs;
    operations?: boolean | JobListCountOutputTypeCountOperationsArgs;
};
/**
 * JobListCountOutputType without action
 */
export type JobListCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobListCountOutputType
     */
    select?: Prisma.JobListCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * JobListCountOutputType without action
 */
export type JobListCountOutputTypeCountJobMaterialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobMaterialWhereInput;
};
/**
 * JobListCountOutputType without action
 */
export type JobListCountOutputTypeCountOperationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperationWhereInput;
};
export type JobListSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobCardId?: boolean;
    lineItemId?: boolean;
    quantity?: boolean;
    status?: boolean;
    partId?: boolean;
    jobCard?: boolean | Prisma.JobCardDefaultArgs<ExtArgs>;
    lineItem?: boolean | Prisma.JobList$lineItemArgs<ExtArgs>;
    part?: boolean | Prisma.JobList$partArgs<ExtArgs>;
    jobMaterials?: boolean | Prisma.JobList$jobMaterialsArgs<ExtArgs>;
    operations?: boolean | Prisma.JobList$operationsArgs<ExtArgs>;
    _count?: boolean | Prisma.JobListCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jobList"]>;
export type JobListSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobCardId?: boolean;
    lineItemId?: boolean;
    quantity?: boolean;
    status?: boolean;
    partId?: boolean;
    jobCard?: boolean | Prisma.JobCardDefaultArgs<ExtArgs>;
    lineItem?: boolean | Prisma.JobList$lineItemArgs<ExtArgs>;
    part?: boolean | Prisma.JobList$partArgs<ExtArgs>;
}, ExtArgs["result"]["jobList"]>;
export type JobListSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobCardId?: boolean;
    lineItemId?: boolean;
    quantity?: boolean;
    status?: boolean;
    partId?: boolean;
    jobCard?: boolean | Prisma.JobCardDefaultArgs<ExtArgs>;
    lineItem?: boolean | Prisma.JobList$lineItemArgs<ExtArgs>;
    part?: boolean | Prisma.JobList$partArgs<ExtArgs>;
}, ExtArgs["result"]["jobList"]>;
export type JobListSelectScalar = {
    id?: boolean;
    jobCardId?: boolean;
    lineItemId?: boolean;
    quantity?: boolean;
    status?: boolean;
    partId?: boolean;
};
export type JobListOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "jobCardId" | "lineItemId" | "quantity" | "status" | "partId", ExtArgs["result"]["jobList"]>;
export type JobListInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobCard?: boolean | Prisma.JobCardDefaultArgs<ExtArgs>;
    lineItem?: boolean | Prisma.JobList$lineItemArgs<ExtArgs>;
    part?: boolean | Prisma.JobList$partArgs<ExtArgs>;
    jobMaterials?: boolean | Prisma.JobList$jobMaterialsArgs<ExtArgs>;
    operations?: boolean | Prisma.JobList$operationsArgs<ExtArgs>;
    _count?: boolean | Prisma.JobListCountOutputTypeDefaultArgs<ExtArgs>;
};
export type JobListIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobCard?: boolean | Prisma.JobCardDefaultArgs<ExtArgs>;
    lineItem?: boolean | Prisma.JobList$lineItemArgs<ExtArgs>;
    part?: boolean | Prisma.JobList$partArgs<ExtArgs>;
};
export type JobListIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobCard?: boolean | Prisma.JobCardDefaultArgs<ExtArgs>;
    lineItem?: boolean | Prisma.JobList$lineItemArgs<ExtArgs>;
    part?: boolean | Prisma.JobList$partArgs<ExtArgs>;
};
export type $JobListPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JobList";
    objects: {
        jobCard: Prisma.$JobCardPayload<ExtArgs>;
        lineItem: Prisma.$PoLineItemPayload<ExtArgs> | null;
        part: Prisma.$PartPayload<ExtArgs> | null;
        jobMaterials: Prisma.$JobMaterialPayload<ExtArgs>[];
        operations: Prisma.$OperationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        jobCardId: string;
        lineItemId: string | null;
        quantity: number;
        status: $Enums.JobCardStatus;
        partId: string | null;
    }, ExtArgs["result"]["jobList"]>;
    composites: {};
};
export type JobListGetPayload<S extends boolean | null | undefined | JobListDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JobListPayload, S>;
export type JobListCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JobListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JobListCountAggregateInputType | true;
};
export interface JobListDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JobList'];
        meta: {
            name: 'JobList';
        };
    };
    /**
     * Find zero or one JobList that matches the filter.
     * @param {JobListFindUniqueArgs} args - Arguments to find a JobList
     * @example
     * // Get one JobList
     * const jobList = await prisma.jobList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobListFindUniqueArgs>(args: Prisma.SelectSubset<T, JobListFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JobListClient<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one JobList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobListFindUniqueOrThrowArgs} args - Arguments to find a JobList
     * @example
     * // Get one JobList
     * const jobList = await prisma.jobList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobListFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JobListFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JobListClient<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JobList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListFindFirstArgs} args - Arguments to find a JobList
     * @example
     * // Get one JobList
     * const jobList = await prisma.jobList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobListFindFirstArgs>(args?: Prisma.SelectSubset<T, JobListFindFirstArgs<ExtArgs>>): Prisma.Prisma__JobListClient<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JobList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListFindFirstOrThrowArgs} args - Arguments to find a JobList
     * @example
     * // Get one JobList
     * const jobList = await prisma.jobList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobListFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JobListFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JobListClient<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more JobLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobLists
     * const jobLists = await prisma.jobList.findMany()
     *
     * // Get first 10 JobLists
     * const jobLists = await prisma.jobList.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobListWithIdOnly = await prisma.jobList.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobListFindManyArgs>(args?: Prisma.SelectSubset<T, JobListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a JobList.
     * @param {JobListCreateArgs} args - Arguments to create a JobList.
     * @example
     * // Create one JobList
     * const JobList = await prisma.jobList.create({
     *   data: {
     *     // ... data to create a JobList
     *   }
     * })
     *
     */
    create<T extends JobListCreateArgs>(args: Prisma.SelectSubset<T, JobListCreateArgs<ExtArgs>>): Prisma.Prisma__JobListClient<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many JobLists.
     * @param {JobListCreateManyArgs} args - Arguments to create many JobLists.
     * @example
     * // Create many JobLists
     * const jobList = await prisma.jobList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobListCreateManyArgs>(args?: Prisma.SelectSubset<T, JobListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many JobLists and returns the data saved in the database.
     * @param {JobListCreateManyAndReturnArgs} args - Arguments to create many JobLists.
     * @example
     * // Create many JobLists
     * const jobList = await prisma.jobList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JobLists and only return the `id`
     * const jobListWithIdOnly = await prisma.jobList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobListCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JobListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a JobList.
     * @param {JobListDeleteArgs} args - Arguments to delete one JobList.
     * @example
     * // Delete one JobList
     * const JobList = await prisma.jobList.delete({
     *   where: {
     *     // ... filter to delete one JobList
     *   }
     * })
     *
     */
    delete<T extends JobListDeleteArgs>(args: Prisma.SelectSubset<T, JobListDeleteArgs<ExtArgs>>): Prisma.Prisma__JobListClient<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one JobList.
     * @param {JobListUpdateArgs} args - Arguments to update one JobList.
     * @example
     * // Update one JobList
     * const jobList = await prisma.jobList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobListUpdateArgs>(args: Prisma.SelectSubset<T, JobListUpdateArgs<ExtArgs>>): Prisma.Prisma__JobListClient<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more JobLists.
     * @param {JobListDeleteManyArgs} args - Arguments to filter JobLists to delete.
     * @example
     * // Delete a few JobLists
     * const { count } = await prisma.jobList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobListDeleteManyArgs>(args?: Prisma.SelectSubset<T, JobListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JobLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobLists
     * const jobList = await prisma.jobList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobListUpdateManyArgs>(args: Prisma.SelectSubset<T, JobListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JobLists and returns the data updated in the database.
     * @param {JobListUpdateManyAndReturnArgs} args - Arguments to update many JobLists.
     * @example
     * // Update many JobLists
     * const jobList = await prisma.jobList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more JobLists and only return the `id`
     * const jobListWithIdOnly = await prisma.jobList.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobListUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JobListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one JobList.
     * @param {JobListUpsertArgs} args - Arguments to update or create a JobList.
     * @example
     * // Update or create a JobList
     * const jobList = await prisma.jobList.upsert({
     *   create: {
     *     // ... data to create a JobList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobList we want to update
     *   }
     * })
     */
    upsert<T extends JobListUpsertArgs>(args: Prisma.SelectSubset<T, JobListUpsertArgs<ExtArgs>>): Prisma.Prisma__JobListClient<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of JobLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListCountArgs} args - Arguments to filter JobLists to count.
     * @example
     * // Count the number of JobLists
     * const count = await prisma.jobList.count({
     *   where: {
     *     // ... the filter for the JobLists we want to count
     *   }
     * })
    **/
    count<T extends JobListCountArgs>(args?: Prisma.Subset<T, JobListCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JobListCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a JobList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobListAggregateArgs>(args: Prisma.Subset<T, JobListAggregateArgs>): Prisma.PrismaPromise<GetJobListAggregateType<T>>;
    /**
     * Group by JobList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobListGroupByArgs} args - Group by arguments.
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
    groupBy<T extends JobListGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JobListGroupByArgs['orderBy'];
    } : {
        orderBy?: JobListGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JobListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JobList model
     */
    readonly fields: JobListFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for JobList.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__JobListClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    jobCard<T extends Prisma.JobCardDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JobCardDefaultArgs<ExtArgs>>): Prisma.Prisma__JobCardClient<runtime.Types.Result.GetResult<Prisma.$JobCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lineItem<T extends Prisma.JobList$lineItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JobList$lineItemArgs<ExtArgs>>): Prisma.Prisma__PoLineItemClient<runtime.Types.Result.GetResult<Prisma.$PoLineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    part<T extends Prisma.JobList$partArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JobList$partArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    jobMaterials<T extends Prisma.JobList$jobMaterialsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JobList$jobMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    operations<T extends Prisma.JobList$operationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JobList$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the JobList model
 */
export interface JobListFieldRefs {
    readonly id: Prisma.FieldRef<"JobList", 'String'>;
    readonly jobCardId: Prisma.FieldRef<"JobList", 'String'>;
    readonly lineItemId: Prisma.FieldRef<"JobList", 'String'>;
    readonly quantity: Prisma.FieldRef<"JobList", 'Int'>;
    readonly status: Prisma.FieldRef<"JobList", 'JobCardStatus'>;
    readonly partId: Prisma.FieldRef<"JobList", 'String'>;
}
/**
 * JobList findUnique
 */
export type JobListFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JobList to fetch.
     */
    where: Prisma.JobListWhereUniqueInput;
};
/**
 * JobList findUniqueOrThrow
 */
export type JobListFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JobList to fetch.
     */
    where: Prisma.JobListWhereUniqueInput;
};
/**
 * JobList findFirst
 */
export type JobListFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JobList to fetch.
     */
    where?: Prisma.JobListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobLists to fetch.
     */
    orderBy?: Prisma.JobListOrderByWithRelationInput | Prisma.JobListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobLists.
     */
    cursor?: Prisma.JobListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobLists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobLists.
     */
    distinct?: Prisma.JobListScalarFieldEnum | Prisma.JobListScalarFieldEnum[];
};
/**
 * JobList findFirstOrThrow
 */
export type JobListFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JobList to fetch.
     */
    where?: Prisma.JobListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobLists to fetch.
     */
    orderBy?: Prisma.JobListOrderByWithRelationInput | Prisma.JobListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobLists.
     */
    cursor?: Prisma.JobListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobLists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobLists.
     */
    distinct?: Prisma.JobListScalarFieldEnum | Prisma.JobListScalarFieldEnum[];
};
/**
 * JobList findMany
 */
export type JobListFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JobLists to fetch.
     */
    where?: Prisma.JobListWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobLists to fetch.
     */
    orderBy?: Prisma.JobListOrderByWithRelationInput | Prisma.JobListOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JobLists.
     */
    cursor?: Prisma.JobListWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobLists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobLists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobLists.
     */
    distinct?: Prisma.JobListScalarFieldEnum | Prisma.JobListScalarFieldEnum[];
};
/**
 * JobList create
 */
export type JobListCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a JobList.
     */
    data: Prisma.XOR<Prisma.JobListCreateInput, Prisma.JobListUncheckedCreateInput>;
};
/**
 * JobList createMany
 */
export type JobListCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobLists.
     */
    data: Prisma.JobListCreateManyInput | Prisma.JobListCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * JobList createManyAndReturn
 */
export type JobListCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobList
     */
    select?: Prisma.JobListSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobList
     */
    omit?: Prisma.JobListOmit<ExtArgs> | null;
    /**
     * The data used to create many JobLists.
     */
    data: Prisma.JobListCreateManyInput | Prisma.JobListCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobListIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * JobList update
 */
export type JobListUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a JobList.
     */
    data: Prisma.XOR<Prisma.JobListUpdateInput, Prisma.JobListUncheckedUpdateInput>;
    /**
     * Choose, which JobList to update.
     */
    where: Prisma.JobListWhereUniqueInput;
};
/**
 * JobList updateMany
 */
export type JobListUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update JobLists.
     */
    data: Prisma.XOR<Prisma.JobListUpdateManyMutationInput, Prisma.JobListUncheckedUpdateManyInput>;
    /**
     * Filter which JobLists to update
     */
    where?: Prisma.JobListWhereInput;
    /**
     * Limit how many JobLists to update.
     */
    limit?: number;
};
/**
 * JobList updateManyAndReturn
 */
export type JobListUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobList
     */
    select?: Prisma.JobListSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobList
     */
    omit?: Prisma.JobListOmit<ExtArgs> | null;
    /**
     * The data used to update JobLists.
     */
    data: Prisma.XOR<Prisma.JobListUpdateManyMutationInput, Prisma.JobListUncheckedUpdateManyInput>;
    /**
     * Filter which JobLists to update
     */
    where?: Prisma.JobListWhereInput;
    /**
     * Limit how many JobLists to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobListIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * JobList upsert
 */
export type JobListUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the JobList to update in case it exists.
     */
    where: Prisma.JobListWhereUniqueInput;
    /**
     * In case the JobList found by the `where` argument doesn't exist, create a new JobList with this data.
     */
    create: Prisma.XOR<Prisma.JobListCreateInput, Prisma.JobListUncheckedCreateInput>;
    /**
     * In case the JobList was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.JobListUpdateInput, Prisma.JobListUncheckedUpdateInput>;
};
/**
 * JobList delete
 */
export type JobListDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which JobList to delete.
     */
    where: Prisma.JobListWhereUniqueInput;
};
/**
 * JobList deleteMany
 */
export type JobListDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JobLists to delete
     */
    where?: Prisma.JobListWhereInput;
    /**
     * Limit how many JobLists to delete.
     */
    limit?: number;
};
/**
 * JobList.lineItem
 */
export type JobList$lineItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * JobList.part
 */
export type JobList$partArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * JobList.jobMaterials
 */
export type JobList$jobMaterialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * JobList.operations
 */
export type JobList$operationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: Prisma.OperationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Operation
     */
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[];
    cursor?: Prisma.OperationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OperationScalarFieldEnum | Prisma.OperationScalarFieldEnum[];
};
/**
 * JobList without action
 */
export type JobListDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
