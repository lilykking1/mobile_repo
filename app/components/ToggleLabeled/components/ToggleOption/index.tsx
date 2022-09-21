import React, { FC, memo, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { noop } from 'lodash';

import { Options } from '@app/components/ToggleIcons/types';
import { Typography } from '@app/components';

import { getContainerWidth, getTextColor } from './utils';
import { CONTAINER_HEIGHT } from '../ToggleLabeled/constants';
import styles from './styles';

interface ToggleOptionProps {
  children?: string;
  color?: string;
  option: Options;
  width?: number;
  onLayout?: (width: number, option: Options) => void;
}

const ToggleOption: FC<ToggleOptionProps> = ({
  children,
  color,
  option,
  width,
  onLayout = noop,
}) => {
  const handleLayout = useCallback(() => {
    onLayout(CONTAINER_HEIGHT, option);
  }, [onLayout, option]);

  const containerStyle = useMemo(
    () => [styles.container, getContainerWidth(width)],
    [width]
  );

  const textStyle = useMemo(() => [styles.text, getTextColor(color)], [color]);

  return (
    <View style={containerStyle} onLayout={handleLayout}>
      <Typography onLayout={handleLayout} strong style={textStyle}>
        {children}
      </Typography>
    </View>
  );
};

export default memo(ToggleOption);
