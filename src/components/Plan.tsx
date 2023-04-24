import { useState } from 'react'
import Toggle from './Toggle'
import List from './List'
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
  }
];

function Plan() {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <div className='flex flex-col gap-[24px]'>
      <List plans={plans} />
      <Toggle isMonthly={isMonthly} onPlanChange={setIsMonthly} />
    </div>
  )
}

export default Plan