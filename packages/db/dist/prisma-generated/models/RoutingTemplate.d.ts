import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model RoutingTemplate
 *
 */
export type RoutingTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$RoutingTemplatePayload>;
export type AggregateRoutingTemplate = {
    _count: RoutingTemplateCountAggregateOutputType | null;
    _min: RoutingTemplateMinAggregateOutputType | null;
    _max: RoutingTemplateMaxAggregateOutputType | null;
};
export type RoutingTemplateMinAggregateOutputType = {
    id: string | null;
    partId: string | null;
    createdAt: Date | null;
};
export type RoutingTemplateMaxAggregateOutputType = {
    id: string | null;
    partId: string | null;
    createdAt: Date | null;
};
export type RoutingTemplateCountAggregateOutputType = {
    id: number;
    partId: number;
    createdAt: number;
    _all: number;
};
export type RoutingTemplateMinAggregateInputType = {
    id?: true;
    partId?: true;
    createdAt?: true;
};
export type RoutingTemplateMaxAggregateInputType = {
    id?: true;
    partId?: true;
    createdAt?: true;
};
export type RoutingTemplateCountAggregateInputType = {
    id?: true;
    partId?: true;
    createdAt?: true;
    _all?: true;
};
export type RoutingTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RoutingTemplate to aggregate.
     */
    where?: Prisma.RoutingTemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoutingTemplates to fetch.
     */
    orderBy?: Prisma.RoutingTemplateOrderByWithRelationInput | Prisma.RoutingTemplateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RoutingTemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoutingTemplates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoutingTemplates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RoutingTemplates
    **/
    _count?: true | RoutingTemplateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RoutingTemplateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RoutingTemplateMaxAggregateInputType;
};
export type GetRoutingTemplateAggregateType<T extends RoutingTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateRoutingTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoutingTemplate[P]> : Prisma.GetScalarType<T[P], AggregateRoutingTemplate[P]>;
};
export type RoutingTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoutingTemplateWhereInput;
    orderBy?: Prisma.RoutingTemplateOrderByWithAggregationInput | Prisma.RoutingTemplateOrderByWithAggregationInput[];
    by: Prisma.RoutingTemplateScalarFieldEnum[] | Prisma.RoutingTemplateScalarFieldEnum;
    having?: Prisma.RoutingTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoutingTemplateCountAggregateInputType | true;
    _min?: RoutingTemplateMinAggregateInputType;
    _max?: RoutingTemplateMaxAggregateInputType;
};
export type RoutingTemplateGroupByOutputType = {
    id: string;
    partId: string;
    createdAt: Date;
    _count: RoutingTemplateCountAggregateOutputType | null;
    _min: RoutingTemplateMinAggregateOutputType | null;
    _max: RoutingTemplateMaxAggregateOutputType | null;
};
export type GetRoutingTemplateGroupByPayload<T extends RoutingTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoutingTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoutingTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoutingTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoutingTemplateGroupByOutputType[P]>;
}>>;
export type RoutingTemplateWhereInput = {
    AND?: Prisma.RoutingTemplateWhereInput | Prisma.RoutingTemplateWhereInput[];
    OR?: Prisma.RoutingTemplateWhereInput[];
    NOT?: Prisma.RoutingTemplateWhereInput | Prisma.RoutingTemplateWhereInput[];
    id?: Prisma.StringFilter<"RoutingTemplate"> | string;
    partId?: Prisma.StringFilter<"RoutingTemplate"> | string;
    createdAt?: Prisma.DateTimeFilter<"RoutingTemplate"> | Date | string;
    part?: Prisma.XOR<Prisma.PartScalarRelationFilter, Prisma.PartWhereInput>;
    steps?: Prisma.RoutingStepListRelationFilter;
};
export type RoutingTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    part?: Prisma.PartOrderByWithRelationInput;
    steps?: Prisma.RoutingStepOrderByRelationAggregateInput;
};
export type RoutingTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    partId?: string;
    AND?: Prisma.RoutingTemplateWhereInput | Prisma.RoutingTemplateWhereInput[];
    OR?: Prisma.RoutingTemplateWhereInput[];
    NOT?: Prisma.RoutingTemplateWhereInput | Prisma.RoutingTemplateWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"RoutingTemplate"> | Date | string;
    part?: Prisma.XOR<Prisma.PartScalarRelationFilter, Prisma.PartWhereInput>;
    steps?: Prisma.RoutingStepListRelationFilter;
}, "id" | "partId">;
export type RoutingTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RoutingTemplateCountOrderByAggregateInput;
    _max?: Prisma.RoutingTemplateMaxOrderByAggregateInput;
    _min?: Prisma.RoutingTemplateMinOrderByAggregateInput;
};
export type RoutingTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoutingTemplateScalarWhereWithAggregatesInput | Prisma.RoutingTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoutingTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoutingTemplateScalarWhereWithAggregatesInput | Prisma.RoutingTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RoutingTemplate"> | string;
    partId?: Prisma.StringWithAggregatesFilter<"RoutingTemplate"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RoutingTemplate"> | Date | string;
};
export type RoutingTemplateCreateInput = {
    id?: string;
    createdAt?: Date | string;
    part: Prisma.PartCreateNestedOneWithoutRoutingInput;
    steps?: Prisma.RoutingStepCreateNestedManyWithoutRoutingInput;
};
export type RoutingTemplateUncheckedCreateInput = {
    id?: string;
    partId: string;
    createdAt?: Date | string;
    steps?: Prisma.RoutingStepUncheckedCreateNestedManyWithoutRoutingInput;
};
export type RoutingTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    part?: Prisma.PartUpdateOneRequiredWithoutRoutingNestedInput;
    steps?: Prisma.RoutingStepUpdateManyWithoutRoutingNestedInput;
};
export type RoutingTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    steps?: Prisma.RoutingStepUncheckedUpdateManyWithoutRoutingNestedInput;
};
export type RoutingTemplateCreateManyInput = {
    id?: string;
    partId: string;
    createdAt?: Date | string;
};
export type RoutingTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoutingTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoutingTemplateNullableScalarRelationFilter = {
    is?: Prisma.RoutingTemplateWhereInput | null;
    isNot?: Prisma.RoutingTemplateWhereInput | null;
};
export type RoutingTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoutingTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoutingTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoutingTemplateScalarRelationFilter = {
    is?: Prisma.RoutingTemplateWhereInput;
    isNot?: Prisma.RoutingTemplateWhereInput;
};
export type RoutingTemplateCreateNestedOneWithoutPartInput = {
    create?: Prisma.XOR<Prisma.RoutingTemplateCreateWithoutPartInput, Prisma.RoutingTemplateUncheckedCreateWithoutPartInput>;
    connectOrCreate?: Prisma.RoutingTemplateCreateOrConnectWithoutPartInput;
    connect?: Prisma.RoutingTemplateWhereUniqueInput;
};
export type RoutingTemplateUncheckedCreateNestedOneWithoutPartInput = {
    create?: Prisma.XOR<Prisma.RoutingTemplateCreateWithoutPartInput, Prisma.RoutingTemplateUncheckedCreateWithoutPartInput>;
    connectOrCreate?: Prisma.RoutingTemplateCreateOrConnectWithoutPartInput;
    connect?: Prisma.RoutingTemplateWhereUniqueInput;
};
export type RoutingTemplateUpdateOneWithoutPartNestedInput = {
    create?: Prisma.XOR<Prisma.RoutingTemplateCreateWithoutPartInput, Prisma.RoutingTemplateUncheckedCreateWithoutPartInput>;
    connectOrCreate?: Prisma.RoutingTemplateCreateOrConnectWithoutPartInput;
    upsert?: Prisma.RoutingTemplateUpsertWithoutPartInput;
    disconnect?: Prisma.RoutingTemplateWhereInput | boolean;
    delete?: Prisma.RoutingTemplateWhereInput | boolean;
    connect?: Prisma.RoutingTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoutingTemplateUpdateToOneWithWhereWithoutPartInput, Prisma.RoutingTemplateUpdateWithoutPartInput>, Prisma.RoutingTemplateUncheckedUpdateWithoutPartInput>;
};
export type RoutingTemplateUncheckedUpdateOneWithoutPartNestedInput = {
    create?: Prisma.XOR<Prisma.RoutingTemplateCreateWithoutPartInput, Prisma.RoutingTemplateUncheckedCreateWithoutPartInput>;
    connectOrCreate?: Prisma.RoutingTemplateCreateOrConnectWithoutPartInput;
    upsert?: Prisma.RoutingTemplateUpsertWithoutPartInput;
    disconnect?: Prisma.RoutingTemplateWhereInput | boolean;
    delete?: Prisma.RoutingTemplateWhereInput | boolean;
    connect?: Prisma.RoutingTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoutingTemplateUpdateToOneWithWhereWithoutPartInput, Prisma.RoutingTemplateUpdateWithoutPartInput>, Prisma.RoutingTemplateUncheckedUpdateWithoutPartInput>;
};
export type RoutingTemplateCreateNestedOneWithoutStepsInput = {
    create?: Prisma.XOR<Prisma.RoutingTemplateCreateWithoutStepsInput, Prisma.RoutingTemplateUncheckedCreateWithoutStepsInput>;
    connectOrCreate?: Prisma.RoutingTemplateCreateOrConnectWithoutStepsInput;
    connect?: Prisma.RoutingTemplateWhereUniqueInput;
};
export type RoutingTemplateUpdateOneRequiredWithoutStepsNestedInput = {
    create?: Prisma.XOR<Prisma.RoutingTemplateCreateWithoutStepsInput, Prisma.RoutingTemplateUncheckedCreateWithoutStepsInput>;
    connectOrCreate?: Prisma.RoutingTemplateCreateOrConnectWithoutStepsInput;
    upsert?: Prisma.RoutingTemplateUpsertWithoutStepsInput;
    connect?: Prisma.RoutingTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoutingTemplateUpdateToOneWithWhereWithoutStepsInput, Prisma.RoutingTemplateUpdateWithoutStepsInput>, Prisma.RoutingTemplateUncheckedUpdateWithoutStepsInput>;
};
export type RoutingTemplateCreateWithoutPartInput = {
    id?: string;
    createdAt?: Date | string;
    steps?: Prisma.RoutingStepCreateNestedManyWithoutRoutingInput;
};
export type RoutingTemplateUncheckedCreateWithoutPartInput = {
    id?: string;
    createdAt?: Date | string;
    steps?: Prisma.RoutingStepUncheckedCreateNestedManyWithoutRoutingInput;
};
export type RoutingTemplateCreateOrConnectWithoutPartInput = {
    where: Prisma.RoutingTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoutingTemplateCreateWithoutPartInput, Prisma.RoutingTemplateUncheckedCreateWithoutPartInput>;
};
export type RoutingTemplateUpsertWithoutPartInput = {
    update: Prisma.XOR<Prisma.RoutingTemplateUpdateWithoutPartInput, Prisma.RoutingTemplateUncheckedUpdateWithoutPartInput>;
    create: Prisma.XOR<Prisma.RoutingTemplateCreateWithoutPartInput, Prisma.RoutingTemplateUncheckedCreateWithoutPartInput>;
    where?: Prisma.RoutingTemplateWhereInput;
};
export type RoutingTemplateUpdateToOneWithWhereWithoutPartInput = {
    where?: Prisma.RoutingTemplateWhereInput;
    data: Prisma.XOR<Prisma.RoutingTemplateUpdateWithoutPartInput, Prisma.RoutingTemplateUncheckedUpdateWithoutPartInput>;
};
export type RoutingTemplateUpdateWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    steps?: Prisma.RoutingStepUpdateManyWithoutRoutingNestedInput;
};
export type RoutingTemplateUncheckedUpdateWithoutPartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    steps?: Prisma.RoutingStepUncheckedUpdateManyWithoutRoutingNestedInput;
};
export type RoutingTemplateCreateWithoutStepsInput = {
    id?: string;
    createdAt?: Date | string;
    part: Prisma.PartCreateNestedOneWithoutRoutingInput;
};
export type RoutingTemplateUncheckedCreateWithoutStepsInput = {
    id?: string;
    partId: string;
    createdAt?: Date | string;
};
export type RoutingTemplateCreateOrConnectWithoutStepsInput = {
    where: Prisma.RoutingTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoutingTemplateCreateWithoutStepsInput, Prisma.RoutingTemplateUncheckedCreateWithoutStepsInput>;
};
export type RoutingTemplateUpsertWithoutStepsInput = {
    update: Prisma.XOR<Prisma.RoutingTemplateUpdateWithoutStepsInput, Prisma.RoutingTemplateUncheckedUpdateWithoutStepsInput>;
    create: Prisma.XOR<Prisma.RoutingTemplateCreateWithoutStepsInput, Prisma.RoutingTemplateUncheckedCreateWithoutStepsInput>;
    where?: Prisma.RoutingTemplateWhereInput;
};
export type RoutingTemplateUpdateToOneWithWhereWithoutStepsInput = {
    where?: Prisma.RoutingTemplateWhereInput;
    data: Prisma.XOR<Prisma.RoutingTemplateUpdateWithoutStepsInput, Prisma.RoutingTemplateUncheckedUpdateWithoutStepsInput>;
};
export type RoutingTemplateUpdateWithoutStepsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    part?: Prisma.PartUpdateOneRequiredWithoutRoutingNestedInput;
};
export type RoutingTemplateUncheckedUpdateWithoutStepsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    partId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type RoutingTemplateCountOutputType
 */
