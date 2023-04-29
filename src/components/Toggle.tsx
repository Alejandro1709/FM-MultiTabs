import useToggleStore from '../stores/toggleStore';

function Toggle() {
  const isMonthly = useToggleStore((state) => state.isMonthly);
  const setIsMonthly = useToggleStore((state) => state.setIsMonthly);

  return (
    <div className="flex items-center justify-center rounded-md bg-background p-4">
      <div className="flex flex-row items-center gap-[24px]">
        <button
          type="button"
          className={`${isMonthly ? 'font-medium text-denim' : 'font-medium text-grey'}`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <span className="w-16 rounded-full bg-denim p-2 text-white transition-all">
          <div className={`${isMonthly ? 'translate-x-0' : 'translate-x-6'} h-6 w-6 rounded-full bg-white`} />
        </span>
        <button
          type="button"
          className={`${isMonthly ? 'font-medium text-grey' : 'font-medium text-denim'}`}
          onClick={() => setIsMonthly(false)}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}

export default Toggle;
