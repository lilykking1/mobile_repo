import React, { createContext, useState, useContext, useEffect } from 'react';
import Storage from '@app/utils/Storage';

// TODO: Replace with Secure Storage
export const AUTH_PERSISTENCE_KEY = 'AUTHENTICATION_STATE';

export const authenticate = async (auth: boolean): Promise<void> => {
  await Storage.save(AUTH_PERSISTENCE_KEY, auth);
};

export const isAuthenticated = async (): Promise<boolean> => {
  const auth = await Storage.load(AUTH_PERSISTENCE_KEY);
  return Boolean(auth);
};

const AuthenticationContext = createContext(null);

export const AuthenticationProvider = ({ children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    isAuthenticated().then(setState);
  }, []);

  return (
    <AuthenticationContext.Provider value={[state, setState]}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  const [state, setState] = useContext(AuthenticationContext);

  const setAuthentication = async (auth: boolean) => {
    await authenticate(auth);
    setState(auth);
  };

  return [state, setAuthentication];
};
