import { EventEmitter } from "events";

import { Client } from "../index";
import { WSEvents } from "./main";
import { CheckWssUrl } from "@/types/util/fun";

export class DiscordLink extends EventEmitter {
  gateway?: string;
  client: Client;
  url?: string;
  constructor(client: Client) {
    super();
    this.client = client;
  }
  async connect() {
    const { url, shards, session_start_limit } = (
      await this.client.api().gateway.bot.get()
    ).data;
    this.url = CheckWssUrl(url);
    console.log(url, shards, session_start_limit);
  }
  onMessage(data: any) {
    data = data;
    this.onPacket(data);
  }
  onPacket(data: any) {
    switch (data.t) {
      case WSEvents.READY:
        this.emit(WSEvents.READY);
        break;
    }
  }
}

export class WebSocketShard extends EventEmitter {
  ws?: WebSocket;
  constructor() {
    super();
  }
  connect() {
    const ws = (this.ws = new WebSocket(""));
    ws.onopen;
    ws.onmessage;
    ws.onerror;
    ws.onclose;
  }
}
