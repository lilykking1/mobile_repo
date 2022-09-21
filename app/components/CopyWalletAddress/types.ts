import { ReactElement } from 'react';
import { IconProps } from '@app/components/Icon/types';
import { TypographyVariant } from '../Typography/types';

export interface CopyWalletAddressProp {
  icon?: ReactElement<IconProps>;
  walletAddress: string;
  darkContainerAltColor?: string;
  lightContainerAltColor?: string;
  darkBorderAltColor?: string;
  lightBorderAltColor?: string;
  hintText?: string;
  lightTypographyAltColor?: TypographyVariant;
  darkTypographyAltColor?: TypographyVariant;
}
