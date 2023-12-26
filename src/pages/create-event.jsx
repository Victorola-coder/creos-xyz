import { Link } from 'react-router-dom';
import { SEO } from '../components';
import { Logo, LogoName } from '../assets/svgs/svg';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-flip';
import { useNavigate } from "react-router-dom";
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

  const [swiper, setSwiper] = useState(undefined)
  const [slides, setSlides] = useState({
    currentIndex: 0,
  });
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked((prev) => !prev);
  };

  const handleSlides = (index) => {
    setSlides(() => ({
      currentIndex: index
    }))
  };

  const nextSlide = () => {
    setSlides(prev => {

      let nextActiveIndex = prev.currentIndex + 1

      if (nextActiveIndex < 4) {

        return {
          currentIndex: nextActiveIndex
        };
      }
      if (checked) {
        navigate("/register");
      }
      return prev
    })
  };

  useEffect(() => {
    swiper?.slideTo(slides.currentIndex)
  }, [slides.currentIndex])

  const slideContents = [
    {
      title: 'Welcome to Creos',
      img: '/images/create-event-img-1.svg',
      body: `The future workforce. Creating an event would mean having these three eligibility checked`,
    },
    {
      title: 'Long term partnership',
      img: '/images/create-event-img-2.svg',
      body: `By creating an event with Creos, this mean you're accessing the
      private Community of the planets highest paid creators and by doing this
      becoming one of our global partners.`,
    },
    {
      title: 'Ensuring you maintain our events guidelines and criterias',
      img: '/images/create-event-img-3.svg',
      body: `To keep the purpose of events focused within our community, our events
      are meant to be conceptualized within the idea of exposition to new
      emerging technologies, and limitless networking opportunities`,
    },
    {
      title: 'Creos License criteria',
      img: '/images/create-event-img-4.svg',
      body: `To be one of our global event conveners, the Creos license is required
      and available to interested applicants above the age of 18.`,
    },
  ]


  return (
    <>
      <div className='py-[80px]'>
        <div className='flex justify-center lg:justify-start mb-10'>
          {[...Array(4)].map((_, index) => (
            <div key={index} className='flex items-center'>
              {index !== 0 && (
                <div
                  className={`w-[48px] h-[4px] ${index === 0
                    ? 'bg-creos'
                    : 'bg-[#E6EAE8]'
                    }`}
                />
              )}
              <div
                className={`${index === slides.currentIndex
                  ? 'text-primary bg-creos'
                  : 'bg-primary text-white'
                  } w-[32px] h-[32px] border-[#E6EAE8] border-[1px] rounded-full grid place-items-center`}
                onClick={() => handleSlides(index)}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="flex lg:flex-row flex-col gap-20 jusftify-between items-center min-h-[480px]">

          {/* slide contents */}
          <div className='lg:w-1/2'>
            <h1 className='text-creos mb-5 text-3xl lg:text-5xl font-extrabold'>
              {slideContents[slides.currentIndex].title}
            </h1>
            <p className='text-[#B0BDB9] text-xl lg:text-2xl'>
              {slideContents[slides.currentIndex].body}
            </p>
            {slides.currentIndex === 3 ?
              <div className='flex items-center gap-4 pt-5'>
                <CheckBox checked={checked} setChecked={toggleCheck} />
                <p className='text-creos text-[28px]'>
                  I'm fully eligible and ready to apply for the Creos License.
                </p>
              </div> : null}
          </div>
          <div className='lg:w-[500px] lg:block hidden'>
            <Swiper
              effect={'flip'}
              s
              grabCursor={false}
              modules={[EffectFlip]}
              onSwiper={setSwiper}
              allowTouchMove={false}
            >
              {slideContents.map((slide, i) => (
                <SwiperSlide key={i}>
                  <img
                    className='transition-all duration-300'
                    src={slide.img}
                    alt='Creos'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>


      </div>

      <div className='border-t-[#E6EAE8] border-t-[1px] pt-[40px] flex justify-between'>
        <Link to='/login'>
          <button className='border-[1px] rounded-[100px] border-creos w-[169px] h-[62px] grid place-items-center text-creos text-[20px]'>
            <div className='flex items-center gap-2'>
              Skip <ArrowRightIcon />
            </div>
          </button>
        </Link>
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
