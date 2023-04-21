type TabFooterProps = {
  isFixed?: boolean;
  hidesOnMobile?: boolean;
};

function TabFooter({ isFixed = false, hidesOnMobile = false }: TabFooterProps) {
  return (
    <div className={`${isFixed ? 'md:hidden fixed bottom-0 bg-white p-6 w-full' : 'md:flex flex-row justify-between items-center'} ${hidesOnMobile ? 'hidden' : 'flex flex-row justify-between items-center'}`}>
      <button>Go Back</button>
      <button className="bg-purple hover:bg-denim text-white w-fit rounded-md py-[8px] px-[10px] font-bold">Next Step</button>
    </div>
  )
}

export default TabFooter