import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Card, SliderThumb } from '@app/components';
import { styles } from './styles';

declare let module;

type State<T> = [T, (value: T) => void];

storiesOf('Controls.Slider Thumb', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('default', () =>
    React.createElement(() => {
      const [currentValue, _] = useState(50) as State<number>;

      const showCurrentNumber = boolean('Show current number', true);
      const isSnappedInValue = boolean('Snapped in', false);

      return (
        <Card style={styles.container}>
          <SliderThumb
            isSnappedInValue={isSnappedInValue}
            showCurrentNumber={showCurrentNumber}
            currentNumber={currentValue}
            customSteps={[1, 33, 66, 99]}
          />
        </Card>
      );
    })
  );
