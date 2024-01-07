export default function Button({ type, className, children, ...props }) {
  return (
    <button
      {...props}
      type={type}
      className={` ${className} whitespace-nowrap rounded-full py-3 px-5 w-[208px] 
      text-base font-medium outline-none text-[#000F0A] 
      font-sat md:text-xl md:w-[244px] 
      transition-all duration-300 border-solid border-[4px]`}
    >
      {children}
    </button>
  );
}
