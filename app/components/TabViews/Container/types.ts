import { ReactNode } from 'react';
import { View } from '../types';

export interface GetTabsProps {
  views: View[];
  currentViewIndex: number;
  handleChangeTab: (index: number) => void;
  isDarkTheme: boolean;
}

export interface TabItem {
  props: {
    title: string;
    children: ReactNode;
  };
}
