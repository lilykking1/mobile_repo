import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { noop } from 'lodash';
import { CustomSpinner, Typography } from '@app/components';
import { palette } from '@app/theme';
import { CustomSpinnerSizes } from '../CustomSpinner/types';
import {
  getCustomContainerStyles,
  getCustomLabelStyles,
  getDefaultLabel,
} from './utils';
import { LabelAlignmentVariants } from './types';
import {
  DEFAULT_LABEL_ALIGNMENT,
  DEFAULT_LABEL_SIZE,
  DEFAULT_SPINNER_SIZE,
  ONE_SECOND_IN_MILLIS,
} from './constants';
import { TypographySize, TypographyVariant } from '../Typography/types';

interface WaitingIndicatorProps {
  size?: CustomSpinnerSizes;
  label?: string;
  countdown: number;
  color?: string;
  labelSize?: TypographySize;
  labelAltLight?: TypographyVariant;
  labelAltDark?: TypographyVariant;
  labelAlignment?: LabelAlignmentVariants;
  onCountdownFinish?: () => void;
}

const WaitingIndicator: FC<WaitingIndicatorProps> = ({
  size = DEFAULT_SPINNER_SIZE,
  label,
  countdown,
  color = palette.royalBlue[500],
  labelSize = DEFAULT_LABEL_SIZE,
  labelAltLight,
  labelAltDark,
  labelAlignment = DEFAULT_LABEL_ALIGNMENT,
  onCountdownFinish = noop,
}) => {
  const [timer, setTimer] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const timerInterval = useRef<ReturnType<typeof setInterval>>();

  const customContainerStyles = useMemo(
    () => getCustomContainerStyles(labelAlignment),
    [labelAlignment]
  );

  const customLabelStyles = useMemo(
    () => getCustomLabelStyles(labelAlignment),
    [labelAlignment]
  );

  const currentLabel = useMemo(() => getDefaultLabel(timer), [timer]);

  useEffect(() => {
    if (countdown) {
      setTimer(countdown);
      setIsCounting(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setTimer((lastTimerCount) => lastTimerCount - 1);
      }, ONE_SECOND_IN_MILLIS);

      timerInterval.current = interval;
    }
    return () => clearInterval(timerInterval.current);
  }, [isCounting]);

  useEffect(() => {
    if (timer === 0 && isCounting) {
      clearInterval(timerInterval.current);
      setIsCounting(false);
      if (onCountdownFinish) {
        onCountdownFinish();
      }
    }
  }, [timer, isCounting, onCountdownFinish]);

  return (
    <View style={customContainerStyles}>
      <CustomSpinner color={color} size={size} hasBox={false} />
      <Typography
        strong
        size={labelSize}
        style={customLabelStyles}
        altLight={labelAltLight}
        altDark={labelAltDark}
      >
        {label || currentLabel}
      </Typography>
    </View>
  );
};

export default WaitingIndicator;
