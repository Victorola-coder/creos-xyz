/* eslint-disable react/prop-types */
export default function Input({
  className,
  name,
  type,
  value,
  onChange,
  ...prop
}) {
  //   const { className, value, onChange, ...prop } = props;

  return (
    <input
      {...prop}
      value={value}
      type={type}
      name={name}
      onChange={onChange}
      className={`bg-white w-full p-3 rounded-full outline-none
          min-w-[300px] font-medium bgg-[#E6EAE8] font-sat ${className} 
        placeholder:text-primary-faded text-ellipsis text-black text-xl lg:text-2xl`}
    />
  );
}
