import Addons from './components/Addons';
import Container from './components/Container';
import Layout from './components/Layout';
import PersonalForm from './components/PersonalForm';
import Plan from './components/Plan';
import Sidebar from './components/Sidebar';
import TabFooter from './components/TabFooter';
import stepsData from './data/steps';
import useStepStore from './stores/stepStore';

function App() {
  const currentStep = useStepStore((state) => state.currentStep);

  const renderStepHeader = (step: number) => {
    return (
      <header className="flex flex-col gap-[4px]">
        <h1 className="text-3xl font-bold text-denim">{stepsData[step].title}</h1>
        <p className="text-grey">{stepsData[step].subtitle}</p>
      </header>
    );
  };

  return (
    <Layout>
      <Container>
        <Sidebar />
        <section className="z-20 flex-1 -translate-y-20 md:translate-y-0 md:pb-[10px] md:pt-[40px]">
          <article className="mx-auto flex max-w-[450px] flex-col gap-[25px] rounded-lg bg-white px-[24px] py-[32px] shadow-md md:h-full md:rounded-none md:px-0 md:py-0 md:shadow-none">
            {currentStep === 1
              ? renderStepHeader(0)
              : currentStep === 2
              ? renderStepHeader(1)
              : currentStep === 3
              ? renderStepHeader(2)
              : null}
            <form className="flex h-full flex-col justify-between gap-4">
              {currentStep === 1 ? (
                <PersonalForm />
              ) : currentStep === 2 ? (
                <Plan />
              ) : currentStep === 3 ? (
                <Addons />
              ) : null}
              <TabFooter hidesOnMobile />
            </form>
          </article>
        </section>
      </Container>
      <TabFooter isFixed />
    </Layout>
  );
}

export default App;
