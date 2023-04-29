type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-1 flex-col md:h-[620px] md:max-w-[940px] md:flex-row md:rounded-xl md:bg-white md:p-[16px] md:shadow-md">
      {children}
    </div>
  );
}

export default Container;
