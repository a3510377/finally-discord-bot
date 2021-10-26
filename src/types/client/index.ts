import { Http } from "../http";
import { DiscordLink } from "./WebSocket";
import Package from "../../../package.json";
import { Log } from "../util/log";
import EventEmitter from "events";
import { ClientGuilds } from "./Bot/ClientGuilds";
import { ClientUser } from "./Bot/ClientUser";

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
  log: Log = new Log(this);
  http: Http = new Http(this);

  /* bot data */
  guilds: ClientGuilds = new ClientGuilds(this);
  user: ClientUser = new ClientUser(this);

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
