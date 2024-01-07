/* eslint-disable react/prop-types */
export default function Input({
  className,
  rounded = false,
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
      className={`bg-white w-full p-3 px-5 ${rounded ? 'rounded-full': 'rounded-lg'} outline-none
      min-w-[300px] font-[400] bgg-[#E6EAE8] font-sat placeholder:text-primary-faded text-ellipsis text-black text-xl ${className}`}
    />
  );
}
