import React from 'react';
import { H2 } from '../../utils/typography';
import {
  Bloomberg,
  BussinessInsode,
  Crunch,
  Engadget,
  Forbes,
  Tech,
  TechCrunch,
  TheGuardian,
} from '../../assets/svgs/svg';

export default function Partner() {
  return (
    <section className='bg-[#E6EAE8] px-5 py-[32px] lg:py-[100px] lg:px-[100px] lg:mb-[100px] flex flex-col items-center gap-4 lg:gap-10'>
      <H2 className={`text-[#222222] `}>Media Partners</H2>
      <div className='hidden md:flex flex-row flex-wrap lg:flex-nowrap items-start justify-around md:gap-[40px] lg:gap-[60px]'>
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
      {/* mobile screen */}
      <div className='md:hidden flex flex-col gap-6 items-center justify-around'>
        <figure>
          <Bloomberg className={`w-[157px]`} />
        </figure>
        <div className='flex flex-row gap-5'>
          <figure className='flex flex-row items-center'>
            <Tech className={`w-1/2`} />
            <Crunch className={`w-1/2`} />
          </figure>
          <figure>
            <BussinessInsode className={`w-[111px]`} />
          </figure>
        </div>
        <div className='flex flex-row items-center gap-5'>
          <figure>
            <Forbes className={`w-[101px]`} />
          </figure>
          <figure>
            <TheGuardian className={`w-[107px]`} />
          </figure>
        </div>

        <figure>
          <Engadget />
        </figure>
      </div>
    </section>
  );
}
