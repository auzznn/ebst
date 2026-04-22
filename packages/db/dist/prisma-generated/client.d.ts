import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model Account
 *
 */
export type Account = Prisma.AccountModel;
/**
 * Model Verification
 *
 */
export type Verification = Prisma.VerificationModel;
/**
 * Model Channel
 *
 */
export type Channel = Prisma.ChannelModel;
/**
 * Model ChannelMember
 *
 */
export type ChannelMember = Prisma.ChannelMemberModel;
/**
 * Model Message
 *
 */
export type Message = Prisma.MessageModel;
/**
 * Model ChartOfAccount
 *
 */
export type ChartOfAccount = Prisma.ChartOfAccountModel;
/**
 * Model JournalEntry
 *
 */
export type JournalEntry = Prisma.JournalEntryModel;
/**
 * Model JournalLine
 *
 */
export type JournalLine = Prisma.JournalLineModel;
/**
 * Model FixedAsset
 *
 */
export type FixedAsset = Prisma.FixedAssetModel;
/**
 * Model BusinessDocument
 *
 */
export type BusinessDocument = Prisma.BusinessDocumentModel;
/**
 * Model Customer
 *
 */
export type Customer = Prisma.CustomerModel;
/**
 * Model Invoice
 *
 */
export type Invoice = Prisma.InvoiceModel;
/**
 * Model InvoiceItem
 *
 */
export type InvoiceItem = Prisma.InvoiceItemModel;
/**
 * Model PurchaseOrder
 *
 */
export type PurchaseOrder = Prisma.PurchaseOrderModel;
/**
 * Model PoLineItem
 *
 */
export type PoLineItem = Prisma.PoLineItemModel;
/**
 * Model Part
 *
 */
export type Part = Prisma.PartModel;
/**
 * Model RoutingTemplate
 *
 */
export type RoutingTemplate = Prisma.RoutingTemplateModel;
/**
 * Model RoutingStep
 *
 */
export type RoutingStep = Prisma.RoutingStepModel;
/**
 * Model Machine
 *
 */
export type Machine = Prisma.MachineModel;
/**
 * Model JobCard
 *
 */
export type JobCard = Prisma.JobCardModel;
/**
 * Model JobList
 *
 */
export type JobList = Prisma.JobListModel;
/**
 * Model JobMaterial
 *
 */
export type JobMaterial = Prisma.JobMaterialModel;
/**
 * Model Operation
 *
 */
export type Operation = Prisma.OperationModel;
/**
 * Model QcLog
 *
 */
export type QcLog = Prisma.QcLogModel;
/**
 * Model QcFinding
 *
 */
export type QcFinding = Prisma.QcFindingModel;
/**
 * Model CheckSheet
 *
 */
export type CheckSheet = Prisma.CheckSheetModel;
/**
 * Model CheckSheetRow
 *
 */
export type CheckSheetRow = Prisma.CheckSheetRowModel;
/**
 * Model Material
 *
 */
export type Material = Prisma.MaterialModel;
/**
 * Model MaterialUsage
 *
 */
export type MaterialUsage = Prisma.MaterialUsageModel;
/**
 * Model StockAdjustment
 *
 */
export type StockAdjustment = Prisma.StockAdjustmentModel;
/**
 * Model Supplier
 *
 */
export type Supplier = Prisma.SupplierModel;
