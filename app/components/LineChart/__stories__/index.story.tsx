import React from 'react';
import { Dimensions, View, ViewStyle } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs';
import { Card } from '@app/components';
import CoinIcon from '@app/components/CoinIcon';
import { palette, PaletteColor } from '@app/theme';
import dayjs from 'dayjs';
import LineChart from '..';
import {
  generateDataArray,
  colorOptions,
  periodLabelOptions,
} from './fixtures';

declare let module;

interface Data {
  time: Date;
  value: number;
}

const { width } = Dimensions.get('window');

storiesOf('Graph.LineChart', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('default', () => {
    const strokeColor = select(
      'Stroke Color',
      Object.values(colorOptions as string[]),
      palette.royalBlue[500]
    );

    const gradientColorSelect = select(
      'Gradient Color',
      Object.values(colorOptions as string[]),
      palette.royalBlue[500]
    );
    const gradientColor = gradientColorSelect;

    const height = number('Height', 300, {
      min: 300,
      max: 600,
      range: true,
    });

    const padding = number('Padding', 20, {
      min: 5,
      max: 50,
      range: true,
    });

    const dataLength = number('Data Length', 28, {
      min: 1,
      max: 100,
      range: true,
    });

    const labelSpacing = number('Label Spacing', 5, {
      min: 1,
      max: 50,
      range: true,
    });

    const accrualValue = number('Accrual Value', 847, {
      min: -2000,
      max: 5000,
      range: true,
    });

    const accrualPercentage = number('Accrual Percentage', 6.31, {
      min: -1000,
      max: 1000,
      range: true,
    });
    const isSolidBackground = boolean('isSolidBackground', false);
    const periodLabel = select('Period Label', periodLabelOptions, '24H');

    const data: Data[] = generateDataArray(dataLength);

    const formatLabel = (label: Date): string => dayjs(label).format('MM/DD');

    const size = number('Size', 48, {
      min: 1,
      max: 100,
      range: true,
    });
    const coin = 'BTC';
    const isOutlined = boolean('Coin Icon Is Outlined', false);
    const showPeriodSelectButton = boolean('Show Period Select Button', true);
    const coinStyles = { margin: 'auto', marginBottom: 20 };
    const viewStyles: ViewStyle = {
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 30,
    };

    return (
      <Card>
        <LineChart
          accrualValue={accrualValue}
          accrualPercentage={accrualPercentage}
          chartHeight={height}
          data={data}
          gradientColor={gradientColor as PaletteColor}
          isSolidBackground={isSolidBackground}
          labelSpacing={labelSpacing}
          padding={padding}
          periodLabel={periodLabel}
          showPeriodSelectButton={showPeriodSelectButton}
          strokeColor={strokeColor as PaletteColor}
          xKey="time"
          xLabelTransform={formatLabel}
          yKey="value"
          width={width}
        >
          <View style={viewStyles}>
            <CoinIcon
              coin={coin}
              key={coin}
              size={size}
              isOutlined={isOutlined}
              style={coinStyles}
            />
          </View>
        </LineChart>
      </Card>
    );
  });
