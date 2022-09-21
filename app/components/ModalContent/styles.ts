import { StyleSheet } from 'react-native';
import Color from 'color';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  blur: {
    backgroundColor: Color(palette.primary).alpha(0.1).toString(),
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  blurFit: {
    flex: 1,
  },
  contentStyle: {
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    minHeight: 50,
    padding: 16,
    position: 'absolute',
    width: '85%',
    zIndex: 2,
  },
  iconSize: {
    flex: 1,
  },
  modalContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
