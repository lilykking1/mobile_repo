import { Theme } from '@app/state/stores/settings/types';
import { BlurType, ModalVariants } from './types';
import { MODAL_BLUR_TYPE, MODAL_TRANSPARENCY } from './constants';

export const getBlurConfig = (theme: Theme = 'light'): ModalVariants =>
  MODAL_TRANSPARENCY[theme];

export const getBlurVariant = (theme: Theme = 'light'): BlurType =>
  MODAL_BLUR_TYPE[theme];
