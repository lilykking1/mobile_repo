import React, { FC } from 'react';
import { Coins, Header, ExchangesList } from '@app/screens/Exchanges/fragments';
import { SafeArea } from '@app/components';

import styles from './styles';

interface EmptyProps {
  exchanges: string[];
}

const Empty: FC<EmptyProps> = ({ exchanges }) => (
  <SafeArea edges={['top']} style={styles.container}>
    <Coins />
    <Header />
    <ExchangesList exchanges={exchanges} />
  </SafeArea>
);

export default Empty;
