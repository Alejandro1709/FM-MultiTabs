import Tab from "./Tab"
import useSteps from "../hooks/useSteps";

type TabsProps = {
  hidesOnMobile?: boolean;
};

function Tabs({ hidesOnMobile = false }: TabsProps) {
  const { currentStep, handleChangeStep } = useSteps()

  return (
    <ul className={`flex md:flex-col flex-row gap-[16px] justify-center  md:gap-[32px] md:ml-[32px] mt-[25px] md:mt-[40px] transition-all ${hidesOnMobile ? 'hidden' : 'flex'}`} role="navigation">
      <Tab title="Your info" step={1} active={currentStep === 1} onClick={() => handleChangeStep(1)} />
      <Tab title="Select plan" step={2} active={currentStep === 2} onClick={() => handleChangeStep(2)} />
      <Tab title="Add-ons" step={3} active={currentStep === 3} onClick={() => handleChangeStep(3)} />
      <Tab title="Summary" step={4} active={currentStep === 4} onClick={() => handleChangeStep(4)} />
    </ul>
  )
}

export default Tabs