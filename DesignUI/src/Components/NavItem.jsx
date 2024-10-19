import React from 'react';

function NavItem({ text, isActive }) {
  return (
    <div className={`my-auto ${isActive ? 'text-orange-100' : 'text-orange-100 text-opacity-50'}`}>
      {text}
    </div>
  );
}

export default NavItem;