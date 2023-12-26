import React from 'react';
import { H3, SubTitle, Title } from '../../utils/typography';
import { Button, Container } from '../../components';
import BgToken from '../../assets/images/bg-token.png';

export default function CreatorsHaven() {
  return (
    <>
      <Container>
        <section className='bg-[#E6EAE8] rounded-[20px] lg:rounded-[100px] flex flex-col items-start px-[20px] py-[20px] lg:px-[100px] lg:py-[120px]'>
          <h2 className='!text-left !self-start text-primary text-base font-normal lg:leading-[48px] lg:text-[32px] mb-2'>
            Creators' Haven
          </h2>
          <h1
            className={`text-[#222222] mb-6 text-[24px] lg:text-[48px] leading-[36px] lg:leading-[72px] font-bold lg:max-w-[1288px]`}
          >
            At Creos, we believe in the extraordinary power of dreams. They are
            the seeds from which innovations sprout, and at Creos, we provide
            the fertile ground for those seeds to grow.
          </h1>
          <p className='text-black leading-[28px] lg:max-w-[1288px] lg:leading-[57px] lg:text-[32px] mb-6'>
            Our community is not just a meeting place; it's a launchpad
            where dreams take flight, and disruptions become reality.
          </p>
          <img
            draggable={false}
            className='object-cover'
            src='/images/team.svg'
            alt='team_ilustration might be here'
          />
        </section>

        <section className='mt-10 mx-10'>
          <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-center">
            <img src={BgToken} className='lg:h-[500px]' alt="" />
            <div>
              <div className={'text-creos text-3xl lg:text-5xl mb-10 font-bold'} >Explore the Future with Creos XYZ Token ($CXYZ)</div>
              <div className=" mb-10">
                <SubTitle>
                  Anticipation is building as we prepare to introduce the Creos XYZ Token ($CXYZ) to the crypto community! As we gear up for the grand launch,
                  we invite you to join us on this exciting journey into the next era of decentralized finance.
                </SubTitle>

              </div>
              <Button className={'bg-creos border-none mb-10'}>Learn more</Button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
