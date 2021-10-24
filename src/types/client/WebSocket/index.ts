import { EventEmitter } from "events";

import { Client } from "../index";
import { WsCodes, WSEvents } from "./main";
import { CheckWssUrl } from "@/types/util/fun";
import { AxiosError } from "axios";

export class DiscordLink extends EventEmitter {
  gateway?: string;
  client: Client;
  url?: string;
  ws?: WebSocket;
  constructor(client: Client) {
    super();
    this.client = client;
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

    this.ws = new WebSocket(this.url);
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
    this.ws.onerror = this.onError.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.client.emit(this.client.Events.DEBUG, "ws", `\n\tdc_ws_url: ${url}\n`);
  }
  onClose(): void {}
  onError(): void {}
  onOpen(): void {}
  onMessage({ data }: { data: string }): void {
    const json: { [key: string]: any } = JSON.parse(data || "{}");

    switch (json.t) {
      case WSEvents.READY:
        this.emit(WSEvents.READY);
        break;
    }
  }
}
