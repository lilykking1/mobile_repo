import React, { FC } from 'react';

import { Empty, Populated, Relocating } from './views';

import { ManagedPortfolioStatus } from './types';

export interface ManagedPortfolioCardProps {
  value?: number | string;
  isValuesSecret: boolean;
  isValuesInBitcoin: boolean;
  prefixValues?: string;
  suffixValues?: string;
  accrualValue?: number;
  accrualChange?: number;
  chartData?: any[];
  status?: ManagedPortfolioStatus;
  newRealocatedPortfolio?: {
    defaultRisk: number;
    newRisk: number;
  };
}

const ManagedPortfolioCard: FC<ManagedPortfolioCardProps> = ({
  value,
  isValuesSecret,
  isValuesInBitcoin,
  chartData = [],
  prefixValues,
  suffixValues,
  accrualValue,
  accrualChange,
  status,
  newRealocatedPortfolio,
}) => {
  if (newRealocatedPortfolio) {
    return (
      <Relocating
        oldRisk={newRealocatedPortfolio.defaultRisk}
        newRisk={newRealocatedPortfolio.newRisk}
      />
    );
  }
  return value ? (
    <Populated
      value={value}
      isValuesSecret={isValuesSecret}
      isValuesInBitcoin={isValuesInBitcoin}
      chartData={chartData}
      prefixValues={prefixValues}
      suffixValues={suffixValues}
      accrualValue={accrualValue}
      accrualChange={accrualChange}
    />
  ) : (
    <Empty status={status} />
  );
};

export default ManagedPortfolioCard;
