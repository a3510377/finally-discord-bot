import { JsonAny, DIS } from "@/types/structures";
import { OpCodes } from "@/types/client/WebSocket/main";

export interface GatewayPayloadStructure {
  /**操作碼 */
  op: OpCodes;
  /**事件 數據 */
  d?: JsonAny;
  /** */
  s: number;
  /**事件名 */
  t?: string;
}

/****** GatewayDispatch ******/
export interface GatewayDispatch extends GatewayPayloadStructure {}

/****** GatewayHello ******/
/**
 * opcode = 10
 */
export interface GatewayHello extends GatewayPayloadStructure {
  op: OpCodes.HELLO;
}

/**
 * @link https://discord.com/developers/docs/topics/gateway#hello-hello-structure
 * */
export interface GatewayHelloStructure {
  heartbeat_interval: number;
}
