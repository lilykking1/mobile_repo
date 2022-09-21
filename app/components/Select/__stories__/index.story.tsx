/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { text, withKnobs } from '@storybook/addon-knobs';
import { noop } from 'lodash';
import { Select } from '@app/components';
import { styles } from './styles';

declare let module;

storiesOf('Inputs.Select', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const hintText = text('Hint', 'Theme');
    const value = text('Value', 'Light');
    return (
      <View style={styles.container}>
        <Select onPress={noop} title={hintText} value={value} />
      </View>
    );
  });
