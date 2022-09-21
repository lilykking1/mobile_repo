import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';

import CoinIcon from '../index';
import styles from './styles';

declare let module;

storiesOf('Icons.CoinIcon', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const size = number('Size', 24, {
      min: 1,
      max: 100,
      range: true,
    });
    const coinList = ['AAVE', 'BTC', 'ETH', 'SOL', 'XRP', 'USDC', 'sldfj'];
    const isOutlined = boolean('isOutlined', false);
    const coinStyles = { margin: size * 0.2 };

    return (
      <View style={styles.container}>
        {coinList.map((coin) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <CoinIcon
            coin={coin}
            key={coin}
            size={size}
            isOutlined={isOutlined}
            style={coinStyles}
          />
        ))}
      </View>
    );
  });
