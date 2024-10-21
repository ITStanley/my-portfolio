import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills1 from "./components/Skills1";
// import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <Tools/> */}
      <About/>
      {/* <Skills/> */}
      <Skills1/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
