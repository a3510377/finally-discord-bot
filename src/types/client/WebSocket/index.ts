import { EventEmitter } from "events";

import { Client } from "../index";
import { WSEvents } from "./main";
import { CheckWssUrl } from "@/types/util/fun";

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
      await this.client.api().gateway.bot.get()
    ).data;
    this.url = CheckWssUrl(url);

    this.ws = new WebSocket(this.url);
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
    this.ws.onerror = this.onError.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.client.emit(this.client.Events.DEBUG, "ws", `${URL}`);
  }
  onClose(): void {}
  onError(): void {}
  onOpen(): void {}
  onMessage(data: MessageEvent<any>): void {
    this.onPacket.bind(this);
  }
  onPacket(data: MessageEvent<any>): void {
    console.log("test");

    switch (data.data.t) {
      case WSEvents.READY:
        this.emit(WSEvents.READY);
        break;
    }
  }
}
