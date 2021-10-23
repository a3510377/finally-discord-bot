import { Method } from "axios";
import { Client } from "../client";
import { APIRequest } from "./APIRequest";

const methods = ["get", "post", "delete", "patch", "put"];

export class Http {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
  async request(path: string, method: Method = "GET", options = {}) {
    return await APIRequest(this, method, path, options);
  }
  use(): { [key: string]: any } {
    let data = {};
    let routers: string[] = [];
    let _ = this;
    let handler = {
      get(data_: any, name: string): any {
        if (methods.includes(name.toLocaleLowerCase()))
          return (options: { [key: string]: any }) =>
            _.request(routers.join("/"), name as Method, options);
        routers.push(name);
        return new Proxy(data_, handler);
      },
    };
    return new Proxy(data, handler);
  }
  token(): string {
    let token = this.client.token;
    if (this.client.options?.notBot) return `Bearer ${token}`;
    return `Bot ${token}`;
  }
}
