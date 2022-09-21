import React from 'react';
import { Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

import { palette } from '@app/theme';
import Chart from '..';
import { curveShapes } from './fixtures';

declare let module;

interface Data {
  time: number;
  value: number;
}

const { width } = Dimensions.get('window');
const height = 350;
const padding = 30;

storiesOf('LineChart', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('default', () => {
    const xGrid = boolean('X Grid', false);
    const xLabels = boolean('X Axis Labels', false);
    const strokeWidth = select('Stroke Width', [...Array(10).keys()], 1);
    const strokeColor = select(
      'Stroke Color',
      Object.values(palette),
      palette.purplePersian
    );
    const gradient = boolean('Has Gradient', false);
    const gradientColorSelect = select(
      'Gradient Color',
      Object.values(palette),
      palette.purplePersian
    );
    const gradientColor = gradient && gradientColorSelect;

    const dataLength = number('Data Length', 20, {
      min: 1,
      max: 100,
      range: true,
    });

    const xGridInterval = number('X Axis Grid Interval', 3, {
      min: 1,
      max: 20,
      range: true,
    });

    const labelSpacing = number('Label Spacing', 5, {
      min: 1,
      max: 50,
      range: true,
    });

    const curveShape = select('Curve Shape', curveShapes, curveShapes.linear);

    const firstLabel = boolean('First Label', false);
    const lastLabel = boolean('Last Label', false);
    const noMiddleLabels = boolean('No Middle Labels', false);

    const data: Data[] = Array(dataLength)
      .fill(1)
      .map((_, i) => ({
        time: i,
        value: Math.random(),
      }));

    return (
      <Chart.Container width={width} height={height}>
        <Chart.Line
          width={width}
          height={height}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          xLabelTransform={(label: string) => `${label}:00`}
          data={data}
          xLabels={xLabels}
          xGrid={xGrid}
          xGridInterval={xGridInterval}
          xKey="time"
          yKey="value"
          firstLabel={firstLabel && 'June 2nd'}
          lastLabel={lastLabel && 'Today'}
          noMiddleLabels={noMiddleLabels}
          curveShape={curveShape}
          padding={padding}
          labelSpacing={labelSpacing}
          gradient={gradientColor}
        />
      </Chart.Container>
    );
  });
