import { Button, Container, SEO } from '../components';
import Box from '../components/box';
import Revolution from '../components/revolution';

export default function EventDetails() {
  return (
    <>
      <SEO title='Create Event' />
      <main>
        <Hero />
        <GetTickets />
        <SimilarEvents />
      </main>
    </>
  );
}

const Hero = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 gap-[124px] px-5'>
        <div className='flex flex-col gap-8'>
          <header>
            <h2 className='text-[#B0BDB9] text-[24px]'>November 15-17, 2023</h2>
            <h1 className='text-[48px] font-bold py-2'>
              Digital Innovation Summit
            </h1>
            <h3 className='text-creos text-[24px]'>
              The Innovation Hub, San Francisco, CA
            </h3>
          </header>
          <p className='text-[24px] text-[#B0BDB9] leading-[43px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus efficitur imperdiet. Mauris consequat vulputate sagittis.
            <br /> <br />
            Curabitur faucibus metus sed diam bibendum, eu varius sem rutrum.
            Cras dapibus lobortis sagittis. Vestibulum pretium sed justo ut
            bibendum. Ut et diam porta, sollicitudin neque non, malesuada arcu.
          </p>
          <Button className='bg-creos text-primary !w-[303px] border-[#FDEFE0]'>
            Get event ticket today
          </Button>
        </div>
        <figure>
          <img src='/images/eventpage-img.svg' />
        </figure>
      </div>
    </Container>
  );
};

const GetTickets = () => {
  return (
    <section className='bg-[#E6EAE8]'>
      <Box className='grid place-items-center'>
        <Button className='bg-primary text-white !w-[300px] border-[#B0BDB9]'>
          Get event tickets now
        </Button>
      </Box>
    </section>
  );
};

const SimilarEvents = () => {
  return (
    <Container>
      <header className='pb-[24px]'>
        <h1 className='text-[32px] text-[#B0BDB9] leading-[57px] font-bold'>
          Similar Events
        </h1>
      </header>
      <section className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-[10px] gap-y-[40px]'>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className='bg-[#E6EAE8] border-primary border-[1px] rounded-[20px] py-[30px] px-[20px] flex flex-col gap-5'
          >
            <figure className='border-[1px] overflow-hidden rounded-[10px]'>
              <img
                src='/images/browse-event-img.svg'
                alt='Browse Event'
                className='w-full object-cover'
              />
            </figure>
            <div>
              <h2 className='text-primary group-hover:text-[#E6EAE8] leading-[24px]'>
                November 15-17, 2023
              </h2>
              <h1 className='text-[24px] font-bold text-primary group-hover:text-[#E6EAE8] py-[4px]'>
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
    </Container>
  );
};
