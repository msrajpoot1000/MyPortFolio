import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Projects from './Component/Projects/Projects';
import Skills from './Component/Skills/Skills';
import Certificates from './Component/Certificates/Certificate';
import Contact from './Component/Contact/Contact';
// import Script1 from "./Script1";
import "./Component/style.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects/>
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