export type RoutingTemplateCountOutputType = {
    steps: number;
};
export type RoutingTemplateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    steps?: boolean | RoutingTemplateCountOutputTypeCountStepsArgs;
};
/**
 * RoutingTemplateCountOutputType without action
 */
export type RoutingTemplateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutingTemplateCountOutputType
     */
    select?: Prisma.RoutingTemplateCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RoutingTemplateCountOutputType without action
 */
export type RoutingTemplateCountOutputTypeCountStepsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoutingStepWhereInput;
};
export type RoutingTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partId?: boolean;
    createdAt?: boolean;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
    steps?: boolean | Prisma.RoutingTemplate$stepsArgs<ExtArgs>;
    _count?: boolean | Prisma.RoutingTemplateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["routingTemplate"]>;
export type RoutingTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partId?: boolean;
    createdAt?: boolean;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["routingTemplate"]>;
export type RoutingTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partId?: boolean;
    createdAt?: boolean;
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["routingTemplate"]>;
export type RoutingTemplateSelectScalar = {
    id?: boolean;
    partId?: boolean;
    createdAt?: boolean;
};
export type RoutingTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "partId" | "createdAt", ExtArgs["result"]["routingTemplate"]>;
export type RoutingTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
    steps?: boolean | Prisma.RoutingTemplate$stepsArgs<ExtArgs>;
    _count?: boolean | Prisma.RoutingTemplateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RoutingTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
};
export type RoutingTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
};
export type $RoutingTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RoutingTemplate";
    objects: {
        part: Prisma.$PartPayload<ExtArgs>;
        steps: Prisma.$RoutingStepPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        partId: string;
        createdAt: Date;
    }, ExtArgs["result"]["routingTemplate"]>;
    composites: {};
};
export type RoutingTemplateGetPayload<S extends boolean | null | undefined | RoutingTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload, S>;
export type RoutingTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoutingTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoutingTemplateCountAggregateInputType | true;
};
export interface RoutingTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RoutingTemplate'];
        meta: {
            name: 'RoutingTemplate';
        };
    };
    /**
     * Find zero or one RoutingTemplate that matches the filter.
     * @param {RoutingTemplateFindUniqueArgs} args - Arguments to find a RoutingTemplate
     * @example
     * // Get one RoutingTemplate
     * const routingTemplate = await prisma.routingTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutingTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, RoutingTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoutingTemplateClient<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RoutingTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutingTemplateFindUniqueOrThrowArgs} args - Arguments to find a RoutingTemplate
     * @example
     * // Get one RoutingTemplate
     * const routingTemplate = await prisma.routingTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutingTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoutingTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoutingTemplateClient<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RoutingTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutingTemplateFindFirstArgs} args - Arguments to find a RoutingTemplate
     * @example
     * // Get one RoutingTemplate
     * const routingTemplate = await prisma.routingTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutingTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, RoutingTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoutingTemplateClient<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RoutingTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutingTemplateFindFirstOrThrowArgs} args - Arguments to find a RoutingTemplate
     * @example
     * // Get one RoutingTemplate
     * const routingTemplate = await prisma.routingTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutingTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoutingTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoutingTemplateClient<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RoutingTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutingTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutingTemplates
     * const routingTemplates = await prisma.routingTemplate.findMany()
     *
     * // Get first 10 RoutingTemplates
     * const routingTemplates = await prisma.routingTemplate.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const routingTemplateWithIdOnly = await prisma.routingTemplate.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RoutingTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, RoutingTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RoutingTemplate.
     * @param {RoutingTemplateCreateArgs} args - Arguments to create a RoutingTemplate.
     * @example
     * // Create one RoutingTemplate
     * const RoutingTemplate = await prisma.routingTemplate.create({
     *   data: {
     *     // ... data to create a RoutingTemplate
     *   }
     * })
     *
     */
    create<T extends RoutingTemplateCreateArgs>(args: Prisma.SelectSubset<T, RoutingTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__RoutingTemplateClient<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RoutingTemplates.
     * @param {RoutingTemplateCreateManyArgs} args - Arguments to create many RoutingTemplates.
     * @example
     * // Create many RoutingTemplates
     * const routingTemplate = await prisma.routingTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RoutingTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, RoutingTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RoutingTemplates and returns the data saved in the database.
     * @param {RoutingTemplateCreateManyAndReturnArgs} args - Arguments to create many RoutingTemplates.
     * @example
     * // Create many RoutingTemplates
     * const routingTemplate = await prisma.routingTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RoutingTemplates and only return the `id`
     * const routingTemplateWithIdOnly = await prisma.routingTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RoutingTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoutingTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RoutingTemplate.
     * @param {RoutingTemplateDeleteArgs} args - Arguments to delete one RoutingTemplate.
     * @example
     * // Delete one RoutingTemplate
     * const RoutingTemplate = await prisma.routingTemplate.delete({
     *   where: {
     *     // ... filter to delete one RoutingTemplate
     *   }
     * })
     *
     */
    delete<T extends RoutingTemplateDeleteArgs>(args: Prisma.SelectSubset<T, RoutingTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__RoutingTemplateClient<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RoutingTemplate.
     * @param {RoutingTemplateUpdateArgs} args - Arguments to update one RoutingTemplate.
     * @example
     * // Update one RoutingTemplate
     * const routingTemplate = await prisma.routingTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RoutingTemplateUpdateArgs>(args: Prisma.SelectSubset<T, RoutingTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__RoutingTemplateClient<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RoutingTemplates.
     * @param {RoutingTemplateDeleteManyArgs} args - Arguments to filter RoutingTemplates to delete.
     * @example
     * // Delete a few RoutingTemplates
     * const { count } = await prisma.routingTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RoutingTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoutingTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RoutingTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutingTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutingTemplates
     * const routingTemplate = await prisma.routingTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RoutingTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, RoutingTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RoutingTemplates and returns the data updated in the database.
     * @param {RoutingTemplateUpdateManyAndReturnArgs} args - Arguments to update many RoutingTemplates.
     * @example
     * // Update many RoutingTemplates
     * const routingTemplate = await prisma.routingTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RoutingTemplates and only return the `id`
     * const routingTemplateWithIdOnly = await prisma.routingTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoutingTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoutingTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RoutingTemplate.
     * @param {RoutingTemplateUpsertArgs} args - Arguments to update or create a RoutingTemplate.
     * @example
     * // Update or create a RoutingTemplate
     * const routingTemplate = await prisma.routingTemplate.upsert({
     *   create: {
     *     // ... data to create a RoutingTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutingTemplate we want to update
     *   }
     * })
     */
    upsert<T extends RoutingTemplateUpsertArgs>(args: Prisma.SelectSubset<T, RoutingTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__RoutingTemplateClient<runtime.Types.Result.GetResult<Prisma.$RoutingTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RoutingTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutingTemplateCountArgs} args - Arguments to filter RoutingTemplates to count.
     * @example
     * // Count the number of RoutingTemplates
     * const count = await prisma.routingTemplate.count({
     *   where: {
     *     // ... the filter for the RoutingTemplates we want to count
     *   }
     * })
    **/
    count<T extends RoutingTemplateCountArgs>(args?: Prisma.Subset<T, RoutingTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoutingTemplateCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RoutingTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutingTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutingTemplateAggregateArgs>(args: Prisma.Subset<T, RoutingTemplateAggregateArgs>): Prisma.PrismaPromise<GetRoutingTemplateAggregateType<T>>;
    /**
     * Group by RoutingTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutingTemplateGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RoutingTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoutingTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: RoutingTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoutingTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutingTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RoutingTemplate model
     */
    readonly fields: RoutingTemplateFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RoutingTemplate.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RoutingTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    part<T extends Prisma.PartDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PartDefaultArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    steps<T extends Prisma.RoutingTemplate$stepsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoutingTemplate$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoutingStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the RoutingTemplate model
 */
export interface RoutingTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"RoutingTemplate", 'String'>;
    readonly partId: Prisma.FieldRef<"RoutingTemplate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RoutingTemplate", 'DateTime'>;
}
/**
 * RoutingTemplate findUnique
 */
export type RoutingTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RoutingTemplate to fetch.
     */
    where: Prisma.RoutingTemplateWhereUniqueInput;
};
/**
 * RoutingTemplate findUniqueOrThrow
 */
export type RoutingTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RoutingTemplate to fetch.
     */
    where: Prisma.RoutingTemplateWhereUniqueInput;
};
/**
 * RoutingTemplate findFirst
 */
export type RoutingTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RoutingTemplate to fetch.
     */
    where?: Prisma.RoutingTemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoutingTemplates to fetch.
     */
    orderBy?: Prisma.RoutingTemplateOrderByWithRelationInput | Prisma.RoutingTemplateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoutingTemplates.
     */
    cursor?: Prisma.RoutingTemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoutingTemplates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoutingTemplates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoutingTemplates.
     */
    distinct?: Prisma.RoutingTemplateScalarFieldEnum | Prisma.RoutingTemplateScalarFieldEnum[];
};
/**
 * RoutingTemplate findFirstOrThrow
 */
