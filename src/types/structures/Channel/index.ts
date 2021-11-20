import { Client } from "@/types/client";
import { ChannelType } from "@/types/util/data";
import { SnowflakeTool } from "@/types/util/snowflake";
import { Base } from "../Base";
import { ChannelStructure } from "./structures";

export class Channel extends Base {
  /** 頻道類別 */
  type: string = "unknown";
  /** 是否被清除 */
  deleted: boolean = false;
  /* id */
  id: string;
  data: ChannelStructure;
  constructor(client: Client, data: ChannelStructure) {
    super(client);
    // data["type"]
    this.data = data;
    this.setType(data["type"]);
    this.id = data.id;
  }
  /* channel 創建時間 */
  get createdAt(): Date {
    return new Date(SnowflakeTool.deconstruct(this.id).timestamp);
  }
  /* 是否為DM channel */
  get isDm(): boolean {
    return this.type === ChannelType[1];
  }
  async delete(): Promise<this> {
    await this.client.api().channels[this.id].delete();
    return this;
  }
  setType(typeId: number) {
    this.type = ChannelType[typeId] || "unknown";
    return this.type;
  }
  toString(): string {
    return `<#${this.id}>`;
  }
}
