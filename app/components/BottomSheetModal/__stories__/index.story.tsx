import React, { useRef, useCallback } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import {
  BottomSheetModal as GorhomBottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import BottomSheetModal from '@app/components/BottomSheetModal';
import { Button, Typography } from '@app/components';

import { renderExchangeList, exchangeList } from './modalContent';
import styles from './styles';

declare let module;

const BottomSheetModalEx = ({
  isActionMandatory,
}: {
  isActionMandatory: boolean;
}) => {
  // ref to open/close modal,
  const bottomSheetRef = useRef<GorhomBottomSheetModal>(null);
  const bottomSheetRefScroll = useRef<GorhomBottomSheetModal>(null);

  // mock list data
  const renderExchanges = useCallback(renderExchangeList, []);

  // open modal
  const onPresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const onPresentModalPressScroll = useCallback(() => {
    bottomSheetRefScroll.current?.present();
  }, []);

  return (
    <>
      <Button label="No scroll content modal" onPress={onPresentModalPress} />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ marginBottom: 20 }} />
      <Button
        label="Scroll content modal"
        onPress={onPresentModalPressScroll}
      />

      {/* fix to content height Modal */}
      <BottomSheetModal
        snapToContent
        isActionMandatory={isActionMandatory}
        key="bottom-sheet-modal-content-height-example"
        ref={bottomSheetRef}
        contentStyle={styles.modal}
        headerComponent={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Typography size="h5" style={styles.header}>
            Exchanges
          </Typography>
        }
      >
        {exchangeList.slice(0, 3).map(renderExchanges)}
      </BottomSheetModal>
      {/* scroll content Modal */}
      <BottomSheetModal
        key="bottom-sheet-modal-scroll-example"
        isActionMandatory={isActionMandatory}
        ref={bottomSheetRefScroll}
        contentStyle={styles.modal}
        headerComponent={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Typography size="h5" style={styles.header}>
            Exchanges
          </Typography>
        }
      >
        {exchangeList.map(renderExchanges)}
      </BottomSheetModal>
    </>
  );
};

storiesOf('Backdrop.BottomSheetModal', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const isActionMandatory = boolean('Is Action Mandatory', false);

    return (
      <BottomSheetModalProvider>
        <BottomSheetModalEx isActionMandatory={isActionMandatory} />
      </BottomSheetModalProvider>
    );
  });
