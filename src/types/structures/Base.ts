import { Client } from "@/types/client";
export declare type snowflake = string;
export declare type ISO8601 = number | string | Date;

/** Discord API data models */
export class Base {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
}
