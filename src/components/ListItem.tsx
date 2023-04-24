import { useState } from "react";
import { useToggle } from "../hooks/useToggle";
import type IPlan from "../types/plan";

type Props = {
  plan: IPlan;
};

function ListItem({ plan }: Props) {
  const [activePlan, setActivePlan] = useState<IPlan | null>(null)

  const { isMonthly } = useToggle()
  const formattedPrice = isMonthly ? `${plan.monthlyPrice}/mo` : `${plan.yearlyPrice}/yr`

  const handleClick = (plan: IPlan) => {
    const newPlan = { ...plan, active: !plan.active }
    setActivePlan(newPlan)
  }

  return (
    <li className={`flex gap-[14px] p-[14px] border ${activePlan ? "border-purple bg-background" : "border-gray-300 bg-white"} rounded-md cursor-pointer`} onClick={() => handleClick(plan)}>
      <img src={plan.icon} alt={`${plan.name} icon`} draggable={false} />
      <div className="flex flex-col gap-[2px]">
        <h2 className="text-denim font-bold text-lg">{plan.name}</h2>
        <p className="text-grey">${formattedPrice}</p>
      </div>
    </li>
  )
}

export default ListItem