import useToggleStore from '../stores/toggleStore';
import Checkbox from './Checkbox';
import type IPlan from '../types/plan';

type AddonProps = {
  addon: IPlan;
};

function Addon({ addon }: AddonProps) {
  const isMonthly = useToggleStore((state) => state.isMonthly);
  const formattedPrice = (addon: IPlan) => (isMonthly ? `+$${addon.monthlyPrice}/mo` : `+$${addon.yearlyPrice}/yr`);

  return (
    <li className="flex cursor-pointer gap-[20px] rounded-md border border-gray-300 bg-white p-[14px]">
      <Checkbox />
      <div className="flex flex-col gap-[2px]">
        <h2 className="text-lg font-bold text-denim">{addon.name}</h2>
        <p className="text-grey">{addon.description}</p>
      </div>
      <span className="ml-auto self-center text-purple">{formattedPrice(addon)}</span>
    </li>
  );
}

export default Addon;
