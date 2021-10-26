import { Client } from "..";

export class ClientGuilds {
  data: { [key: number]: any } = {};
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
}
