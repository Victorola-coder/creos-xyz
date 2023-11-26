import { Container, SEO } from '../components';
import Revolution from '../components/revolution';
import { InstagramIcon, LinkedInIcon, XIcon } from '../components/svgs';
import { teamMembersData } from '../data/team';
import { H1 } from '../utils/typography';

export default function Team() {
  return (
    <>
      <SEO title='Meet Our Solid Team' />
      <main>
        <Hero />
        <Content />
        <Revolution />
      </main>
    </>
  );
}

const Hero = () => {
  return (
    <header className='bg-primary'>
      <Container>
        <div className='w-full max-w-[1188px] mx-auto grid place-items-center'>
          <H1 className='text-[#D9DFDD] font-black text-center !text-[32px] leading-[48px] w-full lg:!text-[72px] lg:leading-[108px]'>
            We&rsquo;re building the future workforce
          </H1>
          <h5 className='text-[#B0BDB9] text-center text-[20px] leading-[36px] lg:leading-[57.6px] lg:text-[32px] my-5'>
            Creos “a Spanish word” mean Creators “in English” and our story
            began a minute in the year 2418 when we realized the future demand
            of the workforce.
          </h5>
        </div>
      </Container>
    </header>
  );
};

const Content = () => {
  return (
    <Container>
      <header className='grid place-items-center'>
        <H1 className='text-[#D9DFDD] font-black text-center !text-[32px] leading-[48px] w-full lg:!text-[72px] lg:leading-[108px]'>
          The minds behind Creos
        </H1>
      </header>
      <div className='flex flex-wrap gap-[20px] pt-[90px] lg:gap-[100px] justify-around'>
        {teamMembersData.map((team) => (
          <div key={team.id}>
            <img
              src={team.img}
              alt={team.name}
              className='w-[300px] h-[300px] mix-blend-luminosity object-cover hover:scale-95'
            />
            <div className='grid place-items-center gap-[11px] py-[30px]'>
              <h1 className='text-[28px] lg:text-[32px] font-extrabold text-[#E6EAE8]'>
                {team.name}
              </h1>
              <h2 className='lg:text-[24px]'>{team.role}</h2>
              <div className='flex items-center gap-4'>
                <XIcon />
                <LinkedInIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
