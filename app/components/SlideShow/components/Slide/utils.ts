import { StyleProp, ViewStyle } from 'react-native';
import { Palette } from '@app/theme';

export const getBorderColors = (
  isSelected: boolean,
  selectedBorderColor?: Palette
): StyleProp<ViewStyle> =>
  ({
    borderWidth: isSelected ? 2 : 0,
    borderColor: isSelected ? selectedBorderColor : '',
  } as StyleProp<ViewStyle>);
