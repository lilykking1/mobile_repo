export const synopsis = {
  '25':
    'Your LOW portfolio has been curated by crypto experts based on your Risk Number. You can make adjustments to your risk profile below. ',
  '50':
    'Your MID portfolio has been curated by crypto experts based on your Risk Number. You can make adjustments to your risk profile below. ',
  '75':
    'Your HIGH portfolio has been curated by crypto experts based on your Risk Number. You can make adjustments to your risk profile below. ',
};

export const getSynopsisDescription = (riskNumber: number): string => {
  if (riskNumber <= 25) {
    return synopsis['25'];
  }
  if (riskNumber <= 50) {
    return synopsis['50'];
  }
  return synopsis['75'];
};
