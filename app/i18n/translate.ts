import i18n from 'i18n-js';
import { TxKeyPath } from './i18n';

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(
  key: TxKeyPath | string,
  options?: i18n.TranslateOptions
): string {
  if (!key) {
    return null;
  }

  return i18n.t(key, options);
}
