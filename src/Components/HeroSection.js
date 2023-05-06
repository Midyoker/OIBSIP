import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function HeroSection() {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const sliderRef = useRef(null);

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Slider {...sliderSettings} ref={sliderRef}>
          <div className="h-screen w-full bg-blue-500 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Page 1</h1>
          </div>
          <div className="h-screen w-full bg-green-500 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Page 2</h1>
          </div>
          <div className="h-screen w-full bg-red-500 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Page 3</h1>
          </div>
        </Slider>
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-48 md:pt-40 md:pb-64">
            <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl mb-10">
              Welcome to our website
            </h1>
            <p className="text-xl text-gray-700 mb-10">
              Welcome to the test website of Oasis infobyte internship. Here we have made a website using React.js and Tailwind CSS.
            </p>
            <button className="bg-blue-500 text-white py-20 px-8 rounded-full font-bold text-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
