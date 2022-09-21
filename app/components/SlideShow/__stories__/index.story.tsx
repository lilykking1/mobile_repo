import React from 'react';

import { Dimensions, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import Card from '@app/components/Card';
import Typography from '@app/components/Typography';
import Background from '@app/components/Background';
import { IndicatorsType } from '@app/components/Indicators/components/Indicator/types';
import SlideShow from '../index';
import styles from './styles';

declare let module;

const { height } = Dimensions.get('screen');

const slides = [
  {
    id: 'slide1',
    component: (
      <View style={styles.container}>
        <Card size="xlarge">
          <Typography>slide1</Typography>
        </Card>
      </View>
    ),
  },
  {
    id: 'slide2',
    component: (
      <View style={styles.container}>
        <Card size="xlarge">
          <Typography>slide2</Typography>
        </Card>
      </View>
    ),
  },
  {
    id: 'slide3',
    component: (
      <View style={styles.container}>
        <Card size="xlarge">
          <Typography>slide3</Typography>
        </Card>
      </View>
    ),
  },
  {
    id: 'slide4',
    component: (
      <View style={styles.container}>
        <Card size="xlarge">
          <Typography>slide4</Typography>
        </Card>
      </View>
    ),
  },
  {
    id: 'slide5',
    component: (
      <View style={styles.container}>
        <Card size="xlarge">
          <Typography>slide5</Typography>
        </Card>
      </View>
    ),
  },
];

storiesOf('Sliders.SlideShow', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('SlideShow with AutoScroll', () => {
    const autoScroll = boolean('Auto Scroll', true);
    const scrollEnabled = boolean('Scroll Enabled', true);
    const hasIndicators = boolean('Display Indicators', true);
    const indicatorsType = select(
      'Indicators Type',
      IndicatorsType,
      IndicatorsType.PAINT_CURRENT_STEP
    );
    return (
      <Background>
        <SlideShow
          slides={slides}
          hasAutoScroll={autoScroll}
          scrollIntervalInMs={3000}
          scrollEnabled={scrollEnabled}
          hasIndicators={hasIndicators}
          containerHeight={height / 2}
          indicatorsType={indicatorsType}
        />
      </Background>
    );
  });
