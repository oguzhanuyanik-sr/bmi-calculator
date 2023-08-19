import React, { createContext, useState } from 'react';
import { defaultValue } from '../utils/constants';

interface ValueData {
  cm: string;
  kg: string;
  ft: string;
  inc: string;
  st: string;
  lbs: string;
}

interface GlobalContextProps {
  bmi: number;
  setBmi: React.Dispatch<React.SetStateAction<number>>;
  value: ValueData;
  setValue: React.Dispatch<React.SetStateAction<ValueData>>;
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  bmi: 0,
  setBmi: () => {},
  value: defaultValue,
  setValue: () => {},
  option: 'metric',
  setOption: () => {},
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [bmi, setBmi] = useState(0);
  const [value, setValue] = useState(defaultValue);
  const [option, setOption] = useState('metric');

  return (
    <GlobalContext.Provider
      value={{
        bmi,
        setBmi,
        value,
        setValue,
        option,
        setOption,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
