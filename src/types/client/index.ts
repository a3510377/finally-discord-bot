import EventEmitter from "events";
import { Http } from "../http";
import { DiscordLink } from "./WebSocket";
import Package from "../../../package.json";
import { Log } from "../util/log";
import { ConnectionState } from "./Bot/ConnectionState";
import { APIVersion } from "../util/data";

export class Client extends EventEmitter {
  __version__: string = `v${Package.version}`;
  APIVersion: number = APIVersion;
  userType: "bot" | "user";
  options: any = {
    http: {
      API: `https://rear-end-1.a102009102009.repl.co/api/discord/v1/?v=${this.APIVersion}&url=`,
      version: this.APIVersion,
    },
  };
  log: Log = new Log(this);
  http: Http = new Http(this);

  /* bot data */
  _connection = new ConnectionState(this);

  ws: DiscordLink = new DiscordLink(this);
  Events = {
    ...this.log.events,
  };

  token?: string;
  constructor(options?: any) {
    super();
    this.options = { ...options, ...this.options };
    this.userType = this.options?.notBot ? "user" : "bot";
  }
  guilds() {
    return this._connection.guilds;
  }
  emojis() {
    return this._connection.emojis;
  }
  api() {
    return this.http.use();
  }
  async run(token?: string) {
    token ||= localStorage.getItem("token") || this.token;
    if (!token) throw new Error("token Error");
    this.token = token = token.replace(/^(Bot|Bearer)\s*/i, "");
    try {
      await this.ws.connect();
      return this.token;
    } catch (error) {
      this.kill();
      throw error;
    }
  }
  kill() {
    this.removeAllListeners();
  }
}
