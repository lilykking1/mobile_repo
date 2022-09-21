import React, { FC } from 'react';
import { Text, View, ViewProps } from 'react-native';

import styles from './styles';

interface BadgeProps extends ViewProps {
  count: number;
}

const Chip: FC<BadgeProps> = ({ count }) => (
  <View style={styles.base}>
    <Text style={styles.label}>{count}</Text>
  </View>
);

export default Chip;
