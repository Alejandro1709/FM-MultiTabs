function App() {
  return (
    <main className="flex md:justify-center md:items-center min-h-screen bg-background">
      <div className="flex flex-col md:flex-row bg-white md:p-[16px] md:shadow-md md:h-[600px] flex-1 md:max-w-[940px] md:rounded-xl">
        <aside className="md:w-[274px] h-[172px] md:h-full bg-lightBlue md:rounded-md">ASIDE</aside>
        <section className="flex items-start flex-1 bg-pink">
          <article className="max-w-[450px] mx-auto bg-white">
            SECTION
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
