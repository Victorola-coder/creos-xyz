import { useRef, useEffect, useState } from 'react';
import { Button, Container, SEO } from '../components';
import Input from '../components/input';
import Revolution from '../components/revolution';
import { H1 } from '../utils/typography';
import { linkedInURL } from '../constants/config';
import { mainClient } from '../utils/client';
import { toast } from 'react-toastify';

export default function Community() {
  return (
    <>
      <SEO title='Join the Community' />
      <main>
        <Hero />
        <Main />
        <WhyJoinCreos />
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
            Join the Creos Community: Where Innovators Thrive
          </H1>
          <h5 className='text-[#B0BDB9] text-center text-[20px] leading-[36px] lg:leading-[57.6px] lg:text-[32px] my-5'>
            At Creos, we&rsquo;re on the lookout for revolutionary creators,
            visionaries who are reshaping the world as we know it. If
            you&rsquo;ve got what it takes to be part of our vibrant community,
            there are three pathways to join us:
          </h5>
        </div>
      </Container>
    </header>
  );
};

const Main = () => {
  const targetRef = useRef(null);
  const [url, setUrl] = useState('');
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);


  const handleSubmit = e => {
    e.preventDefault();
    if (!url) {
      warn('All fields are required');
    } else {
      mainClient.post(linkedInURL, { url })
        .then((r => {
          if (r.status === 200) {
            toast.success(r.data.message)
            setUrl('')
          } else
            toast.error(r.data.message)
        }))
        .catch(e => {
          toast.error(e.response.data.message)
        })
      return;
    }
  }

  return (
    <section className='bg-[#E6EAE8] py-[30px] lg:py-[100px]'>
      <Container>
        <div className='flex flex-col gap-[95px]'>
          <section className='grid lg:grid-cols-2 gap-[74px]'>
            <div className='flex'>
              <div className='my-auto'>
                <h1 ref={targetRef} id="connnection" className='text-[#222222] text-[32px] lg:text-[48px] font-extrabold'>
                  We&rsquo;re Watching
                </h1>
                <p className='lg:text-[24px] py-[29px] leading-[43px] text-black'>
                  Creos scouts the globe for groundbreaking innovators
                  challenging the status quo. When we discover your exceptional
                  work, we extend a personal invitation to join our
                  community—all at our expense. <br />
                  <br />
                  Want to increase your chances? Share your LinkedIn profile
                  with us, and let your achievements speak for themselves.
                </p>
                <div className='mb-5'>
                  <Input
                    value={url}
                    onChange={(e) => setUrl(e?.target?.value)}
                    className='border-[1px] border-primary placeholder-primary'
                    placeholder='LinkedIn URL'
                  />
                </div>
                <Button onClick={handleSubmit} className='bg-primary text-white !w-[233px] border-[#B0BDB9]'>
                  Check me out
                </Button>
              </div>
            </div>
            <figure>
              <img src='/images/share.svg' alt='Creos Hackathon' className='' />
            </figure>
          </section>
          <div className='h-[1px] w-full bg-primary'></div>
          <section className='grid lg:grid-cols-2 gap-[134px]'>
            <figure className='row-start-2 lg:col-start-1 lg:row-start-1'>
              <img
                src='/images/greeks-out.svg'
                alt='Creos Hackathon'
                className=''
              />
            </figure>
            <div className='flex'>
              <div className='my-auto'>
                <h1 className='text-[#222222] text-[32px] lg:text-[48px] font-extrabold'>
                  Pay for Membership
                </h1>
                <p className='lg:text-[24px] py-[29px] leading-[43px] text-black'>
                  Already confident you&rsquo;re a perfect fit for Creos? You
                  can expedite your entry by opting for our paid membership. For
                  a fee of $2,000, here&rsquo;s what you get:
                </p>
                <ul className='lg:text-[24px] py-[32px] leading-[43px] text-black flex flex-col gap-2'>
                  <li className='pl-6 relative before:absolute before:left-0 before:top-[10px]s before:h-2 before:w-2 before:rounded-[100%] before:bg-black before:top-[18px]'>
                    Instant Global Recognition: Your unique story will be
                    featured in press releases across 12+ international
                    platforms, amplifying your reach and influence.
                  </li>
                  <li className='pl-6 relative before:absolute before:left-0 before:top-[10px]s before:h-2 before:w-2 before:rounded-[100%] before:bg-black before:top-[18px]'>
                    Personalized Spotlight: Creos Press will conduct a live
                    one-on-one interview, delving into the fascinating tale of
                    how it all began for you.
                  </li>
                  <li className='pl-6 relative before:absolute before:left-0 before:top-[10px]s before:h-2 before:w-2 before:rounded-[100%] before:bg-black before:top-[18px]'>
                    Exclusive Membership Kit: Welcome to Creos with an official
                    Non-Fungible Token (NFT) identity card, a symbol of your
                    unique presence within our community. Plus, receive a
                    physical membership card for blockchain verification and
                    networking opportunities.
                  </li>
                </ul>
                <Button className='bg-primary text-white !w-[176px] border-[#B0BDB9]'>
                  Let&rsquo;s go
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

const WhyJoinCreos = () => {
  return (
    <section>
      <Container>
        <div className='w-full max-w-[1030px] mx-auto grid place-items-center relative'>
          <H1
            className={`text-[#D9DFDD] font-black text-center !text-[32px] leading-[48px] max-w-[353px] w-full lg:!text-[72px] lg:leading-[108px] lg:max-w-[869px]`}
          >
            Why Join Creos?
          </H1>
          <h5 className='text-[#E6EAE8] text-center text-[20px] leading-[36px] lg:leading-[43px] lg:text-[24px] my-5'>
            At Creos, we&rsquo;re more than a community; we&rsquo;re a movement
            driving change. Here, innovation meets recognition, and creativity
            finds its stage. When you join Creos, you&rsquo;re not just joining
            a network; you&rsquo;re becoming part of a family of disruptors,
            inventors, and pioneers shaping the future. <br /> <br />
            Your journey to innovation begins here. Let&rsquo;s build a better
            future together. Join Creos, where your ideas transform into
            realities.
          </h5>
          <div className='h-[1px] w-full bg-[#E6EAE8] absolute bottom-[-5px] lg:bottom-[-50px]'></div>
        </div>
      </Container>
    </section>
  );
};
