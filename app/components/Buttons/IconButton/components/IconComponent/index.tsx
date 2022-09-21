import React, { cloneElement, FC, memo, ReactElement, useMemo } from 'react';
import { View, ViewProps } from 'react-native';

import { IconProps } from '@app/components/Icon/types';
import styles from './styles';

export interface IconComponentProps extends ViewProps {
  icon: ReactElement<IconProps>;
  tint: string;
  isDisabled: boolean;
}

const IconComponent: FC<IconComponentProps> = ({
  icon,
  tint,
  isDisabled = false,
}) => {
  const originalIconHasTint = !!icon.props.tint;

  const iconToUse = useMemo(() => {
    if (!originalIconHasTint || isDisabled) {
      return cloneElement(icon, { tint });
    }

    return icon;
  }, [icon, originalIconHasTint, isDisabled, tint]);

  return <View style={styles.container}>{iconToUse}</View>;
};

export default memo(IconComponent);
