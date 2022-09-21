import { translate } from '@app/i18n';
import { FlexStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { DEFAULT_MARGIN } from './constants';
import { LabelAlignmentVariants } from './types';

export const getDefaultLabel = (currentCountdown: number): string => {
  const minutes = Math.floor(currentCountdown / 60);
  if (minutes > 0) {
    return translate('components.waitingSpinner.defaultLabelInMinutes', {
      countdown: minutes,
    });
  }

  return translate('components.waitingSpinner.defaultLabelInSeconds', {
    countdown: currentCountdown,
  });
};

export const getCustomContainerStyles = (
  labelAlignment: LabelAlignmentVariants
): StyleProp<ViewStyle> => {
  let flexDirection: FlexStyle['flexDirection'] = 'row';
  switch (labelAlignment) {
    case 'top':
      flexDirection = 'column-reverse';
      break;
    case 'bottom':
      flexDirection = 'column';
      break;
    case 'left':
      flexDirection = 'row-reverse';
      break;
    default:
      flexDirection = 'row';
  }

  return {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection,
  };
};

export const getCustomLabelStyles = (
  labelAlignment: LabelAlignmentVariants
): StyleProp<TextStyle> => {
  switch (labelAlignment) {
    case 'top':
      return { marginBottom: DEFAULT_MARGIN };
    case 'bottom':
      return { marginTop: DEFAULT_MARGIN };
    case 'left':
      return { marginRight: DEFAULT_MARGIN };
    default:
      return { marginLeft: DEFAULT_MARGIN };
  }
};
