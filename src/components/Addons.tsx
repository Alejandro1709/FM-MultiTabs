import { useAddOnStore } from '../stores/addOnStore';
import Toggle from './Toggle';
import Addon from './Addon';
import type IPlan from '../types/plan';

function Addons() {
  const addOns = useAddOnStore((state) => state.addOns);
  const toggleAddOn = useAddOnStore((state) => state.toggleAddOn);

  const handleSelect = (addOnId: number) => {
    const addOn: IPlan | undefined = addOns.find((addOn) => addOn.id === addOnId);

    if (!addOn) return;

    toggleAddOn(addOn);
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <ul className="flex flex-col gap-[20px]">
        {addOns.map((addon) => (
          <Addon key={addon.id} addon={addon} onSelect={handleSelect} activeAddOn={addon.active || false} />
        ))}
      </ul>
      <Toggle />
    </div>
  );
}

export default Addons;
