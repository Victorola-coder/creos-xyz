import React from 'react';
import { H2 } from '../../utils/typography';
import {
  Bloomberg,
  BussinessInsode,
  Engadget,
  Forbes,
  TechCrunch,
  TheGuardian,
} from '../../assets/svgs/svg';

export default function Partner() {
  return (
    <section className='bg-white w-ful p-[100px] mb-[100px] flex flex-col items-center gap-10'>
      <H2 className={`text-[#222222] `}>Media Partners</H2>
      <div className='flex flex-row flex-wrap lg:flex-nowrap items-start justify-around gap-[79px]'>
        <figure>
          <Bloomberg />
        </figure>
        <figure>
          <BussinessInsode />
        </figure>
        <figure>
          <TechCrunch />
        </figure>
        <figure>
          <Forbes />
        </figure>
        <figure>
          <TheGuardian />
        </figure>

        <figure>
          <Engadget />
        </figure>
      </div>
    </section>
  );
}
