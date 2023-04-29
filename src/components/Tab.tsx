type TabProps = {
  step: number;
  title: string;
  active?: boolean;
  onClick?: () => void;
};

function Tab({ step, title, active = false, onClick }: TabProps) {
  return (
    <li className="flex cursor-pointer items-center gap-[20px] self-start uppercase" onClick={onClick}>
      <span
        className={`grid place-content-center font-bold ${
          active ? 'bg-skyBlue text-denim' : 'border-2 border-white bg-transparent text-white'
        } h-12 w-12 rounded-full`}
      >
        {step}
      </span>
      <div className="hidden text-base/6 md:block">
        <h3 className="text-sm font-thin text-skyBlue">Step {step}</h3>
        <h2 className="font-bold text-white">{title}</h2>
      </div>
    </li>
  );
}

export default Tab;
