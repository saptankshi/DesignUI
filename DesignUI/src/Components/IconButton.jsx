import React from 'react';

function IconButton({ src, alt }) {
  return (
    <button aria-label={alt}>
      <img loading="lazy" src={src} alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
    </button>
  );
}

export default IconButton;