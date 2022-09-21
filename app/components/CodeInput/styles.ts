import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cell: {
    alignItems: 'center',
    borderBottomColor: palette.royalBlue[500],
    borderBottomWidth: 1,
    height: 60,
    justifyContent: 'center',
    lineHeight: 60,
    textAlign: 'center',
    width: 34,
  },
  codeFieldRoot: {
    justifyContent: 'space-between',
    width: '100%',
  },
  focusCell: {
    borderBottomColor: palette.royalBlue[500],
    borderBottomWidth: 1,
  },
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default styles;
