/** 將 list 轉為 Object value:value */
export function ArrayKey<T>(atr: T[]) {
  let aus: { [key: string]: T } = {};
  atr.map((value) => (aus[String(value)] = value));
  return aus;
}
export function CheckWssUrl(url: string): string {
  return !url.startsWith("wss://") && (url = `wss://${url}`), url;
}
let t = ArrayKey(["awa", "awaa"]);
t.awa;
let a: ("a" | "b")[];
