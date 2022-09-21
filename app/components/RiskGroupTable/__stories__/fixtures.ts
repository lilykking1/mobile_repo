import { RISK_GROUPS } from '../constants';

export const userRiskGroup: number[] = RISK_GROUPS.map(
  (riskGroup) => riskGroup.index
);
