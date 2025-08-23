import Feature from "./components/feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import ExploreCountries from "./components/pages/Explore Countries/ExploreCountries";
import Testimonials from "./components/Testimonial/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Feature />
      </div>
      <div className="bg-[#dce0e8]">
        <ExploreCountries />
      </div>

      <div className="container">
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
