import { Client } from "@/types/client";

/**Discord API data models */
export class Base {
  log: Client["log"];
  constructor(public client: Client) {
    this.log = client.log;
  }
}
