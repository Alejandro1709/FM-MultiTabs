import { create } from "zustand";

type ToggleStore = {
  isMonthly: boolean;
  setIsMonthly: (isMonthly: boolean) => void;
};

const useToggleStore = create<ToggleStore>((set) => ({
  isMonthly: true,
  setIsMonthly: (isMonthly: boolean) => set({ isMonthly }),
}));

export default useToggleStore;