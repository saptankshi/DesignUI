import React from 'react';
import ImageColumn from './ImageColumn';

function ImageGrid() {
  const columns = [
    [
      { src: "/phone.png", alt: "Image 1", className: "object-contain aspect-[1.05] w-[184px]", containerClass: "flex flex-col justify-center px-7 py-16 bg-stone-100 max-md:px-5" },
      { src: "/bakery.png", alt: "Image 2", className: "object-contain mt-5 w-full aspect-[0.88]" }
    ],
    [
      { src: "/edit.png", alt: "Image 3", className: "object-contain aspect-[2.89] md:aspect-[1.39] w-[180px]", containerClass: "flex flex-col justify-center px-2 py-14 bg-stone-200" },
      { src: "/donuts.png", alt: "Image 4", className: "object-contain mt-5 aspect-[0.61] w-[230px]" }
    ],
    [
      { src: "/trell.png", alt: "Image 5", className: "object-contain w-full aspect-[0.79]" },
      { src: "/fr.png", alt: "Image 6", className: "object-contain mt-5 w-full md:aspect-[0.88] aspect-[0]" }
    ],
    [
      { src: "/chilli.png", alt: "Image 7", className: "object-contain aspect-[0.79] w-[230px]" },
      { src: "/touch.png", alt: "Image 8", className: "object-contain mt-5 aspect-[1.03] w-[230px]" },
      { src: "/edit1.png", alt: "Image 9", className: "object-cover hidden md:block aspect-[1.95] w-[173px]", containerClass: "flex flex-col hidden md:block px-2 pt-10 pb-px mt-5 bg-stone-200" }
    ],
    [
      { src: "/img.png", alt: "Image 10", className: "object-contain hidden md:block w-[full] aspect-[0.79]" },
      { src: "/roasted.png", alt: "Image 11", className: "object-contain mt-5 w-full hidden md:block aspect-[0.88]" }
    ]
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-5 mt-20 max-w-[90%] object-fit md:max-w-[110%] max-md:mt-10 max-md:mr-1">
      {columns.map((column, index) => (
        <ImageColumn key={index} images={column} />
      ))}
    </div>
  );
}

export default ImageGrid;