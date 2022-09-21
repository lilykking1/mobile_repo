import { TypographyVariant } from '@app/components/Typography/types';
import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';

import styles from './styles';

export const getStyles = (theme: Theme): any[] => {
  const isDarkCard = theme === 'dark';

  return [
    styles.content,
    { backgroundColor: isDarkCard ? palette.royalBlue[950] : palette.white },
  ];
};

export const getTitle = (
  theme: Theme
): { text: string; variant: TypographyVariant } => {
  const isDarkCard = theme === 'dark';

  return {
    text: isDarkCard ? 'Dark Mode' : 'Light Mode',
    variant: isDarkCard ? 'white' : 'secondary.900',
  };
};
