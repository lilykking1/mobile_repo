import React, { FC, useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { Icon } from '@app/components';

import styles from './styles';

interface ArrowContainerProps {
  style: StyleProp<ViewStyle>;
}

const ArrowContainer: FC<ArrowContainerProps> = ({ style }) => {
  const custom = useMemo(() => [styles.rightArrow, style], [style]);
  return (
    <View style={custom}>
      <Icon.ChevronRight tint="white" width={16} height={16} />
    </View>
  );
};

export default ArrowContainer;
