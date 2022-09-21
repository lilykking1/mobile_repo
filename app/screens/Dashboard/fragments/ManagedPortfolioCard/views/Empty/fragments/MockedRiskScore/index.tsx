import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography } from '@app/components';

import styles from './styles';

const MockedRiskScore: FC = () => (
  <View style={styles.container}>
    <Typography size="buttons" strong style={styles.title}>
      Risk
    </Typography>
    <Typography size="h3" strong style={styles.number}>
      75
    </Typography>
  </View>
);

export default MockedRiskScore;
