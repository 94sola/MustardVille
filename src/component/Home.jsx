import Hero from './hero';
import Mustard from './mustard';
import Mustard1 from './mustard1';
import Mustard2 from './mus2';
import Mustard3 from './testy';
import Mustard4 from './ourteam';
import Mustard5 from './news';





export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Other Sections */}
      <div className="content-sections">
        <Mustard />
        <Mustard1 />
        <Mustard2 />
        <Mustard3 />
        <Mustard5 />
        <Mustard4 />
      </div>
    </div>
  );
}

