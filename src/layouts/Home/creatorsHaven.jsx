import React from 'react';
import { H3, Text } from '../../utils/typography';

export default function CreatorsHaven() {
  return (
    <section className='bg-white rounded-[100px] flex flex-col lg:px-[100px] lg:py-[120px] mx-[120px] my-[100px]'>
      <Text>Creators’ Haven</Text>
      <H3 className={`text-[#222222]`}>
        At Creos, we believe in the extraordinary power of dreams. They are the
        seeds from which innovations sprout, and at Creos, we provide the
        fertile ground for those seeds to grow.
      </H3>
    </section>
  );
}
