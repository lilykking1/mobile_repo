import { ViewProps, StyleProp } from 'react-native';
import styles from './styles';

type GetCheckboxReturn =
  | {
      position: 'absolute';
      right: number;
      zIndex: number;
    }
  | {
      display: 'none';
    };

type GetBackgroundColorReturn = {
  backgroundColor: string;
} | null;

export const getIconDirection = (
  iconPosition: 'right' | 'left'
): StyleProp<ViewProps> =>
  ({
    flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
  } as StyleProp<ViewProps>);

export const getIconMargin = (
  iconPosition: 'right' | 'left'
): StyleProp<ViewProps> =>
  ({
    marginRight: iconPosition === 'left' ? 12 : 0,
    marginLeft: iconPosition === 'left' ? 0 : 12,
  } as StyleProp<ViewProps>);

export const getIconFlexDirection = (
  iconPosition: 'right' | 'left'
): StyleProp<ViewProps> =>
  ({
    flex: iconPosition === 'right' ? 0 : 0.9,
  } as StyleProp<ViewProps>);

export const getCheckboxStyles = (
  multiple: boolean,
  checked: boolean,
  useCheckIcon: boolean
): GetCheckboxReturn => {
  if ((useCheckIcon && checked) || multiple) {
    return styles.checkbox;
  }

  return styles.hidden;
};

export const getBackgroundColor = (
  checked: boolean
): GetBackgroundColorReturn => (checked ? styles.containerBackground : null);

export const getContainerStyles = (
  checked: boolean,
  style: any,
  useCheckIcon: boolean
): any[] => {
  if (useCheckIcon) {
    return [styles.container, style];
  }

  return [getBackgroundColor(checked), styles.container, style];
};
