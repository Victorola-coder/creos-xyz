export default function Container({ children, className }) {
  return (
    <div className={`w-full max-w-[1512px] mx-[100px] ${className ?? ''}`}>
      {children}
    </div>
  );
}
