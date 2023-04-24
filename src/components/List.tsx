import ListItem from "./ListItem";
import type IPlan from "../types/plan";

type Props = {
  plans: IPlan[];
};

function List({ plans }: Props) {
  return (
    <ul className="flex flex-col gap-[20px]">
      {plans.map((plan) => (
        <ListItem key={plan.id} plan={plan} />
      ))}
    </ul>
  )
}

export default List