import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model QcLog
 *
 */
export type QcLogModel = runtime.Types.Result.DefaultSelection<Prisma.$QcLogPayload>;
export type AggregateQcLog = {
    _count: QcLogCountAggregateOutputType | null;
    _min: QcLogMinAggregateOutputType | null;
    _max: QcLogMaxAggregateOutputType | null;
};
export type QcLogMinAggregateOutputType = {
    id: string | null;
    operationId: string | null;
    result: $Enums.QcResult | null;
    reason: string | null;
    inspectorId: string | null;
    loggedAt: Date | null;
};
export type QcLogMaxAggregateOutputType = {
    id: string | null;
    operationId: string | null;
    result: $Enums.QcResult | null;
    reason: string | null;
    inspectorId: string | null;
    loggedAt: Date | null;
};
export type QcLogCountAggregateOutputType = {
    id: number;
    operationId: number;
    result: number;
    reason: number;
    inspectorId: number;
    loggedAt: number;
    _all: number;
};
export type QcLogMinAggregateInputType = {
    id?: true;
    operationId?: true;
    result?: true;
    reason?: true;
    inspectorId?: true;
    loggedAt?: true;
};
export type QcLogMaxAggregateInputType = {
    id?: true;
    operationId?: true;
    result?: true;
    reason?: true;
    inspectorId?: true;
    loggedAt?: true;
};
export type QcLogCountAggregateInputType = {
    id?: true;
    operationId?: true;
    result?: true;
    reason?: true;
    inspectorId?: true;
    loggedAt?: true;
    _all?: true;
};
export type QcLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which QcLog to aggregate.
     */
    where?: Prisma.QcLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QcLogs to fetch.
     */
    orderBy?: Prisma.QcLogOrderByWithRelationInput | Prisma.QcLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.QcLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QcLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QcLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned QcLogs
    **/
    _count?: true | QcLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: QcLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: QcLogMaxAggregateInputType;
};
export type GetQcLogAggregateType<T extends QcLogAggregateArgs> = {
    [P in keyof T & keyof AggregateQcLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQcLog[P]> : Prisma.GetScalarType<T[P], AggregateQcLog[P]>;
};
export type QcLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QcLogWhereInput;
    orderBy?: Prisma.QcLogOrderByWithAggregationInput | Prisma.QcLogOrderByWithAggregationInput[];
    by: Prisma.QcLogScalarFieldEnum[] | Prisma.QcLogScalarFieldEnum;
    having?: Prisma.QcLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QcLogCountAggregateInputType | true;
    _min?: QcLogMinAggregateInputType;
    _max?: QcLogMaxAggregateInputType;
};
export type QcLogGroupByOutputType = {
    id: string;
    operationId: string;
    result: $Enums.QcResult;
    reason: string | null;
    inspectorId: string;
    loggedAt: Date;
    _count: QcLogCountAggregateOutputType | null;
    _min: QcLogMinAggregateOutputType | null;
    _max: QcLogMaxAggregateOutputType | null;
};
export type GetQcLogGroupByPayload<T extends QcLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QcLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QcLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QcLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QcLogGroupByOutputType[P]>;
}>>;
export type QcLogWhereInput = {
    AND?: Prisma.QcLogWhereInput | Prisma.QcLogWhereInput[];
    OR?: Prisma.QcLogWhereInput[];
    NOT?: Prisma.QcLogWhereInput | Prisma.QcLogWhereInput[];
    id?: Prisma.StringFilter<"QcLog"> | string;
    operationId?: Prisma.StringFilter<"QcLog"> | string;
    result?: Prisma.EnumQcResultFilter<"QcLog"> | $Enums.QcResult;
    reason?: Prisma.StringNullableFilter<"QcLog"> | string | null;
    inspectorId?: Prisma.StringFilter<"QcLog"> | string;
    loggedAt?: Prisma.DateTimeFilter<"QcLog"> | Date | string;
    findings?: Prisma.QcFindingListRelationFilter;
    inspector?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    operation?: Prisma.XOR<Prisma.OperationScalarRelationFilter, Prisma.OperationWhereInput>;
};
export type QcLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    inspectorId?: Prisma.SortOrder;
    loggedAt?: Prisma.SortOrder;
    findings?: Prisma.QcFindingOrderByRelationAggregateInput;
    inspector?: Prisma.UserOrderByWithRelationInput;
    operation?: Prisma.OperationOrderByWithRelationInput;
};
export type QcLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    operationId?: string;
    AND?: Prisma.QcLogWhereInput | Prisma.QcLogWhereInput[];
    OR?: Prisma.QcLogWhereInput[];
    NOT?: Prisma.QcLogWhereInput | Prisma.QcLogWhereInput[];
    result?: Prisma.EnumQcResultFilter<"QcLog"> | $Enums.QcResult;
    reason?: Prisma.StringNullableFilter<"QcLog"> | string | null;
    inspectorId?: Prisma.StringFilter<"QcLog"> | string;
    loggedAt?: Prisma.DateTimeFilter<"QcLog"> | Date | string;
    findings?: Prisma.QcFindingListRelationFilter;
    inspector?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    operation?: Prisma.XOR<Prisma.OperationScalarRelationFilter, Prisma.OperationWhereInput>;
}, "id" | "operationId">;
export type QcLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    inspectorId?: Prisma.SortOrder;
    loggedAt?: Prisma.SortOrder;
    _count?: Prisma.QcLogCountOrderByAggregateInput;
    _max?: Prisma.QcLogMaxOrderByAggregateInput;
    _min?: Prisma.QcLogMinOrderByAggregateInput;
};
export type QcLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.QcLogScalarWhereWithAggregatesInput | Prisma.QcLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.QcLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QcLogScalarWhereWithAggregatesInput | Prisma.QcLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QcLog"> | string;
    operationId?: Prisma.StringWithAggregatesFilter<"QcLog"> | string;
    result?: Prisma.EnumQcResultWithAggregatesFilter<"QcLog"> | $Enums.QcResult;
    reason?: Prisma.StringNullableWithAggregatesFilter<"QcLog"> | string | null;
    inspectorId?: Prisma.StringWithAggregatesFilter<"QcLog"> | string;
    loggedAt?: Prisma.DateTimeWithAggregatesFilter<"QcLog"> | Date | string;
};
export type QcLogCreateInput = {
    id?: string;
    result: $Enums.QcResult;
    reason?: string | null;
    loggedAt?: Date | string;
    findings?: Prisma.QcFindingCreateNestedManyWithoutQcLogInput;
    inspector: Prisma.UserCreateNestedOneWithoutQcLogsInput;
    operation: Prisma.OperationCreateNestedOneWithoutQcLogInput;
};
export type QcLogUncheckedCreateInput = {
    id?: string;
    operationId: string;
    result: $Enums.QcResult;
    reason?: string | null;
    inspectorId: string;
    loggedAt?: Date | string;
    findings?: Prisma.QcFindingUncheckedCreateNestedManyWithoutQcLogInput;
};
export type QcLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    findings?: Prisma.QcFindingUpdateManyWithoutQcLogNestedInput;
    inspector?: Prisma.UserUpdateOneRequiredWithoutQcLogsNestedInput;
    operation?: Prisma.OperationUpdateOneRequiredWithoutQcLogNestedInput;
};
export type QcLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inspectorId?: Prisma.StringFieldUpdateOperationsInput | string;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    findings?: Prisma.QcFindingUncheckedUpdateManyWithoutQcLogNestedInput;
};
export type QcLogCreateManyInput = {
    id?: string;
    operationId: string;
    result: $Enums.QcResult;
    reason?: string | null;
    inspectorId: string;
    loggedAt?: Date | string;
};
export type QcLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QcLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inspectorId?: Prisma.StringFieldUpdateOperationsInput | string;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QcLogListRelationFilter = {
    every?: Prisma.QcLogWhereInput;
    some?: Prisma.QcLogWhereInput;
    none?: Prisma.QcLogWhereInput;
};
export type QcLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QcLogNullableScalarRelationFilter = {
    is?: Prisma.QcLogWhereInput | null;
    isNot?: Prisma.QcLogWhereInput | null;
};
export type QcLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    inspectorId?: Prisma.SortOrder;
    loggedAt?: Prisma.SortOrder;
};
export type QcLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    inspectorId?: Prisma.SortOrder;
    loggedAt?: Prisma.SortOrder;
};
export type QcLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    inspectorId?: Prisma.SortOrder;
    loggedAt?: Prisma.SortOrder;
};
export type QcLogScalarRelationFilter = {
    is?: Prisma.QcLogWhereInput;
    isNot?: Prisma.QcLogWhereInput;
};
export type QcLogCreateNestedManyWithoutInspectorInput = {
    create?: Prisma.XOR<Prisma.QcLogCreateWithoutInspectorInput, Prisma.QcLogUncheckedCreateWithoutInspectorInput> | Prisma.QcLogCreateWithoutInspectorInput[] | Prisma.QcLogUncheckedCreateWithoutInspectorInput[];
    connectOrCreate?: Prisma.QcLogCreateOrConnectWithoutInspectorInput | Prisma.QcLogCreateOrConnectWithoutInspectorInput[];
    createMany?: Prisma.QcLogCreateManyInspectorInputEnvelope;
    connect?: Prisma.QcLogWhereUniqueInput | Prisma.QcLogWhereUniqueInput[];
};
export type QcLogUncheckedCreateNestedManyWithoutInspectorInput = {
    create?: Prisma.XOR<Prisma.QcLogCreateWithoutInspectorInput, Prisma.QcLogUncheckedCreateWithoutInspectorInput> | Prisma.QcLogCreateWithoutInspectorInput[] | Prisma.QcLogUncheckedCreateWithoutInspectorInput[];
    connectOrCreate?: Prisma.QcLogCreateOrConnectWithoutInspectorInput | Prisma.QcLogCreateOrConnectWithoutInspectorInput[];
    createMany?: Prisma.QcLogCreateManyInspectorInputEnvelope;
    connect?: Prisma.QcLogWhereUniqueInput | Prisma.QcLogWhereUniqueInput[];
};
export type QcLogUpdateManyWithoutInspectorNestedInput = {
    create?: Prisma.XOR<Prisma.QcLogCreateWithoutInspectorInput, Prisma.QcLogUncheckedCreateWithoutInspectorInput> | Prisma.QcLogCreateWithoutInspectorInput[] | Prisma.QcLogUncheckedCreateWithoutInspectorInput[];
    connectOrCreate?: Prisma.QcLogCreateOrConnectWithoutInspectorInput | Prisma.QcLogCreateOrConnectWithoutInspectorInput[];
    upsert?: Prisma.QcLogUpsertWithWhereUniqueWithoutInspectorInput | Prisma.QcLogUpsertWithWhereUniqueWithoutInspectorInput[];
    createMany?: Prisma.QcLogCreateManyInspectorInputEnvelope;
    set?: Prisma.QcLogWhereUniqueInput | Prisma.QcLogWhereUniqueInput[];
    disconnect?: Prisma.QcLogWhereUniqueInput | Prisma.QcLogWhereUniqueInput[];
    delete?: Prisma.QcLogWhereUniqueInput | Prisma.QcLogWhereUniqueInput[];
    connect?: Prisma.QcLogWhereUniqueInput | Prisma.QcLogWhereUniqueInput[];
    update?: Prisma.QcLogUpdateWithWhereUniqueWithoutInspectorInput | Prisma.QcLogUpdateWithWhereUniqueWithoutInspectorInput[];
    updateMany?: Prisma.QcLogUpdateManyWithWhereWithoutInspectorInput | Prisma.QcLogUpdateManyWithWhereWithoutInspectorInput[];
    deleteMany?: Prisma.QcLogScalarWhereInput | Prisma.QcLogScalarWhereInput[];
};
export type QcLogUncheckedUpdateManyWithoutInspectorNestedInput = {
    create?: Prisma.XOR<Prisma.QcLogCreateWithoutInspectorInput, Prisma.QcLogUncheckedCreateWithoutInspectorInput> | Prisma.QcLogCreateWithoutInspectorInput[] | Prisma.QcLogUncheckedCreateWithoutInspectorInput[];
    connectOrCreate?: Prisma.QcLogCreateOrConnectWithoutInspectorInput | Prisma.QcLogCreateOrConnectWithoutInspectorInput[];
    upsert?: Prisma.QcLogUpsertWithWhereUniqueWithoutInspectorInput | Prisma.QcLogUpsertWithWhereUniqueWithoutInspectorInput[];
    createMany?: Prisma.QcLogCreateManyInspectorInputEnvelope;
    set?: Prisma.QcLogWhereUniqueInput | Prisma.QcLogWhereUniqueInput[];
    disconnect?: Prisma.QcLogWhereUniqueInput | Prisma.QcLogWhereUniqueInput[];
    delete?: Prisma.QcLogWhereUniqueInput | Prisma.QcLogWhereUniqueInput[];
    connect?: Prisma.QcLogWhereUniqueInput | Prisma.QcLogWhereUniqueInput[];
    update?: Prisma.QcLogUpdateWithWhereUniqueWithoutInspectorInput | Prisma.QcLogUpdateWithWhereUniqueWithoutInspectorInput[];
    updateMany?: Prisma.QcLogUpdateManyWithWhereWithoutInspectorInput | Prisma.QcLogUpdateManyWithWhereWithoutInspectorInput[];
    deleteMany?: Prisma.QcLogScalarWhereInput | Prisma.QcLogScalarWhereInput[];
};
export type QcLogCreateNestedOneWithoutOperationInput = {
    create?: Prisma.XOR<Prisma.QcLogCreateWithoutOperationInput, Prisma.QcLogUncheckedCreateWithoutOperationInput>;
    connectOrCreate?: Prisma.QcLogCreateOrConnectWithoutOperationInput;
    connect?: Prisma.QcLogWhereUniqueInput;
};
export type QcLogUncheckedCreateNestedOneWithoutOperationInput = {
    create?: Prisma.XOR<Prisma.QcLogCreateWithoutOperationInput, Prisma.QcLogUncheckedCreateWithoutOperationInput>;
    connectOrCreate?: Prisma.QcLogCreateOrConnectWithoutOperationInput;
    connect?: Prisma.QcLogWhereUniqueInput;
};
export type QcLogUpdateOneWithoutOperationNestedInput = {
    create?: Prisma.XOR<Prisma.QcLogCreateWithoutOperationInput, Prisma.QcLogUncheckedCreateWithoutOperationInput>;
    connectOrCreate?: Prisma.QcLogCreateOrConnectWithoutOperationInput;
    upsert?: Prisma.QcLogUpsertWithoutOperationInput;
    disconnect?: Prisma.QcLogWhereInput | boolean;
    delete?: Prisma.QcLogWhereInput | boolean;
    connect?: Prisma.QcLogWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QcLogUpdateToOneWithWhereWithoutOperationInput, Prisma.QcLogUpdateWithoutOperationInput>, Prisma.QcLogUncheckedUpdateWithoutOperationInput>;
};
export type QcLogUncheckedUpdateOneWithoutOperationNestedInput = {
    create?: Prisma.XOR<Prisma.QcLogCreateWithoutOperationInput, Prisma.QcLogUncheckedCreateWithoutOperationInput>;
    connectOrCreate?: Prisma.QcLogCreateOrConnectWithoutOperationInput;
    upsert?: Prisma.QcLogUpsertWithoutOperationInput;
    disconnect?: Prisma.QcLogWhereInput | boolean;
    delete?: Prisma.QcLogWhereInput | boolean;
    connect?: Prisma.QcLogWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QcLogUpdateToOneWithWhereWithoutOperationInput, Prisma.QcLogUpdateWithoutOperationInput>, Prisma.QcLogUncheckedUpdateWithoutOperationInput>;
};
export type EnumQcResultFieldUpdateOperationsInput = {
    set?: $Enums.QcResult;
};
export type QcLogCreateNestedOneWithoutFindingsInput = {
    create?: Prisma.XOR<Prisma.QcLogCreateWithoutFindingsInput, Prisma.QcLogUncheckedCreateWithoutFindingsInput>;
    connectOrCreate?: Prisma.QcLogCreateOrConnectWithoutFindingsInput;
    connect?: Prisma.QcLogWhereUniqueInput;
};
export type QcLogUpdateOneRequiredWithoutFindingsNestedInput = {
    create?: Prisma.XOR<Prisma.QcLogCreateWithoutFindingsInput, Prisma.QcLogUncheckedCreateWithoutFindingsInput>;
    connectOrCreate?: Prisma.QcLogCreateOrConnectWithoutFindingsInput;
    upsert?: Prisma.QcLogUpsertWithoutFindingsInput;
    connect?: Prisma.QcLogWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QcLogUpdateToOneWithWhereWithoutFindingsInput, Prisma.QcLogUpdateWithoutFindingsInput>, Prisma.QcLogUncheckedUpdateWithoutFindingsInput>;
};
export type QcLogCreateWithoutInspectorInput = {
    id?: string;
    result: $Enums.QcResult;
    reason?: string | null;
    loggedAt?: Date | string;
    findings?: Prisma.QcFindingCreateNestedManyWithoutQcLogInput;
    operation: Prisma.OperationCreateNestedOneWithoutQcLogInput;
};
export type QcLogUncheckedCreateWithoutInspectorInput = {
    id?: string;
    operationId: string;
    result: $Enums.QcResult;
    reason?: string | null;
    loggedAt?: Date | string;
    findings?: Prisma.QcFindingUncheckedCreateNestedManyWithoutQcLogInput;
};
export type QcLogCreateOrConnectWithoutInspectorInput = {
    where: Prisma.QcLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.QcLogCreateWithoutInspectorInput, Prisma.QcLogUncheckedCreateWithoutInspectorInput>;
};
export type QcLogCreateManyInspectorInputEnvelope = {
    data: Prisma.QcLogCreateManyInspectorInput | Prisma.QcLogCreateManyInspectorInput[];
    skipDuplicates?: boolean;
};
export type QcLogUpsertWithWhereUniqueWithoutInspectorInput = {
    where: Prisma.QcLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.QcLogUpdateWithoutInspectorInput, Prisma.QcLogUncheckedUpdateWithoutInspectorInput>;
    create: Prisma.XOR<Prisma.QcLogCreateWithoutInspectorInput, Prisma.QcLogUncheckedCreateWithoutInspectorInput>;
};
export type QcLogUpdateWithWhereUniqueWithoutInspectorInput = {
    where: Prisma.QcLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.QcLogUpdateWithoutInspectorInput, Prisma.QcLogUncheckedUpdateWithoutInspectorInput>;
};
export type QcLogUpdateManyWithWhereWithoutInspectorInput = {
    where: Prisma.QcLogScalarWhereInput;
    data: Prisma.XOR<Prisma.QcLogUpdateManyMutationInput, Prisma.QcLogUncheckedUpdateManyWithoutInspectorInput>;
};
export type QcLogScalarWhereInput = {
    AND?: Prisma.QcLogScalarWhereInput | Prisma.QcLogScalarWhereInput[];
    OR?: Prisma.QcLogScalarWhereInput[];
    NOT?: Prisma.QcLogScalarWhereInput | Prisma.QcLogScalarWhereInput[];
    id?: Prisma.StringFilter<"QcLog"> | string;
    operationId?: Prisma.StringFilter<"QcLog"> | string;
    result?: Prisma.EnumQcResultFilter<"QcLog"> | $Enums.QcResult;
    reason?: Prisma.StringNullableFilter<"QcLog"> | string | null;
    inspectorId?: Prisma.StringFilter<"QcLog"> | string;
    loggedAt?: Prisma.DateTimeFilter<"QcLog"> | Date | string;
};
export type QcLogCreateWithoutOperationInput = {
    id?: string;
    result: $Enums.QcResult;
    reason?: string | null;
    loggedAt?: Date | string;
    findings?: Prisma.QcFindingCreateNestedManyWithoutQcLogInput;
    inspector: Prisma.UserCreateNestedOneWithoutQcLogsInput;
};
export type QcLogUncheckedCreateWithoutOperationInput = {
    id?: string;
    result: $Enums.QcResult;
    reason?: string | null;
    inspectorId: string;
    loggedAt?: Date | string;
    findings?: Prisma.QcFindingUncheckedCreateNestedManyWithoutQcLogInput;
};
export type QcLogCreateOrConnectWithoutOperationInput = {
    where: Prisma.QcLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.QcLogCreateWithoutOperationInput, Prisma.QcLogUncheckedCreateWithoutOperationInput>;
};
export type QcLogUpsertWithoutOperationInput = {
    update: Prisma.XOR<Prisma.QcLogUpdateWithoutOperationInput, Prisma.QcLogUncheckedUpdateWithoutOperationInput>;
    create: Prisma.XOR<Prisma.QcLogCreateWithoutOperationInput, Prisma.QcLogUncheckedCreateWithoutOperationInput>;
    where?: Prisma.QcLogWhereInput;
};
export type QcLogUpdateToOneWithWhereWithoutOperationInput = {
    where?: Prisma.QcLogWhereInput;
    data: Prisma.XOR<Prisma.QcLogUpdateWithoutOperationInput, Prisma.QcLogUncheckedUpdateWithoutOperationInput>;
};
export type QcLogUpdateWithoutOperationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    findings?: Prisma.QcFindingUpdateManyWithoutQcLogNestedInput;
    inspector?: Prisma.UserUpdateOneRequiredWithoutQcLogsNestedInput;
};
export type QcLogUncheckedUpdateWithoutOperationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inspectorId?: Prisma.StringFieldUpdateOperationsInput | string;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    findings?: Prisma.QcFindingUncheckedUpdateManyWithoutQcLogNestedInput;
};
export type QcLogCreateWithoutFindingsInput = {
    id?: string;
    result: $Enums.QcResult;
    reason?: string | null;
    loggedAt?: Date | string;
    inspector: Prisma.UserCreateNestedOneWithoutQcLogsInput;
    operation: Prisma.OperationCreateNestedOneWithoutQcLogInput;
};
export type QcLogUncheckedCreateWithoutFindingsInput = {
    id?: string;
    operationId: string;
    result: $Enums.QcResult;
    reason?: string | null;
    inspectorId: string;
    loggedAt?: Date | string;
};
export type QcLogCreateOrConnectWithoutFindingsInput = {
    where: Prisma.QcLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.QcLogCreateWithoutFindingsInput, Prisma.QcLogUncheckedCreateWithoutFindingsInput>;
};
export type QcLogUpsertWithoutFindingsInput = {
    update: Prisma.XOR<Prisma.QcLogUpdateWithoutFindingsInput, Prisma.QcLogUncheckedUpdateWithoutFindingsInput>;
    create: Prisma.XOR<Prisma.QcLogCreateWithoutFindingsInput, Prisma.QcLogUncheckedCreateWithoutFindingsInput>;
    where?: Prisma.QcLogWhereInput;
};
export type QcLogUpdateToOneWithWhereWithoutFindingsInput = {
    where?: Prisma.QcLogWhereInput;
    data: Prisma.XOR<Prisma.QcLogUpdateWithoutFindingsInput, Prisma.QcLogUncheckedUpdateWithoutFindingsInput>;
};
export type QcLogUpdateWithoutFindingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inspector?: Prisma.UserUpdateOneRequiredWithoutQcLogsNestedInput;
    operation?: Prisma.OperationUpdateOneRequiredWithoutQcLogNestedInput;
};
export type QcLogUncheckedUpdateWithoutFindingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inspectorId?: Prisma.StringFieldUpdateOperationsInput | string;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QcLogCreateManyInspectorInput = {
    id?: string;
    operationId: string;
    result: $Enums.QcResult;
    reason?: string | null;
    loggedAt?: Date | string;
};
export type QcLogUpdateWithoutInspectorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    findings?: Prisma.QcFindingUpdateManyWithoutQcLogNestedInput;
    operation?: Prisma.OperationUpdateOneRequiredWithoutQcLogNestedInput;
};
export type QcLogUncheckedUpdateWithoutInspectorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    findings?: Prisma.QcFindingUncheckedUpdateManyWithoutQcLogNestedInput;
};
export type QcLogUncheckedUpdateManyWithoutInspectorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumQcResultFieldUpdateOperationsInput | $Enums.QcResult;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type QcLogCountOutputType
 */
