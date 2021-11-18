import { Client } from "@/types/client";
import { Channel } from ".";
import { ChannelStructure } from "./structures";

class GuildChannel extends Channel {
  constructor(client: Client, data: ChannelStructure) {
    super(client, data);
  }
}
