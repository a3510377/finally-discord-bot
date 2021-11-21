import { Method } from "axios";
import { Client } from "../client";
import { APIRequest } from "./APIRequest";

const methods = ["get", "post", "delete", "patch", "put"];

export class Http {
  constructor(public client: Client) {}
  use() {
    let data = {};
    let routers: string[] = [];
    let _ = this;
    let handler = {
      get(data_: any, name: string): any {
        if (methods.includes(name.toLocaleLowerCase()))
          return (options: { [key: string]: any }) =>
            APIRequest(_, name as Method, routers.join("/"), options);
        routers.push(name);
        return new Proxy(data_, handler);
      },
    };
    return new Proxy(data, handler);
  }
  toToken(): string {
    let token = this.client.token;
    if (this.client.options?.notBot) return `Bearer ${token}`;
    return `Bot ${token}`;
  }
}