export type QcLogCountOutputType = {
    findings: number;
};
export type QcLogCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    findings?: boolean | QcLogCountOutputTypeCountFindingsArgs;
};
/**
 * QcLogCountOutputType without action
 */
export type QcLogCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLogCountOutputType
     */
    select?: Prisma.QcLogCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * QcLogCountOutputType without action
 */
export type QcLogCountOutputTypeCountFindingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QcFindingWhereInput;
};
export type QcLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    operationId?: boolean;
    result?: boolean;
    reason?: boolean;
    inspectorId?: boolean;
    loggedAt?: boolean;
    findings?: boolean | Prisma.QcLog$findingsArgs<ExtArgs>;
    inspector?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.QcLogCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["qcLog"]>;
export type QcLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    operationId?: boolean;
    result?: boolean;
    reason?: boolean;
    inspectorId?: boolean;
    loggedAt?: boolean;
    inspector?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["qcLog"]>;
export type QcLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    operationId?: boolean;
    result?: boolean;
    reason?: boolean;
    inspectorId?: boolean;
    loggedAt?: boolean;
    inspector?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["qcLog"]>;
export type QcLogSelectScalar = {
    id?: boolean;
    operationId?: boolean;
    result?: boolean;
    reason?: boolean;
    inspectorId?: boolean;
    loggedAt?: boolean;
};
export type QcLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "operationId" | "result" | "reason" | "inspectorId" | "loggedAt", ExtArgs["result"]["qcLog"]>;
export type QcLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    findings?: boolean | Prisma.QcLog$findingsArgs<ExtArgs>;
    inspector?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.QcLogCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QcLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inspector?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
};
export type QcLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inspector?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
};
export type $QcLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QcLog";
    objects: {
        findings: Prisma.$QcFindingPayload<ExtArgs>[];
        inspector: Prisma.$UserPayload<ExtArgs>;
        operation: Prisma.$OperationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        operationId: string;
        result: $Enums.QcResult;
        reason: string | null;
        inspectorId: string;
        loggedAt: Date;
    }, ExtArgs["result"]["qcLog"]>;
    composites: {};
};
export type QcLogGetPayload<S extends boolean | null | undefined | QcLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QcLogPayload, S>;
export type QcLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QcLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QcLogCountAggregateInputType | true;
};
export interface QcLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QcLog'];
        meta: {
            name: 'QcLog';
        };
    };
    /**
     * Find zero or one QcLog that matches the filter.
     * @param {QcLogFindUniqueArgs} args - Arguments to find a QcLog
     * @example
     * // Get one QcLog
     * const qcLog = await prisma.qcLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QcLogFindUniqueArgs>(args: Prisma.SelectSubset<T, QcLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QcLogClient<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one QcLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QcLogFindUniqueOrThrowArgs} args - Arguments to find a QcLog
     * @example
     * // Get one QcLog
     * const qcLog = await prisma.qcLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QcLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QcLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QcLogClient<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first QcLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcLogFindFirstArgs} args - Arguments to find a QcLog
     * @example
     * // Get one QcLog
     * const qcLog = await prisma.qcLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QcLogFindFirstArgs>(args?: Prisma.SelectSubset<T, QcLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__QcLogClient<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first QcLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcLogFindFirstOrThrowArgs} args - Arguments to find a QcLog
     * @example
     * // Get one QcLog
     * const qcLog = await prisma.qcLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QcLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QcLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QcLogClient<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more QcLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QcLogs
     * const qcLogs = await prisma.qcLog.findMany()
     *
     * // Get first 10 QcLogs
     * const qcLogs = await prisma.qcLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const qcLogWithIdOnly = await prisma.qcLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QcLogFindManyArgs>(args?: Prisma.SelectSubset<T, QcLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a QcLog.
     * @param {QcLogCreateArgs} args - Arguments to create a QcLog.
     * @example
     * // Create one QcLog
     * const QcLog = await prisma.qcLog.create({
     *   data: {
     *     // ... data to create a QcLog
     *   }
     * })
     *
     */
    create<T extends QcLogCreateArgs>(args: Prisma.SelectSubset<T, QcLogCreateArgs<ExtArgs>>): Prisma.Prisma__QcLogClient<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many QcLogs.
     * @param {QcLogCreateManyArgs} args - Arguments to create many QcLogs.
     * @example
     * // Create many QcLogs
     * const qcLog = await prisma.qcLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QcLogCreateManyArgs>(args?: Prisma.SelectSubset<T, QcLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many QcLogs and returns the data saved in the database.
     * @param {QcLogCreateManyAndReturnArgs} args - Arguments to create many QcLogs.
     * @example
     * // Create many QcLogs
     * const qcLog = await prisma.qcLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many QcLogs and only return the `id`
     * const qcLogWithIdOnly = await prisma.qcLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends QcLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QcLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a QcLog.
     * @param {QcLogDeleteArgs} args - Arguments to delete one QcLog.
     * @example
     * // Delete one QcLog
     * const QcLog = await prisma.qcLog.delete({
     *   where: {
     *     // ... filter to delete one QcLog
     *   }
     * })
     *
     */
    delete<T extends QcLogDeleteArgs>(args: Prisma.SelectSubset<T, QcLogDeleteArgs<ExtArgs>>): Prisma.Prisma__QcLogClient<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one QcLog.
     * @param {QcLogUpdateArgs} args - Arguments to update one QcLog.
     * @example
     * // Update one QcLog
     * const qcLog = await prisma.qcLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QcLogUpdateArgs>(args: Prisma.SelectSubset<T, QcLogUpdateArgs<ExtArgs>>): Prisma.Prisma__QcLogClient<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more QcLogs.
     * @param {QcLogDeleteManyArgs} args - Arguments to filter QcLogs to delete.
     * @example
     * // Delete a few QcLogs
     * const { count } = await prisma.qcLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QcLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, QcLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more QcLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QcLogs
     * const qcLog = await prisma.qcLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QcLogUpdateManyArgs>(args: Prisma.SelectSubset<T, QcLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more QcLogs and returns the data updated in the database.
     * @param {QcLogUpdateManyAndReturnArgs} args - Arguments to update many QcLogs.
     * @example
     * // Update many QcLogs
     * const qcLog = await prisma.qcLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more QcLogs and only return the `id`
     * const qcLogWithIdOnly = await prisma.qcLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends QcLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QcLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one QcLog.
     * @param {QcLogUpsertArgs} args - Arguments to update or create a QcLog.
     * @example
     * // Update or create a QcLog
     * const qcLog = await prisma.qcLog.upsert({
     *   create: {
     *     // ... data to create a QcLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QcLog we want to update
     *   }
     * })
     */
    upsert<T extends QcLogUpsertArgs>(args: Prisma.SelectSubset<T, QcLogUpsertArgs<ExtArgs>>): Prisma.Prisma__QcLogClient<runtime.Types.Result.GetResult<Prisma.$QcLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of QcLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcLogCountArgs} args - Arguments to filter QcLogs to count.
     * @example
     * // Count the number of QcLogs
     * const count = await prisma.qcLog.count({
     *   where: {
     *     // ... the filter for the QcLogs we want to count
     *   }
     * })
    **/
    count<T extends QcLogCountArgs>(args?: Prisma.Subset<T, QcLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QcLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a QcLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QcLogAggregateArgs>(args: Prisma.Subset<T, QcLogAggregateArgs>): Prisma.PrismaPromise<GetQcLogAggregateType<T>>;
    /**
     * Group by QcLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcLogGroupByArgs} args - Group by arguments.
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
    groupBy<T extends QcLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QcLogGroupByArgs['orderBy'];
    } : {
        orderBy?: QcLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QcLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQcLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the QcLog model
     */
    readonly fields: QcLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for QcLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__QcLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    findings<T extends Prisma.QcLog$findingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QcLog$findingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QcFindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inspector<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    operation<T extends Prisma.OperationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OperationDefaultArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the QcLog model
 */
export interface QcLogFieldRefs {
    readonly id: Prisma.FieldRef<"QcLog", 'String'>;
    readonly operationId: Prisma.FieldRef<"QcLog", 'String'>;
    readonly result: Prisma.FieldRef<"QcLog", 'QcResult'>;
    readonly reason: Prisma.FieldRef<"QcLog", 'String'>;
    readonly inspectorId: Prisma.FieldRef<"QcLog", 'String'>;
    readonly loggedAt: Prisma.FieldRef<"QcLog", 'DateTime'>;
}
/**
 * QcLog findUnique
 */
export type QcLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogInclude<ExtArgs> | null;
    /**
     * Filter, which QcLog to fetch.
     */
    where: Prisma.QcLogWhereUniqueInput;
};
/**
 * QcLog findUniqueOrThrow
 */
export type QcLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogInclude<ExtArgs> | null;
    /**
     * Filter, which QcLog to fetch.
     */
    where: Prisma.QcLogWhereUniqueInput;
};
/**
 * QcLog findFirst
 */
