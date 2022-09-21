import React, { FC, useMemo } from 'react';
import { useExchange } from '@app/temporary';
import { Empty } from './views';
import { getExchangesList } from './utils';

const Exchanges: FC = () => {
  const { exchanges } = useExchange();
  const exchangesList = useMemo(() => getExchangesList(exchanges), [exchanges]);

  return <Empty exchanges={exchangesList} />;
};

export default Exchanges;
