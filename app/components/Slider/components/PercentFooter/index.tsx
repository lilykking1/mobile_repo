import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { Typography } from '@app/components';
import { RootContext } from '@app/state';
import { THEME_VARIANT } from '@app/components/Slider/constants';
import { observer } from 'mobx-react';
import { styles } from './styles';

interface PercentFooterProps {
  withFooterBackground: boolean;
}

const PercentFooter: FC<PercentFooterProps> = ({ withFooterBackground }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const stylePercentFooter = useMemo(
    () => ({
      ...styles.percentFooter,
      backgroundColor: withFooterBackground
        ? THEME_VARIANT[theme].percentFooterBackground
        : 'none',
    }),
    [theme, withFooterBackground]
  );

  return (
    <View style={stylePercentFooter}>
      <Typography variant="grey.600">Low Risk</Typography>
      <Typography variant="grey.600">High Risk</Typography>
    </View>
  );
};

export default observer(PercentFooter);
