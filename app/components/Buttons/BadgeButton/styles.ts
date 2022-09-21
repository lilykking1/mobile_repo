import { StyleSheet } from 'react-native';
import { paletteColors } from '@app/theme';

const styles = StyleSheet.create({
  badge: {
    marginLeft: 24,
  },
  base: {
    alignItems: 'center',
    backgroundColor: paletteColors.grey[300],
    borderColor: paletteColors.grey[300],
    borderRadius: 12,
    borderWidth: 1,
    color: paletteColors.royalBlue[900],
    flexDirection: 'column',
    height: 36,
    justifyContent: 'center',
    paddingBottom: 12,
    width: 36,
  },
  disabled: {
    opacity: 0.75,
  },
  pressed: {
    backgroundColor: paletteColors.grey[400],
  },
});

export default styles;
