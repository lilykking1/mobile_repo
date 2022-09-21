import { TextStyle } from 'react-native';

type FontWeight = TextStyle['fontWeight'];
type FontStyle = TextStyle['fontStyle'];

const getFontWeight = (fontWeight: FontWeight) => {
  switch (fontWeight) {
    case 'bold':
      return 'Bold';
    case '100':
      return 'Thin';
    case '200':
      return 'ExtraLight';
    case '300':
      return 'Light';
    case '400':
      return 'Regular';
    case '500':
      return 'Medium';
    case '700':
      return 'Bold';
    case '900':
      return 'Black';
    case 'normal':
    default:
      return 'Regular';
  }
};

const getFontStyle = (fontStyle: FontStyle) => {
  if (typeof fontStyle !== 'string') {
    return '';
  }

  switch (fontStyle.toLowerCase()) {
    case 'italic':
      return 'Italic';
    case 'normal':
    default:
      return '';
  }
};

const getVariant = (weight: string, style: string) => {
  // Avoid returning -RegularItalic, fallback to -Italic only
  if (weight === 'Regular' && style === 'Italic') {
    return style;
  }

  return `${weight}${style}`;
};

export const getFontStyleForWeight = (styles: TextStyle): TextStyle => {
  const { fontFamily, fontWeight, fontStyle } = styles;
  if (!fontFamily) {
    return styles;
  }

  const weight = getFontWeight(fontWeight);
  const style = getFontStyle(fontStyle);

  const variant = getVariant(weight, style);

  return {
    ...styles,
    fontFamily: `${fontFamily}-${variant}`,
    fontWeight: undefined,
    fontStyle: undefined,
  };
};
