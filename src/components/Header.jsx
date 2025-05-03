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
    <header className="flex flex-col sm:flex-row justify-between items-center my-8 space-y-4 sm:space-y-0">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center sm:text-left">
        Borgar Bordoy - Software Engineer & Elektriker
      </h1>

      {/* Dark mode toggle med pære og kontakt */}
      <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-2">
        {/* Pære ikon */}
        <div className="flex items-center space-x-2">
          <FaLightbulb
            className={`text-3xl transition-all duration-300 transform ${
              darkMode ? "text-gray-400 scale-90" : "text-yellow-500 scale-110"
            }`}
          />
        </div>

        {/* Kontakt (afbryder) */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="relative inline-flex items-center cursor-pointer w-16 h-8 bg-gray-300 dark:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          <span
            className={`absolute left-1 w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${
              darkMode ? "translate-x-8" : ""
            }`}
          ></span>
        </button>

        {/* Joke tekst */}
        <span className="italic text-sm text-gray-600 dark:text-gray-300 sm:inline mt-2 sm:mt-0">
          Hvor mange softwareingeniører skal der til for at skifte en pære?{" "}
          <strong>En. (hvis han også er elektriker!)</strong>
        </span>
      </div>
    </header>
  );
}

export default Header;
