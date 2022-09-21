import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';
import { CHEVRON_ICON_CONTAINER_PADDING } from '@app/screens/WalletAddress/constants';

const styles = StyleSheet.create({
  backgroundContainerCopyAddress: {
    flexDirection: 'row',
  },
  bottomContainer: {
    flex: 1,
    marginTop: 110,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 40,
  },
  containerIconChevronDown: {
    marginTop: CHEVRON_ICON_CONTAINER_PADDING,
  },
  iconButtonContainer: {
    borderRadius: 22,
    height: 44,
    marginBottom: 24,
    paddingHorizontal: 33,
    width: 220,
  },
  iconButtonLabelStyle: {
    paddingHorizontal: 12,
  },
  qrCodeBackground: {
    backgroundColor: palette.white,
    borderRadius: 12,
    padding: 10,
  },
  shareButton: {
    flex: 1,
    marginTop: 18,
    width: '100%',
  },
  subtitleStyle: {
    textAlign: 'center',
  },
  topContainer: {
    marginBottom: 70,
  },
});

export default styles;
