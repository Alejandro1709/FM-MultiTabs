import TabFooter from "./TabFooter"

type StepShowProps = {
  children: React.ReactNode;
};

function StepShow({ children }: StepShowProps) {
  return (
    <article className="flex flex-col gap-[40px] max-w-[450px] mx-auto md:h-full md:shadow-none shadow-md bg-white rounded-lg md:py-0 md:px-0 py-[32px] px-[24px] md:rounded-none overflow-hidden">
      <header className="flex flex-col gap-[4px]">
        <h1 className="text-denim font-bold text-3xl">Personal Info</h1>
        <p className="text-grey">Please provide your name, email address, and phone number.</p>
      </header>
      <form className="flex flex-col justify-between h-full">
        {children}
        <TabFooter hidesOnMobile />
      </form>
    </article>
  )
}

export default StepShow