import React, { FC, useContext } from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { CoinIcon, Icon } from '@app/components';
import Typography from '@app/components/Typography';
import styles from './styles';
import { getButtonStyle } from './utils';

interface CryptoButtonProps extends PressableProps {
  coin: string;
}

const CryptoButton: FC<CryptoButtonProps> = ({ coin, ...rest }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const cryptoButtonStyle = getButtonStyle(theme);

  return (
    <Pressable style={cryptoButtonStyle.container} {...rest}>
      <View style={styles.cryptoButtonContainer}>
        <CoinIcon coin={coin} />
        <Typography style={styles.coinLabel}>{coin}</Typography>
        <Icon.ChevronDown tint={cryptoButtonStyle.iconTint} />
      </View>
    </Pressable>
  );
};

export default observer(CryptoButton);
