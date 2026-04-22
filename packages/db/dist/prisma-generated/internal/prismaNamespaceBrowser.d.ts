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
    readonly ChartOfAccount: "ChartOfAccount";
    readonly JournalEntry: "JournalEntry";
    readonly JournalLine: "JournalLine";
    readonly FixedAsset: "FixedAsset";
    readonly BusinessDocument: "BusinessDocument";
    readonly Customer: "Customer";
    readonly Invoice: "Invoice";
    readonly InvoiceItem: "InvoiceItem";
    readonly PurchaseOrder: "PurchaseOrder";
    readonly PoLineItem: "PoLineItem";
    readonly Part: "Part";
    readonly RoutingTemplate: "RoutingTemplate";
    readonly RoutingStep: "RoutingStep";
    readonly Machine: "Machine";
    readonly JobCard: "JobCard";
    readonly JobList: "JobList";
    readonly JobMaterial: "JobMaterial";
    readonly Operation: "Operation";
    readonly QcLog: "QcLog";
    readonly QcFinding: "QcFinding";
    readonly CheckSheet: "CheckSheet";
    readonly CheckSheetRow: "CheckSheetRow";
    readonly Material: "Material";
    readonly MaterialUsage: "MaterialUsage";
    readonly StockAdjustment: "StockAdjustment";
    readonly Supplier: "Supplier";
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
export declare const ChartOfAccountScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly type: "type";
    readonly parentCode: "parentCode";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type ChartOfAccountScalarFieldEnum = (typeof ChartOfAccountScalarFieldEnum)[keyof typeof ChartOfAccountScalarFieldEnum];
export declare const JournalEntryScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly description: "description";
    readonly period: "period";
    readonly createdAt: "createdAt";
    readonly createdById: "createdById";
};
export type JournalEntryScalarFieldEnum = (typeof JournalEntryScalarFieldEnum)[keyof typeof JournalEntryScalarFieldEnum];
export declare const JournalLineScalarFieldEnum: {
    readonly id: "id";
    readonly journalEntryId: "journalEntryId";
    readonly accountId: "accountId";
    readonly amount: "amount";
    readonly isDebit: "isDebit";
    readonly description: "description";
};
export type JournalLineScalarFieldEnum = (typeof JournalLineScalarFieldEnum)[keyof typeof JournalLineScalarFieldEnum];
export declare const FixedAssetScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly category: "category";
    readonly acquisitionDate: "acquisitionDate";
    readonly usefulLifeMonths: "usefulLifeMonths";
    readonly acquisitionCost: "acquisitionCost";
    readonly monthlyDepreciation: "monthlyDepreciation";
    readonly accumulatedDepreciation: "accumulatedDepreciation";
    readonly bookValue: "bookValue";
    readonly createdAt: "createdAt";
};
export type FixedAssetScalarFieldEnum = (typeof FixedAssetScalarFieldEnum)[keyof typeof FixedAssetScalarFieldEnum];
export declare const BusinessDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly fileName: "fileName";
    readonly fileType: "fileType";
    readonly size: "size";
    readonly documentType: "documentType";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly userId: "userId";
};
export type BusinessDocumentScalarFieldEnum = (typeof BusinessDocumentScalarFieldEnum)[keyof typeof BusinessDocumentScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly address: "address";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceNo: "invoiceNo";
    readonly date: "date";
    readonly poNo: "poNo";
    readonly status: "status";
    readonly dppHargaJual: "dppHargaJual";
    readonly dppNilaiLain: "dppNilaiLain";
    readonly ppn: "ppn";
    readonly total: "total";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly purchaseOrderId: "purchaseOrderId";
    readonly customerId: "customerId";
    readonly createdById: "createdById";
    readonly documentId: "documentId";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const InvoiceItemScalarFieldEnum: {
    readonly id: "id";
    readonly no: "no";
    readonly partNo: "partNo";
    readonly description: "description";
    readonly unitPrice: "unitPrice";
    readonly qty: "qty";
    readonly qtyUnit: "qtyUnit";
    readonly amount: "amount";
    readonly invoiceId: "invoiceId";
};
export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum];
export declare const PurchaseOrderScalarFieldEnum: {
    readonly id: "id";
    readonly poNumber: "poNumber";
    readonly customerId: "customerId";
    readonly dueDate: "dueDate";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
};
export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum];
export declare const PoLineItemScalarFieldEnum: {
    readonly id: "id";
    readonly purchaseOrderId: "purchaseOrderId";
    readonly partId: "partId";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
};
export type PoLineItemScalarFieldEnum = (typeof PoLineItemScalarFieldEnum)[keyof typeof PoLineItemScalarFieldEnum];
export declare const PartScalarFieldEnum: {
    readonly id: "id";
    readonly partNo: "partNo";
    readonly description: "description";
    readonly castingType: "castingType";
    readonly materialId: "materialId";
    readonly drawingRef: "drawingRef";
    readonly createdAt: "createdAt";
};
export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum];
export declare const RoutingTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly partId: "partId";
    readonly createdAt: "createdAt";
};
export type RoutingTemplateScalarFieldEnum = (typeof RoutingTemplateScalarFieldEnum)[keyof typeof RoutingTemplateScalarFieldEnum];
export declare const RoutingStepScalarFieldEnum: {
    readonly id: "id";
    readonly routingTemplateId: "routingTemplateId";
    readonly stepOrder: "stepOrder";
    readonly operationName: "operationName";
    readonly defaultMachineType: "defaultMachineType";
    readonly estimatedMinutes: "estimatedMinutes";
};
export type RoutingStepScalarFieldEnum = (typeof RoutingStepScalarFieldEnum)[keyof typeof RoutingStepScalarFieldEnum];
export declare const MachineScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly machineType: "machineType";
    readonly isActive: "isActive";
};
export type MachineScalarFieldEnum = (typeof MachineScalarFieldEnum)[keyof typeof MachineScalarFieldEnum];
export declare const JobCardScalarFieldEnum: {
    readonly id: "id";
    readonly jobNo: "jobNo";
    readonly purchaseOrderId: "purchaseOrderId";
    readonly status: "status";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly completedAt: "completedAt";
};
export type JobCardScalarFieldEnum = (typeof JobCardScalarFieldEnum)[keyof typeof JobCardScalarFieldEnum];
export declare const JobListScalarFieldEnum: {
    readonly id: "id";
    readonly jobCardId: "jobCardId";
    readonly partId: "partId";
    readonly lineItemId: "lineItemId";
    readonly quantity: "quantity";
    readonly status: "status";
};
export type JobListScalarFieldEnum = (typeof JobListScalarFieldEnum)[keyof typeof JobListScalarFieldEnum];
export declare const JobMaterialScalarFieldEnum: {
    readonly id: "id";
    readonly jobListId: "jobListId";
    readonly materialId: "materialId";
    readonly quantity: "quantity";
};
export type JobMaterialScalarFieldEnum = (typeof JobMaterialScalarFieldEnum)[keyof typeof JobMaterialScalarFieldEnum];
export declare const OperationScalarFieldEnum: {
    readonly id: "id";
    readonly jobListId: "jobListId";
    readonly routingStepId: "routingStepId";
    readonly stepOrder: "stepOrder";
    readonly operationName: "operationName";
    readonly machineId: "machineId";
    readonly operatorId: "operatorId";
    readonly status: "status";
    readonly startedAt: "startedAt";
    readonly completedAt: "completedAt";
    readonly notes: "notes";
};
export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum];
export declare const QcLogScalarFieldEnum: {
    readonly id: "id";
    readonly operationId: "operationId";
    readonly result: "result";
    readonly reason: "reason";
    readonly inspectorId: "inspectorId";
    readonly loggedAt: "loggedAt";
    readonly totalScore: "totalScore";
    readonly actionRequired: "actionRequired";
};
export type QcLogScalarFieldEnum = (typeof QcLogScalarFieldEnum)[keyof typeof QcLogScalarFieldEnum];
export declare const QcFindingScalarFieldEnum: {
    readonly id: "id";
    readonly qcLogId: "qcLogId";
    readonly category: "category";
    readonly parameter: "parameter";
    readonly specification: "specification";
    readonly measuredValue: "measuredValue";
    readonly unit: "unit";
    readonly description: "description";
    readonly severity: "severity";
    readonly isConforming: "isConforming";
    readonly documentId: "documentId";
};
export type QcFindingScalarFieldEnum = (typeof QcFindingScalarFieldEnum)[keyof typeof QcFindingScalarFieldEnum];
export declare const CheckSheetScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly operationId: "operationId";
    readonly documentId: "documentId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CheckSheetScalarFieldEnum = (typeof CheckSheetScalarFieldEnum)[keyof typeof CheckSheetScalarFieldEnum];
