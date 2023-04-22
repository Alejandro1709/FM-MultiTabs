type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col md:flex-row md:bg-white md:p-[16px] md:shadow-md md:h-[620px] flex-1 md:max-w-[940px] md:rounded-xl">
      {children}
    </div>
  )
}

export default Container