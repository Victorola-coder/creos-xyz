import { NavLink } from 'react-router-dom';
import { Button, Container, SEO } from '../components';
import { H1 } from '../utils/typography';
import Revolution from '../components/revolution';
import Box from '../components/box';
import { SearchIcon } from '../components/svgs';

export default function BrowseEvents() {
  return (
    <>
      <SEO title='Browse Events' />
      <main>
        <Hero />
        <Events />
        <Revolution />
      </main>
    </>
  );
}

const Hero = () => {
  return (
    <header className='bg-primary pb-[30px] lg:pb-[50px]'>
      <Container>
        <div className='w-full max-w-[1188px] mx-auto grid place-items-center'>
          <H1 className='text-[#D9DFDD] font-black text-center !text-[32px] leading-[48px] w-full lg:!text-[72px] lg:leading-[108px] max-w-[869px]'>
            Discover the Future at Creos Events
          </H1>
          <h5 className='text-[#B0BDB9] text-center text-[20px] leading-[36px] lg:leading-[57.6px] lg:text-[32px] my-5'>
            Join us in the dynamic world of Creos Events, where creativity meets
            competition and innovation sparks to life.
          </h5>
          <Button className='bg-[#F7CB9C] hover:bg-[#DEB78C] transition-all duration-200 !border-[#DEB78C] text-black'>
            Create Events
          </Button>
        </div>
      </Container>
      <div className='mx-5 lg:mx-[100px]'>
        <div className='py-[20px] flex items-center lg:px-[20px] lg:text-[24px] gap-[10px] lg:gap-[20px]'>
          <NavLink
            className={({ isActive }) =>
              `text-[#F7CB9C] ${isActive ? 'font-bold' : 'font-normal'}`
            }
            to='/events/'
            preventScrollReset={true}
          >
            Creos Events
          </NavLink>
          <div className='w-[1px] h-[24px] lg:h-[36px] bg-[#F7CB9C]'></div>
          <NavLink
            className={({ isActive }) =>
              `text-[#F7CB9C] ${isActive ? 'font-bold' : 'font-normal'}`
            }
            to='/events/browse'
            preventScrollReset={true}
          >
            Browse Events
          </NavLink>
        </div>
      </div>
    </header>
  );
};

const Events = () => {
  return (
    <div className='bg-[#E6EAE8]'>
      <Box className='lg:py-[50px]'>
        <header className='mb-[50px]'>
          <Search />
        </header>
        <section className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-[10px] gap-y-[40px]'>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className='transition-all duration-500 cursor-pointer group hover:bg-primary border-primary border-[1px] rounded-[20px] py-[30px] px-[20px] flex flex-col gap-5'
            >
              <figure className='border-[1px] overflow-hidden rounded-[10px]'>
                <img
                  src='./images/browse-event-img.svg'
                  alt='Browse Event'
                  draggable={false}
                  className='object-cover w-full'
                />
              </figure>
              <div>
                <h2 className='text-primary group-hover:text-[#E6EAE8] leading-[24px]'>
                  November 15-17, 2023
                </h2>
                <h1 className='text-[24px] t font-bold text-primary group-hover:text-[#E6EAE8] py-[4px]'>
                  Digital Innovation Summit
                </h1>
                <h3 className='text-primary group-hover:text-[#E6EAE8]'>
                  The Innovation Hub, San Francisco, CA
                </h3>
                <p className='text-primary pt-2 group-hover:text-[#E6EAE8]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  maximus efficitur elit sit imperdiet.
                </p>
              </div>
              <div>
                <p className='text-primary group-hover:text-[#E6EAE8] text-[20px] font-bold'>
                  £ 2,000
                </p>
              </div>
            </div>
          ))}
        </section>
      </Box>
    </div>
  );
};

const Search = () => {
  return (
    <div className='w-full max-w-[650px] px-[32px] lg:px-[53px] border-[1px] border-[#012B1D] h-[56px] lg:h-[76px] rounded-[100px] flex gap-3 items-center'>
      <SearchIcon />
      <input
        className='lg:text-[24px] text-black text-base bg-transparent placeholder-[#012B1D] flex-1 outline-none'
        placeholder='Search events'
      />
    </div>
  );
};
