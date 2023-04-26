import useToggleStore from "../stores/toggleStore"

function Toggle() {
  const isMonthly = useToggleStore(state => state.isMonthly)
  const setIsMonthly = useToggleStore(state => state.setIsMonthly)

  return (
    <div className='flex justify-center items-center bg-background p-4 rounded-md'>
      <div className='flex flex-row items-center gap-[24px]'>
        <button type="button" className={`${isMonthly ? "text-denim font-medium" : "text-grey font-medium"}`} onClick={() => setIsMonthly(true)}>Monthly</button>
        <span className='bg-denim text-white rounded-full w-16 p-2 transition-all'>
          <div className={`${isMonthly ? "translate-x-0" : "translate-x-6"} h-6 w-6 bg-white rounded-full`} />
        </span>
        <button type="button" className={`${isMonthly ? "text-grey font-medium" : "text-denim font-medium"}`} onClick={() => setIsMonthly(false)}>Yearly</button>
      </div>
    </div>
  )
}

export default Toggle