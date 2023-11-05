/* eslint-disable react/prop-types */
export default function Input({ className, value, onChange, ...prop }) {
  //   const { className, value, onChange, ...prop } = props;

  return (
    <input
      {...prop}
      value={value}
      onChange={onChange}
      className={`${className} outline-none w-full placeholder:text-[#012B1D] min-w-[300px] text-[#012B1D] text-[20px] leading-[30px] font-medium rounded-[8px]  bg-[#E6EAE8] py-[17px] pl-[20px]  pr-[16px] px-[20px] font-sat`}
    />
  );
}
