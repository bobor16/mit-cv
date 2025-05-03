import { FaGithub, FaLink } from "react-icons/fa";

function Projects() {
  return (
    <section className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-2xl dark:text-white font-semibold mb-2">Projekter</h2>
      <div className="space-y-6">
        {/* Projekt 1 */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow">
          <h3 className="text-xl font-semibold dark:text-white">Assistiv Climbing Game</h3>
          <p className="text-gray-800 dark:text-gray-200">
            Et interaktivt klatrespil udviklet til børn med cerebral parese. Spillet bruger en ESP32-sensor og MQTT til at registrere klatringer og visualisere fremskridt via en kaninfigur på skærmen.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/bobor16/SA-Motivation-Game" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <FaGithub size={20} />
              GitHub
            </a>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <FaLink size={20} />
              Demo
            </button>
          </div>
        </div>

        {/* Projekt 2 */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow">
          <h3 className="text-xl font-semibold dark:text-white">Ruteoptimering for udskiftning af elmålere</h3>
          <p className="text-gray-800 dark:text-gray-200">
          Jeg udviklede et Python-script, der anvendte nearest neighbor-algoritmen til at beregne den hurtigste rute mellem de 250 adresser, der skulle besøges. Ved hjælp af Leaflet, et populært JavaScript-bibliotek til kort, visualiserede jeg både adresserne og ruten på et interaktivt kort, hvilket gav et klart og letforståeligt billede af hele ruten.          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/bobor16/route-optimation" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <FaGithub size={20} />
              GitHub
            </a>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <FaLink size={20} />
              Demo
            </button>
          </div>
        </div>

        {/* Projekt 3 */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow">
          <h3 className="text-xl font-semibold dark:text-white">Dynamisk CV-website</h3>
          <p className="text-gray-800 dark:text-gray-200">
            Mit personlige CV og portfolio bygget som en moderne, responsiv webapp med dark/light mode, Tailwind CSS og React.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/bobor16/mit-cv" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <FaGithub size={20} />
              GitHub
            </a>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <FaLink size={20} />
              Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
