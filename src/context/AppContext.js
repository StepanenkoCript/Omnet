import React from 'react';

export const AppContext = React.createContext(); //

export const AppProvider = ({ children }) => {
  const [cep, setCep] = React.useState('');
  const [address, setAddress] = React.useState({});

  return (
    <AppContext.Provider value={{ cep, setCep, address, setAddress }}>
      {children}
    </AppContext.Provider>
  );
};
