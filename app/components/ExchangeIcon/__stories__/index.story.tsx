import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, color, boolean, number } from '@storybook/addon-knobs';
import { withView } from '@story/decorators';

import { EXCHANGES, EXCHANGE_TITLES } from '@app/models';
import { palette } from '@app/theme';

import ExchangeIcon from '../index';
import styles from './styles';
import { getBackgroundStyle, getLabelStyle } from './utils';

declare let module;

storiesOf('Icons.ExchangeIcon', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const tint = color('Tint', palette.greySmoke);
    const monochromatic = boolean('Monochromatic', false);
    const size = number('Size', 24, {
      min: 10,
      max: 60,
      range: true,
    });

    const background = getBackgroundStyle(tint);
    const label = getLabelStyle(tint);

    const list = Object.keys(EXCHANGES);
    list.push('unlisted');

    return (
      <View style={styles.container}>
        {list.map((key: string) => {
          const exchange = EXCHANGES[key];

          return (
            <View key={key} style={[styles.icon, background]}>
              <ExchangeIcon
                exchange={exchange}
                width={size}
                height={size}
                tint={monochromatic && tint}
              />
              <Text style={[styles.label, label]}>
                {EXCHANGE_TITLES[exchange] || 'Not listed'}
              </Text>
            </View>
          );
        })}
      </View>
    );
  });
