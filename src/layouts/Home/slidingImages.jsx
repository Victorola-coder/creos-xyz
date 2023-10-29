import React from 'react';
import { imgSlider } from '../../data/data';
import Marquee from 'react-fast-marquee';
import { Container } from '../../components';

export default function SlidingImages() {
  return (
    <>
      <Container>
        <Marquee className='space-x-3' speed={100} pauseOnHover>
          <section className='my-5'>
            <figure className='flex  flex-row  gap-[28px]'>
              {imgSlider.map((img) => (
                <img
                  key={img.id}
                  alt={img.alt}
                  src={img.src}
                  className='object-cover'
                  loading='lazy'
                  draggable='false'
                  decoding='async'
                  fetchpriority='high'
                  referrerpolicy='no-referrer'
                />
              ))}
            </figure>
          </section>
        </Marquee>
      </Container>
    </>
  );
}
