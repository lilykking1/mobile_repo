import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { Icon } from '@app/components';
import { palette } from '@app/theme';
import Typography from '@app/components/Typography';
import Background from '@app/components/Background';
import { getBorderColor } from '@app/components/CopyWalletAddress/utils';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import { CopyWalletAddressProp } from './types';
import styles from './styles';

const CopyWalletAddress: React.FC<CopyWalletAddressProp> = ({
  icon = <Icon.Copy tint={palette.royalBlue[500]} />,
  walletAddress,
  darkContainerAltColor = palette.royalBlue[950],
  lightContainerAltColor = palette.grey[300],
  darkBorderAltColor = palette.royalBlue[950],
  lightBorderAltColor = palette.grey[300],
  hintText,
  lightTypographyAltColor = 'secondary.900',
  darkTypographyAltColor = 'secondary.900',
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const handleCopyAddress = () => {
    Clipboard.setString(walletAddress);
  };

  const getBackgroundStyles = () => [
    styles.backgroundStyles,
    {
      borderColor: getBorderColor(
        theme,
        darkBorderAltColor,
        lightBorderAltColor
      ),
    },
  ];

  const getHintStyles = () => [
    styles.hintTypographyStyle,
    {
      color: getBorderColor(theme, darkBorderAltColor, lightBorderAltColor),
    },
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={handleCopyAddress}
      style={styles.buttonContainer}
    >
      {hintText && (
        <Background
          altLight={lightContainerAltColor}
          altDark={darkContainerAltColor}
          style={styles.containerHint}
        >
          <Typography style={getHintStyles()}>{hintText}</Typography>
        </Background>
      )}

      <Background
        style={getBackgroundStyles()}
        altDark={darkContainerAltColor}
        altLight={lightContainerAltColor}
      >
        <Typography
          style={styles.typographyStyle}
          numberOfLines={1}
          ellipsizeMode="middle"
          altLight={lightTypographyAltColor}
          altDark={darkTypographyAltColor}
        >
          {walletAddress}
        </Typography>
        {icon}
      </Background>
    </TouchableOpacity>
  );
};

export default observer(CopyWalletAddress);
