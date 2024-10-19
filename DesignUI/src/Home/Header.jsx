import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-[100px] w-full max-md:mt-10 max-md:max-w-full">
    <ThemeToggle />
    <nav className="flex gap-4 my-auto text-center text-orange-100 text-opacity-60">
        <a href="#marketplace">Marketplace</a>
        <a href="#create">Create your site</a>
      </nav>

    <header className="flex flex-wrap gap-5 justify-between self-stretch  w-full  max-md:max-w-full">
    </header>
    </div>
  );
}

export default Header;