import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Button, AssetsEmptyState } from '@app/components';
import { View } from 'react-native';
import styles from '../styles';

declare let module;

storiesOf('Cards.AssetsEmptyState', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const title = text('Message Title', 'Message Title');
    const firstButtonLabel = text('First Button title', 'Button title');
    const secondButtonLabel = text(
      'Second Button title',
      'Second Button title'
    );

    const singleButtonView = (
      <Button variant="primary" label={firstButtonLabel} />
    );

    const doubleButtonView = (
      <View style={styles.storyBookDoubleButtonView}>
        <Button variant="primary" label={firstButtonLabel} />
        <Button variant="primary" label={secondButtonLabel} />
      </View>
    );

    const isViewSignleButton = boolean('Single Button', true);

    const selectButtonView = isViewSignleButton
      ? singleButtonView
      : doubleButtonView;

    return <AssetsEmptyState title={title} actions={selectButtonView} />;
  });
