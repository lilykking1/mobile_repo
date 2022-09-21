import React, { FC } from 'react';

import { translate } from '@app/i18n';
import ActionButton from '@app/components/Buttons/ActionButton';
import { Icon } from '@app/components';

const ExoticExchangeActions: FC = () => {
  const disabledMessage = translate('exchanges.actions.swap.notSupported');

  return (
    <ActionButton
      disabled
      disabledMessage={disabledMessage}
      label={translate('exchanges.actions.swap.title')}
      icon={<Icon.BoldSwapArrows width={18} height={18} />}
      size="small"
      fullWidth
    />
  );
};

export default ExoticExchangeActions;
