import type IPlan from "../types/plan";

type Props = {
  plans: IPlan[];
};

function List({ plans }: Props) {
  return (
    <ul className="flex flex-col gap-[20px]">
      {plans.map((plan) => (
        <li key={plan.id} className="flex gap-[14px] p-[14px] border border-purple rounded-md bg-background cursor-pointer">
          <img src={plan.icon} alt="Game icon" draggable={false} />
          <div className="flex flex-col gap-[2px]">
            <h2 className="text-denim font-bold text-lg">{plan.name}</h2>
            <p className="text-grey">${plan.monthlyPrice}/mo</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List