import React, { ReactNode } from 'react';
import { EXCHANGES, EXCHANGE_TITLES } from '@app/models';
import { StyleSheet, View } from 'react-native';

import { ExchangeIcon, Typography } from '@app/components';
import { palette } from '@app/theme';

export const exchangeList = Object.keys(EXCHANGES);

const styles = StyleSheet.create({
  mockList: {
    borderColor: palette.greyGhost,
    borderRadius: 15,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 12,
  },
});

export const renderExchangeList = (key: string): ReactNode => {
  const exchange = EXCHANGES[key];
  return (
    <View key={key} style={styles.mockList}>
      <ExchangeIcon exchange={exchange} />
      <Typography>{EXCHANGE_TITLES[exchange] || 'Not listed'}</Typography>
    </View>
  );
};
