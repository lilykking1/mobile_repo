import React from 'react';

import { Tab } from '../Tab';
import { View } from '../types';
import { GetTabsProps, TabItem } from './types';

export const getViews = (children: React.ReactNode): View[] => {
  const views: View[] = [];

  (children as React.ReactNodeArray).forEach((tab: TabItem, index) => {
    const view = {
      key: index,
      title: tab.props.title,
      view: tab.props.children,
    };

    views.push(view);
  });

  return views;
};

export const getTabs = ({
  currentViewIndex,
  isDarkTheme,
  views,
  handleChangeTab,
}: GetTabsProps): React.ReactNode => {
  const Tabs = views.map((view, index) => (
    <Tab
      key={view.key}
      title={view.title}
      isSelected={index === currentViewIndex}
      isDarkTheme={isDarkTheme}
      onPress={() => handleChangeTab(index)}
    />
  ));

  return Tabs;
};

export const getCurrentView = (
  views: View[],
  currentViewIndex: number
): React.ReactNode => views[currentViewIndex].view;
