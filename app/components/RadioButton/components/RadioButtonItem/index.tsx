import React, { FC, useCallback, useMemo } from 'react';
import { LayoutChangeEvent, TouchableOpacity } from 'react-native';
import { noop } from 'lodash';

import { Typography } from '@app/components';
import styles from './styles';
import { RadioButtonItemSize, RadioButtonItemVariant } from './types';
import { getSizeStyle, getVariantStyle, getTypographySize } from './utils';

type RadioButtonItemProps = {
  active?: boolean;
  index?: number;
  label: string;
  variant: RadioButtonItemVariant;
  size: RadioButtonItemSize;
  onPress?: (id: number | string) => void;
  onLayout?: (index: number, dimension: number) => void;
};

const RadioButtonItem: FC<RadioButtonItemProps> = ({
  active,
  variant,
  size,
  index,
  label,
  onLayout = noop,
  onPress = noop,
}) => {
  const labelStyles = [
    styles.base,
    getVariantStyle(variant, active),
    getSizeStyle(size),
  ];

  const handleLayout = useCallback(
    ({ nativeEvent }: LayoutChangeEvent) => {
      const dimension = nativeEvent.layout.width;
      onLayout(index, dimension);
    },
    [index, onLayout]
  );

  const handlePress = useCallback(() => {
    onPress(index);
  }, [index, onPress]);

  const typographySize = useMemo(() => getTypographySize(size), [size]);

  return (
    <TouchableOpacity
      accessibilityRole="radio"
      accessibilityState={{ checked: active }}
      style={styles.container}
      onLayout={handleLayout}
      onPress={handlePress}
    >
      <Typography size={typographySize} style={labelStyles}>
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

export default RadioButtonItem;
