/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";
import plans from "../data/plans";
import type IPlan from "../types/plan";

type PlanContextType = {
  initialPlans: IPlan[]
  selectedPlan: IPlan | null
  setInitialPlans: React.Dispatch<React.SetStateAction<IPlan[]>>
  setSelectedPlan: React.Dispatch<React.SetStateAction<IPlan | null>>
};

export const PlanContext = createContext<PlanContextType>({
  initialPlans: plans,
  selectedPlan: null,
  setInitialPlans: (_plans) => { },
  setSelectedPlan: (_plan) => { },
});

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [initialPlans, setInitialPlans] = useState<IPlan[]>(plans);
  const [selectedPlan, setSelectedPlan] = useState<IPlan | null>(null);

  return (
    <PlanContext.Provider value={{ initialPlans, selectedPlan, setInitialPlans, setSelectedPlan }}>
      {children}
    </PlanContext.Provider>
  );
}