import React, { FC } from 'react';
import { LinearGradient, Stop, Defs } from 'react-native-svg';
import { PaletteColor } from '@app/theme';
import { GRADIENT_ID } from './constants';

interface GradientBgProps {
  gradientColor: PaletteColor;
}

const GradientBg: FC<GradientBgProps> = ({ gradientColor }) => (
  <Defs key="gradient">
    <LinearGradient id={GRADIENT_ID} x1="0%" x2="0%" y2="100%">
      <Stop offset="0%" stopColor={gradientColor as string} stopOpacity={1} />
      <Stop offset="100%" stopColor={gradientColor as string} stopOpacity={0} />
    </LinearGradient>
  </Defs>
);

export default GradientBg;
