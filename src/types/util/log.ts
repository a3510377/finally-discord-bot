import { Client } from "../client";

export class Log {
  client: Client;
  events = {
    ERROR: "LOG_ERROR",
    DEBUG: "LOG_DEBUG",
    WARN: "LOG_WARN",
    LOG: "LOG_LOG",
  };
  constructor(client: Client) {
    this.client = client;
    const { ERROR, DEBUG, WARN, LOG } = client.options?.log || {};

    for (let [key, value] of Object.entries({
      DEBUG: { ch: DEBUG, fun: this._debug },
      ERROR: { ch: ERROR, fun: this._error },
      WARN: { ch: WARN, fun: this._warn },
      LOG: { ch: LOG, fun: this._log },
    }).filter(([, value]) => value.ch !== false))
      this.client.addListener(`LOG_${key}`, value.fun.bind(this));
  }
  setMessage(type: string, message: string, messages: string[]): string[] {
    let _type = {
      log: { name: "日誌", color: "chartreuse" },
      debug: { name: "除錯", color: "chartreuse" },
      warn: { name: "警告", color: "yellow" },
      error: { name: "錯誤", color: "red" },
    }[type.toLocaleLowerCase()];
    let Allstyle =
      "background-color: black;color: white;font-size: 120%;padding: 2px";
    return [
      `%c[%c${_type?.name || type}%c]: ` +
        (messages ? `${message} --> ${messages.join(" ")}` : message),
      Allstyle,
      `font-weight: 900;color: ${_type?.color}!important;${Allstyle}`,
      Allstyle,
    ];
  }
  removeLog() {}
  private _debug(message: string, ...messages: string[]) {
    console.debug(...this.setMessage("DEBUG", message, messages));
  }
  private _error(message: string, ...messages: string[]) {
    console.error(...this.setMessage("ERROR", message, messages));
  }
  private _warn(message: string, ...messages: string[]) {
    console.warn(...this.setMessage("WARN", message, messages));
  }
  private _log(message: string, ...messages: string[]) {
    console.log(...this.setMessage("LOG", message, messages));
  }
}
