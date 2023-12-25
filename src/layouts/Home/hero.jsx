import React from 'react';
import { Button, Container } from '../../components';
import { H1, P, SubTitle, Title } from '../../utils/typography';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='lg:mx-20 mx-10'>
      <section className='flex flex-col items-center mx-auto'>
        <Title small>The Future WorkForce</Title>
        <Title leading className={'lg:w-3/5'}>Where dreams intersect disruptive innovations</Title>
        <SubTitle className='mt-8 mb-4'>
          At Creos we embrace and foster the combined power of creativity in
          disruptive technologies. At Creos, dreams transcend boundaries and
          innovation redefine realities.
        </SubTitle>
        <Link to='/community'>
          <Button
            className={`text-primary !border-[4px] !border-[#DEB78C] lg:!w-[286px]  !bg-creos `}
          >
            Join our community
          </Button>
        </Link>
      </section>
    </div>
  );
}
