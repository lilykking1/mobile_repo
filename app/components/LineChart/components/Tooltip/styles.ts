import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';
import { TOOLTIP_FIXED_HEIGHT, TOOLTIP_FIXED_WIDTH } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'column',
    height: TOOLTIP_FIXED_HEIGHT,
    justifyContent: 'center',
    margin: 0,
    padding: 10,
    position: 'absolute',
    shadowColor: palette.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    transform: [{ translateX: -(TOOLTIP_FIXED_WIDTH / 2) }],
    width: TOOLTIP_FIXED_WIDTH,
    zIndex: 9999,
  },
  content: {
    position: 'absolute',
    zIndex: 3,
  },
  descriptionLabel: {
    fontSize: 12,
    lineHeight: 14,
    marginTop: 2,
    textAlign: 'center',
  },
  titleLabel: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
});

export default styles;
