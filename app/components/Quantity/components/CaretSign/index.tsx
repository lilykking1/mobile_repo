import React, { FC } from 'react';
import { View } from 'react-native';

import { Icon } from '@app/components';
import { PaletteColor, paletteColors } from '@app/theme';
import { parseSign, SIGN } from '@app/utils/numbers';
import styles from './styles';

interface CaretSignProps {
  caret?: boolean;
  value?: string | number;
  lossTint?: PaletteColor;
  profitTint?: PaletteColor;
}

const CaretSign: FC<CaretSignProps> = ({
  caret,
  value,
  lossTint = paletteColors.red[500],
  profitTint = paletteColors.green[500],
}) => {
  if (!caret) {
    return null;
  }

  const sign = parseSign(value);

  if (sign === SIGN.PROFIT) {
    return (
      <View style={styles.caret}>
        <Icon.CaretUp tint={profitTint} />
      </View>
    );
  }

  if (sign === SIGN.LOSS) {
    return (
      <View style={styles.caret}>
        <Icon.CaretDown tint={lossTint} />
      </View>
    );
  }

  return null;
};

export default CaretSign;
