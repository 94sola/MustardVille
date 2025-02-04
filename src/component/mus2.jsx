import cre from "../assets/image/cre.jpg";
import pre from "../assets/image/pres.jpg";
import pri from "../assets/image/prim.jpg";
import nur from "../assets/image/nurs.jpg";
import after from "../assets/image/after.jpg";
import crea from "../assets/image/m-1.jpg";
import pres from "../assets/image/m-2.jpg";
import pris from "../assets/image/m-3.jpg";
import nurs from "../assets/image/m-4.jpg";
import afters from "../assets/image/m-5.jpg";
import prise from "../assets/image/m-6.jpg";
import nurse from "../assets/image/pre.jpg";
import afte from "../assets/image/hero-pg.jpg";
import { motion } from "framer-motion";

const Gallery = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-100 to-white py-16 px-6 sm:px-10 lg:px-16 min-h-screen flex flex-col items-center">
            {/* Section Header */}
            <motion.h1 
                className="text-4xl sm:text-5xl font-bold text-blue-950 drop-shadow-lg text-center mb-12 relative inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Our Media
                <span className="absolute -bottom-2 left-1/2 w-32 h-1 bg-pink-500 transform -translate-x-1/2"></span>
            </motion.h1>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                {[crea, pres, pris, nurs, afters, prise, nurse, cre, after, pri, nur, pre, afte].map((image, index) => (
                    <motion.div 
                        key={index} 
                        className="overflow-hidden rounded-lg shadow-lg relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                    >
                        <motion.img 
                            src={image} 
                            alt="Gallery Image" 
                            className="w-full h-60 object-cover transition-transform duration-700 transform hover:scale-110 hover:brightness-110"
                            animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
