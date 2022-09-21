import { styles } from '@app/components/Slider/components/PercentHeader/styles';
import { THEME_VARIANT } from './constants';

export const getTextColor = (theme: string, onSnappedValue: boolean): string =>
  onSnappedValue ? THEME_VARIANT[theme].textSnapped : THEME_VARIANT[theme].text;

export const getTextStyleByTheme = (
  theme: string,
  label: number,
  percent: number
) => ({
  ...styles.typography,
  color: getTextColor(theme, label === percent),
});
