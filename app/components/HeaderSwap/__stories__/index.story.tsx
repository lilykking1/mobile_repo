import React from 'react';
import { Dimensions, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { withKnobs } from '@storybook/addon-knobs';
import { Typography, SlideShow, Background } from '@app/components';
import { NavigationContainer } from '@react-navigation/native';
import { useScrollHandler } from '@app/hooks';
import Header from '../index';
import styles from './styles';

declare let module;

const { width } = Dimensions.get('screen');

const slides = [
  {
    id: 'slide1',
    component: (
      <View style={styles.container}>
        <Typography>slide1</Typography>
      </View>
    ),
  },
  {
    id: 'slide2',
    component: (
      <View style={styles.container}>
        <Typography>slide2</Typography>
      </View>
    ),
  },
  {
    id: 'slide3',
    component: (
      <View style={styles.container}>
        <Typography>slide3</Typography>
      </View>
    ),
  },
  {
    id: 'slide4',
    component: (
      <View style={styles.container}>
        <Typography>slide4</Typography>
      </View>
    ),
  },
  {
    id: 'slide5',
    component: (
      <View style={styles.container}>
        <Typography>slide5</Typography>
      </View>
    ),
  },
];

const IndicatorDisplay = () => {
  const [current, onScroll] = useScrollHandler(width);
  return (
    <NavigationContainer>
      <Background>
        <Header title="Test" current={current} />
        <SlideShow
          slides={slides}
          hasAutoScroll={false}
          scrollIntervalInMs={3000}
          hasIndicators={false}
          containerHeight="90%"
          slideHeight="100%"
          useExternalScroll
          onExternalScroll={onScroll}
          currentExternalScroll={current}
        />
      </Background>
    </NavigationContainer>
  );
};

storiesOf('NavigationBar.IndicatorHeader', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => <IndicatorDisplay />);
