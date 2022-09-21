import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { Card, AssetsItem } from '@app/components';

import List from '../index';

import { items } from './fixtures';

import styles from './styles';

declare let module;

storiesOf('List.List', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const isValuesSecret = boolean('Is Values Secret', false);

    const renderItem = ({ item }) => (
      <AssetsItem
        coin={item.symbol}
        fiatAmount={item.amountInDollar}
        coinAmount={item.amountInCrypto}
        isSecret={isValuesSecret}
      />
    );

    return (
      <Card size="xlarge" style={styles.cardContainer}>
        <List items={items} renderItem={renderItem} />
      </Card>
    );
  });
