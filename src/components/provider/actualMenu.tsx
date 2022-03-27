import { createContext, ReactNode, useState } from "react";

type ActualMenuProps = {
  actual: number;
  setActual(actual: number): void;
};

type ActualMenuProviderProps = {
  children: ReactNode;
};

export const actualMenuContext = createContext({} as ActualMenuProps);

export function ActualMenuProvider({ children }: ActualMenuProviderProps) {
  const [actual, setActual] = useState<number>(0);

  return (
    <actualMenuContext.Provider value={{ actual, setActual }}>
      {children}
    </actualMenuContext.Provider>
  );
}
