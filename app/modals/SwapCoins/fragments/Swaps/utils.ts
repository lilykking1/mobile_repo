import { ViewStyle } from 'react-native';

export const getColorConfigurations = (color: string): ViewStyle => ({
  backgroundColor: color,
  shadowColor: color,
});
