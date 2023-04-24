/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from "react";

export type ToggleContextType = {
  isMonthly: boolean;
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToggleContext = createContext<ToggleContextType>({
  isMonthly: true,
  setIsMonthly: () => { },
});

export function ToggleProvider({ children }: { children: React.ReactNode }) {
  const [isMonthly, setIsMonthly] = React.useState(true);

  return (
    <ToggleContext.Provider value={{ isMonthly, setIsMonthly }}>
      {children}
    </ToggleContext.Provider>
  );
}