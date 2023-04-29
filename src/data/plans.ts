import type IPlan from '../types/plan';

const plans: IPlan[] = [
  {
    id: 1,
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: '/icon-arcade.svg',
  },
  {
    id: 2,
    name: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: '/icon-advanced.svg',
  },
  {
    id: 3,
    name: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: '/icon-pro.svg',
  },
];

export default plans;
