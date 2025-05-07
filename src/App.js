import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { useState } from "react";
import StarsBackground from "./components/StarsBackground";


function App() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={`relative min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-100"}`}>
      <StarsBackground isDarkMode={darkMode} />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
