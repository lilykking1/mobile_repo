import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { number, select, text, withKnobs } from '@storybook/addon-knobs';

import { EXCHANGES, WALLETS } from '@app/models';
import CoinWithExchangeIcon from '../index';

declare let module;

storiesOf('Icons.CoinWithExchangeIcon', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const coin = text('coin', 'ETH');
    const exchange = select(
      'exchange',
      { ...EXCHANGES, ...WALLETS },
      WALLETS.StackedWallet
    );
    const size = number('size', 200);

    return (
      <View>
        <CoinWithExchangeIcon coin={coin} exchange={exchange} size={size} />
      </View>
    );
  });
