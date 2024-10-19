import React from 'react';
import Logo from './Logo';
import UpgradeButton from './UpgradeButton';
import NavItem from './NavItem';
import SearchBar from './SearchBar';
import IconButton from './IconButton';
import UserProfile from './UserProfile';

function Header() {
  const navItems = [
    { text: 'Home', isActive: true },
    { text: 'Discover', isActive: false }
  ];

  const iconButtons = [
    { src: "/plus.svg", alt: "Notification" },
    { src: "/arrow.svg", alt: "Messages" },
    { src: "/equal.svg", alt: "Bookmarks" },
    { src: "/bell.svg", alt: "Settings" }
  ];

  return (
    <header className="flex flex-col px-11 pt-11 w-full bg-[#131313] max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-5 justify-between items-center w-full max-md:max-w-full">
        <div className="flex gap-5 self-stretch my-auto text-xs tracking-tighter leading-none text-center text-orange-100 whitespace-nowrap">
         <a href="/">
                  <Logo />
                  </a>
          <UpgradeButton />
          {navItems.map((item, index) => (
            <NavItem key={index} text={item.text} isActive={item.isActive} />
          ))}
        </div>
        <SearchBar />
        <div className="flex gap-4  items-center self-stretch my-auto">
          {iconButtons.map((button, index) => (
            <IconButton key={index} src={button.src} alt={button.alt} />
          ))}
          <UserProfile />
          <img loading="lazy"  src="/arrow1.png" alt="" className="object-contain shrink-0 cursor-pointer self-stretch my-auto w-2 aspect-[1.6]" />
        </div>
      </nav>
    </header>
  );
}

export default Header;