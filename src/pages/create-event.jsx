import { Link } from 'react-router-dom';
import { SEO } from '../components';
import { Logo, LogoName } from '../assets/svgs/svg';
import { useState } from 'react';
import 'swiper/css/effect-flip';
// import required modules
import { EffectFlip } from 'swiper/modules';
import CheckBox from '../components/checkbox';
import { ArrowRightIcon } from '../components/svgs';

export default function CreateEvent() {
  return (
    <>
      <SEO title='Create Event' />
      <div className='px-5 lg:px-[100px] py-5 lg:py-[80px] w-full max-w-[1728px] mx-auto'>
        <nav className='flex items-center justify-between'>
          <Link to='/'>
            <figure className='flex flex-row items-center'>
              <Logo className={`w-[36px] h-[24px] md:w-[80px] md:h-[54px]`} />
              <LogoName
                className={`w-[54px] h-[20px] lg:w-[120px] lg:h-[45px]`}
              />
            </figure>
          </Link>
          <Link to='/login' className='text-creos lg:text-[28px] font-bold'>
            Login
          </Link>
        </nav>
        <StepSlide />
      </div>
    </>
  );
}

const StepSlide = () => {
  const [slides, setSlides] = useState({
    currentIndex: 0,
    views: [
      {
        index: 0,
        viewed: true,
      },
      {
        index: 1,
        viewed: false,
      },
      {
        index: 2,
        viewed: false,
      },
      {
        index: 3,
        viewed: false,
      },
    ],
  });

  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked((prev) => !prev);
  };

  const handleSlides = (index) => {
    setSlides((prev) => {
      const views = JSON.parse(JSON.stringify(prev.views));

      views[index].viewed = !views[index].viewed;
      views[0].viewed = true;

      return {
        ...prev,
        currentIndex: index,
        views,
      };
    });
  };

  const nextSlide = () => {
    setSlides((prev) => {
      const views = JSON.parse(JSON.stringify(prev.views));

      if (prev.currentIndex < 3) {
        views[prev.currentIndex + 1].viewed =
          !views[prev.currentIndex + 1].viewed;
        views[0].viewed = true;
      }

      return {
        ...prev,
        currentIndex:
          prev.currentIndex < 3 ? prev.currentIndex + 1 : prev.currentIndex,
        views,
      };
    });
  };

  const imgPath = [
    '/images/create-event-img-1.svg',
    '/images/create-event-img-2.svg',
    '/images/create-event-img-3.svg',
    '/images/create-event-img-4.svg',
  ];

  const JSX = [
    <div key={0}>
      <h1 className='text-creos mb-5 text-[48px] font-extrabold'>
        Welcome to Creos
      </h1>
      <p className='text-[#B0BDB9] text-[28px]'>
        The future workforce. Creating an event would mean having these three
        eligibility checked
      </p>
    </div>,
    <div key={1}>
      <h1 className='text-creos mb-5 text-[48px] font-extrabold'>
        Long term partnership
      </h1>
      <p className='text-[#B0BDB9] text-[28px]'>
        By creating an event with Creos, this mean you&rsquo;re accessing the
        private Community of the planets highest paid creators and by doing this
        becoming one of our global partners.{' '}
      </p>
    </div>,
    <div key={2}>
      <h1 className='text-creos mb-5 text-[48px] font-extrabold'>
        Ensuring you maintain our events guidelines and criterias
      </h1>
      <p className='text-[#B0BDB9] text-[28px]'>
        To keep the purpose of events focused within our community, our events
        are meant to be conceptualized within the idea of exposition to new
        emerging technologies, and limitless networking opportunities
      </p>
    </div>,
    <div key={4}>
      <h1 className='text-creos mb-5 text-[48px] font-extrabold'>
        Creos License criteria
      </h1>
      <p className='text-[#B0BDB9] text-[28px]'>
        To be one of our global event conveners, the Creos license is required
        and available to interested applicants above the age of 18.
      </p>
      <div className='flex items-center gap-4 pt-5'>
        <CheckBox checked={checked} setChecked={toggleCheck} />
        <p className='text-creos text-[28px]'>
          I&rsquo;m fully eligible and ready to apply for the Creos License.
        </p>
      </div>
    </div>,
  ];

  return (
    <>
      <div className='py-[80px]'>
        <div className='grid grid-cols-2 gap-[80px]'>
          <div className='flex'>
            <div className='flex flex-col gap-10 my-auto'>
              <div className='flex'>
                {[...Array(4)].map((_, index) => (
                  <div key={index} className='flex items-center'>
                    {index !== 0 && (
                      <div
                        className={`w-[48px] h-[4px] bg-[#E6EAE8] ${
                          slides.views.find((view) => view.index === index)
                            .viewed
                            ? 'bg-[#F7CB9C]'
                            : 'bg-[#E6EAE8]'
                        }`}
                      />
                    )}
                    <div
                      className={`${
                        slides.views.find((view) => view.index === index).viewed
                          ? 'text-primary bg-[#F7CB9C]'
                          : 'bg-primary text-white'
                      } w-[32px] h-[32px] border-[#E6EAE8] border-[1px] rounded-full grid place-items-center`}
                      onClick={() => handleSlides(index)}
                    >
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
              <div>{JSX[slides.currentIndex]}</div>
            </div>
          </div>
          <div>
            <img
              className='transition-all duration-300'
              draggable={false}
              src={imgPath[slides.currentIndex]}
              alt='Creos'
            />
          </div>
        </div>
      </div>
      <div className='border-t-[#E6EAE8] border-t-[1px] pt-[40px] flex justify-between'>
        <button className='border-[1px] rounded-[100px] border-creos w-[169px] h-[62px] grid place-items-center text-creos text-[20px]'>
          <Link to='/login' className='flex items-center gap-2'>
            Skip <ArrowRightIcon />
          </Link>
        </button>
        <button
          onClick={nextSlide}
          className='border-[1px] rounded-[100px] bg-creos w-[169px] h-[62px] grid place-items-center text-black text-[20px]'
        >
          <div className='flex items-center gap-2'>
            Next <ArrowRightIcon fill='#000000' />
          </div>
        </button>
      </div>
    </>
  );
};
