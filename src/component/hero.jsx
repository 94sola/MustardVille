import hero from "../assets/image/hero-pg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Chemx() {
  return (
    <div className="relative text-white bg-blue-950 py-20 px-6 sm:px-10 lg:px-20 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center w-full max-w-9xl">
        
        {/* Left Section - Text Content */}
        <div className="space-y-8 text-center lg:text-left max-w-3xl">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-yellow-300 leading-snug">
            A Magical Place Where Learning Begins! 🎈
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 font-light">
            At <span className="text-yellow-300 font-bold">Mustardville</span>, we turn every moment into a fun adventure, helping kids grow through play, learning, and creativity! 🌟
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
            <Link to="/about">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className="bg-yellow-300 text-blue-950 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 text-lg sm:text-xl shadow-md"
              >
                Learn More
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className="bg-pink-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-500 transition duration-300 text-lg sm:text-xl shadow-md"
              >
                Enroll Now
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Center Section - Fun Branding */}
        <motion.div 
          className="text-center px-4 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold capitalize leading-tight text-white drop-shadow-lg">
            Welcome to  
            <span className="bg-yellow-300 text-blue-950 px-4 py-2 rounded-lg ml-2">
              Mustardville
            </span> 🎨📚 <br/> 
            Where <span className="bg-pink-400 px-4 py-2 rounded-lg">Play</span>, 
            <span className="bg-blue-300 px-4 py-2 rounded-lg">Imagination</span>, &  
            <span className="bg-green-400 px-4 py-2 rounded-lg">Growth</span> Begin! 🚀
          </h1>
        </motion.div>

        {/* Right Section - Playful Image Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.img
              key={index}
              src={hero}
              alt="Hero"
              className="w-32 sm:w-40 md:w-44 lg:w-52 h-auto rounded-lg shadow-lg transform rotate-6"
              whileHover={{ scale: 1.1, rotate: 12 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chemx;