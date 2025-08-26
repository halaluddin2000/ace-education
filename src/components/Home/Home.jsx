import Title from "../Title/Title";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Feature from "./feature/Feature";
import ExploreCountries from "./Explore Countries/ExploreCountries";
import Hero from "./Hero/Hero";
import Navbar from "./navbar/Navbar";
import Testimonials from "./Testimonial/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <div className="container">
        <Title subTitle="Feature" title="We help to get Consultation!" />
        <Feature />
      </div>
      <ExploreCountries />
      <div className="container">
        <About />
        <Testimonials />
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
