import { EventEmitter } from "events";

import { Client } from "../index";
import { OpCodes, WsCodes, WSEvents } from "./main";
import { CheckWssUrl } from "@/types/util/fun";
import { AxiosError } from "axios";

export class DiscordLink extends EventEmitter {
  client: Client;
  debug: Client["log"]["DEBUG"];

  /** ws連線網址 */
  url?: string;
  /** ws */
  ws?: WebSocket;
  /** 請求連線時間 */
  startLinkAt?: number;
  /** 目前狀態 */
  state: number = -1;
  /** 握手定時 */
  HeartbeatInterval?: number;
  /** 會話ID */
  session_id: number | null = null;
  /** 序列 */
  sequence: number | null = null;
  constructor(client: Client) {
    super();
    this.client = client;
    this.debug = this.client.log.DEBUG.bind(this);
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
    (this.client.options.ws ||= {}).url ||= url;
    this.url = CheckWssUrl(this.client.options.ws.url);
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
  onClose(): void {
    this.setHeartbeatInterval(-1);
  }
  onError(): void {}
  onOpen(): void {
    this.debug(
      "ws",
      `連線延遲: ${Date.now() - (this.startLinkAt as number)}ms`
    );
  }
  onMessage({ data }: { data: string }): void {
    const json: { [key: string]: any } = JSON.parse(data || "{}");
    /** 更新序列號  */
    if (json.s) this.sequence = json.s;

    if (json.t !== "PRESENCE_UPDATE") console.log(json);

    switch (json.op) {
      case OpCodes.HELLO:
        this.Identifying();
        this.setHeartbeatInterval(json.d.heartbeat_interval);
        break;
      case OpCodes.DISPATCH:
        switch (json.t) {
          case WSEvents.READY:
            this.session_id = json.session_id;

            this.emit(WSEvents.READY);
            break;
        }
      case OpCodes.HEARTBEAT:
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
  /** 回復心跳 */
  Heartbeat() {
    this.debug("ws", "發送心跳確認");
    this.sendWs({ op: 1, d: this.sequence });
  }
  /* ----- fun ----- */
  setHeartbeatInterval(delay: number) {
    if (this.HeartbeatInterval) clearInterval(this.HeartbeatInterval);
    if (delay === -1) return;
    this.HeartbeatInterval = window.setInterval(
      () => this.Heartbeat(),
      delay - 1e3
    );
  }
}
