import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model JobMaterial
 *
 */
export type JobMaterialModel = runtime.Types.Result.DefaultSelection<Prisma.$JobMaterialPayload>;
export type AggregateJobMaterial = {
    _count: JobMaterialCountAggregateOutputType | null;
    _avg: JobMaterialAvgAggregateOutputType | null;
    _sum: JobMaterialSumAggregateOutputType | null;
    _min: JobMaterialMinAggregateOutputType | null;
    _max: JobMaterialMaxAggregateOutputType | null;
};
export type JobMaterialAvgAggregateOutputType = {
    quantity: runtime.Decimal | null;
};
export type JobMaterialSumAggregateOutputType = {
    quantity: runtime.Decimal | null;
};
export type JobMaterialMinAggregateOutputType = {
    id: string | null;
    jobListId: string | null;
    materialId: string | null;
    quantity: runtime.Decimal | null;
};
export type JobMaterialMaxAggregateOutputType = {
    id: string | null;
    jobListId: string | null;
    materialId: string | null;
    quantity: runtime.Decimal | null;
};
export type JobMaterialCountAggregateOutputType = {
    id: number;
    jobListId: number;
    materialId: number;
    quantity: number;
    _all: number;
};
export type JobMaterialAvgAggregateInputType = {
    quantity?: true;
};
export type JobMaterialSumAggregateInputType = {
    quantity?: true;
};
export type JobMaterialMinAggregateInputType = {
    id?: true;
    jobListId?: true;
    materialId?: true;
    quantity?: true;
};
export type JobMaterialMaxAggregateInputType = {
    id?: true;
    jobListId?: true;
    materialId?: true;
    quantity?: true;
};
export type JobMaterialCountAggregateInputType = {
    id?: true;
    jobListId?: true;
    materialId?: true;
    quantity?: true;
    _all?: true;
};
export type JobMaterialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JobMaterial to aggregate.
     */
    where?: Prisma.JobMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobMaterials to fetch.
     */
    orderBy?: Prisma.JobMaterialOrderByWithRelationInput | Prisma.JobMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.JobMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JobMaterials
    **/
    _count?: true | JobMaterialCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: JobMaterialAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: JobMaterialSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JobMaterialMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JobMaterialMaxAggregateInputType;
};
export type GetJobMaterialAggregateType<T extends JobMaterialAggregateArgs> = {
    [P in keyof T & keyof AggregateJobMaterial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJobMaterial[P]> : Prisma.GetScalarType<T[P], AggregateJobMaterial[P]>;
};
export type JobMaterialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobMaterialWhereInput;
    orderBy?: Prisma.JobMaterialOrderByWithAggregationInput | Prisma.JobMaterialOrderByWithAggregationInput[];
    by: Prisma.JobMaterialScalarFieldEnum[] | Prisma.JobMaterialScalarFieldEnum;
    having?: Prisma.JobMaterialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobMaterialCountAggregateInputType | true;
    _avg?: JobMaterialAvgAggregateInputType;
    _sum?: JobMaterialSumAggregateInputType;
    _min?: JobMaterialMinAggregateInputType;
    _max?: JobMaterialMaxAggregateInputType;
};
export type JobMaterialGroupByOutputType = {
    id: string;
    jobListId: string;
    materialId: string;
    quantity: runtime.Decimal;
    _count: JobMaterialCountAggregateOutputType | null;
    _avg: JobMaterialAvgAggregateOutputType | null;
    _sum: JobMaterialSumAggregateOutputType | null;
    _min: JobMaterialMinAggregateOutputType | null;
    _max: JobMaterialMaxAggregateOutputType | null;
};
export type GetJobMaterialGroupByPayload<T extends JobMaterialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JobMaterialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JobMaterialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JobMaterialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JobMaterialGroupByOutputType[P]>;
}>>;
export type JobMaterialWhereInput = {
    AND?: Prisma.JobMaterialWhereInput | Prisma.JobMaterialWhereInput[];
    OR?: Prisma.JobMaterialWhereInput[];
    NOT?: Prisma.JobMaterialWhereInput | Prisma.JobMaterialWhereInput[];
    id?: Prisma.StringFilter<"JobMaterial"> | string;
    jobListId?: Prisma.StringFilter<"JobMaterial"> | string;
    materialId?: Prisma.StringFilter<"JobMaterial"> | string;
    quantity?: Prisma.DecimalFilter<"JobMaterial"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.XOR<Prisma.JobListScalarRelationFilter, Prisma.JobListWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
};
export type JobMaterialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    jobListId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    jobList?: Prisma.JobListOrderByWithRelationInput;
    material?: Prisma.MaterialOrderByWithRelationInput;
};
export type JobMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.JobMaterialWhereInput | Prisma.JobMaterialWhereInput[];
    OR?: Prisma.JobMaterialWhereInput[];
    NOT?: Prisma.JobMaterialWhereInput | Prisma.JobMaterialWhereInput[];
    jobListId?: Prisma.StringFilter<"JobMaterial"> | string;
    materialId?: Prisma.StringFilter<"JobMaterial"> | string;
    quantity?: Prisma.DecimalFilter<"JobMaterial"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.XOR<Prisma.JobListScalarRelationFilter, Prisma.JobListWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
}, "id">;
export type JobMaterialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    jobListId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    _count?: Prisma.JobMaterialCountOrderByAggregateInput;
    _avg?: Prisma.JobMaterialAvgOrderByAggregateInput;
    _max?: Prisma.JobMaterialMaxOrderByAggregateInput;
    _min?: Prisma.JobMaterialMinOrderByAggregateInput;
    _sum?: Prisma.JobMaterialSumOrderByAggregateInput;
};
export type JobMaterialScalarWhereWithAggregatesInput = {
    AND?: Prisma.JobMaterialScalarWhereWithAggregatesInput | Prisma.JobMaterialScalarWhereWithAggregatesInput[];
    OR?: Prisma.JobMaterialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JobMaterialScalarWhereWithAggregatesInput | Prisma.JobMaterialScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"JobMaterial"> | string;
    jobListId?: Prisma.StringWithAggregatesFilter<"JobMaterial"> | string;
    materialId?: Prisma.StringWithAggregatesFilter<"JobMaterial"> | string;
    quantity?: Prisma.DecimalWithAggregatesFilter<"JobMaterial"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialCreateInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList: Prisma.JobListCreateNestedOneWithoutJobMaterialsInput;
    material: Prisma.MaterialCreateNestedOneWithoutJobMaterialsInput;
};
export type JobMaterialUncheckedCreateInput = {
    id?: string;
    jobListId: string;
    materialId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUpdateOneRequiredWithoutJobMaterialsNestedInput;
    material?: Prisma.MaterialUpdateOneRequiredWithoutJobMaterialsNestedInput;
};
export type JobMaterialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobListId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialCreateManyInput = {
    id?: string;
    jobListId: string;
    materialId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobListId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialListRelationFilter = {
    every?: Prisma.JobMaterialWhereInput;
    some?: Prisma.JobMaterialWhereInput;
    none?: Prisma.JobMaterialWhereInput;
};
export type JobMaterialOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JobMaterialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobListId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type JobMaterialAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type JobMaterialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobListId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type JobMaterialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobListId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type JobMaterialSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type JobMaterialCreateNestedManyWithoutJobListInput = {
    create?: Prisma.XOR<Prisma.JobMaterialCreateWithoutJobListInput, Prisma.JobMaterialUncheckedCreateWithoutJobListInput> | Prisma.JobMaterialCreateWithoutJobListInput[] | Prisma.JobMaterialUncheckedCreateWithoutJobListInput[];
    connectOrCreate?: Prisma.JobMaterialCreateOrConnectWithoutJobListInput | Prisma.JobMaterialCreateOrConnectWithoutJobListInput[];
    createMany?: Prisma.JobMaterialCreateManyJobListInputEnvelope;
    connect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
};
export type JobMaterialUncheckedCreateNestedManyWithoutJobListInput = {
    create?: Prisma.XOR<Prisma.JobMaterialCreateWithoutJobListInput, Prisma.JobMaterialUncheckedCreateWithoutJobListInput> | Prisma.JobMaterialCreateWithoutJobListInput[] | Prisma.JobMaterialUncheckedCreateWithoutJobListInput[];
    connectOrCreate?: Prisma.JobMaterialCreateOrConnectWithoutJobListInput | Prisma.JobMaterialCreateOrConnectWithoutJobListInput[];
    createMany?: Prisma.JobMaterialCreateManyJobListInputEnvelope;
    connect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
};
export type JobMaterialUpdateManyWithoutJobListNestedInput = {
    create?: Prisma.XOR<Prisma.JobMaterialCreateWithoutJobListInput, Prisma.JobMaterialUncheckedCreateWithoutJobListInput> | Prisma.JobMaterialCreateWithoutJobListInput[] | Prisma.JobMaterialUncheckedCreateWithoutJobListInput[];
    connectOrCreate?: Prisma.JobMaterialCreateOrConnectWithoutJobListInput | Prisma.JobMaterialCreateOrConnectWithoutJobListInput[];
    upsert?: Prisma.JobMaterialUpsertWithWhereUniqueWithoutJobListInput | Prisma.JobMaterialUpsertWithWhereUniqueWithoutJobListInput[];
    createMany?: Prisma.JobMaterialCreateManyJobListInputEnvelope;
    set?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    disconnect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    delete?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    connect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    update?: Prisma.JobMaterialUpdateWithWhereUniqueWithoutJobListInput | Prisma.JobMaterialUpdateWithWhereUniqueWithoutJobListInput[];
    updateMany?: Prisma.JobMaterialUpdateManyWithWhereWithoutJobListInput | Prisma.JobMaterialUpdateManyWithWhereWithoutJobListInput[];
    deleteMany?: Prisma.JobMaterialScalarWhereInput | Prisma.JobMaterialScalarWhereInput[];
};
export type JobMaterialUncheckedUpdateManyWithoutJobListNestedInput = {
    create?: Prisma.XOR<Prisma.JobMaterialCreateWithoutJobListInput, Prisma.JobMaterialUncheckedCreateWithoutJobListInput> | Prisma.JobMaterialCreateWithoutJobListInput[] | Prisma.JobMaterialUncheckedCreateWithoutJobListInput[];
    connectOrCreate?: Prisma.JobMaterialCreateOrConnectWithoutJobListInput | Prisma.JobMaterialCreateOrConnectWithoutJobListInput[];
    upsert?: Prisma.JobMaterialUpsertWithWhereUniqueWithoutJobListInput | Prisma.JobMaterialUpsertWithWhereUniqueWithoutJobListInput[];
    createMany?: Prisma.JobMaterialCreateManyJobListInputEnvelope;
    set?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    disconnect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    delete?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    connect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    update?: Prisma.JobMaterialUpdateWithWhereUniqueWithoutJobListInput | Prisma.JobMaterialUpdateWithWhereUniqueWithoutJobListInput[];
    updateMany?: Prisma.JobMaterialUpdateManyWithWhereWithoutJobListInput | Prisma.JobMaterialUpdateManyWithWhereWithoutJobListInput[];
    deleteMany?: Prisma.JobMaterialScalarWhereInput | Prisma.JobMaterialScalarWhereInput[];
};
export type JobMaterialCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.JobMaterialCreateWithoutMaterialInput, Prisma.JobMaterialUncheckedCreateWithoutMaterialInput> | Prisma.JobMaterialCreateWithoutMaterialInput[] | Prisma.JobMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.JobMaterialCreateOrConnectWithoutMaterialInput | Prisma.JobMaterialCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.JobMaterialCreateManyMaterialInputEnvelope;
    connect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
};
export type JobMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.JobMaterialCreateWithoutMaterialInput, Prisma.JobMaterialUncheckedCreateWithoutMaterialInput> | Prisma.JobMaterialCreateWithoutMaterialInput[] | Prisma.JobMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.JobMaterialCreateOrConnectWithoutMaterialInput | Prisma.JobMaterialCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.JobMaterialCreateManyMaterialInputEnvelope;
    connect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
};
export type JobMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.JobMaterialCreateWithoutMaterialInput, Prisma.JobMaterialUncheckedCreateWithoutMaterialInput> | Prisma.JobMaterialCreateWithoutMaterialInput[] | Prisma.JobMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.JobMaterialCreateOrConnectWithoutMaterialInput | Prisma.JobMaterialCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.JobMaterialUpsertWithWhereUniqueWithoutMaterialInput | Prisma.JobMaterialUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.JobMaterialCreateManyMaterialInputEnvelope;
    set?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    disconnect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    delete?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    connect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    update?: Prisma.JobMaterialUpdateWithWhereUniqueWithoutMaterialInput | Prisma.JobMaterialUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.JobMaterialUpdateManyWithWhereWithoutMaterialInput | Prisma.JobMaterialUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.JobMaterialScalarWhereInput | Prisma.JobMaterialScalarWhereInput[];
};
export type JobMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.JobMaterialCreateWithoutMaterialInput, Prisma.JobMaterialUncheckedCreateWithoutMaterialInput> | Prisma.JobMaterialCreateWithoutMaterialInput[] | Prisma.JobMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.JobMaterialCreateOrConnectWithoutMaterialInput | Prisma.JobMaterialCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.JobMaterialUpsertWithWhereUniqueWithoutMaterialInput | Prisma.JobMaterialUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.JobMaterialCreateManyMaterialInputEnvelope;
    set?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    disconnect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    delete?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    connect?: Prisma.JobMaterialWhereUniqueInput | Prisma.JobMaterialWhereUniqueInput[];
    update?: Prisma.JobMaterialUpdateWithWhereUniqueWithoutMaterialInput | Prisma.JobMaterialUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.JobMaterialUpdateManyWithWhereWithoutMaterialInput | Prisma.JobMaterialUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.JobMaterialScalarWhereInput | Prisma.JobMaterialScalarWhereInput[];
};
export type JobMaterialCreateWithoutJobListInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: Prisma.MaterialCreateNestedOneWithoutJobMaterialsInput;
};
export type JobMaterialUncheckedCreateWithoutJobListInput = {
    id?: string;
    materialId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialCreateOrConnectWithoutJobListInput = {
    where: Prisma.JobMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobMaterialCreateWithoutJobListInput, Prisma.JobMaterialUncheckedCreateWithoutJobListInput>;
};
export type JobMaterialCreateManyJobListInputEnvelope = {
    data: Prisma.JobMaterialCreateManyJobListInput | Prisma.JobMaterialCreateManyJobListInput[];
    skipDuplicates?: boolean;
};
export type JobMaterialUpsertWithWhereUniqueWithoutJobListInput = {
    where: Prisma.JobMaterialWhereUniqueInput;
    update: Prisma.XOR<Prisma.JobMaterialUpdateWithoutJobListInput, Prisma.JobMaterialUncheckedUpdateWithoutJobListInput>;
    create: Prisma.XOR<Prisma.JobMaterialCreateWithoutJobListInput, Prisma.JobMaterialUncheckedCreateWithoutJobListInput>;
};
export type JobMaterialUpdateWithWhereUniqueWithoutJobListInput = {
    where: Prisma.JobMaterialWhereUniqueInput;
    data: Prisma.XOR<Prisma.JobMaterialUpdateWithoutJobListInput, Prisma.JobMaterialUncheckedUpdateWithoutJobListInput>;
};
export type JobMaterialUpdateManyWithWhereWithoutJobListInput = {
    where: Prisma.JobMaterialScalarWhereInput;
    data: Prisma.XOR<Prisma.JobMaterialUpdateManyMutationInput, Prisma.JobMaterialUncheckedUpdateManyWithoutJobListInput>;
};
export type JobMaterialScalarWhereInput = {
    AND?: Prisma.JobMaterialScalarWhereInput | Prisma.JobMaterialScalarWhereInput[];
    OR?: Prisma.JobMaterialScalarWhereInput[];
    NOT?: Prisma.JobMaterialScalarWhereInput | Prisma.JobMaterialScalarWhereInput[];
    id?: Prisma.StringFilter<"JobMaterial"> | string;
    jobListId?: Prisma.StringFilter<"JobMaterial"> | string;
    materialId?: Prisma.StringFilter<"JobMaterial"> | string;
    quantity?: Prisma.DecimalFilter<"JobMaterial"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialCreateWithoutMaterialInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList: Prisma.JobListCreateNestedOneWithoutJobMaterialsInput;
};
export type JobMaterialUncheckedCreateWithoutMaterialInput = {
    id?: string;
    jobListId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialCreateOrConnectWithoutMaterialInput = {
    where: Prisma.JobMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobMaterialCreateWithoutMaterialInput, Prisma.JobMaterialUncheckedCreateWithoutMaterialInput>;
};
export type JobMaterialCreateManyMaterialInputEnvelope = {
    data: Prisma.JobMaterialCreateManyMaterialInput | Prisma.JobMaterialCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type JobMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.JobMaterialWhereUniqueInput;
    update: Prisma.XOR<Prisma.JobMaterialUpdateWithoutMaterialInput, Prisma.JobMaterialUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.JobMaterialCreateWithoutMaterialInput, Prisma.JobMaterialUncheckedCreateWithoutMaterialInput>;
};
export type JobMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.JobMaterialWhereUniqueInput;
    data: Prisma.XOR<Prisma.JobMaterialUpdateWithoutMaterialInput, Prisma.JobMaterialUncheckedUpdateWithoutMaterialInput>;
};
export type JobMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.JobMaterialScalarWhereInput;
    data: Prisma.XOR<Prisma.JobMaterialUpdateManyMutationInput, Prisma.JobMaterialUncheckedUpdateManyWithoutMaterialInput>;
};
export type JobMaterialCreateManyJobListInput = {
    id?: string;
    materialId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialUpdateWithoutJobListInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.MaterialUpdateOneRequiredWithoutJobMaterialsNestedInput;
};
export type JobMaterialUncheckedUpdateWithoutJobListInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialUncheckedUpdateManyWithoutJobListInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialCreateManyMaterialInput = {
    id?: string;
    jobListId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jobList?: Prisma.JobListUpdateOneRequiredWithoutJobMaterialsNestedInput;
};
export type JobMaterialUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobListId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobListId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type JobMaterialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobListId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    jobList?: boolean | Prisma.JobListDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jobMaterial"]>;
export type JobMaterialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobListId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    jobList?: boolean | Prisma.JobListDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jobMaterial"]>;
export type JobMaterialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobListId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    jobList?: boolean | Prisma.JobListDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jobMaterial"]>;
export type JobMaterialSelectScalar = {
    id?: boolean;
    jobListId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
};
export type JobMaterialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "jobListId" | "materialId" | "quantity", ExtArgs["result"]["jobMaterial"]>;
export type JobMaterialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobList?: boolean | Prisma.JobListDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type JobMaterialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobList?: boolean | Prisma.JobListDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type JobMaterialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobList?: boolean | Prisma.JobListDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type $JobMaterialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JobMaterial";
    objects: {
        jobList: Prisma.$JobListPayload<ExtArgs>;
        material: Prisma.$MaterialPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        jobListId: string;
        materialId: string;
        quantity: runtime.Decimal;
    }, ExtArgs["result"]["jobMaterial"]>;
    composites: {};
};
export type JobMaterialGetPayload<S extends boolean | null | undefined | JobMaterialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload, S>;
export type JobMaterialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JobMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JobMaterialCountAggregateInputType | true;
};
export interface JobMaterialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JobMaterial'];
        meta: {
            name: 'JobMaterial';
        };
    };
    /**
     * Find zero or one JobMaterial that matches the filter.
     * @param {JobMaterialFindUniqueArgs} args - Arguments to find a JobMaterial
     * @example
     * // Get one JobMaterial
     * const jobMaterial = await prisma.jobMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobMaterialFindUniqueArgs>(args: Prisma.SelectSubset<T, JobMaterialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JobMaterialClient<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one JobMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobMaterialFindUniqueOrThrowArgs} args - Arguments to find a JobMaterial
     * @example
     * // Get one JobMaterial
     * const jobMaterial = await prisma.jobMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobMaterialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JobMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JobMaterialClient<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JobMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMaterialFindFirstArgs} args - Arguments to find a JobMaterial
     * @example
     * // Get one JobMaterial
     * const jobMaterial = await prisma.jobMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobMaterialFindFirstArgs>(args?: Prisma.SelectSubset<T, JobMaterialFindFirstArgs<ExtArgs>>): Prisma.Prisma__JobMaterialClient<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JobMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMaterialFindFirstOrThrowArgs} args - Arguments to find a JobMaterial
     * @example
     * // Get one JobMaterial
     * const jobMaterial = await prisma.jobMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobMaterialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JobMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JobMaterialClient<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more JobMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobMaterials
     * const jobMaterials = await prisma.jobMaterial.findMany()
     *
     * // Get first 10 JobMaterials
     * const jobMaterials = await prisma.jobMaterial.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobMaterialWithIdOnly = await prisma.jobMaterial.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobMaterialFindManyArgs>(args?: Prisma.SelectSubset<T, JobMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a JobMaterial.
     * @param {JobMaterialCreateArgs} args - Arguments to create a JobMaterial.
     * @example
     * // Create one JobMaterial
     * const JobMaterial = await prisma.jobMaterial.create({
     *   data: {
     *     // ... data to create a JobMaterial
     *   }
     * })
     *
     */
    create<T extends JobMaterialCreateArgs>(args: Prisma.SelectSubset<T, JobMaterialCreateArgs<ExtArgs>>): Prisma.Prisma__JobMaterialClient<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many JobMaterials.
     * @param {JobMaterialCreateManyArgs} args - Arguments to create many JobMaterials.
     * @example
     * // Create many JobMaterials
     * const jobMaterial = await prisma.jobMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobMaterialCreateManyArgs>(args?: Prisma.SelectSubset<T, JobMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many JobMaterials and returns the data saved in the database.
     * @param {JobMaterialCreateManyAndReturnArgs} args - Arguments to create many JobMaterials.
     * @example
     * // Create many JobMaterials
     * const jobMaterial = await prisma.jobMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JobMaterials and only return the `id`
     * const jobMaterialWithIdOnly = await prisma.jobMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobMaterialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JobMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a JobMaterial.
     * @param {JobMaterialDeleteArgs} args - Arguments to delete one JobMaterial.
     * @example
     * // Delete one JobMaterial
     * const JobMaterial = await prisma.jobMaterial.delete({
     *   where: {
     *     // ... filter to delete one JobMaterial
     *   }
     * })
     *
     */
    delete<T extends JobMaterialDeleteArgs>(args: Prisma.SelectSubset<T, JobMaterialDeleteArgs<ExtArgs>>): Prisma.Prisma__JobMaterialClient<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one JobMaterial.
     * @param {JobMaterialUpdateArgs} args - Arguments to update one JobMaterial.
     * @example
     * // Update one JobMaterial
     * const jobMaterial = await prisma.jobMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobMaterialUpdateArgs>(args: Prisma.SelectSubset<T, JobMaterialUpdateArgs<ExtArgs>>): Prisma.Prisma__JobMaterialClient<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more JobMaterials.
     * @param {JobMaterialDeleteManyArgs} args - Arguments to filter JobMaterials to delete.
     * @example
     * // Delete a few JobMaterials
     * const { count } = await prisma.jobMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobMaterialDeleteManyArgs>(args?: Prisma.SelectSubset<T, JobMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JobMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobMaterials
     * const jobMaterial = await prisma.jobMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobMaterialUpdateManyArgs>(args: Prisma.SelectSubset<T, JobMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JobMaterials and returns the data updated in the database.
     * @param {JobMaterialUpdateManyAndReturnArgs} args - Arguments to update many JobMaterials.
     * @example
     * // Update many JobMaterials
     * const jobMaterial = await prisma.jobMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more JobMaterials and only return the `id`
     * const jobMaterialWithIdOnly = await prisma.jobMaterial.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobMaterialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JobMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one JobMaterial.
     * @param {JobMaterialUpsertArgs} args - Arguments to update or create a JobMaterial.
     * @example
     * // Update or create a JobMaterial
     * const jobMaterial = await prisma.jobMaterial.upsert({
     *   create: {
     *     // ... data to create a JobMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobMaterial we want to update
     *   }
     * })
     */
    upsert<T extends JobMaterialUpsertArgs>(args: Prisma.SelectSubset<T, JobMaterialUpsertArgs<ExtArgs>>): Prisma.Prisma__JobMaterialClient<runtime.Types.Result.GetResult<Prisma.$JobMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of JobMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMaterialCountArgs} args - Arguments to filter JobMaterials to count.
     * @example
     * // Count the number of JobMaterials
     * const count = await prisma.jobMaterial.count({
     *   where: {
     *     // ... the filter for the JobMaterials we want to count
     *   }
     * })
    **/
    count<T extends JobMaterialCountArgs>(args?: Prisma.Subset<T, JobMaterialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JobMaterialCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a JobMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobMaterialAggregateArgs>(args: Prisma.Subset<T, JobMaterialAggregateArgs>): Prisma.PrismaPromise<GetJobMaterialAggregateType<T>>;
    /**
     * Group by JobMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMaterialGroupByArgs} args - Group by arguments.
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
    groupBy<T extends JobMaterialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JobMaterialGroupByArgs['orderBy'];
    } : {
        orderBy?: JobMaterialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JobMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JobMaterial model
     */
    readonly fields: JobMaterialFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for JobMaterial.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__JobMaterialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    jobList<T extends Prisma.JobListDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JobListDefaultArgs<ExtArgs>>): Prisma.Prisma__JobListClient<runtime.Types.Result.GetResult<Prisma.$JobListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    material<T extends Prisma.MaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the JobMaterial model
 */
export interface JobMaterialFieldRefs {
    readonly id: Prisma.FieldRef<"JobMaterial", 'String'>;
    readonly jobListId: Prisma.FieldRef<"JobMaterial", 'String'>;
    readonly materialId: Prisma.FieldRef<"JobMaterial", 'String'>;
    readonly quantity: Prisma.FieldRef<"JobMaterial", 'Decimal'>;
}
/**
 * JobMaterial findUnique
 */
export type JobMaterialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JobMaterial to fetch.
     */
    where: Prisma.JobMaterialWhereUniqueInput;
};
/**
 * JobMaterial findUniqueOrThrow
 */
export type JobMaterialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JobMaterial to fetch.
     */
    where: Prisma.JobMaterialWhereUniqueInput;
};
/**
 * JobMaterial findFirst
 */
