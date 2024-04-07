import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import "./app.css";

function App() {
  return (
    <div className="App relative w-full">
      <Header />
      <div className="w-2/3 overflow-hidden mx-auto">
        <section id="intro">
          <Intro />
        </section>
        <section id="about">
          <About />
        </section>
      </div>
    </div>
  );
}

export default App;
