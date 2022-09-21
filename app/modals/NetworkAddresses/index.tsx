import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useMemo,
} from 'react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';

import { translate } from '@app/i18n';
import { MultiSelect, CoinIcon, MultiSelectItem } from '@app/components';
import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';

import { OptionItem } from './types';
import Header from './fragments/Header';
import styles from './styles';

interface NetworkAddressesProps extends BottomSheetModalProps {
  selected: string;
  onSelect: (value: string) => void;
}

const NetworkAddressesModal: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  NetworkAddressesProps
> = ({ selected, onSelect }, ref) => {
  const networkOptions: OptionItem[] = useMemo(
    () => [
      {
        id: 'ethMainnet',
        label: translate('modals.selectNetwork.menuOptions.ethMainnet'),
        icon: <CoinIcon coin="ETH" size={20} />,
      },
      {
        id: 'btcNetwork',
        label: translate('modals.selectNetwork.menuOptions.btcNetwork'),
        icon: <CoinIcon coin="BTC" size={20} />,
      },
      {
        id: 'binanceSmartChain',
        label: translate('modals.selectNetwork.menuOptions.binanceSmartChain'),
        icon: <CoinIcon coin="BNB" size={20} />,
      },
    ],
    []
  );

  const handleChange = useCallback(
    (checked, networkOption) => {
      onSelect(checked ? networkOption.label : 'ethMainnet');
    },
    [onSelect]
  );

  const mapper = useCallback(
    (networkOption) => (
      <MultiSelectItem
        checked={selected === networkOption?.label}
        key={networkOption.id}
        label={networkOption.label}
        icon={networkOption.icon}
        onChange={() => handleChange(selected, networkOption)}
        iconPosition="left"
      />
    ),
    [selected, handleChange]
  );

  return (
    <BottomSheetModal
      contentStyle={styles.content}
      snapToContent
      ref={ref}
      headerComponent={<Header />}
    >
      <MultiSelect>{networkOptions.map(mapper)}</MultiSelect>
    </BottomSheetModal>
  );
};

export default forwardRef(NetworkAddressesModal);
