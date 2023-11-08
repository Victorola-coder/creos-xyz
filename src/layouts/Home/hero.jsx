import React from 'react';
import { Button, Container } from '../../components';
import { H1, P } from '../../utils/typography';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Container>
      <section className='flex flex-col items-center mx-auto'>
        <P
          className={`text-[#D9DFDD] !text-base leading-[24px] lg:!text-[32px] font-normal lg:leading-[48px]`}
        >
          The Future WorkForce
        </P>
        <H1
          className={`text-[#D9DFDD] font-black text-center !text-[32px] leading-[48px] max-w-[353px] md:max-w-lg w-full lg:!text-[72px] lg:leading-[108px] lg:max-w-[869px]`}
        >
          Where dreams intersect disruptive innovations
        </H1>
        <h5 className='text-[#B0BDB9] max-w-[353px] text-center text-[20px] leading-[36px] md:max-w-xl lg:max-w-[1258px] lg:leading-[57.6px] lg:text-[32px] my-5'>
          At Creos we embrace and foster the combined power of creativity in
          disruptive technologies. At Creos, dreams transcend boundaries and
          innovation redefine realities.
        </h5>
        <Link to='/community'>
          <Button
            className={`text-[#012B1D] !border-[4px] !border-[#DEB78C] lg:!w-[286px]  !bg-[#F7CB9C] `}
          >
            Join our community
          </Button>
        </Link>
      </section>
    </Container>
  );
}
