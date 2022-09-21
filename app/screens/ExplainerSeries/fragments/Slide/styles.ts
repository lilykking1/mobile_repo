import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  lottieAnimationStyle: {
    bottom: height > 700 ? 13 : -30,
    position: 'absolute',
    width: '100%',
  },
  slideImageStyle: {
    bottom: height > 700 ? 40 : -20,
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  slidesContainer: {
    flex: 1,
    height: '100%',
    position: 'relative',
    width: '100%',
  },
});

export default styles;
