import { usePlans } from "../hooks/usePlans";
import useToggleStore from "../stores/toggleStore";
import type IPlan from "../types/plan";

type Props = {
  plan: IPlan;
  onSelect: (planId: number) => void;
};

function ListItem({ plan, onSelect }: Props) {
  const { selectedPlan } = usePlans()

  const isMonthly = useToggleStore(state => state.isMonthly)
  const formattedPrice = isMonthly ? `${plan.monthlyPrice}/mo` : `${plan.yearlyPrice}/yr`

  return (
    <li className={`flex gap-[14px] p-[14px] border ${selectedPlan !== null ? "border-purple bg-background" : "border-gray-300 bg-white"} rounded-md cursor-pointer`}
      onClick={() => onSelect(+plan.id)} >
      <img src={plan.icon} alt={`${plan.name} icon`} draggable={false} />
      <div className="flex flex-col gap-[2px]">
        <h2 className="text-denim font-bold text-lg">{plan.name}</h2>
        <p className="text-grey">${formattedPrice}</p>
      </div>
    </li>
  )
}

export default ListItem