type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <main className="relative flex md:justify-center md:items-center min-h-screen bg-background">
      {children}
    </main>
  )
}

export default Layout