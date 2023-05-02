import CheckIcon from './CheckIcon';

type CheckboxProps = {
  active: boolean;
};

function Checkbox({ active }: CheckboxProps) {
  return (
    <div className={`h-[20px] w-[20px] flex-shrink-0 self-center rounded-md ${active ? "bg-purple" : "bg-white border"}`}>
      <CheckIcon />
    </div>
  );
}

export default Checkbox;
