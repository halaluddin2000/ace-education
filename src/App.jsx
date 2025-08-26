import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/navbar/Navbar";
// import Home from "./components/Home/Home";
import Home from "./components/Home/Home";
import Canada from "./components/pages/Countries/Canada";
import Malaysia from "./components/pages/Countries/Malaysia";
import Australia from "./components/pages/Countries/Australia";
import Uk from "./components/pages/Countries/Uk";
import Usa from "./components/pages/Countries/Usa";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/usa" element={<Usa />} />
        <Route path="/uk" element={<Uk />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/malaysia" element={<Malaysia />} />
      </Routes>
    </Router>
  );
}

export default App;
