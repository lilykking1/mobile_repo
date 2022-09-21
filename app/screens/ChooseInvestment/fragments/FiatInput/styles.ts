import { getFontStyleForWeight } from '@app/utils/font';
import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from './constants';
import { TextStyleVariant } from './types';

export const textStyles = StyleSheet.create<TextStyleVariant>({
  dark: {
    color: darkColors.text,
  },
  light: {
    color: lightColors.text,
  },
});

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 48,
  },
  errorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  errorText: {
    marginLeft: 8,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 44,
    marginBottom: 18,
    paddingHorizontal: 10,
    width: '100%',
  },
  textInput: {
    flex: 1,
    fontSize: 48,
    textAlign: 'center',
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '500',
    }),
  },
});
