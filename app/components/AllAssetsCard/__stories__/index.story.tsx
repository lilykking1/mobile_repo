import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Card from '@app/components/Card';
import AllAssetsCard from '../index';

declare let module;

storiesOf('Cards.AllAssetsCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const amount = text('Amount Label', '1354212');
    const emptyCoins = boolean('Empty Coins', false);
    const coinsList = [
      'atom',
      'btc',
      'eth',
      'fil',
      'sol',
      'uni',
      'usdt',
      'xrp',
    ];

    const assets = emptyCoins ? [] : coinsList;

    return (
      <Card>
        <AllAssetsCard amount={amount} assets={assets} />
      </Card>
    );
  });
