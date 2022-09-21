import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerSwapToCoin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 21,
  },
  containerSwapToCoinName: {
    flexDirection: 'row',
  },
  spinner: {
    height: 28,
    position: 'absolute',
    right: '50%',
  },
  swapToCoinName: {
    alignSelf: 'center',
    marginLeft: 9,
  },
  typographyWhenLoading: {
    opacity: 0.2,
  },
});

export default styles;
