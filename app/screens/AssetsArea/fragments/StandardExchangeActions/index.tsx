import React, { FC } from 'react';

import { translate } from '@app/i18n';
import ActionButton from '@app/components/Buttons/ActionButton';
import { Icon } from '@app/components';

import styles from './styles';

interface StandardExchangeActionsProps {
  isLinkedToWebProduct: boolean;
}

const StandardExchangeActions: FC<StandardExchangeActionsProps> = ({
  isLinkedToWebProduct,
}) => {
  const handleSwap = () => {};

  const disabledMessage =
    isLinkedToWebProduct && translate('exchanges.actions.swap.disabled');

  return (
    <ActionButton
      disabled={isLinkedToWebProduct}
      disabledMessage={disabledMessage}
      label={translate('exchanges.actions.swap.title')}
      icon={<Icon.BoldSwapArrows width={18} height={18} />}
      onPress={handleSwap}
      size="small"
      style={styles.fullWidth}
    />
  );
};

export default StandardExchangeActions;
