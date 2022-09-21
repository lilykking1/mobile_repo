import React, { FC, useMemo } from 'react';
import { View } from 'react-native';

import { MultiSelectCheckboxProps } from './types';
import styles from './styles';

const MultiSelectCheckbox: FC<MultiSelectCheckboxProps> = ({
  style,
  children,
  ...rest
}) => {
  const defaultStyles = useMemo(() => [styles.default, style], [style]);

  return (
    <View style={defaultStyles} {...rest}>
      {children}
    </View>
  );
};

export default MultiSelectCheckbox;
