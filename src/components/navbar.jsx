import React from 'react';
import { Logo, LogoName } from '../assets/svgs/svg';

export default function Navbar() {
  return (
    <header>
      <nav className='flex flex-row rounded-[100px] border-[#E6EAE8] border-solid border-[5px] items-center justify-between lg:mx-[100px] lg:my-[60px] lg:px-[60px] py-[34px]'>
        <figure className='flex flex-row'>
          <Logo />
          <LogoName />
        </figure>
      </nav>
    </header>
  );
}
