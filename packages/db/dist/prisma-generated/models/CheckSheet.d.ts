import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CheckSheet
 *
 */
export type CheckSheetModel = runtime.Types.Result.DefaultSelection<Prisma.$CheckSheetPayload>;
export type AggregateCheckSheet = {
    _count: CheckSheetCountAggregateOutputType | null;
    _min: CheckSheetMinAggregateOutputType | null;
    _max: CheckSheetMaxAggregateOutputType | null;
};
export type CheckSheetMinAggregateOutputType = {
    id: string | null;
    type: $Enums.CheckSheetType | null;
    operationId: string | null;
    documentId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CheckSheetMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.CheckSheetType | null;
    operationId: string | null;
    documentId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CheckSheetCountAggregateOutputType = {
    id: number;
    type: number;
    operationId: number;
    documentId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CheckSheetMinAggregateInputType = {
    id?: true;
    type?: true;
    operationId?: true;
    documentId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CheckSheetMaxAggregateInputType = {
    id?: true;
    type?: true;
    operationId?: true;
    documentId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CheckSheetCountAggregateInputType = {
    id?: true;
    type?: true;
    operationId?: true;
    documentId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CheckSheetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CheckSheet to aggregate.
     */
    where?: Prisma.CheckSheetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckSheets to fetch.
     */
    orderBy?: Prisma.CheckSheetOrderByWithRelationInput | Prisma.CheckSheetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CheckSheetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckSheets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckSheets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CheckSheets
    **/
    _count?: true | CheckSheetCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CheckSheetMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CheckSheetMaxAggregateInputType;
};
export type GetCheckSheetAggregateType<T extends CheckSheetAggregateArgs> = {
    [P in keyof T & keyof AggregateCheckSheet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCheckSheet[P]> : Prisma.GetScalarType<T[P], AggregateCheckSheet[P]>;
};
export type CheckSheetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckSheetWhereInput;
    orderBy?: Prisma.CheckSheetOrderByWithAggregationInput | Prisma.CheckSheetOrderByWithAggregationInput[];
    by: Prisma.CheckSheetScalarFieldEnum[] | Prisma.CheckSheetScalarFieldEnum;
    having?: Prisma.CheckSheetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CheckSheetCountAggregateInputType | true;
    _min?: CheckSheetMinAggregateInputType;
    _max?: CheckSheetMaxAggregateInputType;
};
export type CheckSheetGroupByOutputType = {
    id: string;
    type: $Enums.CheckSheetType;
    operationId: string;
    documentId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CheckSheetCountAggregateOutputType | null;
    _min: CheckSheetMinAggregateOutputType | null;
    _max: CheckSheetMaxAggregateOutputType | null;
};
export type GetCheckSheetGroupByPayload<T extends CheckSheetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CheckSheetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CheckSheetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CheckSheetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CheckSheetGroupByOutputType[P]>;
}>>;
export type CheckSheetWhereInput = {
    AND?: Prisma.CheckSheetWhereInput | Prisma.CheckSheetWhereInput[];
    OR?: Prisma.CheckSheetWhereInput[];
    NOT?: Prisma.CheckSheetWhereInput | Prisma.CheckSheetWhereInput[];
    id?: Prisma.StringFilter<"CheckSheet"> | string;
    type?: Prisma.EnumCheckSheetTypeFilter<"CheckSheet"> | $Enums.CheckSheetType;
    operationId?: Prisma.StringFilter<"CheckSheet"> | string;
    documentId?: Prisma.StringNullableFilter<"CheckSheet"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CheckSheet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CheckSheet"> | Date | string;
    operation?: Prisma.XOR<Prisma.OperationScalarRelationFilter, Prisma.OperationWhereInput>;
    document?: Prisma.XOR<Prisma.BusinessDocumentNullableScalarRelationFilter, Prisma.BusinessDocumentWhereInput> | null;
    rows?: Prisma.CheckSheetRowListRelationFilter;
};
export type CheckSheetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    operation?: Prisma.OperationOrderByWithRelationInput;
    document?: Prisma.BusinessDocumentOrderByWithRelationInput;
    rows?: Prisma.CheckSheetRowOrderByRelationAggregateInput;
};
export type CheckSheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    operationId?: string;
    documentId?: string;
    AND?: Prisma.CheckSheetWhereInput | Prisma.CheckSheetWhereInput[];
    OR?: Prisma.CheckSheetWhereInput[];
    NOT?: Prisma.CheckSheetWhereInput | Prisma.CheckSheetWhereInput[];
    type?: Prisma.EnumCheckSheetTypeFilter<"CheckSheet"> | $Enums.CheckSheetType;
    createdAt?: Prisma.DateTimeFilter<"CheckSheet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CheckSheet"> | Date | string;
    operation?: Prisma.XOR<Prisma.OperationScalarRelationFilter, Prisma.OperationWhereInput>;
    document?: Prisma.XOR<Prisma.BusinessDocumentNullableScalarRelationFilter, Prisma.BusinessDocumentWhereInput> | null;
    rows?: Prisma.CheckSheetRowListRelationFilter;
}, "id" | "operationId" | "documentId">;
export type CheckSheetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CheckSheetCountOrderByAggregateInput;
    _max?: Prisma.CheckSheetMaxOrderByAggregateInput;
    _min?: Prisma.CheckSheetMinOrderByAggregateInput;
};
export type CheckSheetScalarWhereWithAggregatesInput = {
    AND?: Prisma.CheckSheetScalarWhereWithAggregatesInput | Prisma.CheckSheetScalarWhereWithAggregatesInput[];
    OR?: Prisma.CheckSheetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CheckSheetScalarWhereWithAggregatesInput | Prisma.CheckSheetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CheckSheet"> | string;
    type?: Prisma.EnumCheckSheetTypeWithAggregatesFilter<"CheckSheet"> | $Enums.CheckSheetType;
    operationId?: Prisma.StringWithAggregatesFilter<"CheckSheet"> | string;
    documentId?: Prisma.StringNullableWithAggregatesFilter<"CheckSheet"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CheckSheet"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CheckSheet"> | Date | string;
};
export type CheckSheetCreateInput = {
    id?: string;
    type: $Enums.CheckSheetType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    operation: Prisma.OperationCreateNestedOneWithoutCheckSheetInput;
    document?: Prisma.BusinessDocumentCreateNestedOneWithoutCheckSheetInput;
    rows?: Prisma.CheckSheetRowCreateNestedManyWithoutCheckSheetInput;
};
export type CheckSheetUncheckedCreateInput = {
    id?: string;
    type: $Enums.CheckSheetType;
    operationId: string;
    documentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rows?: Prisma.CheckSheetRowUncheckedCreateNestedManyWithoutCheckSheetInput;
};
export type CheckSheetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCheckSheetTypeFieldUpdateOperationsInput | $Enums.CheckSheetType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operation?: Prisma.OperationUpdateOneRequiredWithoutCheckSheetNestedInput;
    document?: Prisma.BusinessDocumentUpdateOneWithoutCheckSheetNestedInput;
    rows?: Prisma.CheckSheetRowUpdateManyWithoutCheckSheetNestedInput;
};
export type CheckSheetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCheckSheetTypeFieldUpdateOperationsInput | $Enums.CheckSheetType;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rows?: Prisma.CheckSheetRowUncheckedUpdateManyWithoutCheckSheetNestedInput;
};
export type CheckSheetCreateManyInput = {
    id?: string;
    type: $Enums.CheckSheetType;
    operationId: string;
    documentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckSheetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCheckSheetTypeFieldUpdateOperationsInput | $Enums.CheckSheetType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckSheetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCheckSheetTypeFieldUpdateOperationsInput | $Enums.CheckSheetType;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckSheetNullableScalarRelationFilter = {
    is?: Prisma.CheckSheetWhereInput | null;
    isNot?: Prisma.CheckSheetWhereInput | null;
};
export type CheckSheetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckSheetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckSheetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckSheetScalarRelationFilter = {
    is?: Prisma.CheckSheetWhereInput;
    isNot?: Prisma.CheckSheetWhereInput;
};
export type CheckSheetCreateNestedOneWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.CheckSheetCreateWithoutDocumentInput, Prisma.CheckSheetUncheckedCreateWithoutDocumentInput>;
    connectOrCreate?: Prisma.CheckSheetCreateOrConnectWithoutDocumentInput;
    connect?: Prisma.CheckSheetWhereUniqueInput;
};
export type CheckSheetUncheckedCreateNestedOneWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.CheckSheetCreateWithoutDocumentInput, Prisma.CheckSheetUncheckedCreateWithoutDocumentInput>;
    connectOrCreate?: Prisma.CheckSheetCreateOrConnectWithoutDocumentInput;
    connect?: Prisma.CheckSheetWhereUniqueInput;
};
export type CheckSheetUpdateOneWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.CheckSheetCreateWithoutDocumentInput, Prisma.CheckSheetUncheckedCreateWithoutDocumentInput>;
    connectOrCreate?: Prisma.CheckSheetCreateOrConnectWithoutDocumentInput;
    upsert?: Prisma.CheckSheetUpsertWithoutDocumentInput;
    disconnect?: Prisma.CheckSheetWhereInput | boolean;
    delete?: Prisma.CheckSheetWhereInput | boolean;
    connect?: Prisma.CheckSheetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CheckSheetUpdateToOneWithWhereWithoutDocumentInput, Prisma.CheckSheetUpdateWithoutDocumentInput>, Prisma.CheckSheetUncheckedUpdateWithoutDocumentInput>;
};
export type CheckSheetUncheckedUpdateOneWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.CheckSheetCreateWithoutDocumentInput, Prisma.CheckSheetUncheckedCreateWithoutDocumentInput>;
    connectOrCreate?: Prisma.CheckSheetCreateOrConnectWithoutDocumentInput;
    upsert?: Prisma.CheckSheetUpsertWithoutDocumentInput;
    disconnect?: Prisma.CheckSheetWhereInput | boolean;
    delete?: Prisma.CheckSheetWhereInput | boolean;
    connect?: Prisma.CheckSheetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CheckSheetUpdateToOneWithWhereWithoutDocumentInput, Prisma.CheckSheetUpdateWithoutDocumentInput>, Prisma.CheckSheetUncheckedUpdateWithoutDocumentInput>;
};
export type CheckSheetCreateNestedOneWithoutOperationInput = {
    create?: Prisma.XOR<Prisma.CheckSheetCreateWithoutOperationInput, Prisma.CheckSheetUncheckedCreateWithoutOperationInput>;
    connectOrCreate?: Prisma.CheckSheetCreateOrConnectWithoutOperationInput;
    connect?: Prisma.CheckSheetWhereUniqueInput;
};
export type CheckSheetUncheckedCreateNestedOneWithoutOperationInput = {
    create?: Prisma.XOR<Prisma.CheckSheetCreateWithoutOperationInput, Prisma.CheckSheetUncheckedCreateWithoutOperationInput>;
    connectOrCreate?: Prisma.CheckSheetCreateOrConnectWithoutOperationInput;
    connect?: Prisma.CheckSheetWhereUniqueInput;
};
export type CheckSheetUpdateOneWithoutOperationNestedInput = {
    create?: Prisma.XOR<Prisma.CheckSheetCreateWithoutOperationInput, Prisma.CheckSheetUncheckedCreateWithoutOperationInput>;
    connectOrCreate?: Prisma.CheckSheetCreateOrConnectWithoutOperationInput;
    upsert?: Prisma.CheckSheetUpsertWithoutOperationInput;
    disconnect?: Prisma.CheckSheetWhereInput | boolean;
    delete?: Prisma.CheckSheetWhereInput | boolean;
    connect?: Prisma.CheckSheetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CheckSheetUpdateToOneWithWhereWithoutOperationInput, Prisma.CheckSheetUpdateWithoutOperationInput>, Prisma.CheckSheetUncheckedUpdateWithoutOperationInput>;
};
export type CheckSheetUncheckedUpdateOneWithoutOperationNestedInput = {
    create?: Prisma.XOR<Prisma.CheckSheetCreateWithoutOperationInput, Prisma.CheckSheetUncheckedCreateWithoutOperationInput>;
    connectOrCreate?: Prisma.CheckSheetCreateOrConnectWithoutOperationInput;
    upsert?: Prisma.CheckSheetUpsertWithoutOperationInput;
    disconnect?: Prisma.CheckSheetWhereInput | boolean;
    delete?: Prisma.CheckSheetWhereInput | boolean;
    connect?: Prisma.CheckSheetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CheckSheetUpdateToOneWithWhereWithoutOperationInput, Prisma.CheckSheetUpdateWithoutOperationInput>, Prisma.CheckSheetUncheckedUpdateWithoutOperationInput>;
};
export type EnumCheckSheetTypeFieldUpdateOperationsInput = {
    set?: $Enums.CheckSheetType;
};
export type CheckSheetCreateNestedOneWithoutRowsInput = {
    create?: Prisma.XOR<Prisma.CheckSheetCreateWithoutRowsInput, Prisma.CheckSheetUncheckedCreateWithoutRowsInput>;
    connectOrCreate?: Prisma.CheckSheetCreateOrConnectWithoutRowsInput;
    connect?: Prisma.CheckSheetWhereUniqueInput;
};
export type CheckSheetUpdateOneRequiredWithoutRowsNestedInput = {
    create?: Prisma.XOR<Prisma.CheckSheetCreateWithoutRowsInput, Prisma.CheckSheetUncheckedCreateWithoutRowsInput>;
    connectOrCreate?: Prisma.CheckSheetCreateOrConnectWithoutRowsInput;
    upsert?: Prisma.CheckSheetUpsertWithoutRowsInput;
    connect?: Prisma.CheckSheetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CheckSheetUpdateToOneWithWhereWithoutRowsInput, Prisma.CheckSheetUpdateWithoutRowsInput>, Prisma.CheckSheetUncheckedUpdateWithoutRowsInput>;
};
export type CheckSheetCreateWithoutDocumentInput = {
    id?: string;
    type: $Enums.CheckSheetType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    operation: Prisma.OperationCreateNestedOneWithoutCheckSheetInput;
    rows?: Prisma.CheckSheetRowCreateNestedManyWithoutCheckSheetInput;
};
export type CheckSheetUncheckedCreateWithoutDocumentInput = {
    id?: string;
    type: $Enums.CheckSheetType;
    operationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rows?: Prisma.CheckSheetRowUncheckedCreateNestedManyWithoutCheckSheetInput;
};
export type CheckSheetCreateOrConnectWithoutDocumentInput = {
    where: Prisma.CheckSheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckSheetCreateWithoutDocumentInput, Prisma.CheckSheetUncheckedCreateWithoutDocumentInput>;
};
export type CheckSheetUpsertWithoutDocumentInput = {
    update: Prisma.XOR<Prisma.CheckSheetUpdateWithoutDocumentInput, Prisma.CheckSheetUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.CheckSheetCreateWithoutDocumentInput, Prisma.CheckSheetUncheckedCreateWithoutDocumentInput>;
    where?: Prisma.CheckSheetWhereInput;
};
export type CheckSheetUpdateToOneWithWhereWithoutDocumentInput = {
    where?: Prisma.CheckSheetWhereInput;
    data: Prisma.XOR<Prisma.CheckSheetUpdateWithoutDocumentInput, Prisma.CheckSheetUncheckedUpdateWithoutDocumentInput>;
};
export type CheckSheetUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCheckSheetTypeFieldUpdateOperationsInput | $Enums.CheckSheetType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operation?: Prisma.OperationUpdateOneRequiredWithoutCheckSheetNestedInput;
    rows?: Prisma.CheckSheetRowUpdateManyWithoutCheckSheetNestedInput;
};
export type CheckSheetUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCheckSheetTypeFieldUpdateOperationsInput | $Enums.CheckSheetType;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rows?: Prisma.CheckSheetRowUncheckedUpdateManyWithoutCheckSheetNestedInput;
};
export type CheckSheetCreateWithoutOperationInput = {
    id?: string;
    type: $Enums.CheckSheetType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document?: Prisma.BusinessDocumentCreateNestedOneWithoutCheckSheetInput;
    rows?: Prisma.CheckSheetRowCreateNestedManyWithoutCheckSheetInput;
};
export type CheckSheetUncheckedCreateWithoutOperationInput = {
    id?: string;
    type: $Enums.CheckSheetType;
    documentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rows?: Prisma.CheckSheetRowUncheckedCreateNestedManyWithoutCheckSheetInput;
};
export type CheckSheetCreateOrConnectWithoutOperationInput = {
    where: Prisma.CheckSheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckSheetCreateWithoutOperationInput, Prisma.CheckSheetUncheckedCreateWithoutOperationInput>;
};
export type CheckSheetUpsertWithoutOperationInput = {
    update: Prisma.XOR<Prisma.CheckSheetUpdateWithoutOperationInput, Prisma.CheckSheetUncheckedUpdateWithoutOperationInput>;
    create: Prisma.XOR<Prisma.CheckSheetCreateWithoutOperationInput, Prisma.CheckSheetUncheckedCreateWithoutOperationInput>;
    where?: Prisma.CheckSheetWhereInput;
};
export type CheckSheetUpdateToOneWithWhereWithoutOperationInput = {
    where?: Prisma.CheckSheetWhereInput;
    data: Prisma.XOR<Prisma.CheckSheetUpdateWithoutOperationInput, Prisma.CheckSheetUncheckedUpdateWithoutOperationInput>;
};
export type CheckSheetUpdateWithoutOperationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCheckSheetTypeFieldUpdateOperationsInput | $Enums.CheckSheetType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.BusinessDocumentUpdateOneWithoutCheckSheetNestedInput;
    rows?: Prisma.CheckSheetRowUpdateManyWithoutCheckSheetNestedInput;
};
export type CheckSheetUncheckedUpdateWithoutOperationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCheckSheetTypeFieldUpdateOperationsInput | $Enums.CheckSheetType;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rows?: Prisma.CheckSheetRowUncheckedUpdateManyWithoutCheckSheetNestedInput;
};
export type CheckSheetCreateWithoutRowsInput = {
    id?: string;
    type: $Enums.CheckSheetType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    operation: Prisma.OperationCreateNestedOneWithoutCheckSheetInput;
    document?: Prisma.BusinessDocumentCreateNestedOneWithoutCheckSheetInput;
};
export type CheckSheetUncheckedCreateWithoutRowsInput = {
    id?: string;
    type: $Enums.CheckSheetType;
    operationId: string;
    documentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckSheetCreateOrConnectWithoutRowsInput = {
    where: Prisma.CheckSheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckSheetCreateWithoutRowsInput, Prisma.CheckSheetUncheckedCreateWithoutRowsInput>;
};
export type CheckSheetUpsertWithoutRowsInput = {
    update: Prisma.XOR<Prisma.CheckSheetUpdateWithoutRowsInput, Prisma.CheckSheetUncheckedUpdateWithoutRowsInput>;
    create: Prisma.XOR<Prisma.CheckSheetCreateWithoutRowsInput, Prisma.CheckSheetUncheckedCreateWithoutRowsInput>;
    where?: Prisma.CheckSheetWhereInput;
};
export type CheckSheetUpdateToOneWithWhereWithoutRowsInput = {
    where?: Prisma.CheckSheetWhereInput;
    data: Prisma.XOR<Prisma.CheckSheetUpdateWithoutRowsInput, Prisma.CheckSheetUncheckedUpdateWithoutRowsInput>;
};
export type CheckSheetUpdateWithoutRowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCheckSheetTypeFieldUpdateOperationsInput | $Enums.CheckSheetType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operation?: Prisma.OperationUpdateOneRequiredWithoutCheckSheetNestedInput;
    document?: Prisma.BusinessDocumentUpdateOneWithoutCheckSheetNestedInput;
};
export type CheckSheetUncheckedUpdateWithoutRowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCheckSheetTypeFieldUpdateOperationsInput | $Enums.CheckSheetType;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CheckSheetCountOutputType
 */
