/** 將陣列轉為 Objext value:value */
export function ArrayKey(atr: any[]): { [key: string]: string } {
    let aus: { [key: string]: string } = {};
    atr.map(value => aus[value] = value);
    return aus;
}
