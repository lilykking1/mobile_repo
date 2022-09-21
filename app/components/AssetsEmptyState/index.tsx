import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { Typography } from '@app/components';
import Coins from './components/Coins';

import styles from './styles';

interface AssetsEmptyProps extends ViewProps {
  title: string;
  actions: React.ReactElement;
}

const AssetsEmptyState: FC<AssetsEmptyProps> = ({ title, actions }) => (
  <>
    <View style={styles.cardContainer}>
      <Typography size="h4" style={styles.label} strong>
        {title}
      </Typography>
      {actions}
    </View>
    <Coins />
  </>
);

export default AssetsEmptyState;
