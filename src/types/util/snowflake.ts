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
      workerId: parseInt(BINARY.substring(42, 47), 2),
      processId: parseInt(BINARY.substring(47, 52), 2),
      increment: parseInt(BINARY.substring(52, 64), 2),
      timestamp: parseInt(BINARY.substring(0, 42), 2) + EPOCH,
      get date() {
        return new Date(this.timestamp);
      },
    };
  }
}
