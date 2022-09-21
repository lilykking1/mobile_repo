import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs } from '@storybook/addon-knobs';

import Button from '@app/components/Buttons/Button/';
import { LoadingModalProvider, useLoadingModal } from '@app/hooks';

declare let module;

const Example = () => {
  const { close, open } = useLoadingModal();

  const handlePress = () => {
    open();
    setTimeout(() => close(), 2000);
  };

  return <Button onPress={handlePress} label="Launch Loading Modal" />;
};

storiesOf('Modals.LoadingModal', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => (
    <LoadingModalProvider>
      <Example />
    </LoadingModalProvider>
  ));
