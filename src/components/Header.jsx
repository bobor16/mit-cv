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
    <header className="flex flex-col sm:flex-row justify-between items-center my-8 space-y-4 sm:space-y-0 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white text-center sm:text-left">
        Borgar Bordoy - Software Engineer & Elektriker
      </h1>

      {/* Dark mode toggle med pære og joke */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0 text-center sm:text-left">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-yellow-500 dark:text-gray-400 text-3xl transition-transform duration-300 hover:scale-110"
          aria-label="Toggle Dark Mode"
        >
          <FaLightbulb />
        </button>
        <span className="italic text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          Hvor mange softwareingeniører skal der til for at skifte en pære?{" "}
          <strong>En. (hvis han også er elektriker!)</strong>
        </span>
      </div>
    </header>
  );
}

export default Header;
