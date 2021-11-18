function idToBinary(num) {
  let bin = "",
    high = parseInt(num.slice(0, -10)) || 0,
    low = parseInt(num.slice(-10));
  for (; low > 0 || high > 0; )
    (bin = String(1 & low) + bin),
      (low = Math.floor(low / 2)),
      high > 0 && ((low += (high % 2) * 5e9), (high = Math.floor(high / 2)));
  return bin;
}
