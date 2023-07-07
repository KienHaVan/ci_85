import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = (props) => {
  const [color, setColor] = useState('red');
  const [number, setNumber] = useState(0);
  const value = {
    color,
    setColor,
    number,
    setNumber,
  };
  return <AppContext.Provider value={value} {...props}></AppContext.Provider>;
};

export { AppProvider, AppContext };
