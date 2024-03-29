import { useState } from 'react';
import { Button } from '../../components';
import Input from '../../components/input';
import RadioInput from '../../components/radioInput';
import { ChevronLeftIcon } from '../../components/svgs';
import { useNavigate } from 'react-router-dom';

export default function DashboardCreateEvent() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const [isOnlineEvent, setIsOnlineEvent] = useState(true);

  const toggleOnlineEvent = () => {
    setIsOnlineEvent((prev) => !prev);
  };

  return (
    <div className='flex flex-col gap-[63px]'>
      <section>
        <button className='grid place-items-center text-xl font-bold text-primary'>
          <div onClick={handleBackClick} className='flex items-center gap-3'>
            <ChevronLeftIcon /> Back
          </div>
        </button>
      </section>
      <section className='flex flex-col gap-[32px] lg:px-[80px]'>
        <fieldset>
          <label className='inline-block mb-3 text-primary text-xl leading-[30px] font-bold'>
            Title
          </label>
          <Input
            className='border-primary-faded border-[1px] !placeholder-primary-faded font-normal'
            placeholder='Event title'
          />
        </fieldset>
        <fieldset>
          <label className='inline-block mb-3 text-primary text-xl leading-[30px] font-bold'>
            Short Description
          </label>
          <Input
            className='border-primary-faded border-[1px] !placeholder-primary-faded font-normal'
            placeholder='About Event'
          />
        </fieldset>
        <fieldset>
          <label className='inline-block mb-3 text-primary text-xl leading-[30px] font-bold'>
            Event Description
          </label>
          <Input
            className='border-primary-faded border-[1px] !placeholder-primary-faded font-normal'
            placeholder='About Event'
          />
        </fieldset>
        <fieldset>
          <label className='inline-block mb-3 text-primary text-xl leading-[30px] font-bold'>
            Event Image
          </label>
          <Input
            className='border-primary-faded border-[1px] !placeholder-primary-faded font-normal'
            placeholder='Upload image here'
          />
        </fieldset>
        <fieldset>
          <label className='inline-block mb-3 text-primary text-xl leading-[30px] font-bold'>
            Location
          </label>
          <div className='flex items-center gap-2 max-w-max'>
            <RadioInput checked={isOnlineEvent} onChecked={toggleOnlineEvent} />
            <span className='text-primary text-2xl'>Online Event</span>
          </div>
        </fieldset>
      </section>
      <section className='flex justify-end'>
        <div className='flex gap-[24px] items-center'>
          <Button className='!w-[173px] border-primary !border-[1px]'>
            Discard
          </Button>
          <Button className='!w-[224px] bg-primary text-white'>
            Save Changes
          </Button>
        </div>
      </section>
    </div>
  );
}
