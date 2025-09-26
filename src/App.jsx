import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./component/Projects";
import Herosection from "./component/Herosection";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="nav-container ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/portfolio" element={<Herosection />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