export type JobMaterialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JobMaterial to fetch.
     */
    where?: Prisma.JobMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobMaterials to fetch.
     */
    orderBy?: Prisma.JobMaterialOrderByWithRelationInput | Prisma.JobMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobMaterials.
     */
    cursor?: Prisma.JobMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobMaterials.
     */
    distinct?: Prisma.JobMaterialScalarFieldEnum | Prisma.JobMaterialScalarFieldEnum[];
};
/**
 * JobMaterial findFirstOrThrow
 */
export type JobMaterialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JobMaterial to fetch.
     */
    where?: Prisma.JobMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobMaterials to fetch.
     */
    orderBy?: Prisma.JobMaterialOrderByWithRelationInput | Prisma.JobMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobMaterials.
     */
    cursor?: Prisma.JobMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobMaterials.
     */
    distinct?: Prisma.JobMaterialScalarFieldEnum | Prisma.JobMaterialScalarFieldEnum[];
};
/**
 * JobMaterial findMany
 */
export type JobMaterialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JobMaterials to fetch.
     */
    where?: Prisma.JobMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobMaterials to fetch.
     */
    orderBy?: Prisma.JobMaterialOrderByWithRelationInput | Prisma.JobMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JobMaterials.
     */
    cursor?: Prisma.JobMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobMaterials.
     */
    distinct?: Prisma.JobMaterialScalarFieldEnum | Prisma.JobMaterialScalarFieldEnum[];
};
/**
 * JobMaterial create
 */
