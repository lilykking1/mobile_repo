import React, { FC } from 'react';

import { Background } from '@app/components';
import { getContent, getLabel } from './utils';
import styles from './styles';

interface WalletAddressBoxProps {
  address: string;
  handleGenerateWalletAddress?: () => void;
}

const WalletAddressBox: FC<WalletAddressBoxProps> = ({
  address,
  handleGenerateWalletAddress,
}) => {
  const label = getLabel(!!address);

  const Content = getContent(label, address, handleGenerateWalletAddress);

  return (
    <Background secondary style={styles.container}>
      {Content}
    </Background>
  );
};

export default WalletAddressBox;
