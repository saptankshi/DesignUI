import React, { useState } from 'react';
import Footer from "./Footer";
import Button from "./Button";
import Logo from '../Components/Logo';
import { useNavigate, Link } from "react-router-dom"; 

function MyComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate(); 

  const handleGetInspiredClick = () => {
    navigate("/Components/MainLayout"); 
  };

  return (
    
    <main className="relative flex flex-col items-center px-9 pt-11 pb-7 w-full max-md:px-5 max-md:max-w-full bg-image">
      <div className="absolute top-0 left-0 right-0 bottom-0 content z-10" />
      <header className="w-full md:w-1/2 h-[23%] md:h-1/2 md:bg-neutral-700 p-3 rounded-[10rem]  md:bg-[url('/hbg.png')]  mx-auto">
      {/* mobile menu */}
      <div className="md:hidden flex justify-between items-center px-1 w-full">
  <Logo />

  <div className="flex space-x-4 items-center">
    <div className="relative flex justify-between ml-4 items-center border-[1px] px-4 rounded-[8rem] border-[#666665] text-[#c9c7c7]">
      <Link to="/Components/MainLayout" className="md:text-lg text-md cursor-pointer">Login</Link>
      <div className="absolute bottom-0 left-0 ml-5 mt-3 w-1/2 h-[1px] shine-border"></div>
    </div>

    <div className="relative flex justify-between bg-[#FCFCD8] rounded-3xl px-2  md md:px-4 items-center text-black border-white border-2 shine-shadow">
      <Link to="/Components/MainLayout" className="md:text-lg text-md cursor-pointer">Signup</Link>
      <div className="absolute bottom-0 left-0 w-full shine-border h-[2px]"></div>
    </div>
  </div>
</div>

      {/* desktop menu */}
      <div className="hidden md:flex md:flex-row gap-10 items-center justify-between ml-4">
      <div className="flex justify-between items-center text-[#fff]">
            <Logo />
          {/* <span className="text-lg cursor-pointer">Comet</span> */}
        </div>
        <div className="flex justify-between items-center text-[#c9c7c7]">
          <span className="text-lg cursor-pointer">Manifesta</span>
        </div>
        <div className="flex justify-between items-center text-[#c9c7c7]">
          <span className="text-lg cursor-pointer">Discover</span>
        </div>
        <div className="relative flex justify-between items-center border-[1px] px-4 rounded-[8rem] border-[#666665] text-[#c9c7c7]">

        <Link to="/Components/MainLayout" className="text-lg cursor-pointer">Login</Link>
            <div className="absolute bottom-0 left-0 ml-5 mt-3 w-1/2 h-[1px] shine-border"></div>
          </div>
          <div className="relative flex justify-between bg-[#FCFCD8] rounded-3xl px-4 items-center text-black border-white border-2 shine-shadow">
            <Link to="/Components/MainLayout" className="text-lg cursor-pointer">Signup</Link>
  
    <div className="absolute bottom-0 left-0 w-full shine-border h-[2px]"></div>
</div>
      </div>
    </header>
      <h1 className="mt-60 text-8xl tracking-tighter text-center text-orange-100 font-[450] max-md:mt-10 max-md:max-w-full max-md:text-4xl z-20">
        Made for Creatives
      </h1>
      <div className="flex gap-3 mt-5 max-w-full tracking-tight text-center text-orange-100 w-[270px] z-20">
        <p className="grow my-auto">A discovery engine for</p>
        <div className="flex flex-col px-3.5 pt-3 whitespace-nowrap rounded-2xl border border-solid border-orange-100 border-opacity-10 z-20">
          <p>creatives</p>
          <div className="flex z-10 shrink-0 self-center mt-2.5 w-5 rounded-full bg-orange-100 bg-opacity-20 h-[9px]" />
        </div>
      </div>
      <div className="flex gap-5  justify-center items-start ml-1 md:ml-16 max-w-full font-semibold text-center text-neutral-900 w-[234px] z-20">
      <Button text="Get Inspired" onClick={handleGetInspiredClick} /> 
      </div>
      <Footer />
    </main>
  );
}

export default MyComponent;
