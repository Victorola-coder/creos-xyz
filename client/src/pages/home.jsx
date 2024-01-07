import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import BgToken from '../assets/images/bg-token.png';
import {
  Bloomberg,
  BussinessInsode,
  Crunch,
  Engadget,
  Forbes,
  Tech,
  TechCrunch,
  TheGuardian,
} from '../assets/svgs/svg';
import { Button, Container, SEO } from '../components';
import Box from '../components/box';
import Revolution from '../components/revolution';
import { imgSlider } from '../utils/data';
import { H2, SubTitle, Title } from '../utils/typography';

export default function Home() {
  return (
    <>
      <SEO title='Welcome to CreosXYZ' />
      <main>
        {/* <Hero /> */}
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
        {/* <Slider /> */}
        <div className='m-5 lg:m-[70px]'>
          <Marquee className='space-x-3' speed={100} pauseOnHover>
            <section className='my-5'>
              <div className='flex flex-row gap-[28px] mx-4'>
                {imgSlider.map((img, index) => (
                  <figure
                    key={index}
                    className='outline-[#E6EAE8] w-[52px] lg:w-[100px] outline-[4px] lg:outline-[8px] outline rounded-[12px] lg:rounded-[26px] hover:scale-105'
                  >
                    <img
                      key={img.id}
                      alt={img.alt}
                      src={img.src}
                      className='object-cover w-fit rounded-[12px] lg:rounded-[26px]'
                      loading='lazy'
                      draggable='false'
                      decoding='async'
                      fetchpriority='high'
                      referrerPolicy='no-referrer'
                    />
                  </figure>
                ))}
              </div>
            </section>
          </Marquee>
        </div>
        {/* <Partner /> */}
        <section className='bg-[#E6EAE8] px-5 py-[32px] lg:py-[100px] lg:px-[100px] lg:mb-[100px] flex flex-col items-center gap-4 lg:gap-10'>
          <H2 className={`text-dark `}>Media Partners</H2>
          <div className='hidden md:flex flex-row flex-wrap lg:flex-nowrap items-start justify-around md:gap-[40px] lg:gap-[60px]'>
            <figure>
              <Bloomberg className={'w-40'}/>
            </figure>
            <figure>
              <BussinessInsode className={'w-40'}/>
            </figure>
            <figure>
              <TechCrunch className={'w-40'}/>
            </figure>
            <figure>
              <Forbes className={'w-40'}/>
            </figure>
            <figure>
              <TheGuardian className={'w-40'}/>
            </figure>

            <figure>
              <Engadget className={'w-40'}/>
            </figure>
          </div>
          {/* mobile screen */}
          <div className='md:hidden flex flex-col gap-6 items-center justify-around'>
            <figure>
              <Bloomberg className={`w-[157px]`} />
            </figure>
            <div className='flex flex-row gap-5'>
              <figure className='flex flex-row items-center'>
                <Tech className={`w-1/2`} />
                <Crunch className={`w-1/2`} />
              </figure>
              <figure>
                <BussinessInsode className={`w-[111px]`} />
              </figure>
            </div>
            <div className='flex flex-row items-center gap-5'>
              <figure>
                <Forbes className={`w-[101px]`} />
              </figure>
              <figure>
                <TheGuardian className={`w-[107px]`} />
              </figure>
            </div>

            <figure>
              <Engadget />
            </figure>
          </div>
        </section>
        {/* <Haven /> */}
        <Container>
          <section className='bg-[#E6EAE8] rounded-[20px] lg:rounded-[100px] px-[20px] py-[20px] lg:px-[100px] lg:py-[120px]'>
            <h2 className='text-primary text-base font-normal  lg:text-2xl mb-2'>
              Creators' Haven
            </h2>
            <h1
              className={`text-dark mb-6 text-2xl lg:text-4xl leading-[36px] lg:leading-[72px] font-bold`}>
              At Creos, we believe in the extraordinary power of dreams. They are
              the seeds from which innovations sprout, and at Creos, we provide
              the fertile ground for those seeds to grow.
            </h1>
            <p className='text-black leading-[28px] lg:leading-[57px] lg:text-2xl mb-6'>
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

          <section className='mt-20 mx-10'>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center">
              <img src={BgToken} className='lg:w-[600px]' alt="" />
              <div className='lg:mt-20'>
                <div className={'text-creos text-3xl lg:text-4xl mb-10 font-bold'}>Explore the Future with Creos XYZ Token ($CXYZ)</div>
                <div className="mb-10">
                  <SubTitle className={'text-xl'}>
                    Anticipation is building as we prepare to introduce the Creos XYZ Token ($CXYZ) to the crypto community! As we gear up for the grand launch,
                    we invite you to join us on this exciting journey into the next era of decentralized finance.
                  </SubTitle>

                </div>
                <Link to={'https://airdrop.creosxyz.com/'}>
                  <Button className={'bg-creos border-none mb-10'}>Learn more</Button>
                </Link>
              </div>
            </div>
          </section>
        </Container>
        {/* <Innovation /> */}
        <section className='bg-[#E6EAE8] text-center md:text-left'>
          <Box>
            <section className='flex items-center lg:flex-row flex-col justify-center gap-10'>
              <div className=''>
                <h1 className='text-dark lg:max-w-[570px] text-[32px] lg:text-[48px] font-extrabold'>
                  Where Innovation Finds Its Voice
                </h1>
                <p className='lg:text-2xl lg:max-w-[728px] py-[29px] leading-[28px] lg:leading-[43px] text-black'>
                  In the heart of Creos, innovation finds its voice. Our
                  collaborative ecosystem fosters an environment where ideas are
                  shared, refined, and transformed into disruptive technologies.
                  <br /> <br />
                  It's a place where passionate discussions echo through the
                  halls, where expertise is respected, and where diverse
                  perspectives converge to create solutions that challenge the
                  norms.
                </p>
                <Button className='bg-primary text-white !w-[312px] border-primary-faded'>
                  Join our community
                </Button>
              </div>
              <figure className='flex gap-[25px] items-center row-start-1 lg:col-start-2'>
                <div className='flex flex-col gap-[25px]'>
                  <img
                    src='/images/innovation-img-1.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                  <img
                    src='/images/innovation-img-2.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                  <img
                    src='/images/innovation-img-3.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                </div>
                <div className='flex flex-col gap-[25px] mb-[89px]'>
                  <img
                    src='/images/innovation-img-4.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                  <img
                    src='/images/innovation-img-5.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                  <img
                    src='/images/innovation-img-6.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                </div>
                <div className='flex flex-col gap-[25px]'>
                  <img
                    src='/images/innovation-img-7.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                  <img
                    src='/images/innovation-img-8.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                  <img
                    src='/images/innovation-img-9.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                </div>
                <div className='flex flex-col gap-[25px]'>
                  <img
                    src='/images/innovation-img-10.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                  <img
                    src='/images/innovation-img-11.svg'
                    draggable={false}
                    className='object-cover w-fit hover:scale-95'
                    alt='Innovation'
                  />
                </div>
              </figure>
            </section>
          </Box>
        </section>

        {/* Community */}
        <Container>
          <div className='grid place-items-center gap-[24px] w-full max-w-[1163px] mx-auto text-center'>
            <h1 className='text-[32px] font-black lg:text-[48p lg:leading-[72px] text-white'>
              A Community of Fearless Disruptors
            </h1>
            <p className='text-primary-faded lg:text-[28px] leading-[28px] lg:leading-[50px]'>
              Creos is more than a network; it's a community of fearless
              disruptors. We are pioneers, risk-takers, and forward-thinkers.
              Together, we dismantle traditional boundaries, pushing the envelope of
              what is possible.
            </p>
          </div>
        </Container>

        {/* <Purpose /> */}
        <section className='bg-[#E6EAE8]'>
          <Box>
            <div className='w-full max-w-[1123px] mx-auto border-b-[#d8d8d8] border-b-[1px] pb-[20px] lg:pb-[50px]'>
              <div className='grid place-items-center gap-[20px] w-full max-w-[915px] mx-auto text-center'>
                <h2 className='font-medium text-primary lg:text-xl leading-[24px] lg:leading-[30px]'>
                  Guided by Purpose, Driven by Impact
                </h2>
                <h1 className='text-[28px] max-w-[915px] lg:text-[36px] leading-[42px] lg:leading-[54px] text-[#000F0A] font-medium'>
                  While we celebrate disruptive technologies, we are equally focused
                  on their impact. At Creos, purpose guides our innovations.
                </h1>
              </div>
            </div>
            <div className='w-full max-w-[1123px] mx-auto border-b-[#d8d8d8] pt-[20px] lg:pt-[50px]'>
              <div className='grid place-items-center gap-[20px] w-full max-w-[915px] mx-auto text-center'>
                <h1 className='text-xl lg:text-2xl leading-[30px] lg:leading-[43px] text-[#000F0A]'>
                  We challenge our members to consider not just the
                  'what' but also the 'why.' How does your
                  innovation make the world safer? How does it contribute to
                  sustainability? These questions fuel our creativity, ensuring that
                  every disruption we create serves a purpose greater than itself.
                </h1>
              </div>
            </div>
          </Box>
        </section>
        <Revolution />
      </main>
    </>
  );
}
