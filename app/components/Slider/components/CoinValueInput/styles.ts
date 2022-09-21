import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  coinIcon: {
    marginTop: 6,
  },
  containerPercentValue: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    height: 17,
    justifyContent: 'center',
  },
  padlock: {
    marginLeft: 20,
    marginTop: 2,
  },
  textInput: {
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 0,
  },
  textInputCustomContainerStyle: {
    backgroundColor: palette.transparent,
    borderColor: palette.transparent,
    paddingHorizontal: 0,
  },
});
