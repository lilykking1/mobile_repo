import React, { useState } from 'react';
import { Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { boolean, number, select, withKnobs } from '@storybook/addon-knobs';
import { animationType } from '@app/components/Slider/__stories__/fixtures';
import { Card, RiskSlider } from '@app/components';
import { styles } from './styles';

declare let module;

type State<T> = [T, (value: T) => void];

storiesOf('Controls.RiskSlider', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('default', () =>
    React.createElement(() => {
      const [currentValue, setCurrentValue] = useState(50) as State<number>;

      const disabled = boolean('Disabled', false);
      const isSnapToEnabled = boolean('Snap To', false);
      const showCurrentNumber = boolean('Show current number', true);
      const defaultRisk = number('Default risk', 75);
      const maximumValue = number('Max value', 99);
      const minimumValue = number('Min value', 1);
      const step = number('Step', 1);
      const value = currentValue;
      const onValueChange = setCurrentValue;
      const currentAnimationType = select(
        'Animation type',
        animationType,
        animationType.timing
      );

      return (
        <Card style={styles.container}>
          <RiskSlider
            value={value}
            disabled={disabled}
            defaultRisk={defaultRisk}
            onValueChange={onValueChange}
            maximumValue={maximumValue}
            minimumValue={minimumValue}
            animationType={currentAnimationType}
            step={step}
            customSteps={[1, 33, 66, 99]}
            showCurrentNumber={showCurrentNumber}
            handleOpenReAssessmentModal={() =>
              Alert.alert('Reassessment modal opened')}
            setIsLowerRisk={() => {}}
            setInitialRiskValue={() => {}}
            isSnapToEnabled={isSnapToEnabled}
          />
        </Card>
      );
    })
  );
