import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] px-4 lg:px-14 sm:px-8">
        {children}
      </main>
    </>
  );
};

export default Layout;
