import { Client } from "../client";

export class Log {
  events = {
    ERROR: "LOG_ERROR",
    DEBUG: "LOG_DEBUG",
    WARN: "LOG_WARN",
    LOG: "LOG_LOG",
  };
  constructor(public client: Client) {
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
      WARN: { name: "警告", color: "yellow" },
      ERROR: { name: "錯誤", color: "red" },
      LOG: { name: "日誌", color: "chartreuse" },
      DEBUG: { name: "除錯", color: "chartreuse" },
    }[type.toUpperCase()];
    let AllStyle =
      "background-color: black;color: white;font-size: 120%;padding: 2px";
    return [
      `%c[%c${_type?.name || type}%c]: ` +
        (messages ? `${message} --> ${messages.join(" ")}` : message),
      AllStyle,
      `font-weight: 900;color: ${_type?.color}!important;${AllStyle}`,
      AllStyle,
    ];
  }
  DEBUG(...msg: string[]) {
    this.client.emit(this.client.Events.DEBUG, ...msg);
  }
  WARN(...msg: string[]) {
    this.client.emit(this.client.Events.WARN, ...msg);
  }
  ERROR(...msg: string[]) {
    this.client.emit(this.client.Events.ERROR, ...msg);
  }
  LOG(...msg: string[]) {
    this.client.emit(this.client.Events.LOG, ...msg);
  }
  protected _debug(message: string, ...messages: string[]) {
    console.debug(...this.setMessage("DEBUG", message, messages));
  }
  protected _error(message: string, ...messages: string[]) {
    console.error(...this.setMessage("ERROR", message, messages));
  }
  protected _warn(message: string, ...messages: string[]) {
    console.warn(...this.setMessage("WARN", message, messages));
  }
  protected _log(message: string, ...messages: string[]) {
    console.log(...this.setMessage("LOG", message, messages));
  }
}
