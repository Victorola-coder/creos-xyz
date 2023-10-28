export default function Button({ type, className, children, ...props }) {
  return (
    <button
      {...props}
      type={type}
      className={` ${className} rounded-[100px] py-[16px] px-[32px] w-[208px] text-base leading-[24px] font-medium outline-none text-[#000F0A] md:font-sat md:text-[20px] md:leading-[30px] md:w-[244px] transition-all duration-[1500ms] active:scale-95`}
    >
      {children}
    </button>
  );
}
