import { styles } from './styles';
import { THEME_VARIANT } from './constants';

export const getTextColor = (theme: string, onSnappedValue: boolean): string =>
  onSnappedValue ? THEME_VARIANT[theme].textSnapped : THEME_VARIANT[theme].text;

export const getLabelWidth = (
  customHeaderSteps: number[],
  currentStep: number,
  index: number
): string => {
  if (index < customHeaderSteps.length - 1) {
    return `${customHeaderSteps[index + 1] - currentStep}%`;
  }

  return `${customHeaderSteps[index] - customHeaderSteps[index - 1]}%`;
};

export const getTextStyleByTheme = (
  theme: string,
  label: number,
  percent: number,
  customHeaderSteps: number[],
  currentStep: number,
  stepIndex: number
): unknown => ({
  ...styles.typography,
  width: getLabelWidth(customHeaderSteps, currentStep, stepIndex),
  color: getTextColor(theme, label === percent),
});
