import React, { createContext, useState, useContext } from 'react';

const PasswordContext = createContext(null);

export const PasswordProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <PasswordContext.Provider value={[state, setState]}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePasswordShow = () => useContext(PasswordContext);
