import { Link } from 'react-router-dom';
import { H3, H1, Text } from '../utils/typography';
import { Button, Container } from './';
import {
  DiscordLogo,
  FbLogo,
  GhLogo,
  IgLogo,
  TwLogo,
} from '../assets/svgs/svg';
import { company, events, legal, products, resources } from '../data/data';

export default function Footer() {
  return (
    <footer className='mt-[100px] font-sat bg-[#E6EAE8]'>
      <Container className={`lg:py-[100px] lg:px-[100px] !mx-0`}>
        <div className='flex flex-row items-center justify-between'>
          <H3
            className={`text-base text-[#000F0A] md:text-[32px] md:max-w-[784px] md:tracking-[-0.2px] md:leading-[48px]`}
          >
            Welcome to Creos, where dreams meet disruption, and together, we
            build a better world.
          </H3>
          <Link>
            <Button
              className={`!bg-[#00130D] justify-center !text-[#FEFAF5] flex flex-row gap-[10px] !w-[393px] items-center border-solid border-[4px] border-[#B0BDB9]`}
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
        <div className='bg-[#012B1D] w-full h-[1px] my-[50px]'></div>

        {/* about AND LINKS section */}
        <section className='flex flex-row items-start justify-center gap-[100px]'>
          {/* about */}
          <div className='flex flex-col gap-[28px]'>
            <H1 className='text-[#000F0A] lg:!text[20px] lg:leading-[30px]   font-black'>
              About Creos
            </H1>
            <Text
              className={`font-jar md:max-w-[369px] !text-[14px] font-normal leading-[22px] text-[#011A11]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </Text>
            <div className='flex flex-row items-center gap-[20px] transition-all duration-500 hover:text-[#00130D]/60'>
              <Link to='.'>
                <figure>
                  <TwLogo />
                </figure>
              </Link>
              <Link to='#'>
                <figure>
                  <FbLogo />
                </figure>
              </Link>
              <Link to='.'>
                <figure>
                  <IgLogo />
                </figure>
              </Link>
              <Link to='#'>
                <figure>
                  <GhLogo />
                </figure>
              </Link>
            </div>
          </div>
          {/* links */}
          <div>
            {/* company  */}
            <H3
              className={`!text-base text-[#000F0A] leading-[24px] font-jar font-bold capitalize`}
            >
              Company
            </H3>
            <div className='flex flex-col mt-5 gap-5'>
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
              className={`!text-base text-[#000F0A] leading-[24px] font-jar font-bold capitalize`}
            >
              events
            </H3>
            <div className='flex flex-col mt-5 gap-5'>
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
            
              className={`!text-base whitespace-nowrap text-[#000F0A] leading-[24px] font-jar font-bold capitalize`}
            >
              products
            </H3>
            <div className='flex flex-col mt-5 gap-5'>
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
              className={`!text-base text-[#000F0A] leading-[24px] font-jar font-bold capitalize`}
            >
              resources
            </H3>
            <div className='flex flex-col mt-5 gap-5'>
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
              className={`!text-base text-[#000F0A] leading-[24px] font-jar font-bold capitalize`}
            >
              legal
            </H3>
            <div className='flex flex-col mt-5 gap-5'>
              {legal?.map((route) => (
                <ul key={route?.id}>
                  <li className='font-sat whitespace-nowrap capitalize leading-[24px] text-base font-normal text-[#00130D] transition-all duration-500 hover:text-[#00130D]/60'>
                    <Link to={route?.path}>{route?.name}</Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </footer>
  );
}