export type CheckSheetCountOutputType = {
    rows: number;
};
export type CheckSheetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rows?: boolean | CheckSheetCountOutputTypeCountRowsArgs;
};
/**
 * CheckSheetCountOutputType without action
 */
export type CheckSheetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheetCountOutputType
     */
    select?: Prisma.CheckSheetCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CheckSheetCountOutputType without action
 */
export type CheckSheetCountOutputTypeCountRowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckSheetRowWhereInput;
};
export type CheckSheetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    operationId?: boolean;
    documentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.CheckSheet$documentArgs<ExtArgs>;
    rows?: boolean | Prisma.CheckSheet$rowsArgs<ExtArgs>;
    _count?: boolean | Prisma.CheckSheetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["checkSheet"]>;
export type CheckSheetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    operationId?: boolean;
    documentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.CheckSheet$documentArgs<ExtArgs>;
}, ExtArgs["result"]["checkSheet"]>;
export type CheckSheetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    operationId?: boolean;
    documentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.CheckSheet$documentArgs<ExtArgs>;
}, ExtArgs["result"]["checkSheet"]>;
export type CheckSheetSelectScalar = {
    id?: boolean;
    type?: boolean;
    operationId?: boolean;
    documentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CheckSheetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "operationId" | "documentId" | "createdAt" | "updatedAt", ExtArgs["result"]["checkSheet"]>;
export type CheckSheetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.CheckSheet$documentArgs<ExtArgs>;
    rows?: boolean | Prisma.CheckSheet$rowsArgs<ExtArgs>;
    _count?: boolean | Prisma.CheckSheetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CheckSheetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.CheckSheet$documentArgs<ExtArgs>;
};
export type CheckSheetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operation?: boolean | Prisma.OperationDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.CheckSheet$documentArgs<ExtArgs>;
};
export type $CheckSheetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CheckSheet";
    objects: {
        operation: Prisma.$OperationPayload<ExtArgs>;
        document: Prisma.$BusinessDocumentPayload<ExtArgs> | null;
        rows: Prisma.$CheckSheetRowPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.CheckSheetType;
        operationId: string;
        documentId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["checkSheet"]>;
    composites: {};
};
export type CheckSheetGetPayload<S extends boolean | null | undefined | CheckSheetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload, S>;
export type CheckSheetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CheckSheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CheckSheetCountAggregateInputType | true;
};
export interface CheckSheetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CheckSheet'];
        meta: {
            name: 'CheckSheet';
        };
    };
    /**
     * Find zero or one CheckSheet that matches the filter.
     * @param {CheckSheetFindUniqueArgs} args - Arguments to find a CheckSheet
     * @example
     * // Get one CheckSheet
     * const checkSheet = await prisma.checkSheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckSheetFindUniqueArgs>(args: Prisma.SelectSubset<T, CheckSheetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CheckSheetClient<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CheckSheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckSheetFindUniqueOrThrowArgs} args - Arguments to find a CheckSheet
     * @example
     * // Get one CheckSheet
     * const checkSheet = await prisma.checkSheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckSheetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CheckSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckSheetClient<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CheckSheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckSheetFindFirstArgs} args - Arguments to find a CheckSheet
     * @example
     * // Get one CheckSheet
     * const checkSheet = await prisma.checkSheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckSheetFindFirstArgs>(args?: Prisma.SelectSubset<T, CheckSheetFindFirstArgs<ExtArgs>>): Prisma.Prisma__CheckSheetClient<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CheckSheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckSheetFindFirstOrThrowArgs} args - Arguments to find a CheckSheet
     * @example
     * // Get one CheckSheet
     * const checkSheet = await prisma.checkSheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckSheetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CheckSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckSheetClient<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CheckSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckSheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckSheets
     * const checkSheets = await prisma.checkSheet.findMany()
     *
     * // Get first 10 CheckSheets
     * const checkSheets = await prisma.checkSheet.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const checkSheetWithIdOnly = await prisma.checkSheet.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CheckSheetFindManyArgs>(args?: Prisma.SelectSubset<T, CheckSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CheckSheet.
     * @param {CheckSheetCreateArgs} args - Arguments to create a CheckSheet.
     * @example
     * // Create one CheckSheet
     * const CheckSheet = await prisma.checkSheet.create({
     *   data: {
     *     // ... data to create a CheckSheet
     *   }
     * })
     *
     */
    create<T extends CheckSheetCreateArgs>(args: Prisma.SelectSubset<T, CheckSheetCreateArgs<ExtArgs>>): Prisma.Prisma__CheckSheetClient<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CheckSheets.
     * @param {CheckSheetCreateManyArgs} args - Arguments to create many CheckSheets.
     * @example
     * // Create many CheckSheets
     * const checkSheet = await prisma.checkSheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CheckSheetCreateManyArgs>(args?: Prisma.SelectSubset<T, CheckSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CheckSheets and returns the data saved in the database.
     * @param {CheckSheetCreateManyAndReturnArgs} args - Arguments to create many CheckSheets.
     * @example
     * // Create many CheckSheets
     * const checkSheet = await prisma.checkSheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CheckSheets and only return the `id`
     * const checkSheetWithIdOnly = await prisma.checkSheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CheckSheetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CheckSheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CheckSheet.
     * @param {CheckSheetDeleteArgs} args - Arguments to delete one CheckSheet.
     * @example
     * // Delete one CheckSheet
     * const CheckSheet = await prisma.checkSheet.delete({
     *   where: {
     *     // ... filter to delete one CheckSheet
     *   }
     * })
     *
     */
    delete<T extends CheckSheetDeleteArgs>(args: Prisma.SelectSubset<T, CheckSheetDeleteArgs<ExtArgs>>): Prisma.Prisma__CheckSheetClient<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CheckSheet.
     * @param {CheckSheetUpdateArgs} args - Arguments to update one CheckSheet.
     * @example
     * // Update one CheckSheet
     * const checkSheet = await prisma.checkSheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CheckSheetUpdateArgs>(args: Prisma.SelectSubset<T, CheckSheetUpdateArgs<ExtArgs>>): Prisma.Prisma__CheckSheetClient<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CheckSheets.
     * @param {CheckSheetDeleteManyArgs} args - Arguments to filter CheckSheets to delete.
     * @example
     * // Delete a few CheckSheets
     * const { count } = await prisma.checkSheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CheckSheetDeleteManyArgs>(args?: Prisma.SelectSubset<T, CheckSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CheckSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckSheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckSheets
     * const checkSheet = await prisma.checkSheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CheckSheetUpdateManyArgs>(args: Prisma.SelectSubset<T, CheckSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CheckSheets and returns the data updated in the database.
     * @param {CheckSheetUpdateManyAndReturnArgs} args - Arguments to update many CheckSheets.
     * @example
     * // Update many CheckSheets
     * const checkSheet = await prisma.checkSheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CheckSheets and only return the `id`
     * const checkSheetWithIdOnly = await prisma.checkSheet.updateManyAndReturn({
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
    updateManyAndReturn<T extends CheckSheetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CheckSheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CheckSheet.
     * @param {CheckSheetUpsertArgs} args - Arguments to update or create a CheckSheet.
     * @example
     * // Update or create a CheckSheet
     * const checkSheet = await prisma.checkSheet.upsert({
     *   create: {
     *     // ... data to create a CheckSheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckSheet we want to update
     *   }
     * })
     */
    upsert<T extends CheckSheetUpsertArgs>(args: Prisma.SelectSubset<T, CheckSheetUpsertArgs<ExtArgs>>): Prisma.Prisma__CheckSheetClient<runtime.Types.Result.GetResult<Prisma.$CheckSheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CheckSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckSheetCountArgs} args - Arguments to filter CheckSheets to count.
     * @example
     * // Count the number of CheckSheets
     * const count = await prisma.checkSheet.count({
     *   where: {
     *     // ... the filter for the CheckSheets we want to count
     *   }
     * })
    **/
    count<T extends CheckSheetCountArgs>(args?: Prisma.Subset<T, CheckSheetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CheckSheetCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CheckSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckSheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckSheetAggregateArgs>(args: Prisma.Subset<T, CheckSheetAggregateArgs>): Prisma.PrismaPromise<GetCheckSheetAggregateType<T>>;
    /**
     * Group by CheckSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckSheetGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CheckSheetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CheckSheetGroupByArgs['orderBy'];
    } : {
        orderBy?: CheckSheetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CheckSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CheckSheet model
     */
    readonly fields: CheckSheetFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CheckSheet.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CheckSheetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    operation<T extends Prisma.OperationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OperationDefaultArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    document<T extends Prisma.CheckSheet$documentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckSheet$documentArgs<ExtArgs>>): Prisma.Prisma__BusinessDocumentClient<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rows<T extends Prisma.CheckSheet$rowsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckSheet$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckSheetRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the CheckSheet model
 */
export interface CheckSheetFieldRefs {
    readonly id: Prisma.FieldRef<"CheckSheet", 'String'>;
    readonly type: Prisma.FieldRef<"CheckSheet", 'CheckSheetType'>;
    readonly operationId: Prisma.FieldRef<"CheckSheet", 'String'>;
    readonly documentId: Prisma.FieldRef<"CheckSheet", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CheckSheet", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CheckSheet", 'DateTime'>;
}
/**
 * CheckSheet findUnique
 */
export type CheckSheetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetInclude<ExtArgs> | null;
    /**
     * Filter, which CheckSheet to fetch.
     */
    where: Prisma.CheckSheetWhereUniqueInput;
};
/**
 * CheckSheet findUniqueOrThrow
 */
export type CheckSheetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetInclude<ExtArgs> | null;
    /**
     * Filter, which CheckSheet to fetch.
     */
    where: Prisma.CheckSheetWhereUniqueInput;
};
/**
 * CheckSheet findFirst
 */
export type CheckSheetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetInclude<ExtArgs> | null;
    /**
     * Filter, which CheckSheet to fetch.
     */
    where?: Prisma.CheckSheetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckSheets to fetch.
     */
    orderBy?: Prisma.CheckSheetOrderByWithRelationInput | Prisma.CheckSheetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CheckSheets.
     */
    cursor?: Prisma.CheckSheetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckSheets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckSheets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CheckSheets.
     */
    distinct?: Prisma.CheckSheetScalarFieldEnum | Prisma.CheckSheetScalarFieldEnum[];
};
/**
 * CheckSheet findFirstOrThrow
 */
export type CheckSheetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetInclude<ExtArgs> | null;
    /**
     * Filter, which CheckSheet to fetch.
     */
    where?: Prisma.CheckSheetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckSheets to fetch.
     */
    orderBy?: Prisma.CheckSheetOrderByWithRelationInput | Prisma.CheckSheetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CheckSheets.
     */
    cursor?: Prisma.CheckSheetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckSheets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckSheets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CheckSheets.
     */
    distinct?: Prisma.CheckSheetScalarFieldEnum | Prisma.CheckSheetScalarFieldEnum[];
};
/**
 * CheckSheet findMany
 */
