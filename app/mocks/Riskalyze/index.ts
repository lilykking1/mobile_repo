const groups = [
  {
    index: 1,
    potentialGainAvg: 2,
    potentialLossAvg: 20,
  },
  {
    index: 2,
    potentialGainAvg: 7,
    potentialLossAvg: 30,
  },
  {
    index: 3,
    potentialGainAvg: 30,
    potentialLossAvg: 40,
  },
  {
    index: 4,
    potentialGainAvg: 140,
    potentialLossAvg: 70,
  },
  {
    index: 5,
    potentialGainAvg: 300,
    potentialLossAvg: 100,
  },
];

export const getPotentialGainAvg = (groupIndex: number): number => {
  const result = groups.find((group) => group.index === groupIndex);
  if (!result) {
    return 0;
  }
  return result.potentialGainAvg;
};

export const getPotentialLossAvg = (groupIndex: number): number => {
  const result = groups.find((group) => group.index === groupIndex);
  if (!result) {
    return 0;
  }
  return result.potentialLossAvg;
};
