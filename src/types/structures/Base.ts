import { Client } from "@/types/client";
export declare type Snowflake = string;

/** Discord API data models */
export class Base {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
}
