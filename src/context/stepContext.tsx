/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

export const StepContext = createContext({
  currentStep: 1,
  handleChangeStep: (_step: number) => { },
});

export function StepProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);

  const handleChangeStep = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <StepContext.Provider value={{
      currentStep,
      handleChangeStep,
    }}>
      {children}
    </StepContext.Provider>
  );
}