export type JobMaterialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a JobMaterial.
     */
    data: Prisma.XOR<Prisma.JobMaterialCreateInput, Prisma.JobMaterialUncheckedCreateInput>;
};
/**
 * JobMaterial createMany
 */
export type JobMaterialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobMaterials.
     */
    data: Prisma.JobMaterialCreateManyInput | Prisma.JobMaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * JobMaterial createManyAndReturn
 */
export type JobMaterialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMaterial
     */
    select?: Prisma.JobMaterialSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobMaterial
     */
    omit?: Prisma.JobMaterialOmit<ExtArgs> | null;
    /**
     * The data used to create many JobMaterials.
     */
    data: Prisma.JobMaterialCreateManyInput | Prisma.JobMaterialCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobMaterialIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * JobMaterial update
 */
export type JobMaterialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a JobMaterial.
     */
    data: Prisma.XOR<Prisma.JobMaterialUpdateInput, Prisma.JobMaterialUncheckedUpdateInput>;
    /**
     * Choose, which JobMaterial to update.
     */
    where: Prisma.JobMaterialWhereUniqueInput;
};
/**
 * JobMaterial updateMany
 */
export type JobMaterialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update JobMaterials.
     */
    data: Prisma.XOR<Prisma.JobMaterialUpdateManyMutationInput, Prisma.JobMaterialUncheckedUpdateManyInput>;
    /**
     * Filter which JobMaterials to update
     */
    where?: Prisma.JobMaterialWhereInput;
    /**
     * Limit how many JobMaterials to update.
     */
    limit?: number;
};
/**
 * JobMaterial updateManyAndReturn
 */
