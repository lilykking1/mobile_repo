import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { RootContext } from '@app/state/stores';
import { observer } from 'mobx-react';

import styles from './styles';
import { getSeparatorStyle } from './utils';

const TransactionSeparator: FC = () => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const transactionSeparatorStyle = useMemo(
    () => [styles.separator, getSeparatorStyle(theme)],
    [theme]
  );

  return <View style={transactionSeparatorStyle} />;
};

export default observer(TransactionSeparator);
