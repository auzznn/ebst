import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BusinessDocument
 *
 */
export type BusinessDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$BusinessDocumentPayload>;
export type AggregateBusinessDocument = {
    _count: BusinessDocumentCountAggregateOutputType | null;
    _avg: BusinessDocumentAvgAggregateOutputType | null;
    _sum: BusinessDocumentSumAggregateOutputType | null;
    _min: BusinessDocumentMinAggregateOutputType | null;
    _max: BusinessDocumentMaxAggregateOutputType | null;
};
export type BusinessDocumentAvgAggregateOutputType = {
    size: number | null;
};
export type BusinessDocumentSumAggregateOutputType = {
    size: number | null;
};
export type BusinessDocumentMinAggregateOutputType = {
    id: string | null;
    key: string | null;
    fileName: string | null;
    fileType: string | null;
    size: number | null;
    documentType: $Enums.DocumentType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
};
export type BusinessDocumentMaxAggregateOutputType = {
    id: string | null;
    key: string | null;
    fileName: string | null;
    fileType: string | null;
    size: number | null;
    documentType: $Enums.DocumentType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
};
export type BusinessDocumentCountAggregateOutputType = {
    id: number;
    key: number;
    fileName: number;
    fileType: number;
    size: number;
    documentType: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    userId: number;
    _all: number;
};
export type BusinessDocumentAvgAggregateInputType = {
    size?: true;
};
export type BusinessDocumentSumAggregateInputType = {
    size?: true;
};
export type BusinessDocumentMinAggregateInputType = {
    id?: true;
    key?: true;
    fileName?: true;
    fileType?: true;
    size?: true;
    documentType?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
};
export type BusinessDocumentMaxAggregateInputType = {
    id?: true;
    key?: true;
    fileName?: true;
    fileType?: true;
    size?: true;
    documentType?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
};
export type BusinessDocumentCountAggregateInputType = {
    id?: true;
    key?: true;
    fileName?: true;
    fileType?: true;
    size?: true;
    documentType?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    _all?: true;
};
export type BusinessDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessDocument to aggregate.
     */
    where?: Prisma.BusinessDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BusinessDocuments to fetch.
     */
    orderBy?: Prisma.BusinessDocumentOrderByWithRelationInput | Prisma.BusinessDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BusinessDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BusinessDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BusinessDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BusinessDocuments
    **/
    _count?: true | BusinessDocumentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BusinessDocumentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BusinessDocumentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BusinessDocumentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BusinessDocumentMaxAggregateInputType;
};
export type GetBusinessDocumentAggregateType<T extends BusinessDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateBusinessDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBusinessDocument[P]> : Prisma.GetScalarType<T[P], AggregateBusinessDocument[P]>;
};
export type BusinessDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusinessDocumentWhereInput;
    orderBy?: Prisma.BusinessDocumentOrderByWithAggregationInput | Prisma.BusinessDocumentOrderByWithAggregationInput[];
    by: Prisma.BusinessDocumentScalarFieldEnum[] | Prisma.BusinessDocumentScalarFieldEnum;
    having?: Prisma.BusinessDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BusinessDocumentCountAggregateInputType | true;
    _avg?: BusinessDocumentAvgAggregateInputType;
    _sum?: BusinessDocumentSumAggregateInputType;
    _min?: BusinessDocumentMinAggregateInputType;
    _max?: BusinessDocumentMaxAggregateInputType;
};
export type BusinessDocumentGroupByOutputType = {
    id: string;
    key: string;
    fileName: string;
    fileType: string | null;
    size: number | null;
    documentType: $Enums.DocumentType;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    _count: BusinessDocumentCountAggregateOutputType | null;
    _avg: BusinessDocumentAvgAggregateOutputType | null;
    _sum: BusinessDocumentSumAggregateOutputType | null;
    _min: BusinessDocumentMinAggregateOutputType | null;
    _max: BusinessDocumentMaxAggregateOutputType | null;
};
export type GetBusinessDocumentGroupByPayload<T extends BusinessDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BusinessDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BusinessDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BusinessDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BusinessDocumentGroupByOutputType[P]>;
}>>;
export type BusinessDocumentWhereInput = {
    AND?: Prisma.BusinessDocumentWhereInput | Prisma.BusinessDocumentWhereInput[];
    OR?: Prisma.BusinessDocumentWhereInput[];
    NOT?: Prisma.BusinessDocumentWhereInput | Prisma.BusinessDocumentWhereInput[];
    id?: Prisma.StringFilter<"BusinessDocument"> | string;
    key?: Prisma.StringFilter<"BusinessDocument"> | string;
    fileName?: Prisma.StringFilter<"BusinessDocument"> | string;
    fileType?: Prisma.StringNullableFilter<"BusinessDocument"> | string | null;
    size?: Prisma.IntNullableFilter<"BusinessDocument"> | number | null;
    documentType?: Prisma.EnumDocumentTypeFilter<"BusinessDocument"> | $Enums.DocumentType;
    metadata?: Prisma.JsonNullableFilter<"BusinessDocument">;
    createdAt?: Prisma.DateTimeFilter<"BusinessDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BusinessDocument"> | Date | string;
    userId?: Prisma.StringFilter<"BusinessDocument"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    invoice?: Prisma.XOR<Prisma.InvoiceNullableScalarRelationFilter, Prisma.InvoiceWhereInput> | null;
};
export type BusinessDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileType?: Prisma.SortOrderInput | Prisma.SortOrder;
    size?: Prisma.SortOrderInput | Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    invoice?: Prisma.InvoiceOrderByWithRelationInput;
};
export type BusinessDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    key?: string;
    AND?: Prisma.BusinessDocumentWhereInput | Prisma.BusinessDocumentWhereInput[];
    OR?: Prisma.BusinessDocumentWhereInput[];
    NOT?: Prisma.BusinessDocumentWhereInput | Prisma.BusinessDocumentWhereInput[];
    fileName?: Prisma.StringFilter<"BusinessDocument"> | string;
    fileType?: Prisma.StringNullableFilter<"BusinessDocument"> | string | null;
    size?: Prisma.IntNullableFilter<"BusinessDocument"> | number | null;
    documentType?: Prisma.EnumDocumentTypeFilter<"BusinessDocument"> | $Enums.DocumentType;
    metadata?: Prisma.JsonNullableFilter<"BusinessDocument">;
    createdAt?: Prisma.DateTimeFilter<"BusinessDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BusinessDocument"> | Date | string;
    userId?: Prisma.StringFilter<"BusinessDocument"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    invoice?: Prisma.XOR<Prisma.InvoiceNullableScalarRelationFilter, Prisma.InvoiceWhereInput> | null;
}, "id" | "key">;
export type BusinessDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileType?: Prisma.SortOrderInput | Prisma.SortOrder;
    size?: Prisma.SortOrderInput | Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.BusinessDocumentCountOrderByAggregateInput;
    _avg?: Prisma.BusinessDocumentAvgOrderByAggregateInput;
    _max?: Prisma.BusinessDocumentMaxOrderByAggregateInput;
    _min?: Prisma.BusinessDocumentMinOrderByAggregateInput;
    _sum?: Prisma.BusinessDocumentSumOrderByAggregateInput;
};
export type BusinessDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.BusinessDocumentScalarWhereWithAggregatesInput | Prisma.BusinessDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.BusinessDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BusinessDocumentScalarWhereWithAggregatesInput | Prisma.BusinessDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BusinessDocument"> | string;
    key?: Prisma.StringWithAggregatesFilter<"BusinessDocument"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"BusinessDocument"> | string;
    fileType?: Prisma.StringNullableWithAggregatesFilter<"BusinessDocument"> | string | null;
    size?: Prisma.IntNullableWithAggregatesFilter<"BusinessDocument"> | number | null;
    documentType?: Prisma.EnumDocumentTypeWithAggregatesFilter<"BusinessDocument"> | $Enums.DocumentType;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"BusinessDocument">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BusinessDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BusinessDocument"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"BusinessDocument"> | string;
};
export type BusinessDocumentCreateInput = {
    id?: string;
    key: string;
    fileName: string;
    fileType?: string | null;
    size?: number | null;
    documentType: $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBusinessDocumentsInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutDocumentInput;
};
export type BusinessDocumentUncheckedCreateInput = {
    id?: string;
    key: string;
    fileName: string;
    fileType?: string | null;
    size?: number | null;
    documentType: $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutDocumentInput;
};
export type BusinessDocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    documentType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBusinessDocumentsNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutDocumentNestedInput;
};
export type BusinessDocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    documentType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutDocumentNestedInput;
};
export type BusinessDocumentCreateManyInput = {
    id?: string;
    key: string;
    fileName: string;
    fileType?: string | null;
    size?: number | null;
    documentType: $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
};
export type BusinessDocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    documentType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessDocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    documentType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BusinessDocumentListRelationFilter = {
    every?: Prisma.BusinessDocumentWhereInput;
    some?: Prisma.BusinessDocumentWhereInput;
    none?: Prisma.BusinessDocumentWhereInput;
};
export type BusinessDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BusinessDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BusinessDocumentAvgOrderByAggregateInput = {
    size?: Prisma.SortOrder;
};
export type BusinessDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BusinessDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BusinessDocumentSumOrderByAggregateInput = {
    size?: Prisma.SortOrder;
};
export type BusinessDocumentNullableScalarRelationFilter = {
    is?: Prisma.BusinessDocumentWhereInput | null;
    isNot?: Prisma.BusinessDocumentWhereInput | null;
};
export type BusinessDocumentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BusinessDocumentCreateWithoutUserInput, Prisma.BusinessDocumentUncheckedCreateWithoutUserInput> | Prisma.BusinessDocumentCreateWithoutUserInput[] | Prisma.BusinessDocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BusinessDocumentCreateOrConnectWithoutUserInput | Prisma.BusinessDocumentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BusinessDocumentCreateManyUserInputEnvelope;
    connect?: Prisma.BusinessDocumentWhereUniqueInput | Prisma.BusinessDocumentWhereUniqueInput[];
};
export type BusinessDocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BusinessDocumentCreateWithoutUserInput, Prisma.BusinessDocumentUncheckedCreateWithoutUserInput> | Prisma.BusinessDocumentCreateWithoutUserInput[] | Prisma.BusinessDocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BusinessDocumentCreateOrConnectWithoutUserInput | Prisma.BusinessDocumentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BusinessDocumentCreateManyUserInputEnvelope;
    connect?: Prisma.BusinessDocumentWhereUniqueInput | Prisma.BusinessDocumentWhereUniqueInput[];
};
export type BusinessDocumentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessDocumentCreateWithoutUserInput, Prisma.BusinessDocumentUncheckedCreateWithoutUserInput> | Prisma.BusinessDocumentCreateWithoutUserInput[] | Prisma.BusinessDocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BusinessDocumentCreateOrConnectWithoutUserInput | Prisma.BusinessDocumentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BusinessDocumentUpsertWithWhereUniqueWithoutUserInput | Prisma.BusinessDocumentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BusinessDocumentCreateManyUserInputEnvelope;
    set?: Prisma.BusinessDocumentWhereUniqueInput | Prisma.BusinessDocumentWhereUniqueInput[];
    disconnect?: Prisma.BusinessDocumentWhereUniqueInput | Prisma.BusinessDocumentWhereUniqueInput[];
    delete?: Prisma.BusinessDocumentWhereUniqueInput | Prisma.BusinessDocumentWhereUniqueInput[];
    connect?: Prisma.BusinessDocumentWhereUniqueInput | Prisma.BusinessDocumentWhereUniqueInput[];
    update?: Prisma.BusinessDocumentUpdateWithWhereUniqueWithoutUserInput | Prisma.BusinessDocumentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BusinessDocumentUpdateManyWithWhereWithoutUserInput | Prisma.BusinessDocumentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BusinessDocumentScalarWhereInput | Prisma.BusinessDocumentScalarWhereInput[];
};
export type BusinessDocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessDocumentCreateWithoutUserInput, Prisma.BusinessDocumentUncheckedCreateWithoutUserInput> | Prisma.BusinessDocumentCreateWithoutUserInput[] | Prisma.BusinessDocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BusinessDocumentCreateOrConnectWithoutUserInput | Prisma.BusinessDocumentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BusinessDocumentUpsertWithWhereUniqueWithoutUserInput | Prisma.BusinessDocumentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BusinessDocumentCreateManyUserInputEnvelope;
    set?: Prisma.BusinessDocumentWhereUniqueInput | Prisma.BusinessDocumentWhereUniqueInput[];
    disconnect?: Prisma.BusinessDocumentWhereUniqueInput | Prisma.BusinessDocumentWhereUniqueInput[];
    delete?: Prisma.BusinessDocumentWhereUniqueInput | Prisma.BusinessDocumentWhereUniqueInput[];
    connect?: Prisma.BusinessDocumentWhereUniqueInput | Prisma.BusinessDocumentWhereUniqueInput[];
    update?: Prisma.BusinessDocumentUpdateWithWhereUniqueWithoutUserInput | Prisma.BusinessDocumentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BusinessDocumentUpdateManyWithWhereWithoutUserInput | Prisma.BusinessDocumentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BusinessDocumentScalarWhereInput | Prisma.BusinessDocumentScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType;
};
export type BusinessDocumentCreateNestedOneWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.BusinessDocumentCreateWithoutInvoiceInput, Prisma.BusinessDocumentUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.BusinessDocumentCreateOrConnectWithoutInvoiceInput;
    connect?: Prisma.BusinessDocumentWhereUniqueInput;
};
export type BusinessDocumentUpdateOneWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessDocumentCreateWithoutInvoiceInput, Prisma.BusinessDocumentUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.BusinessDocumentCreateOrConnectWithoutInvoiceInput;
    upsert?: Prisma.BusinessDocumentUpsertWithoutInvoiceInput;
    disconnect?: Prisma.BusinessDocumentWhereInput | boolean;
    delete?: Prisma.BusinessDocumentWhereInput | boolean;
    connect?: Prisma.BusinessDocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessDocumentUpdateToOneWithWhereWithoutInvoiceInput, Prisma.BusinessDocumentUpdateWithoutInvoiceInput>, Prisma.BusinessDocumentUncheckedUpdateWithoutInvoiceInput>;
};
export type BusinessDocumentCreateWithoutUserInput = {
    id?: string;
    key: string;
    fileName: string;
    fileType?: string | null;
    size?: number | null;
    documentType: $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutDocumentInput;
};
export type BusinessDocumentUncheckedCreateWithoutUserInput = {
    id?: string;
    key: string;
    fileName: string;
    fileType?: string | null;
    size?: number | null;
    documentType: $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutDocumentInput;
};
export type BusinessDocumentCreateOrConnectWithoutUserInput = {
    where: Prisma.BusinessDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessDocumentCreateWithoutUserInput, Prisma.BusinessDocumentUncheckedCreateWithoutUserInput>;
};
export type BusinessDocumentCreateManyUserInputEnvelope = {
    data: Prisma.BusinessDocumentCreateManyUserInput | Prisma.BusinessDocumentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BusinessDocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BusinessDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.BusinessDocumentUpdateWithoutUserInput, Prisma.BusinessDocumentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BusinessDocumentCreateWithoutUserInput, Prisma.BusinessDocumentUncheckedCreateWithoutUserInput>;
};
export type BusinessDocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BusinessDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.BusinessDocumentUpdateWithoutUserInput, Prisma.BusinessDocumentUncheckedUpdateWithoutUserInput>;
};
export type BusinessDocumentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BusinessDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.BusinessDocumentUpdateManyMutationInput, Prisma.BusinessDocumentUncheckedUpdateManyWithoutUserInput>;
};
export type BusinessDocumentScalarWhereInput = {
    AND?: Prisma.BusinessDocumentScalarWhereInput | Prisma.BusinessDocumentScalarWhereInput[];
    OR?: Prisma.BusinessDocumentScalarWhereInput[];
    NOT?: Prisma.BusinessDocumentScalarWhereInput | Prisma.BusinessDocumentScalarWhereInput[];
    id?: Prisma.StringFilter<"BusinessDocument"> | string;
    key?: Prisma.StringFilter<"BusinessDocument"> | string;
    fileName?: Prisma.StringFilter<"BusinessDocument"> | string;
    fileType?: Prisma.StringNullableFilter<"BusinessDocument"> | string | null;
    size?: Prisma.IntNullableFilter<"BusinessDocument"> | number | null;
    documentType?: Prisma.EnumDocumentTypeFilter<"BusinessDocument"> | $Enums.DocumentType;
    metadata?: Prisma.JsonNullableFilter<"BusinessDocument">;
    createdAt?: Prisma.DateTimeFilter<"BusinessDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BusinessDocument"> | Date | string;
    userId?: Prisma.StringFilter<"BusinessDocument"> | string;
};
export type BusinessDocumentCreateWithoutInvoiceInput = {
    id?: string;
    key: string;
    fileName: string;
    fileType?: string | null;
    size?: number | null;
    documentType: $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBusinessDocumentsInput;
};
export type BusinessDocumentUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    key: string;
    fileName: string;
    fileType?: string | null;
    size?: number | null;
    documentType: $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
};
export type BusinessDocumentCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.BusinessDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessDocumentCreateWithoutInvoiceInput, Prisma.BusinessDocumentUncheckedCreateWithoutInvoiceInput>;
};
export type BusinessDocumentUpsertWithoutInvoiceInput = {
    update: Prisma.XOR<Prisma.BusinessDocumentUpdateWithoutInvoiceInput, Prisma.BusinessDocumentUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.BusinessDocumentCreateWithoutInvoiceInput, Prisma.BusinessDocumentUncheckedCreateWithoutInvoiceInput>;
    where?: Prisma.BusinessDocumentWhereInput;
};
export type BusinessDocumentUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: Prisma.BusinessDocumentWhereInput;
    data: Prisma.XOR<Prisma.BusinessDocumentUpdateWithoutInvoiceInput, Prisma.BusinessDocumentUncheckedUpdateWithoutInvoiceInput>;
};
export type BusinessDocumentUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    documentType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBusinessDocumentsNestedInput;
};
export type BusinessDocumentUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    documentType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BusinessDocumentCreateManyUserInput = {
    id?: string;
    key: string;
    fileName: string;
    fileType?: string | null;
    size?: number | null;
    documentType: $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BusinessDocumentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    documentType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: Prisma.InvoiceUpdateOneWithoutDocumentNestedInput;
};
export type BusinessDocumentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    documentType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutDocumentNestedInput;
};
export type BusinessDocumentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    documentType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    fileName?: boolean;
    fileType?: boolean;
    size?: boolean;
    documentType?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    invoice?: boolean | Prisma.BusinessDocument$invoiceArgs<ExtArgs>;
}, ExtArgs["result"]["businessDocument"]>;
export type BusinessDocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    fileName?: boolean;
    fileType?: boolean;
    size?: boolean;
    documentType?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["businessDocument"]>;
