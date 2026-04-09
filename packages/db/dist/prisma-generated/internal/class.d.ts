import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.session`: Exposes CRUD operations for the **Session** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sessions
      * const sessions = await prisma.session.findMany()
      * ```
      */
    get session(): Prisma.SessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.account`: Exposes CRUD operations for the **Account** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Accounts
      * const accounts = await prisma.account.findMany()
      * ```
      */
    get account(): Prisma.AccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Verifications
      * const verifications = await prisma.verification.findMany()
      * ```
      */
    get verification(): Prisma.VerificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Channels
      * const channels = await prisma.channel.findMany()
      * ```
      */
    get channel(): Prisma.ChannelDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.channelMember`: Exposes CRUD operations for the **ChannelMember** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ChannelMembers
      * const channelMembers = await prisma.channelMember.findMany()
      * ```
      */
    get channelMember(): Prisma.ChannelMemberDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.message`: Exposes CRUD operations for the **Message** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Messages
      * const messages = await prisma.message.findMany()
      * ```
      */
    get message(): Prisma.MessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.accounting`: Exposes CRUD operations for the **Accounting** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Accountings
      * const accountings = await prisma.accounting.findMany()
      * ```
      */
    get accounting(): Prisma.AccountingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.journalEntry`: Exposes CRUD operations for the **JournalEntry** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more JournalEntries
      * const journalEntries = await prisma.journalEntry.findMany()
      * ```
      */
    get journalEntry(): Prisma.JournalEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.journalLine`: Exposes CRUD operations for the **JournalLine** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more JournalLines
      * const journalLines = await prisma.journalLine.findMany()
      * ```
      */
    get journalLine(): Prisma.JournalLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Invoices
      * const invoices = await prisma.invoice.findMany()
      * ```
      */
    get invoice(): Prisma.InvoiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.invoiceLine`: Exposes CRUD operations for the **InvoiceLine** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more InvoiceLines
      * const invoiceLines = await prisma.invoiceLine.findMany()
      * ```
      */
    get invoiceLine(): Prisma.InvoiceLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Bills
      * const bills = await prisma.bill.findMany()
      * ```
      */
    get bill(): Prisma.BillDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.billLine`: Exposes CRUD operations for the **BillLine** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BillLines
      * const billLines = await prisma.billLine.findMany()
      * ```
      */
    get billLine(): Prisma.BillLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payrollRun`: Exposes CRUD operations for the **PayrollRun** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PayrollRuns
      * const payrollRuns = await prisma.payrollRun.findMany()
      * ```
      */
    get payrollRun(): Prisma.PayrollRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payrollEntry`: Exposes CRUD operations for the **PayrollEntry** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PayrollEntries
      * const payrollEntries = await prisma.payrollEntry.findMany()
      * ```
      */
    get payrollEntry(): Prisma.PayrollEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.taxCode`: Exposes CRUD operations for the **TaxCode** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TaxCodes
      * const taxCodes = await prisma.taxCode.findMany()
      * ```
      */
    get taxCode(): Prisma.TaxCodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Customers
      * const customers = await prisma.customer.findMany()
      * ```
      */
    get customer(): Prisma.CustomerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Vendors
      * const vendors = await prisma.vendor.findMany()
      * ```
      */
    get vendor(): Prisma.VendorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
