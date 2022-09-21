import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Typography } from '@app/components';

import { getVariant } from './utils';
import styles from './styles';
import { OPACITY_ON_PRESS_VALUE } from './constants';

interface TabProps extends TouchableOpacityProps {
  title: string;
  isSelected?: boolean;
  isDarkTheme?: boolean;
}

const Tab: FC<TabProps> = ({ title, isSelected, isDarkTheme, ...rest }) => (
  <TouchableOpacity
    activeOpacity={OPACITY_ON_PRESS_VALUE}
    disabled={isSelected}
    style={styles.tab}
    {...rest}
  >
    <Typography
      size="body1"
      variant={getVariant(isSelected, isDarkTheme)}
      strong
    >
      {title}
    </Typography>
  </TouchableOpacity>
);

export default Tab;
