import Container from "./components/Container"
import Layout from "./components/Layout"
import PersonalForm from "./components/PersonalForm"
import Plan from "./components/Plan"
import Sidebar from "./components/Sidebar"
import TabFooter from "./components/TabFooter"
import useSteps from "./hooks/useSteps"
import type IStep from "./types/step"

const stepsData: IStep[] = [
  {
    title: "Personal Info",
    subtitle: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
  }
]

function App() {
  const { currentStep } = useSteps()

  const renderStepHeader = (step: number) => {
    return (
      <header className="flex flex-col gap-[4px]">
        <h1 className="text-denim font-bold text-3xl">{stepsData[step].title}</h1>
        <p className="text-grey">{stepsData[step].subtitle}</p>
      </header>
    )
  };

  return (
    <Layout>
      <Container>
        <Sidebar />
        <section className="flex-1 md:pt-[40px] md:pb-[10px] z-20 -translate-y-20 md:translate-y-0">
          <article className="flex flex-col gap-[40px] max-w-[450px] mx-auto md:h-full md:shadow-none shadow-md bg-white rounded-lg md:py-0 md:px-0 py-[32px] px-[24px] md:rounded-none overflow-hidden">
            {currentStep === 1 ? renderStepHeader(0) : currentStep === 2 ? renderStepHeader(1) : null}
            <form className="flex flex-col justify-between h-full">
              {currentStep === 1 ? <PersonalForm /> : currentStep === 2 ? <Plan /> : null}
              <TabFooter hidesOnMobile />
            </form>
          </article>
        </section>
      </Container>
      <TabFooter isFixed />
    </Layout>
  )
}

export default App
