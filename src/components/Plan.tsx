import Toggle from './Toggle'
import List from './List'

function Plan() {
  return (
    <div className='flex flex-col gap-[24px]'>
      <List />
      <Toggle />
    </div>
  )
}

export default Plan