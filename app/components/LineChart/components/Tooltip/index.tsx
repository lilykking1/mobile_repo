import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import Background from '@app/components/Background';
import Typography from '@app/components/Typography';
import { palette } from '@app/theme';
import styles from './styles';
import {
  getDescriptionTextColorVariant,
  getTitleTextColorVariant,
} from './utils';

interface TooltipProps {
  title: string;
  description: string;
  style: ViewStyle;
  isDarkTheme?: boolean;
}

const Tooltip: FC<TooltipProps> = ({
  title,
  description,
  style,
  isDarkTheme = false,
}) => {
  const titleTextColorVariant = getTitleTextColorVariant(isDarkTheme);
  const descriptionTextColorVariant = getDescriptionTextColorVariant(
    isDarkTheme
  );

  return (
    <Animated.View style={[styles.content, style]}>
      <Background
        style={styles.container}
        altLight={palette.white}
        altDark={palette.royalBlue[1000]}
      >
        <Typography
          strong
          variant={titleTextColorVariant}
          style={styles.titleLabel}
        >
          {title}
        </Typography>
        <Typography
          strong
          variant={descriptionTextColorVariant}
          style={styles.descriptionLabel}
        >
          {description}
        </Typography>
      </Background>
    </Animated.View>
  );
};

export default Tooltip;
