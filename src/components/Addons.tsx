import addons from '../data/addons';
import Toggle from './Toggle';
import Addon from './Addon';

function Addons() {
  return (
    <div className="flex flex-col gap-[24px]">
      <ul className="flex flex-col gap-[20px]">
        {addons.map((addon) => (
          <Addon key={addon.id} addon={addon} />
        ))}
      </ul>
      <Toggle />
    </div>
  );
}

export default Addons;
