import React, { FC, useContext, useState } from 'react';
import { observer } from 'mobx-react';

import { IconButton } from '@app/components';
import { RootContext } from '@app/state';

import { getIcon, getIconTint } from './utils';
import styles from './styles';
import { CHANGE_ICON_INTERVAL } from '../CoinDataBox/constants';

interface CopyButtonProps {
  altDark?: string;
  onCopy: () => void;
}

const CopyButton: FC<CopyButtonProps> = ({ altDark, onCopy }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const [isCopied, setIsCopied] = useState(false);

  const onPressCopyButton = () => {
    onCopy();
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), CHANGE_ICON_INTERVAL);
  };

  const tint = getIconTint(theme, !!altDark);
  const icon = getIcon(isCopied, tint);

  return (
    <IconButton
      onPress={onPressCopyButton}
      containerStyle={styles.container}
      startIcon={icon}
      altDark={altDark}
    />
  );
};

export default observer(CopyButton);
