import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';
import { BOX_BACKGROUND_COLOR } from './contants';

const styles = StyleSheet.create({
  boxTitle: {
    marginBottom: 9,
  },
  boxes: {
    marginVertical: 24,
  },
  coinBox: {
    alignItems: 'center',
    backgroundColor: BOX_BACKGROUND_COLOR,
    borderRadius: 20,
    flexDirection: 'row',
    height: 117,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 17,
  },
  container: {
    marginTop: 21,
    paddingHorizontal: 24,
  },
  copyButton: {
    borderRadius: 8,
  },
  fiatAmount: {
    opacity: 0.4,
  },
  walletAddress: {
    marginTop: 5,
  },
  walletAddressBox: {
    backgroundColor: palette.grey[400],
    borderRadius: 30,
    height: 157,
    paddingHorizontal: 32,
    paddingTop: 83,
    paddingVertical: 17,
    position: 'absolute',
    top: 51,
    width: '100%',
    zIndex: -1,
  },
});

export default styles;
