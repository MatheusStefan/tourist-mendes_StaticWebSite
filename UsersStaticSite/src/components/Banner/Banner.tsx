import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const images = [
  { src: "./src/assets/images/Home Banner.png" },
  { src: "./src/assets/images/abandoned-building-field-against-sky 1.png" },
  { src: "./src/assets/images/Home Banner.png" },
  { src: "./src/assets/images/abandoned-building-field-against-sky 1.png" },
];

function Banner(): React.ReactNode {
  const [currentIndex, setCurrentIndex] = useState(0);

   const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex items-center justify-center overflow-hidden relative">
      <Link
        to="/"
        className="w-full flex items-center justify-center object-cover"
      >
        <img
          src={images[currentIndex].src}
          alt="HomeBannerMock"
          className="w-full h-[400px] md:h-[500px] lg:h-[700px] object-cover sm:object-left lg:object-center"
        />
      </Link>

      <div className="flex items-center justify-center absolute bottom-0 mb-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 rounded-full z-10 
              bg-white-100 ${currentIndex === index ? "opacity-100" : "opacity-40"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Banner;
