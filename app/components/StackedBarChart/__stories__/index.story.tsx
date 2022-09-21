import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, number, color } from '@storybook/addon-knobs';
import { palette } from '@app/theme';
import { StackedBarChart } from '../components';
import { StackedBarChartData } from '../types';

declare let module;

storiesOf('Graph.StackedBarChart', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const min = 0;
    const max = 100;
    const range = true;
    const itemConfig = { min, max, range };

    const item1Percent = number('Item 1', 50, itemConfig);
    const item1Color = color(' ', palette.royalBlue[500]);
    const item1: StackedBarChartData = {
      percentage: item1Percent,
      color: item1Color,
    };

    const item2Percent = number('Item 2', 25, itemConfig);
    const item2Color = color('  ', palette.green[500]);
    const item2: StackedBarChartData = {
      percentage: item2Percent,
      color: item2Color,
    };

    const item3Percent = number('Item 3', 15, itemConfig);
    const item3Color = color('   ', palette.red[500]);
    const item3: StackedBarChartData = {
      percentage: item3Percent,
      color: item3Color,
    };

    const item4Percent = number('Item 4', 7, itemConfig);
    const item4Color = color('    ', palette.royalBlue[800]);
    const item4: StackedBarChartData = {
      percentage: item4Percent,
      color: item4Color,
    };

    const item5Percent = number('Item 5', 3, itemConfig);
    const item5Color = color('     ', palette.yellow[500]);
    const item5: StackedBarChartData = {
      percentage: item5Percent,
      color: item5Color,
    };

    const data: StackedBarChartData[] = [item1, item2, item3, item4, item5];

    return <StackedBarChart data={data} />;
  });
