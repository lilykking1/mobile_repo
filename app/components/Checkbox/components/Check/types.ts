import type { ReactNode } from 'react';
import { ComposedStyle } from '@app/utils/styles';

export type IconType = ReactNode | ((props: BasicCheckProps) => ReactNode);

export type BasicCheckProps = {
  disabled?: boolean;
  checked?: boolean;
  touched?: boolean;
  error?: string;
  lineCheck?: boolean;
};

export type States =
  | 'checkedLight'
  | 'checkedDark'
  | 'uncheckedDark'
  | 'uncheckedLight';

export type Error = 'checked' | 'unchecked';

export type StateStyle = ComposedStyle<States>;
export type DisabledStyle = ComposedStyle<States>;
export type ErrorStyle = ComposedStyle<Error>;
