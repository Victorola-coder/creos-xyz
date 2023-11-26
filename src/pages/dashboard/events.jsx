import { useState } from 'react';
import Button from '../../components/button';
import { SearchIcon } from '../../components/svgs';
import { List, Tab } from '../../assets/svgs/svg';
import { SEO } from '../../components';
import { Link } from 'react-router-dom';

const VIEW = {
  LIST: 'LIST',
  COLUMN: 'COLUMN',
};

export default function DashboardEvents() {
  const [eventCount, setEventCount] = useState('3');

  const [view, setView] = useState(VIEW.LIST);

  const handleListView = () => setView(VIEW.LIST);

  const handleColumnView = () => setView(VIEW.COLUMN);

  return (
    <>
      <SEO title={`Dashboard || Events`} />

      <div className='flex flex-col gap-[64px]'>
        <header className='flex justify-between items-center gap-10'>
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
          <Link to="/dashboard/events/create-event">
            <Button className='w-[229px] bg-primary text-white'>
              Create Events
            </Button>
          </Link>
        </header>
        <div className='flex justify-between'>
          <h4 className='font-sat text-[24px] leading-[36px] font-medium text-[#012B1D]'>
            {eventCount} <span>Events</span>
          </h4>
          <div className='flex !transition-none !duration-0 flex-row items-center justify-center gap-3'>
            <button
              onClick={handleListView}
              className='flex gap-5 items-center text-primary text-[20px] font-bold'
            >
              <div
                className={`${view === VIEW.LIST ? 'bg-primary' : ''
                  } rounded-[12px] p-[12px]`}
              >
                <List
                  className={`${view === VIEW.LIST
                    ? 'fill-[#E6EAE8] stroke-[#E6EAE8]'
                    : 'fill-primary stroke-primary'
                    }`}
                />
              </div>
            </button>
            <button
              onClick={handleColumnView}
              className='flex gap-5 items-center text-primary text-[20px] font-bold'
            >
              <div
                className={`${view === VIEW.COLUMN ? 'bg-primary' : ''
                  } rounded-[12px] p-[12px]`}
              >
                <Tab
                  className={`${view === VIEW.COLUMN
                    ? 'fill-[#E6EAE8] stroke-[#E6EAE8]'
                    : 'fill-primary stroke-primary'
                    }`}
                />
              </div>
            </button>
          </div>
          <div></div>
        </div>
        {view === VIEW.LIST ? <ListView /> : <ColumnView />}
      </div>
    </>
  );
}

const ListView = () => {
  return (
    <div className='border-[1px] border-black'>
      <header className='px-[20px] grid grid-cols-[94px_1.5fr_1fr_1fr_1fr_1fr] gap-[40px] text-[24px] font-bold text-primary py-[25px]'>
        <div></div>
        <h1>Event Name</h1>
        <h1>Event Date</h1>
        <h1>Event Time</h1>
        <h1>Venue</h1>
        <h1>Attending</h1>
      </header>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className='border-t-[1px] border-black px-[20px] grid grid-cols-[94px_1.5fr_1fr_1fr_1fr_1fr] gap-[40px] items-center text-[24px] text-primary py-[25px]'
        >
          <figure className='rounded-[10px] overflow-hidden'>
            <img src='/images/browse-event-img.svg' alt='' />
          </figure>
          <h1 className='font-bold'>Digital Innovation Summit</h1>
          <h1>Nov 29. 2023</h1>
          <h1>10:00</h1>
          <h1>Online</h1>
          <h1>10</h1>
        </div>
      ))}
    </div>
  );
};

const ColumnView = () => {
  return (
    <section className='grid grid-cols-3 gap-x-[10px] gap-y-[40px]'>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className='transition-all duration-500 cursor-pointer group hover:bg-primary border-primary border-[1px] rounded-[20px] py-[30px] px-[20px] flex flex-col gap-5'
        >
          <figure className='border-[1px] overflow-hidden rounded-[10px]'>
            <img
              src='/images/browse-event-img.svg'
              // src={event}
              alt='Browse Event'
              draggable={false}
              className='object-cover w-full'
            />
          </figure>
          <div>
            <h2 className='text-primary group-hover:text-[#E6EAE8] leading-[24px]'>
              November 15-17, 2023
            </h2>
            <h1 className='text-[24px] t font-bold text-primary group-hover:text-[#E6EAE8] py-[4px]'>
              Digital Innovation Summit
            </h1>
            <h3 className='text-primary group-hover:text-[#E6EAE8]'>
              The Innovation Hub, San Francisco, CA
            </h3>
            <p className='text-primary pt-2 group-hover:text-[#E6EAE8]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus efficitur elit sit imperdiet.
            </p>
          </div>
          <div>
            <p className='text-primary group-hover:text-[#E6EAE8] text-[20px] font-bold'>
              £ 2,000
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
