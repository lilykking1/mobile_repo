import { ViewStyle } from 'react-native';
import { palette } from '@app/theme';

export const getBorderStyle = (isDarkTheme: boolean): ViewStyle => {
  let borderColor = palette.grey[400];

  if (isDarkTheme) {
    const { 700: darkBorderColor } = palette.grey;
    borderColor = darkBorderColor;
  }

  return {
    borderColor,
  };
};
