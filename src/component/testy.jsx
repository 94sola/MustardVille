import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import pic from "../assets/image/parent.jpg";
import parent from "../assets/image/parent2.jpg";
import pare from "../assets/image/parent3.jpg";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Mustardville has transformed my child's learning experience. The teachers are amazing!",
    image: pic,
  },
  {
    id: 2,
    name: "Michael Johnson",
    text: "An incredible school with a nurturing environment. My kids love it here!",
    image: pare,
  },
  {
    id: 3,
    name: "Jane Smith",
    text: "The best decision we made was enrolling our child at Mustardville. A+ education!",
    image: parent,
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-r from-yellow-400 via-blue-500 to-pink-600 text-white py-16 px-6 md:px-12 lg:px-32 rounded-2xl shadow-xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        What Parents Say About Us
      </h2>

      <div className="relative w-full max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-blue-900 p-8 md:p-10 rounded-lg shadow-xl text-center"
          >
            <FaQuoteLeft className="text-yellow-500 text-3xl md:text-4xl mb-4" />
            <p className="text-lg md:text-xl italic">{testimonials[index].text}</p>
            <FaQuoteRight className="text-yellow-500 text-3xl md:text-4xl mt-4" />
            <div className="flex flex-col items-center mt-6">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-yellow-500 shadow-md"
              />
              <h3 className="mt-3 font-semibold text-xl md:text-2xl text-blue-950 hover:text-pink-500 transition">
                {testimonials[index].name}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ✅ Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-2">
          <button
            onClick={prevTestimonial}
            className="bg-yellow-500 text-white text-lg md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-yellow-500 text-white text-lg md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* ✅ Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 md:h-4 md:w-4 rounded-full ${
              i === index ? "bg-yellow-500" : "bg-gray-300"
            } transition`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
