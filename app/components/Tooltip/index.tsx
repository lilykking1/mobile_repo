import React, { FC, useMemo } from 'react';
import { ViewProps, ViewStyle, View } from 'react-native';
import { Typography } from '@app/components';
import { styles } from './styles';
import AnimatedContainer from './components/AnimatedContainer';
import { TooltipVariant } from './types';
import { getTextVariantColor, getVariantStyle } from './utils';

interface TooltipProps extends ViewProps {
  text: string;
  variant?: TooltipVariant;
  style?: ViewStyle;
  isAnimated?: boolean;
  showTooltip?: boolean;
}

const Tooltip: FC<TooltipProps> = ({
  text,
  variant,
  style,
  isAnimated,
  showTooltip,
}) => {
  const containerStyle = useMemo(
    () => [styles.tooltipContainer, getVariantStyle(variant), style],
    [style, variant]
  );

  const TooltipText = useMemo(
    () => (
      <Typography variant={getTextVariantColor(variant)} size="body2" strong>
        {text}
      </Typography>
    ),
    [text, variant]
  );

  if (isAnimated) {
    return (
      <AnimatedContainer
        pointerEvents="none"
        style={[style, getVariantStyle(variant)]}
        showTooltip={showTooltip}
      >
        {TooltipText}
      </AnimatedContainer>
    );
  }
  return (
    <View pointerEvents="none" style={containerStyle}>
      {TooltipText}
    </View>
  );
};

export default Tooltip;
