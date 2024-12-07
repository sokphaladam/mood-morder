export function formatKHR(value: number) {
  const formatter = new Intl.NumberFormat('km-Kh', {
    style: 'currency',
    currency: 'KHR',
    currencySign: 'standard',
    currencyDisplay: 'narrowSymbol',
  });

  return formatter.format(value);
}
