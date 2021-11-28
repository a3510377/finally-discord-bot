/**Snowflakes
 * @url https://discord.com/developers/docs/reference#snowflakes
 */
export declare type snowflake = string;
/**ISO8601 Date/Time
 * @url https://discord.com/developers/docs/reference#iso8601-datetime
 */
export declare type ISO8601 = number | string | Date;
/**Nullable
 * @url https://discord.com/developers/docs/reference#iso8601-datetime
 */
export declare type DIS = null | undefined;

export interface JsonAny {
  [x: string]: null | string | number | boolean | Date | JsonAny | JsonArray;
}
interface JsonArray
  extends Array<
    null | string | number | boolean | Date | JsonAny | JsonArray
  > {}
