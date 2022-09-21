import { THEME_VARIANT } from '@app/components/Slider/constants';

export const getThumbDetailColor = (
  theme: string,
  onSnappedValue: boolean
): string =>
  onSnappedValue
    ? THEME_VARIANT[theme].thumbDetailSnapped
    : THEME_VARIANT[theme].thumbDetail;
