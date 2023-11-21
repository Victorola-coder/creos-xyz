import { useState } from 'react';
import Button from '../../components/button';
import { SearchIcon } from '../../components/svgs';
import { List, Tab } from '../../assets/svgs/svg';
import { NavLink } from 'react-router-dom';

export default function DashboardEvents() {
  const [eventCount, setEVentCount] = useState('4');
  return (
    <div>
      <header className='flex justify-between items-center gap-5'>
        <h1 className='text-[36px] font-sat whitespace-nowrap font-bold text-primary'>
          Event Dashboard
        </h1>
        <div className='w-full px-[20px] max-w-[576px] h-[62px] rounded-[100px] border-[1px] border-primary flex gap-2 items-center'>
          <input
            className='outline-none flex-1 placeholder-primary text-primary bg-transparent text-[20px] font-medium caret-primary'
            placeholder='Search Events'
          />
          <SearchIcon />
        </div>
        <Button className='w-[229px] bg-primary text-white'>
          Create Events
        </Button>
      </header>

      <div className='mt-[64px]'>
        <h4 className='font-sat text-[24px] leading-[36px] font-medium text-[#012B1D] '>
          {eventCount} <span>Events</span>
        </h4>

        <div className='flex flex-row items-center justify-center'>
          <NavLink className={`flex flex-row gap-[]`}>
            {({ isActive }) => (
              <>
                <figure>
                  <List />
                </figure>
                <figure className='bg-primary'>
                  <Tab />
                </figure>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
