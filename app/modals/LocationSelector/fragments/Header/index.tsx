import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography } from '@app/components';

import styles from './styles';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => (
  <View style={styles.container}>
    <Typography strong size="h6" style={styles.text}>
      {title}
    </Typography>
  </View>
);

export default Header;
