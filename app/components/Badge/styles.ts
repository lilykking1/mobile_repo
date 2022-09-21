import { StyleSheet } from 'react-native';
import { paletteColors } from '@app/theme';
import { getFontStyleForWeight } from '@app/utils/font';

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    backgroundColor: paletteColors.royalBlue[500],
    borderColor: paletteColors.royalBlue[500],
    borderRadius: 7,
    borderWidth: 1,
    flexDirection: 'row',
    height: 14,
    justifyContent: 'center',
    width: 14,
  },
  label: {
    alignSelf: 'center',
    color: paletteColors.white,
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontStyle: 'normal',
      fontSize: 8,
    }),
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default styles;
