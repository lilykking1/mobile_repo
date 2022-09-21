import { StyleSheet } from 'react-native';
import { paletteColors } from '@app/theme';

const styles = StyleSheet.create({
  base: {
    backgroundColor: paletteColors.grey[300],
    borderColor: paletteColors.grey[300],
    borderRadius: 22,
    borderWidth: 1,
    color: paletteColors.royalBlue[900],
    height: 44,
    paddingBottom: 12,
    paddingHorizontal: 4,
    paddingTop: 10,
    width: 110,
  },
  coinLabel: {
    marginLeft: 2,
    marginTop: 2,
  },
  cryptoButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
