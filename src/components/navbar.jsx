import { useState, useEffect, useRef } from 'react';
import { Logo, LogoName } from '../assets/svgs/svg';
import { navLinks } from '../data/data';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClicks(e) {
      if (navRef.current?.contains(e.target)) {
        console.log('clicked');
        return;
      }
      setIsOpened(false);
    }
    window.addEventListener('mousedown', handleClicks);
    return () => {
      window.removeEventListener('mousedown', handleClicks);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <nav className='flex flex-row rounded-[100px] border-[#E6EAE8] border-solid border-[5px] items-center justify-between lg:mx-[100px] lg:my-[60px] lg:px-[60px] py-[34px]'>
        <Link to='/'>
          <figure className='flex flex-row'>
            <Logo />
            <LogoName />
          </figure>
        </Link>

        <ul className='items-center hidden md:gap-6 lg:gap-[60px] lg:flex'>
          {navLinks.map((route) => (
            <NavLink
              target={route.external ? '_blank' : undefined}
              rel={route.external ? 'noopener noreferrer' : undefined}
              key={route.id}
              to={route.path}
            >
              {({ isActive }) => (
                <div
                  className={`lg:text-base text-xs font-medium before:content-[''] before:bg-creos font-sat before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 ${
                    isActive
                      ? 'text-creos/70 font-bold before:w-full'
                      : 'text-[#E6EAE8] before:w-[0px] hover:before:w-full'
                  } relative`}
                >
                  {route.route}
                </div>
              )}
            </NavLink>
          ))}
        </ul>
        <Button type='button' className='bg-[#E6EAE8] hover:bg-[#D9DFDD] '>
          Join our community
        </Button>
      </nav>
    </header>
  );
}
