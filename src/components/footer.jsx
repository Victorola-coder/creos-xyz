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

        {/* about section */}
        <section>
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
            <div className='flex flex-row items-center gap-[20px]'>
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
        </section>
      </Container>
    </footer>
  );
}
