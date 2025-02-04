import { FaCalendarAlt } from "react-icons/fa"; 
import sport from '../assets/image/m-2.jpg';
import grad from '../assets/image/grad.jpg';
import term from '../assets/image/term.jpg';
import girls from '../assets/image/girs-day.jpg';
import boys from '../assets/image/boys-day.jpg';
import { Link } from "react-router-dom";

const mainEvents = [
  {
    id: 1,
    title: "Sports and Christmas Fun Day",
    date: "December 15, 2025",
    description: "An exciting day filled with sports, Christmas activities, and fun competitions!",
    image: sport, 
  },
  {
    id: 2,
    title: "End of 2nd Term Party",
    date: "April 5, 2025",
    description: "A grand celebration marking the successful completion of the second term.",
    image: term,
  },
  {
    id: 3,
    title: "Graduation Ceremony",
    date: "July 20, 2025",
    description: "A special day to honor our graduates as they step into the future!",
    image: grad,
  },
];

const specialEvents = [
  {
    id: 4,
    title: "International Boys' Day",
    date: "May 16th",
    description: "A special day to celebrate and appreciate the contributions of boys worldwide.",
    image: boys,
  },
  {
    id: 5,
    title: "International Girls' Day",
    date: "October 3rd",
    description: "A day dedicated to empowering and inspiring young girls around the world.",
    image: girls,
  },
];

const Events = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-20 xl:px-32 bg-yellow-100 text-black">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Events</h2>
        <p className="text-lg">Stay updated with what's happening at Mustardville Academy.</p>
      </div>

      {/* Main Events Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mainEvents.map((event) => (
          <div key={event.id} className="bg-white text-blue-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-bold">{event.title}</h3>
              <p className="text-yellow-500 flex items-center gap-2 mt-2">
                <FaCalendarAlt /> {event.date}
              </p>
              <p className="mt-2 text-gray-700">{event.description}</p>
              <Link to="/event">
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Special Events Section - Adjusted for Mobile */}
      <div className="mt-10 grid grid-cols-1px-4 sm:px-10 lg:px-40 xl:px-36 sm:grid-cols-2 gap-6">
        {specialEvents.map((event) => (
          <div key={event.id} className="bg-white text-blue-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-bold">{event.title}</h3>
              <p className="text-yellow-500 flex items-center gap-2 mt-2">
                <FaCalendarAlt /> {event.date}
              </p>
              <p className="mt-2 text-gray-700">{event.description}</p>
              <Link to="/event">
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
