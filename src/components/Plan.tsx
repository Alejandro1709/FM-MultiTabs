import { useState } from 'react'
import Toggle from './Toggle'
import Game from '/icon-arcade.svg'

function Plan() {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <div className='flex flex-col gap-[24px]'>
      <ul className="flex flex-col gap-[20px]">
        <li className="flex gap-[14px] p-[14px] border border-purple rounded-md bg-background cursor-pointer">
          <img src={Game} alt="Game icon" draggable={false} />
          <div className="flex flex-col gap-[2px]">
            <h2 className="text-denim font-bold text-lg">Arcade</h2>
            <p className="text-grey">$9/mo</p>
          </div>
        </li>
        <li className="flex gap-[14px] p-[14px] border border-purple rounded-md bg-background cursor-pointer">
          <img src={Game} alt="Game icon" draggable={false} />
          <div className="flex flex-col gap-[2px]">
            <h2 className="text-denim font-bold text-lg">Arcade</h2>
            <p className="text-grey">$9/mo</p>
          </div>
        </li>
        <li className="flex gap-[14px] p-[14px] border border-purple rounded-md bg-background cursor-pointer">
          <img src={Game} alt="Game icon" draggable={false} />
          <div className="flex flex-col gap-[2px]">
            <h2 className="text-denim font-bold text-lg">Arcade</h2>
            <p className="text-grey">$9/mo</p>
          </div>
        </li>
      </ul>
      <Toggle isMonthly={isMonthly} onPlanChange={setIsMonthly} />
    </div>
  )
}

export default Plan