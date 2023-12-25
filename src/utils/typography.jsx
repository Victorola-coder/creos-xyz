export function H1({ children, className, ...props }) {
  return (
    <h1
      className={`sm:text-4xl text-3xl font-bold mb-4 ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }) {
  return (
    <h2
      className={`sm:text-3xl text-2xl font-semibold mb-3 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }) {
  return (
    <h3
      className={`sm:text-2xl text-xl font-semibold mb-2 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function P({ children, className, ...props }) {
  return (
    <p className={`sm:text-base text-sm mb-4 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function Text({ children, className, ...props }) {
  return (
    <span className={`sm:text-base text-sm ${className}`} {...props}>
      {children}
    </span>
  );
}

export function Title({ children, className, leading, small }) {
  return (
    <span className={`
    ${leading ? 'lg:text-5xl text-3xl' : small ? ' text-xl lg:text-2xl' : 'text-2xl lg:text-3xl'} 
    ${small ? 'font-normal' : 'font-black'}
    text-light text-center 
      ${className}`}>
      {children}
    </span>
  );
}

export function SubTitle({ children, className, leading, small }) {
  return (
    <span className={`
    text-xl lg:text-3xl text-[#B0BDB9]  text-center lg:w-11/12
      ${className}`}>
      {children}
    </span>
  );
}
