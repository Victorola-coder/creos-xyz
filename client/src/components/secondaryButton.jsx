/* eslint-disable react/prop-types */
export default function SecondaryButton(props) {
  const { children, loading, disabled, className, ...prop } = props;

  return (
    <button
      disabled={disabled || loading}
      className={`${
        className ?? ''
      }grid place-items-center h-[62px] w-full disabled:bg-primary-fadeds transition-all duration-200 active:scale-95 bg-creos rounded-[100px]`}
      {...prop}
    >
      <div className='flex items-center font-medium text-primary text-xl leading-[30px] font-int'>
        {loading && (
          <svg
            className='w-5 h-5 mr-3 -ml-1 text-white animate-spin'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx={12}
              cy={12}
              r={10}
              stroke='currentColor'
              strokeWidth={4}
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
        )}
        {children}
      </div>
    </button>
  );
}
