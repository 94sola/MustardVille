import { useState } from "react"; 
import { Link } from "react-router-dom";
import logo from "../assets/image/mus-logo.jpg";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) setActiveDropdown(null); // Close dropdowns when closing menu
  };

  const menuItems = {
    CLASSES: [
      { label: "Creche", link: "/creche" },
      { label: "Preschool Classes", link: "/preschool" },
      { label: "Nursery and Primary Classes", link: "/primary" },
      { label: "After School", link: "/after" },
    ],
    TEAM: [
      { label: "Our Team", link: "/team" },
      { label: "Testimonial", link: "/testimonial" },
    ],
  };

  return (
    <header className="bg-yellow-50 text-blue-950 font-sans shadow-lg sticky top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center px-6 lg:px-16 py-4 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MUS Logo"
            className="rounded-md w-11 sm:w-14 md:w-16 h-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-3xl text-blue-950"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links (Mobile & Desktop) */}
        <div
          className={`absolute lg:static bg-white lg:bg-transparent top-16 left-0 w-full lg:w-auto lg:flex flex-col lg:flex-row lg:items-center transition-all duration-300 ease-in-out shadow-lg lg:shadow-none ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 text-sm font-medium lg:items-center px-6 lg:px-0">
            <li>
              <Link to="/" className="uppercase hover:text-yellow-500">
                HOME
              </Link>
            </li>

            <li>
              <Link to="/about" className="uppercase hover:text-yellow-500">
                ABOUT US
              </Link>
            </li>

            {/* Dropdown Menus */}
            {Object.keys(menuItems).map((menu) => (
              <li key={menu} className="relative">
                {/* Dropdown Toggle */}
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="flex items-center gap-2 uppercase hover:text-yellow-500"
                >
                  {menu}
                  <FaChevronDown
                    className={`transition-transform ${
                      activeDropdown === menu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === menu && (
                  <ul className="absolute lg:relative top-full left-0 bg-yellow-100 lg:bg-transparent text-blue-950 mt-6 lg:mt-0 py-2 shadow-lg lg:shadow-none rounded-md w-48 lg:w-auto">
                    {menuItems[menu].map((item) => (
                      <li key={item.label} className="py-2 px-4 hover:bg-yellow-400 rounded-md">
                        <Link to={item.link} onClick={() => setIsMobileMenuOpen(false)}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <Link to="/gallery" className="uppercase hover:text-yellow-500">
                GALLERY
              </Link>
            </li>

            <li>
              <Link to="/news" className="uppercase hover:text-yellow-500">
                NEWS & EVENTS
              </Link>
            </li>

            <li>
              <Link to="/contact" className="uppercase hover:text-yellow-500">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