export type BusinessDocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    fileName?: boolean;
    fileType?: boolean;
    size?: boolean;
    documentType?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["businessDocument"]>;
export type BusinessDocumentSelectScalar = {
    id?: boolean;
    key?: boolean;
    fileName?: boolean;
    fileType?: boolean;
    size?: boolean;
    documentType?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
};
export type BusinessDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "fileName" | "fileType" | "size" | "documentType" | "metadata" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["businessDocument"]>;
export type BusinessDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    invoice?: boolean | Prisma.BusinessDocument$invoiceArgs<ExtArgs>;
};
export type BusinessDocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BusinessDocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BusinessDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BusinessDocument";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        invoice: Prisma.$InvoicePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        key: string;
        fileName: string;
        fileType: string | null;
        size: number | null;
        documentType: $Enums.DocumentType;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }, ExtArgs["result"]["businessDocument"]>;
    composites: {};
};
export type BusinessDocumentGetPayload<S extends boolean | null | undefined | BusinessDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload, S>;
export type BusinessDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BusinessDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BusinessDocumentCountAggregateInputType | true;
};
export interface BusinessDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BusinessDocument'];
        meta: {
            name: 'BusinessDocument';
        };
    };
    /**
     * Find zero or one BusinessDocument that matches the filter.
     * @param {BusinessDocumentFindUniqueArgs} args - Arguments to find a BusinessDocument
     * @example
     * // Get one BusinessDocument
     * const businessDocument = await prisma.businessDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, BusinessDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BusinessDocumentClient<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BusinessDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessDocumentFindUniqueOrThrowArgs} args - Arguments to find a BusinessDocument
     * @example
     * // Get one BusinessDocument
     * const businessDocument = await prisma.businessDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BusinessDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BusinessDocumentClient<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BusinessDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDocumentFindFirstArgs} args - Arguments to find a BusinessDocument
     * @example
     * // Get one BusinessDocument
     * const businessDocument = await prisma.businessDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, BusinessDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__BusinessDocumentClient<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BusinessDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDocumentFindFirstOrThrowArgs} args - Arguments to find a BusinessDocument
     * @example
     * // Get one BusinessDocument
     * const businessDocument = await prisma.businessDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BusinessDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BusinessDocumentClient<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BusinessDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessDocuments
     * const businessDocuments = await prisma.businessDocument.findMany()
     *
     * // Get first 10 BusinessDocuments
     * const businessDocuments = await prisma.businessDocument.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const businessDocumentWithIdOnly = await prisma.businessDocument.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BusinessDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, BusinessDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BusinessDocument.
     * @param {BusinessDocumentCreateArgs} args - Arguments to create a BusinessDocument.
     * @example
     * // Create one BusinessDocument
     * const BusinessDocument = await prisma.businessDocument.create({
     *   data: {
     *     // ... data to create a BusinessDocument
     *   }
     * })
     *
     */
    create<T extends BusinessDocumentCreateArgs>(args: Prisma.SelectSubset<T, BusinessDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__BusinessDocumentClient<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BusinessDocuments.
     * @param {BusinessDocumentCreateManyArgs} args - Arguments to create many BusinessDocuments.
     * @example
     * // Create many BusinessDocuments
     * const businessDocument = await prisma.businessDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BusinessDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, BusinessDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BusinessDocuments and returns the data saved in the database.
     * @param {BusinessDocumentCreateManyAndReturnArgs} args - Arguments to create many BusinessDocuments.
     * @example
     * // Create many BusinessDocuments
     * const businessDocument = await prisma.businessDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BusinessDocuments and only return the `id`
     * const businessDocumentWithIdOnly = await prisma.businessDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BusinessDocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BusinessDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BusinessDocument.
     * @param {BusinessDocumentDeleteArgs} args - Arguments to delete one BusinessDocument.
     * @example
     * // Delete one BusinessDocument
     * const BusinessDocument = await prisma.businessDocument.delete({
     *   where: {
     *     // ... filter to delete one BusinessDocument
     *   }
     * })
     *
     */
    delete<T extends BusinessDocumentDeleteArgs>(args: Prisma.SelectSubset<T, BusinessDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__BusinessDocumentClient<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BusinessDocument.
     * @param {BusinessDocumentUpdateArgs} args - Arguments to update one BusinessDocument.
     * @example
     * // Update one BusinessDocument
     * const businessDocument = await prisma.businessDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BusinessDocumentUpdateArgs>(args: Prisma.SelectSubset<T, BusinessDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__BusinessDocumentClient<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BusinessDocuments.
     * @param {BusinessDocumentDeleteManyArgs} args - Arguments to filter BusinessDocuments to delete.
     * @example
     * // Delete a few BusinessDocuments
     * const { count } = await prisma.businessDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BusinessDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, BusinessDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BusinessDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessDocuments
     * const businessDocument = await prisma.businessDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BusinessDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, BusinessDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BusinessDocuments and returns the data updated in the database.
     * @param {BusinessDocumentUpdateManyAndReturnArgs} args - Arguments to update many BusinessDocuments.
     * @example
     * // Update many BusinessDocuments
     * const businessDocument = await prisma.businessDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BusinessDocuments and only return the `id`
     * const businessDocumentWithIdOnly = await prisma.businessDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends BusinessDocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BusinessDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BusinessDocument.
     * @param {BusinessDocumentUpsertArgs} args - Arguments to update or create a BusinessDocument.
     * @example
     * // Update or create a BusinessDocument
     * const businessDocument = await prisma.businessDocument.upsert({
     *   create: {
     *     // ... data to create a BusinessDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessDocument we want to update
     *   }
     * })
     */
    upsert<T extends BusinessDocumentUpsertArgs>(args: Prisma.SelectSubset<T, BusinessDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__BusinessDocumentClient<runtime.Types.Result.GetResult<Prisma.$BusinessDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BusinessDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDocumentCountArgs} args - Arguments to filter BusinessDocuments to count.
     * @example
     * // Count the number of BusinessDocuments
     * const count = await prisma.businessDocument.count({
     *   where: {
     *     // ... the filter for the BusinessDocuments we want to count
     *   }
     * })
    **/
    count<T extends BusinessDocumentCountArgs>(args?: Prisma.Subset<T, BusinessDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BusinessDocumentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BusinessDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessDocumentAggregateArgs>(args: Prisma.Subset<T, BusinessDocumentAggregateArgs>): Prisma.PrismaPromise<GetBusinessDocumentAggregateType<T>>;
    /**
     * Group by BusinessDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDocumentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BusinessDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BusinessDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: BusinessDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BusinessDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BusinessDocument model
     */
    readonly fields: BusinessDocumentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BusinessDocument.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BusinessDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invoice<T extends Prisma.BusinessDocument$invoiceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDocument$invoiceArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BusinessDocument model
 */
export interface BusinessDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"BusinessDocument", 'String'>;
    readonly key: Prisma.FieldRef<"BusinessDocument", 'String'>;
    readonly fileName: Prisma.FieldRef<"BusinessDocument", 'String'>;
    readonly fileType: Prisma.FieldRef<"BusinessDocument", 'String'>;
    readonly size: Prisma.FieldRef<"BusinessDocument", 'Int'>;
    readonly documentType: Prisma.FieldRef<"BusinessDocument", 'DocumentType'>;
    readonly metadata: Prisma.FieldRef<"BusinessDocument", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"BusinessDocument", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BusinessDocument", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"BusinessDocument", 'String'>;
}
/**
 * BusinessDocument findUnique
 */
export type BusinessDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BusinessDocument to fetch.
     */
    where: Prisma.BusinessDocumentWhereUniqueInput;
};
/**
 * BusinessDocument findUniqueOrThrow
 */
export type BusinessDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BusinessDocument to fetch.
     */
    where: Prisma.BusinessDocumentWhereUniqueInput;
};
/**
 * BusinessDocument findFirst
 */
export type BusinessDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BusinessDocument to fetch.
     */
    where?: Prisma.BusinessDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BusinessDocuments to fetch.
     */
    orderBy?: Prisma.BusinessDocumentOrderByWithRelationInput | Prisma.BusinessDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BusinessDocuments.
     */
    cursor?: Prisma.BusinessDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BusinessDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BusinessDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BusinessDocuments.
     */
    distinct?: Prisma.BusinessDocumentScalarFieldEnum | Prisma.BusinessDocumentScalarFieldEnum[];
};
/**
 * BusinessDocument findFirstOrThrow
 */
