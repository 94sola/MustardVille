import { motion } from "framer-motion";
import { FaSchool, FaChalkboardTeacher, FaCertificate } from "react-icons/fa";

const Mustard = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center py-16 px-6 sm:px-10 lg:px-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950">
          🌟 Welcome to <span className="text-yellow-500">Mustardville</span>! 🌟
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-lg sm:text-xl">
          A magical place where **curiosity meets creativity**, and **learning feels like play**! We nurture young minds, empowering future leaders with **love, care, and excellence**.
        </p>
      </div>

      {/* Grid Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Best Environment */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-blue-950 text-white p-10 rounded-xl shadow-lg text-center"
          >
            <FaSchool className="text-6xl mx-auto text-yellow-300" />
            <h3 className="text-3xl font-bold mt-4">Best Environment</h3>
            <p className="mt-3 text-lg">
              A safe, vibrant, and nurturing space where children **explore, discover, and grow**.
            </p>
          </motion.div>

          {/* Wonderful Teachers */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-yellow-500 text-blue-950 p-10 rounded-xl shadow-lg text-center"
          >
            <FaChalkboardTeacher className="text-6xl mx-auto text-blue-950" />
            <h3 className="text-3xl font-bold mt-4">Wonderful Teachers</h3>
            <p className="mt-3 text-lg">
              Passionate educators **who make learning exciting and engaging** every day!
            </p>
          </motion.div>

          {/* Certified & Trusted */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-pink-600 text-white p-10 rounded-xl shadow-lg text-center"
          >
            <FaCertificate className="text-6xl mx-auto text-yellow-300" />
            <h3 className="text-3xl font-bold mt-4">Certified & Trusted</h3>
            <p className="mt-3 text-lg">
              Mustardville is **government-certified** and meets the highest educational standards.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Fun Bottom Section */}
      <div className="mt-16 bg-gradient-to-r from-yellow-400 to-blue-500  py-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-950">
          🎈 Learning is Fun at Mustardville! 🎈
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-blue-900 max-w-3xl mx-auto">
          We believe that **every child deserves a joyful, inspiring, and rewarding learning experience**. Join us on this wonderful journey! 🚀
        </p>
      </div>
    </div>
  );
};

export default Mustard;
