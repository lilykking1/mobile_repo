import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  toggleContainer: {
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    marginLeft: 3,
    width: 50,
  },
  toggleWheelStyle: {
    borderRadius: 12.5,
    elevation: 1.5,
    height: 25,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    width: 25,
  },
});

export default styles;
