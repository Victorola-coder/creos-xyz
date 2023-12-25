/* eslint-disable react/no-unknown-property */
import { imgSlider } from '../../data/data';
import Marquee from 'react-fast-marquee';
import { Container } from '../../components';

export default function SlidingImages() {
  return (
    <div className='w-full overflow-hidden'>
      <Container>
        <Marquee className='space-x-3' speed={100} pauseOnHover>
          <section className='my-5'>
            <div className='flex flex-row gap-[28px] mx-4'>
              {imgSlider.map((img, index) => (
                <figure
                  key={index}
                  className='outline-[#E6EAE8] w-[52px] lg:w-[120px] outline-[4px] lg:outline-[8px] outline rounded-[12px] lg:rounded-[26px] hover:scale-105'
                >
                  <img
                    key={img.id}
                    alt={img.alt}
                    src={img.src}
                    className='object-cover w-fit rounded-[12px] lg:rounded-[26px]'
                    loading='lazy'
                    draggable='false'
                    decoding='async'
                    fetchpriority='high'
                    referrerPolicy='no-referrer'
                  />
                </figure>
              ))}
            </div>
          </section>
        </Marquee>
      </Container>
    </div>
  );
}
