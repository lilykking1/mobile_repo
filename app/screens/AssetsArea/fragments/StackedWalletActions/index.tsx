import React, { FC } from 'react';

import { Icon } from '@app/components';
import { translate } from '@app/i18n';
import ActionButton from '@app/components/Buttons/ActionButton';
import styles from './styles';

const StackedWalletActions: FC = () => {
  const handleWithdraw = () => {};

  const handleDeposit = () => {};

  const handleSwap = () => {};

  return (
    <>
      <ActionButton
        label={translate('exchanges.actions.withdraw')}
        icon={<Icon.BoldArrowUp width={12} height={12} />}
        onPress={handleWithdraw}
        size="small"
        style={styles.marginRight}
        fullWidth
      />

      <ActionButton
        label={translate('exchanges.actions.deposit')}
        icon={<Icon.BoldArrowDown width={12} height={12} />}
        onPress={handleDeposit}
        size="small"
        style={styles.marginRight}
        fullWidth
      />

      <ActionButton
        label={translate('exchanges.actions.swap.title')}
        icon={<Icon.BoldSwapArrows width={18} height={18} />}
        onPress={handleSwap}
        size="small"
        fullWidth
      />
    </>
  );
};

export default StackedWalletActions;
