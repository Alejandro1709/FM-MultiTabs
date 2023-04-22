import useSteps from "../hooks/useSteps";

type TabFooterProps = {
  isFixed?: boolean;
  hidesOnMobile?: boolean;
};

function TabFooter({ isFixed = false, hidesOnMobile = false }: TabFooterProps) {
  const { currentStep, handleChangeStep } = useSteps()

  return (
    <div className={`${isFixed ? 'md:hidden fixed bottom-0 bg-white p-6 w-full' : 'md:flex flex-row justify-between items-center'} ${hidesOnMobile ? 'hidden' : 'flex flex-row justify-between items-center'}`}>
      {currentStep > 1 ? <button type="button" onClick={() => handleChangeStep(currentStep - 1)}>Go Back</button> : null}
      <button type="button" className="bg-purple hover:bg-denim text-white w-fit rounded-md py-[8px] px-[10px] font-bold" onClick={() => handleChangeStep(currentStep + 1)}>Next Step</button>
    </div>
  )
}

export default TabFooter