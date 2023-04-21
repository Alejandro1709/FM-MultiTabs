type TabProps = {
  step: number;
  title: string;
  active?: boolean;
  onClick?: () => void;
};

function Tab({ step, title, active = false, onClick }: TabProps) {
  return (
    <li className="flex items-center self-start gap-[20px] uppercase cursor-pointer" onClick={onClick}>
      <span className={`grid place-content-center font-bold ${active ? 'bg-skyBlue text-denim' : 'text-white bg-transparent border-2 border-white'} h-12 w-12 rounded-full`}>{step}</span>
      <div className="text-base/6">
        <h3 className="text-skyBlue font-thin text-sm">Step {step}</h3>
        <h2 className="font-bold text-white">{title}</h2>
      </div>
    </li>
  )
}

export default Tab