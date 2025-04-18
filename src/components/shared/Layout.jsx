import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <>
      <Navbar />
      <main className={`pt-[70px] ${!isContactPage ? "px-4 sm:px-8 lg:px-14" : "px-0"}`}>
        {children}
      </main>
    </>
  );
};

export default Layout;