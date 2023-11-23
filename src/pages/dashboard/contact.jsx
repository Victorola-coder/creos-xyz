import { useState } from 'react';
import Button from '../../components/button';
import { SearchIcon } from '../../components/svgs';
import { List, Tab } from '../../assets/svgs/svg';
import CheckBox from '../../components/checkbox';
import { SEO } from '../../components';

export default function DashboardContacts() {
  return (
    <>
      <SEO title={`Dashboard || Contacts`} />
      <div className='flex flex-col gap-[64px]'>
        <header className='flex justify-between items-center gap-10'>
          <h1 className='text-[36px] font-sat whitespace-nowrap font-bold text-primary'>
            All Contact
          </h1>
          <div className='w-full px-[20px] max-w-[576px] h-[62px] rounded-[100px] border-[1px] border-primary flex gap-2 items-center'>
            <input
              className='outline-none flex-1 placeholder-primary text-primary bg-transparent text-[20px] font-medium caret-primary'
              placeholder='Search Events'
            />
            <SearchIcon />
          </div>
          <Button className='w-[229px] bg-primary text-white'>
            Add Contact
          </Button>
        </header>
        {<ListView />}
      </div>
    </>
  );
}

const ListView = () => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => setChecked((prev) => !prev);

  return (
    <div className='border-[1px] border-black'>
      <header className='px-[20px] grid grid-cols-[50px_1fr_1fr_1fr_1fr] gap-[40px] text-[24px] font-bold text-primary py-[25px]'>
        <div className='grid place-items-center'>
          <CheckBox
            className='border-primary'
            checked={checked}
            setChecked={toggleChecked}
          />
        </div>
        <h1>Full Name</h1>
        <h1>Profession</h1>
        <h1>LinkedIn Profile</h1>
        <h1>Work Email</h1>
      </header>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className='border-t-[1px] border-black px-[20px] grid grid-cols-[50px_1fr_1fr_1fr_1fr] gap-[40px] items-center text-[24px] text-primary py-[25px]'
        >
          <div className='grid place-items-center'>
            <CheckBox
              className='border-primary'
              checked={checked}
              setChecked={toggleChecked}
            />
          </div>
          <h1>Jerome Bell</h1>
          <h1>Medical Assistant</h1>
          <h1>/in/jeromebell/</h1>
          <h1>jeromebell@gmail/.com</h1>
        </div>
      ))}
    </div>
  );
};
