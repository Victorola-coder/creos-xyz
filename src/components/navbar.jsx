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
      <nav className='fixe flex flex-row rounded-[100px] border-[#E6EAE8] border-solid border-[5px] items-center justify-between gap-[200px] lg:mx-[100px] my-[20px] px-[20px] py-[18px] md:py-[10px] lg:my-[60px] lg:px-[60px] lg:py-[30px]'>
        <Link to='/'>
          <figure className='flex flex-row items-center'>
            <Logo className={`w-[36px] h-[24px] md:w-[80px] md:h-[54px]`} />
            <LogoName
              className={`w-[54px] h-[20px] lg:w-[120px] lg:h-[45px]`}
            />
          </figure>
        </Link>

        <ul className='items-center hidden md:gap-6 lg:gap-[60px] lg:flex'>
          {navLinks.map((route) => (
            <NavLink
              target={route?.external ? '_blank' : undefined}
              rel={route?.external ? 'noopener noreferrer' : undefined}
              key={route?.id}
              to={route?.path}
            >
              {({ isActive }) => (
                <h5
                  className={`lg:text-base text-xs font-medium before:content-[''] before:bg-creos font-sat before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 ${
                    isActive
                      ? 'text-creos/70 font-bold before:w-full'
                      : 'text-[#E6EAE8] before:w-[0px] hover:before:w-full'
                  } relative`}
                >
                  {route?.route}
                </h5>
              )}
            </NavLink>
          ))}
        </ul>
        <div className='hidden md:block'>
          <Button type='button' className='bg-[#E6EAE8] hover:bg-[#D9DFDD] '>
            Join our community
          </Button>
        </div>

        {/* mobile navigation */}
        <div className='flex flex-row items-center gap-5 md:hidden'>
          <div className='md:hidden'>
            <div className=''>
              <button
                className='space-y-1.5 focus:outline-none focus:ring focus:ring-white/60 p-1 pb-1.5 rounded-md'
                onClick={() => setIsOpened(!isOpened)}
              >
                <div
                  className={`h-[3px] bg-white transition-all duration-300 ${
                    isOpened
                      ? 'w-7 rotate-45 translate-y-[10px]'
                      : 'w-7 rotate-0 translate-x-0'
                  }`}
                />
                <div
                  className={`h-[3px] bg-white w-7 transition-all duration-300  ${
                    isOpened ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <div
                  className={`h-[3px] bg-white self-end transition-all duration-300 ${
                    isOpened
                      ? 'w-7 -rotate-45 -translate-y-[8px]'
                      : 'w-7  rotate-0'
                  }`}
                />
              </button>
              <div>
                <div
                  ref={navRef}
                  className={`z-[100] min-h-[100%] w-full absolute bg-[#012b1d] rounded-[8px] py-[28px] block px-[30px] mt-[90px] md:hidden transition-all duration-300 ${
                    isOpened ? '-translate-y-[50px]' : '-translate-y-[200%]'
                  } pt-4 left-0 right-0`}
                >
                  <div className='px-3 mx-auto'>
                    <ul className='flex flex-col items-start space-y-[10px] '>
                      {navLinks?.map((route) => (
                        <li key={route.id}>
                          <NavLink to={route?.path}>
                            {({ isActive }) => (
                              <div
                                onClick={() => setIsOpened(false)}
                                className='flex items-center gap-1.5 group'
                              >
                                <div
                                  className={`bg-creos/60 w-1 rounded-full hidden transition-all duration-300  ${
                                    isActive ? 'h-6' : 'group-hover:h-6 h-1'
                                  }`}
                                />
                                <p
                                  className={`rounded-md p-2 font-medium leading-[30px] tracking-[0.5px] text-[18px] text-[#E6EAE8] transition-all duration-300 w-full max-w-md ${
                                    isActive
                                      ? 'bg-white/20s hover:bg-white/20'
                                      : 'hover:bg-white/20'
                                  }`}
                                >
                                  {route?.route}
                                </p>
                              </div>
                            )}
                          </NavLink>
                        </li>
                      ))}
                    </ul>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
