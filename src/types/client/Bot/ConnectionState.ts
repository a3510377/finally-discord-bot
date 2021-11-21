import { Client } from "..";

export class ConnectionState {
  private _guilds: { [id: string]: any } = {};
  private _users = [];
  private _emojis = [];
  constructor(public client: Client) {}
  /* guilds */
  /* TODO:　型別 */
  /** 回傳 guilds */
  guilds() {
    return Object.values(this._guilds);
  }
  private _addGuild(guild: { [key: string]: any }) {
    this._guilds[guild.id] = guild;
    // for (const emoji of guild.emojis) this._emojis[emoji.id] = emoji;
  }
  private _removeGuild(guild: { [key: string]: any }) {
    delete this._guilds[guild.id];
    for (const emoji of guild.emojis) delete this._emojis[emoji.id];
  }
  /* emojis */
  emojis() {
    return Object.values(this._emojis);
  }
}
