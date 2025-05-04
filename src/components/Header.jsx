import { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex flex-col items-center my-8 space-y-6 sm:space-y-8 px-4">
      {/* Titel */}
      <h1 className="w-full max-w-2xl text-4xl font-bold text-gray-800 dark:text-white text-center mx-auto">
        Borgar Bordoy - Softwareingeniør & Elektriker
      </h1>

      {/* Pære + kontakt */}
      <div className="flex items-center space-x-3">
        {/* Pære ikon */}
        <FaLightbulb
          className={`text-3xl transition-all duration-300 transform ${
            darkMode ? "text-gray-400 scale-90" : "text-yellow-500 scale-110"
          }`}
        />

        {/* Kontakt (afbryder) */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="relative inline-flex items-center cursor-pointer w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          <span
            className={`absolute left-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 transform ${
              darkMode ? "translate-x-7" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Joke tekst */}
      <span className="italic text-sm text-gray-500 dark:text-gray-400 max-w-sm text-center leading-relaxed">
        Hvor mange softwareingeniører skal der til for at skifte en pære?{" "}
        <strong>En. (hvis han også er elektriker!)</strong>
      </span>
    </header>
  );
}

export default Header;
