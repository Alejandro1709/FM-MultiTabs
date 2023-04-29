import { create } from 'zustand';
import IPlan from '../types/plan';
import addons from '../data/addons';

type AddOnStore = {
  addOns: IPlan[];
  setAddOns: (addOns: IPlan[]) => void;
  toggleAddOn: (addOn: IPlan) => void;
};

export const useAddOnStore = create<AddOnStore>((set, get) => ({
  addOns: addons,
  setAddOns: (addOns) => set({ addOns }),
  toggleAddOn: (addOn) => {
    const { addOns } = get();

    const newAddOns = addOns.filter((a) => {
      if (+a.id === +addOn.id) {
        a.active = !a.active;
      }
      return a;
    });

    set({ addOns: newAddOns });
  },
}));