export type QcLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogInclude<ExtArgs> | null;
    /**
     * Filter, which QcLog to fetch.
     */
    where?: Prisma.QcLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QcLogs to fetch.
     */
    orderBy?: Prisma.QcLogOrderByWithRelationInput | Prisma.QcLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QcLogs.
     */
    cursor?: Prisma.QcLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QcLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QcLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QcLogs.
     */
    distinct?: Prisma.QcLogScalarFieldEnum | Prisma.QcLogScalarFieldEnum[];
};
/**
 * QcLog findFirstOrThrow
 */
export type QcLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogInclude<ExtArgs> | null;
    /**
     * Filter, which QcLog to fetch.
     */
    where?: Prisma.QcLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QcLogs to fetch.
     */
    orderBy?: Prisma.QcLogOrderByWithRelationInput | Prisma.QcLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QcLogs.
     */
    cursor?: Prisma.QcLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QcLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QcLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QcLogs.
     */
    distinct?: Prisma.QcLogScalarFieldEnum | Prisma.QcLogScalarFieldEnum[];
};
/**
 * QcLog findMany
 */
export type QcLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogInclude<ExtArgs> | null;
    /**
     * Filter, which QcLogs to fetch.
     */
    where?: Prisma.QcLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QcLogs to fetch.
     */
    orderBy?: Prisma.QcLogOrderByWithRelationInput | Prisma.QcLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing QcLogs.
     */
    cursor?: Prisma.QcLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QcLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QcLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QcLogs.
     */
    distinct?: Prisma.QcLogScalarFieldEnum | Prisma.QcLogScalarFieldEnum[];
};
/**
 * QcLog create
 */
