import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import { ValueLabelVariant } from './types';
import { getRightStyles } from './utils';

export interface ValueLabelProps {
  value: string;
  variant: ValueLabelVariant;
}

const ValueLabel: FC<ValueLabelProps> = ({ value, variant = 'normal' }) => {
  const decimalIndex = useMemo(() => value?.indexOf('.'), [value]);
  const emptyDecimal = useMemo(() => decimalIndex === -1, [decimalIndex]);

  const leftSize = useMemo(() => (variant === 'large' ? 'h1' : 'body1'), [
    variant,
  ]);
  const rightSize = useMemo(() => (variant === 'large' ? 'h6' : 'body1'), [
    variant,
  ]);

  const left = useMemo(() => value?.substring(0, decimalIndex), [
    value,
    decimalIndex,
  ]);

  const right = useMemo(() => value?.substring(decimalIndex, value?.length), [
    decimalIndex,
    value,
  ]);

  const rightStyles = useMemo(() => getRightStyles(variant), [variant]);

  if (emptyDecimal) {
    return (
      <View style={styles.container}>
        <Typography strong size={leftSize}>
          {value}
        </Typography>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Typography strong size={leftSize}>
        {left}
      </Typography>
      <Typography strong style={rightStyles} size={rightSize}>
        {right}
      </Typography>
    </View>
  );
};

export default ValueLabel;