export type RoutingTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RoutingTemplate to fetch.
     */
    where?: Prisma.RoutingTemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoutingTemplates to fetch.
     */
    orderBy?: Prisma.RoutingTemplateOrderByWithRelationInput | Prisma.RoutingTemplateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoutingTemplates.
     */
    cursor?: Prisma.RoutingTemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoutingTemplates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoutingTemplates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoutingTemplates.
     */
    distinct?: Prisma.RoutingTemplateScalarFieldEnum | Prisma.RoutingTemplateScalarFieldEnum[];
};
/**
 * RoutingTemplate findMany
 */
export type RoutingTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RoutingTemplates to fetch.
     */
    where?: Prisma.RoutingTemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoutingTemplates to fetch.
     */
    orderBy?: Prisma.RoutingTemplateOrderByWithRelationInput | Prisma.RoutingTemplateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RoutingTemplates.
     */
    cursor?: Prisma.RoutingTemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoutingTemplates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoutingTemplates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoutingTemplates.
     */
    distinct?: Prisma.RoutingTemplateScalarFieldEnum | Prisma.RoutingTemplateScalarFieldEnum[];
};
/**
 * RoutingTemplate create
 */
export type RoutingTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a RoutingTemplate.
     */
    data: Prisma.XOR<Prisma.RoutingTemplateCreateInput, Prisma.RoutingTemplateUncheckedCreateInput>;
};
/**
 * RoutingTemplate createMany
 */
