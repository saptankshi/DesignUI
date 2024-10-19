import React from 'react';

function ContentTabs() {
  return (
    <div className="flex gap-3.5 self-center mt-11 max-w-full text-xs tracking-tighter leading-none text-center w-[135px] max-md:mt-10">
      <div className="flex items-center">
      <div className="self-end px-6 py-2 mt-1.5 rounded-2xl border border-solid bg-neutral-800 border-white border-opacity-10 text-orange-100 text-opacity-60 whitespace-nowrap max-md:-mr-4">
      For You
        </div>
        <div
          className="self-start px-2 py-1 whitespace-nowrap rounded-3xl border border-solid border-white border-opacity-10"
          style={{
            background: '#262626',
            marginLeft: '-15px',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(90deg, #7D22FF, #FF8E8E)', 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', 
              display: 'inline-block',
              padding: '2px 4px', 
            }}
          >
            Beta
          </span>
        </div>
      </div>
      <div className="my-auto text-orange-100 text-opacity-60">Following</div>
    </div>
  );
}

export default ContentTabs;