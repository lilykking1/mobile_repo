import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { getCoinProperties } from '@app/models';
import {
  MultiSelectCheckbox,
  MultiSelectCheckSmall,
} from '@app/components/MultiSelect/components';
import type { Lending } from '@app/models/Portfolio';
import {
  AssetsCenterItem,
  AssetsLeftItem,
  AssetsRightItem,
} from './components';

import styles from './styles';
import { AccrualCard } from '..';

interface AssetsItemProps {
  coin: string;
  coinAmount: string;
  fiatAmount: string;
  lending?: Lending;
  isSecret?: boolean;
  listContainsLending?: boolean;
  accrualShown?: boolean;
  accrualIsSecret?: boolean;
  accrualCardSize?: never;
  accrualCardValue?: number;
  accrualCardPercentageChange?: string;
  accrualCardPrecision?: number;
  accrualCardPrefixValue?: string;
  accrualCardStyle?: unknown;
  suffixValue?: string;
  prefixValue?: string;
  checked?: boolean;
  isMultiSelect?: boolean;
  accrualCardContainer?: unknown;
}

const AssetsItem: FC<AssetsItemProps> = ({
  coin,
  coinAmount,
  fiatAmount,
  lending,
  isSecret = false,
  listContainsLending = false,
  accrualShown,
  accrualIsSecret = false,
  accrualCardSize,
  accrualCardValue,
  accrualCardPercentageChange,
  accrualCardPrecision,
  accrualCardPrefixValue,
  accrualCardStyle,
  suffixValue,
  prefixValue,
  isMultiSelect = false,
  checked,
  accrualCardContainer,
}) => {
  const coinProperties = getCoinProperties(coin);

  const CheckboxIcon = useMemo(() => {
    if (checked) {
      return MultiSelectCheckSmall;
    }

    return MultiSelectCheckbox;
  }, [checked]);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.inLine}>
        {isMultiSelect && (
          <View style={styles.checkIcon}>
            <CheckboxIcon style={styles.roundCheck} />
          </View>
        )}
        <AssetsLeftItem
          coin={coin}
          coinName={coinProperties.name}
          isLending={!!lending}
          hasLendingView={listContainsLending}
        />
      </View>
      {lending && (
        <AssetsCenterItem
          lendingText={lending.text}
          lendingAmount={lending.amount}
          lendingCoin={lending.coin}
        />
      )}
      {accrualShown && (
        <View style={accrualCardContainer}>
          <AccrualCard
            style={accrualCardStyle}
            isSecret={accrualIsSecret}
            size={accrualCardSize}
            value={accrualCardValue}
            percentageChange={accrualCardPercentageChange}
            precision={accrualCardPrecision}
            accrualPrefixValue={accrualCardPrefixValue}
          />
        </View>
      )}
      <AssetsRightItem
        coin={coin}
        coinAmount={coinAmount}
        fiatAmount={fiatAmount}
        isSecret={isSecret}
        suffixValue={suffixValue}
        prefixValue={prefixValue}
      />
    </View>
  );
};

export default AssetsItem;
