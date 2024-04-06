import Header from "./components/Header";
import Intro from "./components/Intro";
import "./app.css";

function App() {
  return (
    <div className="App relative w-full">
      <Header />
      <div className="w-2/3 overflow-hidden mx-auto mt-20">
        <Intro />
      </div>
    </div>
  );
}

export default App;
