import { useEffect, useState } from 'react';
import logo from '../../../asset/logo-headder2-01.png';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/about-us', label: 'ABOUT US' },
  { path: '/services', label: 'SERVICES' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contacts', label: 'CONTACTS' }
];

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={isSticky ? 'sticky' : ''}>
      <div className='flex justify-between items-center'>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className='flex gap-8 text-base font-bold text-[#242424] max-lg:hidden'>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
