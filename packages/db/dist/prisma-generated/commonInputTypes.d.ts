import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType;
};
export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type EnumCastingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CastingType | Prisma.EnumCastingTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CastingType[] | Prisma.ListEnumCastingTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CastingType[] | Prisma.ListEnumCastingTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCastingTypeFilter<$PrismaModel> | $Enums.CastingType;
};
export type EnumCastingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CastingType | Prisma.EnumCastingTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CastingType[] | Prisma.ListEnumCastingTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CastingType[] | Prisma.ListEnumCastingTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCastingTypeWithAggregatesFilter<$PrismaModel> | $Enums.CastingType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCastingTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCastingTypeFilter<$PrismaModel>;
};
export type EnumJobCardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobCardStatus | Prisma.EnumJobCardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobCardStatus[] | Prisma.ListEnumJobCardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobCardStatus[] | Prisma.ListEnumJobCardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobCardStatusFilter<$PrismaModel> | $Enums.JobCardStatus;
};
export type EnumJobCardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobCardStatus | Prisma.EnumJobCardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobCardStatus[] | Prisma.ListEnumJobCardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobCardStatus[] | Prisma.ListEnumJobCardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobCardStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobCardStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumJobCardStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumJobCardStatusFilter<$PrismaModel>;
};
export type EnumOperationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | Prisma.EnumOperationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OperationStatus[] | Prisma.ListEnumOperationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OperationStatus[] | Prisma.ListEnumOperationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOperationStatusFilter<$PrismaModel> | $Enums.OperationStatus;
};
export type EnumOperationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | Prisma.EnumOperationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OperationStatus[] | Prisma.ListEnumOperationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OperationStatus[] | Prisma.ListEnumOperationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOperationStatusWithAggregatesFilter<$PrismaModel> | $Enums.OperationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOperationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOperationStatusFilter<$PrismaModel>;
};
export type EnumQcResultFilter<$PrismaModel = never> = {
    equals?: $Enums.QcResult | Prisma.EnumQcResultFieldRefInput<$PrismaModel>;
    in?: $Enums.QcResult[] | Prisma.ListEnumQcResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.QcResult[] | Prisma.ListEnumQcResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumQcResultFilter<$PrismaModel> | $Enums.QcResult;
};
export type EnumQcResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QcResult | Prisma.EnumQcResultFieldRefInput<$PrismaModel>;
    in?: $Enums.QcResult[] | Prisma.ListEnumQcResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.QcResult[] | Prisma.ListEnumQcResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumQcResultWithAggregatesFilter<$PrismaModel> | $Enums.QcResult;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumQcResultFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumQcResultFilter<$PrismaModel>;
};
export type EnumFindingCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FindingCategory | Prisma.EnumFindingCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.FindingCategory[] | Prisma.ListEnumFindingCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FindingCategory[] | Prisma.ListEnumFindingCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFindingCategoryFilter<$PrismaModel> | $Enums.FindingCategory;
};
export type EnumFindingCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FindingCategory | Prisma.EnumFindingCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.FindingCategory[] | Prisma.ListEnumFindingCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FindingCategory[] | Prisma.ListEnumFindingCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFindingCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FindingCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFindingCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFindingCategoryFilter<$PrismaModel>;
};
export type EnumCheckSheetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckSheetType | Prisma.EnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckSheetType[] | Prisma.ListEnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckSheetType[] | Prisma.ListEnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckSheetTypeFilter<$PrismaModel> | $Enums.CheckSheetType;
};
export type EnumCheckSheetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckSheetType | Prisma.EnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckSheetType[] | Prisma.ListEnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckSheetType[] | Prisma.ListEnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckSheetTypeWithAggregatesFilter<$PrismaModel> | $Enums.CheckSheetType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCheckSheetTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCheckSheetTypeFilter<$PrismaModel>;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableFilter<$PrismaModel> | boolean | null;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
};
export type EnumMaterialUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialUnit | Prisma.EnumMaterialUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.MaterialUnit[] | Prisma.ListEnumMaterialUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MaterialUnit[] | Prisma.ListEnumMaterialUnitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMaterialUnitFilter<$PrismaModel> | $Enums.MaterialUnit;
};
export type EnumMaterialUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialUnit | Prisma.EnumMaterialUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.MaterialUnit[] | Prisma.ListEnumMaterialUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MaterialUnit[] | Prisma.ListEnumMaterialUnitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMaterialUnitWithAggregatesFilter<$PrismaModel> | $Enums.MaterialUnit;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMaterialUnitFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMaterialUnitFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType;
};
export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedEnumCastingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CastingType | Prisma.EnumCastingTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CastingType[] | Prisma.ListEnumCastingTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CastingType[] | Prisma.ListEnumCastingTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCastingTypeFilter<$PrismaModel> | $Enums.CastingType;
};
export type NestedEnumCastingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CastingType | Prisma.EnumCastingTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CastingType[] | Prisma.ListEnumCastingTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CastingType[] | Prisma.ListEnumCastingTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCastingTypeWithAggregatesFilter<$PrismaModel> | $Enums.CastingType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCastingTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCastingTypeFilter<$PrismaModel>;
};
export type NestedEnumJobCardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobCardStatus | Prisma.EnumJobCardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobCardStatus[] | Prisma.ListEnumJobCardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobCardStatus[] | Prisma.ListEnumJobCardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobCardStatusFilter<$PrismaModel> | $Enums.JobCardStatus;
};
export type NestedEnumJobCardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobCardStatus | Prisma.EnumJobCardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobCardStatus[] | Prisma.ListEnumJobCardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobCardStatus[] | Prisma.ListEnumJobCardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobCardStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobCardStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumJobCardStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumJobCardStatusFilter<$PrismaModel>;
};
export type NestedEnumOperationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | Prisma.EnumOperationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OperationStatus[] | Prisma.ListEnumOperationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OperationStatus[] | Prisma.ListEnumOperationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOperationStatusFilter<$PrismaModel> | $Enums.OperationStatus;
};
export type NestedEnumOperationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | Prisma.EnumOperationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OperationStatus[] | Prisma.ListEnumOperationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OperationStatus[] | Prisma.ListEnumOperationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOperationStatusWithAggregatesFilter<$PrismaModel> | $Enums.OperationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOperationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOperationStatusFilter<$PrismaModel>;
};
export type NestedEnumQcResultFilter<$PrismaModel = never> = {
    equals?: $Enums.QcResult | Prisma.EnumQcResultFieldRefInput<$PrismaModel>;
    in?: $Enums.QcResult[] | Prisma.ListEnumQcResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.QcResult[] | Prisma.ListEnumQcResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumQcResultFilter<$PrismaModel> | $Enums.QcResult;
};
export type NestedEnumQcResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QcResult | Prisma.EnumQcResultFieldRefInput<$PrismaModel>;
    in?: $Enums.QcResult[] | Prisma.ListEnumQcResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.QcResult[] | Prisma.ListEnumQcResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumQcResultWithAggregatesFilter<$PrismaModel> | $Enums.QcResult;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumQcResultFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumQcResultFilter<$PrismaModel>;
};
export type NestedEnumFindingCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FindingCategory | Prisma.EnumFindingCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.FindingCategory[] | Prisma.ListEnumFindingCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FindingCategory[] | Prisma.ListEnumFindingCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFindingCategoryFilter<$PrismaModel> | $Enums.FindingCategory;
};
export type NestedEnumFindingCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FindingCategory | Prisma.EnumFindingCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.FindingCategory[] | Prisma.ListEnumFindingCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FindingCategory[] | Prisma.ListEnumFindingCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFindingCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FindingCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFindingCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFindingCategoryFilter<$PrismaModel>;
};
export type NestedEnumCheckSheetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckSheetType | Prisma.EnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckSheetType[] | Prisma.ListEnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckSheetType[] | Prisma.ListEnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckSheetTypeFilter<$PrismaModel> | $Enums.CheckSheetType;
};
export type NestedEnumCheckSheetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckSheetType | Prisma.EnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckSheetType[] | Prisma.ListEnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckSheetType[] | Prisma.ListEnumCheckSheetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckSheetTypeWithAggregatesFilter<$PrismaModel> | $Enums.CheckSheetType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCheckSheetTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCheckSheetTypeFilter<$PrismaModel>;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableFilter<$PrismaModel> | boolean | null;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
};
export type NestedEnumMaterialUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialUnit | Prisma.EnumMaterialUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.MaterialUnit[] | Prisma.ListEnumMaterialUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MaterialUnit[] | Prisma.ListEnumMaterialUnitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMaterialUnitFilter<$PrismaModel> | $Enums.MaterialUnit;
};
export type NestedEnumMaterialUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialUnit | Prisma.EnumMaterialUnitFieldRefInput<$PrismaModel>;
    in?: $Enums.MaterialUnit[] | Prisma.ListEnumMaterialUnitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MaterialUnit[] | Prisma.ListEnumMaterialUnitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMaterialUnitWithAggregatesFilter<$PrismaModel> | $Enums.MaterialUnit;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMaterialUnitFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMaterialUnitFilter<$PrismaModel>;
};
