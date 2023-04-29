type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <main className="relative flex min-h-screen bg-background md:items-center md:justify-center">{children}</main>;
}

export default Layout;
