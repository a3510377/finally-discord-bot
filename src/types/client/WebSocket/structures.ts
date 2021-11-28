import { JsonAny, DIS } from "@/types/structures";
import { OpCodes } from "./main";

export interface GatewayPayloadStructure {
  op: OpCodes;
  d: DIS | JsonAny;
  s: DIS | number;
  t: DIS | string;
}
