import { EventEmitter } from "events"

import { Client } from "../index"
import { WSEvents } from "./main"

export class DiscordLink extends EventEmitter {
  gateway?: string
  client: Client
  constructor(client: Client) {
    super()
    this.client = client
  }
  async connect() {
    console.log(await this.client.api().gateway.bot.get())
  }
  onMessage(data: any) {
    data = data
    this.onPacket(data)
  }
  onPacket(data: any) {
    switch (data.t) {
      case WSEvents.READY:
        this.emit(WSEvents.READY)
        break
    }
  }
}

export class WebSocketShard extends EventEmitter {
  ws?: WebSocket
  constructor() {
    super()
  }
  connect() {
    const ws = (this.ws = new WebSocket(""))
    ws.onopen
    ws.onmessage
    ws.onerror
    ws.onclose
  }
}
