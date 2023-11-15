import { Button, Container, SEO } from '../components';
import Box from '../components/box';
import Revolution from '../components/revolution';
import { Hero, Slider, Partner, Haven } from '../layouts';

export default function Home() {
  return (
    <>
      <SEO title='Home' />
      <main>
        <Hero />
        <Slider />
        <Partner />
        <Haven />
        <Innovation />
        <Community />
        <Purpose />
        <Revolution />
      </main>
    </>
  );
}

const Community = () => {
  return (
    <Container>
      <div className='grid place-items-center gap-[24px] w-full max-w-[1163px] mx-auto text-center'>
        <h1 className='text-[32px] font-black lg:text-[48px] leading-[48px] lg:leading-[72px] text-white'>
          A Community of Fearless Disruptors
        </h1>
        <p className='text-[#B0BDB9] lg:text-[28px] leading-[28px] lg:leading-[50px]'>
          Creos is more than a network; it&rsquo;s a community of fearless
          disruptors. We are pioneers, risk-takers, and forward-thinkers.
          Together, we dismantle traditional boundaries, pushing the envelope of
          what is possible.
        </p>
      </div>
    </Container>
  );
};

const Purpose = () => {
  return (
    <section className='bg-[#E6EAE8]'>
      <Box>
        <div className='w-full max-w-[1123px] mx-auto border-b-[#d8d8d8] border-b-[1px] pb-[20px] lg:pb-[50px]'>
          <div className='grid place-items-center gap-[20px] w-full max-w-[915px] mx-auto text-center'>
            <h2 className='font-medium text-primary lg:text-[20px] leading-[24px] lg:leading-[30px]'>
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
            <h1 className='text-[20px] lg:text-[24px] leading-[30px] lg:leading-[43px] text-[#000F0A]'>
              We challenge our members to consider not just the
              &rsquo;what&rsquo; but also the &rsquo;why.&rsquo; How does your
              innovation make the world safer? How does it contribute to
              sustainability? These questions fuel our creativity, ensuring that
              every disruption we create serves a purpose greater than itself.
            </h1>
          </div>
        </div>
      </Box>
    </section>
  );
};

const Innovation = () => {
  return (
    <section className='bg-[#E6EAE8]'>
      <Box>
        <section className='grid lg:grid-cols-2 gap-[41px] lg:gap-[134px]'>
          <div className='flex'>
            <div className='my-auto'>
              <h1 className='text-[#222222] lg:max-w-[570px] text-[32px] lg:text-[48px] font-extrabold'>
                Where Innovation Finds Its Voice
              </h1>
              <p className='lg:text-[24px] max-w-[728px] py-[29px] leading-[28px] lg:leading-[43px] text-black'>
                In the heart of Creos, innovation finds its voice. Our
                collaborative ecosystem fosters an environment where ideas are
                shared, refined, and transformed into disruptive technologies.
                <br /> <br />
                It&rsquo;s a place where passionate discussions echo through the
                halls, where expertise is respected, and where diverse
                perspectives converge to create solutions that challenge the
                norms.
              </p>
              <Button className='bg-primary text-white !w-[312px] border-[#B0BDB9]'>
                Join our community
              </Button>
            </div>
          </div>
          <figure className='flex gap-[25px] items-center row-start-1 lg:col-start-2'>
            <div className='flex flex-col gap-[25px]'>
              <img
                src='./images/innovation-img-1.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
              <img
                src='./images/innovation-img-2.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
              <img
                src='./images/innovation-img-3.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
            </div>
            <div className='flex flex-col gap-[25px] mb-[89px]'>
              <img
                src='./images/innovation-img-4.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
              <img
                src='./images/innovation-img-5.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
              <img
                src='./images/innovation-img-6.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
            </div>
            <div className='flex flex-col gap-[25px]'>
              <img
                src='./images/innovation-img-7.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
              <img
                src='./images/innovation-img-8.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
              <img
                src='./images/innovation-img-9.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
            </div>
            <div className='flex flex-col gap-[25px]'>
              <img
                src='./images/innovation-img-10.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
              <img
                src='./images/innovation-img-11.svg'
                draggable={false}
                className='object-cover w-fit hover:scale-95'
                alt='Innovation'
              />
            </div>
          </figure>
        </section>
      </Box>
    </section>
  );
};
