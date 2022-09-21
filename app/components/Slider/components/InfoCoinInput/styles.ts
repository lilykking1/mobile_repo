import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  coinInfo: {
    flexDirection: 'row',
    width: '20%',
  },
  coinName: {
    marginLeft: 10,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    paddingHorizontal: 24,
  },
  textInput: {
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal: 0,
    textAlign: 'right',
    width: '100%',
  },
  textInputCustomContainerStyle: {
    borderColor: palette.transparent,
    paddingHorizontal: 0,
    width: '80%',
  },
});

export default styles;
