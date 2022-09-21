import React, { FC, ReactElement } from 'react';
import { View } from 'react-native';

import { IconButton, Typography } from '@app/components';

import styles from './styles';

interface ButtonWithOutsideLabelProps {
  icon: ReactElement;
  label: string;
  onPress: () => void;
}

const ButtonWithOutsideLabel: FC<ButtonWithOutsideLabelProps> = ({
  icon,
  label,
  onPress,
}) => (
  <View>
    <IconButton
      startIcon={icon}
      size="xlarge"
      containerStyle={styles.container}
      onPress={onPress}
    />
    <Typography variant="grey.600" size="body2" style={styles.label}>
      {label}
    </Typography>
  </View>
);

export default ButtonWithOutsideLabel;
