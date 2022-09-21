import { getFontStyleForWeight } from '@app/utils/font';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  actionsContainer: {
    flex: 0.25,
    justifyContent: 'center',
    width: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    flex: 0.75,
    width: '100%',
  },
  cryptoActionButtonContainer: {
    marginTop: 24,
  },
  fullWidth: {
    width: '100%',
  },
  image: {
    alignSelf: 'center',
  },
  imageContainer: {
    marginTop: 60,
  },
  subtitle: {
    textAlign: 'center',
  },
  subtitleContainer: {
    marginTop: 24,
    width: 280,
  },
  title: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '700',
    }),
    lineHeight: 38.4,
    textAlign: 'center',
  },
  titleContainer: {
    marginTop: 33,
  },
  videoButtonContainer: {
    marginTop: 34,
  },
});

export default styles;
