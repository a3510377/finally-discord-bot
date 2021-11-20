/** ID -> 2bit */
export function idToBinary(num: string): string {
  let bin = "",
    high = parseInt(num.slice(0, -10)) || 0,
    low = parseInt(num.slice(-10));
  while (low > 0 || high > 0) {
    bin = String(low & 1) + bin;
    low = Math.floor(low / 2);
    if (high > 0) {
      low += 5e9 * (high % 2);
      high = Math.floor(high / 2);
    }
  }
  return bin;
}
export function random(max: number, min: number): number {
  return ~~(Math.random() * (max - min) + min);
}
