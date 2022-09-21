import { TypographyVariant } from '@app/components/Typography/types';
import { Theme } from '@app/state/stores/settings/types';
import { ALT_LIGHT_SUBTITLE_COLOR, ALT_DARK_SUBTITLE_COLOR } from './constants';

export const getSubtitleVariant = (theme: Theme = 'light'): TypographyVariant =>
  theme === 'light' ? ALT_LIGHT_SUBTITLE_COLOR : ALT_DARK_SUBTITLE_COLOR;
