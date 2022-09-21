import { RiskGroup } from './types';

export const RISK_GROUPS: RiskGroup[] = [
  {
    index: 1,
    range: '1 - 20',
  },
  {
    index: 2,
    range: '21 - 40',
  },
  {
    index: 3,
    range: '41 - 60',
  },
  {
    index: 4,
    range: '61 - 80',
  },
  {
    index: 5,
    range: '81 - 99',
  },
];

export enum RiskGroupTableColumns {
  GROUPS = 'RISK_GROUPS',
  NUMBER = 'RISK_NUMBER',
  POTENTIAL_GAIN_AVG = 'POTENTIAL_GAIN_AVG',
  POTENTIAL_LOSS_AVG = 'POTENTIAL_LOSS_AVG',
}