export type RoutingTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutingTemplates.
     */
    data: Prisma.RoutingTemplateCreateManyInput | Prisma.RoutingTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RoutingTemplate createManyAndReturn
 */
export type RoutingTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutingTemplate
     */
    select?: Prisma.RoutingTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RoutingTemplate
     */
    omit?: Prisma.RoutingTemplateOmit<ExtArgs> | null;
    /**
     * The data used to create many RoutingTemplates.
     */
    data: Prisma.RoutingTemplateCreateManyInput | Prisma.RoutingTemplateCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoutingTemplateIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * RoutingTemplate update
 */
export type RoutingTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a RoutingTemplate.
     */
    data: Prisma.XOR<Prisma.RoutingTemplateUpdateInput, Prisma.RoutingTemplateUncheckedUpdateInput>;
    /**
     * Choose, which RoutingTemplate to update.
     */
    where: Prisma.RoutingTemplateWhereUniqueInput;
};
/**
 * RoutingTemplate updateMany
 */
export type RoutingTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutingTemplates.
     */
    data: Prisma.XOR<Prisma.RoutingTemplateUpdateManyMutationInput, Prisma.RoutingTemplateUncheckedUpdateManyInput>;
    /**
     * Filter which RoutingTemplates to update
     */
    where?: Prisma.RoutingTemplateWhereInput;
    /**
     * Limit how many RoutingTemplates to update.
     */
    limit?: number;
};
/**
 * RoutingTemplate updateManyAndReturn
 */