export type CheckSheetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetInclude<ExtArgs> | null;
    /**
     * Filter, which CheckSheets to fetch.
     */
    where?: Prisma.CheckSheetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckSheets to fetch.
     */
    orderBy?: Prisma.CheckSheetOrderByWithRelationInput | Prisma.CheckSheetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CheckSheets.
     */
    cursor?: Prisma.CheckSheetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckSheets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckSheets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CheckSheets.
     */
    distinct?: Prisma.CheckSheetScalarFieldEnum | Prisma.CheckSheetScalarFieldEnum[];
};
/**
 * CheckSheet create
 */
export type CheckSheetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetInclude<ExtArgs> | null;
    /**
     * The data needed to create a CheckSheet.
     */
    data: Prisma.XOR<Prisma.CheckSheetCreateInput, Prisma.CheckSheetUncheckedCreateInput>;
};
/**
 * CheckSheet createMany
 */
export type CheckSheetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckSheets.
     */
    data: Prisma.CheckSheetCreateManyInput | Prisma.CheckSheetCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CheckSheet createManyAndReturn
 */
export type CheckSheetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * The data used to create many CheckSheets.
     */
    data: Prisma.CheckSheetCreateManyInput | Prisma.CheckSheetCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CheckSheet update
 */
export type CheckSheetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetInclude<ExtArgs> | null;
    /**
     * The data needed to update a CheckSheet.
     */
    data: Prisma.XOR<Prisma.CheckSheetUpdateInput, Prisma.CheckSheetUncheckedUpdateInput>;
    /**
     * Choose, which CheckSheet to update.
     */
    where: Prisma.CheckSheetWhereUniqueInput;
};
/**
 * CheckSheet updateMany
 */
