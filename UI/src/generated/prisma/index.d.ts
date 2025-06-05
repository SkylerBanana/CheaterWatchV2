
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TrackedUser
 * 
 */
export type TrackedUser = $Result.DefaultSelection<Prisma.$TrackedUserPayload>
/**
 * Model UserTracked
 * 
 */
export type UserTracked = $Result.DefaultSelection<Prisma.$UserTrackedPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackedUser`: Exposes CRUD operations for the **TrackedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackedUsers
    * const trackedUsers = await prisma.trackedUser.findMany()
    * ```
    */
  get trackedUser(): Prisma.TrackedUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTracked`: Exposes CRUD operations for the **UserTracked** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTrackeds
    * const userTrackeds = await prisma.userTracked.findMany()
    * ```
    */
  get userTracked(): Prisma.UserTrackedDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    TrackedUser: 'TrackedUser',
    UserTracked: 'UserTracked'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "trackedUser" | "userTracked"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TrackedUser: {
        payload: Prisma.$TrackedUserPayload<ExtArgs>
        fields: Prisma.TrackedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackedUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackedUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          findFirst: {
            args: Prisma.TrackedUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackedUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          findMany: {
            args: Prisma.TrackedUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>[]
          }
          create: {
            args: Prisma.TrackedUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          createMany: {
            args: Prisma.TrackedUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackedUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>[]
          }
          delete: {
            args: Prisma.TrackedUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          update: {
            args: Prisma.TrackedUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          deleteMany: {
            args: Prisma.TrackedUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackedUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackedUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>[]
          }
          upsert: {
            args: Prisma.TrackedUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          aggregate: {
            args: Prisma.TrackedUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackedUser>
          }
          groupBy: {
            args: Prisma.TrackedUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackedUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackedUserCountArgs<ExtArgs>
            result: $Utils.Optional<TrackedUserCountAggregateOutputType> | number
          }
        }
      }
      UserTracked: {
        payload: Prisma.$UserTrackedPayload<ExtArgs>
        fields: Prisma.UserTrackedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTrackedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTrackedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload>
          }
          findFirst: {
            args: Prisma.UserTrackedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTrackedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload>
          }
          findMany: {
            args: Prisma.UserTrackedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload>[]
          }
          create: {
            args: Prisma.UserTrackedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload>
          }
          createMany: {
            args: Prisma.UserTrackedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTrackedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload>[]
          }
          delete: {
            args: Prisma.UserTrackedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload>
          }
          update: {
            args: Prisma.UserTrackedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload>
          }
          deleteMany: {
            args: Prisma.UserTrackedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTrackedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTrackedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload>[]
          }
          upsert: {
            args: Prisma.UserTrackedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackedPayload>
          }
          aggregate: {
            args: Prisma.UserTrackedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTracked>
          }
          groupBy: {
            args: Prisma.UserTrackedGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTrackedGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTrackedCountArgs<ExtArgs>
            result: $Utils.Optional<UserTrackedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    trackedUser?: TrackedUserOmit
    userTracked?: UserTrackedOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    trackedUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackedUsers?: boolean | UserCountOutputTypeCountTrackedUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrackedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTrackedWhereInput
  }


  /**
   * Count Type TrackedUserCountOutputType
   */

  export type TrackedUserCountOutputType = {
    trackedById: number
  }

  export type TrackedUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackedById?: boolean | TrackedUserCountOutputTypeCountTrackedByIdArgs
  }

  // Custom InputTypes
  /**
   * TrackedUserCountOutputType without action
   */
  export type TrackedUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUserCountOutputType
     */
    select?: TrackedUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackedUserCountOutputType without action
   */
  export type TrackedUserCountOutputTypeCountTrackedByIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTrackedWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    hashed_password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    hashed_password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    hashed_password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    hashed_password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    hashed_password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    hashed_password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    hashed_password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    hashed_password?: boolean
    trackedUsers?: boolean | User$trackedUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    hashed_password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    hashed_password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    hashed_password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "hashed_password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackedUsers?: boolean | User$trackedUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trackedUsers: Prisma.$UserTrackedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      hashed_password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trackedUsers<T extends User$trackedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$trackedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly hashed_password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.trackedUsers
   */
  export type User$trackedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    where?: UserTrackedWhereInput
    orderBy?: UserTrackedOrderByWithRelationInput | UserTrackedOrderByWithRelationInput[]
    cursor?: UserTrackedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTrackedScalarFieldEnum | UserTrackedScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TrackedUser
   */

  export type AggregateTrackedUser = {
    _count: TrackedUserCountAggregateOutputType | null
    _avg: TrackedUserAvgAggregateOutputType | null
    _sum: TrackedUserSumAggregateOutputType | null
    _min: TrackedUserMinAggregateOutputType | null
    _max: TrackedUserMaxAggregateOutputType | null
  }

  export type TrackedUserAvgAggregateOutputType = {
    vacbans: number | null
    gamebans: number | null
  }

  export type TrackedUserSumAggregateOutputType = {
    vacbans: number | null
    gamebans: number | null
  }

  export type TrackedUserMinAggregateOutputType = {
    steamid: string | null
    vacbans: number | null
    gamebans: number | null
    date_added: Date | null
  }

  export type TrackedUserMaxAggregateOutputType = {
    steamid: string | null
    vacbans: number | null
    gamebans: number | null
    date_added: Date | null
  }

  export type TrackedUserCountAggregateOutputType = {
    steamid: number
    vacbans: number
    gamebans: number
    date_added: number
    _all: number
  }


  export type TrackedUserAvgAggregateInputType = {
    vacbans?: true
    gamebans?: true
  }

  export type TrackedUserSumAggregateInputType = {
    vacbans?: true
    gamebans?: true
  }

  export type TrackedUserMinAggregateInputType = {
    steamid?: true
    vacbans?: true
    gamebans?: true
    date_added?: true
  }

  export type TrackedUserMaxAggregateInputType = {
    steamid?: true
    vacbans?: true
    gamebans?: true
    date_added?: true
  }

  export type TrackedUserCountAggregateInputType = {
    steamid?: true
    vacbans?: true
    gamebans?: true
    date_added?: true
    _all?: true
  }

  export type TrackedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedUser to aggregate.
     */
    where?: TrackedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedUsers to fetch.
     */
    orderBy?: TrackedUserOrderByWithRelationInput | TrackedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackedUsers
    **/
    _count?: true | TrackedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackedUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackedUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackedUserMaxAggregateInputType
  }

  export type GetTrackedUserAggregateType<T extends TrackedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackedUser[P]>
      : GetScalarType<T[P], AggregateTrackedUser[P]>
  }




  export type TrackedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedUserWhereInput
    orderBy?: TrackedUserOrderByWithAggregationInput | TrackedUserOrderByWithAggregationInput[]
    by: TrackedUserScalarFieldEnum[] | TrackedUserScalarFieldEnum
    having?: TrackedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackedUserCountAggregateInputType | true
    _avg?: TrackedUserAvgAggregateInputType
    _sum?: TrackedUserSumAggregateInputType
    _min?: TrackedUserMinAggregateInputType
    _max?: TrackedUserMaxAggregateInputType
  }

  export type TrackedUserGroupByOutputType = {
    steamid: string
    vacbans: number
    gamebans: number
    date_added: Date
    _count: TrackedUserCountAggregateOutputType | null
    _avg: TrackedUserAvgAggregateOutputType | null
    _sum: TrackedUserSumAggregateOutputType | null
    _min: TrackedUserMinAggregateOutputType | null
    _max: TrackedUserMaxAggregateOutputType | null
  }

  type GetTrackedUserGroupByPayload<T extends TrackedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackedUserGroupByOutputType[P]>
            : GetScalarType<T[P], TrackedUserGroupByOutputType[P]>
        }
      >
    >


  export type TrackedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    steamid?: boolean
    vacbans?: boolean
    gamebans?: boolean
    date_added?: boolean
    trackedById?: boolean | TrackedUser$trackedByIdArgs<ExtArgs>
    _count?: boolean | TrackedUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedUser"]>

  export type TrackedUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    steamid?: boolean
    vacbans?: boolean
    gamebans?: boolean
    date_added?: boolean
  }, ExtArgs["result"]["trackedUser"]>

  export type TrackedUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    steamid?: boolean
    vacbans?: boolean
    gamebans?: boolean
    date_added?: boolean
  }, ExtArgs["result"]["trackedUser"]>

  export type TrackedUserSelectScalar = {
    steamid?: boolean
    vacbans?: boolean
    gamebans?: boolean
    date_added?: boolean
  }

  export type TrackedUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"steamid" | "vacbans" | "gamebans" | "date_added", ExtArgs["result"]["trackedUser"]>
  export type TrackedUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackedById?: boolean | TrackedUser$trackedByIdArgs<ExtArgs>
    _count?: boolean | TrackedUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackedUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TrackedUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrackedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackedUser"
    objects: {
      trackedById: Prisma.$UserTrackedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      steamid: string
      vacbans: number
      gamebans: number
      date_added: Date
    }, ExtArgs["result"]["trackedUser"]>
    composites: {}
  }

  type TrackedUserGetPayload<S extends boolean | null | undefined | TrackedUserDefaultArgs> = $Result.GetResult<Prisma.$TrackedUserPayload, S>

  type TrackedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackedUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackedUserCountAggregateInputType | true
    }

  export interface TrackedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackedUser'], meta: { name: 'TrackedUser' } }
    /**
     * Find zero or one TrackedUser that matches the filter.
     * @param {TrackedUserFindUniqueArgs} args - Arguments to find a TrackedUser
     * @example
     * // Get one TrackedUser
     * const trackedUser = await prisma.trackedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackedUserFindUniqueArgs>(args: SelectSubset<T, TrackedUserFindUniqueArgs<ExtArgs>>): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackedUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackedUserFindUniqueOrThrowArgs} args - Arguments to find a TrackedUser
     * @example
     * // Get one TrackedUser
     * const trackedUser = await prisma.trackedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackedUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackedUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserFindFirstArgs} args - Arguments to find a TrackedUser
     * @example
     * // Get one TrackedUser
     * const trackedUser = await prisma.trackedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackedUserFindFirstArgs>(args?: SelectSubset<T, TrackedUserFindFirstArgs<ExtArgs>>): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserFindFirstOrThrowArgs} args - Arguments to find a TrackedUser
     * @example
     * // Get one TrackedUser
     * const trackedUser = await prisma.trackedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackedUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackedUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackedUsers
     * const trackedUsers = await prisma.trackedUser.findMany()
     * 
     * // Get first 10 TrackedUsers
     * const trackedUsers = await prisma.trackedUser.findMany({ take: 10 })
     * 
     * // Only select the `steamid`
     * const trackedUserWithSteamidOnly = await prisma.trackedUser.findMany({ select: { steamid: true } })
     * 
     */
    findMany<T extends TrackedUserFindManyArgs>(args?: SelectSubset<T, TrackedUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackedUser.
     * @param {TrackedUserCreateArgs} args - Arguments to create a TrackedUser.
     * @example
     * // Create one TrackedUser
     * const TrackedUser = await prisma.trackedUser.create({
     *   data: {
     *     // ... data to create a TrackedUser
     *   }
     * })
     * 
     */
    create<T extends TrackedUserCreateArgs>(args: SelectSubset<T, TrackedUserCreateArgs<ExtArgs>>): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackedUsers.
     * @param {TrackedUserCreateManyArgs} args - Arguments to create many TrackedUsers.
     * @example
     * // Create many TrackedUsers
     * const trackedUser = await prisma.trackedUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackedUserCreateManyArgs>(args?: SelectSubset<T, TrackedUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackedUsers and returns the data saved in the database.
     * @param {TrackedUserCreateManyAndReturnArgs} args - Arguments to create many TrackedUsers.
     * @example
     * // Create many TrackedUsers
     * const trackedUser = await prisma.trackedUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackedUsers and only return the `steamid`
     * const trackedUserWithSteamidOnly = await prisma.trackedUser.createManyAndReturn({
     *   select: { steamid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackedUserCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackedUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackedUser.
     * @param {TrackedUserDeleteArgs} args - Arguments to delete one TrackedUser.
     * @example
     * // Delete one TrackedUser
     * const TrackedUser = await prisma.trackedUser.delete({
     *   where: {
     *     // ... filter to delete one TrackedUser
     *   }
     * })
     * 
     */
    delete<T extends TrackedUserDeleteArgs>(args: SelectSubset<T, TrackedUserDeleteArgs<ExtArgs>>): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackedUser.
     * @param {TrackedUserUpdateArgs} args - Arguments to update one TrackedUser.
     * @example
     * // Update one TrackedUser
     * const trackedUser = await prisma.trackedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackedUserUpdateArgs>(args: SelectSubset<T, TrackedUserUpdateArgs<ExtArgs>>): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackedUsers.
     * @param {TrackedUserDeleteManyArgs} args - Arguments to filter TrackedUsers to delete.
     * @example
     * // Delete a few TrackedUsers
     * const { count } = await prisma.trackedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackedUserDeleteManyArgs>(args?: SelectSubset<T, TrackedUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackedUsers
     * const trackedUser = await prisma.trackedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackedUserUpdateManyArgs>(args: SelectSubset<T, TrackedUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedUsers and returns the data updated in the database.
     * @param {TrackedUserUpdateManyAndReturnArgs} args - Arguments to update many TrackedUsers.
     * @example
     * // Update many TrackedUsers
     * const trackedUser = await prisma.trackedUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackedUsers and only return the `steamid`
     * const trackedUserWithSteamidOnly = await prisma.trackedUser.updateManyAndReturn({
     *   select: { steamid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackedUserUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackedUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackedUser.
     * @param {TrackedUserUpsertArgs} args - Arguments to update or create a TrackedUser.
     * @example
     * // Update or create a TrackedUser
     * const trackedUser = await prisma.trackedUser.upsert({
     *   create: {
     *     // ... data to create a TrackedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackedUser we want to update
     *   }
     * })
     */
    upsert<T extends TrackedUserUpsertArgs>(args: SelectSubset<T, TrackedUserUpsertArgs<ExtArgs>>): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserCountArgs} args - Arguments to filter TrackedUsers to count.
     * @example
     * // Count the number of TrackedUsers
     * const count = await prisma.trackedUser.count({
     *   where: {
     *     // ... the filter for the TrackedUsers we want to count
     *   }
     * })
    **/
    count<T extends TrackedUserCountArgs>(
      args?: Subset<T, TrackedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackedUserAggregateArgs>(args: Subset<T, TrackedUserAggregateArgs>): Prisma.PrismaPromise<GetTrackedUserAggregateType<T>>

    /**
     * Group by TrackedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserGroupByArgs} args - Group by arguments.
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
      T extends TrackedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackedUserGroupByArgs['orderBy'] }
        : { orderBy?: TrackedUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackedUser model
   */
  readonly fields: TrackedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trackedById<T extends TrackedUser$trackedByIdArgs<ExtArgs> = {}>(args?: Subset<T, TrackedUser$trackedByIdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrackedUser model
   */
  interface TrackedUserFieldRefs {
    readonly steamid: FieldRef<"TrackedUser", 'String'>
    readonly vacbans: FieldRef<"TrackedUser", 'Int'>
    readonly gamebans: FieldRef<"TrackedUser", 'Int'>
    readonly date_added: FieldRef<"TrackedUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrackedUser findUnique
   */
  export type TrackedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter, which TrackedUser to fetch.
     */
    where: TrackedUserWhereUniqueInput
  }

  /**
   * TrackedUser findUniqueOrThrow
   */
  export type TrackedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter, which TrackedUser to fetch.
     */
    where: TrackedUserWhereUniqueInput
  }

  /**
   * TrackedUser findFirst
   */
  export type TrackedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter, which TrackedUser to fetch.
     */
    where?: TrackedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedUsers to fetch.
     */
    orderBy?: TrackedUserOrderByWithRelationInput | TrackedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedUsers.
     */
    cursor?: TrackedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedUsers.
     */
    distinct?: TrackedUserScalarFieldEnum | TrackedUserScalarFieldEnum[]
  }

  /**
   * TrackedUser findFirstOrThrow
   */
  export type TrackedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter, which TrackedUser to fetch.
     */
    where?: TrackedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedUsers to fetch.
     */
    orderBy?: TrackedUserOrderByWithRelationInput | TrackedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedUsers.
     */
    cursor?: TrackedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedUsers.
     */
    distinct?: TrackedUserScalarFieldEnum | TrackedUserScalarFieldEnum[]
  }

  /**
   * TrackedUser findMany
   */
  export type TrackedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter, which TrackedUsers to fetch.
     */
    where?: TrackedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedUsers to fetch.
     */
    orderBy?: TrackedUserOrderByWithRelationInput | TrackedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackedUsers.
     */
    cursor?: TrackedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedUsers.
     */
    skip?: number
    distinct?: TrackedUserScalarFieldEnum | TrackedUserScalarFieldEnum[]
  }

  /**
   * TrackedUser create
   */
  export type TrackedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackedUser.
     */
    data: XOR<TrackedUserCreateInput, TrackedUserUncheckedCreateInput>
  }

  /**
   * TrackedUser createMany
   */
  export type TrackedUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackedUsers.
     */
    data: TrackedUserCreateManyInput | TrackedUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackedUser createManyAndReturn
   */
  export type TrackedUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * The data used to create many TrackedUsers.
     */
    data: TrackedUserCreateManyInput | TrackedUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackedUser update
   */
  export type TrackedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackedUser.
     */
    data: XOR<TrackedUserUpdateInput, TrackedUserUncheckedUpdateInput>
    /**
     * Choose, which TrackedUser to update.
     */
    where: TrackedUserWhereUniqueInput
  }

  /**
   * TrackedUser updateMany
   */
  export type TrackedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackedUsers.
     */
    data: XOR<TrackedUserUpdateManyMutationInput, TrackedUserUncheckedUpdateManyInput>
    /**
     * Filter which TrackedUsers to update
     */
    where?: TrackedUserWhereInput
    /**
     * Limit how many TrackedUsers to update.
     */
    limit?: number
  }

  /**
   * TrackedUser updateManyAndReturn
   */
  export type TrackedUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * The data used to update TrackedUsers.
     */
    data: XOR<TrackedUserUpdateManyMutationInput, TrackedUserUncheckedUpdateManyInput>
    /**
     * Filter which TrackedUsers to update
     */
    where?: TrackedUserWhereInput
    /**
     * Limit how many TrackedUsers to update.
     */
    limit?: number
  }

  /**
   * TrackedUser upsert
   */
  export type TrackedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackedUser to update in case it exists.
     */
    where: TrackedUserWhereUniqueInput
    /**
     * In case the TrackedUser found by the `where` argument doesn't exist, create a new TrackedUser with this data.
     */
    create: XOR<TrackedUserCreateInput, TrackedUserUncheckedCreateInput>
    /**
     * In case the TrackedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackedUserUpdateInput, TrackedUserUncheckedUpdateInput>
  }

  /**
   * TrackedUser delete
   */
  export type TrackedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter which TrackedUser to delete.
     */
    where: TrackedUserWhereUniqueInput
  }

  /**
   * TrackedUser deleteMany
   */
  export type TrackedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedUsers to delete
     */
    where?: TrackedUserWhereInput
    /**
     * Limit how many TrackedUsers to delete.
     */
    limit?: number
  }

  /**
   * TrackedUser.trackedById
   */
  export type TrackedUser$trackedByIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    where?: UserTrackedWhereInput
    orderBy?: UserTrackedOrderByWithRelationInput | UserTrackedOrderByWithRelationInput[]
    cursor?: UserTrackedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTrackedScalarFieldEnum | UserTrackedScalarFieldEnum[]
  }

  /**
   * TrackedUser without action
   */
  export type TrackedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedUser
     */
    omit?: TrackedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedUserInclude<ExtArgs> | null
  }


  /**
   * Model UserTracked
   */

  export type AggregateUserTracked = {
    _count: UserTrackedCountAggregateOutputType | null
    _min: UserTrackedMinAggregateOutputType | null
    _max: UserTrackedMaxAggregateOutputType | null
  }

  export type UserTrackedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    trackedUserSteamid: string | null
    date_added: Date | null
  }

  export type UserTrackedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    trackedUserSteamid: string | null
    date_added: Date | null
  }

  export type UserTrackedCountAggregateOutputType = {
    id: number
    userId: number
    trackedUserSteamid: number
    date_added: number
    _all: number
  }


  export type UserTrackedMinAggregateInputType = {
    id?: true
    userId?: true
    trackedUserSteamid?: true
    date_added?: true
  }

  export type UserTrackedMaxAggregateInputType = {
    id?: true
    userId?: true
    trackedUserSteamid?: true
    date_added?: true
  }

  export type UserTrackedCountAggregateInputType = {
    id?: true
    userId?: true
    trackedUserSteamid?: true
    date_added?: true
    _all?: true
  }

  export type UserTrackedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTracked to aggregate.
     */
    where?: UserTrackedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTrackeds to fetch.
     */
    orderBy?: UserTrackedOrderByWithRelationInput | UserTrackedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTrackedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTrackeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTrackeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTrackeds
    **/
    _count?: true | UserTrackedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTrackedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTrackedMaxAggregateInputType
  }

  export type GetUserTrackedAggregateType<T extends UserTrackedAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTracked]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTracked[P]>
      : GetScalarType<T[P], AggregateUserTracked[P]>
  }




  export type UserTrackedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTrackedWhereInput
    orderBy?: UserTrackedOrderByWithAggregationInput | UserTrackedOrderByWithAggregationInput[]
    by: UserTrackedScalarFieldEnum[] | UserTrackedScalarFieldEnum
    having?: UserTrackedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTrackedCountAggregateInputType | true
    _min?: UserTrackedMinAggregateInputType
    _max?: UserTrackedMaxAggregateInputType
  }

  export type UserTrackedGroupByOutputType = {
    id: string
    userId: string
    trackedUserSteamid: string
    date_added: Date
    _count: UserTrackedCountAggregateOutputType | null
    _min: UserTrackedMinAggregateOutputType | null
    _max: UserTrackedMaxAggregateOutputType | null
  }

  type GetUserTrackedGroupByPayload<T extends UserTrackedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTrackedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTrackedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTrackedGroupByOutputType[P]>
            : GetScalarType<T[P], UserTrackedGroupByOutputType[P]>
        }
      >
    >


  export type UserTrackedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackedUserSteamid?: boolean
    date_added?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trackedUser?: boolean | TrackedUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTracked"]>

  export type UserTrackedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackedUserSteamid?: boolean
    date_added?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trackedUser?: boolean | TrackedUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTracked"]>

  export type UserTrackedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackedUserSteamid?: boolean
    date_added?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trackedUser?: boolean | TrackedUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTracked"]>

  export type UserTrackedSelectScalar = {
    id?: boolean
    userId?: boolean
    trackedUserSteamid?: boolean
    date_added?: boolean
  }

  export type UserTrackedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "trackedUserSteamid" | "date_added", ExtArgs["result"]["userTracked"]>
  export type UserTrackedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trackedUser?: boolean | TrackedUserDefaultArgs<ExtArgs>
  }
  export type UserTrackedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trackedUser?: boolean | TrackedUserDefaultArgs<ExtArgs>
  }
  export type UserTrackedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trackedUser?: boolean | TrackedUserDefaultArgs<ExtArgs>
  }

  export type $UserTrackedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTracked"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trackedUser: Prisma.$TrackedUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      trackedUserSteamid: string
      date_added: Date
    }, ExtArgs["result"]["userTracked"]>
    composites: {}
  }

  type UserTrackedGetPayload<S extends boolean | null | undefined | UserTrackedDefaultArgs> = $Result.GetResult<Prisma.$UserTrackedPayload, S>

  type UserTrackedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTrackedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTrackedCountAggregateInputType | true
    }

  export interface UserTrackedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTracked'], meta: { name: 'UserTracked' } }
    /**
     * Find zero or one UserTracked that matches the filter.
     * @param {UserTrackedFindUniqueArgs} args - Arguments to find a UserTracked
     * @example
     * // Get one UserTracked
     * const userTracked = await prisma.userTracked.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTrackedFindUniqueArgs>(args: SelectSubset<T, UserTrackedFindUniqueArgs<ExtArgs>>): Prisma__UserTrackedClient<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTracked that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTrackedFindUniqueOrThrowArgs} args - Arguments to find a UserTracked
     * @example
     * // Get one UserTracked
     * const userTracked = await prisma.userTracked.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTrackedFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTrackedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTrackedClient<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTracked that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackedFindFirstArgs} args - Arguments to find a UserTracked
     * @example
     * // Get one UserTracked
     * const userTracked = await prisma.userTracked.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTrackedFindFirstArgs>(args?: SelectSubset<T, UserTrackedFindFirstArgs<ExtArgs>>): Prisma__UserTrackedClient<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTracked that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackedFindFirstOrThrowArgs} args - Arguments to find a UserTracked
     * @example
     * // Get one UserTracked
     * const userTracked = await prisma.userTracked.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTrackedFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTrackedFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTrackedClient<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTrackeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTrackeds
     * const userTrackeds = await prisma.userTracked.findMany()
     * 
     * // Get first 10 UserTrackeds
     * const userTrackeds = await prisma.userTracked.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTrackedWithIdOnly = await prisma.userTracked.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTrackedFindManyArgs>(args?: SelectSubset<T, UserTrackedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTracked.
     * @param {UserTrackedCreateArgs} args - Arguments to create a UserTracked.
     * @example
     * // Create one UserTracked
     * const UserTracked = await prisma.userTracked.create({
     *   data: {
     *     // ... data to create a UserTracked
     *   }
     * })
     * 
     */
    create<T extends UserTrackedCreateArgs>(args: SelectSubset<T, UserTrackedCreateArgs<ExtArgs>>): Prisma__UserTrackedClient<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTrackeds.
     * @param {UserTrackedCreateManyArgs} args - Arguments to create many UserTrackeds.
     * @example
     * // Create many UserTrackeds
     * const userTracked = await prisma.userTracked.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTrackedCreateManyArgs>(args?: SelectSubset<T, UserTrackedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTrackeds and returns the data saved in the database.
     * @param {UserTrackedCreateManyAndReturnArgs} args - Arguments to create many UserTrackeds.
     * @example
     * // Create many UserTrackeds
     * const userTracked = await prisma.userTracked.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTrackeds and only return the `id`
     * const userTrackedWithIdOnly = await prisma.userTracked.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTrackedCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTrackedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTracked.
     * @param {UserTrackedDeleteArgs} args - Arguments to delete one UserTracked.
     * @example
     * // Delete one UserTracked
     * const UserTracked = await prisma.userTracked.delete({
     *   where: {
     *     // ... filter to delete one UserTracked
     *   }
     * })
     * 
     */
    delete<T extends UserTrackedDeleteArgs>(args: SelectSubset<T, UserTrackedDeleteArgs<ExtArgs>>): Prisma__UserTrackedClient<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTracked.
     * @param {UserTrackedUpdateArgs} args - Arguments to update one UserTracked.
     * @example
     * // Update one UserTracked
     * const userTracked = await prisma.userTracked.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTrackedUpdateArgs>(args: SelectSubset<T, UserTrackedUpdateArgs<ExtArgs>>): Prisma__UserTrackedClient<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTrackeds.
     * @param {UserTrackedDeleteManyArgs} args - Arguments to filter UserTrackeds to delete.
     * @example
     * // Delete a few UserTrackeds
     * const { count } = await prisma.userTracked.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTrackedDeleteManyArgs>(args?: SelectSubset<T, UserTrackedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTrackeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTrackeds
     * const userTracked = await prisma.userTracked.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTrackedUpdateManyArgs>(args: SelectSubset<T, UserTrackedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTrackeds and returns the data updated in the database.
     * @param {UserTrackedUpdateManyAndReturnArgs} args - Arguments to update many UserTrackeds.
     * @example
     * // Update many UserTrackeds
     * const userTracked = await prisma.userTracked.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTrackeds and only return the `id`
     * const userTrackedWithIdOnly = await prisma.userTracked.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTrackedUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTrackedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTracked.
     * @param {UserTrackedUpsertArgs} args - Arguments to update or create a UserTracked.
     * @example
     * // Update or create a UserTracked
     * const userTracked = await prisma.userTracked.upsert({
     *   create: {
     *     // ... data to create a UserTracked
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTracked we want to update
     *   }
     * })
     */
    upsert<T extends UserTrackedUpsertArgs>(args: SelectSubset<T, UserTrackedUpsertArgs<ExtArgs>>): Prisma__UserTrackedClient<$Result.GetResult<Prisma.$UserTrackedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTrackeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackedCountArgs} args - Arguments to filter UserTrackeds to count.
     * @example
     * // Count the number of UserTrackeds
     * const count = await prisma.userTracked.count({
     *   where: {
     *     // ... the filter for the UserTrackeds we want to count
     *   }
     * })
    **/
    count<T extends UserTrackedCountArgs>(
      args?: Subset<T, UserTrackedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTrackedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTracked.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTrackedAggregateArgs>(args: Subset<T, UserTrackedAggregateArgs>): Prisma.PrismaPromise<GetUserTrackedAggregateType<T>>

    /**
     * Group by UserTracked.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackedGroupByArgs} args - Group by arguments.
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
      T extends UserTrackedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTrackedGroupByArgs['orderBy'] }
        : { orderBy?: UserTrackedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserTrackedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTrackedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTracked model
   */
  readonly fields: UserTrackedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTracked.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTrackedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trackedUser<T extends TrackedUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackedUserDefaultArgs<ExtArgs>>): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTracked model
   */
  interface UserTrackedFieldRefs {
    readonly id: FieldRef<"UserTracked", 'String'>
    readonly userId: FieldRef<"UserTracked", 'String'>
    readonly trackedUserSteamid: FieldRef<"UserTracked", 'String'>
    readonly date_added: FieldRef<"UserTracked", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTracked findUnique
   */
  export type UserTrackedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    /**
     * Filter, which UserTracked to fetch.
     */
    where: UserTrackedWhereUniqueInput
  }

  /**
   * UserTracked findUniqueOrThrow
   */
  export type UserTrackedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    /**
     * Filter, which UserTracked to fetch.
     */
    where: UserTrackedWhereUniqueInput
  }

  /**
   * UserTracked findFirst
   */
  export type UserTrackedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    /**
     * Filter, which UserTracked to fetch.
     */
    where?: UserTrackedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTrackeds to fetch.
     */
    orderBy?: UserTrackedOrderByWithRelationInput | UserTrackedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTrackeds.
     */
    cursor?: UserTrackedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTrackeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTrackeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTrackeds.
     */
    distinct?: UserTrackedScalarFieldEnum | UserTrackedScalarFieldEnum[]
  }

  /**
   * UserTracked findFirstOrThrow
   */
  export type UserTrackedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    /**
     * Filter, which UserTracked to fetch.
     */
    where?: UserTrackedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTrackeds to fetch.
     */
    orderBy?: UserTrackedOrderByWithRelationInput | UserTrackedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTrackeds.
     */
    cursor?: UserTrackedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTrackeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTrackeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTrackeds.
     */
    distinct?: UserTrackedScalarFieldEnum | UserTrackedScalarFieldEnum[]
  }

  /**
   * UserTracked findMany
   */
  export type UserTrackedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    /**
     * Filter, which UserTrackeds to fetch.
     */
    where?: UserTrackedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTrackeds to fetch.
     */
    orderBy?: UserTrackedOrderByWithRelationInput | UserTrackedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTrackeds.
     */
    cursor?: UserTrackedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTrackeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTrackeds.
     */
    skip?: number
    distinct?: UserTrackedScalarFieldEnum | UserTrackedScalarFieldEnum[]
  }

  /**
   * UserTracked create
   */
  export type UserTrackedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTracked.
     */
    data: XOR<UserTrackedCreateInput, UserTrackedUncheckedCreateInput>
  }

  /**
   * UserTracked createMany
   */
  export type UserTrackedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTrackeds.
     */
    data: UserTrackedCreateManyInput | UserTrackedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTracked createManyAndReturn
   */
  export type UserTrackedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * The data used to create many UserTrackeds.
     */
    data: UserTrackedCreateManyInput | UserTrackedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTracked update
   */
  export type UserTrackedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTracked.
     */
    data: XOR<UserTrackedUpdateInput, UserTrackedUncheckedUpdateInput>
    /**
     * Choose, which UserTracked to update.
     */
    where: UserTrackedWhereUniqueInput
  }

  /**
   * UserTracked updateMany
   */
  export type UserTrackedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTrackeds.
     */
    data: XOR<UserTrackedUpdateManyMutationInput, UserTrackedUncheckedUpdateManyInput>
    /**
     * Filter which UserTrackeds to update
     */
    where?: UserTrackedWhereInput
    /**
     * Limit how many UserTrackeds to update.
     */
    limit?: number
  }

  /**
   * UserTracked updateManyAndReturn
   */
  export type UserTrackedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * The data used to update UserTrackeds.
     */
    data: XOR<UserTrackedUpdateManyMutationInput, UserTrackedUncheckedUpdateManyInput>
    /**
     * Filter which UserTrackeds to update
     */
    where?: UserTrackedWhereInput
    /**
     * Limit how many UserTrackeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTracked upsert
   */
  export type UserTrackedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTracked to update in case it exists.
     */
    where: UserTrackedWhereUniqueInput
    /**
     * In case the UserTracked found by the `where` argument doesn't exist, create a new UserTracked with this data.
     */
    create: XOR<UserTrackedCreateInput, UserTrackedUncheckedCreateInput>
    /**
     * In case the UserTracked was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTrackedUpdateInput, UserTrackedUncheckedUpdateInput>
  }

  /**
   * UserTracked delete
   */
  export type UserTrackedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
    /**
     * Filter which UserTracked to delete.
     */
    where: UserTrackedWhereUniqueInput
  }

  /**
   * UserTracked deleteMany
   */
  export type UserTrackedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTrackeds to delete
     */
    where?: UserTrackedWhereInput
    /**
     * Limit how many UserTrackeds to delete.
     */
    limit?: number
  }

  /**
   * UserTracked without action
   */
  export type UserTrackedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTracked
     */
    select?: UserTrackedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTracked
     */
    omit?: UserTrackedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackedInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    hashed_password: 'hashed_password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TrackedUserScalarFieldEnum: {
    steamid: 'steamid',
    vacbans: 'vacbans',
    gamebans: 'gamebans',
    date_added: 'date_added'
  };

  export type TrackedUserScalarFieldEnum = (typeof TrackedUserScalarFieldEnum)[keyof typeof TrackedUserScalarFieldEnum]


  export const UserTrackedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trackedUserSteamid: 'trackedUserSteamid',
    date_added: 'date_added'
  };

  export type UserTrackedScalarFieldEnum = (typeof UserTrackedScalarFieldEnum)[keyof typeof UserTrackedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    hashed_password?: StringFilter<"User"> | string
    trackedUsers?: UserTrackedListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    hashed_password?: SortOrder
    trackedUsers?: UserTrackedOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashed_password?: StringFilter<"User"> | string
    trackedUsers?: UserTrackedListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    hashed_password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    hashed_password?: StringWithAggregatesFilter<"User"> | string
  }

  export type TrackedUserWhereInput = {
    AND?: TrackedUserWhereInput | TrackedUserWhereInput[]
    OR?: TrackedUserWhereInput[]
    NOT?: TrackedUserWhereInput | TrackedUserWhereInput[]
    steamid?: StringFilter<"TrackedUser"> | string
    vacbans?: IntFilter<"TrackedUser"> | number
    gamebans?: IntFilter<"TrackedUser"> | number
    date_added?: DateTimeFilter<"TrackedUser"> | Date | string
    trackedById?: UserTrackedListRelationFilter
  }

  export type TrackedUserOrderByWithRelationInput = {
    steamid?: SortOrder
    vacbans?: SortOrder
    gamebans?: SortOrder
    date_added?: SortOrder
    trackedById?: UserTrackedOrderByRelationAggregateInput
  }

  export type TrackedUserWhereUniqueInput = Prisma.AtLeast<{
    steamid?: string
    AND?: TrackedUserWhereInput | TrackedUserWhereInput[]
    OR?: TrackedUserWhereInput[]
    NOT?: TrackedUserWhereInput | TrackedUserWhereInput[]
    vacbans?: IntFilter<"TrackedUser"> | number
    gamebans?: IntFilter<"TrackedUser"> | number
    date_added?: DateTimeFilter<"TrackedUser"> | Date | string
    trackedById?: UserTrackedListRelationFilter
  }, "steamid">

  export type TrackedUserOrderByWithAggregationInput = {
    steamid?: SortOrder
    vacbans?: SortOrder
    gamebans?: SortOrder
    date_added?: SortOrder
    _count?: TrackedUserCountOrderByAggregateInput
    _avg?: TrackedUserAvgOrderByAggregateInput
    _max?: TrackedUserMaxOrderByAggregateInput
    _min?: TrackedUserMinOrderByAggregateInput
    _sum?: TrackedUserSumOrderByAggregateInput
  }

  export type TrackedUserScalarWhereWithAggregatesInput = {
    AND?: TrackedUserScalarWhereWithAggregatesInput | TrackedUserScalarWhereWithAggregatesInput[]
    OR?: TrackedUserScalarWhereWithAggregatesInput[]
    NOT?: TrackedUserScalarWhereWithAggregatesInput | TrackedUserScalarWhereWithAggregatesInput[]
    steamid?: StringWithAggregatesFilter<"TrackedUser"> | string
    vacbans?: IntWithAggregatesFilter<"TrackedUser"> | number
    gamebans?: IntWithAggregatesFilter<"TrackedUser"> | number
    date_added?: DateTimeWithAggregatesFilter<"TrackedUser"> | Date | string
  }

  export type UserTrackedWhereInput = {
    AND?: UserTrackedWhereInput | UserTrackedWhereInput[]
    OR?: UserTrackedWhereInput[]
    NOT?: UserTrackedWhereInput | UserTrackedWhereInput[]
    id?: StringFilter<"UserTracked"> | string
    userId?: StringFilter<"UserTracked"> | string
    trackedUserSteamid?: StringFilter<"UserTracked"> | string
    date_added?: DateTimeFilter<"UserTracked"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trackedUser?: XOR<TrackedUserScalarRelationFilter, TrackedUserWhereInput>
  }

  export type UserTrackedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trackedUserSteamid?: SortOrder
    date_added?: SortOrder
    user?: UserOrderByWithRelationInput
    trackedUser?: TrackedUserOrderByWithRelationInput
  }

  export type UserTrackedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_trackedUserSteamid?: UserTrackedUserIdTrackedUserSteamidCompoundUniqueInput
    AND?: UserTrackedWhereInput | UserTrackedWhereInput[]
    OR?: UserTrackedWhereInput[]
    NOT?: UserTrackedWhereInput | UserTrackedWhereInput[]
    userId?: StringFilter<"UserTracked"> | string
    trackedUserSteamid?: StringFilter<"UserTracked"> | string
    date_added?: DateTimeFilter<"UserTracked"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trackedUser?: XOR<TrackedUserScalarRelationFilter, TrackedUserWhereInput>
  }, "id" | "userId_trackedUserSteamid">

  export type UserTrackedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trackedUserSteamid?: SortOrder
    date_added?: SortOrder
    _count?: UserTrackedCountOrderByAggregateInput
    _max?: UserTrackedMaxOrderByAggregateInput
    _min?: UserTrackedMinOrderByAggregateInput
  }

  export type UserTrackedScalarWhereWithAggregatesInput = {
    AND?: UserTrackedScalarWhereWithAggregatesInput | UserTrackedScalarWhereWithAggregatesInput[]
    OR?: UserTrackedScalarWhereWithAggregatesInput[]
    NOT?: UserTrackedScalarWhereWithAggregatesInput | UserTrackedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTracked"> | string
    userId?: StringWithAggregatesFilter<"UserTracked"> | string
    trackedUserSteamid?: StringWithAggregatesFilter<"UserTracked"> | string
    date_added?: DateTimeWithAggregatesFilter<"UserTracked"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    hashed_password: string
    trackedUsers?: UserTrackedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    hashed_password: string
    trackedUsers?: UserTrackedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    trackedUsers?: UserTrackedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    trackedUsers?: UserTrackedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    hashed_password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedUserCreateInput = {
    steamid: string
    vacbans: number
    gamebans: number
    date_added?: Date | string
    trackedById?: UserTrackedCreateNestedManyWithoutTrackedUserInput
  }

  export type TrackedUserUncheckedCreateInput = {
    steamid: string
    vacbans: number
    gamebans: number
    date_added?: Date | string
    trackedById?: UserTrackedUncheckedCreateNestedManyWithoutTrackedUserInput
  }

  export type TrackedUserUpdateInput = {
    steamid?: StringFieldUpdateOperationsInput | string
    vacbans?: IntFieldUpdateOperationsInput | number
    gamebans?: IntFieldUpdateOperationsInput | number
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    trackedById?: UserTrackedUpdateManyWithoutTrackedUserNestedInput
  }

  export type TrackedUserUncheckedUpdateInput = {
    steamid?: StringFieldUpdateOperationsInput | string
    vacbans?: IntFieldUpdateOperationsInput | number
    gamebans?: IntFieldUpdateOperationsInput | number
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    trackedById?: UserTrackedUncheckedUpdateManyWithoutTrackedUserNestedInput
  }

  export type TrackedUserCreateManyInput = {
    steamid: string
    vacbans: number
    gamebans: number
    date_added?: Date | string
  }

  export type TrackedUserUpdateManyMutationInput = {
    steamid?: StringFieldUpdateOperationsInput | string
    vacbans?: IntFieldUpdateOperationsInput | number
    gamebans?: IntFieldUpdateOperationsInput | number
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedUserUncheckedUpdateManyInput = {
    steamid?: StringFieldUpdateOperationsInput | string
    vacbans?: IntFieldUpdateOperationsInput | number
    gamebans?: IntFieldUpdateOperationsInput | number
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackedCreateInput = {
    id?: string
    date_added?: Date | string
    user: UserCreateNestedOneWithoutTrackedUsersInput
    trackedUser: TrackedUserCreateNestedOneWithoutTrackedByIdInput
  }

  export type UserTrackedUncheckedCreateInput = {
    id?: string
    userId: string
    trackedUserSteamid: string
    date_added?: Date | string
  }

  export type UserTrackedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTrackedUsersNestedInput
    trackedUser?: TrackedUserUpdateOneRequiredWithoutTrackedByIdNestedInput
  }

  export type UserTrackedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trackedUserSteamid?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackedCreateManyInput = {
    id?: string
    userId: string
    trackedUserSteamid: string
    date_added?: Date | string
  }

  export type UserTrackedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trackedUserSteamid?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserTrackedListRelationFilter = {
    every?: UserTrackedWhereInput
    some?: UserTrackedWhereInput
    none?: UserTrackedWhereInput
  }

  export type UserTrackedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    hashed_password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    hashed_password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    hashed_password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TrackedUserCountOrderByAggregateInput = {
    steamid?: SortOrder
    vacbans?: SortOrder
    gamebans?: SortOrder
    date_added?: SortOrder
  }

  export type TrackedUserAvgOrderByAggregateInput = {
    vacbans?: SortOrder
    gamebans?: SortOrder
  }

  export type TrackedUserMaxOrderByAggregateInput = {
    steamid?: SortOrder
    vacbans?: SortOrder
    gamebans?: SortOrder
    date_added?: SortOrder
  }

  export type TrackedUserMinOrderByAggregateInput = {
    steamid?: SortOrder
    vacbans?: SortOrder
    gamebans?: SortOrder
    date_added?: SortOrder
  }

  export type TrackedUserSumOrderByAggregateInput = {
    vacbans?: SortOrder
    gamebans?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TrackedUserScalarRelationFilter = {
    is?: TrackedUserWhereInput
    isNot?: TrackedUserWhereInput
  }

  export type UserTrackedUserIdTrackedUserSteamidCompoundUniqueInput = {
    userId: string
    trackedUserSteamid: string
  }

  export type UserTrackedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackedUserSteamid?: SortOrder
    date_added?: SortOrder
  }

  export type UserTrackedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackedUserSteamid?: SortOrder
    date_added?: SortOrder
  }

  export type UserTrackedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackedUserSteamid?: SortOrder
    date_added?: SortOrder
  }

  export type UserTrackedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTrackedCreateWithoutUserInput, UserTrackedUncheckedCreateWithoutUserInput> | UserTrackedCreateWithoutUserInput[] | UserTrackedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTrackedCreateOrConnectWithoutUserInput | UserTrackedCreateOrConnectWithoutUserInput[]
    createMany?: UserTrackedCreateManyUserInputEnvelope
    connect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
  }

  export type UserTrackedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTrackedCreateWithoutUserInput, UserTrackedUncheckedCreateWithoutUserInput> | UserTrackedCreateWithoutUserInput[] | UserTrackedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTrackedCreateOrConnectWithoutUserInput | UserTrackedCreateOrConnectWithoutUserInput[]
    createMany?: UserTrackedCreateManyUserInputEnvelope
    connect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserTrackedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTrackedCreateWithoutUserInput, UserTrackedUncheckedCreateWithoutUserInput> | UserTrackedCreateWithoutUserInput[] | UserTrackedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTrackedCreateOrConnectWithoutUserInput | UserTrackedCreateOrConnectWithoutUserInput[]
    upsert?: UserTrackedUpsertWithWhereUniqueWithoutUserInput | UserTrackedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTrackedCreateManyUserInputEnvelope
    set?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    disconnect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    delete?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    connect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    update?: UserTrackedUpdateWithWhereUniqueWithoutUserInput | UserTrackedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTrackedUpdateManyWithWhereWithoutUserInput | UserTrackedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTrackedScalarWhereInput | UserTrackedScalarWhereInput[]
  }

  export type UserTrackedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTrackedCreateWithoutUserInput, UserTrackedUncheckedCreateWithoutUserInput> | UserTrackedCreateWithoutUserInput[] | UserTrackedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTrackedCreateOrConnectWithoutUserInput | UserTrackedCreateOrConnectWithoutUserInput[]
    upsert?: UserTrackedUpsertWithWhereUniqueWithoutUserInput | UserTrackedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTrackedCreateManyUserInputEnvelope
    set?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    disconnect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    delete?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    connect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    update?: UserTrackedUpdateWithWhereUniqueWithoutUserInput | UserTrackedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTrackedUpdateManyWithWhereWithoutUserInput | UserTrackedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTrackedScalarWhereInput | UserTrackedScalarWhereInput[]
  }

  export type UserTrackedCreateNestedManyWithoutTrackedUserInput = {
    create?: XOR<UserTrackedCreateWithoutTrackedUserInput, UserTrackedUncheckedCreateWithoutTrackedUserInput> | UserTrackedCreateWithoutTrackedUserInput[] | UserTrackedUncheckedCreateWithoutTrackedUserInput[]
    connectOrCreate?: UserTrackedCreateOrConnectWithoutTrackedUserInput | UserTrackedCreateOrConnectWithoutTrackedUserInput[]
    createMany?: UserTrackedCreateManyTrackedUserInputEnvelope
    connect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
  }

  export type UserTrackedUncheckedCreateNestedManyWithoutTrackedUserInput = {
    create?: XOR<UserTrackedCreateWithoutTrackedUserInput, UserTrackedUncheckedCreateWithoutTrackedUserInput> | UserTrackedCreateWithoutTrackedUserInput[] | UserTrackedUncheckedCreateWithoutTrackedUserInput[]
    connectOrCreate?: UserTrackedCreateOrConnectWithoutTrackedUserInput | UserTrackedCreateOrConnectWithoutTrackedUserInput[]
    createMany?: UserTrackedCreateManyTrackedUserInputEnvelope
    connect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserTrackedUpdateManyWithoutTrackedUserNestedInput = {
    create?: XOR<UserTrackedCreateWithoutTrackedUserInput, UserTrackedUncheckedCreateWithoutTrackedUserInput> | UserTrackedCreateWithoutTrackedUserInput[] | UserTrackedUncheckedCreateWithoutTrackedUserInput[]
    connectOrCreate?: UserTrackedCreateOrConnectWithoutTrackedUserInput | UserTrackedCreateOrConnectWithoutTrackedUserInput[]
    upsert?: UserTrackedUpsertWithWhereUniqueWithoutTrackedUserInput | UserTrackedUpsertWithWhereUniqueWithoutTrackedUserInput[]
    createMany?: UserTrackedCreateManyTrackedUserInputEnvelope
    set?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    disconnect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    delete?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    connect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    update?: UserTrackedUpdateWithWhereUniqueWithoutTrackedUserInput | UserTrackedUpdateWithWhereUniqueWithoutTrackedUserInput[]
    updateMany?: UserTrackedUpdateManyWithWhereWithoutTrackedUserInput | UserTrackedUpdateManyWithWhereWithoutTrackedUserInput[]
    deleteMany?: UserTrackedScalarWhereInput | UserTrackedScalarWhereInput[]
  }

  export type UserTrackedUncheckedUpdateManyWithoutTrackedUserNestedInput = {
    create?: XOR<UserTrackedCreateWithoutTrackedUserInput, UserTrackedUncheckedCreateWithoutTrackedUserInput> | UserTrackedCreateWithoutTrackedUserInput[] | UserTrackedUncheckedCreateWithoutTrackedUserInput[]
    connectOrCreate?: UserTrackedCreateOrConnectWithoutTrackedUserInput | UserTrackedCreateOrConnectWithoutTrackedUserInput[]
    upsert?: UserTrackedUpsertWithWhereUniqueWithoutTrackedUserInput | UserTrackedUpsertWithWhereUniqueWithoutTrackedUserInput[]
    createMany?: UserTrackedCreateManyTrackedUserInputEnvelope
    set?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    disconnect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    delete?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    connect?: UserTrackedWhereUniqueInput | UserTrackedWhereUniqueInput[]
    update?: UserTrackedUpdateWithWhereUniqueWithoutTrackedUserInput | UserTrackedUpdateWithWhereUniqueWithoutTrackedUserInput[]
    updateMany?: UserTrackedUpdateManyWithWhereWithoutTrackedUserInput | UserTrackedUpdateManyWithWhereWithoutTrackedUserInput[]
    deleteMany?: UserTrackedScalarWhereInput | UserTrackedScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTrackedUsersInput = {
    create?: XOR<UserCreateWithoutTrackedUsersInput, UserUncheckedCreateWithoutTrackedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrackedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type TrackedUserCreateNestedOneWithoutTrackedByIdInput = {
    create?: XOR<TrackedUserCreateWithoutTrackedByIdInput, TrackedUserUncheckedCreateWithoutTrackedByIdInput>
    connectOrCreate?: TrackedUserCreateOrConnectWithoutTrackedByIdInput
    connect?: TrackedUserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTrackedUsersNestedInput = {
    create?: XOR<UserCreateWithoutTrackedUsersInput, UserUncheckedCreateWithoutTrackedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrackedUsersInput
    upsert?: UserUpsertWithoutTrackedUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrackedUsersInput, UserUpdateWithoutTrackedUsersInput>, UserUncheckedUpdateWithoutTrackedUsersInput>
  }

  export type TrackedUserUpdateOneRequiredWithoutTrackedByIdNestedInput = {
    create?: XOR<TrackedUserCreateWithoutTrackedByIdInput, TrackedUserUncheckedCreateWithoutTrackedByIdInput>
    connectOrCreate?: TrackedUserCreateOrConnectWithoutTrackedByIdInput
    upsert?: TrackedUserUpsertWithoutTrackedByIdInput
    connect?: TrackedUserWhereUniqueInput
    update?: XOR<XOR<TrackedUserUpdateToOneWithWhereWithoutTrackedByIdInput, TrackedUserUpdateWithoutTrackedByIdInput>, TrackedUserUncheckedUpdateWithoutTrackedByIdInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserTrackedCreateWithoutUserInput = {
    id?: string
    date_added?: Date | string
    trackedUser: TrackedUserCreateNestedOneWithoutTrackedByIdInput
  }

  export type UserTrackedUncheckedCreateWithoutUserInput = {
    id?: string
    trackedUserSteamid: string
    date_added?: Date | string
  }

  export type UserTrackedCreateOrConnectWithoutUserInput = {
    where: UserTrackedWhereUniqueInput
    create: XOR<UserTrackedCreateWithoutUserInput, UserTrackedUncheckedCreateWithoutUserInput>
  }

  export type UserTrackedCreateManyUserInputEnvelope = {
    data: UserTrackedCreateManyUserInput | UserTrackedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTrackedUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTrackedWhereUniqueInput
    update: XOR<UserTrackedUpdateWithoutUserInput, UserTrackedUncheckedUpdateWithoutUserInput>
    create: XOR<UserTrackedCreateWithoutUserInput, UserTrackedUncheckedCreateWithoutUserInput>
  }

  export type UserTrackedUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTrackedWhereUniqueInput
    data: XOR<UserTrackedUpdateWithoutUserInput, UserTrackedUncheckedUpdateWithoutUserInput>
  }

  export type UserTrackedUpdateManyWithWhereWithoutUserInput = {
    where: UserTrackedScalarWhereInput
    data: XOR<UserTrackedUpdateManyMutationInput, UserTrackedUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTrackedScalarWhereInput = {
    AND?: UserTrackedScalarWhereInput | UserTrackedScalarWhereInput[]
    OR?: UserTrackedScalarWhereInput[]
    NOT?: UserTrackedScalarWhereInput | UserTrackedScalarWhereInput[]
    id?: StringFilter<"UserTracked"> | string
    userId?: StringFilter<"UserTracked"> | string
    trackedUserSteamid?: StringFilter<"UserTracked"> | string
    date_added?: DateTimeFilter<"UserTracked"> | Date | string
  }

  export type UserTrackedCreateWithoutTrackedUserInput = {
    id?: string
    date_added?: Date | string
    user: UserCreateNestedOneWithoutTrackedUsersInput
  }

  export type UserTrackedUncheckedCreateWithoutTrackedUserInput = {
    id?: string
    userId: string
    date_added?: Date | string
  }

  export type UserTrackedCreateOrConnectWithoutTrackedUserInput = {
    where: UserTrackedWhereUniqueInput
    create: XOR<UserTrackedCreateWithoutTrackedUserInput, UserTrackedUncheckedCreateWithoutTrackedUserInput>
  }

  export type UserTrackedCreateManyTrackedUserInputEnvelope = {
    data: UserTrackedCreateManyTrackedUserInput | UserTrackedCreateManyTrackedUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTrackedUpsertWithWhereUniqueWithoutTrackedUserInput = {
    where: UserTrackedWhereUniqueInput
    update: XOR<UserTrackedUpdateWithoutTrackedUserInput, UserTrackedUncheckedUpdateWithoutTrackedUserInput>
    create: XOR<UserTrackedCreateWithoutTrackedUserInput, UserTrackedUncheckedCreateWithoutTrackedUserInput>
  }

  export type UserTrackedUpdateWithWhereUniqueWithoutTrackedUserInput = {
    where: UserTrackedWhereUniqueInput
    data: XOR<UserTrackedUpdateWithoutTrackedUserInput, UserTrackedUncheckedUpdateWithoutTrackedUserInput>
  }

  export type UserTrackedUpdateManyWithWhereWithoutTrackedUserInput = {
    where: UserTrackedScalarWhereInput
    data: XOR<UserTrackedUpdateManyMutationInput, UserTrackedUncheckedUpdateManyWithoutTrackedUserInput>
  }

  export type UserCreateWithoutTrackedUsersInput = {
    id?: string
    email: string
    username: string
    hashed_password: string
  }

  export type UserUncheckedCreateWithoutTrackedUsersInput = {
    id?: string
    email: string
    username: string
    hashed_password: string
  }

  export type UserCreateOrConnectWithoutTrackedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrackedUsersInput, UserUncheckedCreateWithoutTrackedUsersInput>
  }

  export type TrackedUserCreateWithoutTrackedByIdInput = {
    steamid: string
    vacbans: number
    gamebans: number
    date_added?: Date | string
  }

  export type TrackedUserUncheckedCreateWithoutTrackedByIdInput = {
    steamid: string
    vacbans: number
    gamebans: number
    date_added?: Date | string
  }

  export type TrackedUserCreateOrConnectWithoutTrackedByIdInput = {
    where: TrackedUserWhereUniqueInput
    create: XOR<TrackedUserCreateWithoutTrackedByIdInput, TrackedUserUncheckedCreateWithoutTrackedByIdInput>
  }

  export type UserUpsertWithoutTrackedUsersInput = {
    update: XOR<UserUpdateWithoutTrackedUsersInput, UserUncheckedUpdateWithoutTrackedUsersInput>
    create: XOR<UserCreateWithoutTrackedUsersInput, UserUncheckedCreateWithoutTrackedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrackedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrackedUsersInput, UserUncheckedUpdateWithoutTrackedUsersInput>
  }

  export type UserUpdateWithoutTrackedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutTrackedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedUserUpsertWithoutTrackedByIdInput = {
    update: XOR<TrackedUserUpdateWithoutTrackedByIdInput, TrackedUserUncheckedUpdateWithoutTrackedByIdInput>
    create: XOR<TrackedUserCreateWithoutTrackedByIdInput, TrackedUserUncheckedCreateWithoutTrackedByIdInput>
    where?: TrackedUserWhereInput
  }

  export type TrackedUserUpdateToOneWithWhereWithoutTrackedByIdInput = {
    where?: TrackedUserWhereInput
    data: XOR<TrackedUserUpdateWithoutTrackedByIdInput, TrackedUserUncheckedUpdateWithoutTrackedByIdInput>
  }

  export type TrackedUserUpdateWithoutTrackedByIdInput = {
    steamid?: StringFieldUpdateOperationsInput | string
    vacbans?: IntFieldUpdateOperationsInput | number
    gamebans?: IntFieldUpdateOperationsInput | number
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedUserUncheckedUpdateWithoutTrackedByIdInput = {
    steamid?: StringFieldUpdateOperationsInput | string
    vacbans?: IntFieldUpdateOperationsInput | number
    gamebans?: IntFieldUpdateOperationsInput | number
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackedCreateManyUserInput = {
    id?: string
    trackedUserSteamid: string
    date_added?: Date | string
  }

  export type UserTrackedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    trackedUser?: TrackedUserUpdateOneRequiredWithoutTrackedByIdNestedInput
  }

  export type UserTrackedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackedUserSteamid?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackedUserSteamid?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackedCreateManyTrackedUserInput = {
    id?: string
    userId: string
    date_added?: Date | string
  }

  export type UserTrackedUpdateWithoutTrackedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTrackedUsersNestedInput
  }

  export type UserTrackedUncheckedUpdateWithoutTrackedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackedUncheckedUpdateManyWithoutTrackedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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