export type QcLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a QcLog.
     */
    data: Prisma.XOR<Prisma.QcLogCreateInput, Prisma.QcLogUncheckedCreateInput>;
};
/**
 * QcLog createMany
 */
export type QcLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many QcLogs.
     */
    data: Prisma.QcLogCreateManyInput | Prisma.QcLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * QcLog createManyAndReturn
 */
export type QcLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * The data used to create many QcLogs.
     */
    data: Prisma.QcLogCreateManyInput | Prisma.QcLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * QcLog update
 */
export type QcLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a QcLog.
     */
    data: Prisma.XOR<Prisma.QcLogUpdateInput, Prisma.QcLogUncheckedUpdateInput>;
    /**
     * Choose, which QcLog to update.
     */
    where: Prisma.QcLogWhereUniqueInput;
};
/**
 * QcLog updateMany
 */
export type QcLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update QcLogs.
     */
    data: Prisma.XOR<Prisma.QcLogUpdateManyMutationInput, Prisma.QcLogUncheckedUpdateManyInput>;
    /**
     * Filter which QcLogs to update
     */
    where?: Prisma.QcLogWhereInput;
    /**
     * Limit how many QcLogs to update.
     */
    limit?: number;
};
/**
 * QcLog updateManyAndReturn
 */
export type QcLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * The data used to update QcLogs.
     */
    data: Prisma.XOR<Prisma.QcLogUpdateManyMutationInput, Prisma.QcLogUncheckedUpdateManyInput>;
    /**
     * Filter which QcLogs to update
     */
    where?: Prisma.QcLogWhereInput;
    /**
     * Limit how many QcLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * QcLog upsert
 */
