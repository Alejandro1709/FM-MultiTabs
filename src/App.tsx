import Sidebar from "./components/Sidebar"
import TabFooter from "./components/TabFooter"

function App() {
  return (
    <main className="relative flex md:justify-center md:items-center min-h-screen bg-background">
      <div className="flex flex-col md:flex-row md:bg-white md:p-[16px] md:shadow-md md:h-[600px] flex-1 md:max-w-[940px] md:rounded-xl">
        <Sidebar />
        <section className="flex-1 md:pt-[40px] md:pb-[10px] z-20 -translate-y-20 md:translate-y-0">
          <article className="flex flex-col gap-[40px] max-w-[450px] mx-auto md:h-full md:shadow-none shadow-md bg-white rounded-lg md:py-0 md:px-0 py-[32px] px-[24px] md:rounded-none overflow-hidden">
            <header className="flex flex-col gap-[4px]">
              <h1 className="text-denim font-bold text-3xl">Personal Info</h1>
              <p className="text-grey">Please provide your name, email address, and phone number.</p>
            </header>
            <form className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-denim font-bold text-sm">Name</label>
                  <input type="text" id="name" className="border border-border font-medium text-denim outline-purple rounded-md p-[8px]" placeholder="Your name goes here..." />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-denim font-bold text-sm">Email Address</label>
                  <input type="text" id="email" className="border border-border font-medium text-denim outline-purple rounded-md p-[8px]" placeholder="Your email goes here..." />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-denim font-bold text-sm">Phone Number</label>
                  <input type="text" id="phone" className="border border-border font-medium text-denim outline-purple rounded-md p-[8px]" placeholder="e.g. +1 234 567 890" />
                </div>
              </div>
              <TabFooter hidesOnMobile />
            </form>
          </article>
        </section>
      </div>
      <TabFooter isFixed />
    </main>
  )
}

export default App
