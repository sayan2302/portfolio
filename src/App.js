import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import "./app.css";
import Project from "./components/Project";

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
            <Project/>
          </section>
        </div>
      </div>
    </section>
  );
}

export default App;
