import { Link } from 'react-router-dom';
import { H3, H1, Text, P } from '../utils/typography';
import { Button, Container } from './';
import {
  DiscordLogo,
  FbLogo,
  GhLogo,
  IgLogo,
  LinkedInIcon,
  ThreadIcon,
  TwLogo,
} from '../assets/svgs/svg';
import { company, events, legal, products, resources } from '../data/data';

export default function Footer() {
  return (
    <footer className='lg:mt-[100px] font-sat bg-[#E6EAE8]'>
      <Container
        className={`!m-0 px-[30px] py-[20px] lg:py-[100px] lg:px-[100px] !mx-0`}
      >
        <div className='flex flex-col justify-center lg:gap-[350px] lg:flex lg:flex-row lg:items-center'>
          <H3
            className={`text-base text-[#000F0A] text-[24px] max-w-[353px] md:text-[30px] md:leading-[40px] lg:text-[32px] md:max-w-[784px] lg:tracking-[-0.2px] lg:leading-[48px]`}
          >
            Welcome to Creos, where dreams meet disruption, and together, we
            build a better world.
          </H3>
          <Link
            to='https://discord.com/invite/qwPRUfccwT'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              className={`!bg-[#00130D] justify-center !text-[#FEFAF5] flex flex-row gap-[10px] max-w-full !w-[330px] lg:!w-[393px] items-center border-solid border-[4px] border-[#B0BDB9]`}
            >
              <span>
                <figure>
                  <DiscordLogo className={`w-[24px] block h-[24px]`} />
                </figure>
              </span>
              <span>
                <h4>Join our discord community</h4>
              </span>
            </Button>
          </Link>
        </div>
        {/* line */}
        <div className='bg-[#012B1D] w-full h-[1px] my-[20px] md:my-[30px] lg:my-[50px]'></div>

        {/* about AND LINKS section */}
        <section className='flex flex-col lg:flex lg:flex-row lg:flex-nowrap lg:items-start lg:justify-between xxl:justify-center lg:gap-[100px]'>
          {/* about */}
          <div className='flex flex-col gap-[20px] lg:gap-[28px]'>
            <H1 className='text-[#000F0A] !text[20px] mb-0 !leading-[30px]   font-black'>
              About Creos
            </H1>
            <Text
              className={`font-jar w-full max-w-[353px] mt-0 md:max-w-[369px] !text-[14px] font-normal leading-[22px] text-[#011A11]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </Text>
            {/* social links */}
            <div className='flex flex-row items-center gap-[20px] transition-all duration-500 hover:text-[#00130D]/60'>
              {/* x */}
              <Link
                to='https://x.com/creosxyz?t=R2AECtU2Ol10et64y_ACzg&s=09'
                target='_blank'
                rel='noopener noreferrer'
              >
                <figure>
                  <TwLogo className={``} />
                </figure>
              </Link>
              {/* facebook  */}
              {/* <Link to='#' target='_blank' rel='noopener noreferrer'>
                <figure>
                  <FbLogo />
                </figure>
              </Link> */}
              {/* instagram  */}
              <Link
                to='https://instagram.com/creos.xyz?igshid=NzZlODBkYWE4Ng=='
                target='_blank'
                rel='noopener noreferrer'
              >
                <figure>
                  <IgLogo />
                </figure>
              </Link>
              {/* threads */}
              <Link
                to='https://instagram.com/creos.xyz?igshid=NzZlODBkYWE4Ng=='
                target='_blank'
                rel='noopener noreferrer'
              >
                <figure>
                  <ThreadIcon />
                </figure>
              </Link>
              {/* linkedin */}
              <Link
                to='https://instagram.com/creos.xyz?igshid=NzZlODBkYWE4Ng=='
                target='_blank'
                rel='noopener noreferrer'
              >
                <figure>
                  <LinkedInIcon />
                </figure>
              </Link>
              {/* github */}
              {/* <Link to='#' target='_blank' rel='noopener noreferrer'>
                <figure>
                  <GhLogo />
                </figure>
              </Link> */}
            </div>
          </div>
          {/* links */}
          <div className='grid grid-cols-2  gap-10 mt-4 lg:mt-5 lg:items-start lg:flex lg:flex-row lg:gap-[100px]'>
            <div>
              {/* company  */}
              <H3
                className={`!text-base text-[#000F0A] leading-[24px] font-jar !font-bold capitalize`}
              >
                Company
              </H3>
              <div className='flex flex-col gap-4 mt-4 md:gap-5 lg:mt-5'>
                {company?.map((route) => (
                  <ul key={route?.id}>
                    <li className='font-sat capitalize leading-[24px] text-base text-[#00130D] transition-all duration-500 hover:text-[#00130D]/60'>
                      <Link to={route?.path}>{route?.name}</Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div>
              {/* events  */}
              <H3
                className={`!text-base text-[#000F0A] leading-[24px] font-jar !font-bold capitalize`}
              >
                events
              </H3>
              <div className='flex flex-col gap-4 mt-4 md:gap-5 lg:mt-5'>
                {events?.map((route) => (
                  <ul key={route?.id}>
                    <li className='font-sat whitespace-nowrap capitalize leading-[24px] text-base text-[#00130D] transition-all duration-500 hover:text-[#00130D]/60'>
                      <Link to={route?.path}>{route?.name}</Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div>
              {/* products */}
              <H3
                className={`!text-base whitespace-nowrap text-[#000F0A] leading-[24px] font-jar !font-bold capitalize`}
              >
                products
              </H3>
              <div className='flex flex-col gap-4 mt-4 md:gap-5 lg:mt-5'>
                {products?.map((route) => (
                  <ul key={route?.id}>
                    <li className='font-sat whitespace-nowrap capitalize leading-[24px] text-base text-[#00130D] transition-all duration-500 hover:text-[#00130D]/60'>
                      <Link to={route?.path}>{route?.name}</Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div>
              {/* resources  */}
              <H3
                className={`!text-base text-[#000F0A] leading-[24px] font-jar !font-bold capitalize`}
              >
                resources
              </H3>
              <div className='flex flex-col gap-4 mt-4 md:gap-5 lg:mt-5'>
                {resources?.map((route) => (
                  <ul key={route?.id}>
                    <li className='font-sat capitalize leading-[24px] text-base text-[#00130D] transition-all duration-500 hover:text-[#00130D]/60'>
                      <Link to={route?.path}>{route?.name}</Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div>
              {/* legal  */}
              <H3
                className={`!text-base text-[#000F0A] leading-[24px] font-jar !font-bold capitalize`}
              >
                legal
              </H3>
              <div className='flex flex-col gap-4 mt-4 md:gap-5 lg:mt-5'>
                {legal?.map((route) => (
                  <ul key={route?.id}>
                    <li className='font-sat whitespace-nowrap capitalize leading-[24px] text-base font-normal text-[#00130D] transition-all duration-500 hover:text-[#00130D]/60'>
                      <Link to={route?.path}>{route?.name}</Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div>
          <P className='text-[#000F0A] !text-base !leading-[24px] lg:!text-[20px] lg:!leading-[30px] font-normal mx-auto text-center mt-[20px] lg:mt-[100px] '>
            Ⓒ creos | All rights reserved 2021 -
            <span>{new Date().getFullYear()}</span>
          </P>
        </div>
      </Container>
    </footer>
  );
}
