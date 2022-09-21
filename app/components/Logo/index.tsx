import React, { FC, useMemo, useContext } from 'react';
import { View, ViewProps } from 'react-native';
import { RootContext } from '@app/state';
import Svg from 'react-native-svg';
import { observer } from 'mobx-react';
import { Icon, Text } from './components';
import {
  calculateDimensions,
  getAccentColor,
  getMonochromaticColor,
} from './utils';

interface LogoProps extends ViewProps {
  monochromatic?: boolean;
  compact?: boolean;
  width?: number;
  height?: number;
}

const Logo: FC<LogoProps> = ({
  monochromatic,
  compact,
  width,
  height,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const tint = getAccentColor(theme);
  const [primary, secondary] = getMonochromaticColor(theme, monochromatic);

  const dimensions = useMemo(
    () => calculateDimensions(width, height, compact),
    [compact, height, width]
  );

  return (
    <View {...rest}>
      <Svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={dimensions.viewBox}
        fill="none"
      >
        <Icon primary={primary} secondary={secondary} />
        {!compact && <Text tint={tint} />}
      </Svg>
    </View>
  );
};

export default observer(Logo);
