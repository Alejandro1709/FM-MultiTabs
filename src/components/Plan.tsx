import { useState } from 'react'
import Toggle from './Toggle'
import List from './List'
import plans from '../data/plans'

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