import Tabs from './Tabs';

function Sidebar() {
  return (
    <aside className="h-[172px] bg-hero-mob bg-cover bg-center bg-no-repeat md:h-full md:w-[274px] md:rounded-md md:bg-hero-desk">
      <Tabs />
    </aside>
  );
}

export default Sidebar;
