/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FocusEvent, ChangeEvent } from 'react';

export interface FormValues {
  customerService: string;
}

export interface FormikHandleBlur {
  (e: FocusEvent<any, Element>): void;
  <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
}

export interface FormikHandleChange {
  (e: ChangeEvent<any>): void;
  <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
    ? void
    : (e: string | ChangeEvent<any>) => void;
}
