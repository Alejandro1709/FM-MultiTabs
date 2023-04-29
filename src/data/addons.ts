import type IPlan from '../types/plan';

const addons: IPlan[] = [
  {
    id: 1,
    name: 'Online Services',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
    active: false,
  },
  {
    id: 2,
    name: 'Larger Storage',
    description: 'Extra 1TB of cloud storage',
    monthlyPrice: 2,
    yearlyPrice: 20,
    active: false,
  },
  {
    id: 3,
    name: 'Customizable profile',
    description: 'Customize your profile with a custom background',
    monthlyPrice: 3,
    yearlyPrice: 30,
    active: false,
  },
];

export default addons;
