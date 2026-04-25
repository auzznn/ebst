import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PartMaterial
 *
 */
export type PartMaterialModel = runtime.Types.Result.DefaultSelection<Prisma.$PartMaterialPayload>;
export type AggregatePartMaterial = {
    _count: PartMaterialCountAggregateOutputType | null;
    _avg: PartMaterialAvgAggregateOutputType | null;
    _sum: PartMaterialSumAggregateOutputType | null;
    _min: PartMaterialMinAggregateOutputType | null;
    _max: PartMaterialMaxAggregateOutputType | null;
};
export type PartMaterialAvgAggregateOutputType = {
    ratio: runtime.Decimal | null;
};
export type PartMaterialSumAggregateOutputType = {
    ratio: runtime.Decimal | null;
};
export type PartMaterialMinAggregateOutputType = {
    id: string | null;
    partId: string | null;
    materialId: string | null;
    ratio: runtime.Decimal | null;
};
export type PartMaterialMaxAggregateOutputType = {
    id: string | null;
    partId: string | null;
    materialId: string | null;
    ratio: runtime.Decimal | null;
};
export type PartMaterialCountAggregateOutputType = {
    id: number;
    partId: number;
    materialId: number;
    ratio: number;
    _all: number;
};
export type PartMaterialAvgAggregateInputType = {
    ratio?: true;
};
export type PartMaterialSumAggregateInputType = {
    ratio?: true;
};
export type PartMaterialMinAggregateInputType = {
    id?: true;
    partId?: true;
    materialId?: true;
    ratio?: true;
};
export type PartMaterialMaxAggregateInputType = {
    id?: true;
    partId?: true;
    materialId?: true;
    ratio?: true;
};
export type PartMaterialCountAggregateInputType = {
    id?: true;
    partId?: true;
    materialId?: true;
    ratio?: true;
    _all?: true;
};
export type PartMaterialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PartMaterial to aggregate.
     */
    where?: Prisma.PartMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PartMaterials to fetch.
     */
    orderBy?: Prisma.PartMaterialOrderByWithRelationInput | Prisma.PartMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PartMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PartMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PartMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PartMaterials
    **/
    _count?: true | PartMaterialCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PartMaterialAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PartMaterialSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PartMaterialMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PartMaterialMaxAggregateInputType;
};
export type GetPartMaterialAggregateType<T extends PartMaterialAggregateArgs> = {
    [P in keyof T & keyof AggregatePartMaterial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePartMaterial[P]> : Prisma.GetScalarType<T[P], AggregatePartMaterial[P]>;
};
export type PartMaterialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartMaterialWhereInput;
    orderBy?: Prisma.PartMaterialOrderByWithAggregationInput | Prisma.PartMaterialOrderByWithAggregationInput[];
    by: Prisma.PartMaterialScalarFieldEnum[] | Prisma.PartMaterialScalarFieldEnum;
    having?: Prisma.PartMaterialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PartMaterialCountAggregateInputType | true;
    _avg?: PartMaterialAvgAggregateInputType;
    _sum?: PartMaterialSumAggregateInputType;
    _min?: PartMaterialMinAggregateInputType;
    _max?: PartMaterialMaxAggregateInputType;
};
export type PartMaterialGroupByOutputType = {
    id: string;
    partId: string;
    materialId: string;
    ratio: runtime.Decimal;
    _count: PartMaterialCountAggregateOutputType | null;
    _avg: PartMaterialAvgAggregateOutputType | null;
    _sum: PartMaterialSumAggregateOutputType | null;
    _min: PartMaterialMinAggregateOutputType | null;
    _max: PartMaterialMaxAggregateOutputType | null;
};
export type GetPartMaterialGroupByPayload<T extends PartMaterialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PartMaterialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PartMaterialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PartMaterialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PartMaterialGroupByOutputType[P]>;
}>>;
export type PartMaterialWhereInput = {
    AND?: Prisma.PartMaterialWhereInput | Prisma.PartMaterialWhereInput[];
    OR?: Prisma.PartMaterialWhereInput[];
    NOT?: Prisma.PartMaterialWhereInput | Prisma.PartMaterialWhereInput[];
    id?: Prisma.StringFilter<"PartMaterial"> | string;
    partId?: Prisma.StringFilter<"PartMaterial"> | string;
    materialId?: Prisma.StringFilter<"PartMaterial"> | string;
    ratio?: Prisma.DecimalFilter<"PartMaterial"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
    part?: Prisma.XOR<Prisma.PartScalarRelationFilter, Prisma.PartWhereInput>;
};
export type PartMaterialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    ratio?: Prisma.SortOrder;
    material?: Prisma.MaterialOrderByWithRelationInput;
    part?: Prisma.PartOrderByWithRelationInput;
};
export type PartMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    partId_materialId?: Prisma.PartMaterialPartIdMaterialIdCompoundUniqueInput;
    AND?: Prisma.PartMaterialWhereInput | Prisma.PartMaterialWhereInput[];
    OR?: Prisma.PartMaterialWhereInput[];
    NOT?: Prisma.PartMaterialWhereInput | Prisma.PartMaterialWhereInput[];
    partId?: Prisma.StringFilter<"PartMaterial"> | string;
    materialId?: Prisma.StringFilter<"PartMaterial"> | string;
    ratio?: Prisma.DecimalFilter<"PartMaterial"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
    part?: Prisma.XOR<Prisma.PartScalarRelationFilter, Prisma.PartWhereInput>;
}, "id" | "partId_materialId">;
export type PartMaterialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    ratio?: Prisma.SortOrder;
    _count?: Prisma.PartMaterialCountOrderByAggregateInput;
    _avg?: Prisma.PartMaterialAvgOrderByAggregateInput;
    _max?: Prisma.PartMaterialMaxOrderByAggregateInput;
    _min?: Prisma.PartMaterialMinOrderByAggregateInput;
    _sum?: Prisma.PartMaterialSumOrderByAggregateInput;
};
export type PartMaterialScalarWhereWithAggregatesInput = {
    AND?: Prisma.PartMaterialScalarWhereWithAggregatesInput | Prisma.PartMaterialScalarWhereWithAggregatesInput[];
    OR?: Prisma.PartMaterialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PartMaterialScalarWhereWithAggregatesInput | Prisma.PartMaterialScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PartMaterial"> | string;
    partId?: Prisma.StringWithAggregatesFilter<"PartMaterial"> | string;
    materialId?: Prisma.StringWithAggregatesFilter<"PartMaterial"> | string;
    ratio?: Prisma.DecimalWithAggregatesFilter<"PartMaterial"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialCreateInput = {
    id?: string;
    ratio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: Prisma.MaterialCreateNestedOneWithoutPartMaterialsInput;
    part: Prisma.PartCreateNestedOneWithoutMaterialsInput;
};
export type PartMaterialUncheckedCreateInput = {
    id?: string;
    partId: string;
    materialId: string;
    ratio: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ratio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.MaterialUpdateOneRequiredWithoutPartMaterialsNestedInput;
    part?: Prisma.PartUpdateOneRequiredWithoutMaterialsNestedInput;
};
export type PartMaterialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialCreateManyInput = {
    id?: string;
    partId: string;
    materialId: string;
    ratio: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ratio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialListRelationFilter = {
    every?: Prisma.PartMaterialWhereInput;
    some?: Prisma.PartMaterialWhereInput;
    none?: Prisma.PartMaterialWhereInput;
};
export type PartMaterialOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PartMaterialPartIdMaterialIdCompoundUniqueInput = {
    partId: string;
    materialId: string;
};
export type PartMaterialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    ratio?: Prisma.SortOrder;
};
export type PartMaterialAvgOrderByAggregateInput = {
    ratio?: Prisma.SortOrder;
};
export type PartMaterialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    ratio?: Prisma.SortOrder;
};
export type PartMaterialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    ratio?: Prisma.SortOrder;
};
export type PartMaterialSumOrderByAggregateInput = {
    ratio?: Prisma.SortOrder;
};
export type PartMaterialCreateNestedManyWithoutPartInput = {
    create?: Prisma.XOR<Prisma.PartMaterialCreateWithoutPartInput, Prisma.PartMaterialUncheckedCreateWithoutPartInput> | Prisma.PartMaterialCreateWithoutPartInput[] | Prisma.PartMaterialUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PartMaterialCreateOrConnectWithoutPartInput | Prisma.PartMaterialCreateOrConnectWithoutPartInput[];
    createMany?: Prisma.PartMaterialCreateManyPartInputEnvelope;
    connect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
};
export type PartMaterialUncheckedCreateNestedManyWithoutPartInput = {
    create?: Prisma.XOR<Prisma.PartMaterialCreateWithoutPartInput, Prisma.PartMaterialUncheckedCreateWithoutPartInput> | Prisma.PartMaterialCreateWithoutPartInput[] | Prisma.PartMaterialUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PartMaterialCreateOrConnectWithoutPartInput | Prisma.PartMaterialCreateOrConnectWithoutPartInput[];
    createMany?: Prisma.PartMaterialCreateManyPartInputEnvelope;
    connect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
};
export type PartMaterialUpdateManyWithoutPartNestedInput = {
    create?: Prisma.XOR<Prisma.PartMaterialCreateWithoutPartInput, Prisma.PartMaterialUncheckedCreateWithoutPartInput> | Prisma.PartMaterialCreateWithoutPartInput[] | Prisma.PartMaterialUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PartMaterialCreateOrConnectWithoutPartInput | Prisma.PartMaterialCreateOrConnectWithoutPartInput[];
    upsert?: Prisma.PartMaterialUpsertWithWhereUniqueWithoutPartInput | Prisma.PartMaterialUpsertWithWhereUniqueWithoutPartInput[];
    createMany?: Prisma.PartMaterialCreateManyPartInputEnvelope;
    set?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    disconnect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    delete?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    connect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    update?: Prisma.PartMaterialUpdateWithWhereUniqueWithoutPartInput | Prisma.PartMaterialUpdateWithWhereUniqueWithoutPartInput[];
    updateMany?: Prisma.PartMaterialUpdateManyWithWhereWithoutPartInput | Prisma.PartMaterialUpdateManyWithWhereWithoutPartInput[];
    deleteMany?: Prisma.PartMaterialScalarWhereInput | Prisma.PartMaterialScalarWhereInput[];
};
export type PartMaterialUncheckedUpdateManyWithoutPartNestedInput = {
    create?: Prisma.XOR<Prisma.PartMaterialCreateWithoutPartInput, Prisma.PartMaterialUncheckedCreateWithoutPartInput> | Prisma.PartMaterialCreateWithoutPartInput[] | Prisma.PartMaterialUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PartMaterialCreateOrConnectWithoutPartInput | Prisma.PartMaterialCreateOrConnectWithoutPartInput[];
    upsert?: Prisma.PartMaterialUpsertWithWhereUniqueWithoutPartInput | Prisma.PartMaterialUpsertWithWhereUniqueWithoutPartInput[];
    createMany?: Prisma.PartMaterialCreateManyPartInputEnvelope;
    set?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    disconnect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    delete?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    connect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    update?: Prisma.PartMaterialUpdateWithWhereUniqueWithoutPartInput | Prisma.PartMaterialUpdateWithWhereUniqueWithoutPartInput[];
    updateMany?: Prisma.PartMaterialUpdateManyWithWhereWithoutPartInput | Prisma.PartMaterialUpdateManyWithWhereWithoutPartInput[];
    deleteMany?: Prisma.PartMaterialScalarWhereInput | Prisma.PartMaterialScalarWhereInput[];
};
export type PartMaterialCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.PartMaterialCreateWithoutMaterialInput, Prisma.PartMaterialUncheckedCreateWithoutMaterialInput> | Prisma.PartMaterialCreateWithoutMaterialInput[] | Prisma.PartMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PartMaterialCreateOrConnectWithoutMaterialInput | Prisma.PartMaterialCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.PartMaterialCreateManyMaterialInputEnvelope;
    connect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
};
export type PartMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.PartMaterialCreateWithoutMaterialInput, Prisma.PartMaterialUncheckedCreateWithoutMaterialInput> | Prisma.PartMaterialCreateWithoutMaterialInput[] | Prisma.PartMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PartMaterialCreateOrConnectWithoutMaterialInput | Prisma.PartMaterialCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.PartMaterialCreateManyMaterialInputEnvelope;
    connect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
};
export type PartMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.PartMaterialCreateWithoutMaterialInput, Prisma.PartMaterialUncheckedCreateWithoutMaterialInput> | Prisma.PartMaterialCreateWithoutMaterialInput[] | Prisma.PartMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PartMaterialCreateOrConnectWithoutMaterialInput | Prisma.PartMaterialCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.PartMaterialUpsertWithWhereUniqueWithoutMaterialInput | Prisma.PartMaterialUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.PartMaterialCreateManyMaterialInputEnvelope;
    set?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    disconnect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    delete?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    connect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    update?: Prisma.PartMaterialUpdateWithWhereUniqueWithoutMaterialInput | Prisma.PartMaterialUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.PartMaterialUpdateManyWithWhereWithoutMaterialInput | Prisma.PartMaterialUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.PartMaterialScalarWhereInput | Prisma.PartMaterialScalarWhereInput[];
};
export type PartMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.PartMaterialCreateWithoutMaterialInput, Prisma.PartMaterialUncheckedCreateWithoutMaterialInput> | Prisma.PartMaterialCreateWithoutMaterialInput[] | Prisma.PartMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PartMaterialCreateOrConnectWithoutMaterialInput | Prisma.PartMaterialCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.PartMaterialUpsertWithWhereUniqueWithoutMaterialInput | Prisma.PartMaterialUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.PartMaterialCreateManyMaterialInputEnvelope;
    set?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    disconnect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    delete?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    connect?: Prisma.PartMaterialWhereUniqueInput | Prisma.PartMaterialWhereUniqueInput[];
    update?: Prisma.PartMaterialUpdateWithWhereUniqueWithoutMaterialInput | Prisma.PartMaterialUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.PartMaterialUpdateManyWithWhereWithoutMaterialInput | Prisma.PartMaterialUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.PartMaterialScalarWhereInput | Prisma.PartMaterialScalarWhereInput[];
};
export type PartMaterialCreateWithoutPartInput = {
    id?: string;
    ratio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    material: Prisma.MaterialCreateNestedOneWithoutPartMaterialsInput;
};
export type PartMaterialUncheckedCreateWithoutPartInput = {
    id?: string;
    materialId: string;
    ratio: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialCreateOrConnectWithoutPartInput = {
    where: Prisma.PartMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartMaterialCreateWithoutPartInput, Prisma.PartMaterialUncheckedCreateWithoutPartInput>;
};
export type PartMaterialCreateManyPartInputEnvelope = {
    data: Prisma.PartMaterialCreateManyPartInput | Prisma.PartMaterialCreateManyPartInput[];
    skipDuplicates?: boolean;
};
export type PartMaterialUpsertWithWhereUniqueWithoutPartInput = {
    where: Prisma.PartMaterialWhereUniqueInput;
    update: Prisma.XOR<Prisma.PartMaterialUpdateWithoutPartInput, Prisma.PartMaterialUncheckedUpdateWithoutPartInput>;
    create: Prisma.XOR<Prisma.PartMaterialCreateWithoutPartInput, Prisma.PartMaterialUncheckedCreateWithoutPartInput>;
};
export type PartMaterialUpdateWithWhereUniqueWithoutPartInput = {
    where: Prisma.PartMaterialWhereUniqueInput;
    data: Prisma.XOR<Prisma.PartMaterialUpdateWithoutPartInput, Prisma.PartMaterialUncheckedUpdateWithoutPartInput>;
};
export type PartMaterialUpdateManyWithWhereWithoutPartInput = {
    where: Prisma.PartMaterialScalarWhereInput;
    data: Prisma.XOR<Prisma.PartMaterialUpdateManyMutationInput, Prisma.PartMaterialUncheckedUpdateManyWithoutPartInput>;
};
export type PartMaterialScalarWhereInput = {
    AND?: Prisma.PartMaterialScalarWhereInput | Prisma.PartMaterialScalarWhereInput[];
    OR?: Prisma.PartMaterialScalarWhereInput[];
    NOT?: Prisma.PartMaterialScalarWhereInput | Prisma.PartMaterialScalarWhereInput[];
    id?: Prisma.StringFilter<"PartMaterial"> | string;
    partId?: Prisma.StringFilter<"PartMaterial"> | string;
    materialId?: Prisma.StringFilter<"PartMaterial"> | string;
    ratio?: Prisma.DecimalFilter<"PartMaterial"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialCreateWithoutMaterialInput = {
    id?: string;
    ratio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    part: Prisma.PartCreateNestedOneWithoutMaterialsInput;
};
export type PartMaterialUncheckedCreateWithoutMaterialInput = {
    id?: string;
    partId: string;
    ratio: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialCreateOrConnectWithoutMaterialInput = {
    where: Prisma.PartMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartMaterialCreateWithoutMaterialInput, Prisma.PartMaterialUncheckedCreateWithoutMaterialInput>;
};
export type PartMaterialCreateManyMaterialInputEnvelope = {
    data: Prisma.PartMaterialCreateManyMaterialInput | Prisma.PartMaterialCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type PartMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.PartMaterialWhereUniqueInput;
    update: Prisma.XOR<Prisma.PartMaterialUpdateWithoutMaterialInput, Prisma.PartMaterialUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.PartMaterialCreateWithoutMaterialInput, Prisma.PartMaterialUncheckedCreateWithoutMaterialInput>;
};
export type PartMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.PartMaterialWhereUniqueInput;
    data: Prisma.XOR<Prisma.PartMaterialUpdateWithoutMaterialInput, Prisma.PartMaterialUncheckedUpdateWithoutMaterialInput>;
};
export type PartMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.PartMaterialScalarWhereInput;
    data: Prisma.XOR<Prisma.PartMaterialUpdateManyMutationInput, Prisma.PartMaterialUncheckedUpdateManyWithoutMaterialInput>;
};
export type PartMaterialCreateManyPartInput = {
    id?: string;
    materialId: string;
    ratio: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialUpdateWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ratio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    material?: Prisma.MaterialUpdateOneRequiredWithoutPartMaterialsNestedInput;
};
export type PartMaterialUncheckedUpdateWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialUncheckedUpdateManyWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialCreateManyMaterialInput = {
    id?: string;
    partId: string;
    ratio: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ratio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    part?: Prisma.PartUpdateOneRequiredWithoutMaterialsNestedInput;
};
export type PartMaterialUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type PartMaterialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partId?: boolean;
    materialId?: boolean;
    ratio?: boolean;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["partMaterial"]>;
export type PartMaterialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partId?: boolean;
    materialId?: boolean;
    ratio?: boolean;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["partMaterial"]>;
export type PartMaterialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partId?: boolean;
    materialId?: boolean;
    ratio?: boolean;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["partMaterial"]>;
export type PartMaterialSelectScalar = {
    id?: boolean;
    partId?: boolean;
    materialId?: boolean;
    ratio?: boolean;
};
export type PartMaterialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "partId" | "materialId" | "ratio", ExtArgs["result"]["partMaterial"]>;
export type PartMaterialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
};
export type PartMaterialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
};
export type PartMaterialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
};
export type $PartMaterialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PartMaterial";
    objects: {
        material: Prisma.$MaterialPayload<ExtArgs>;
        part: Prisma.$PartPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        partId: string;
        materialId: string;
        ratio: runtime.Decimal;
    }, ExtArgs["result"]["partMaterial"]>;
    composites: {};
};
export type PartMaterialGetPayload<S extends boolean | null | undefined | PartMaterialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload, S>;
export type PartMaterialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PartMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PartMaterialCountAggregateInputType | true;
};
export interface PartMaterialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PartMaterial'];
        meta: {
            name: 'PartMaterial';
        };
    };
    /**
     * Find zero or one PartMaterial that matches the filter.
     * @param {PartMaterialFindUniqueArgs} args - Arguments to find a PartMaterial
     * @example
     * // Get one PartMaterial
     * const partMaterial = await prisma.partMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartMaterialFindUniqueArgs>(args: Prisma.SelectSubset<T, PartMaterialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PartMaterialClient<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PartMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartMaterialFindUniqueOrThrowArgs} args - Arguments to find a PartMaterial
     * @example
     * // Get one PartMaterial
     * const partMaterial = await prisma.partMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartMaterialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PartMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartMaterialClient<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PartMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartMaterialFindFirstArgs} args - Arguments to find a PartMaterial
     * @example
     * // Get one PartMaterial
     * const partMaterial = await prisma.partMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartMaterialFindFirstArgs>(args?: Prisma.SelectSubset<T, PartMaterialFindFirstArgs<ExtArgs>>): Prisma.Prisma__PartMaterialClient<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PartMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartMaterialFindFirstOrThrowArgs} args - Arguments to find a PartMaterial
     * @example
     * // Get one PartMaterial
     * const partMaterial = await prisma.partMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartMaterialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PartMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartMaterialClient<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PartMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartMaterials
     * const partMaterials = await prisma.partMaterial.findMany()
     *
     * // Get first 10 PartMaterials
     * const partMaterials = await prisma.partMaterial.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const partMaterialWithIdOnly = await prisma.partMaterial.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PartMaterialFindManyArgs>(args?: Prisma.SelectSubset<T, PartMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PartMaterial.
     * @param {PartMaterialCreateArgs} args - Arguments to create a PartMaterial.
     * @example
     * // Create one PartMaterial
     * const PartMaterial = await prisma.partMaterial.create({
     *   data: {
     *     // ... data to create a PartMaterial
     *   }
     * })
     *
     */
    create<T extends PartMaterialCreateArgs>(args: Prisma.SelectSubset<T, PartMaterialCreateArgs<ExtArgs>>): Prisma.Prisma__PartMaterialClient<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PartMaterials.
     * @param {PartMaterialCreateManyArgs} args - Arguments to create many PartMaterials.
     * @example
     * // Create many PartMaterials
     * const partMaterial = await prisma.partMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PartMaterialCreateManyArgs>(args?: Prisma.SelectSubset<T, PartMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PartMaterials and returns the data saved in the database.
     * @param {PartMaterialCreateManyAndReturnArgs} args - Arguments to create many PartMaterials.
     * @example
     * // Create many PartMaterials
     * const partMaterial = await prisma.partMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PartMaterials and only return the `id`
     * const partMaterialWithIdOnly = await prisma.partMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PartMaterialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PartMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PartMaterial.
     * @param {PartMaterialDeleteArgs} args - Arguments to delete one PartMaterial.
     * @example
     * // Delete one PartMaterial
     * const PartMaterial = await prisma.partMaterial.delete({
     *   where: {
     *     // ... filter to delete one PartMaterial
     *   }
     * })
     *
     */
    delete<T extends PartMaterialDeleteArgs>(args: Prisma.SelectSubset<T, PartMaterialDeleteArgs<ExtArgs>>): Prisma.Prisma__PartMaterialClient<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PartMaterial.
     * @param {PartMaterialUpdateArgs} args - Arguments to update one PartMaterial.
     * @example
     * // Update one PartMaterial
     * const partMaterial = await prisma.partMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PartMaterialUpdateArgs>(args: Prisma.SelectSubset<T, PartMaterialUpdateArgs<ExtArgs>>): Prisma.Prisma__PartMaterialClient<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PartMaterials.
     * @param {PartMaterialDeleteManyArgs} args - Arguments to filter PartMaterials to delete.
     * @example
     * // Delete a few PartMaterials
     * const { count } = await prisma.partMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PartMaterialDeleteManyArgs>(args?: Prisma.SelectSubset<T, PartMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PartMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartMaterials
     * const partMaterial = await prisma.partMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PartMaterialUpdateManyArgs>(args: Prisma.SelectSubset<T, PartMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PartMaterials and returns the data updated in the database.
     * @param {PartMaterialUpdateManyAndReturnArgs} args - Arguments to update many PartMaterials.
     * @example
     * // Update many PartMaterials
     * const partMaterial = await prisma.partMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PartMaterials and only return the `id`
     * const partMaterialWithIdOnly = await prisma.partMaterial.updateManyAndReturn({
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
    updateManyAndReturn<T extends PartMaterialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PartMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PartMaterial.
     * @param {PartMaterialUpsertArgs} args - Arguments to update or create a PartMaterial.
     * @example
     * // Update or create a PartMaterial
     * const partMaterial = await prisma.partMaterial.upsert({
     *   create: {
     *     // ... data to create a PartMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartMaterial we want to update
     *   }
     * })
     */
    upsert<T extends PartMaterialUpsertArgs>(args: Prisma.SelectSubset<T, PartMaterialUpsertArgs<ExtArgs>>): Prisma.Prisma__PartMaterialClient<runtime.Types.Result.GetResult<Prisma.$PartMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PartMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartMaterialCountArgs} args - Arguments to filter PartMaterials to count.
     * @example
     * // Count the number of PartMaterials
     * const count = await prisma.partMaterial.count({
     *   where: {
     *     // ... the filter for the PartMaterials we want to count
     *   }
     * })
    **/
    count<T extends PartMaterialCountArgs>(args?: Prisma.Subset<T, PartMaterialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PartMaterialCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PartMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartMaterialAggregateArgs>(args: Prisma.Subset<T, PartMaterialAggregateArgs>): Prisma.PrismaPromise<GetPartMaterialAggregateType<T>>;
    /**
     * Group by PartMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartMaterialGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PartMaterialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PartMaterialGroupByArgs['orderBy'];
    } : {
        orderBy?: PartMaterialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PartMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PartMaterial model
     */
    readonly fields: PartMaterialFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PartMaterial.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PartMaterialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    material<T extends Prisma.MaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    part<T extends Prisma.PartDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PartDefaultArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PartMaterial model
 */
export interface PartMaterialFieldRefs {
    readonly id: Prisma.FieldRef<"PartMaterial", 'String'>;
    readonly partId: Prisma.FieldRef<"PartMaterial", 'String'>;
    readonly materialId: Prisma.FieldRef<"PartMaterial", 'String'>;
    readonly ratio: Prisma.FieldRef<"PartMaterial", 'Decimal'>;
}
/**
 * PartMaterial findUnique
 */
export type PartMaterialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialInclude<ExtArgs> | null;
    /**
     * Filter, which PartMaterial to fetch.
     */
    where: Prisma.PartMaterialWhereUniqueInput;
};
/**
 * PartMaterial findUniqueOrThrow
 */
export type PartMaterialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialInclude<ExtArgs> | null;
    /**
     * Filter, which PartMaterial to fetch.
     */
    where: Prisma.PartMaterialWhereUniqueInput;
};
/**
 * PartMaterial findFirst
 */
export type PartMaterialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialInclude<ExtArgs> | null;
    /**
     * Filter, which PartMaterial to fetch.
     */
    where?: Prisma.PartMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PartMaterials to fetch.
     */
    orderBy?: Prisma.PartMaterialOrderByWithRelationInput | Prisma.PartMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PartMaterials.
     */
    cursor?: Prisma.PartMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PartMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PartMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PartMaterials.
     */
    distinct?: Prisma.PartMaterialScalarFieldEnum | Prisma.PartMaterialScalarFieldEnum[];
};
/**
 * PartMaterial findFirstOrThrow
 */
export type PartMaterialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialInclude<ExtArgs> | null;
    /**
     * Filter, which PartMaterial to fetch.
     */
    where?: Prisma.PartMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PartMaterials to fetch.
     */
    orderBy?: Prisma.PartMaterialOrderByWithRelationInput | Prisma.PartMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PartMaterials.
     */
    cursor?: Prisma.PartMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PartMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PartMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PartMaterials.
     */
    distinct?: Prisma.PartMaterialScalarFieldEnum | Prisma.PartMaterialScalarFieldEnum[];
};
/**
 * PartMaterial findMany
 */
export type PartMaterialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialInclude<ExtArgs> | null;
    /**
     * Filter, which PartMaterials to fetch.
     */
    where?: Prisma.PartMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PartMaterials to fetch.
     */
    orderBy?: Prisma.PartMaterialOrderByWithRelationInput | Prisma.PartMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PartMaterials.
     */
    cursor?: Prisma.PartMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PartMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PartMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PartMaterials.
     */
    distinct?: Prisma.PartMaterialScalarFieldEnum | Prisma.PartMaterialScalarFieldEnum[];
};
/**
 * PartMaterial create
 */
