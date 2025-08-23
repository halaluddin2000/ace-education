import Feature from "./components/feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import ExploreCountries from "./components/pages/Explore Countries/ExploreCountries";
import Testimonials from "./components/Testimonial/Testimonials";
import Title from "./components/Title/Title";

function App() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <div className="container" id="feature">
        <Title subTitle="Feature" title="We help to get Consultation!" />
        <Feature />
      </div>

      <section id="explore">
        <ExploreCountries />
      </section>

      <div className="container" id="about">
        <About />
      </div>

      <div className="container" id="testimonials">
        <Testimonials />
      </div>

      <div className="container" id="contact">
        <Contact />
        <Footer />
      </div>
    </div>

    // <div>
    //   <Navbar />
    //   <Hero />
    //   <div className="container">
    //     <Title subTitle="Feature" title="We help to get Consultation!" />
    //     <Feature />
    //   </div>
    //   <ExploreCountries />
    //   <div className="container">
    //     <About />
    //     <Testimonials />
    //     <Contact />
    //     <Footer />
    //   </div>
    // </div>
  );
}

export default App;
