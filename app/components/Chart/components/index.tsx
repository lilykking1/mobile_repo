import React, { FC, useMemo } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Svg from 'react-native-svg';

import { styles } from './styles';

interface ContainerProps {
  width: number;
  height: number;
  style?: ViewStyle;
}

const Container: FC<ContainerProps> = ({ width, height, children, style }) => {
  // view wrapper styles
  const viewStyles = useMemo(() => {
    const base = [styles(height, width).container, style];
    return base;
  }, [height, width, style]);

  // return spinner if there's no data
  return (
    <View style={viewStyles}>
      <Svg style={StyleSheet.absoluteFill}>{children}</Svg>
    </View>
  );
};

export default Container;
