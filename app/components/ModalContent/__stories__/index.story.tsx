import React, { useState, useCallback } from 'react';

import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import Button from '@app/components/Buttons/Button';
import Typography from '@app/components/Typography';

import styles from './styles';
import ModalContainer from '../index';

const Example = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);
  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <>
      <Button label="Scroll content modal" onPress={openModal} />
      <ModalContainer onRequestClose={closeModal} visible={isModalVisible}>
        <Typography style={styles.title} strong size="h6">
          This is a sample modal
        </Typography>
        <Button onPress={closeModal} variant="primary" label="Close" />
      </ModalContainer>
    </>
  );
};

declare let module;
storiesOf('Modals.ModalContent', module)
  .addDecorator(withView)
  .add('Default', () => <Example />);
