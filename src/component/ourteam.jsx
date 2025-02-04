import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import principal from "../assets/image/girs-day.jpg";
import teacher1 from "../assets/image/parent.jpg";
import teacher2 from "../assets/image/parent2.jpg";
import teacher3 from "../assets/image/parent3.jpg";

const staffData = [
  {
    id: 1,
    name: "Mr. John Williams",
    position: "School Principal",
    image: principal,
  },
  {
    id: 2,
    name: "Mrs. Olivia Carter",
    position: "Head of Mathematics",
    image: teacher1,
  },
  {
    id: 3,
    name: "Mr. David Smith",
    position: "Head of Science",
    image: teacher2,
  },
  {
    id: 4,
    name: "Miss Emily Johnson",
    position: "Head of Arts & Music",
    image: teacher3,
  },
];

const StaffSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-32 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 text-white">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4">Meet Our Dedicated Staff</h2>
        <p className="text-lg">Our team of experienced educators is committed to shaping the future.</p>
      </div>

      {/* Staff Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {staffData.map((staff) => (
          <div key={staff.id} className="bg-white text-blue-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={staff.image} alt={staff.name} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold">{staff.name}</h3>
              <p className="text-lg text-gray-700">{staff.position}</p>
              
              {/* Social Media Icons */}
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600 transition">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaffSection;
