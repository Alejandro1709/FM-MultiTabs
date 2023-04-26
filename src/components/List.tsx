import ListItem from "./ListItem";
import usePlanStore from "../stores/planStore";
import type IPlan from "../types/plan";

function List() {
  const plans = usePlanStore(state => state.plans)
  const selectedPlan = usePlanStore(state => state.selectedPlan)
  const setSelectedPlan = usePlanStore(state => state.setSelectedPlan)
  const resetSelectedPlan = usePlanStore(state => state.resetSelectedPlan)

  const handleSelect = (planId: number) => {
    const plan: IPlan | undefined = plans.find((plan) => plan.id === planId)

    if (!plan) return

    // check if plan is already selected
    if (selectedPlan?.id === plan.id) {
      return resetSelectedPlan()
    }

    setSelectedPlan(plan)
  }

  return (
    <>
      {/* <p className="p-2 bg-background rounded-md text-xs">
        {JSON.stringify(selectedPlan)}
      </p> */}
      <ul className="flex flex-col gap-[20px]">
        {plans.map((plan) => (
          <ListItem key={plan.id} plan={plan} onSelect={handleSelect} />
        ))}
      </ul>
    </>
  )
}

export default List