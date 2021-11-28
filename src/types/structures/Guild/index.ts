import { Client } from "@/types/client";
import { Base } from "../Base";
import { snowflake, DIS } from "..";
import { GuildStructure } from "./structures";

export class Guild extends Base {
  /**guild id */
  protected id: GuildStructure["id"];
  /**guild name */
  protected name: GuildStructure["name"];
  protected icon: GuildStructure["icon"];
  protected features: GuildStructure["features"];
  constructor(client: Client, data: GuildStructure) {
    super(client);
    this.id = data.id;
    this.name = data.name;
    this.icon = data.icon;
    this.features = data.features;
  }
}
