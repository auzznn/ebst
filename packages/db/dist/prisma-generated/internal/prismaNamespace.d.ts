import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.6.0
 * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
    readonly PartMaterial: "PartMaterial";
    readonly PartSpecification: "PartSpecification";
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "session" | "account" | "verification" | "channel" | "channelMember" | "message" | "chartOfAccount" | "journalEntry" | "journalLine" | "fixedAsset" | "businessDocument" | "customer" | "invoice" | "invoiceItem" | "purchaseOrder" | "poLineItem" | "part" | "partMaterial" | "partSpecification" | "routingTemplate" | "routingStep" | "machine" | "jobCard" | "jobList" | "jobMaterial" | "operation" | "qcLog" | "qcFinding" | "checkSheet" | "checkSheetRow" | "material" | "materialUsage" | "stockAdjustment" | "supplier";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        Account: {
            payload: Prisma.$AccountPayload<ExtArgs>;
            fields: Prisma.AccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                findFirst: {
                    args: Prisma.AccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                findMany: {
                    args: Prisma.AccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                create: {
                    args: Prisma.AccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                createMany: {
                    args: Prisma.AccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                delete: {
                    args: Prisma.AccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                update: {
                    args: Prisma.AccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                deleteMany: {
                    args: Prisma.AccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                upsert: {
                    args: Prisma.AccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                aggregate: {
                    args: Prisma.AccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAccount>;
                };
                groupBy: {
                    args: Prisma.AccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccountCountAggregateOutputType> | number;
                };
            };
        };
        Verification: {
            payload: Prisma.$VerificationPayload<ExtArgs>;
            fields: Prisma.VerificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VerificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findFirst: {
                    args: Prisma.VerificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findMany: {
                    args: Prisma.VerificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                create: {
                    args: Prisma.VerificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                createMany: {
                    args: Prisma.VerificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                delete: {
                    args: Prisma.VerificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                update: {
                    args: Prisma.VerificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                deleteMany: {
                    args: Prisma.VerificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VerificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                upsert: {
                    args: Prisma.VerificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                aggregate: {
                    args: Prisma.VerificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVerification>;
                };
                groupBy: {
                    args: Prisma.VerificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VerificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationCountAggregateOutputType> | number;
                };
            };
        };
        Channel: {
            payload: Prisma.$ChannelPayload<ExtArgs>;
            fields: Prisma.ChannelFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChannelFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
                };
                findFirst: {
                    args: Prisma.ChannelFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
                };
                findMany: {
                    args: Prisma.ChannelFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>[];
                };
                create: {
                    args: Prisma.ChannelCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
                };
                createMany: {
                    args: Prisma.ChannelCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChannelCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>[];
                };
                delete: {
                    args: Prisma.ChannelDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
                };
                update: {
                    args: Prisma.ChannelUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
                };
                deleteMany: {
                    args: Prisma.ChannelDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChannelUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChannelUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>[];
                };
                upsert: {
                    args: Prisma.ChannelUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
                };
                aggregate: {
                    args: Prisma.ChannelAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChannel>;
                };
                groupBy: {
                    args: Prisma.ChannelGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChannelGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChannelCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChannelCountAggregateOutputType> | number;
                };
            };
        };
        ChannelMember: {
            payload: Prisma.$ChannelMemberPayload<ExtArgs>;
            fields: Prisma.ChannelMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChannelMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChannelMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
                };
                findFirst: {
                    args: Prisma.ChannelMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChannelMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
                };
                findMany: {
                    args: Prisma.ChannelMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload>[];
                };
                create: {
                    args: Prisma.ChannelMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
                };
                createMany: {
                    args: Prisma.ChannelMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChannelMemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload>[];
                };
                delete: {
                    args: Prisma.ChannelMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
                };
                update: {
                    args: Prisma.ChannelMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.ChannelMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChannelMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChannelMemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload>[];
                };
                upsert: {
                    args: Prisma.ChannelMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
                };
                aggregate: {
                    args: Prisma.ChannelMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChannelMember>;
                };
                groupBy: {
                    args: Prisma.ChannelMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChannelMemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChannelMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChannelMemberCountAggregateOutputType> | number;
                };
            };
        };
        Message: {
            payload: Prisma.$MessagePayload<ExtArgs>;
            fields: Prisma.MessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findFirst: {
                    args: Prisma.MessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findMany: {
                    args: Prisma.MessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                create: {
                    args: Prisma.MessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                createMany: {
                    args: Prisma.MessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                delete: {
                    args: Prisma.MessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                update: {
                    args: Prisma.MessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                upsert: {
                    args: Prisma.MessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                aggregate: {
                    args: Prisma.MessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessage>;
                };
                groupBy: {
                    args: Prisma.MessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageCountAggregateOutputType> | number;
                };
            };
        };
        ChartOfAccount: {
            payload: Prisma.$ChartOfAccountPayload<ExtArgs>;
            fields: Prisma.ChartOfAccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChartOfAccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChartOfAccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload>;
                };
                findFirst: {
                    args: Prisma.ChartOfAccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChartOfAccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload>;
                };
                findMany: {
                    args: Prisma.ChartOfAccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload>[];
                };
                create: {
                    args: Prisma.ChartOfAccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload>;
                };
                createMany: {
                    args: Prisma.ChartOfAccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChartOfAccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload>[];
                };
                delete: {
                    args: Prisma.ChartOfAccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload>;
                };
                update: {
                    args: Prisma.ChartOfAccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload>;
                };
                deleteMany: {
                    args: Prisma.ChartOfAccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChartOfAccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChartOfAccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload>[];
                };
                upsert: {
                    args: Prisma.ChartOfAccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChartOfAccountPayload>;
                };
                aggregate: {
                    args: Prisma.ChartOfAccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChartOfAccount>;
                };
                groupBy: {
                    args: Prisma.ChartOfAccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChartOfAccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChartOfAccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChartOfAccountCountAggregateOutputType> | number;
                };
            };
        };
        JournalEntry: {
            payload: Prisma.$JournalEntryPayload<ExtArgs>;
            fields: Prisma.JournalEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JournalEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JournalEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload>;
                };
                findFirst: {
                    args: Prisma.JournalEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JournalEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload>;
                };
                findMany: {
                    args: Prisma.JournalEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload>[];
                };
                create: {
                    args: Prisma.JournalEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload>;
                };
                createMany: {
                    args: Prisma.JournalEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JournalEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload>[];
                };
                delete: {
                    args: Prisma.JournalEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload>;
                };
                update: {
                    args: Prisma.JournalEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.JournalEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JournalEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JournalEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload>[];
                };
                upsert: {
                    args: Prisma.JournalEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalEntryPayload>;
                };
                aggregate: {
                    args: Prisma.JournalEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJournalEntry>;
                };
                groupBy: {
                    args: Prisma.JournalEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JournalEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JournalEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JournalEntryCountAggregateOutputType> | number;
                };
            };
        };
        JournalLine: {
            payload: Prisma.$JournalLinePayload<ExtArgs>;
            fields: Prisma.JournalLineFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JournalLineFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JournalLineFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload>;
                };
                findFirst: {
                    args: Prisma.JournalLineFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JournalLineFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload>;
                };
                findMany: {
                    args: Prisma.JournalLineFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload>[];
                };
                create: {
                    args: Prisma.JournalLineCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload>;
                };
                createMany: {
                    args: Prisma.JournalLineCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JournalLineCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload>[];
                };
                delete: {
                    args: Prisma.JournalLineDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload>;
                };
                update: {
                    args: Prisma.JournalLineUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload>;
                };
                deleteMany: {
                    args: Prisma.JournalLineDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JournalLineUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JournalLineUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload>[];
                };
                upsert: {
                    args: Prisma.JournalLineUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalLinePayload>;
                };
                aggregate: {
                    args: Prisma.JournalLineAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJournalLine>;
                };
                groupBy: {
                    args: Prisma.JournalLineGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JournalLineGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JournalLineCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JournalLineCountAggregateOutputType> | number;
                };
            };
        };
        FixedAsset: {
            payload: Prisma.$FixedAssetPayload<ExtArgs>;
            fields: Prisma.FixedAssetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FixedAssetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FixedAssetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload>;
                };
                findFirst: {
                    args: Prisma.FixedAssetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FixedAssetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload>;
                };
                findMany: {
                    args: Prisma.FixedAssetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload>[];
                };
                create: {
                    args: Prisma.FixedAssetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload>;
                };
                createMany: {
                    args: Prisma.FixedAssetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FixedAssetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload>[];
                };
                delete: {
                    args: Prisma.FixedAssetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload>;
                };
                update: {
                    args: Prisma.FixedAssetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload>;
                };
                deleteMany: {
                    args: Prisma.FixedAssetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FixedAssetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FixedAssetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload>[];
                };
                upsert: {
                    args: Prisma.FixedAssetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FixedAssetPayload>;
                };
                aggregate: {
                    args: Prisma.FixedAssetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFixedAsset>;
                };
                groupBy: {
                    args: Prisma.FixedAssetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FixedAssetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FixedAssetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FixedAssetCountAggregateOutputType> | number;
                };
            };
        };
        BusinessDocument: {
            payload: Prisma.$BusinessDocumentPayload<ExtArgs>;
            fields: Prisma.BusinessDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BusinessDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BusinessDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.BusinessDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BusinessDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload>;
                };
                findMany: {
                    args: Prisma.BusinessDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload>[];
                };
                create: {
                    args: Prisma.BusinessDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload>;
                };
                createMany: {
                    args: Prisma.BusinessDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BusinessDocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload>[];
                };
                delete: {
                    args: Prisma.BusinessDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload>;
                };
                update: {
                    args: Prisma.BusinessDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.BusinessDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BusinessDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BusinessDocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload>[];
                };
                upsert: {
                    args: Prisma.BusinessDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.BusinessDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBusinessDocument>;
                };
                groupBy: {
                    args: Prisma.BusinessDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusinessDocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BusinessDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusinessDocumentCountAggregateOutputType> | number;
                };
            };
        };
        Customer: {
            payload: Prisma.$CustomerPayload<ExtArgs>;
            fields: Prisma.CustomerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findMany: {
                    args: Prisma.CustomerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                create: {
                    args: Prisma.CustomerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                createMany: {
                    args: Prisma.CustomerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                delete: {
                    args: Prisma.CustomerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                update: {
                    args: Prisma.CustomerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer>;
                };
                groupBy: {
                    args: Prisma.CustomerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerCountAggregateOutputType> | number;
                };
            };
        };
        Invoice: {
            payload: Prisma.$InvoicePayload<ExtArgs>;
            fields: Prisma.InvoiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvoiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                findFirst: {
                    args: Prisma.InvoiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                findMany: {
                    args: Prisma.InvoiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[];
                };
                create: {
                    args: Prisma.InvoiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                createMany: {
                    args: Prisma.InvoiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[];
                };
                delete: {
                    args: Prisma.InvoiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                update: {
                    args: Prisma.InvoiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                deleteMany: {
                    args: Prisma.InvoiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvoiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[];
                };
                upsert: {
                    args: Prisma.InvoiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                aggregate: {
                    args: Prisma.InvoiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvoice>;
                };
                groupBy: {
                    args: Prisma.InvoiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvoiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceCountAggregateOutputType> | number;
                };
            };
        };
        InvoiceItem: {
            payload: Prisma.$InvoiceItemPayload<ExtArgs>;
            fields: Prisma.InvoiceItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvoiceItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvoiceItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                findFirst: {
                    args: Prisma.InvoiceItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvoiceItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                findMany: {
                    args: Prisma.InvoiceItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[];
                };
                create: {
                    args: Prisma.InvoiceItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                createMany: {
                    args: Prisma.InvoiceItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvoiceItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[];
                };
                delete: {
                    args: Prisma.InvoiceItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                update: {
                    args: Prisma.InvoiceItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                deleteMany: {
                    args: Prisma.InvoiceItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvoiceItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvoiceItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[];
                };
                upsert: {
                    args: Prisma.InvoiceItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                aggregate: {
                    args: Prisma.InvoiceItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvoiceItem>;
                };
                groupBy: {
                    args: Prisma.InvoiceItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvoiceItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceItemCountAggregateOutputType> | number;
                };
            };
        };
        PurchaseOrder: {
            payload: Prisma.$PurchaseOrderPayload<ExtArgs>;
            fields: Prisma.PurchaseOrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>;
                };
                findFirst: {
                    args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>;
                };
                findMany: {
                    args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[];
                };
                create: {
                    args: Prisma.PurchaseOrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>;
                };
                createMany: {
                    args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PurchaseOrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[];
                };
                delete: {
                    args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>;
                };
                update: {
                    args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>;
                };
                deleteMany: {
                    args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[];
                };
                upsert: {
                    args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>;
                };
                aggregate: {
                    args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePurchaseOrder>;
                };
                groupBy: {
                    args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PurchaseOrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PurchaseOrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PurchaseOrderCountAggregateOutputType> | number;
                };
            };
        };
        PoLineItem: {
            payload: Prisma.$PoLineItemPayload<ExtArgs>;
            fields: Prisma.PoLineItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PoLineItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PoLineItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload>;
                };
                findFirst: {
                    args: Prisma.PoLineItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PoLineItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload>;
                };
                findMany: {
                    args: Prisma.PoLineItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload>[];
                };
                create: {
                    args: Prisma.PoLineItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload>;
                };
                createMany: {
                    args: Prisma.PoLineItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PoLineItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload>[];
                };
                delete: {
                    args: Prisma.PoLineItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload>;
                };
                update: {
                    args: Prisma.PoLineItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload>;
                };
                deleteMany: {
                    args: Prisma.PoLineItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PoLineItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PoLineItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload>[];
                };
                upsert: {
                    args: Prisma.PoLineItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoLineItemPayload>;
                };
                aggregate: {
                    args: Prisma.PoLineItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePoLineItem>;
                };
                groupBy: {
                    args: Prisma.PoLineItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PoLineItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PoLineItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PoLineItemCountAggregateOutputType> | number;
                };
            };
        };
        Part: {
            payload: Prisma.$PartPayload<ExtArgs>;
            fields: Prisma.PartFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                findFirst: {
                    args: Prisma.PartFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                findMany: {
                    args: Prisma.PartFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>[];
                };
                create: {
                    args: Prisma.PartCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                createMany: {
                    args: Prisma.PartCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>[];
                };
                delete: {
                    args: Prisma.PartDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                update: {
                    args: Prisma.PartUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                deleteMany: {
                    args: Prisma.PartDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>[];
                };
                upsert: {
                    args: Prisma.PartUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                aggregate: {
                    args: Prisma.PartAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePart>;
                };
                groupBy: {
                    args: Prisma.PartGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartCountAggregateOutputType> | number;
                };
            };
        };
        PartMaterial: {
            payload: Prisma.$PartMaterialPayload<ExtArgs>;
            fields: Prisma.PartMaterialFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartMaterialFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartMaterialFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload>;
                };
                findFirst: {
                    args: Prisma.PartMaterialFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartMaterialFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload>;
                };
                findMany: {
                    args: Prisma.PartMaterialFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload>[];
                };
                create: {
                    args: Prisma.PartMaterialCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload>;
                };
                createMany: {
                    args: Prisma.PartMaterialCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartMaterialCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload>[];
                };
                delete: {
                    args: Prisma.PartMaterialDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload>;
                };
                update: {
                    args: Prisma.PartMaterialUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload>;
                };
                deleteMany: {
                    args: Prisma.PartMaterialDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartMaterialUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartMaterialUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload>[];
                };
                upsert: {
                    args: Prisma.PartMaterialUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartMaterialPayload>;
                };
                aggregate: {
                    args: Prisma.PartMaterialAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePartMaterial>;
                };
                groupBy: {
                    args: Prisma.PartMaterialGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartMaterialGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartMaterialCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartMaterialCountAggregateOutputType> | number;
                };
            };
        };
        PartSpecification: {
            payload: Prisma.$PartSpecificationPayload<ExtArgs>;
            fields: Prisma.PartSpecificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartSpecificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartSpecificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload>;
                };
                findFirst: {
                    args: Prisma.PartSpecificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartSpecificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload>;
                };
                findMany: {
                    args: Prisma.PartSpecificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload>[];
                };
                create: {
                    args: Prisma.PartSpecificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload>;
                };
                createMany: {
                    args: Prisma.PartSpecificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartSpecificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload>[];
                };
                delete: {
                    args: Prisma.PartSpecificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload>;
                };
                update: {
                    args: Prisma.PartSpecificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload>;
                };
                deleteMany: {
                    args: Prisma.PartSpecificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartSpecificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartSpecificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload>[];
                };
                upsert: {
                    args: Prisma.PartSpecificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartSpecificationPayload>;
                };
                aggregate: {
                    args: Prisma.PartSpecificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePartSpecification>;
                };
                groupBy: {
                    args: Prisma.PartSpecificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartSpecificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartSpecificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartSpecificationCountAggregateOutputType> | number;
                };
            };
        };
        RoutingTemplate: {
            payload: Prisma.$RoutingTemplatePayload<ExtArgs>;
            fields: Prisma.RoutingTemplateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoutingTemplateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoutingTemplateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload>;
                };
                findFirst: {
                    args: Prisma.RoutingTemplateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoutingTemplateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload>;
                };
                findMany: {
                    args: Prisma.RoutingTemplateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload>[];
                };
                create: {
                    args: Prisma.RoutingTemplateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload>;
                };
                createMany: {
                    args: Prisma.RoutingTemplateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoutingTemplateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload>[];
                };
                delete: {
                    args: Prisma.RoutingTemplateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload>;
                };
                update: {
                    args: Prisma.RoutingTemplateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload>;
                };
                deleteMany: {
                    args: Prisma.RoutingTemplateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoutingTemplateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoutingTemplateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload>[];
                };
                upsert: {
                    args: Prisma.RoutingTemplateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingTemplatePayload>;
                };
                aggregate: {
                    args: Prisma.RoutingTemplateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoutingTemplate>;
                };
                groupBy: {
                    args: Prisma.RoutingTemplateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoutingTemplateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoutingTemplateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoutingTemplateCountAggregateOutputType> | number;
                };
            };
        };
        RoutingStep: {
            payload: Prisma.$RoutingStepPayload<ExtArgs>;
            fields: Prisma.RoutingStepFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoutingStepFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoutingStepFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload>;
                };
                findFirst: {
                    args: Prisma.RoutingStepFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoutingStepFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload>;
                };
                findMany: {
                    args: Prisma.RoutingStepFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload>[];
                };
                create: {
                    args: Prisma.RoutingStepCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload>;
                };
                createMany: {
                    args: Prisma.RoutingStepCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoutingStepCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload>[];
                };
                delete: {
                    args: Prisma.RoutingStepDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload>;
                };
                update: {
                    args: Prisma.RoutingStepUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload>;
                };
                deleteMany: {
                    args: Prisma.RoutingStepDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoutingStepUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoutingStepUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload>[];
                };
                upsert: {
                    args: Prisma.RoutingStepUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutingStepPayload>;
                };
                aggregate: {
                    args: Prisma.RoutingStepAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoutingStep>;
                };
                groupBy: {
                    args: Prisma.RoutingStepGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoutingStepGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoutingStepCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoutingStepCountAggregateOutputType> | number;
                };
            };
        };
        Machine: {
            payload: Prisma.$MachinePayload<ExtArgs>;
            fields: Prisma.MachineFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MachineFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MachineFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload>;
                };
                findFirst: {
                    args: Prisma.MachineFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MachineFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload>;
                };
                findMany: {
                    args: Prisma.MachineFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload>[];
                };
                create: {
                    args: Prisma.MachineCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload>;
                };
                createMany: {
                    args: Prisma.MachineCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MachineCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload>[];
                };
                delete: {
                    args: Prisma.MachineDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload>;
                };
                update: {
                    args: Prisma.MachineUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload>;
                };
                deleteMany: {
                    args: Prisma.MachineDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MachineUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MachineUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload>[];
                };
                upsert: {
                    args: Prisma.MachineUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MachinePayload>;
                };
                aggregate: {
                    args: Prisma.MachineAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMachine>;
                };
                groupBy: {
                    args: Prisma.MachineGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MachineGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MachineCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MachineCountAggregateOutputType> | number;
                };
            };
        };
        JobCard: {
            payload: Prisma.$JobCardPayload<ExtArgs>;
            fields: Prisma.JobCardFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JobCardFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JobCardFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload>;
                };
                findFirst: {
                    args: Prisma.JobCardFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JobCardFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload>;
                };
                findMany: {
                    args: Prisma.JobCardFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload>[];
                };
                create: {
                    args: Prisma.JobCardCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload>;
                };
                createMany: {
                    args: Prisma.JobCardCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JobCardCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload>[];
                };
                delete: {
                    args: Prisma.JobCardDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload>;
                };
                update: {
                    args: Prisma.JobCardUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload>;
                };
                deleteMany: {
                    args: Prisma.JobCardDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JobCardUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JobCardUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload>[];
                };
                upsert: {
                    args: Prisma.JobCardUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobCardPayload>;
                };
                aggregate: {
                    args: Prisma.JobCardAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJobCard>;
                };
                groupBy: {
                    args: Prisma.JobCardGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobCardGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JobCardCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobCardCountAggregateOutputType> | number;
                };
            };
        };
        JobList: {
            payload: Prisma.$JobListPayload<ExtArgs>;
            fields: Prisma.JobListFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JobListFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JobListFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload>;
                };
                findFirst: {
                    args: Prisma.JobListFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JobListFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload>;
                };
                findMany: {
                    args: Prisma.JobListFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload>[];
                };
                create: {
                    args: Prisma.JobListCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload>;
                };
                createMany: {
                    args: Prisma.JobListCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JobListCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload>[];
                };
                delete: {
                    args: Prisma.JobListDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload>;
                };
                update: {
                    args: Prisma.JobListUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload>;
                };
                deleteMany: {
                    args: Prisma.JobListDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JobListUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JobListUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload>[];
                };
                upsert: {
                    args: Prisma.JobListUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobListPayload>;
                };
                aggregate: {
                    args: Prisma.JobListAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJobList>;
                };
                groupBy: {
                    args: Prisma.JobListGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobListGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JobListCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobListCountAggregateOutputType> | number;
                };
            };
        };
        JobMaterial: {
            payload: Prisma.$JobMaterialPayload<ExtArgs>;
            fields: Prisma.JobMaterialFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JobMaterialFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JobMaterialFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload>;
                };
                findFirst: {
                    args: Prisma.JobMaterialFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JobMaterialFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload>;
                };
                findMany: {
                    args: Prisma.JobMaterialFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload>[];
                };
                create: {
                    args: Prisma.JobMaterialCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload>;
                };
                createMany: {
                    args: Prisma.JobMaterialCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JobMaterialCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload>[];
                };
                delete: {
                    args: Prisma.JobMaterialDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload>;
                };
                update: {
                    args: Prisma.JobMaterialUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload>;
                };
                deleteMany: {
                    args: Prisma.JobMaterialDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JobMaterialUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JobMaterialUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload>[];
                };
                upsert: {
                    args: Prisma.JobMaterialUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobMaterialPayload>;
                };
                aggregate: {
                    args: Prisma.JobMaterialAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJobMaterial>;
                };
                groupBy: {
                    args: Prisma.JobMaterialGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobMaterialGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JobMaterialCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobMaterialCountAggregateOutputType> | number;
                };
            };
        };
        Operation: {
            payload: Prisma.$OperationPayload<ExtArgs>;
            fields: Prisma.OperationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OperationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                findFirst: {
                    args: Prisma.OperationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                findMany: {
                    args: Prisma.OperationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[];
                };
                create: {
                    args: Prisma.OperationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                createMany: {
                    args: Prisma.OperationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[];
                };
                delete: {
                    args: Prisma.OperationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                update: {
                    args: Prisma.OperationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                deleteMany: {
                    args: Prisma.OperationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OperationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OperationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[];
                };
                upsert: {
                    args: Prisma.OperationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                aggregate: {
                    args: Prisma.OperationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOperation>;
                };
                groupBy: {
                    args: Prisma.OperationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OperationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OperationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OperationCountAggregateOutputType> | number;
                };
            };
        };
        QcLog: {
            payload: Prisma.$QcLogPayload<ExtArgs>;
            fields: Prisma.QcLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QcLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QcLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload>;
                };
                findFirst: {
                    args: Prisma.QcLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QcLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload>;
                };
                findMany: {
                    args: Prisma.QcLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload>[];
                };
                create: {
                    args: Prisma.QcLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload>;
                };
                createMany: {
                    args: Prisma.QcLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QcLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload>[];
                };
                delete: {
                    args: Prisma.QcLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload>;
                };
                update: {
                    args: Prisma.QcLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload>;
                };
                deleteMany: {
                    args: Prisma.QcLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QcLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QcLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload>[];
                };
                upsert: {
                    args: Prisma.QcLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcLogPayload>;
                };
                aggregate: {
                    args: Prisma.QcLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQcLog>;
                };
                groupBy: {
                    args: Prisma.QcLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QcLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QcLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QcLogCountAggregateOutputType> | number;
                };
            };
        };
        QcFinding: {
            payload: Prisma.$QcFindingPayload<ExtArgs>;
            fields: Prisma.QcFindingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QcFindingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QcFindingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload>;
                };
                findFirst: {
                    args: Prisma.QcFindingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QcFindingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload>;
                };
                findMany: {
                    args: Prisma.QcFindingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload>[];
                };
                create: {
                    args: Prisma.QcFindingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload>;
                };
                createMany: {
                    args: Prisma.QcFindingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QcFindingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload>[];
                };
                delete: {
                    args: Prisma.QcFindingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload>;
                };
                update: {
                    args: Prisma.QcFindingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload>;
                };
                deleteMany: {
                    args: Prisma.QcFindingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QcFindingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QcFindingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload>[];
                };
                upsert: {
                    args: Prisma.QcFindingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QcFindingPayload>;
                };
                aggregate: {
                    args: Prisma.QcFindingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQcFinding>;
                };
                groupBy: {
                    args: Prisma.QcFindingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QcFindingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QcFindingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QcFindingCountAggregateOutputType> | number;
                };
            };
        };
        CheckSheet: {
            payload: Prisma.$CheckSheetPayload<ExtArgs>;
            fields: Prisma.CheckSheetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CheckSheetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CheckSheetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload>;
                };
                findFirst: {
                    args: Prisma.CheckSheetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CheckSheetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload>;
                };
                findMany: {
                    args: Prisma.CheckSheetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload>[];
                };
                create: {
                    args: Prisma.CheckSheetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload>;
                };
                createMany: {
                    args: Prisma.CheckSheetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CheckSheetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload>[];
                };
                delete: {
                    args: Prisma.CheckSheetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload>;
                };
                update: {
                    args: Prisma.CheckSheetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload>;
                };
                deleteMany: {
                    args: Prisma.CheckSheetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CheckSheetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CheckSheetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload>[];
                };
                upsert: {
                    args: Prisma.CheckSheetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetPayload>;
                };
                aggregate: {
                    args: Prisma.CheckSheetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCheckSheet>;
                };
                groupBy: {
                    args: Prisma.CheckSheetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CheckSheetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CheckSheetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CheckSheetCountAggregateOutputType> | number;
                };
            };
        };
        CheckSheetRow: {
            payload: Prisma.$CheckSheetRowPayload<ExtArgs>;
            fields: Prisma.CheckSheetRowFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CheckSheetRowFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CheckSheetRowFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload>;
                };
                findFirst: {
                    args: Prisma.CheckSheetRowFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CheckSheetRowFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload>;
                };
                findMany: {
                    args: Prisma.CheckSheetRowFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload>[];
                };
                create: {
                    args: Prisma.CheckSheetRowCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload>;
                };
                createMany: {
                    args: Prisma.CheckSheetRowCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CheckSheetRowCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload>[];
                };
                delete: {
                    args: Prisma.CheckSheetRowDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload>;
                };
                update: {
                    args: Prisma.CheckSheetRowUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload>;
                };
                deleteMany: {
                    args: Prisma.CheckSheetRowDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CheckSheetRowUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CheckSheetRowUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload>[];
                };
                upsert: {
                    args: Prisma.CheckSheetRowUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckSheetRowPayload>;
                };
                aggregate: {
                    args: Prisma.CheckSheetRowAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCheckSheetRow>;
                };
                groupBy: {
                    args: Prisma.CheckSheetRowGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CheckSheetRowGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CheckSheetRowCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CheckSheetRowCountAggregateOutputType> | number;
                };
            };
        };
        Material: {
            payload: Prisma.$MaterialPayload<ExtArgs>;
            fields: Prisma.MaterialFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MaterialFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                findFirst: {
                    args: Prisma.MaterialFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                findMany: {
                    args: Prisma.MaterialFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>[];
                };
                create: {
                    args: Prisma.MaterialCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                createMany: {
                    args: Prisma.MaterialCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>[];
                };
                delete: {
                    args: Prisma.MaterialDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                update: {
                    args: Prisma.MaterialUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                deleteMany: {
                    args: Prisma.MaterialDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MaterialUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>[];
                };
                upsert: {
                    args: Prisma.MaterialUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                aggregate: {
                    args: Prisma.MaterialAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMaterial>;
                };
                groupBy: {
                    args: Prisma.MaterialGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaterialGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MaterialCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaterialCountAggregateOutputType> | number;
                };
            };
        };
        MaterialUsage: {
            payload: Prisma.$MaterialUsagePayload<ExtArgs>;
            fields: Prisma.MaterialUsageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MaterialUsageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MaterialUsageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload>;
                };
                findFirst: {
                    args: Prisma.MaterialUsageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MaterialUsageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload>;
                };
                findMany: {
                    args: Prisma.MaterialUsageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload>[];
                };
                create: {
                    args: Prisma.MaterialUsageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload>;
                };
                createMany: {
                    args: Prisma.MaterialUsageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MaterialUsageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload>[];
                };
                delete: {
                    args: Prisma.MaterialUsageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload>;
                };
                update: {
                    args: Prisma.MaterialUsageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload>;
                };
                deleteMany: {
                    args: Prisma.MaterialUsageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MaterialUsageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MaterialUsageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload>[];
                };
                upsert: {
                    args: Prisma.MaterialUsageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialUsagePayload>;
                };
                aggregate: {
                    args: Prisma.MaterialUsageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMaterialUsage>;
                };
                groupBy: {
                    args: Prisma.MaterialUsageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaterialUsageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MaterialUsageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaterialUsageCountAggregateOutputType> | number;
                };
            };
        };
        StockAdjustment: {
            payload: Prisma.$StockAdjustmentPayload<ExtArgs>;
            fields: Prisma.StockAdjustmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StockAdjustmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StockAdjustmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>;
                };
                findFirst: {
                    args: Prisma.StockAdjustmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StockAdjustmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>;
                };
                findMany: {
                    args: Prisma.StockAdjustmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>[];
                };
                create: {
                    args: Prisma.StockAdjustmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>;
                };
                createMany: {
                    args: Prisma.StockAdjustmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StockAdjustmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>[];
                };
                delete: {
                    args: Prisma.StockAdjustmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>;
                };
                update: {
                    args: Prisma.StockAdjustmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>;
                };
                deleteMany: {
                    args: Prisma.StockAdjustmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StockAdjustmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StockAdjustmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>[];
                };
                upsert: {
                    args: Prisma.StockAdjustmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>;
                };
                aggregate: {
                    args: Prisma.StockAdjustmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStockAdjustment>;
                };
                groupBy: {
                    args: Prisma.StockAdjustmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StockAdjustmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StockAdjustmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StockAdjustmentCountAggregateOutputType> | number;
                };
            };
        };
        Supplier: {
            payload: Prisma.$SupplierPayload<ExtArgs>;
            fields: Prisma.SupplierFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                findFirst: {
                    args: Prisma.SupplierFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                findMany: {
                    args: Prisma.SupplierFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>[];
                };
                create: {
                    args: Prisma.SupplierCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                createMany: {
                    args: Prisma.SupplierCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>[];
                };
                delete: {
                    args: Prisma.SupplierDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                update: {
                    args: Prisma.SupplierUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>[];
                };
                upsert: {
                    args: Prisma.SupplierUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                aggregate: {
                    args: Prisma.SupplierAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplier>;
                };
                groupBy: {
                    args: Prisma.SupplierGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly drawingId: "drawingId";
    readonly createdAt: "createdAt";
    readonly materialId: "materialId";
};
export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum];
export declare const PartMaterialScalarFieldEnum: {
    readonly id: "id";
    readonly partId: "partId";
    readonly materialId: "materialId";
    readonly ratio: "ratio";
};
export type PartMaterialScalarFieldEnum = (typeof PartMaterialScalarFieldEnum)[keyof typeof PartMaterialScalarFieldEnum];
export declare const PartSpecificationScalarFieldEnum: {
    readonly id: "id";
    readonly partId: "partId";
    readonly length: "length";
    readonly width: "width";
    readonly height: "height";
    readonly weight: "weight";
    readonly unit: "unit";
    readonly tolerance: "tolerance";
    readonly surfaceFinish: "surfaceFinish";
    readonly otherSpecs: "otherSpecs";
};
export type PartSpecificationScalarFieldEnum = (typeof PartSpecificationScalarFieldEnum)[keyof typeof PartSpecificationScalarFieldEnum];
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
    readonly defaultMachineId: "defaultMachineId";
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
/**
 * Reference to a field of type 'AccountType'
 */
export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>;
/**
 * Reference to a field of type 'AccountType[]'
 */
export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DocumentType'
 */
export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>;
/**
 * Reference to a field of type 'DocumentType[]'
 */
export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'InvoiceStatus'
 */
export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>;
/**
 * Reference to a field of type 'InvoiceStatus[]'
 */
export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'CastingType'
 */
export type EnumCastingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CastingType'>;
/**
 * Reference to a field of type 'CastingType[]'
 */
export type ListEnumCastingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CastingType[]'>;
/**
 * Reference to a field of type 'JobCardStatus'
 */
export type EnumJobCardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobCardStatus'>;
/**
 * Reference to a field of type 'JobCardStatus[]'
 */
export type ListEnumJobCardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobCardStatus[]'>;
/**
 * Reference to a field of type 'OperationStatus'
 */
export type EnumOperationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationStatus'>;
/**
 * Reference to a field of type 'OperationStatus[]'
 */
export type ListEnumOperationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationStatus[]'>;
/**
 * Reference to a field of type 'QcResult'
 */
export type EnumQcResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QcResult'>;
/**
 * Reference to a field of type 'QcResult[]'
 */
export type ListEnumQcResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QcResult[]'>;
/**
 * Reference to a field of type 'FindingCategory'
 */
export type EnumFindingCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FindingCategory'>;
/**
 * Reference to a field of type 'FindingCategory[]'
 */
export type ListEnumFindingCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FindingCategory[]'>;
/**
 * Reference to a field of type 'CheckSheetType'
 */
export type EnumCheckSheetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckSheetType'>;
/**
 * Reference to a field of type 'CheckSheetType[]'
 */
export type ListEnumCheckSheetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckSheetType[]'>;
/**
 * Reference to a field of type 'MaterialUnit'
 */
export type EnumMaterialUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaterialUnit'>;
/**
 * Reference to a field of type 'MaterialUnit[]'
 */
export type ListEnumMaterialUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaterialUnit[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    session?: Prisma.SessionOmit;
    account?: Prisma.AccountOmit;
    verification?: Prisma.VerificationOmit;
    channel?: Prisma.ChannelOmit;
    channelMember?: Prisma.ChannelMemberOmit;
    message?: Prisma.MessageOmit;
    chartOfAccount?: Prisma.ChartOfAccountOmit;
    journalEntry?: Prisma.JournalEntryOmit;
    journalLine?: Prisma.JournalLineOmit;
    fixedAsset?: Prisma.FixedAssetOmit;
    businessDocument?: Prisma.BusinessDocumentOmit;
    customer?: Prisma.CustomerOmit;
    invoice?: Prisma.InvoiceOmit;
    invoiceItem?: Prisma.InvoiceItemOmit;
    purchaseOrder?: Prisma.PurchaseOrderOmit;
    poLineItem?: Prisma.PoLineItemOmit;
    part?: Prisma.PartOmit;
    partMaterial?: Prisma.PartMaterialOmit;
    partSpecification?: Prisma.PartSpecificationOmit;
    routingTemplate?: Prisma.RoutingTemplateOmit;
    routingStep?: Prisma.RoutingStepOmit;
    machine?: Prisma.MachineOmit;
    jobCard?: Prisma.JobCardOmit;
    jobList?: Prisma.JobListOmit;
    jobMaterial?: Prisma.JobMaterialOmit;
    operation?: Prisma.OperationOmit;
    qcLog?: Prisma.QcLogOmit;
    qcFinding?: Prisma.QcFindingOmit;
    checkSheet?: Prisma.CheckSheetOmit;
    checkSheetRow?: Prisma.CheckSheetRowOmit;
    material?: Prisma.MaterialOmit;
    materialUsage?: Prisma.MaterialUsageOmit;
    stockAdjustment?: Prisma.StockAdjustmentOmit;
    supplier?: Prisma.SupplierOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