export type PartMaterialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialInclude<ExtArgs> | null;
    /**
     * The data needed to create a PartMaterial.
     */
    data: Prisma.XOR<Prisma.PartMaterialCreateInput, Prisma.PartMaterialUncheckedCreateInput>;
};
/**
 * PartMaterial createMany
 */
export type PartMaterialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartMaterials.
     */
    data: Prisma.PartMaterialCreateManyInput | Prisma.PartMaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PartMaterial createManyAndReturn
 */
export type PartMaterialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * The data used to create many PartMaterials.
     */
    data: Prisma.PartMaterialCreateManyInput | Prisma.PartMaterialCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PartMaterial update
 */
export type PartMaterialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialInclude<ExtArgs> | null;
    /**
     * The data needed to update a PartMaterial.
     */
    data: Prisma.XOR<Prisma.PartMaterialUpdateInput, Prisma.PartMaterialUncheckedUpdateInput>;
    /**
     * Choose, which PartMaterial to update.
     */
    where: Prisma.PartMaterialWhereUniqueInput;
};
/**
 * PartMaterial updateMany
 */
export type PartMaterialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PartMaterials.
     */
    data: Prisma.XOR<Prisma.PartMaterialUpdateManyMutationInput, Prisma.PartMaterialUncheckedUpdateManyInput>;
    /**
     * Filter which PartMaterials to update
     */
    where?: Prisma.PartMaterialWhereInput;
    /**
     * Limit how many PartMaterials to update.
     */
    limit?: number;
};
/**
 * PartMaterial updateManyAndReturn
 */
