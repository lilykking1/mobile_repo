export enum SliderType {
  INPUT = 'input',
  INPUT_WITH_ICON = 'inputWithIcon',
  WITHOUT_INPUT = 'withoutInput',
  INPUT_ICON_WITH_LEVELS = 'inputIconWithLevels',
}

export interface ThemeItems {
  percentFooterBackground: string;
  maximumTrackTintColor: string;
  thumbDetail: string;
  thumbDetailSnapped: string;
  inputLabel: string;
  trackBackground: string;
}

export interface ThemeVariant {
  light: ThemeItems;
  dark: ThemeItems;
}
