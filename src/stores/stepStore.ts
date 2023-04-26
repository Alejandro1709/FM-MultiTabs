import { create } from "zustand";

type StepStore = {
  currentStep: number,
  handleChangeStep: (step: number) => void,
};

const useStepStore = create<StepStore>((set) => ({
  currentStep: 1,
  handleChangeStep: (step: number) => set({ currentStep: step }),
}));

export default useStepStore;