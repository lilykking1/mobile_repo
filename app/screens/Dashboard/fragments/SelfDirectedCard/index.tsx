import React, { FC } from 'react';
import { COINS } from '@app/models';

import Populated from './views/Populated';
import Empty from './views/Empty';

export interface SelfDirectedCardProps {
  isValuesSecret: boolean;
  isValuesInBitcoin: boolean;
  value?: number | string;
  prefixValues?: string;
  suffixValues?: string;
  accrualValue?: number;
  accrualChange?: number;
  coins?: COINS[];
}

const SelfDirectedCard: FC<SelfDirectedCardProps> = ({
  value,
  isValuesSecret,
  isValuesInBitcoin,
  prefixValues,
  suffixValues,
  accrualValue,
  accrualChange,
  coins,
}) => (
  <>
    {value ? (
      <Populated
        value={value}
        isValuesSecret={isValuesSecret}
        isValuesInBitcoin={isValuesInBitcoin}
        prefixValues={prefixValues}
        suffixValues={suffixValues}
        accrualValue={accrualValue}
        accrualChange={accrualChange}
        coins={coins}
      />
    ) : (
      <Empty />
    )}
  </>
);

export default SelfDirectedCard;
