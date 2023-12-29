import { useState, useEffect, useRef } from 'react';
import { Logo, LogoName } from '../assets/svgs/svg';
import { navLinks } from '../utils/data';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpened, setIsOpened] = useState(false);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const CloseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.756348 0.756348L17.3442 17.3442" stroke="white" strokeWidth="1.67563"></path>
      <path d="M0.756348 17.3442L17.3442 0.756342" stroke="white" strokeWidth="1.67563"></path>
    </svg>
  )

  return (
    <header className=''>

      <nav className='fixed top-10 lg:left-20 lg:right-20 left-8 right-8 z-50 flex rounded-[100px] bg-primary border-creos border-[5px] items-center justify-between p-3 '>
        <Link to='/'>
          <figure className='flex flex-row items-center'>
            <Logo className={`w-[36px] h-[24px] md:w-[80px] md:h-[54px]`} />
            <LogoName
              className={`w-[54px] h-[20px] lg:w-[120px] lg:h-[45px]`}
            />
          </figure>
        </Link>

        <ul className='items-center hidden md:gap-6 lg:gap-[60px] xl:flex'>
          {navLinks.map((route) => (
            <NavLink
              target={route?.external ? '_blank' : undefined}
              rel={route?.external ? 'noopener noreferrer' : undefined}
              key={route?.id}
              to={route?.path}
            >
              {({ isActive }) => (
                <h5
                  className={`relative transition-all duration-300 lg:text-lg lg:leading-[36px] text-xs before:content-['']  
                  font-sat before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 
                  ${isActive ? 'text-creos font-bold before:w-full'
                    : 'text-creos font-normal before:w-[0px] hover:before:w-full'
                    }`}
                >
                  {route?.route}
                </h5>
              )}
            </NavLink>
          ))}
        </ul>
        <div className='hidden xl:block'>
          <Link to='/community'>
            <Button
              type='button'
              className='border-none bg-creos hover:bg-light'
            >
              Join our community
            </Button>
          </Link>
        </div>

        {/* mobile navigation */}
        <div className='flex flex-row items-center gap-5 xl:hidden'>
          <div className='xl:hidden'>
            <div className=''>
              <button
                className='space-y-1.5 focus:outline-none focus:ring focus:ring-white/60 p-1 pb-1.5 rounded-md'
                onClick={() => setIsOpened(!isOpened)}
              >
                <div
                  className={`h-[3px] bg-white transition-all duration-300 ${isOpened
                    ? 'w-[24px] rotate-45 translate-y-[10px]'
                    : 'w-[24px] rotate-0 translate-x-0'
                    }`}
                />
                <div
                  className={`h-[3px] bg-white w-[24px] transition-all duration-300  ${isOpened ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <div
                  className={`h-[3px] bg-white self-end transition-all duration-300 ${isOpened
                    ? 'w-[24px] -rotate-45 -translate-y-[8px]'
                    : 'w-[24px]  rotate-0'
                    }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav className={`fixed bg-primary p-5 z-50 w-screen h-screen top-0 left-0 ${isOpened ? 'translate-x-[0] ' : 'translate-x-[-100vw]'}`}>
        <div className="flex justify-end w-full items-end px-10 mb-10">
          <div className="p-2 mt-10 -mr-2 cursor-pointer" onClick={() => setIsOpened(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-5 mb-10 w-full">
          {navLinks.map((route, i) => (
            <NavLink
              // href={route.path}
              to={route.path}
              onClick={()=> setIsOpened(false)}
              key={i}>
              {route.name}
              <h5 className={`text-xl hover:underline hover:text-creos underline-offset-4 cursor-pointer `}>
                {route?.route}
              </h5>
            </NavLink>
          ))}
        </div>
      </nav>


    </header>
  );
}
