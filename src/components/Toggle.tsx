function Toggle() {
  return (
    <div className='flex justify-center items-center bg-background p-4 rounded-md'>
      <div className='flex flex-row items-center gap-[24px]'>
        <button type="button" className="text-denim font-medium">Monthly</button>
        <span className='bg-denim text-white rounded-full w-16 p-2'>
          <div className="h-6 w-6 bg-white rounded-full translate-x-6" />
        </span>
        <button type="button" className="text-grey font-medium">Yearly</button>
      </div>
    </div>
  )
}

export default Toggle