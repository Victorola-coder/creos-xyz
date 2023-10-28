export default function Container({ children, className }) {
  return (
    <div className={`w-full  mx-[100px] ${className ?? ''}`}>{children}</div>
  );
}
