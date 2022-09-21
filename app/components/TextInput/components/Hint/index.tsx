import React, { FC, useMemo } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { isEmpty } from 'lodash';

import { Typography, Background } from '@app/components';
import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';

import { getTextVariant } from './utils';
import { withTimingOpacity } from './animations';
import styles from './styles';

interface HintProps {
  active: boolean;
  text: string;
  touched: boolean;
  value: string;
  disabled: boolean;
  error: boolean;
  theme: Theme;
}
const Hint: FC<HintProps> = ({
  active,
  text,
  touched,
  value,
  disabled,
  error,
  theme,
}) => {
  const showHint = useMemo(() => active || !isEmpty(value) || error, [
    active,
    value,
    error,
  ]);
  // styles for hint text on upper left border of container
  const textVariant = useMemo(
    () => getTextVariant(active, error, touched, disabled, theme),
    [active, error, touched, disabled, theme]
  );

  const fadeInOutStyle = useAnimatedStyle(
    () => ({
      opacity: withTimingOpacity(showHint),
    }),
    [showHint]
  );

  return (
    <Animated.View style={[styles.container, fadeInOutStyle]}>
      <Background altLight={palette.white} style={styles.background}>
        <Typography style={styles.hint} variant={textVariant}>
          {text}
        </Typography>
      </Background>
    </Animated.View>
  );
};

export default Hint;
