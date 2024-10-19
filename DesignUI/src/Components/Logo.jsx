import React from 'react';

function Logo() {
  return (
    <img loading="lazy" src="/logo.svg" alt="Logo" 
    className="object-contain shrink-0 self-start mt-1.5 aspect-[0] md:aspect-[2.69] w-[78px]" 
    />
  );
}

export default Logo;