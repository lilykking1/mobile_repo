import { StyleSheet } from 'react-native';
import { STICKY_HEADER_HORIZONTAL_MARGIN } from './constants';

const styles = StyleSheet.create({
  absoluteLines: {
    height: 115,
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  backButtonContainer: {
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  backgroundLeftArrowInverted: {
    alignItems: 'center',
    borderRadius: 12,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  bottomHeaderContainer: {
    paddingHorizontal: STICKY_HEADER_HORIZONTAL_MARGIN,
  },
  gridLines: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: STICKY_HEADER_HORIZONTAL_MARGIN,
    paddingVertical: 16,
    zIndex: 1,
  },
  headerTitle: {
    alignItems: 'center',
    flex: 4,
    justifyContent: 'center',
  },
  left: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
