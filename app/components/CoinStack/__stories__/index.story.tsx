import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import Background from '@app/components/Background';
import * as CoinStack from '../index';
import { DEFAULT_COIN_SIZE } from '../constants';

declare let module;

storiesOf('Molecules.CoinStack', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const size = number('Size', DEFAULT_COIN_SIZE, {
      min: 1,
      max: 100,
      range: true,
    });
    const max = number('Max', 5, {
      min: 1,
      max: 20,
      range: true,
    });
    const emptyCoins = boolean('Empty Coins', false);
    const coinList = ['btc', 'fil', 'eth', 'sol', 'usdt', 'xrp', 'uni', 'atom'];

    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <Background secondary style={{ padding: 100 }}>
        {emptyCoins ? (
          <CoinStack.Empty size={size} />
        ) : (
          <CoinStack.Filled coins={coinList} size={size} max={max} />
        )}
      </Background>
    );
  });
