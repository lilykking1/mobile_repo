import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';
import { Alert as AlertModel } from '@app/models';

export const getAlertCircleColorByTheme = (
  alert: AlertModel,
  theme: Theme = 'light'
): string => {
  if (!alert.read) {
    return theme === 'dark' ? palette.royalBlue[400] : palette.royalBlue[500];
  }
  return palette.transparent;
};