export type JobMaterialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMaterial
     */
    select?: Prisma.JobMaterialSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobMaterial
     */
    omit?: Prisma.JobMaterialOmit<ExtArgs> | null;
    /**
     * The data used to update JobMaterials.
     */
    data: Prisma.XOR<Prisma.JobMaterialUpdateManyMutationInput, Prisma.JobMaterialUncheckedUpdateManyInput>;
    /**
     * Filter which JobMaterials to update
     */
    where?: Prisma.JobMaterialWhereInput;
    /**
     * Limit how many JobMaterials to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobMaterialIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * JobMaterial upsert
 */
export type JobMaterialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the JobMaterial to update in case it exists.
     */
    where: Prisma.JobMaterialWhereUniqueInput;
    /**
     * In case the JobMaterial found by the `where` argument doesn't exist, create a new JobMaterial with this data.
     */
    create: Prisma.XOR<Prisma.JobMaterialCreateInput, Prisma.JobMaterialUncheckedCreateInput>;
    /**
     * In case the JobMaterial was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.JobMaterialUpdateInput, Prisma.JobMaterialUncheckedUpdateInput>;
};
/**
 * JobMaterial delete
 */
export type JobMaterialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which JobMaterial to delete.
     */
    where: Prisma.JobMaterialWhereUniqueInput;
};
/**
 * JobMaterial deleteMany
 */
export type JobMaterialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JobMaterials to delete
     */
    where?: Prisma.JobMaterialWhereInput;
    /**
     * Limit how many JobMaterials to delete.
     */
    limit?: number;
};
/**
 * JobMaterial without action
 */
export type JobMaterialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
