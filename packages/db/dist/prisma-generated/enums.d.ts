export declare const AccountType: {
    readonly ASSET: "ASSET";
    readonly LIABILITY: "LIABILITY";
    readonly EQUITY: "EQUITY";
    readonly REVENUE: "REVENUE";
    readonly EXPENSE: "EXPENSE";
};
export type AccountType = (typeof AccountType)[keyof typeof AccountType];
export declare const JournalEntryStatus: {
    readonly DRAFT: "DRAFT";
    readonly POSTED: "POSTED";
    readonly VOID: "VOID";
};
export type JournalEntryStatus = (typeof JournalEntryStatus)[keyof typeof JournalEntryStatus];
export declare const InvoiceStatus: {
    readonly DRAFT: "DRAFT";
    readonly SENT: "SENT";
    readonly PARTIAL: "PARTIAL";
    readonly PAID: "PAID";
    readonly VOID: "VOID";
};
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
export declare const BillStatus: {
    readonly DRAFT: "DRAFT";
    readonly APPROVED: "APPROVED";
    readonly PARTIAL: "PARTIAL";
    readonly PAID: "PAID";
    readonly VOID: "VOID";
};
export type BillStatus = (typeof BillStatus)[keyof typeof BillStatus];
export declare const PayrollStatus: {
    readonly DRAFT: "DRAFT";
    readonly PROCESSED: "PROCESSED";
    readonly PAID: "PAID";
};
export type PayrollStatus = (typeof PayrollStatus)[keyof typeof PayrollStatus];
export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly FINANCE: "FINANCE";
    readonly EXECS: "EXECS";
};
export type Role = (typeof Role)[keyof typeof Role];
