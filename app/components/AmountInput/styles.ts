import { StyleSheet } from 'react-native';
import { getFontStyleForWeight } from '@app/utils/font';
import { palette } from '@app/theme';
import {
  darkActiveColors,
  darkDefaultColors,
  lightActiveColors,
  lightDefaultColors,
} from './constants';
import { ContainerStyleVarient } from './types';

export const lightTextStyles = StyleSheet.create<ContainerStyleVarient>({
  active: {
    color: lightActiveColors.text,
  },
  default: {
    color: lightDefaultColors.text,
  },
});

export const darkTextStyles = StyleSheet.create<ContainerStyleVarient>({
  active: {
    color: darkActiveColors.text,
  },
  default: {
    color: darkDefaultColors.text,
  },
});

export const styles = StyleSheet.create({
  avaliableAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -6,
    marginTop: 10,
    width: '100%',
  },
  container: {
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    height: 44,
    paddingHorizontal: 10,
    width: '100%',
  },
  inputTextStyle: {
    color: palette.grey[600],
    fontSize: 12,
    fontWeight: '400',
  },
  maxLink: {
    marginLeft: 6,
    marginTop: -2,
  },
  quantitiesContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '500',
    }),
  },
});
