import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { withFlatList } from '@story/decorators';
import { withKnobs } from '@storybook/addon-knobs';
import { TransactionsCard } from '@app/components';
import { transactions } from '@app/components/TransactionsCard/__stories__/fixtures';

import styles from './styles';

declare let module;

storiesOf('Cards.TransactionsCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withFlatList)
  .add('Default', () => (
    <View style={styles.container}>
      <TransactionsCard data={transactions} year={transactions.year} />
    </View>
  ));
