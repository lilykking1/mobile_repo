import React from 'react';
import { Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';

import CodeInput from '../index';

declare let module;

storiesOf('Inputs.Code', module)
  .addDecorator(withView)
  .add('Default', () => {
    const handleCodeFulfill = (code) => {
      Alert.alert('Code: ', code);
    };

    return <CodeInput cellCount={6} onSubmit={handleCodeFulfill} />;
  });
