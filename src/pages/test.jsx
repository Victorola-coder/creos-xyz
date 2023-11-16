// Events.js
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
NavLink;

const Events = () => {
  const { eventType } = useParams();

  return (
    <div>
      <div className='mx-5 lg:mx-[100px]'>
        <div className='py-[20px] flex items-center lg:px-[20px] lg:text-[24px] gap-[10px] lg:gap-[20px]'>
          <NavLink
            to='/events/creos'
            className={eventType === 'creos' ? 'active-link' : 'inactive-link'}
          >
            Creos Events
          </NavLink>
          <div className='w-[1px] h-[24px] lg:h-[36px] bg-[#E6EAE8]'></div>
          <button
            to='/events/browse'
            className={eventType === 'browse' ? 'active-link' : 'inactive-link'}
          >
            Browse Events
          </button>
        </div>
      </div>

      {/* Render content based on eventType */}
      {eventType === 'creos' && <CreosEventsContent />}
      {eventType === 'browse' && <BrowseEventsContent />}
    </div>
  );
};

export default Events;

// CreosEventsContent.js and BrowseEventsContent.js can be separate components with the content for each type of event.
