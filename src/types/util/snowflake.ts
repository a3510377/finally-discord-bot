import { idToBinary } from "./util";

/**
 * @url https://discord.com/developers/docs/reference#snowflakes
 */
const EPOCH = 14200704e5;

export class SnowflakeTool {
  /** 解ID */
  static deconstruct(snowflake: string) {
    const BINARY = idToBinary(snowflake).toString().padStart(64, "0");
    return {
      binary: BINARY,
      workerId: "",
      processId: "",
      increment: "",
      timestamp: "",
      get date() {
        return new Date(this.timestamp);
      },
    };
  }
}
