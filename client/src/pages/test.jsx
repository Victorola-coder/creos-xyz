import React, { useState } from 'react';
import { SEO } from '../components';

const ProgressSteps = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <SEO title='Just a page to randomly test logic' />
      <div className='flex items-center justify-center h-screen'>
        <div className='flex space-x-4'>
          {[1, 2, 3, 4].map((number) => (
            <div
              key={number}
              className={`h-10 w-10 flex items-center justify-center rounded-full border ${
                number <= step
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-500'
              }`}
            >
              {number}
            </div>
          ))}
        </div>

        <div className='ml-4'>
          <button
            onClick={handlePrev}
            disabled={step === 1}
            className='px-4 py-2 text-white bg-blue-500 rounded'
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={step === 4}
            className='px-4 py-2 ml-4 text-white bg-blue-500 rounded'
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProgressSteps;
