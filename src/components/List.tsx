import ListItem from "./ListItem";
import { usePlans } from "../hooks/usePlans";
import type IPlan from "../types/plan";

function List() {
  const { initialPlans, selectedPlan, setSelectedPlan } = usePlans()

  const handleSelect = (planId: number) => {
    const plan: IPlan | undefined = initialPlans.find((plan) => plan.id === planId)

    if (!plan) return

    // check if plan is already selected
    if (selectedPlan?.id === plan.id) {
      return setSelectedPlan(null)
    }

    setSelectedPlan(plan)
  }

  return (
    <>
      {/* <p className="p-2 bg-background rounded-md text-xs">
        {JSON.stringify(selectedPlan)}
      </p> */}
      <ul className="flex flex-col gap-[20px]">
        {initialPlans.map((plan) => (
          <ListItem key={plan.id} plan={plan} onSelect={handleSelect} />
        ))}
      </ul>
    </>
  )
}

export default List