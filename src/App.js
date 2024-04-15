import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import "./app.css";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <section id="intro">
      <div className="App relative w-full">
        <Header />
        <div className="w-2/3 overflow-hidden mx-auto ">
          <Intro />
          <section id="about">
            <About />
          </section>
          <section id="project">
            <Project />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
        <Footer/>
    </section>
  );
}

export default App;
