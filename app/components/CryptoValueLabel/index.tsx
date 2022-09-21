import { SECRET_PLACEHOLDER } from '@app/utils/constants';
import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import { CryptoValueLabelVariant } from './types';
import { getPrefixStyles, getSuffixStyles } from './utils';

export interface CryptoValueLabelProps {
  value: string | number;
  variant: CryptoValueLabelVariant;
  isSecret?: boolean;
  coinPrefix?: string;
  isPrefixStyled?: boolean;
  coinSuffix?: string;
  isSuffixStyled?: boolean;
}

const CryptoValueLabel: FC<CryptoValueLabelProps> = ({
  value,
  variant = 'normal',
  isSecret = false,
  coinPrefix,
  isPrefixStyled = false,
  coinSuffix,
  isSuffixStyled = true,
}) => {
  const prefixSize = useMemo(() => (variant === 'large' ? 'h1' : 'body1'), [
    variant,
  ]);
  const valueSize = useMemo(() => (variant === 'large' ? 'h1' : 'body1'), [
    variant,
  ]);
  const suffixSize = useMemo(() => (variant === 'large' ? 'h6' : 'body1'), [
    variant,
  ]);

  const prefixStyles = useMemo(() => getPrefixStyles(isPrefixStyled), [
    isPrefixStyled,
  ]);
  const suffixStyles = useMemo(() => getSuffixStyles(isSuffixStyled, variant), [
    isSuffixStyled,
    variant,
  ]);

  const valueToDisplay = useMemo(
    () => (isSecret ? SECRET_PLACEHOLDER : value),
    [isSecret, value]
  );

  return (
    <View style={styles.container}>
      {coinPrefix && (
        <Typography strong style={prefixStyles} size={prefixSize}>
          {coinPrefix}
        </Typography>
      )}

      <Typography strong size={valueSize}>
        {valueToDisplay}
      </Typography>

      {coinSuffix && (
        <Typography strong style={suffixStyles} size={suffixSize}>
          {' '}
          {coinSuffix}
        </Typography>
      )}
    </View>
  );
};

export default CryptoValueLabel;