export type CheckSheetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckSheets.
     */
    data: Prisma.XOR<Prisma.CheckSheetUpdateManyMutationInput, Prisma.CheckSheetUncheckedUpdateManyInput>;
    /**
     * Filter which CheckSheets to update
     */
    where?: Prisma.CheckSheetWhereInput;
    /**
     * Limit how many CheckSheets to update.
     */
    limit?: number;
};
/**
 * CheckSheet updateManyAndReturn
 */
export type CheckSheetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * The data used to update CheckSheets.
     */
    data: Prisma.XOR<Prisma.CheckSheetUpdateManyMutationInput, Prisma.CheckSheetUncheckedUpdateManyInput>;
    /**
     * Filter which CheckSheets to update
     */
    where?: Prisma.CheckSheetWhereInput;
    /**
     * Limit how many CheckSheets to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CheckSheet upsert
 */
export type CheckSheetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetInclude<ExtArgs> | null;
    /**
     * The filter to search for the CheckSheet to update in case it exists.
     */
    where: Prisma.CheckSheetWhereUniqueInput;
    /**
     * In case the CheckSheet found by the `where` argument doesn't exist, create a new CheckSheet with this data.
     */
    create: Prisma.XOR<Prisma.CheckSheetCreateInput, Prisma.CheckSheetUncheckedCreateInput>;
    /**
     * In case the CheckSheet was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CheckSheetUpdateInput, Prisma.CheckSheetUncheckedUpdateInput>;
};
/**
 * CheckSheet delete
 */
