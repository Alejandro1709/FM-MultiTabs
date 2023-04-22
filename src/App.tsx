import Container from "./components/Container"
import Layout from "./components/Layout"
import PersonalForm from "./components/PersonalForm"
import Sidebar from "./components/Sidebar"
import StepShow from "./components/StepShow"
import TabFooter from "./components/TabFooter"
import useSteps from "./hooks/useSteps"

function App() {
  const { currentStep } = useSteps()
  return (
    <Layout>
      <Container>
        <Sidebar />
        <section className="flex-1 md:pt-[40px] md:pb-[10px] z-20 -translate-y-20 md:translate-y-0">
          <StepShow>
            {currentStep === 1 && <PersonalForm />}
          </StepShow>
        </section>
      </Container>
      <TabFooter isFixed />
    </Layout>
  )
}

export default App
