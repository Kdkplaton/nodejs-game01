
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Items
 * 
 */
export type Items = $Result.DefaultSelection<Prisma.$ItemsPayload>
/**
 * Model Item_stat
 * 
 */
export type Item_stat = $Result.DefaultSelection<Prisma.$Item_statPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.items.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Items
   * const items = await prisma.items.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.items`: Exposes CRUD operations for the **Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.ItemsDelegate<ExtArgs>;

  /**
   * `prisma.item_stat`: Exposes CRUD operations for the **Item_stat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_stats
    * const item_stats = await prisma.item_stat.findMany()
    * ```
    */
  get item_stat(): Prisma.Item_statDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Items: 'Items',
    Item_stat: 'Item_stat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'items' | 'item_stat'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Items: {
        payload: Prisma.$ItemsPayload<ExtArgs>
        fields: Prisma.ItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findFirst: {
            args: Prisma.ItemsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findMany: {
            args: Prisma.ItemsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          create: {
            args: Prisma.ItemsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          createMany: {
            args: Prisma.ItemsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          update: {
            args: Prisma.ItemsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          deleteMany: {
            args: Prisma.ItemsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.ItemsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemsCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
          }
        }
      }
      Item_stat: {
        payload: Prisma.$Item_statPayload<ExtArgs>
        fields: Prisma.Item_statFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Item_statFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_statPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Item_statFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_statPayload>
          }
          findFirst: {
            args: Prisma.Item_statFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_statPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Item_statFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_statPayload>
          }
          findMany: {
            args: Prisma.Item_statFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_statPayload>[]
          }
          create: {
            args: Prisma.Item_statCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_statPayload>
          }
          createMany: {
            args: Prisma.Item_statCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Item_statDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_statPayload>
          }
          update: {
            args: Prisma.Item_statUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_statPayload>
          }
          deleteMany: {
            args: Prisma.Item_statDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Item_statUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Item_statUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_statPayload>
          }
          aggregate: {
            args: Prisma.Item_statAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItem_stat>
          }
          groupBy: {
            args: Prisma.Item_statGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Item_statGroupByOutputType>[]
          }
          count: {
            args: Prisma.Item_statCountArgs<ExtArgs>,
            result: $Utils.Optional<Item_statCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsAvgAggregateOutputType = {
    itemId: number | null
  }

  export type ItemsSumAggregateOutputType = {
    itemId: number | null
  }

  export type ItemsMinAggregateOutputType = {
    itemId: number | null
    name: string | null
    stat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemsMaxAggregateOutputType = {
    itemId: number | null
    name: string | null
    stat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemsCountAggregateOutputType = {
    itemId: number
    name: number
    stat: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemsAvgAggregateInputType = {
    itemId?: true
  }

  export type ItemsSumAggregateInputType = {
    itemId?: true
  }

  export type ItemsMinAggregateInputType = {
    itemId?: true
    name?: true
    stat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemsMaxAggregateInputType = {
    itemId?: true
    name?: true
    stat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemsCountAggregateInputType = {
    itemId?: true
    name?: true
    stat?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to aggregate.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type ItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithAggregationInput | ItemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _avg?: ItemsAvgAggregateInputType
    _sum?: ItemsSumAggregateInputType
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    itemId: number
    name: string
    stat: string
    createdAt: Date
    updatedAt: Date
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends ItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type ItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    name?: boolean
    stat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Item_stat?: boolean | Items$Item_statArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectScalar = {
    itemId?: boolean
    name?: boolean
    stat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item_stat?: boolean | Items$Item_statArgs<ExtArgs>
  }


  export type $ItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Items"
    objects: {
      Item_stat: Prisma.$Item_statPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: number
      name: string
      stat: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["items"]>
    composites: {}
  }


  type ItemsGetPayload<S extends boolean | null | undefined | ItemsDefaultArgs> = $Result.GetResult<Prisma.$ItemsPayload, S>

  type ItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface ItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Items'], meta: { name: 'Items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {ItemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsFindFirstArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const itemsWithItemIdOnly = await prisma.items.findMany({ select: { itemId: true } })
     * 
    **/
    findMany<T extends ItemsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Items.
     * @param {ItemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
    **/
    create<T extends ItemsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsCreateArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Items.
     * @param {ItemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ItemsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Items.
     * @param {ItemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
    **/
    delete<T extends ItemsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsDeleteArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Items.
     * @param {ItemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsUpdateArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Items.
     * @param {ItemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
    **/
    upsert<T extends ItemsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsUpsertArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemsCountArgs>(
      args?: Subset<T, ItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsGroupByArgs['orderBy'] }
        : { orderBy?: ItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Items model
   */
  readonly fields: ItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Item_stat<T extends Items$Item_statArgs<ExtArgs> = {}>(args?: Subset<T, Items$Item_statArgs<ExtArgs>>): Prisma__Item_statClient<$Result.GetResult<Prisma.$Item_statPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Items model
   */ 
  interface ItemsFieldRefs {
    readonly itemId: FieldRef<"Items", 'Int'>
    readonly name: FieldRef<"Items", 'String'>
    readonly stat: FieldRef<"Items", 'String'>
    readonly createdAt: FieldRef<"Items", 'DateTime'>
    readonly updatedAt: FieldRef<"Items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Items findUnique
   */
  export type ItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findUniqueOrThrow
   */
  export type ItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findFirst
   */
  export type ItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findFirstOrThrow
   */
  export type ItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findMany
   */
  export type ItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items create
   */
  export type ItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a Items.
     */
    data: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
  }

  /**
   * Items createMany
   */
  export type ItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemsCreateManyInput | ItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Items update
   */
  export type ItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a Items.
     */
    data: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
    /**
     * Choose, which Items to update.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items updateMany
   */
  export type ItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemsWhereInput
  }

  /**
   * Items upsert
   */
  export type ItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the Items to update in case it exists.
     */
    where: ItemsWhereUniqueInput
    /**
     * In case the Items found by the `where` argument doesn't exist, create a new Items with this data.
     */
    create: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
    /**
     * In case the Items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
  }

  /**
   * Items delete
   */
  export type ItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter which Items to delete.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items deleteMany
   */
  export type ItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemsWhereInput
  }

  /**
   * Items.Item_stat
   */
  export type Items$Item_statArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
    where?: Item_statWhereInput
  }

  /**
   * Items without action
   */
  export type ItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
  }


  /**
   * Model Item_stat
   */

  export type AggregateItem_stat = {
    _count: Item_statCountAggregateOutputType | null
    _avg: Item_statAvgAggregateOutputType | null
    _sum: Item_statSumAggregateOutputType | null
    _min: Item_statMinAggregateOutputType | null
    _max: Item_statMaxAggregateOutputType | null
  }

  export type Item_statAvgAggregateOutputType = {
    statId: number | null
    ItemId: number | null
    health: number | null
    attack: number | null
  }

  export type Item_statSumAggregateOutputType = {
    statId: number | null
    ItemId: number | null
    health: number | null
    attack: number | null
  }

  export type Item_statMinAggregateOutputType = {
    statId: number | null
    ItemId: number | null
    health: number | null
    attack: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Item_statMaxAggregateOutputType = {
    statId: number | null
    ItemId: number | null
    health: number | null
    attack: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Item_statCountAggregateOutputType = {
    statId: number
    ItemId: number
    health: number
    attack: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Item_statAvgAggregateInputType = {
    statId?: true
    ItemId?: true
    health?: true
    attack?: true
  }

  export type Item_statSumAggregateInputType = {
    statId?: true
    ItemId?: true
    health?: true
    attack?: true
  }

  export type Item_statMinAggregateInputType = {
    statId?: true
    ItemId?: true
    health?: true
    attack?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Item_statMaxAggregateInputType = {
    statId?: true
    ItemId?: true
    health?: true
    attack?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Item_statCountAggregateInputType = {
    statId?: true
    ItemId?: true
    health?: true
    attack?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Item_statAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item_stat to aggregate.
     */
    where?: Item_statWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_stats to fetch.
     */
    orderBy?: Item_statOrderByWithRelationInput | Item_statOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Item_statWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Item_stats
    **/
    _count?: true | Item_statCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Item_statAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Item_statSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_statMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_statMaxAggregateInputType
  }

  export type GetItem_statAggregateType<T extends Item_statAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_stat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_stat[P]>
      : GetScalarType<T[P], AggregateItem_stat[P]>
  }




  export type Item_statGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Item_statWhereInput
    orderBy?: Item_statOrderByWithAggregationInput | Item_statOrderByWithAggregationInput[]
    by: Item_statScalarFieldEnum[] | Item_statScalarFieldEnum
    having?: Item_statScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_statCountAggregateInputType | true
    _avg?: Item_statAvgAggregateInputType
    _sum?: Item_statSumAggregateInputType
    _min?: Item_statMinAggregateInputType
    _max?: Item_statMaxAggregateInputType
  }

  export type Item_statGroupByOutputType = {
    statId: number
    ItemId: number
    health: number | null
    attack: number | null
    createdAt: Date
    updatedAt: Date
    _count: Item_statCountAggregateOutputType | null
    _avg: Item_statAvgAggregateOutputType | null
    _sum: Item_statSumAggregateOutputType | null
    _min: Item_statMinAggregateOutputType | null
    _max: Item_statMaxAggregateOutputType | null
  }

  type GetItem_statGroupByPayload<T extends Item_statGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_statGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_statGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_statGroupByOutputType[P]>
            : GetScalarType<T[P], Item_statGroupByOutputType[P]>
        }
      >
    >


  export type Item_statSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    statId?: boolean
    ItemId?: boolean
    health?: boolean
    attack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | ItemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_stat"]>

  export type Item_statSelectScalar = {
    statId?: boolean
    ItemId?: boolean
    health?: boolean
    attack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type Item_statInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemsDefaultArgs<ExtArgs>
  }


  export type $Item_statPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item_stat"
    objects: {
      item: Prisma.$ItemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      statId: number
      ItemId: number
      health: number | null
      attack: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item_stat"]>
    composites: {}
  }


  type Item_statGetPayload<S extends boolean | null | undefined | Item_statDefaultArgs> = $Result.GetResult<Prisma.$Item_statPayload, S>

  type Item_statCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Item_statFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Item_statCountAggregateInputType | true
    }

  export interface Item_statDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item_stat'], meta: { name: 'Item_stat' } }
    /**
     * Find zero or one Item_stat that matches the filter.
     * @param {Item_statFindUniqueArgs} args - Arguments to find a Item_stat
     * @example
     * // Get one Item_stat
     * const item_stat = await prisma.item_stat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Item_statFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Item_statFindUniqueArgs<ExtArgs>>
    ): Prisma__Item_statClient<$Result.GetResult<Prisma.$Item_statPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Item_stat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Item_statFindUniqueOrThrowArgs} args - Arguments to find a Item_stat
     * @example
     * // Get one Item_stat
     * const item_stat = await prisma.item_stat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Item_statFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_statFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Item_statClient<$Result.GetResult<Prisma.$Item_statPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Item_stat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_statFindFirstArgs} args - Arguments to find a Item_stat
     * @example
     * // Get one Item_stat
     * const item_stat = await prisma.item_stat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Item_statFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_statFindFirstArgs<ExtArgs>>
    ): Prisma__Item_statClient<$Result.GetResult<Prisma.$Item_statPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Item_stat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_statFindFirstOrThrowArgs} args - Arguments to find a Item_stat
     * @example
     * // Get one Item_stat
     * const item_stat = await prisma.item_stat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Item_statFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_statFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Item_statClient<$Result.GetResult<Prisma.$Item_statPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Item_stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_statFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_stats
     * const item_stats = await prisma.item_stat.findMany()
     * 
     * // Get first 10 Item_stats
     * const item_stats = await prisma.item_stat.findMany({ take: 10 })
     * 
     * // Only select the `statId`
     * const item_statWithStatIdOnly = await prisma.item_stat.findMany({ select: { statId: true } })
     * 
    **/
    findMany<T extends Item_statFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_statFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_statPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Item_stat.
     * @param {Item_statCreateArgs} args - Arguments to create a Item_stat.
     * @example
     * // Create one Item_stat
     * const Item_stat = await prisma.item_stat.create({
     *   data: {
     *     // ... data to create a Item_stat
     *   }
     * })
     * 
    **/
    create<T extends Item_statCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Item_statCreateArgs<ExtArgs>>
    ): Prisma__Item_statClient<$Result.GetResult<Prisma.$Item_statPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Item_stats.
     * @param {Item_statCreateManyArgs} args - Arguments to create many Item_stats.
     * @example
     * // Create many Item_stats
     * const item_stat = await prisma.item_stat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends Item_statCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_statCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item_stat.
     * @param {Item_statDeleteArgs} args - Arguments to delete one Item_stat.
     * @example
     * // Delete one Item_stat
     * const Item_stat = await prisma.item_stat.delete({
     *   where: {
     *     // ... filter to delete one Item_stat
     *   }
     * })
     * 
    **/
    delete<T extends Item_statDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Item_statDeleteArgs<ExtArgs>>
    ): Prisma__Item_statClient<$Result.GetResult<Prisma.$Item_statPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Item_stat.
     * @param {Item_statUpdateArgs} args - Arguments to update one Item_stat.
     * @example
     * // Update one Item_stat
     * const item_stat = await prisma.item_stat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Item_statUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Item_statUpdateArgs<ExtArgs>>
    ): Prisma__Item_statClient<$Result.GetResult<Prisma.$Item_statPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Item_stats.
     * @param {Item_statDeleteManyArgs} args - Arguments to filter Item_stats to delete.
     * @example
     * // Delete a few Item_stats
     * const { count } = await prisma.item_stat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Item_statDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_statDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_statUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_stats
     * const item_stat = await prisma.item_stat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Item_statUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Item_statUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item_stat.
     * @param {Item_statUpsertArgs} args - Arguments to update or create a Item_stat.
     * @example
     * // Update or create a Item_stat
     * const item_stat = await prisma.item_stat.upsert({
     *   create: {
     *     // ... data to create a Item_stat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_stat we want to update
     *   }
     * })
    **/
    upsert<T extends Item_statUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Item_statUpsertArgs<ExtArgs>>
    ): Prisma__Item_statClient<$Result.GetResult<Prisma.$Item_statPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Item_stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_statCountArgs} args - Arguments to filter Item_stats to count.
     * @example
     * // Count the number of Item_stats
     * const count = await prisma.item_stat.count({
     *   where: {
     *     // ... the filter for the Item_stats we want to count
     *   }
     * })
    **/
    count<T extends Item_statCountArgs>(
      args?: Subset<T, Item_statCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_statCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_stat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_statAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Item_statAggregateArgs>(args: Subset<T, Item_statAggregateArgs>): Prisma.PrismaPromise<GetItem_statAggregateType<T>>

    /**
     * Group by Item_stat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_statGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Item_statGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Item_statGroupByArgs['orderBy'] }
        : { orderBy?: Item_statGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Item_statGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_statGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item_stat model
   */
  readonly fields: Item_statFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item_stat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Item_statClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    item<T extends ItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemsDefaultArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Item_stat model
   */ 
  interface Item_statFieldRefs {
    readonly statId: FieldRef<"Item_stat", 'Int'>
    readonly ItemId: FieldRef<"Item_stat", 'Int'>
    readonly health: FieldRef<"Item_stat", 'Int'>
    readonly attack: FieldRef<"Item_stat", 'Int'>
    readonly createdAt: FieldRef<"Item_stat", 'DateTime'>
    readonly updatedAt: FieldRef<"Item_stat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item_stat findUnique
   */
  export type Item_statFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
    /**
     * Filter, which Item_stat to fetch.
     */
    where: Item_statWhereUniqueInput
  }

  /**
   * Item_stat findUniqueOrThrow
   */
  export type Item_statFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
    /**
     * Filter, which Item_stat to fetch.
     */
    where: Item_statWhereUniqueInput
  }

  /**
   * Item_stat findFirst
   */
  export type Item_statFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
    /**
     * Filter, which Item_stat to fetch.
     */
    where?: Item_statWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_stats to fetch.
     */
    orderBy?: Item_statOrderByWithRelationInput | Item_statOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Item_stats.
     */
    cursor?: Item_statWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Item_stats.
     */
    distinct?: Item_statScalarFieldEnum | Item_statScalarFieldEnum[]
  }

  /**
   * Item_stat findFirstOrThrow
   */
  export type Item_statFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
    /**
     * Filter, which Item_stat to fetch.
     */
    where?: Item_statWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_stats to fetch.
     */
    orderBy?: Item_statOrderByWithRelationInput | Item_statOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Item_stats.
     */
    cursor?: Item_statWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Item_stats.
     */
    distinct?: Item_statScalarFieldEnum | Item_statScalarFieldEnum[]
  }

  /**
   * Item_stat findMany
   */
  export type Item_statFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
    /**
     * Filter, which Item_stats to fetch.
     */
    where?: Item_statWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_stats to fetch.
     */
    orderBy?: Item_statOrderByWithRelationInput | Item_statOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Item_stats.
     */
    cursor?: Item_statWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_stats.
     */
    skip?: number
    distinct?: Item_statScalarFieldEnum | Item_statScalarFieldEnum[]
  }

  /**
   * Item_stat create
   */
  export type Item_statCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
    /**
     * The data needed to create a Item_stat.
     */
    data: XOR<Item_statCreateInput, Item_statUncheckedCreateInput>
  }

  /**
   * Item_stat createMany
   */
  export type Item_statCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Item_stats.
     */
    data: Item_statCreateManyInput | Item_statCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item_stat update
   */
  export type Item_statUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
    /**
     * The data needed to update a Item_stat.
     */
    data: XOR<Item_statUpdateInput, Item_statUncheckedUpdateInput>
    /**
     * Choose, which Item_stat to update.
     */
    where: Item_statWhereUniqueInput
  }

  /**
   * Item_stat updateMany
   */
  export type Item_statUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Item_stats.
     */
    data: XOR<Item_statUpdateManyMutationInput, Item_statUncheckedUpdateManyInput>
    /**
     * Filter which Item_stats to update
     */
    where?: Item_statWhereInput
  }

  /**
   * Item_stat upsert
   */
  export type Item_statUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
    /**
     * The filter to search for the Item_stat to update in case it exists.
     */
    where: Item_statWhereUniqueInput
    /**
     * In case the Item_stat found by the `where` argument doesn't exist, create a new Item_stat with this data.
     */
    create: XOR<Item_statCreateInput, Item_statUncheckedCreateInput>
    /**
     * In case the Item_stat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Item_statUpdateInput, Item_statUncheckedUpdateInput>
  }

  /**
   * Item_stat delete
   */
  export type Item_statDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
    /**
     * Filter which Item_stat to delete.
     */
    where: Item_statWhereUniqueInput
  }

  /**
   * Item_stat deleteMany
   */
  export type Item_statDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item_stats to delete
     */
    where?: Item_statWhereInput
  }

  /**
   * Item_stat without action
   */
  export type Item_statDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_stat
     */
    select?: Item_statSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Item_statInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemsScalarFieldEnum: {
    itemId: 'itemId',
    name: 'name',
    stat: 'stat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const Item_statScalarFieldEnum: {
    statId: 'statId',
    ItemId: 'ItemId',
    health: 'health',
    attack: 'attack',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Item_statScalarFieldEnum = (typeof Item_statScalarFieldEnum)[keyof typeof Item_statScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ItemsWhereInput = {
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    itemId?: IntFilter<"Items"> | number
    name?: StringFilter<"Items"> | string
    stat?: StringFilter<"Items"> | string
    createdAt?: DateTimeFilter<"Items"> | Date | string
    updatedAt?: DateTimeFilter<"Items"> | Date | string
    Item_stat?: XOR<Item_statNullableRelationFilter, Item_statWhereInput> | null
  }

  export type ItemsOrderByWithRelationInput = {
    itemId?: SortOrder
    name?: SortOrder
    stat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Item_stat?: Item_statOrderByWithRelationInput
  }

  export type ItemsWhereUniqueInput = Prisma.AtLeast<{
    itemId?: number
    name?: string
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    stat?: StringFilter<"Items"> | string
    createdAt?: DateTimeFilter<"Items"> | Date | string
    updatedAt?: DateTimeFilter<"Items"> | Date | string
    Item_stat?: XOR<Item_statNullableRelationFilter, Item_statWhereInput> | null
  }, "itemId" | "name">

  export type ItemsOrderByWithAggregationInput = {
    itemId?: SortOrder
    name?: SortOrder
    stat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemsCountOrderByAggregateInput
    _avg?: ItemsAvgOrderByAggregateInput
    _max?: ItemsMaxOrderByAggregateInput
    _min?: ItemsMinOrderByAggregateInput
    _sum?: ItemsSumOrderByAggregateInput
  }

  export type ItemsScalarWhereWithAggregatesInput = {
    AND?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    OR?: ItemsScalarWhereWithAggregatesInput[]
    NOT?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    itemId?: IntWithAggregatesFilter<"Items"> | number
    name?: StringWithAggregatesFilter<"Items"> | string
    stat?: StringWithAggregatesFilter<"Items"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Items"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Items"> | Date | string
  }

  export type Item_statWhereInput = {
    AND?: Item_statWhereInput | Item_statWhereInput[]
    OR?: Item_statWhereInput[]
    NOT?: Item_statWhereInput | Item_statWhereInput[]
    statId?: IntFilter<"Item_stat"> | number
    ItemId?: IntFilter<"Item_stat"> | number
    health?: IntNullableFilter<"Item_stat"> | number | null
    attack?: IntNullableFilter<"Item_stat"> | number | null
    createdAt?: DateTimeFilter<"Item_stat"> | Date | string
    updatedAt?: DateTimeFilter<"Item_stat"> | Date | string
    item?: XOR<ItemsRelationFilter, ItemsWhereInput>
  }

  export type Item_statOrderByWithRelationInput = {
    statId?: SortOrder
    ItemId?: SortOrder
    health?: SortOrderInput | SortOrder
    attack?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    item?: ItemsOrderByWithRelationInput
  }

  export type Item_statWhereUniqueInput = Prisma.AtLeast<{
    statId?: number
    ItemId?: number
    AND?: Item_statWhereInput | Item_statWhereInput[]
    OR?: Item_statWhereInput[]
    NOT?: Item_statWhereInput | Item_statWhereInput[]
    health?: IntNullableFilter<"Item_stat"> | number | null
    attack?: IntNullableFilter<"Item_stat"> | number | null
    createdAt?: DateTimeFilter<"Item_stat"> | Date | string
    updatedAt?: DateTimeFilter<"Item_stat"> | Date | string
    item?: XOR<ItemsRelationFilter, ItemsWhereInput>
  }, "statId" | "ItemId">

  export type Item_statOrderByWithAggregationInput = {
    statId?: SortOrder
    ItemId?: SortOrder
    health?: SortOrderInput | SortOrder
    attack?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Item_statCountOrderByAggregateInput
    _avg?: Item_statAvgOrderByAggregateInput
    _max?: Item_statMaxOrderByAggregateInput
    _min?: Item_statMinOrderByAggregateInput
    _sum?: Item_statSumOrderByAggregateInput
  }

  export type Item_statScalarWhereWithAggregatesInput = {
    AND?: Item_statScalarWhereWithAggregatesInput | Item_statScalarWhereWithAggregatesInput[]
    OR?: Item_statScalarWhereWithAggregatesInput[]
    NOT?: Item_statScalarWhereWithAggregatesInput | Item_statScalarWhereWithAggregatesInput[]
    statId?: IntWithAggregatesFilter<"Item_stat"> | number
    ItemId?: IntWithAggregatesFilter<"Item_stat"> | number
    health?: IntNullableWithAggregatesFilter<"Item_stat"> | number | null
    attack?: IntNullableWithAggregatesFilter<"Item_stat"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Item_stat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item_stat"> | Date | string
  }

  export type ItemsCreateInput = {
    name: string
    stat: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Item_stat?: Item_statCreateNestedOneWithoutItemInput
  }

  export type ItemsUncheckedCreateInput = {
    itemId?: number
    name: string
    stat: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Item_stat?: Item_statUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    stat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item_stat?: Item_statUpdateOneWithoutItemNestedInput
  }

  export type ItemsUncheckedUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item_stat?: Item_statUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ItemsCreateManyInput = {
    itemId?: number
    name: string
    stat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    stat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemsUncheckedUpdateManyInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Item_statCreateInput = {
    health?: number | null
    attack?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemsCreateNestedOneWithoutItem_statInput
  }

  export type Item_statUncheckedCreateInput = {
    statId?: number
    ItemId: number
    health?: number | null
    attack?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Item_statUpdateInput = {
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemsUpdateOneRequiredWithoutItem_statNestedInput
  }

  export type Item_statUncheckedUpdateInput = {
    statId?: IntFieldUpdateOperationsInput | number
    ItemId?: IntFieldUpdateOperationsInput | number
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Item_statCreateManyInput = {
    statId?: number
    ItemId: number
    health?: number | null
    attack?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Item_statUpdateManyMutationInput = {
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Item_statUncheckedUpdateManyInput = {
    statId?: IntFieldUpdateOperationsInput | number
    ItemId?: IntFieldUpdateOperationsInput | number
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Item_statNullableRelationFilter = {
    is?: Item_statWhereInput | null
    isNot?: Item_statWhereInput | null
  }

  export type ItemsCountOrderByAggregateInput = {
    itemId?: SortOrder
    name?: SortOrder
    stat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemsAvgOrderByAggregateInput = {
    itemId?: SortOrder
  }

  export type ItemsMaxOrderByAggregateInput = {
    itemId?: SortOrder
    name?: SortOrder
    stat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemsMinOrderByAggregateInput = {
    itemId?: SortOrder
    name?: SortOrder
    stat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemsSumOrderByAggregateInput = {
    itemId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ItemsRelationFilter = {
    is?: ItemsWhereInput
    isNot?: ItemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Item_statCountOrderByAggregateInput = {
    statId?: SortOrder
    ItemId?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Item_statAvgOrderByAggregateInput = {
    statId?: SortOrder
    ItemId?: SortOrder
    health?: SortOrder
    attack?: SortOrder
  }

  export type Item_statMaxOrderByAggregateInput = {
    statId?: SortOrder
    ItemId?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Item_statMinOrderByAggregateInput = {
    statId?: SortOrder
    ItemId?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Item_statSumOrderByAggregateInput = {
    statId?: SortOrder
    ItemId?: SortOrder
    health?: SortOrder
    attack?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Item_statCreateNestedOneWithoutItemInput = {
    create?: XOR<Item_statCreateWithoutItemInput, Item_statUncheckedCreateWithoutItemInput>
    connectOrCreate?: Item_statCreateOrConnectWithoutItemInput
    connect?: Item_statWhereUniqueInput
  }

  export type Item_statUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<Item_statCreateWithoutItemInput, Item_statUncheckedCreateWithoutItemInput>
    connectOrCreate?: Item_statCreateOrConnectWithoutItemInput
    connect?: Item_statWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Item_statUpdateOneWithoutItemNestedInput = {
    create?: XOR<Item_statCreateWithoutItemInput, Item_statUncheckedCreateWithoutItemInput>
    connectOrCreate?: Item_statCreateOrConnectWithoutItemInput
    upsert?: Item_statUpsertWithoutItemInput
    disconnect?: Item_statWhereInput | boolean
    delete?: Item_statWhereInput | boolean
    connect?: Item_statWhereUniqueInput
    update?: XOR<XOR<Item_statUpdateToOneWithWhereWithoutItemInput, Item_statUpdateWithoutItemInput>, Item_statUncheckedUpdateWithoutItemInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Item_statUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<Item_statCreateWithoutItemInput, Item_statUncheckedCreateWithoutItemInput>
    connectOrCreate?: Item_statCreateOrConnectWithoutItemInput
    upsert?: Item_statUpsertWithoutItemInput
    disconnect?: Item_statWhereInput | boolean
    delete?: Item_statWhereInput | boolean
    connect?: Item_statWhereUniqueInput
    update?: XOR<XOR<Item_statUpdateToOneWithWhereWithoutItemInput, Item_statUpdateWithoutItemInput>, Item_statUncheckedUpdateWithoutItemInput>
  }

  export type ItemsCreateNestedOneWithoutItem_statInput = {
    create?: XOR<ItemsCreateWithoutItem_statInput, ItemsUncheckedCreateWithoutItem_statInput>
    connectOrCreate?: ItemsCreateOrConnectWithoutItem_statInput
    connect?: ItemsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemsUpdateOneRequiredWithoutItem_statNestedInput = {
    create?: XOR<ItemsCreateWithoutItem_statInput, ItemsUncheckedCreateWithoutItem_statInput>
    connectOrCreate?: ItemsCreateOrConnectWithoutItem_statInput
    upsert?: ItemsUpsertWithoutItem_statInput
    connect?: ItemsWhereUniqueInput
    update?: XOR<XOR<ItemsUpdateToOneWithWhereWithoutItem_statInput, ItemsUpdateWithoutItem_statInput>, ItemsUncheckedUpdateWithoutItem_statInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Item_statCreateWithoutItemInput = {
    health?: number | null
    attack?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Item_statUncheckedCreateWithoutItemInput = {
    statId?: number
    health?: number | null
    attack?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Item_statCreateOrConnectWithoutItemInput = {
    where: Item_statWhereUniqueInput
    create: XOR<Item_statCreateWithoutItemInput, Item_statUncheckedCreateWithoutItemInput>
  }

  export type Item_statUpsertWithoutItemInput = {
    update: XOR<Item_statUpdateWithoutItemInput, Item_statUncheckedUpdateWithoutItemInput>
    create: XOR<Item_statCreateWithoutItemInput, Item_statUncheckedCreateWithoutItemInput>
    where?: Item_statWhereInput
  }

  export type Item_statUpdateToOneWithWhereWithoutItemInput = {
    where?: Item_statWhereInput
    data: XOR<Item_statUpdateWithoutItemInput, Item_statUncheckedUpdateWithoutItemInput>
  }

  export type Item_statUpdateWithoutItemInput = {
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Item_statUncheckedUpdateWithoutItemInput = {
    statId?: IntFieldUpdateOperationsInput | number
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemsCreateWithoutItem_statInput = {
    name: string
    stat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemsUncheckedCreateWithoutItem_statInput = {
    itemId?: number
    name: string
    stat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemsCreateOrConnectWithoutItem_statInput = {
    where: ItemsWhereUniqueInput
    create: XOR<ItemsCreateWithoutItem_statInput, ItemsUncheckedCreateWithoutItem_statInput>
  }

  export type ItemsUpsertWithoutItem_statInput = {
    update: XOR<ItemsUpdateWithoutItem_statInput, ItemsUncheckedUpdateWithoutItem_statInput>
    create: XOR<ItemsCreateWithoutItem_statInput, ItemsUncheckedCreateWithoutItem_statInput>
    where?: ItemsWhereInput
  }

  export type ItemsUpdateToOneWithWhereWithoutItem_statInput = {
    where?: ItemsWhereInput
    data: XOR<ItemsUpdateWithoutItem_statInput, ItemsUncheckedUpdateWithoutItem_statInput>
  }

  export type ItemsUpdateWithoutItem_statInput = {
    name?: StringFieldUpdateOperationsInput | string
    stat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemsUncheckedUpdateWithoutItem_statInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ItemsDefaultArgs instead
     */
    export type ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Item_statDefaultArgs instead
     */
    export type Item_statArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Item_statDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}