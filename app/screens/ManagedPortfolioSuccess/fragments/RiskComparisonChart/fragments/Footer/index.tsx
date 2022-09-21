import React, { FC } from 'react';
import { View } from 'react-native';
import { Typography } from '@app/components';

import styles from './styles';

interface FooterProps {
  leftText: string;
  rightText: string;
}

const Footer: FC<FooterProps> = ({ leftText, rightText }) => (
  <View style={styles.footer}>
    <Typography variant="grey.600" strong>
      {leftText}
    </Typography>
    <Typography variant="grey.600" strong>
      {rightText}
    </Typography>
  </View>
);

export default Footer;
