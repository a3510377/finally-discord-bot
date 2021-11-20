import { Client } from "@/types/client";
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

/**Discord API data models */
export class Base {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
}
