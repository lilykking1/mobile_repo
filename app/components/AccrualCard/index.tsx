import { extractStyles } from '@app/utils/styles';
import React, { FC, useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import Quantity from '@app/components/Quantity';

import { styles } from './styles';
import { AccrualCardSize } from './types';
import {
  getAccrualLabelStyle,
  getAccrualStyle,
  getAccrualVariantFromValue,
  getCaretLossTint,
  getCaretProfitTint,
  getSizeStyle,
} from './utils';

interface AccrualCardProps extends ViewProps {
  isSecret?: boolean;
  size?: AccrualCardSize;
  value?: number;
  percentageChange?: string;
  accrualPrefixValue?: string;
  precision?: number;
}

const AccrualCard: FC<AccrualCardProps> = ({
  style,
  isSecret,
  size,
  value,
  percentageChange,
  precision = 2,
  accrualPrefixValue = '',
}) => {
  const variant = useMemo(() => getAccrualVariantFromValue(value), [value]);

  const custom = useMemo(
    () => [
      styles.base,
      getAccrualStyle(variant),
      getAccrualLabelStyle(variant),
      getSizeStyle(size),
      style,
    ],
    [style, variant, size]
  );

  const { backgroundStyle, labelStyle } = useMemo(() => {
    const extracted = extractStyles(custom, 'backgroundStyle', 'labelStyle');
    return {
      backgroundStyle: [styles.base, extracted.backgroundStyle],
      labelStyle: [extracted.labelStyle],
    };
  }, [custom]);

  const { caretLossTint, caretProfitTint } = useMemo(
    () => ({
      caretLossTint: getCaretLossTint(variant),
      caretProfitTint: getCaretProfitTint(variant),
    }),
    [variant]
  );

  return (
    <View style={backgroundStyle}>
      <Quantity
        style={labelStyle}
        isSecret={isSecret}
        caret
        value={value}
        accrual
        precision={precision}
        caretLossTint={caretLossTint}
        caretProfitTint={caretProfitTint}
        prefix={accrualPrefixValue}
      />
      {percentageChange && !isSecret && (
        <Quantity
          style={labelStyle}
          value={percentageChange}
          prefix=" ("
          suffix="%)"
        />
      )}
    </View>
  );
};

export default AccrualCard;
