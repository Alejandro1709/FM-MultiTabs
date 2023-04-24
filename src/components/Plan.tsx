import Toggle from './Toggle'
import List from './List'
import plans from '../data/plans'

function Plan() {
  return (
    <div className='flex flex-col gap-[24px]'>
      <List plans={plans} />
      <Toggle />
    </div>
  )
}

export default Plan