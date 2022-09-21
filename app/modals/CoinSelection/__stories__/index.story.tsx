import React, { useRef, useState, FC } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Modal } from '@app/modals';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { Button, Typography } from '@app/components';
import { Asset } from '@app/models';
import { useWallet } from '@app/hooks';

declare let module;

interface CoinSelectionModalProps {
  title?: string;
  searchPlaceholder?: string;
}

const CoinSelectionModal: FC<CoinSelectionModalProps> = ({
  title,
  searchPlaceholder,
}) => {
  const {
    wallet: { tokens },
  } = useWallet();
  const [selectedCoin, setSelectedCoin] = useState<Asset>(null);
  const periodBottomSheetFilterRef = useRef<BottomSheetModal>(null);

  const handleOpenModal = () => periodBottomSheetFilterRef.current?.present();
  const handleCloseModal = () => periodBottomSheetFilterRef.current?.close();

  const handleSelectCoin = (chosenCoin) => {
    setSelectedCoin(chosenCoin);
    handleCloseModal();
  };

  return (
    <>
      <Button onPress={handleOpenModal} label="Open modal" />
      <Typography strong variant="green.500">
        {selectedCoin.symbol}
      </Typography>
      <Typography strong variant="green.500">
        {selectedCoin.coinAmount}
      </Typography>
      <Typography strong variant="green.500">
        {selectedCoin.fiatAmount}
      </Typography>
      <Modal.CoinSelection
        coinBalances={tokens}
        ref={periodBottomSheetFilterRef}
        handleSelectCoin={handleSelectCoin}
        title={title}
        searchPlaceholder={searchPlaceholder}
      />
    </>
  );
};

storiesOf('Modals.CoinSelection', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const title = text('Modal Title', 'Select Coin');
    const searchPlaceholder = text('Search Placeholder', 'Find coin');

    return (
      <BottomSheetModalProvider>
        <CoinSelectionModal
          title={title}
          searchPlaceholder={searchPlaceholder}
        />
      </BottomSheetModalProvider>
    );
  });
