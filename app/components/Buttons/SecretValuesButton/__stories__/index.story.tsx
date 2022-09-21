import React from 'react';
import { Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs } from '@storybook/addon-knobs';
import { Card, SecretValuesButton } from '@app/components';

declare let module;

storiesOf('Buttons.SecretValuesButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const onPress = () => {
      Alert.alert('Button pressed!');
    };

    return (
      <Card>
        <SecretValuesButton onPress={onPress} />
      </Card>
    );
  });
