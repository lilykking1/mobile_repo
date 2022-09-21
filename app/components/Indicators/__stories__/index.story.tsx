import React from 'react';
import { Dimensions, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { Background, Card, SlideShow, Typography } from '@app/components';
import { useScrollHandler } from '@app/hooks';
import {
  IndicatorsType,
  IndicatorVariant,
} from '@app/components/Indicators/components/Indicator/types';
import Indicators from '../index';
import styles from './styles';

declare let module;

const { width } = Dimensions.get('screen');

const slides = [
  {
    id: 'slide1',
    component: (
      <Card variant="green" style={styles.container}>
        <Typography>slide1</Typography>
      </Card>
    ),
  },
  {
    id: 'slide2',
    component: (
      <Card style={styles.container}>
        <Typography>slide2</Typography>
      </Card>
    ),
  },
  {
    id: 'slide3',
    component: (
      <Card variant="green" style={styles.container}>
        <Typography>slide3</Typography>
      </Card>
    ),
  },
  {
    id: 'slide4',
    component: (
      <Card style={styles.container}>
        <Typography>slide4</Typography>
      </Card>
    ),
  },
  {
    id: 'slide5',
    component: (
      <Card variant="green" style={styles.container}>
        <Typography>slide5</Typography>
      </Card>
    ),
  },
];

const IndicatorDisplay = ({ autoScroll, scrollEnabled, type, variant }) => {
  const [current, onScroll] = useScrollHandler(width);
  return (
    <Background>
      <View style={styles.indicators}>
        <Indicators
          variant={variant}
          type={type}
          total={slides.length}
          current={current}
        />
      </View>
      <SlideShow
        slides={slides}
        hasAutoScroll={autoScroll}
        scrollIntervalInMs={3000}
        scrollEnabled={scrollEnabled}
        hasIndicators={false}
        containerHeight="90%"
        slideHeight="90%"
        useExternalScroll
        onExternalScroll={onScroll}
        currentExternalScroll={current}
      />
    </Background>
  );
};

storiesOf('Controls.Indicators', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const autoScroll = boolean('Auto Scroll', true);
    const scrollEnabled = boolean('Scroll Enabled', true);
    const variant = select(
      'Variant',
      IndicatorVariant,
      IndicatorVariant.REGULAR
    );
    const type = select(
      'Type',
      IndicatorsType,
      IndicatorsType.PAINT_CURRENT_STEP
    );

    return (
      <IndicatorDisplay
        type={type}
        variant={variant}
        autoScroll={autoScroll}
        scrollEnabled={scrollEnabled}
      />
    );
  });
