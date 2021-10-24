import { Http } from "../http";
import { DiscordLink } from "./WebSocket";
import Package from "../../../package.json";
import { Log } from "../util/log";
import EventEmitter from "events";

export class Client extends EventEmitter {
  __version__: string = `v${Package.version}`;
  userType: "bot" | "user";
  APIVersion: number = 9;
  options: any = {
    http: {
      API: `https://rear-end-1.a102009102009.repl.co/api/discord/v1/?v=${this.APIVersion}&url=`,
      version: this.APIVersion,
    },
  };

  http: Http = new Http(this);
  ws: DiscordLink = new DiscordLink(this);
  log: Log = new Log(this);
  Events = {
    ...this.log.events,
  };

  token?: string;
  constructor(options?: any) {
    super();
    this.options = { ...options, ...this.options };
    this.userType = this.options?.notBot ? "user" : "bot";
  }
  api(): { [key: string]: any } {
    return this.http.use();
  }
  async run(token: string | undefined = this.token) {
    if (!token || typeof token !== "string") throw new Error("Token Error!!!");
    this.token = token = token.replace(/^(Bot|Bearer)\s*/i, "");
    try {
      await this.ws.connect();
      return this.token;
    } catch (error) {
      this.kill();
      throw error;
    }
  }
  kill() {}
}
