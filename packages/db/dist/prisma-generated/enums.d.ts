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
