import React from 'react';

function ImageColumn({ images }) {
  return (
    <div className="flex flex-col ">
      {images.map((image, index) => (
        <React.Fragment key={index}>
          {image.containerClass ? (
            <div className={image.containerClass }>
              <img loading="lazy" src={image.src} alt={image.alt} className={image.className} />
            </div>
          ) : (
            <img loading="lazy" src={image.src} alt={image.alt} className={image.className} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ImageColumn;