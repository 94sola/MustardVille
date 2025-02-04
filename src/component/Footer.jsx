import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/image/mus-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-950  via-blue-400 to-blue-950 text-white py-10 px-6 md:px-12 lg:px-32">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-white pb-8">
        <div className="flex flex-col md:flex-row items-center space-x-4">
          <img src={logo} alt="Mustardville Logo" className="w-16 rounded-md" />
          <h2 className="text-2xl font-bold">Mustardville School</h2>
        </div>
        <div className="mt-6 md:mt-0 space-x-4 flex">
          <a href="https://facebook.com" className="text-white text-2xl hover:text-yellow-300 transition">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="text-white text-2xl hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="text-white text-2xl hover:text-blue-400 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mt-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt /> 44 Ajananku Street Awuse Estate Salvation Opebi Ikeja,  Lagos, Nigeria
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaPhone /> +234 807 179 3276
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaEnvelope /> info@mustardville.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-blue-900 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-900 transition">About Us</Link>
            <Link to="/gallery" className="hover:text-blue-900 transition">Gallery</Link>
            <Link to="/event" className="hover:text-blue-900 transition">News & Events</Link>
            <Link to="/contact" className="hover:text-blue-900 transition">Contact</Link>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p>Get updates on news, events, and special announcements!</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md text-black focus:outline-none w-full"
            />
            <button className="bg-blue-900 px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-8 border-t border-white pt-4">
        <p>&copy; {new Date().getFullYear()} Mustardville Academy - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;