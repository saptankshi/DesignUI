import React, { useState } from 'react';

function SearchBar() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('Try "Traditional Pottery"');

  const trendingColors = [
    { name: "Black", code: "#000" },
    { name: "Gray", code: "#111" },
    { name: "White", code: "#FFF" },
    { name: "Red", code: "#F00" },
  ];

  const fashionTrends = [
    { name: "Fashion", image: "/F.png" },
    { name: "Branding", image: "/B.png" },
    { name: "Packaging", image: "/P.png" },
  ];

  return (
    <div className="relative ">
      <form
        className="flex  items-center md:px-[50px] px-[5px] md:mt-0 mt-5 py-1 w-full text-xs tracking-tighter leading-none text-center rounded-full border border-solid bg-neutral-800 border-white border-opacity-10 text-orange-100 text-opacity-60"
      >
        <div className="flex flex-row items-center justify-start w-full ">
          <div type="submit" aria-label="Search">
            <img
              loading="lazy"
              src="/star.png"  
              alt=""
              className="object-contain shrink-0 w-5 h-5 mr-[60px]"
            />
          </div>

          <label htmlFor="searchInput" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="searchInput"
            placeholder={placeholderText}
            className="w-full md:h-[3rem] h-[1.8rem] bg-transparent border-none text-orange-100 text-opacity-60 placeholder-orange-100 placeholder-opacity-60 focus:outline-none"
            onFocus={() => {
              setShowSuggestions(true);
              setPlaceholderText('SearchComet...');
            }}
            onBlur={() => {
              setShowSuggestions(false);
              setPlaceholderText('Try "Traditional Pottery"'); 
            }}
          />

          <button type="submit" aria-label="Search">
            <img
              loading="lazy"
              src="/paint.svg"
              alt=""
              className="object-contain shrink-0 w-5 h-5 ml-0 md:ml-2"
            />
          </button>
        </div>
      </form>

      {showSuggestions && (
        <div className="absolute top-full mt-2 bg-neutral-800 rounded-lg p-4 w-full border border-white border-opacity-10 z-10">
          <div className="mb-4">
            <h3 className="text-white  text-sm mb-2"> Trending</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
    {['Romance', 'Wisdom', 'Adventure', 'Fantasy'].map((topic) => (
      <div
        key={topic}
        className="text-xs text-white bg-neutral-700 p-2 rounded-lg text-center"
      >
        {topic}
      </div>
    ))}
  </div>
          </div>

          {/* Trending Colors Section */}
          <div className="mb-4">
            <h3 className="text-white text-sm mb-2"> Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5  md:gap-2">
              {trendingColors.map((color) => (
                <div key={color.code} className="flex flex-row gap-2 text-white bg-neutral-700 p-2 rounded-lg text-center">
                  <div
                    className="w-3 h-3 "
                    style={{ backgroundColor: color.code }}
                  />
                  <span className="text-xs text-white ">{color.code}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fashion Section */}
          <div className="mb-4">
  <h3 className="text-white text-sm mb-2">Trending in Fashion</h3>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    {fashionTrends.map((trend) => (
      <div key={trend.name} className="bg-neutral-700 p-2 pr-3 rounded-lg flex items-center">
        <img
          src={trend.image}
          alt={trend.name}
          className="w-5 h-5 object-cover mr-[3px]"
        />
        <span className="text-xs text-white">{trend.name}</span>
      </div>
    ))}
  </div>
</div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