export type CheckSheetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetInclude<ExtArgs> | null;
    /**
     * Filter which CheckSheet to delete.
     */
    where: Prisma.CheckSheetWhereUniqueInput;
};
/**
 * CheckSheet deleteMany
 */
export type CheckSheetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CheckSheets to delete
     */
    where?: Prisma.CheckSheetWhereInput;
    /**
     * Limit how many CheckSheets to delete.
     */
    limit?: number;
};
/**
 * CheckSheet.document
 */
export type CheckSheet$documentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDocument
     */
    select?: Prisma.BusinessDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BusinessDocument
     */
    omit?: Prisma.BusinessDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BusinessDocumentInclude<ExtArgs> | null;
    where?: Prisma.BusinessDocumentWhereInput;
};
/**
 * CheckSheet.rows
 */
export type CheckSheet$rowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheetRow
     */
    select?: Prisma.CheckSheetRowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheetRow
     */
    omit?: Prisma.CheckSheetRowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetRowInclude<ExtArgs> | null;
    where?: Prisma.CheckSheetRowWhereInput;
    orderBy?: Prisma.CheckSheetRowOrderByWithRelationInput | Prisma.CheckSheetRowOrderByWithRelationInput[];
    cursor?: Prisma.CheckSheetRowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CheckSheetRowScalarFieldEnum | Prisma.CheckSheetRowScalarFieldEnum[];
};
/**
 * CheckSheet without action
 */
export type CheckSheetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckSheet
     */
    select?: Prisma.CheckSheetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckSheet
     */
    omit?: Prisma.CheckSheetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckSheetInclude<ExtArgs> | null;
};
