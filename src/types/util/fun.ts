/** 將 list 轉為 Object value:value */
export function ArrayKey(atr: any[]): { [key: string]: string } {
  let aus: { [key: string]: string } = {};
  atr.map((value) => (aus[value] = value));
  return aus;
}
export function CheckWssUrl(url: string): string {
  return !url.startsWith("wss://") && (url = `wss://${url}`), url;
}
