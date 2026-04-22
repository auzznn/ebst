export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly FINANCE: "FINANCE";
    readonly EXECUTIVE: "EXECUTIVE";
    readonly OPERATOR: "OPERATOR";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const AccountType: {
    readonly ASSET: "ASSET";
    readonly CONTRA_ASSET: "CONTRA_ASSET";
    readonly LIABILITY: "LIABILITY";
    readonly EQUITY: "EQUITY";
    readonly REVENUE: "REVENUE";
    readonly EXPENSE: "EXPENSE";
};
export type AccountType = (typeof AccountType)[keyof typeof AccountType];
export declare const DocumentType: {
    readonly INVOICE: "INVOICE";
    readonly PURCHASE_ORDER: "PURCHASE_ORDER";
    readonly DELIVERY_NOTE: "DELIVERY_NOTE";
    readonly OTHER: "OTHER";
};
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
export declare const InvoiceStatus: {
    readonly UNPAID: "UNPAID";
    readonly PAID: "PAID";
    readonly PARTIAL: "PARTIAL";
    readonly CANCELLED: "CANCELLED";
};
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
export declare const CastingType: {
    readonly INVESTMENT: "INVESTMENT";
    readonly SAND: "SAND";
};
export type CastingType = (typeof CastingType)[keyof typeof CastingType];
export declare const JobCardStatus: {
    readonly PENDING: "PENDING";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly ON_HOLD: "ON_HOLD";
    readonly CANCELLED: "CANCELLED";
};
export type JobCardStatus = (typeof JobCardStatus)[keyof typeof JobCardStatus];
export declare const OperationStatus: {
    readonly WAITING: "WAITING";
    readonly QUEUED: "QUEUED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly REJECTED: "REJECTED";
};
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];
export declare const QcResult: {
    readonly PASS: "PASS";
    readonly REPAIR: "REPAIR";
    readonly REJECT: "REJECT";
};
export type QcResult = (typeof QcResult)[keyof typeof QcResult];
export declare const MaterialUnit: {
    readonly KG: "KG";
    readonly GRAM: "GRAM";
    readonly LITRE: "LITRE";
    readonly PIECE: "PIECE";
    readonly METRE: "METRE";
};
export type MaterialUnit = (typeof MaterialUnit)[keyof typeof MaterialUnit];
export declare const FindingCategory: {
    readonly DIMENSION: "DIMENSION";
    readonly SURFACE: "SURFACE";
    readonly CHEMICAL: "CHEMICAL";
    readonly VISUAL: "VISUAL";
    readonly FUNCTIONAL: "FUNCTIONAL";
    readonly OTHER: "OTHER";
};
export type FindingCategory = (typeof FindingCategory)[keyof typeof FindingCategory];
export declare const CheckSheetType: {
    readonly MELTING: "MELTING";
    readonly FINISHING: "FINISHING";
};
export type CheckSheetType = (typeof CheckSheetType)[keyof typeof CheckSheetType];