export type BusinessDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BusinessDocument to fetch.
     */
    where?: Prisma.BusinessDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BusinessDocuments to fetch.
     */
    orderBy?: Prisma.BusinessDocumentOrderByWithRelationInput | Prisma.BusinessDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BusinessDocuments.
     */
    cursor?: Prisma.BusinessDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BusinessDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BusinessDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BusinessDocuments.
     */
    distinct?: Prisma.BusinessDocumentScalarFieldEnum | Prisma.BusinessDocumentScalarFieldEnum[];
};
/**
 * BusinessDocument findMany
 */
export type BusinessDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BusinessDocuments to fetch.
     */
    where?: Prisma.BusinessDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BusinessDocuments to fetch.
     */
    orderBy?: Prisma.BusinessDocumentOrderByWithRelationInput | Prisma.BusinessDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BusinessDocuments.
     */
    cursor?: Prisma.BusinessDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BusinessDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BusinessDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BusinessDocuments.
     */
    distinct?: Prisma.BusinessDocumentScalarFieldEnum | Prisma.BusinessDocumentScalarFieldEnum[];
};
/**
 * BusinessDocument create
 */
export type BusinessDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a BusinessDocument.
     */
    data: Prisma.XOR<Prisma.BusinessDocumentCreateInput, Prisma.BusinessDocumentUncheckedCreateInput>;
};
/**
 * BusinessDocument createMany
 */
