import { Link } from 'react-router-dom';
import { Button, Container, SEO } from '../components';
import { H1 } from '../utils/typography';
import Revolution from '../components/revolution';

export default function Events() {
  return (
    <>
      <SEO title='Events' />
      <main>
        <Hero />
        <CreosEvents />
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
          <H1 className='text-light font-black text-center !text-[32px] leading-[48px] w-full lg:!text-[72px] lg:leading-[108px] max-w-[869px]'>
          Web3 Events Ticketing System for Creator's.
          </H1>
          <h5 className='text-primary-faded text-center text-xl leading-[36px] lg:leading-[57.6px] lg:text-[32px] my-5'>
          While the world evolves with Web3 events to scale Web2 users into Web3 and aid growth in the space. 
          Vents as one of Creos ecosystem is built to enhance events ticketing. 
          </h5>
          <Link to='/events/create'>
            <Button className='bg-creos hover:bg-[#DEB78C] transition-all duration-200 !border-[#DEB78C] text-black'>
              Create Events
            </Button>
          </Link>
        </div>
      </Container>
      <div className='mx-5 lg:mx-[100px]'>
        <div className='py-[20px] flex items-center lg:px-[20px] lg:text-2xl gap-[10px] lg:gap-[20px]'>
          <Link
            to='/events/create'
            className='text-creos font-bold'
            preventScrollReset={true}
          >
            Creos Events
          </Link>
          <div className='w-[1px] h-[24px] lg:h-[36px] bg-creos'></div>
          <Link
            to='/events/browse'
            className='text-creos'
            preventScrollReset={true}
          >
            Browse Events
          </Link>
        </div>
      </div>
    </header>
  );
};

const CreosEvents = () => {
  return (
    <section className='bg-[#E6EAE8] py-[30px] lg:py-[100px]'>
      <Container>
        <div className='flex flex-col gap-[95px]'>
          <section className='xl:flex xl:items-center xl:flex-row xl:justify-center grid lg:grid-cols-2 gap-[200px]'>
            <div>
              <div>
                <h2 className='text-primary text-base leading-[24px] font-normal lg:text-2xl'>
                  Creos Hackathon
                </h2>
                <h1 className='text-dark font-black leading-[48px] max-w-[353px] text-[32px] lg:leading-[72px] lg:text-[40px] lg:max-w-[659px]'>
                  Pioneering Sustainable Solutions for a Better Future
                </h1>
                <p className='max-w-[353px] leading-[36px] text-xl lg:max-w-[645px] font-normal lg:text-2xl py-[29px] lg:leading-[43.2px] text-black'>
                  Join us for the groundbreaking event of the year, Creos
                  Hackathon, where creators, innovators, and visionaries unite
                  to shape a sustainable future aligned with the United
                  Nations' Sustainable Development Goals.
                  <br /> <br />
                  Prepare to be immersed in a whirlwind of cutting-edge
                  technologies, collaborative problem-solving, and the thrill of
                  bringing game-changing ideas to life.
                </p>
                <Button className='bg-[#00130D] active:bg-primary-faded text-[#E6EAE8] !w-[312px] border-primary-faded'>
                  Get event tickets today
                </Button>
              </div>
            </div>
            <figure>
              <img
                src='/images/creos-hackathon.svg'
                alt='Creos Hackathon'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
              />
            </figure>
          </section>
          <div className='h-[1px] w-full bg-primary'></div>
          <section className='grid lg:grid-cols-2 gap-[134px]'>
            <figure className='row-start-2 lg:col-start-1 lg:row-start-1'>
              <img
                src='/images/greeks-out.svg'
                alt='Creos Hackathon'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
              />
            </figure>
            <div>
              <div>
                <h2 className='text-primary lg:text-2xl'>
                  Creos Greeks Out
                </h2>
                <h1 className='text-dark text-[32px] lg:text-[48px] font-extrabold'>
                  Your Inner Geek with the Future!
                </h1>
                <p className='lg:text-2xl py-[29px] leading-[43px] text-black'>
                  Join us for a one-of-a-kind gathering where creators come
                  together to have a blast, enjoy immersive experiences, and
                  expand their networks. <br /> <br />
                  At Creos Geek Out, we believe that your network holds the key
                  to unlocking endless opportunities and success. It's the
                  perfect platform to foster collaboration, meet potential
                  partners, connect with customers, and so much more.
                </p>
                <Button className='bg-primary text-white !w-[312px] border-primary-faded'>
                  Get event tickets today
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};
