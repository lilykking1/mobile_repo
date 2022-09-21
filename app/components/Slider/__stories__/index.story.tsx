import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import {
  boolean,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { animationType } from '@app/components/Slider/__stories__/fixtures';
import { Card } from '@app/components';
import { SliderType } from '@app/components/Slider/types';
import Slider from '..';
import { styles } from './styles';

declare let module;

type State<T> = [T, (value: T) => void];

storiesOf('Controls.Slider', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('default', () =>
    React.createElement(() => {
      const [currentValue, setCurrentValue] = useState(50) as State<number>;

      const disabled = boolean('Disabled', false);
      const sliderType = select('Slider type', SliderType, SliderType.INPUT);
      const maximumValue = number('Max value', 123.2);
      const minimumValue = number('Min value', 0.0);
      const step = number('Step', 0.0005);
      const decimalSize = number('Decimal size', 4);
      const coin = text('Coin', 'BTC');
      const value = currentValue;
      const onValueChange = setCurrentValue;
      const currentAnimationType = select(
        'Animation type',
        animationType,
        animationType.timing
      );

      return (
        <Card style={styles.container}>
          <Slider
            disabled={disabled}
            sliderType={sliderType}
            maximumValue={maximumValue}
            minimumValue={minimumValue}
            step={step}
            decimalSize={decimalSize}
            coin={coin}
            value={value}
            onValueChange={onValueChange}
            animationType={currentAnimationType}
          />
        </Card>
      );
    })
  );
