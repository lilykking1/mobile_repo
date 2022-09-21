import { palette } from '@app/theme';
import styles from './styles';

export const getButtonStyle = (theme: string) => {
  if (theme === 'light') {
    return {
      container: [
        styles.base,
        { backgroundColor: palette.grey[300], borderColor: palette.grey[300] },
      ],
      iconTint: palette.royalBlue[500],
    };
  }

  return {
    container: [
      styles.base,
      {
        backgroundColor: palette.royalBlue[950],
        borderColor: palette.royalBlue[950],
      },
    ],
    iconTint: palette.grey[600],
  };
};
