import Tab from './Tab';
import useStepStore from '../stores/stepStore';

type TabsProps = {
  hidesOnMobile?: boolean;
};

function Tabs({ hidesOnMobile = false }: TabsProps) {
  const currentStep = useStepStore((state) => state.currentStep);
  const handleChangeStep = useStepStore((state) => state.handleChangeStep);

  return (
    <ul
      className={`mt-[25px] flex flex-row justify-center gap-[16px]  transition-all md:ml-[32px] md:mt-[40px] md:flex-col md:gap-[32px] ${
        hidesOnMobile ? 'hidden' : 'flex'
      }`}
      role="navigation"
    >
      <Tab title="Your info" step={1} active={currentStep === 1} onClick={() => handleChangeStep(1)} />
      <Tab title="Select plan" step={2} active={currentStep === 2} onClick={() => handleChangeStep(2)} />
      <Tab title="Add-ons" step={3} active={currentStep === 3} onClick={() => handleChangeStep(3)} />
      <Tab title="Summary" step={4} active={currentStep === 4} onClick={() => handleChangeStep(4)} />
    </ul>
  );
}

export default Tabs;
