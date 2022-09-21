import { Dimensions, StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const { height: screenHeight } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    flex: 1,
    position: 'relative',
  },
  containerWebview: {
    height: screenHeight,
  },
  content: {
    backgroundColor: palette.grey[300],
    paddingBottom: 32,
    paddingHorizontal: 25,
  },
});

export default styles;