export type PartMaterialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * The data used to update PartMaterials.
     */
    data: Prisma.XOR<Prisma.PartMaterialUpdateManyMutationInput, Prisma.PartMaterialUncheckedUpdateManyInput>;
    /**
     * Filter which PartMaterials to update
     */
    where?: Prisma.PartMaterialWhereInput;
    /**
     * Limit how many PartMaterials to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PartMaterial upsert
 */
export type PartMaterialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialInclude<ExtArgs> | null;
    /**
     * The filter to search for the PartMaterial to update in case it exists.
     */
    where: Prisma.PartMaterialWhereUniqueInput;
    /**
     * In case the PartMaterial found by the `where` argument doesn't exist, create a new PartMaterial with this data.
     */
    create: Prisma.XOR<Prisma.PartMaterialCreateInput, Prisma.PartMaterialUncheckedCreateInput>;
    /**
     * In case the PartMaterial was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PartMaterialUpdateInput, Prisma.PartMaterialUncheckedUpdateInput>;
};
/**
 * PartMaterial delete
 */
export type PartMaterialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialInclude<ExtArgs> | null;
    /**
     * Filter which PartMaterial to delete.
     */
    where: Prisma.PartMaterialWhereUniqueInput;
};
/**
 * PartMaterial deleteMany
 */
export type PartMaterialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PartMaterials to delete
     */
    where?: Prisma.PartMaterialWhereInput;
    /**
     * Limit how many PartMaterials to delete.
     */
    limit?: number;
};
/**
 * PartMaterial without action
 */
export type PartMaterialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartMaterial
     */
    select?: Prisma.PartMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PartMaterial
     */
    omit?: Prisma.PartMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PartMaterialInclude<ExtArgs> | null;
};
