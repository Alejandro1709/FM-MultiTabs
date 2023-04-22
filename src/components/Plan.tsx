import Game from '/icon-arcade.svg'

function Plan() {
  return (
    <div className='flex flex-col gap-[24px]'>
      <ul className="flex flex-col gap-[20px]">
        <li className="flex gap-[14px] p-[14px] border border-purple rounded-md bg-background cursor-pointer">
          <img src={Game} alt="Game icon" draggable={false} />
          <div className="flex flex-col gap-[2px]">
            <h2 className="text-denim font-bold text-lg">Arcade</h2>
            <p className="text-grey">$9/mo</p>
          </div>
        </li>
        <li className="flex gap-[14px] p-[14px] border border-purple rounded-md bg-background cursor-pointer">
          <img src={Game} alt="Game icon" draggable={false} />
          <div className="flex flex-col gap-[2px]">
            <h2 className="text-denim font-bold text-lg">Arcade</h2>
            <p className="text-grey">$9/mo</p>
          </div>
        </li>
        <li className="flex gap-[14px] p-[14px] border border-purple rounded-md bg-background cursor-pointer">
          <img src={Game} alt="Game icon" draggable={false} />
          <div className="flex flex-col gap-[2px]">
            <h2 className="text-denim font-bold text-lg">Arcade</h2>
            <p className="text-grey">$9/mo</p>
          </div>
        </li>
      </ul>
      <div className='flex justify-center items-center bg-background p-4 rounded-md'>
        <div className='flex flex-row items-center gap-[24px]'>
          <button className='text-denim font-medium'>Monthly</button>
          <button className='bg-purple text-white rounded-full p-2'>Toggle</button>
          <button className='text-grey font-medium'>Yearly</button>
        </div>
      </div>
    </div>
  )
}

export default Plan