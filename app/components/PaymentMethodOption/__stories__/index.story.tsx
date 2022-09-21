import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { DebitOrBank } from '@app/assets/images';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { translate } from '@app/i18n';
import { Card } from '@app/components';

import PaymentMethodOption from '../index';
import styles from './styles';

declare let module;
storiesOf('List.PaymentMethodOption', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const isSelected = boolean('Is Selected', false);
    const isLastItem = boolean('Is Last Item', false);
    const isKeyboardOpen = boolean('Is Keyboard Open', false);
    const title = text(
      'Title',
      translate('screens.chooseInvestment.paymentMethod.debitOrBank.title')
    );
    const description = text(
      'Description',
      translate(
        'screens.chooseInvestment.paymentMethod.debitOrBank.description'
      )
    );

    return (
      <Card style={styles.container}>
        <PaymentMethodOption
          title={title}
          description={description}
          imageSource={DebitOrBank}
          selected={isSelected}
          isKeyboardOpen={isKeyboardOpen}
          isLastItem={isLastItem}
        />
      </Card>
    );
  });
