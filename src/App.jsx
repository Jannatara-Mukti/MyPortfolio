import Topbar from "./components/Topbar/Topbar";
import Menu from "./components/Menu/Menu";
import Intro from "./components/Intro/Intro";
import './app.scss';
import { useState } from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
