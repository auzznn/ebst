export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly FINANCE: "FINANCE";
    readonly EXECUTIVE: "EXECUTIVE";
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
