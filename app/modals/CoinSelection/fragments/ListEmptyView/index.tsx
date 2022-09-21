import React, { FC } from 'react';
import { View } from 'react-native';
import { Typography } from '@app/components';
import styles from './styles';

const ListEmptyView: FC = () => (
  <View style={styles.container}>
    <Typography style={styles.text}>No coins available</Typography>
  </View>
);

export default ListEmptyView;
