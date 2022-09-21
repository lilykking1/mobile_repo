import { palette } from '@app/theme';
import styles from './styles';

export interface IKeyboardOpenStyle {
  footer?: {
    marginBottom: number;
  };
  withdrawContainer?: {
    marginBottom: number;
    justifyContent: 'flex-start';
  };
  walletAddressContainer?: {
    marginTop: string;
  };
}

export const getKeyboardOpenStyle = (
  keyboardOffset: number
): IKeyboardOpenStyle => {
  if (keyboardOffset > 0) {
    return {
      footer: { marginBottom: keyboardOffset * 0.91 },
      withdrawContainer: {
        marginBottom: keyboardOffset * 0.5,
        justifyContent: 'flex-start',
      },
      walletAddressContainer: {
        marginTop: '8%',
      },
    };
  }

  return {};
};

export interface IArrowContainerStyle {
  container: [
    {
      bottom: number;
      flexDirection: 'row';
      paddingHorizontal: number;
      position: 'absolute';
    },
    { backgroundColor: string }
  ];
  arrowTint: string;
}
export const getArrowContainerStyle = (theme: string): IArrowContainerStyle => {
  if (theme === 'light') {
    return {
      container: [styles.arrowsStyle, { backgroundColor: palette.white }],
      arrowTint: palette.royalBlue[500],
    };
  }
  return {
    container: [
      styles.arrowsStyle,
      { backgroundColor: palette.royalBlue[1000] },
    ],
    arrowTint: palette.grey[600],
  };
};

export interface IBorderStyle {
  borderColor: string;
}

export const getBorderStyle = (theme: string): IBorderStyle => {
  if (theme === 'light') {
    return { borderColor: palette.grey[400] };
  }

  return { borderColor: palette.grey[700] };
};