export type RoutingTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutingTemplate
     */
    select?: Prisma.RoutingTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RoutingTemplate
     */
    omit?: Prisma.RoutingTemplateOmit<ExtArgs> | null;
    /**
     * The data used to update RoutingTemplates.
     */
    data: Prisma.XOR<Prisma.RoutingTemplateUpdateManyMutationInput, Prisma.RoutingTemplateUncheckedUpdateManyInput>;
    /**
     * Filter which RoutingTemplates to update
     */
    where?: Prisma.RoutingTemplateWhereInput;
    /**
     * Limit how many RoutingTemplates to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoutingTemplateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * RoutingTemplate upsert
 */
export type RoutingTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the RoutingTemplate to update in case it exists.
     */
    where: Prisma.RoutingTemplateWhereUniqueInput;
    /**
     * In case the RoutingTemplate found by the `where` argument doesn't exist, create a new RoutingTemplate with this data.
     */
    create: Prisma.XOR<Prisma.RoutingTemplateCreateInput, Prisma.RoutingTemplateUncheckedCreateInput>;
    /**
     * In case the RoutingTemplate was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RoutingTemplateUpdateInput, Prisma.RoutingTemplateUncheckedUpdateInput>;
};
/**
 * RoutingTemplate delete
 */
export type RoutingTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which RoutingTemplate to delete.
     */
    where: Prisma.RoutingTemplateWhereUniqueInput;
};
/**
 * RoutingTemplate deleteMany
 */
export type RoutingTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RoutingTemplates to delete
     */
    where?: Prisma.RoutingTemplateWhereInput;
    /**
     * Limit how many RoutingTemplates to delete.
     */
    limit?: number;
};
/**
 * RoutingTemplate.steps
 */
export type RoutingTemplate$stepsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutingStep
     */
    select?: Prisma.RoutingStepSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RoutingStep
     */
    omit?: Prisma.RoutingStepOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoutingStepInclude<ExtArgs> | null;
    where?: Prisma.RoutingStepWhereInput;
    orderBy?: Prisma.RoutingStepOrderByWithRelationInput | Prisma.RoutingStepOrderByWithRelationInput[];
    cursor?: Prisma.RoutingStepWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoutingStepScalarFieldEnum | Prisma.RoutingStepScalarFieldEnum[];
};
/**
 * RoutingTemplate without action
 */
export type RoutingTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