export type BusinessDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessDocuments.
     */
    data: Prisma.BusinessDocumentCreateManyInput | Prisma.BusinessDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BusinessDocument createManyAndReturn
 */
export type BusinessDocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDocument
     */
    select?: Prisma.BusinessDocumentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BusinessDocument
     */
    omit?: Prisma.BusinessDocumentOmit<ExtArgs> | null;
    /**
     * The data used to create many BusinessDocuments.
     */
    data: Prisma.BusinessDocumentCreateManyInput | Prisma.BusinessDocumentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BusinessDocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BusinessDocument update
 */
export type BusinessDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a BusinessDocument.
     */
    data: Prisma.XOR<Prisma.BusinessDocumentUpdateInput, Prisma.BusinessDocumentUncheckedUpdateInput>;
    /**
     * Choose, which BusinessDocument to update.
     */
    where: Prisma.BusinessDocumentWhereUniqueInput;
};
/**
 * BusinessDocument updateMany
 */
export type BusinessDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessDocuments.
     */
    data: Prisma.XOR<Prisma.BusinessDocumentUpdateManyMutationInput, Prisma.BusinessDocumentUncheckedUpdateManyInput>;
    /**
     * Filter which BusinessDocuments to update
     */
    where?: Prisma.BusinessDocumentWhereInput;
    /**
     * Limit how many BusinessDocuments to update.
     */
    limit?: number;
};
/**
 * BusinessDocument updateManyAndReturn
 */
