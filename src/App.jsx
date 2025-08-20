import Feature from "./components/feature/Feature";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About/About";
import ExploreCountries from "./components/pages/Explore Countries/ExploreCountries";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <div className="bg-[#dce0e8]">
        <ExploreCountries />
      </div>
      <About />
    </div>
  );
}

export default App;
