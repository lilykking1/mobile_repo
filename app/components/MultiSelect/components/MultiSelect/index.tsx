import React, { FC, useMemo } from 'react';
import { View } from 'react-native';

import { MultiSelectProps } from './types';
import styles from './styles';

const MultiSelect: FC<MultiSelectProps> = ({ children, style, ...rest }) => {
  const defaultStyles = useMemo(() => [styles.default, style], [style]);

  return (
    <View style={defaultStyles} {...rest}>
      {children}
    </View>
  );
};

export default MultiSelect;
