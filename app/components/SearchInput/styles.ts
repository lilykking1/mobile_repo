import { StyleSheet } from 'react-native';
import {
  darkActiveColors,
  darkDefaultColors,
  lightActiveColors,
  lightDefaultColors,
} from './constants';
import { ContainerStyleVarient } from './types';

export const lightStyles = StyleSheet.create<ContainerStyleVarient>({
  active: {
    backgroundColor: lightActiveColors.background,
    borderColor: lightActiveColors.border,
  },
  default: {
    backgroundColor: lightDefaultColors.background,
    borderColor: lightDefaultColors.border,
  },
});

export const darkStyles = StyleSheet.create<ContainerStyleVarient>({
  active: {
    backgroundColor: darkActiveColors.background,
    borderColor: darkActiveColors.border,
  },
  default: {
    backgroundColor: darkDefaultColors.background,
    borderColor: darkDefaultColors.border,
  },
});

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
  container: {
    borderRadius: 12,
    borderWidth: 1.5,
    flexDirection: 'row',
    height: 44,
    paddingHorizontal: 14.5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14.5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
