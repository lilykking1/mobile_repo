import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import { observer } from 'mobx-react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';

import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';
import { Divider } from '@app/components';
import { translate } from '@app/i18n';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Routes } from '@app/navigation/types';
import { RootContext } from '@app/state';
import { Asset } from '@app/models';
import styles from './styles';
import { ActionItem } from './fragments';
import { ActionDetails, ManageCoinActionType } from './types';

interface ManageCoinsProps extends BottomSheetModalProps {
  actions?: ManageCoinActionType[];
  selectedCoin: Asset;
  onModalClose: () => void;
}

const ManageCoins: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  ManageCoinsProps
> = (
  {
    actions = [ManageCoinActionType.SWAP, ManageCoinActionType.WITHDRAW],
    selectedCoin,
    onModalClose,
  },
  ref
) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const handleSwap = useCallback(() => {
    onModalClose();
    navigation.navigate('StackedWallet', {
      screen: 'SimpleSwap',
      params: { selectedCoin },
    });
  }, [navigation, onModalClose, selectedCoin]);

  const handleWithdraw = useCallback(() => {
    onModalClose();
    navigation.navigate('StackedWallet', {
      screen: 'Withdraw',
      params: { selectedCoin },
    });
  }, [navigation, onModalClose, selectedCoin]);

  const actionDetails: { [key: string]: ActionDetails } = useMemo(
    () => ({
      [ManageCoinActionType.SWAP]: {
        onPress: handleSwap,
        label: translate('modals.manageCoins.actionLabels.swap'),
      },
      [ManageCoinActionType.WITHDRAW]: {
        onPress: handleWithdraw,
        label: translate('modals.manageCoins.actionLabels.withdraw'),
      },
    }),
    [handleSwap, handleWithdraw]
  );

  const keyExtractor = (action: ManageCoinActionType, index: number): string =>
    `${index}-${action}`;

  const mapAvailableActions = useCallback(
    () =>
      actions.map((action: ManageCoinActionType, index: number) => {
        const isLastItem = index === actions.length - 1;

        return (
          <React.Fragment key={keyExtractor(action, index)}>
            <ActionItem
              action={action}
              label={actionDetails[action].label}
              onPress={actionDetails[action].onPress}
              theme={theme}
            />
            {!isLastItem && <Divider />}
          </React.Fragment>
        );
      }),
    [actionDetails, actions, theme]
  );

  return (
    <BottomSheetModal contentStyle={styles.container} snapToContent ref={ref}>
      {mapAvailableActions()}
    </BottomSheetModal>
  );
};

export default observer(forwardRef(ManageCoins));
