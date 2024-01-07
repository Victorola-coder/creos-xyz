/* eslint-disable react/prop-types */

export default function Box({ className, children }) {
  return (
    <div className={` ${className ?? ''} px-5 py-[30px] lg:px-[100px] lg:py-[100px]`}>
      {children}
    </div>
  );
}
