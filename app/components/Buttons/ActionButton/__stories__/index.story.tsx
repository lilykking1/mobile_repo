import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import { Icon } from '@app/components';

import Button from '../index';
import { sizes } from './fixtures';
import styles from './styles';

declare let module;

storiesOf('Buttons.ActionButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const label = text('Label', 'My Button', 'Default');
    const size = select('Size', sizes, sizes.small, 'Default');
    const fullWidth = boolean('Full Width', false, 'Default');
    const icon = <Icon.Exchange />;

    const disabled = boolean('Disabled', false, 'Disabled');
    const disabledMessage = text(
      'Disabled Message',
      'You are not allowed to do this action',
      'Disabled'
    );

    return (
      <View style={styles.container}>
        <Button
          disabled={disabled}
          disabledMessage={disabledMessage}
          label={label}
          icon={icon}
          size={size}
          fullWidth={fullWidth}
        />
      </View>
    );
  });
