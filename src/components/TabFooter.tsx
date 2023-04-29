import useStepStore from '../stores/stepStore';

type TabFooterProps = {
  isFixed?: boolean;
  hidesOnMobile?: boolean;
};

function TabFooter({ isFixed = false, hidesOnMobile = false }: TabFooterProps) {
  const currentStep = useStepStore((state) => state.currentStep);
  const handleChangeStep = useStepStore((state) => state.handleChangeStep);

  return (
    <div
      className={`${
        isFixed ? 'fixed bottom-0 w-full bg-white p-6 md:hidden' : 'flex-row items-center justify-between md:flex'
      } ${hidesOnMobile ? 'hidden' : 'flex flex-row items-center justify-between'}`}
    >
      {currentStep > 1 ? (
        <button type="button" onClick={() => handleChangeStep(currentStep - 1)}>
          Go Back
        </button>
      ) : null}
      {currentStep === 4 ? (
        <button
          type="button"
          className="w-fit rounded-md bg-purple px-[10px] py-[8px] font-bold text-white hover:bg-denim"
        >
          Confirm
        </button>
      ) : (
        <button
          type="button"
          className="w-fit rounded-md bg-purple px-[10px] py-[8px] font-bold text-white hover:bg-denim"
          onClick={() => handleChangeStep(currentStep + 1)}
        >
          Next Step
        </button>
      )}
    </div>
  );
}

export default TabFooter;
