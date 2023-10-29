export default function Container({ children, className }) {
  return (
    <div className={`m-5 lg:m-[100px] ${className ?? ''}`}>{children}</div>
  );
}
