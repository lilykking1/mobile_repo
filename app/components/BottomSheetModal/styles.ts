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
  },
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
  },
  handleIndicator: {
    alignSelf: 'center',
    borderRadius: 12,
    height: 6,
    marginTop: 6,
    width: 60,
  },
  spaceBottom: {
    marginBottom: 24,
  },
});

export default styles;
