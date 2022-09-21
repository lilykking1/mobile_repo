import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';
import { VariationStyle } from '@app/modals/WithdrawSuccess/types';

const styles = StyleSheet.create({
  buttonDeposit: {
    height: 48,
    marginBottom: 24,
    width: '100%',
  },
  container: {
    height: '100%',
  },
  containerButton: {
    flexGrow: 2.7,
    flex: 2.7,
    marginHorizontal: 24,
    justifyContent: 'flex-end',
  },
  containerCopyWalletAddress: {
    width: '80%',
  },
  containerDescription: {
    flexGrow: 1.1,
    flex: 1.1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    flexDirection: 'column',
    width: '100%',
  },
  containerIconButton: {
    alignContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  containerImage: {
    alignSelf: 'center',
    flexGrow: 2.8,
    flex: 2.8,
    justifyContent: 'flex-end',
  },
  containerTextInput: {
    flexGrow: 1.6,
    flex: 1.6,
    marginHorizontal: 24,
  },
  containerTitle: {
    alignItems: 'center',
    alignSelf: 'center',
    flexGrow: 1,
    flex: 1,
    justifyContent: 'center',
  },
  containerTransaction: {
    flexGrow: 1.7,
    flex: 1.7,
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
  description: {
    textAlign: 'center',
  },

  inputCustomContainerStyle: {
    borderWidth: 0,
  },
});

export const inputStyle = StyleSheet.create<VariationStyle>({
  dark: {
    backgroundColor: palette.royalBlue[900],
  },
  light: {
    backgroundColor: palette.grey[300],
  },
});

export default styles;