export declare const CheckSheetRowScalarFieldEnum: {
    readonly id: "id";
    readonly checkSheetId: "checkSheetId";
    readonly parameterName: "parameterName";
    readonly targetValue: "targetValue";
    readonly actualValue: "actualValue";
    readonly minTolerance: "minTolerance";
    readonly maxTolerance: "maxTolerance";
    readonly isPass: "isPass";
};
export type CheckSheetRowScalarFieldEnum = (typeof CheckSheetRowScalarFieldEnum)[keyof typeof CheckSheetRowScalarFieldEnum];
export declare const MaterialScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly unit: "unit";
    readonly stockQty: "stockQty";
    readonly reorderThreshold: "reorderThreshold";
    readonly reorderQty: "reorderQty";
    readonly supplierId: "supplierId";
    readonly unitCost: "unitCost";
    readonly createdAt: "createdAt";
};
export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum];
export declare const MaterialUsageScalarFieldEnum: {
    readonly id: "id";
    readonly operationId: "operationId";
    readonly materialId: "materialId";
    readonly qtyUsed: "qtyUsed";
    readonly loggedAt: "loggedAt";
};
export type MaterialUsageScalarFieldEnum = (typeof MaterialUsageScalarFieldEnum)[keyof typeof MaterialUsageScalarFieldEnum];
export declare const StockAdjustmentScalarFieldEnum: {
    readonly id: "id";
    readonly materialId: "materialId";
    readonly qty: "qty";
    readonly reason: "reason";
    readonly adjustedById: "adjustedById";
    readonly adjustedAt: "adjustedAt";
};
export type StockAdjustmentScalarFieldEnum = (typeof StockAdjustmentScalarFieldEnum)[keyof typeof StockAdjustmentScalarFieldEnum];
export declare const SupplierScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly phone: "phone";
    readonly email: "email";
    readonly address: "address";
    readonly createdAt: "createdAt";
};
export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
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
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
