import React, { FC, useContext, useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { observer } from 'mobx-react';
import { Typography } from '@app/components';
import { RootContext } from '@app/state';
import { palette } from '@app/theme';

import styles from './styles';

interface PeriodButtonProps extends TouchableOpacityProps {
  label: string;
}

const PeriodButton: FC<PeriodButtonProps> = ({ label, ...rest }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const isDarkTheme = theme === 'dark';

  const baseStyles = useMemo(
    () => [
      styles.container,
      { borderColor: isDarkTheme ? palette.grey[600] : palette.grey[500] },
    ],
    [isDarkTheme]
  );

  return (
    <TouchableOpacity activeOpacity={0.75} style={baseStyles} {...rest}>
      <Typography style={styles.text} variant="grey.600" size="body2">
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

export default observer(PeriodButton);
