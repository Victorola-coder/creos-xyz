/* eslint-disable react/prop-types */
import { Listbox, Transition } from '@headlessui/react';

export default function Select(props) {
  const { value, onChange, options, selectedOption } = props;

  //   console.log(selectedOption);

  return (
    <Listbox
      value={value}
      as='div'
      onChange={onChange}
      className='relative z-10'
    >
      {({ open }) => (
        <>
          <div className='flex justify-between gap-2 pr-2 h-[62px] w-full bg-[#E6EAE8] border-[1px] border-white rounded-md'>
            <Listbox.Button className='pl-3 lg:pl-6 text-xl lg:text-2xl h-full text-left text-primary font-medium flex-1'>
              {selectedOption?.name ? selectedOption.name : 'Select Product'}
            </Listbox.Button>
            <div className='w-[24px] h-full grid place-items-center'>
              <span className='material-icons text-primary'>
                {' '}
                {open ? 'expand_less' : 'expand_more'}{' '}
              </span>
            </div>
          </div>
          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Listbox.Options className='z-10 absolute bg-white w-full rounded-md mt-2 overflow-x-hidden max-h-[150px] overflow-y-auto custom-scroll-bar'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  value={option}
                  className='py-[8px] px-6 cursor-pointer hover:bg-primary hover:bg-opacity-70 text-[16px] border-b-[1px] border-b-[#ccc] text-primary'
                >
                  {option.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
}
