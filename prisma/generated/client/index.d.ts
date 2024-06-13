
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
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
/**
 * Model Bookmark
 * 
 */
export type Bookmark = $Result.DefaultSelection<Prisma.$BookmarkPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>
/**
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model TripEquipment
 * 
 */
export type TripEquipment = $Result.DefaultSelection<Prisma.$TripEquipmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const EquipmentType: {
  TENT: 'TENT',
  ROPE: 'ROPE',
  BACKPACK: 'BACKPACK',
  SLEEPING_BAG: 'SLEEPING_BAG',
  COOKING_KIT: 'COOKING_KIT'
};

export type EquipmentType = (typeof EquipmentType)[keyof typeof EquipmentType]

}

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type EquipmentType = $Enums.EquipmentType

export const EquipmentType: typeof $Enums.EquipmentType

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs>;

  /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<ExtArgs>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs>;

  /**
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs>;

  /**
   * `prisma.tripEquipment`: Exposes CRUD operations for the **TripEquipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripEquipments
    * const tripEquipments = await prisma.tripEquipment.findMany()
    * ```
    */
  get tripEquipment(): Prisma.TripEquipmentDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
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
    User: 'User',
    UserSettings: 'UserSettings',
    Bookmark: 'Bookmark',
    Trip: 'Trip',
    Block: 'Block',
    Point: 'Point',
    TripEquipment: 'TripEquipment'
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
      modelProps: 'user' | 'userSettings' | 'bookmark' | 'trip' | 'block' | 'point' | 'tripEquipment'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>,
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
      Bookmark: {
        payload: Prisma.$BookmarkPayload<ExtArgs>
        fields: Prisma.BookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findFirst: {
            args: Prisma.BookmarkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findMany: {
            args: Prisma.BookmarkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          create: {
            args: Prisma.BookmarkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          createMany: {
            args: Prisma.BookmarkCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          delete: {
            args: Prisma.BookmarkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          update: {
            args: Prisma.BookmarkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookmarkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.BookmarkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCountArgs<ExtArgs>,
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>,
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>,
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>,
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
      TripEquipment: {
        payload: Prisma.$TripEquipmentPayload<ExtArgs>
        fields: Prisma.TripEquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripEquipmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripEquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripEquipmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripEquipmentPayload>
          }
          findFirst: {
            args: Prisma.TripEquipmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripEquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripEquipmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripEquipmentPayload>
          }
          findMany: {
            args: Prisma.TripEquipmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripEquipmentPayload>[]
          }
          create: {
            args: Prisma.TripEquipmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripEquipmentPayload>
          }
          createMany: {
            args: Prisma.TripEquipmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripEquipmentCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripEquipmentPayload>[]
          }
          delete: {
            args: Prisma.TripEquipmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripEquipmentPayload>
          }
          update: {
            args: Prisma.TripEquipmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripEquipmentPayload>
          }
          deleteMany: {
            args: Prisma.TripEquipmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TripEquipmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TripEquipmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripEquipmentPayload>
          }
          aggregate: {
            args: Prisma.TripEquipmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTripEquipment>
          }
          groupBy: {
            args: Prisma.TripEquipmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TripEquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripEquipmentCountArgs<ExtArgs>,
            result: $Utils.Optional<TripEquipmentCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    trips: number
    bookmarks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | UserCountOutputTypeCountTripsArgs
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
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
  export type UserCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    blocks: number
    equipment: number
    bookmarks: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | TripCountOutputTypeCountBlocksArgs
    equipment?: boolean | TripCountOutputTypeCountEquipmentArgs
    bookmarks?: boolean | TripCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripEquipmentWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }


  /**
   * Count Type BlockCountOutputType
   */

  export type BlockCountOutputType = {
    points: number
  }

  export type BlockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points?: boolean | BlockCountOutputTypeCountPointsArgs
  }

  // Custom InputTypes
  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCountOutputType
     */
    select?: BlockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
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
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    username: string | null
    password: string | null
    avatarUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    username: string | null
    password: string | null
    avatarUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    username: number
    password: number
    avatarUrl: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    username?: true
    password?: true
    avatarUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    username?: true
    password?: true
    avatarUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    username?: true
    password?: true
    avatarUrl?: true
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
    createdAt: Date
    updatedAt: Date
    email: string
    username: string
    password: string
    avatarUrl: string | null
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
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatarUrl?: boolean
    trips?: boolean | User$tripsArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatarUrl?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | User$tripsArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trips: Prisma.$TripPayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
      settings: Prisma.$UserSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      username: string
      password: string
      avatarUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    trips<T extends User$tripsArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findMany'> | Null>;

    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findMany'> | Null>;

    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
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
  }

  /**
   * User.trips
   */
  export type User$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSettingsSumAggregateOutputType = {
    id: number | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: number | null
    userId: string | null
    notifications: boolean | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    notifications: boolean | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    userId: number
    notifications: number
    language: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSettingsAvgAggregateInputType = {
    id?: true
  }

  export type UserSettingsSumAggregateInputType = {
    id?: true
  }

  export type UserSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    notifications?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    notifications?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    notifications?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _avg?: UserSettingsAvgAggregateInputType
    _sum?: UserSettingsSumAggregateInputType
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: number
    userId: string
    notifications: boolean
    language: string
    createdAt: Date
    updatedAt: Date
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notifications?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notifications?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    notifications?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      notifications: boolean
      language: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserSettingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>
    ): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserSettingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>
    ): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserSettingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
    **/
    create<T extends UserSettingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>
    ): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserSettingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
    **/
    delete<T extends UserSettingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>
    ): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserSettingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>
    ): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserSettingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserSettingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
    **/
    upsert<T extends UserSettingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>
    ): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the UserSettings model
   */ 
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'Int'>
    readonly userId: FieldRef<"UserSettings", 'String'>
    readonly notifications: FieldRef<"UserSettings", 'Boolean'>
    readonly language: FieldRef<"UserSettings", 'String'>
    readonly createdAt: FieldRef<"UserSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model Bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmarkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmarkCountAggregateOutputType = {
    id: number
    userId: number
    tripId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithAggregationInput | BookmarkOrderByWithAggregationInput[]
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: BookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    id: string
    userId: string
    tripId: string
    createdAt: Date
    updatedAt: Date
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    tripId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type BookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $BookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tripId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }

  type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = $Result.GetResult<Prisma.$BookmarkPayload, S>

  type BookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'], meta: { name: 'Bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookmarkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bookmark that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookmarkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookmarkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
    **/
    create<T extends BookmarkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkCreateArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bookmarks.
     * @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BookmarkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {BookmarkCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends BookmarkCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
    **/
    delete<T extends BookmarkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookmarkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookmarkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookmarkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
    **/
    upsert<T extends BookmarkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
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
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmark model
   */
  readonly fields: BookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Bookmark model
   */ 
  interface BookmarkFieldRefs {
    readonly id: FieldRef<"Bookmark", 'String'>
    readonly userId: FieldRef<"Bookmark", 'String'>
    readonly tripId: FieldRef<"Bookmark", 'String'>
    readonly createdAt: FieldRef<"Bookmark", 'DateTime'>
    readonly updatedAt: FieldRef<"Bookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmark findUnique
   */
  export type BookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findFirst
   */
  export type BookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }

  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookmark createManyAndReturn
   */
  export type BookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
  }

  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }

  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput
  }

  /**
   * Bookmark without action
   */
  export type BookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    duration: number | null
  }

  export type TripSumAggregateOutputType = {
    duration: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    userId: string | null
    startDate: Date | null
    endDate: Date | null
    duration: number | null
    difficulty: $Enums.Difficulty | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    userId: string | null
    startDate: Date | null
    endDate: Date | null
    duration: number | null
    difficulty: $Enums.Difficulty | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    userId: number
    startDate: number
    endDate: number
    duration: number
    difficulty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    duration?: true
  }

  export type TripSumAggregateInputType = {
    duration?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    userId?: true
    startDate?: true
    endDate?: true
    duration?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    userId?: true
    startDate?: true
    endDate?: true
    duration?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    userId?: true
    startDate?: true
    endDate?: true
    duration?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    name: string
    description: string | null
    imageUrl: string | null
    userId: string
    startDate: Date | null
    endDate: Date | null
    duration: number | null
    difficulty: $Enums.Difficulty
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blocks?: boolean | Trip$blocksArgs<ExtArgs>
    equipment?: boolean | Trip$equipmentArgs<ExtArgs>
    bookmarks?: boolean | Trip$bookmarksArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blocks?: boolean | Trip$blocksArgs<ExtArgs>
    equipment?: boolean | Trip$equipmentArgs<ExtArgs>
    bookmarks?: boolean | Trip$bookmarksArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      blocks: Prisma.$BlockPayload<ExtArgs>[]
      equipment: Prisma.$TripEquipmentPayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      imageUrl: string | null
      userId: string
      startDate: Date | null
      endDate: Date | null
      duration: number | null
      difficulty: $Enums.Difficulty
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TripFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TripFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TripFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
    **/
    create<T extends TripCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TripCreateArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TripCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TripCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
    **/
    delete<T extends TripDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TripDeleteArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TripUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TripUpdateArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TripDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TripUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
    **/
    upsert<T extends TripUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TripUpsertArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    blocks<T extends Trip$blocksArgs<ExtArgs> = {}>(args?: Subset<T, Trip$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findMany'> | Null>;

    equipment<T extends Trip$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, Trip$equipmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    bookmarks<T extends Trip$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Trip$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Trip model
   */ 
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly name: FieldRef<"Trip", 'String'>
    readonly description: FieldRef<"Trip", 'String'>
    readonly imageUrl: FieldRef<"Trip", 'String'>
    readonly userId: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
    readonly duration: FieldRef<"Trip", 'Int'>
    readonly difficulty: FieldRef<"Trip", 'Difficulty'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
  }

  /**
   * Trip.blocks
   */
  export type Trip$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    cursor?: BlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Trip.equipment
   */
  export type Trip$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
    where?: TripEquipmentWhereInput
    orderBy?: TripEquipmentOrderByWithRelationInput | TripEquipmentOrderByWithRelationInput[]
    cursor?: TripEquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripEquipmentScalarFieldEnum | TripEquipmentScalarFieldEnum[]
  }

  /**
   * Trip.bookmarks
   */
  export type Trip$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockMinAggregateOutputType = {
    id: string | null
    type: string | null
    content: string | null
    tripId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlockMaxAggregateOutputType = {
    id: string | null
    type: string | null
    content: string | null
    tripId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    type: number
    content: number
    tripId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlockMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    tripId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    tripId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    tripId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: string
    type: string
    content: string
    tripId: string
    createdAt: Date
    updatedAt: Date
    _count: BlockCountAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    tripId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    points?: boolean | Block$pointsArgs<ExtArgs>
    _count?: boolean | BlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    tripId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectScalar = {
    id?: boolean
    type?: boolean
    content?: boolean
    tripId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    points?: boolean | Block$pointsArgs<ExtArgs>
    _count?: boolean | BlockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      points: Prisma.$PointPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      content: string
      tripId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["block"]>
    composites: {}
  }

  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
    **/
    create<T extends BlockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCreateArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BlockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blocks and returns the data saved in the database.
     * @param {BlockCreateManyAndReturnArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends BlockCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
    **/
    delete<T extends BlockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
    **/
    upsert<T extends BlockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
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
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    points<T extends Block$pointsArgs<ExtArgs> = {}>(args?: Subset<T, Block$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Block model
   */ 
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'String'>
    readonly type: FieldRef<"Block", 'String'>
    readonly content: FieldRef<"Block", 'String'>
    readonly tripId: FieldRef<"Block", 'String'>
    readonly createdAt: FieldRef<"Block", 'DateTime'>
    readonly updatedAt: FieldRef<"Block", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Block createManyAndReturn
   */
  export type BlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
  }

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }

  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
  }

  /**
   * Block.points
   */
  export type Block$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
  }


  /**
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PointSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PointMinAggregateOutputType = {
    id: string | null
    latitude: number | null
    longitude: number | null
    name: string | null
    description: string | null
    blockId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PointMaxAggregateOutputType = {
    id: string | null
    latitude: number | null
    longitude: number | null
    name: string | null
    description: string | null
    blockId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PointCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    name: number
    description: number
    blockId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PointAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PointSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PointMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    name?: true
    description?: true
    blockId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PointMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    name?: true
    description?: true
    blockId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PointCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    name?: true
    description?: true
    blockId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _avg?: PointAvgAggregateInputType
    _sum?: PointSumAggregateInputType
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    id: string
    latitude: number
    longitude: number
    name: string | null
    description: string | null
    blockId: string
    createdAt: Date
    updatedAt: Date
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    name?: boolean
    description?: boolean
    blockId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    block?: boolean | BlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    name?: boolean
    description?: boolean
    blockId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    block?: boolean | BlockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    name?: boolean
    description?: boolean
    blockId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | BlockDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | BlockDefaultArgs<ExtArgs>
  }

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      block: Prisma.$BlockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      latitude: number
      longitude: number
      name: string | null
      description: string | null
      blockId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PointFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PointFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointWithIdOnly = await prisma.point.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PointFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
    **/
    create<T extends PointCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PointCreateArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PointCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PointCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
    **/
    delete<T extends PointDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PointDeleteArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PointUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PointUpdateArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PointDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PointUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
    **/
    upsert<T extends PointUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PointUpsertArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
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
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    block<T extends BlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlockDefaultArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Point model
   */ 
  interface PointFieldRefs {
    readonly id: FieldRef<"Point", 'String'>
    readonly latitude: FieldRef<"Point", 'Float'>
    readonly longitude: FieldRef<"Point", 'Float'>
    readonly name: FieldRef<"Point", 'String'>
    readonly description: FieldRef<"Point", 'String'>
    readonly blockId: FieldRef<"Point", 'String'>
    readonly createdAt: FieldRef<"Point", 'DateTime'>
    readonly updatedAt: FieldRef<"Point", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


  /**
   * Model TripEquipment
   */

  export type AggregateTripEquipment = {
    _count: TripEquipmentCountAggregateOutputType | null
    _min: TripEquipmentMinAggregateOutputType | null
    _max: TripEquipmentMaxAggregateOutputType | null
  }

  export type TripEquipmentMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    type: $Enums.EquipmentType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripEquipmentMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    type: $Enums.EquipmentType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripEquipmentCountAggregateOutputType = {
    id: number
    tripId: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripEquipmentMinAggregateInputType = {
    id?: true
    tripId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripEquipmentMaxAggregateInputType = {
    id?: true
    tripId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripEquipmentCountAggregateInputType = {
    id?: true
    tripId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripEquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripEquipment to aggregate.
     */
    where?: TripEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripEquipments to fetch.
     */
    orderBy?: TripEquipmentOrderByWithRelationInput | TripEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripEquipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripEquipments
    **/
    _count?: true | TripEquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripEquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripEquipmentMaxAggregateInputType
  }

  export type GetTripEquipmentAggregateType<T extends TripEquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTripEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripEquipment[P]>
      : GetScalarType<T[P], AggregateTripEquipment[P]>
  }




  export type TripEquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripEquipmentWhereInput
    orderBy?: TripEquipmentOrderByWithAggregationInput | TripEquipmentOrderByWithAggregationInput[]
    by: TripEquipmentScalarFieldEnum[] | TripEquipmentScalarFieldEnum
    having?: TripEquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripEquipmentCountAggregateInputType | true
    _min?: TripEquipmentMinAggregateInputType
    _max?: TripEquipmentMaxAggregateInputType
  }

  export type TripEquipmentGroupByOutputType = {
    id: string
    tripId: string
    type: $Enums.EquipmentType
    createdAt: Date
    updatedAt: Date
    _count: TripEquipmentCountAggregateOutputType | null
    _min: TripEquipmentMinAggregateOutputType | null
    _max: TripEquipmentMaxAggregateOutputType | null
  }

  type GetTripEquipmentGroupByPayload<T extends TripEquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripEquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripEquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripEquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], TripEquipmentGroupByOutputType[P]>
        }
      >
    >


  export type TripEquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripEquipment"]>

  export type TripEquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripEquipment"]>

  export type TripEquipmentSelectScalar = {
    id?: boolean
    tripId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripEquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripEquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TripEquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripEquipment"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      type: $Enums.EquipmentType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripEquipment"]>
    composites: {}
  }

  type TripEquipmentGetPayload<S extends boolean | null | undefined | TripEquipmentDefaultArgs> = $Result.GetResult<Prisma.$TripEquipmentPayload, S>

  type TripEquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TripEquipmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TripEquipmentCountAggregateInputType | true
    }

  export interface TripEquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripEquipment'], meta: { name: 'TripEquipment' } }
    /**
     * Find zero or one TripEquipment that matches the filter.
     * @param {TripEquipmentFindUniqueArgs} args - Arguments to find a TripEquipment
     * @example
     * // Get one TripEquipment
     * const tripEquipment = await prisma.tripEquipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TripEquipmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TripEquipmentFindUniqueArgs<ExtArgs>>
    ): Prisma__TripEquipmentClient<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TripEquipment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TripEquipmentFindUniqueOrThrowArgs} args - Arguments to find a TripEquipment
     * @example
     * // Get one TripEquipment
     * const tripEquipment = await prisma.tripEquipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TripEquipmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TripEquipmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TripEquipmentClient<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TripEquipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripEquipmentFindFirstArgs} args - Arguments to find a TripEquipment
     * @example
     * // Get one TripEquipment
     * const tripEquipment = await prisma.tripEquipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TripEquipmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TripEquipmentFindFirstArgs<ExtArgs>>
    ): Prisma__TripEquipmentClient<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TripEquipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripEquipmentFindFirstOrThrowArgs} args - Arguments to find a TripEquipment
     * @example
     * // Get one TripEquipment
     * const tripEquipment = await prisma.tripEquipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TripEquipmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TripEquipmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TripEquipmentClient<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TripEquipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripEquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripEquipments
     * const tripEquipments = await prisma.tripEquipment.findMany()
     * 
     * // Get first 10 TripEquipments
     * const tripEquipments = await prisma.tripEquipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripEquipmentWithIdOnly = await prisma.tripEquipment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TripEquipmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripEquipmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TripEquipment.
     * @param {TripEquipmentCreateArgs} args - Arguments to create a TripEquipment.
     * @example
     * // Create one TripEquipment
     * const TripEquipment = await prisma.tripEquipment.create({
     *   data: {
     *     // ... data to create a TripEquipment
     *   }
     * })
     * 
    **/
    create<T extends TripEquipmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TripEquipmentCreateArgs<ExtArgs>>
    ): Prisma__TripEquipmentClient<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TripEquipments.
     * @param {TripEquipmentCreateManyArgs} args - Arguments to create many TripEquipments.
     * @example
     * // Create many TripEquipments
     * const tripEquipment = await prisma.tripEquipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TripEquipmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripEquipmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripEquipments and returns the data saved in the database.
     * @param {TripEquipmentCreateManyAndReturnArgs} args - Arguments to create many TripEquipments.
     * @example
     * // Create many TripEquipments
     * const tripEquipment = await prisma.tripEquipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripEquipments and only return the `id`
     * const tripEquipmentWithIdOnly = await prisma.tripEquipment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TripEquipmentCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TripEquipmentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a TripEquipment.
     * @param {TripEquipmentDeleteArgs} args - Arguments to delete one TripEquipment.
     * @example
     * // Delete one TripEquipment
     * const TripEquipment = await prisma.tripEquipment.delete({
     *   where: {
     *     // ... filter to delete one TripEquipment
     *   }
     * })
     * 
    **/
    delete<T extends TripEquipmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TripEquipmentDeleteArgs<ExtArgs>>
    ): Prisma__TripEquipmentClient<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TripEquipment.
     * @param {TripEquipmentUpdateArgs} args - Arguments to update one TripEquipment.
     * @example
     * // Update one TripEquipment
     * const tripEquipment = await prisma.tripEquipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TripEquipmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TripEquipmentUpdateArgs<ExtArgs>>
    ): Prisma__TripEquipmentClient<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TripEquipments.
     * @param {TripEquipmentDeleteManyArgs} args - Arguments to filter TripEquipments to delete.
     * @example
     * // Delete a few TripEquipments
     * const { count } = await prisma.tripEquipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TripEquipmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripEquipmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripEquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripEquipments
     * const tripEquipment = await prisma.tripEquipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TripEquipmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TripEquipmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TripEquipment.
     * @param {TripEquipmentUpsertArgs} args - Arguments to update or create a TripEquipment.
     * @example
     * // Update or create a TripEquipment
     * const tripEquipment = await prisma.tripEquipment.upsert({
     *   create: {
     *     // ... data to create a TripEquipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripEquipment we want to update
     *   }
     * })
    **/
    upsert<T extends TripEquipmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TripEquipmentUpsertArgs<ExtArgs>>
    ): Prisma__TripEquipmentClient<$Result.GetResult<Prisma.$TripEquipmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TripEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripEquipmentCountArgs} args - Arguments to filter TripEquipments to count.
     * @example
     * // Count the number of TripEquipments
     * const count = await prisma.tripEquipment.count({
     *   where: {
     *     // ... the filter for the TripEquipments we want to count
     *   }
     * })
    **/
    count<T extends TripEquipmentCountArgs>(
      args?: Subset<T, TripEquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripEquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripEquipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripEquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripEquipmentAggregateArgs>(args: Subset<T, TripEquipmentAggregateArgs>): Prisma.PrismaPromise<GetTripEquipmentAggregateType<T>>

    /**
     * Group by TripEquipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripEquipmentGroupByArgs} args - Group by arguments.
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
      T extends TripEquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripEquipmentGroupByArgs['orderBy'] }
        : { orderBy?: TripEquipmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripEquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripEquipment model
   */
  readonly fields: TripEquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripEquipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripEquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the TripEquipment model
   */ 
  interface TripEquipmentFieldRefs {
    readonly id: FieldRef<"TripEquipment", 'String'>
    readonly tripId: FieldRef<"TripEquipment", 'String'>
    readonly type: FieldRef<"TripEquipment", 'EquipmentType'>
    readonly createdAt: FieldRef<"TripEquipment", 'DateTime'>
    readonly updatedAt: FieldRef<"TripEquipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripEquipment findUnique
   */
  export type TripEquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which TripEquipment to fetch.
     */
    where: TripEquipmentWhereUniqueInput
  }

  /**
   * TripEquipment findUniqueOrThrow
   */
  export type TripEquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which TripEquipment to fetch.
     */
    where: TripEquipmentWhereUniqueInput
  }

  /**
   * TripEquipment findFirst
   */
  export type TripEquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which TripEquipment to fetch.
     */
    where?: TripEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripEquipments to fetch.
     */
    orderBy?: TripEquipmentOrderByWithRelationInput | TripEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripEquipments.
     */
    cursor?: TripEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripEquipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripEquipments.
     */
    distinct?: TripEquipmentScalarFieldEnum | TripEquipmentScalarFieldEnum[]
  }

  /**
   * TripEquipment findFirstOrThrow
   */
  export type TripEquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which TripEquipment to fetch.
     */
    where?: TripEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripEquipments to fetch.
     */
    orderBy?: TripEquipmentOrderByWithRelationInput | TripEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripEquipments.
     */
    cursor?: TripEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripEquipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripEquipments.
     */
    distinct?: TripEquipmentScalarFieldEnum | TripEquipmentScalarFieldEnum[]
  }

  /**
   * TripEquipment findMany
   */
  export type TripEquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which TripEquipments to fetch.
     */
    where?: TripEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripEquipments to fetch.
     */
    orderBy?: TripEquipmentOrderByWithRelationInput | TripEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripEquipments.
     */
    cursor?: TripEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripEquipments.
     */
    skip?: number
    distinct?: TripEquipmentScalarFieldEnum | TripEquipmentScalarFieldEnum[]
  }

  /**
   * TripEquipment create
   */
  export type TripEquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TripEquipment.
     */
    data: XOR<TripEquipmentCreateInput, TripEquipmentUncheckedCreateInput>
  }

  /**
   * TripEquipment createMany
   */
  export type TripEquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripEquipments.
     */
    data: TripEquipmentCreateManyInput | TripEquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripEquipment createManyAndReturn
   */
  export type TripEquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TripEquipments.
     */
    data: TripEquipmentCreateManyInput | TripEquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripEquipment update
   */
  export type TripEquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TripEquipment.
     */
    data: XOR<TripEquipmentUpdateInput, TripEquipmentUncheckedUpdateInput>
    /**
     * Choose, which TripEquipment to update.
     */
    where: TripEquipmentWhereUniqueInput
  }

  /**
   * TripEquipment updateMany
   */
  export type TripEquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripEquipments.
     */
    data: XOR<TripEquipmentUpdateManyMutationInput, TripEquipmentUncheckedUpdateManyInput>
    /**
     * Filter which TripEquipments to update
     */
    where?: TripEquipmentWhereInput
  }

  /**
   * TripEquipment upsert
   */
  export type TripEquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TripEquipment to update in case it exists.
     */
    where: TripEquipmentWhereUniqueInput
    /**
     * In case the TripEquipment found by the `where` argument doesn't exist, create a new TripEquipment with this data.
     */
    create: XOR<TripEquipmentCreateInput, TripEquipmentUncheckedCreateInput>
    /**
     * In case the TripEquipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripEquipmentUpdateInput, TripEquipmentUncheckedUpdateInput>
  }

  /**
   * TripEquipment delete
   */
  export type TripEquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
    /**
     * Filter which TripEquipment to delete.
     */
    where: TripEquipmentWhereUniqueInput
  }

  /**
   * TripEquipment deleteMany
   */
  export type TripEquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripEquipments to delete
     */
    where?: TripEquipmentWhereInput
  }

  /**
   * TripEquipment without action
   */
  export type TripEquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripEquipment
     */
    select?: TripEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripEquipmentInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    username: 'username',
    password: 'password',
    avatarUrl: 'avatarUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    notifications: 'notifications',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const BookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripId: 'tripId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    userId: 'userId',
    startDate: 'startDate',
    endDate: 'endDate',
    duration: 'duration',
    difficulty: 'difficulty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const BlockScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    tripId: 'tripId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const PointScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude',
    name: 'name',
    description: 'description',
    blockId: 'blockId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const TripEquipmentScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripEquipmentScalarFieldEnum = (typeof TripEquipmentScalarFieldEnum)[keyof typeof TripEquipmentScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EquipmentType'
   */
  export type EnumEquipmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentType'>
    


  /**
   * Reference to a field of type 'EquipmentType[]'
   */
  export type ListEnumEquipmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    trips?: TripListRelationFilter
    bookmarks?: BookmarkListRelationFilter
    settings?: XOR<UserSettingsNullableRelationFilter, UserSettingsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    trips?: TripOrderByRelationAggregateInput
    bookmarks?: BookmarkOrderByRelationAggregateInput
    settings?: UserSettingsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    trips?: TripListRelationFilter
    bookmarks?: BookmarkListRelationFilter
    settings?: XOR<UserSettingsNullableRelationFilter, UserSettingsWhereInput> | null
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: IntFilter<"UserSettings"> | number
    userId?: StringFilter<"UserSettings"> | string
    notifications?: BoolFilter<"UserSettings"> | boolean
    language?: StringFilter<"UserSettings"> | string
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    notifications?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    notifications?: BoolFilter<"UserSettings"> | boolean
    language?: StringFilter<"UserSettings"> | string
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    notifications?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _avg?: UserSettingsAvgOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
    _sum?: UserSettingsSumOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSettings"> | number
    userId?: StringWithAggregatesFilter<"UserSettings"> | string
    notifications?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    language?: StringWithAggregatesFilter<"UserSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
  }

  export type BookmarkWhereInput = {
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    userId?: StringFilter<"Bookmark"> | string
    tripId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    updatedAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    trip?: XOR<TripRelationFilter, TripWhereInput>
  }

  export type BookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    userId?: StringFilter<"Bookmark"> | string
    tripId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    updatedAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    trip?: XOR<TripRelationFilter, TripWhereInput>
  }, "id">

  export type BookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookmarkCountOrderByAggregateInput
    _max?: BookmarkMaxOrderByAggregateInput
    _min?: BookmarkMinOrderByAggregateInput
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    OR?: BookmarkScalarWhereWithAggregatesInput[]
    NOT?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bookmark"> | string
    userId?: StringWithAggregatesFilter<"Bookmark"> | string
    tripId?: StringWithAggregatesFilter<"Bookmark"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    name?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
    imageUrl?: StringNullableFilter<"Trip"> | string | null
    userId?: StringFilter<"Trip"> | string
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    duration?: IntNullableFilter<"Trip"> | number | null
    difficulty?: EnumDifficultyFilter<"Trip"> | $Enums.Difficulty
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    blocks?: BlockListRelationFilter
    equipment?: TripEquipmentListRelationFilter
    bookmarks?: BookmarkListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    blocks?: BlockOrderByRelationAggregateInput
    equipment?: TripEquipmentOrderByRelationAggregateInput
    bookmarks?: BookmarkOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    name?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
    imageUrl?: StringNullableFilter<"Trip"> | string | null
    userId?: StringFilter<"Trip"> | string
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    duration?: IntNullableFilter<"Trip"> | number | null
    difficulty?: EnumDifficultyFilter<"Trip"> | $Enums.Difficulty
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    blocks?: BlockListRelationFilter
    equipment?: TripEquipmentListRelationFilter
    bookmarks?: BookmarkListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    name?: StringWithAggregatesFilter<"Trip"> | string
    description?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    userId?: StringWithAggregatesFilter<"Trip"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"Trip"> | number | null
    difficulty?: EnumDifficultyWithAggregatesFilter<"Trip"> | $Enums.Difficulty
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: StringFilter<"Block"> | string
    type?: StringFilter<"Block"> | string
    content?: StringFilter<"Block"> | string
    tripId?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    trip?: XOR<TripRelationFilter, TripWhereInput>
    points?: PointListRelationFilter
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    points?: PointOrderByRelationAggregateInput
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    type?: StringFilter<"Block"> | string
    content?: StringFilter<"Block"> | string
    tripId?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
    trip?: XOR<TripRelationFilter, TripWhereInput>
    points?: PointListRelationFilter
  }, "id">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Block"> | string
    type?: StringWithAggregatesFilter<"Block"> | string
    content?: StringWithAggregatesFilter<"Block"> | string
    tripId?: StringWithAggregatesFilter<"Block"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
  }

  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    id?: StringFilter<"Point"> | string
    latitude?: FloatFilter<"Point"> | number
    longitude?: FloatFilter<"Point"> | number
    name?: StringNullableFilter<"Point"> | string | null
    description?: StringNullableFilter<"Point"> | string | null
    blockId?: StringFilter<"Point"> | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    updatedAt?: DateTimeFilter<"Point"> | Date | string
    block?: XOR<BlockRelationFilter, BlockWhereInput>
  }

  export type PointOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    blockId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    block?: BlockOrderByWithRelationInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    latitude?: FloatFilter<"Point"> | number
    longitude?: FloatFilter<"Point"> | number
    name?: StringNullableFilter<"Point"> | string | null
    description?: StringNullableFilter<"Point"> | string | null
    blockId?: StringFilter<"Point"> | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    updatedAt?: DateTimeFilter<"Point"> | Date | string
    block?: XOR<BlockRelationFilter, BlockWhereInput>
  }, "id">

  export type PointOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    blockId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PointCountOrderByAggregateInput
    _avg?: PointAvgOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
    _sum?: PointSumOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Point"> | string
    latitude?: FloatWithAggregatesFilter<"Point"> | number
    longitude?: FloatWithAggregatesFilter<"Point"> | number
    name?: StringNullableWithAggregatesFilter<"Point"> | string | null
    description?: StringNullableWithAggregatesFilter<"Point"> | string | null
    blockId?: StringWithAggregatesFilter<"Point"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
  }

  export type TripEquipmentWhereInput = {
    AND?: TripEquipmentWhereInput | TripEquipmentWhereInput[]
    OR?: TripEquipmentWhereInput[]
    NOT?: TripEquipmentWhereInput | TripEquipmentWhereInput[]
    id?: StringFilter<"TripEquipment"> | string
    tripId?: StringFilter<"TripEquipment"> | string
    type?: EnumEquipmentTypeFilter<"TripEquipment"> | $Enums.EquipmentType
    createdAt?: DateTimeFilter<"TripEquipment"> | Date | string
    updatedAt?: DateTimeFilter<"TripEquipment"> | Date | string
    trip?: XOR<TripRelationFilter, TripWhereInput>
  }

  export type TripEquipmentOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type TripEquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripEquipmentWhereInput | TripEquipmentWhereInput[]
    OR?: TripEquipmentWhereInput[]
    NOT?: TripEquipmentWhereInput | TripEquipmentWhereInput[]
    tripId?: StringFilter<"TripEquipment"> | string
    type?: EnumEquipmentTypeFilter<"TripEquipment"> | $Enums.EquipmentType
    createdAt?: DateTimeFilter<"TripEquipment"> | Date | string
    updatedAt?: DateTimeFilter<"TripEquipment"> | Date | string
    trip?: XOR<TripRelationFilter, TripWhereInput>
  }, "id">

  export type TripEquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripEquipmentCountOrderByAggregateInput
    _max?: TripEquipmentMaxOrderByAggregateInput
    _min?: TripEquipmentMinOrderByAggregateInput
  }

  export type TripEquipmentScalarWhereWithAggregatesInput = {
    AND?: TripEquipmentScalarWhereWithAggregatesInput | TripEquipmentScalarWhereWithAggregatesInput[]
    OR?: TripEquipmentScalarWhereWithAggregatesInput[]
    NOT?: TripEquipmentScalarWhereWithAggregatesInput | TripEquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripEquipment"> | string
    tripId?: StringWithAggregatesFilter<"TripEquipment"> | string
    type?: EnumEquipmentTypeWithAggregatesFilter<"TripEquipment"> | $Enums.EquipmentType
    createdAt?: DateTimeWithAggregatesFilter<"TripEquipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripEquipment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    username: string
    password: string
    avatarUrl?: string | null
    trips?: TripCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    username: string
    password: string
    avatarUrl?: string | null
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trips?: TripUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    username: string
    password: string
    avatarUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSettingsCreateInput = {
    notifications?: boolean
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: number
    userId: string
    notifications?: boolean
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateInput = {
    notifications?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    notifications?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateManyInput = {
    id?: number
    userId: string
    notifications?: boolean
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateManyMutationInput = {
    notifications?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    notifications?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
    trip: TripCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateInput = {
    id?: string
    userId: string
    tripId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
    trip?: TripUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyInput = {
    id?: string
    userId: string
    tripId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    blocks?: BlockCreateNestedManyWithoutTripInput
    equipment?: TripEquipmentCreateNestedManyWithoutTripInput
    bookmarks?: BookmarkCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    userId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutTripInput
    equipment?: TripEquipmentUncheckedCreateNestedManyWithoutTripInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    blocks?: BlockUpdateManyWithoutTripNestedInput
    equipment?: TripEquipmentUpdateManyWithoutTripNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutTripNestedInput
    equipment?: TripEquipmentUncheckedUpdateManyWithoutTripNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    userId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateInput = {
    id?: string
    type: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutBlocksInput
    points?: PointCreateNestedManyWithoutBlockInput
  }

  export type BlockUncheckedCreateInput = {
    id?: string
    type: string
    content: string
    tripId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: PointUncheckedCreateNestedManyWithoutBlockInput
  }

  export type BlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutBlocksNestedInput
    points?: PointUpdateManyWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: PointUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type BlockCreateManyInput = {
    id?: string
    type: string
    content: string
    tripId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateInput = {
    id?: string
    latitude: number
    longitude: number
    name?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    block: BlockCreateNestedOneWithoutPointsInput
  }

  export type PointUncheckedCreateInput = {
    id?: string
    latitude: number
    longitude: number
    name?: string | null
    description?: string | null
    blockId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BlockUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blockId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateManyInput = {
    id?: string
    latitude: number
    longitude: number
    name?: string | null
    description?: string | null
    blockId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    blockId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripEquipmentCreateInput = {
    id?: string
    type: $Enums.EquipmentType
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutEquipmentInput
  }

  export type TripEquipmentUncheckedCreateInput = {
    id?: string
    tripId: string
    type: $Enums.EquipmentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripEquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutEquipmentNestedInput
  }

  export type TripEquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripEquipmentCreateManyInput = {
    id?: string
    tripId: string
    type: $Enums.EquipmentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripEquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripEquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput
    some?: BookmarkWhereInput
    none?: BookmarkWhereInput
  }

  export type UserSettingsNullableRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notifications?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notifications?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notifications?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TripRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type BookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type BlockListRelationFilter = {
    every?: BlockWhereInput
    some?: BlockWhereInput
    none?: BlockWhereInput
  }

  export type TripEquipmentListRelationFilter = {
    every?: TripEquipmentWhereInput
    some?: TripEquipmentWhereInput
    none?: TripEquipmentWhereInput
  }

  export type BlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripEquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type PointListRelationFilter = {
    every?: PointWhereInput
    some?: PointWhereInput
    none?: PointWhereInput
  }

  export type PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BlockRelationFilter = {
    is?: BlockWhereInput
    isNot?: BlockWhereInput
  }

  export type PointCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    name?: SortOrder
    description?: SortOrder
    blockId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    name?: SortOrder
    description?: SortOrder
    blockId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    name?: SortOrder
    description?: SortOrder
    blockId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumEquipmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeFilter<$PrismaModel> | $Enums.EquipmentType
  }

  export type TripEquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripEquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripEquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEquipmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentTypeFilter<$PrismaModel>
    _max?: NestedEnumEquipmentTypeFilter<$PrismaModel>
  }

  export type TripCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type TripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TripUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type TripUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<TripCreateWithoutBookmarksInput, TripUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: TripCreateOrConnectWithoutBookmarksInput
    connect?: TripWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    upsert?: UserUpsertWithoutBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type TripUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<TripCreateWithoutBookmarksInput, TripUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: TripCreateOrConnectWithoutBookmarksInput
    upsert?: TripUpsertWithoutBookmarksInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutBookmarksInput, TripUpdateWithoutBookmarksInput>, TripUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserCreateNestedOneWithoutTripsInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    connect?: UserWhereUniqueInput
  }

  export type BlockCreateNestedManyWithoutTripInput = {
    create?: XOR<BlockCreateWithoutTripInput, BlockUncheckedCreateWithoutTripInput> | BlockCreateWithoutTripInput[] | BlockUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutTripInput | BlockCreateOrConnectWithoutTripInput[]
    createMany?: BlockCreateManyTripInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type TripEquipmentCreateNestedManyWithoutTripInput = {
    create?: XOR<TripEquipmentCreateWithoutTripInput, TripEquipmentUncheckedCreateWithoutTripInput> | TripEquipmentCreateWithoutTripInput[] | TripEquipmentUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripEquipmentCreateOrConnectWithoutTripInput | TripEquipmentCreateOrConnectWithoutTripInput[]
    createMany?: TripEquipmentCreateManyTripInputEnvelope
    connect?: TripEquipmentWhereUniqueInput | TripEquipmentWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutTripInput = {
    create?: XOR<BookmarkCreateWithoutTripInput, BookmarkUncheckedCreateWithoutTripInput> | BookmarkCreateWithoutTripInput[] | BookmarkUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTripInput | BookmarkCreateOrConnectWithoutTripInput[]
    createMany?: BookmarkCreateManyTripInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type BlockUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<BlockCreateWithoutTripInput, BlockUncheckedCreateWithoutTripInput> | BlockCreateWithoutTripInput[] | BlockUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutTripInput | BlockCreateOrConnectWithoutTripInput[]
    createMany?: BlockCreateManyTripInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type TripEquipmentUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripEquipmentCreateWithoutTripInput, TripEquipmentUncheckedCreateWithoutTripInput> | TripEquipmentCreateWithoutTripInput[] | TripEquipmentUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripEquipmentCreateOrConnectWithoutTripInput | TripEquipmentCreateOrConnectWithoutTripInput[]
    createMany?: TripEquipmentCreateManyTripInputEnvelope
    connect?: TripEquipmentWhereUniqueInput | TripEquipmentWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<BookmarkCreateWithoutTripInput, BookmarkUncheckedCreateWithoutTripInput> | BookmarkCreateWithoutTripInput[] | BookmarkUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTripInput | BookmarkCreateOrConnectWithoutTripInput[]
    createMany?: BookmarkCreateManyTripInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type UserUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    upsert?: UserUpsertWithoutTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsInput, UserUpdateWithoutTripsInput>, UserUncheckedUpdateWithoutTripsInput>
  }

  export type BlockUpdateManyWithoutTripNestedInput = {
    create?: XOR<BlockCreateWithoutTripInput, BlockUncheckedCreateWithoutTripInput> | BlockCreateWithoutTripInput[] | BlockUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutTripInput | BlockCreateOrConnectWithoutTripInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutTripInput | BlockUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BlockCreateManyTripInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutTripInput | BlockUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutTripInput | BlockUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type TripEquipmentUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripEquipmentCreateWithoutTripInput, TripEquipmentUncheckedCreateWithoutTripInput> | TripEquipmentCreateWithoutTripInput[] | TripEquipmentUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripEquipmentCreateOrConnectWithoutTripInput | TripEquipmentCreateOrConnectWithoutTripInput[]
    upsert?: TripEquipmentUpsertWithWhereUniqueWithoutTripInput | TripEquipmentUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripEquipmentCreateManyTripInputEnvelope
    set?: TripEquipmentWhereUniqueInput | TripEquipmentWhereUniqueInput[]
    disconnect?: TripEquipmentWhereUniqueInput | TripEquipmentWhereUniqueInput[]
    delete?: TripEquipmentWhereUniqueInput | TripEquipmentWhereUniqueInput[]
    connect?: TripEquipmentWhereUniqueInput | TripEquipmentWhereUniqueInput[]
    update?: TripEquipmentUpdateWithWhereUniqueWithoutTripInput | TripEquipmentUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripEquipmentUpdateManyWithWhereWithoutTripInput | TripEquipmentUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripEquipmentScalarWhereInput | TripEquipmentScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutTripNestedInput = {
    create?: XOR<BookmarkCreateWithoutTripInput, BookmarkUncheckedCreateWithoutTripInput> | BookmarkCreateWithoutTripInput[] | BookmarkUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTripInput | BookmarkCreateOrConnectWithoutTripInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutTripInput | BookmarkUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BookmarkCreateManyTripInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutTripInput | BookmarkUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutTripInput | BookmarkUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type BlockUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<BlockCreateWithoutTripInput, BlockUncheckedCreateWithoutTripInput> | BlockCreateWithoutTripInput[] | BlockUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutTripInput | BlockCreateOrConnectWithoutTripInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutTripInput | BlockUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BlockCreateManyTripInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutTripInput | BlockUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutTripInput | BlockUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type TripEquipmentUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripEquipmentCreateWithoutTripInput, TripEquipmentUncheckedCreateWithoutTripInput> | TripEquipmentCreateWithoutTripInput[] | TripEquipmentUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripEquipmentCreateOrConnectWithoutTripInput | TripEquipmentCreateOrConnectWithoutTripInput[]
    upsert?: TripEquipmentUpsertWithWhereUniqueWithoutTripInput | TripEquipmentUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripEquipmentCreateManyTripInputEnvelope
    set?: TripEquipmentWhereUniqueInput | TripEquipmentWhereUniqueInput[]
    disconnect?: TripEquipmentWhereUniqueInput | TripEquipmentWhereUniqueInput[]
    delete?: TripEquipmentWhereUniqueInput | TripEquipmentWhereUniqueInput[]
    connect?: TripEquipmentWhereUniqueInput | TripEquipmentWhereUniqueInput[]
    update?: TripEquipmentUpdateWithWhereUniqueWithoutTripInput | TripEquipmentUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripEquipmentUpdateManyWithWhereWithoutTripInput | TripEquipmentUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripEquipmentScalarWhereInput | TripEquipmentScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<BookmarkCreateWithoutTripInput, BookmarkUncheckedCreateWithoutTripInput> | BookmarkCreateWithoutTripInput[] | BookmarkUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutTripInput | BookmarkCreateOrConnectWithoutTripInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutTripInput | BookmarkUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BookmarkCreateManyTripInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutTripInput | BookmarkUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutTripInput | BookmarkUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutBlocksInput = {
    create?: XOR<TripCreateWithoutBlocksInput, TripUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: TripCreateOrConnectWithoutBlocksInput
    connect?: TripWhereUniqueInput
  }

  export type PointCreateNestedManyWithoutBlockInput = {
    create?: XOR<PointCreateWithoutBlockInput, PointUncheckedCreateWithoutBlockInput> | PointCreateWithoutBlockInput[] | PointUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: PointCreateOrConnectWithoutBlockInput | PointCreateOrConnectWithoutBlockInput[]
    createMany?: PointCreateManyBlockInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type PointUncheckedCreateNestedManyWithoutBlockInput = {
    create?: XOR<PointCreateWithoutBlockInput, PointUncheckedCreateWithoutBlockInput> | PointCreateWithoutBlockInput[] | PointUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: PointCreateOrConnectWithoutBlockInput | PointCreateOrConnectWithoutBlockInput[]
    createMany?: PointCreateManyBlockInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type TripUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<TripCreateWithoutBlocksInput, TripUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: TripCreateOrConnectWithoutBlocksInput
    upsert?: TripUpsertWithoutBlocksInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutBlocksInput, TripUpdateWithoutBlocksInput>, TripUncheckedUpdateWithoutBlocksInput>
  }

  export type PointUpdateManyWithoutBlockNestedInput = {
    create?: XOR<PointCreateWithoutBlockInput, PointUncheckedCreateWithoutBlockInput> | PointCreateWithoutBlockInput[] | PointUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: PointCreateOrConnectWithoutBlockInput | PointCreateOrConnectWithoutBlockInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutBlockInput | PointUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: PointCreateManyBlockInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutBlockInput | PointUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: PointUpdateManyWithWhereWithoutBlockInput | PointUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type PointUncheckedUpdateManyWithoutBlockNestedInput = {
    create?: XOR<PointCreateWithoutBlockInput, PointUncheckedCreateWithoutBlockInput> | PointCreateWithoutBlockInput[] | PointUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: PointCreateOrConnectWithoutBlockInput | PointCreateOrConnectWithoutBlockInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutBlockInput | PointUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: PointCreateManyBlockInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutBlockInput | PointUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: PointUpdateManyWithWhereWithoutBlockInput | PointUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type BlockCreateNestedOneWithoutPointsInput = {
    create?: XOR<BlockCreateWithoutPointsInput, BlockUncheckedCreateWithoutPointsInput>
    connectOrCreate?: BlockCreateOrConnectWithoutPointsInput
    connect?: BlockWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BlockUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<BlockCreateWithoutPointsInput, BlockUncheckedCreateWithoutPointsInput>
    connectOrCreate?: BlockCreateOrConnectWithoutPointsInput
    upsert?: BlockUpsertWithoutPointsInput
    connect?: BlockWhereUniqueInput
    update?: XOR<XOR<BlockUpdateToOneWithWhereWithoutPointsInput, BlockUpdateWithoutPointsInput>, BlockUncheckedUpdateWithoutPointsInput>
  }

  export type TripCreateNestedOneWithoutEquipmentInput = {
    create?: XOR<TripCreateWithoutEquipmentInput, TripUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: TripCreateOrConnectWithoutEquipmentInput
    connect?: TripWhereUniqueInput
  }

  export type EnumEquipmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EquipmentType
  }

  export type TripUpdateOneRequiredWithoutEquipmentNestedInput = {
    create?: XOR<TripCreateWithoutEquipmentInput, TripUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: TripCreateOrConnectWithoutEquipmentInput
    upsert?: TripUpsertWithoutEquipmentInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutEquipmentInput, TripUpdateWithoutEquipmentInput>, TripUncheckedUpdateWithoutEquipmentInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumEquipmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeFilter<$PrismaModel> | $Enums.EquipmentType
  }

  export type NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentTypeFilter<$PrismaModel>
    _max?: NestedEnumEquipmentTypeFilter<$PrismaModel>
  }

  export type TripCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockCreateNestedManyWithoutTripInput
    equipment?: TripEquipmentCreateNestedManyWithoutTripInput
    bookmarks?: BookmarkCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutTripInput
    equipment?: TripEquipmentUncheckedCreateNestedManyWithoutTripInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutUserInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripCreateManyUserInputEnvelope = {
    data: TripCreateManyUserInput | TripCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutUserInput = {
    id?: string
    tripId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCreateManyUserInputEnvelope = {
    data: BookmarkCreateManyUserInput | BookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsCreateWithoutUserInput = {
    notifications?: boolean
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: number
    notifications?: boolean
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type TripUpsertWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripUpdateWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
  }

  export type TripUpdateManyWithWhereWithoutUserInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutUserInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    name?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
    imageUrl?: StringNullableFilter<"Trip"> | string | null
    userId?: StringFilter<"Trip"> | string
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    duration?: IntNullableFilter<"Trip"> | number | null
    difficulty?: EnumDifficultyFilter<"Trip"> | $Enums.Difficulty
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    OR?: BookmarkScalarWhereInput[]
    NOT?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    userId?: StringFilter<"Bookmark"> | string
    tripId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    updatedAt?: DateTimeFilter<"Bookmark"> | Date | string
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    notifications?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    notifications?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    username: string
    password: string
    avatarUrl?: string | null
    trips?: TripCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    username: string
    password: string
    avatarUrl?: string | null
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trips?: TripUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBookmarksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    username: string
    password: string
    avatarUrl?: string | null
    trips?: TripCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    username: string
    password: string
    avatarUrl?: string | null
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type TripCreateWithoutBookmarksInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    blocks?: BlockCreateNestedManyWithoutTripInput
    equipment?: TripEquipmentCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutBookmarksInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    userId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutTripInput
    equipment?: TripEquipmentUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutBookmarksInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutBookmarksInput, TripUncheckedCreateWithoutBookmarksInput>
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trips?: TripUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TripUpsertWithoutBookmarksInput = {
    update: XOR<TripUpdateWithoutBookmarksInput, TripUncheckedUpdateWithoutBookmarksInput>
    create: XOR<TripCreateWithoutBookmarksInput, TripUncheckedCreateWithoutBookmarksInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutBookmarksInput, TripUncheckedUpdateWithoutBookmarksInput>
  }

  export type TripUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    blocks?: BlockUpdateManyWithoutTripNestedInput
    equipment?: TripEquipmentUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutTripNestedInput
    equipment?: TripEquipmentUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserCreateWithoutTripsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    username: string
    password: string
    avatarUrl?: string | null
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    username: string
    password: string
    avatarUrl?: string | null
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
  }

  export type BlockCreateWithoutTripInput = {
    id?: string
    type: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: PointCreateNestedManyWithoutBlockInput
  }

  export type BlockUncheckedCreateWithoutTripInput = {
    id?: string
    type: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: PointUncheckedCreateNestedManyWithoutBlockInput
  }

  export type BlockCreateOrConnectWithoutTripInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutTripInput, BlockUncheckedCreateWithoutTripInput>
  }

  export type BlockCreateManyTripInputEnvelope = {
    data: BlockCreateManyTripInput | BlockCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TripEquipmentCreateWithoutTripInput = {
    id?: string
    type: $Enums.EquipmentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripEquipmentUncheckedCreateWithoutTripInput = {
    id?: string
    type: $Enums.EquipmentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripEquipmentCreateOrConnectWithoutTripInput = {
    where: TripEquipmentWhereUniqueInput
    create: XOR<TripEquipmentCreateWithoutTripInput, TripEquipmentUncheckedCreateWithoutTripInput>
  }

  export type TripEquipmentCreateManyTripInputEnvelope = {
    data: TripEquipmentCreateManyTripInput | TripEquipmentCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutTripInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutTripInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutTripInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutTripInput, BookmarkUncheckedCreateWithoutTripInput>
  }

  export type BookmarkCreateManyTripInputEnvelope = {
    data: BookmarkCreateManyTripInput | BookmarkCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTripsInput = {
    update: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
  }

  export type UserUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BlockUpsertWithWhereUniqueWithoutTripInput = {
    where: BlockWhereUniqueInput
    update: XOR<BlockUpdateWithoutTripInput, BlockUncheckedUpdateWithoutTripInput>
    create: XOR<BlockCreateWithoutTripInput, BlockUncheckedCreateWithoutTripInput>
  }

  export type BlockUpdateWithWhereUniqueWithoutTripInput = {
    where: BlockWhereUniqueInput
    data: XOR<BlockUpdateWithoutTripInput, BlockUncheckedUpdateWithoutTripInput>
  }

  export type BlockUpdateManyWithWhereWithoutTripInput = {
    where: BlockScalarWhereInput
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyWithoutTripInput>
  }

  export type BlockScalarWhereInput = {
    AND?: BlockScalarWhereInput | BlockScalarWhereInput[]
    OR?: BlockScalarWhereInput[]
    NOT?: BlockScalarWhereInput | BlockScalarWhereInput[]
    id?: StringFilter<"Block"> | string
    type?: StringFilter<"Block"> | string
    content?: StringFilter<"Block"> | string
    tripId?: StringFilter<"Block"> | string
    createdAt?: DateTimeFilter<"Block"> | Date | string
    updatedAt?: DateTimeFilter<"Block"> | Date | string
  }

  export type TripEquipmentUpsertWithWhereUniqueWithoutTripInput = {
    where: TripEquipmentWhereUniqueInput
    update: XOR<TripEquipmentUpdateWithoutTripInput, TripEquipmentUncheckedUpdateWithoutTripInput>
    create: XOR<TripEquipmentCreateWithoutTripInput, TripEquipmentUncheckedCreateWithoutTripInput>
  }

  export type TripEquipmentUpdateWithWhereUniqueWithoutTripInput = {
    where: TripEquipmentWhereUniqueInput
    data: XOR<TripEquipmentUpdateWithoutTripInput, TripEquipmentUncheckedUpdateWithoutTripInput>
  }

  export type TripEquipmentUpdateManyWithWhereWithoutTripInput = {
    where: TripEquipmentScalarWhereInput
    data: XOR<TripEquipmentUpdateManyMutationInput, TripEquipmentUncheckedUpdateManyWithoutTripInput>
  }

  export type TripEquipmentScalarWhereInput = {
    AND?: TripEquipmentScalarWhereInput | TripEquipmentScalarWhereInput[]
    OR?: TripEquipmentScalarWhereInput[]
    NOT?: TripEquipmentScalarWhereInput | TripEquipmentScalarWhereInput[]
    id?: StringFilter<"TripEquipment"> | string
    tripId?: StringFilter<"TripEquipment"> | string
    type?: EnumEquipmentTypeFilter<"TripEquipment"> | $Enums.EquipmentType
    createdAt?: DateTimeFilter<"TripEquipment"> | Date | string
    updatedAt?: DateTimeFilter<"TripEquipment"> | Date | string
  }

  export type BookmarkUpsertWithWhereUniqueWithoutTripInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutTripInput, BookmarkUncheckedUpdateWithoutTripInput>
    create: XOR<BookmarkCreateWithoutTripInput, BookmarkUncheckedCreateWithoutTripInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutTripInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutTripInput, BookmarkUncheckedUpdateWithoutTripInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutTripInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutTripInput>
  }

  export type TripCreateWithoutBlocksInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    equipment?: TripEquipmentCreateNestedManyWithoutTripInput
    bookmarks?: BookmarkCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutBlocksInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    userId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment?: TripEquipmentUncheckedCreateNestedManyWithoutTripInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutBlocksInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutBlocksInput, TripUncheckedCreateWithoutBlocksInput>
  }

  export type PointCreateWithoutBlockInput = {
    id?: string
    latitude: number
    longitude: number
    name?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointUncheckedCreateWithoutBlockInput = {
    id?: string
    latitude: number
    longitude: number
    name?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointCreateOrConnectWithoutBlockInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutBlockInput, PointUncheckedCreateWithoutBlockInput>
  }

  export type PointCreateManyBlockInputEnvelope = {
    data: PointCreateManyBlockInput | PointCreateManyBlockInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithoutBlocksInput = {
    update: XOR<TripUpdateWithoutBlocksInput, TripUncheckedUpdateWithoutBlocksInput>
    create: XOR<TripCreateWithoutBlocksInput, TripUncheckedCreateWithoutBlocksInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutBlocksInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutBlocksInput, TripUncheckedUpdateWithoutBlocksInput>
  }

  export type TripUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    equipment?: TripEquipmentUpdateManyWithoutTripNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: TripEquipmentUncheckedUpdateManyWithoutTripNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTripNestedInput
  }

  export type PointUpsertWithWhereUniqueWithoutBlockInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutBlockInput, PointUncheckedUpdateWithoutBlockInput>
    create: XOR<PointCreateWithoutBlockInput, PointUncheckedCreateWithoutBlockInput>
  }

  export type PointUpdateWithWhereUniqueWithoutBlockInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutBlockInput, PointUncheckedUpdateWithoutBlockInput>
  }

  export type PointUpdateManyWithWhereWithoutBlockInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutBlockInput>
  }

  export type PointScalarWhereInput = {
    AND?: PointScalarWhereInput | PointScalarWhereInput[]
    OR?: PointScalarWhereInput[]
    NOT?: PointScalarWhereInput | PointScalarWhereInput[]
    id?: StringFilter<"Point"> | string
    latitude?: FloatFilter<"Point"> | number
    longitude?: FloatFilter<"Point"> | number
    name?: StringNullableFilter<"Point"> | string | null
    description?: StringNullableFilter<"Point"> | string | null
    blockId?: StringFilter<"Point"> | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    updatedAt?: DateTimeFilter<"Point"> | Date | string
  }

  export type BlockCreateWithoutPointsInput = {
    id?: string
    type: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutBlocksInput
  }

  export type BlockUncheckedCreateWithoutPointsInput = {
    id?: string
    type: string
    content: string
    tripId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockCreateOrConnectWithoutPointsInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutPointsInput, BlockUncheckedCreateWithoutPointsInput>
  }

  export type BlockUpsertWithoutPointsInput = {
    update: XOR<BlockUpdateWithoutPointsInput, BlockUncheckedUpdateWithoutPointsInput>
    create: XOR<BlockCreateWithoutPointsInput, BlockUncheckedCreateWithoutPointsInput>
    where?: BlockWhereInput
  }

  export type BlockUpdateToOneWithWhereWithoutPointsInput = {
    where?: BlockWhereInput
    data: XOR<BlockUpdateWithoutPointsInput, BlockUncheckedUpdateWithoutPointsInput>
  }

  export type BlockUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type BlockUncheckedUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateWithoutEquipmentInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    blocks?: BlockCreateNestedManyWithoutTripInput
    bookmarks?: BookmarkCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutEquipmentInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    userId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    blocks?: BlockUncheckedCreateNestedManyWithoutTripInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutEquipmentInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutEquipmentInput, TripUncheckedCreateWithoutEquipmentInput>
  }

  export type TripUpsertWithoutEquipmentInput = {
    update: XOR<TripUpdateWithoutEquipmentInput, TripUncheckedUpdateWithoutEquipmentInput>
    create: XOR<TripCreateWithoutEquipmentInput, TripUncheckedCreateWithoutEquipmentInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutEquipmentInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutEquipmentInput, TripUncheckedUpdateWithoutEquipmentInput>
  }

  export type TripUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    blocks?: BlockUpdateManyWithoutTripNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutTripNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    duration?: number | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkCreateManyUserInput = {
    id?: string
    tripId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUpdateManyWithoutTripNestedInput
    equipment?: TripEquipmentUpdateManyWithoutTripNestedInput
    bookmarks?: BookmarkUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: BlockUncheckedUpdateManyWithoutTripNestedInput
    equipment?: TripEquipmentUncheckedUpdateManyWithoutTripNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateManyTripInput = {
    id?: string
    type: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripEquipmentCreateManyTripInput = {
    id?: string
    type: $Enums.EquipmentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkCreateManyTripInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: PointUpdateManyWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: PointUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripEquipmentUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripEquipmentUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripEquipmentUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateManyBlockInput = {
    id?: string
    latitude: number
    longitude: number
    name?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripCountOutputTypeDefaultArgs instead
     */
    export type TripCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockCountOutputTypeDefaultArgs instead
     */
    export type BlockCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlockCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserSettingsDefaultArgs instead
     */
    export type UserSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserSettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookmarkDefaultArgs instead
     */
    export type BookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookmarkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripDefaultArgs instead
     */
    export type TripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockDefaultArgs instead
     */
    export type BlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PointDefaultArgs instead
     */
    export type PointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PointDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripEquipmentDefaultArgs instead
     */
    export type TripEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripEquipmentDefaultArgs<ExtArgs>

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