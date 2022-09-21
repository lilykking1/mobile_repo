import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { PaletteColor } from '@app/theme';
import { usePerformanceFormatter } from '@app/hooks/usePerformanceFormatter';

import { CaretSign } from './components';
import { getVariant } from './utils';
import Typography, { TypographyProps } from '../Typography';
import styles from './styles';
import ValueLabel from '../ValueLabel';
import { ValueLabelVariant } from '../ValueLabel/types';

interface QuantityProps extends TypographyProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  accrual?: boolean;
  profit?: boolean;
  loss?: boolean;
  precision?: number;
  useValueLabel?: boolean;
  caret?: boolean;
  isSecret?: boolean;
  valueLabelVariant?: ValueLabelVariant;
  caretLossTint?: PaletteColor;
  caretProfitTint?: PaletteColor;
}

const Quantity: FC<QuantityProps> = ({
  prefix,
  value,
  suffix,
  accrual,
  profit,
  loss,
  precision = 2,
  isSecret = false,
  useValueLabel = false,
  valueLabelVariant = 'normal',
  caret,
  caretLossTint,
  caretProfitTint,
  ...rest
}) => {
  const formatted = useMemo(
    () =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      usePerformanceFormatter({
        value,
        isSecret,
        prefix,
        suffix,
        accrual,
        profit,
        loss,
        caret,
        precision,
      }),
    [value, prefix, suffix, accrual, profit, loss, caret, precision, isSecret]
  );

  // Variant might be overriden if defined by the invoker
  const variant = useMemo(() => getVariant(value, accrual, profit, loss), [
    accrual,
    loss,
    profit,
    value,
  ]);

  const label = useMemo(() => {
    if (useValueLabel) {
      return <ValueLabel value={formatted} variant={valueLabelVariant} />;
    }

    return (
      <Typography strong size="body2" variant={variant} {...rest}>
        {formatted}
      </Typography>
    );
  }, [formatted, rest, useValueLabel, valueLabelVariant, variant]);

  return (
    <View style={styles.container}>
      <CaretSign
        caret={caret}
        value={value}
        lossTint={caretLossTint}
        profitTint={caretProfitTint}
      />
      {label}
    </View>
  );
};

export default Quantity;
