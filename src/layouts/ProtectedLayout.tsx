const ProtectedLayout = ({ children }: { children: JSX.Element }) => (
  <>
    <div>Navbar</div>
    <div>Sidebar</div>
    {children}
  </>
);

export default ProtectedLayout;
