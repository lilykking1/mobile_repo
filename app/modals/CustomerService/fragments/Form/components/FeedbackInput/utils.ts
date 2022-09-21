import { palette } from '@app/theme';

export const getColorStyles = (
  isDarkTheme: boolean,
  isInputStyle?: boolean
): { backgroundColor: string; color: string } => {
  const backgroundColor = isDarkTheme
    ? palette.royalBlue[950]
    : palette.grey[300];
  const color = isInputStyle && isDarkTheme ? palette.white : undefined;
  return { backgroundColor, color };
};
