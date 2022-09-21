import React, { FC } from 'react';
import { Typography, Icon } from '@app/components';
import { addFiatSignToAmount, formatNumberToLocale } from '@app/utils/numbers';
import { View } from 'react-native';
import { palette } from '@app/theme';
import styles from './styles';

interface HowMuchToInvestThumbProps {
  amount: number;
  maximumAllowed: number;
  isDisabled: boolean;
}

const HowMuchToInvestThumb: FC<HowMuchToInvestThumbProps> = ({
  amount,
  maximumAllowed,
  isDisabled,
}) => {
  const formattedAmount = addFiatSignToAmount(formatNumberToLocale(amount));

  const minAndMaxAllowedValues = [0, maximumAllowed];
  const isOutsideMinAndMaxValues = !minAndMaxAllowedValues.includes(amount);

  const thumbTint = isDisabled ? palette.grey[400] : undefined;

  return (
    <View style={styles.container}>
      {isOutsideMinAndMaxValues && (
        <Typography
          strong
          size="body2"
          variant="secondary.800"
          style={styles.thumbAmount}
        >
          {formattedAmount}
        </Typography>
      )}

      <View style={styles.thumbContainer}>
        <Icon.ThreeLineSlider tint={thumbTint} />
      </View>
    </View>
  );
};

export default HowMuchToInvestThumb;
