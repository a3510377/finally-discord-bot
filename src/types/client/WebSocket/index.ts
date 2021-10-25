import { EventEmitter } from "events";

import { Client } from "../index";
import { OpCodes, WsCodes, WSEvents } from "./main";
import { CheckWssUrl } from "@/types/util/fun";
import { AxiosError } from "axios";

export class DiscordLink extends EventEmitter {
  gateway?: string;
  client: Client;
  debug: Client["log"]["DEBUG"];

  url?: string;
  ws?: WebSocket;
  startLinkAt?: number;
  state: number = 0;
  HeartbeatingInterval?: number;
  constructor(client: Client) {
    super();
    this.client = client;
    this.debug = this.client.log.DEBUG;
  }
  async connect() {
    const { url, shards, session_start_limit } = (
      await this.client
        .api()
        .gateway.bot.get()
        .catch((reason: AxiosError) => {
          throw (reason.request ||= reason.response)?.status === 401
            ? new Error(WsCodes[4004])
            : reason;
        })
    ).data;
    this.url = CheckWssUrl(url);
    this.url += `?encoding=json&v=${this.client.options.http.version}`;

    this.startLinkAt = Date.now();
    this.ws = new WebSocket(this.url);
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
    this.ws.onerror = this.onError.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.debug("ws", `\n\tdc_ws_url: ${url}\n`);
  }
  sendWs(data: { [key: string]: any }): void {
    return this.ws?.send(JSON.stringify(data));
  }
  onClose(): void {}
  onError(): void {}
  onOpen(): void {
    this.debug(
      "ws",
      `連線延遲: ${Date.now() - (this.startLinkAt as number)}ms`
    );
  }
  onMessage({ data }: { data: string }): void {
    const json: { [key: string]: any } = JSON.parse(data || "{}");
    switch (json.op) {
      case OpCodes.HELLO:
        this.Identifying();
    }
    switch (json.t) {
      case WSEvents:

      case WSEvents.READY:
        this.emit(WSEvents.READY);
        break;
    }
  }
  /* ----- link fun ----- */
  /** 連線 */
  Identifying() {
    if (!this.client.token) throw new Error("無 Token");
    this.sendWs({
      op: OpCodes.IDENTIFY,
      d: {
        afk: false,
        intents: 32767,
        status: "online",
        properties: {
          $os: "web",
          $browser: "discord.bot.web.ui",
          $device: "discord.bot.web.ui",
        },
        token: this.client.token,
      },
    });
  }
  /** 重新連線 */
  Resuming() {}
  /* ----- fun ----- */
  setHeartbeatingInterval(delay: number) {
    if (this.HeartbeatingInterval) clearInterval(this.HeartbeatingInterval);
    if (delay === -1) return;
    this.HeartbeatingInterval = window.setInterval(() => {}, delay);
  }
}