export type QcLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the QcLog to update in case it exists.
     */
    where: Prisma.QcLogWhereUniqueInput;
    /**
     * In case the QcLog found by the `where` argument doesn't exist, create a new QcLog with this data.
     */
    create: Prisma.XOR<Prisma.QcLogCreateInput, Prisma.QcLogUncheckedCreateInput>;
    /**
     * In case the QcLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.QcLogUpdateInput, Prisma.QcLogUncheckedUpdateInput>;
};
/**
 * QcLog delete
 */
export type QcLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogInclude<ExtArgs> | null;
    /**
     * Filter which QcLog to delete.
     */
    where: Prisma.QcLogWhereUniqueInput;
};
/**
 * QcLog deleteMany
 */
export type QcLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which QcLogs to delete
     */
    where?: Prisma.QcLogWhereInput;
    /**
     * Limit how many QcLogs to delete.
     */
    limit?: number;
};
/**
 * QcLog.findings
 */
export type QcLog$findingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFinding
     */
    select?: Prisma.QcFindingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcFinding
     */
    omit?: Prisma.QcFindingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcFindingInclude<ExtArgs> | null;
    where?: Prisma.QcFindingWhereInput;
    orderBy?: Prisma.QcFindingOrderByWithRelationInput | Prisma.QcFindingOrderByWithRelationInput[];
    cursor?: Prisma.QcFindingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QcFindingScalarFieldEnum | Prisma.QcFindingScalarFieldEnum[];
};
/**
 * QcLog without action
 */
export type QcLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcLog
     */
    select?: Prisma.QcLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QcLog
     */
    omit?: Prisma.QcLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QcLogInclude<ExtArgs> | null;
};
