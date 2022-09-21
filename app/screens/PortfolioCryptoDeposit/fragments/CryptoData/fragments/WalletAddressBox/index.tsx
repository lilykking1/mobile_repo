import React, { FC } from 'react';

import { Background } from '@app/components';
import { palette } from '@app/theme';

import { getContent, getLabel } from './utils';
import styles from './styles';

interface WalletAddressBoxProps {
  address: string;
  isFunding: boolean;
  handleGenerateWalletAddress: () => void;
  handlePressCopyButton: () => void;
}

const WalletAddressBox: FC<WalletAddressBoxProps> = ({
  address,
  isFunding,
  handleGenerateWalletAddress,
  handlePressCopyButton,
}) => {
  const label = getLabel(!!address);

  // TODO: add the actual action when we have it defined
  const handlePressQrButton = () => {};

  const Content = getContent({
    label,
    address,
    handleGenerateWalletAddress,
    handlePressCopyButton,
    handlePressQrButton,
    isFunding,
  });

  return (
    <Background
      altLight={palette.grey[400]}
      altDark={palette.royalBlue[950]}
      style={styles.container}
    >
      {Content}
    </Background>
  );
};

export default WalletAddressBox;
