import { FaBaby, FaBookOpen, FaChalkboardTeacher, FaGraduationCap, FaStar } from "react-icons/fa";
import cre from "../assets/image/cre.jpg";
import pre from "../assets/image/pres.jpg";
import pri from "../assets/image/prim.jpg";
import nur from "../assets/image/nurs.jpg";
import after from "../assets/image/after.jpg";
import { motion } from "framer-motion";

function Mus() {
  return (
    <div className="relative text-blue-950 bg-gradient-to-r from-yellow-100 via-blue-200 to-pink-300 py-24 px-6 sm:px-10 lg:px-16 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Section Header */}
      <motion.div 
        className="text-center bg-yellow-300 border border-b-pink-400 h-40 w-full max-w-4xl transform rotate-3 rounded-2xl py-8 flex items-center justify-center shadow-2xl"
        initial={{ scale: 0.8, opacity: 0, rotate: -3 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-950 drop-shadow-2xl flex items-center gap-4">
          <FaStar className="text-pink-500 animate-spin-slow" /> Our School Activities
        </h1>
      </motion.div>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center w-full max-w-8xl mt-16">
        {[
          { img: cre, title: "Creche Class", desc: "A loving and stimulating environment where little ones take their first steps into learning, filled with fun, play, and foundational growth.", icon: <FaBaby className="text-yellow-500 text-4xl" /> },
          { img: pre, title: "Preschool Class", desc: "A vibrant world of discovery where curiosity is encouraged through hands-on activities, storytelling, and creative expression.", icon: <FaBookOpen className="text-yellow-500 text-4xl" /> },
          { img: nur, title: "Nursery Class", desc: "An engaging space where young minds blossom, developing essential skills through interactive lessons, play-based learning, and exploration.", icon: <FaChalkboardTeacher className="text-yellow-500 text-4xl" /> },
          { img: pri, title: "Primary Class", desc: "A strong foundation for academic excellence, fostering creativity, confidence, and critical thinking in a nurturing and supportive environment.", icon: <FaGraduationCap className="text-yellow-500 text-4xl" /> },
          { img: after, title: "After School Activities", desc: "A world of adventure beyond the classroom, where students explore music, arts, sports, and STEM to develop their unique talents and passions.", icon: <FaStar className="text-yellow-500 text-4xl" /> }
        ].map((activity, index) => (
          <motion.div 
            key={index} 
            className="space-y-6 text-center bg-white p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 border-b-8 border-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img src={activity.img} alt={activity.title} className="w-full h-52 object-cover rounded-lg shadow-lg" />
            <h3 className="text-3xl font-semibold text-blue-950 flex items-center gap-3 justify-center">
              {activity.icon} {activity.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">{activity.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Mus;
