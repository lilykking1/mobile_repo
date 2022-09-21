export const getValue = (coins: Array<string>, amount?: number): string => {
  if (coins.length === 1 && amount) {
    return `${amount} ${coins[0].toUpperCase()}`;
  }
  if (coins.length === 1 && !amount) {
    return `${coins[0].toUpperCase()}`;
  }
  return `${coins.length}`;
};
