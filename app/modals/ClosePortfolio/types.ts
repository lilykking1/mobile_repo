export type TextColorsToUseStyle<T extends string> = Record<T, string>;
export type TextColorsKeys = 'title' | 'subtitle';
export type TextThemeStyle = TextColorsToUseStyle<TextColorsKeys>;

export interface TextColors {
  light: TextThemeStyle;
  dark: TextThemeStyle;
}
