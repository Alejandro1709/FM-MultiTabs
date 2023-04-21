import Sidebar from "./components/Sidebar"

function App() {
  return (
    <main className="flex md:justify-center md:items-center min-h-screen bg-background">
      <div className="flex flex-col md:flex-row bg-white md:p-[16px] md:shadow-md md:h-[600px] flex-1 md:max-w-[940px] md:rounded-xl">
        <Sidebar />
        <section className="flex items-start flex-1">
          <article className="max-w-[450px] mx-auto bg-orange">
            SECTION
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
