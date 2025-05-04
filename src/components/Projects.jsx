import { useState, useMemo, useRef, useEffect } from "react";

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  // Memoizing the projects array to avoid unnecessary re-renders
  const projects = useMemo(() => [
    {
      title: "Klatringespil til datteren",
      description: "Et webbaseret spil der motiverer min datter med CP til at klatre ved hjælp af en ESP32 sensor og en kaninfigur på skærmen.",
      link: "#"
    },
    {
      title: "Ruteoptimering for udskiftning af elmålere",
      description: "Jeg udviklede et Python-script, der anvendte nearest neighbor-algoritmen til at beregne den hurtigste rute mellem de 250 adresser, der skulle besøges. Ved hjælp af Leaflet, et populært JavaScript-bibliotek til kort, visualiserede jeg både adresserne og ruten på et interaktivt kort, hvilket gav et klart og letforståeligt billede af hele ruten.  ",
      link: "#"
    },
    {
      title: "Portfolio website (du er her nu)",
      description: "Mit personlige CV- og portfolio site bygget med React og Tailwind. Simpelt, men fleksibelt.",
      link: "#"
    },
  ], []); // Empty dependency array, meaning projects is memoized and won't change unless explicitly modified.

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    projects.forEach((_, index) => {
      const el = contentRefs.current[index];
      if (el) {
        if (openIndex === index) {
          el.style.height = el.scrollHeight + "px";
          el.style.opacity = "1";
          el.style.transform = "translateY(0px)";
        } else {
          el.style.height = "0px";
          el.style.opacity = "0";
          el.style.transform = "translateY(-10px)";
        }
      }
    });
  }, [openIndex, projects]); // Dependencies updated to reflect projects and openIndex

  return (
    <section className="my-12 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Projekter</h2>
      {projects.map((project, index) => (
        <div key={index} className="border-b border-gray-300 dark:border-gray-600 mb-4">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-700 dark:text-gray-200 focus:outline-none
              transition duration-300 ease-in-out 
              hover:text-blue-500 hover:-translate-y-0.5"
          >
            {project.title}
            <span
              className={`text-xl transform transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ height: "0px", opacity: 0, transform: "translateY(-10px)" }}
          >
            <div className="pb-4 pt-2 text-gray-600 dark:text-gray-300 transition-opacity duration-500">
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline mt-2 inline-block">
                Læs mere
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
