import React from 'react';

function TabMenu() {
  return (
    <nav className="flex gap-3.5 self-center mt-11 max-w-full text-xs tracking-tighter leading-none text-center w-[135px] max-md:mt-10">
      <div className="flex items-start">
        <div className="self-end px-3 py-2 mt-1.5 rounded-3xl border border-solid bg-neutral-800 border-white border-opacity-10 text-orange-100 text-opacity-60 max-md:-mr-4">
          For You
        </div>
        <div className="self-start px-2 py-1 whitespace-nowrap rounded-3xl border border-solid bg-neutral-800 border-white border-opacity-10">
          Beta
        </div>
      </div>
      <div className="my-auto text-orange-100 text-opacity-60">Following</div>
    </nav>
  );
}

export default TabMenu;