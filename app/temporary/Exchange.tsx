import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

import { Exchange, EXCHANGES } from '@app/models';
import Storage from '@app/utils/Storage';

export const EXCHANGE_PERSISTENCE_KEY = 'EXCHANGE_STATE';
export type Collection = Partial<Record<EXCHANGES, Exchange>>;

export const loadExchanges = async (): Promise<Collection> => {
  const exchanges = await Storage.load(EXCHANGE_PERSISTENCE_KEY);
  return exchanges || {};
};

export const insertExchange = async (exchange: Exchange): Promise<void> => {
  const exchanges = await loadExchanges();
  const payload = {
    ...exchanges,
    [exchange.id]: exchange,
  };
  await Storage.save(EXCHANGE_PERSISTENCE_KEY, payload);
};

export const updateExchange = async (exchange: Exchange): Promise<void> => {
  const exchanges = await loadExchanges();
  const node = exchanges[exchange.id];

  if (node === undefined) {
    return;
  }

  const payload = {
    ...exchanges,
    [exchange.id]: {
      ...node,
      ...exchange,
    },
  };
  await Storage.save(EXCHANGE_PERSISTENCE_KEY, payload);
};

export const deleteExchange = async (id: EXCHANGES): Promise<void> => {
  const exchanges = await loadExchanges();
  const modify = { ...exchanges };
  delete modify[id];

  await Storage.save(EXCHANGE_PERSISTENCE_KEY, modify);
};

export const resetExchanges = async (): Promise<void> => {
  await Storage.save(EXCHANGE_PERSISTENCE_KEY, {});
};

const ExchangeContext = createContext<
  [Collection, Dispatch<SetStateAction<Collection>>]
>(null);

export const ExchangeProvider = ({ children }) => {
  const [state, setState] = useState<Collection>({});

  // useEffect(() => {
  //   loadExchanges().then(setState);
  // }, []);

  return (
    <ExchangeContext.Provider value={[state, setState]}>
      {children}
    </ExchangeContext.Provider>
  );
};

export const useExchange = () => {
  const [exchanges, setExchanges] = useContext(ExchangeContext);

  const addExchange = useCallback(
    (exchange: Exchange) => {
      setExchanges((state) => ({ ...state, [exchange.id]: exchange }));
      // insertExchange(exchange);
    },
    [setExchanges]
  );

  const editExchange = useCallback(
    (exchange: Exchange) => {
      setExchanges((state) => {
        const node = state[exchange.id];

        if (node === undefined) {
          return state;
        }

        return {
          ...state,
          [exchange.id]: {
            ...node,
            ...exchange,
          },
        };
      });
      // insertExchange(exchange);
    },
    [setExchanges]
  );

  const removeExchange = useCallback(
    (id: EXCHANGES) => {
      setExchanges((state) => {
        const payload = { ...state };
        delete payload[id];
        return payload;
      });
      // deleteExchange(id);
    },
    [setExchanges]
  );

  const cleanExchanges = useCallback(() => {
    setExchanges({});
    // resetExchanges();
  }, [setExchanges]);

  return {
    exchanges,
    addExchange,
    editExchange,
    removeExchange,
    cleanExchanges,
  };
};
