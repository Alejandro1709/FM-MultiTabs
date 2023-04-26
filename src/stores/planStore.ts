import { create } from "zustand";
import plans from "../data/plans";
import type IPlan from "../types/plan";

type PlanStore = {
  plans: IPlan[]
  selectedPlan: IPlan | null
  setPlans: (plans: IPlan[]) => void
  setSelectedPlan: (plan: IPlan) => void
  resetSelectedPlan: () => void
};

const usePlanStore = create<PlanStore>((set) => ({
  plans,
  selectedPlan: null,
  setPlans: (plans) => set({ plans }),
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
  resetSelectedPlan: () => set({ selectedPlan: null }),
}));

export default usePlanStore;