import { useState, useEffect } from 'react';
import hero1 from '../assets/image/m-1.jpg';
import hero2 from '../assets/image/m-2.jpg';
import hero3 from '../assets/image/m-3.jpg';
import hero4 from '../assets/image/m-4.jpg';
import hero5 from '../assets/image/m-5.jpg';

const images = [hero1, hero2, hero3, hero4, hero5];

function Creche() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Set up an interval to automatically slide the images every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 2000); // Change image every 2 seconds
    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  // Define the text for each hero image
  const heroTexts = [
    {
      h1: 'Mustardville School is the best school for your child',
      p: 'At Mustardville, we cultivate intelligence, skills, and curiosity, preparing your child for a future of success.',
      h1Bg: 'bg-blue-950',
      pBg: 'bg-yellow-500',
    },
    {
      h1: 'Unlock Your Child’s Potential at Mustardville',
      p: 'Our comprehensive curriculum empowers your child to achieve excellence in every aspect of their life.',
      h1Bg: 'bg-green-700',
      pBg: 'bg-blue-500',
    },
    {
      h1: 'Education with Purpose at Mustardville',
      p: 'We strive to create an environment where your child’s academic and personal growth are our top priorities.',
      h1Bg: 'bg-red-600',
      pBg: 'bg-orange-400',
    },
    {
      h1: 'Inspiring Young Minds at Mustardville',
      p: 'We offer a dynamic and nurturing atmosphere where children develop the skills to lead and innovate.',
      h1Bg: 'bg-purple-600',
      pBg: 'bg-teal-400',
    },
    {
      h1: 'Building the Future with Mustardville',
      p: 'Your child’s education is the foundation for a lifetime of achievement, and Mustardville is here to guide them.',
      h1Bg: 'bg-yellow-600',
      pBg: 'bg-pink-500',
    },
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      ></div>

      {/* Overlay Effect only for the first image */}
      {currentImageIndex === 0 && (
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-yellow-500/50 to-black/20"></div>
      )}

      {/* Text Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 sm:px-8 lg:px-16">
        {/* Hero Text Right */}
        <div
          className={`w-[90%] sm:w-[70%] lg:w-[40%] ${heroTexts[currentImageIndex].h1Bg} rounded-xl px-4 py-6 lg:py-10 text-right`}
          style={{ marginTop: '5%' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-serif text-transparent bg-clip-text bg-white animate-fade-in">
            {heroTexts[currentImageIndex].h1}
          </h1>
        </div>

        {/* Hero Text Left */}
        <div
          className={`w-[90%] sm:w-[70%] lg:w-[30%] ${heroTexts[currentImageIndex].pBg} rounded-lg px-4 py-4 lg:py-6`}
          style={{ marginBottom: '5%' }}
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-blue-950 animate-fade-in delay-150">
            {heroTexts[currentImageIndex].p}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={prevImage}
          className="bg-black text-white p-2 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          ❮
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={nextImage}
          className="bg-black text-white p-2 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          ❯
        </button>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-in-out forwards;
          }

          .delay-150 {
            animation-delay: 0.15s;
          }

          .delay-300 {
            animation-delay: 0.3s;
          }
        `}
      </style>
    </div>
  );
}

export default Creche;

