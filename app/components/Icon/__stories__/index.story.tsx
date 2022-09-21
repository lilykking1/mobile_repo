import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, color, number } from '@storybook/addon-knobs';

import { palette } from '@app/theme';

import * as Icon from '../index';
import { getBackgroundStyle, getLabelStyle } from './utils';
import styles from './styles';

declare let module;

storiesOf('Icons.Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const tint = color('Tint', palette.greyAmethyst);
    const size = number('Size', 24, {
      min: 10,
      max: 60,
      range: true,
    });

    const background = getBackgroundStyle(tint);
    const label = getLabelStyle(tint);

    return (
      <View style={styles.container}>
        {Object.keys(Icon).map((name: string) => {
          const Component = Icon[name];
          return (
            <View key={name} style={[styles.icon, background]}>
              <Component tint={tint} width={size} height={size} />
              <Text style={[styles.label, label]}>{name}</Text>
            </View>
          );
        })}
      </View>
    );
  });
