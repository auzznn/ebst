import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Session: "Session";
    readonly Account: "Account";
    readonly Verification: "Verification";
    readonly Channel: "Channel";
    readonly ChannelMember: "ChannelMember";
    readonly Message: "Message";
    readonly Accounting: "Accounting";
    readonly JournalEntry: "JournalEntry";
    readonly JournalLine: "JournalLine";
    readonly Invoice: "Invoice";
    readonly InvoiceLine: "InvoiceLine";
    readonly Bill: "Bill";
    readonly BillLine: "BillLine";
    readonly PayrollRun: "PayrollRun";
    readonly PayrollEntry: "PayrollEntry";
    readonly TaxCode: "TaxCode";
    readonly Customer: "Customer";
    readonly Vendor: "Vendor";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly image: "image";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly username: "username";
    readonly displayUsername: "displayUsername";
    readonly role: "role";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly expiresAt: "expiresAt";
    readonly token: "token";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly userId: "userId";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly userId: "userId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const ChannelScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly isDM: "isDM";
    readonly dmKey: "dmKey";
    readonly createdAt: "createdAt";
    readonly lastMessage: "lastMessage";
};
export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum];
export declare const ChannelMemberScalarFieldEnum: {
    readonly userId: "userId";
    readonly channelId: "channelId";
    readonly joinedAt: "joinedAt";
};
export type ChannelMemberScalarFieldEnum = (typeof ChannelMemberScalarFieldEnum)[keyof typeof ChannelMemberScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly content: "content";
    readonly type: "type";
    readonly fileUrl: "fileUrl";
    readonly createdAt: "createdAt";
    readonly senderId: "senderId";
    readonly channelId: "channelId";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const AccountingScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly type: "type";
    readonly parentId: "parentId";
    readonly isActive: "isActive";
    readonly balance: "balance";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountingScalarFieldEnum = (typeof AccountingScalarFieldEnum)[keyof typeof AccountingScalarFieldEnum];
export declare const JournalEntryScalarFieldEnum: {
    readonly id: "id";
    readonly reference: "reference";
    readonly entryDate: "entryDate";
    readonly description: "description";
    readonly status: "status";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type JournalEntryScalarFieldEnum = (typeof JournalEntryScalarFieldEnum)[keyof typeof JournalEntryScalarFieldEnum];
export declare const JournalLineScalarFieldEnum: {
    readonly id: "id";
    readonly journalEntryId: "journalEntryId";
    readonly accountId: "accountId";
    readonly debit: "debit";
    readonly credit: "credit";
    readonly memo: "memo";
};
export type JournalLineScalarFieldEnum = (typeof JournalLineScalarFieldEnum)[keyof typeof JournalLineScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceNumber: "invoiceNumber";
    readonly customerId: "customerId";
    readonly issueDate: "issueDate";
    readonly dueDate: "dueDate";
    readonly status: "status";
    readonly subtotal: "subtotal";
    readonly taxCodeId: "taxCodeId";
    readonly taxAmount: "taxAmount";
    readonly total: "total";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const InvoiceLineScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceId: "invoiceId";
    readonly description: "description";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly accountId: "accountId";
};
export type InvoiceLineScalarFieldEnum = (typeof InvoiceLineScalarFieldEnum)[keyof typeof InvoiceLineScalarFieldEnum];
export declare const BillScalarFieldEnum: {
    readonly id: "id";
    readonly billNumber: "billNumber";
    readonly vendorId: "vendorId";
    readonly issueDate: "issueDate";
    readonly dueDate: "dueDate";
    readonly status: "status";
    readonly subtotal: "subtotal";
    readonly taxCodeId: "taxCodeId";
    readonly taxAmount: "taxAmount";
    readonly total: "total";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum];
export declare const BillLineScalarFieldEnum: {
    readonly id: "id";
    readonly billId: "billId";
    readonly description: "description";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly accountId: "accountId";
};
export type BillLineScalarFieldEnum = (typeof BillLineScalarFieldEnum)[keyof typeof BillLineScalarFieldEnum];
export declare const PayrollRunScalarFieldEnum: {
    readonly id: "id";
    readonly payPeriodStart: "payPeriodStart";
    readonly payPeriodEnd: "payPeriodEnd";
    readonly paymentDate: "paymentDate";
    readonly status: "status";
    readonly totalGross: "totalGross";
    readonly totalDeductions: "totalDeductions";
    readonly totalNet: "totalNet";
    readonly createdAt: "createdAt";
};
export type PayrollRunScalarFieldEnum = (typeof PayrollRunScalarFieldEnum)[keyof typeof PayrollRunScalarFieldEnum];
export declare const PayrollEntryScalarFieldEnum: {
    readonly id: "id";
    readonly payrollRunId: "payrollRunId";
    readonly employeeId: "employeeId";
    readonly grossPay: "grossPay";
    readonly taxWithheld: "taxWithheld";
    readonly bpjsAmount: "bpjsAmount";
    readonly netPay: "netPay";
};
export type PayrollEntryScalarFieldEnum = (typeof PayrollEntryScalarFieldEnum)[keyof typeof PayrollEntryScalarFieldEnum];
export declare const TaxCodeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly rate: "rate";
    readonly isActive: "isActive";
};
export type TaxCodeScalarFieldEnum = (typeof TaxCodeScalarFieldEnum)[keyof typeof TaxCodeScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly taxId: "taxId";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const VendorScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly taxId: "taxId";
};
export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
