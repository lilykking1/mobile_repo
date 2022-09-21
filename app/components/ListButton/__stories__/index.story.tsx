/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import { Card, Icon } from '@app/components';

import ListButton from '../index';

const Example = ({ isLast, icon, title, action, disabled }) => {
  const [state, setState] = useState(isLast || false);

  useEffect(() => {
    setState(isLast);
  }, [isLast]);

  return (
    <ListButton
      disabled={disabled}
      isLast={state}
      Icon={icon}
      title={title}
      action={action}
    />
  );
};

declare let module;
storiesOf('Buttons.ListButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const isLast = boolean('Is Last', false);
    const isDisabled = boolean('Is Disabled', false);

    return (
      <Card style={{ width: '100%' }}>
        <Example
          isLast={isLast}
          icon={() => <Icon.Check tint={palette.grey[600]} />}
          title={translate('modals.dotsActions.done')}
          action={() => {}}
          disabled={isDisabled}
        />
      </Card>
    );
  });
