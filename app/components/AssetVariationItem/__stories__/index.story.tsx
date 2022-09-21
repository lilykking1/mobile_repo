import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { Card } from '@app/components';
import { COINS } from '@app/models';

import styles from './styles';
import AssetVariationItem from '..';

declare let module;

storiesOf('List.AssetVariationItem', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const coin = select<COINS>('Coin', COINS, COINS.BTC);
    const currentValue = number('Current Value', 4384.19);
    const currentPercentage = number('Current Percentage', 15);
    const endValue = number('End Value', 14384.19);
    const endPercentage = number('End Percentage', 99);

    return (
      <Card size="xlarge" style={styles.container}>
        <AssetVariationItem
          coin={coin}
          currentPercentage={currentPercentage}
          currentValue={currentValue}
          endPercentage={endPercentage}
          endValue={endValue}
        />
      </Card>
    );
  });
