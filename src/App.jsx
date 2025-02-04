import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './component/navbar';
import Footer from './component/Footer';

// Pages
import Home from './component/Home'; // Home Page (includes Chemxpert, Labsoft, etc.)
import After from './component/afterschool';
import Creche from './component/creche';
import Primary from './component/primary';
import Team from './component/team';
import Preschool from './component/preschool';
import Contact from './component/contact';
import Testimonial from './component/testimonial';
import About from './component/about';
import Gallery from './component/gallery';
import Event  from './component/news&event';


function App() {
  return (
    <div className="max-w-full">
      <Router>
        {/* Navbar (Visible on all pages) */}
        <Nav />

        {/* Routes to Navigate Between Pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page with included components */}
          <Route path="/after" element={<After />} />
          <Route path="/about" element={<About />} />
          <Route path="/creche" element={<Creche />} />
          <Route path="/primary" element={<Primary />} />
          <Route path="/team" element={<Team />} />
          <Route path="/preshool" element={<Preschool />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/event" element={<Event />} />
        </Routes>

        {/* Footer (Visible on all pages) */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
