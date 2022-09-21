import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { withFlatList } from '@story/decorators';
import { withKnobs } from '@storybook/addon-knobs';
import { IndividualCoinsCard } from '@app/components';
import { assets } from '@app/components/IndividualCoinsCard/__stories__/fixtures';

import styles from './styles';

declare let module;

storiesOf('Cards.IndividualCoinsCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withFlatList)
  .add('Default', () => (
    <View style={styles.container}>
      <IndividualCoinsCard assets={assets} totalAmount={25000} />
    </View>
  ));
