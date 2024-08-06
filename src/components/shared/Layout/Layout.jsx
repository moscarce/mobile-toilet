// import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  return (
    <>
      <div className='w-[100%] h-6 bg-[#592c00]'></div>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
