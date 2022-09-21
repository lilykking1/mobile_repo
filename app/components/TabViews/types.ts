import type { ReactNode } from 'react';

export interface View {
  key: number;
  title: string;
  view: ReactNode;
}

export interface Tab {
  id: number | string;
  value: string;
}
