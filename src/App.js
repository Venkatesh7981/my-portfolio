import Home from "./Home";
import About from "./About";
import Sidebar from "./Sidebar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Darkmode from "./Darkmode";
import { useState } from "react";
import Mobilenav from "./Mobilenav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [theme, settheme] = useState("darktheme");
  const updatetheme = () => {
    theme === "lighttheme" ? settheme("darktheme") : settheme("lighttheme");
  };
  return (
    <div
      className={`${theme} position-relative `}
      style={{
        minHeight: "100%",
        display: "flex",
        minWidth: "100vw",
        position: "relative",
      }}
    >
      <div style={{ width: "20%" }} className="d-lg-block d-none">
        <Sidebar theme={theme} />
      </div>
      <div
        className={`${theme}  bodycontent `}
        style={{ minHeight: "100Vh", width: "80%" }}
      >
        <Darkmode
          updatetheme={() => {
            updatetheme();
          }}
          theme={theme}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <div className={`${theme} text-center d-lg-none d-block`}>
        <Mobilenav theme={theme} />
      </div>
    </div>
  );
}

export default App;
