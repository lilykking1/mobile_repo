import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { View } from 'react-native';
import ExchangesCarousel from '../index';

import { items } from './fixtures';
import styles from './styles';

declare let module;

const Carousel = ({ isValuesSecret }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSetSelected = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ExchangesCarousel
      items={items}
      selectedIndex={selectedIndex}
      isValuesSecret={isValuesSecret}
      handleSetSelected={handleSetSelected}
    />
  );
};

storiesOf('List.ExchangesCarousel', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const isValuesSecret = boolean('Is Values Secret', false);

    return (
      <View style={styles.container}>
        <Carousel isValuesSecret={isValuesSecret} />
      </View>
    );
  });