export type BusinessDocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDocument
     */
    select?: Prisma.BusinessDocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BusinessDocument
     */
    omit?: Prisma.BusinessDocumentOmit<ExtArgs> | null;
    /**
     * The data used to update BusinessDocuments.
     */
    data: Prisma.XOR<Prisma.BusinessDocumentUpdateManyMutationInput, Prisma.BusinessDocumentUncheckedUpdateManyInput>;
    /**
     * Filter which BusinessDocuments to update
     */
    where?: Prisma.BusinessDocumentWhereInput;
    /**
     * Limit how many BusinessDocuments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BusinessDocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BusinessDocument upsert
 */
export type BusinessDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the BusinessDocument to update in case it exists.
     */
    where: Prisma.BusinessDocumentWhereUniqueInput;
    /**
     * In case the BusinessDocument found by the `where` argument doesn't exist, create a new BusinessDocument with this data.
     */
    create: Prisma.XOR<Prisma.BusinessDocumentCreateInput, Prisma.BusinessDocumentUncheckedCreateInput>;
    /**
     * In case the BusinessDocument was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BusinessDocumentUpdateInput, Prisma.BusinessDocumentUncheckedUpdateInput>;
};
/**
 * BusinessDocument delete
 */
export type BusinessDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which BusinessDocument to delete.
     */
    where: Prisma.BusinessDocumentWhereUniqueInput;
};
/**
 * BusinessDocument deleteMany
 */
export type BusinessDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessDocuments to delete
     */
    where?: Prisma.BusinessDocumentWhereInput;
    /**
     * Limit how many BusinessDocuments to delete.
     */
    limit?: number;
};
/**
 * BusinessDocument.invoice
 */
export type BusinessDocument$invoiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
};
/**
 * BusinessDocument without action
 */
export type BusinessDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
