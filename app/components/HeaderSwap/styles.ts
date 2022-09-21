import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  containerHeader: {
    marginLeft: 20,
    marginTop: 10,
  },
  divider: {
    height: 20,
    marginBottom: -1,
    zIndex: -1,
  },
  faqIcon: {
    bottom: 28,
    left: 328,
    zIndex: 3,
  },
  headerTitle: {
    alignSelf: 'center',
    bottom: 26.5,
    position: 'absolute',
    zIndex: 2,
  },
  headerTitleIconHidden: {
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 2,
  },
  hiddenIcon: {
    justifyContent: 'center',
    marginTop: 40,
    paddingHorizontal: 15,
  },
  iconBtn: {
    backgroundColor: palette.transparent,
    borderRadius: 12,
    height: 36,
    width: 36,
  },
  indicatorContainer: {
    bottom: -3.5,
    marginBottom: 15,
  },
  indicatorContainerHidden: {
    bottom: 15,
  },
  sliderContainer: {
    marginBottom: -15,
  },
  trackStyle: {
    height: 8,
  },
});

export default styles;
