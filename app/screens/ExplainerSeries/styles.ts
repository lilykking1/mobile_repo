import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  button: {
    width: 145,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    paddingHorizontal: 38,
    width: '100%',
  },
  container: {
    alignItems: 'center',
  },
  firstSlideTextStyle: {
    fontSize: 54,
  },
  firstStyleText: {
    marginTop: height > 700 ? height / 2 : height / 2.4,
    paddingHorizontal: 38,
  },
  fourthSlideStyleText: {
    marginTop: height > 700 ? 400 : height / 2,
    paddingHorizontal: 38,
  },
  signInButton: {
    flex: 1,
    paddingRight: 4,
  },
  signUpButton: {
    flex: 1,
    paddingLeft: 4,
  },
  slideStyleText: {
    marginTop: height > 700 ? height / 2 : height / 2.3,
    paddingHorizontal: 38,
  },
  slidesContainer: {
    flex: 1,
    height: '100%',
    position: 'relative',
    width: '100%',
  },
  titleSlideStyle: {
    fontSize: 36,
  },
});

export default styles;
