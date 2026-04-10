export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly FINANCE: "FINANCE";
    readonly EXECUTIVE: "EXECUTIVE";
};
export type Role = (typeof Role)[keyof typeof Role];
