import { useState, useMemo } from "react";

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = useMemo(() => [
    {
      title: "IoT and Cathodic Protection in the Gas Industry: Adoption and Impact (Masters Thesis)",
      description: "I samarbejde med energisektoren udviklede vi et softwarebaseret system til monitorering af katodisk beskyttelse på rørledningsnetværk rundt om Danmark. Formålet var at sikre, at rørene forbliver beskyttet mod korrosion, særligt hvor coatingen på rørene kan være utæt. Projektet omfattede design og udvikling af en Minimum Viable Product (MVP), som kan hente og visualisere måledata fra målestationer placeret med 1-2 km interval langs rørledningerne. Løsningen hjælper teknikere med hurtigere at identificere fejl og svagheder i beskyttelsen, hvilket bidrager til en mere effektiv vedligeholdelse af infrastrukturen.",
      },
    {
      title: "CONVERSION OF NATIVE APP’S TO CROSS-PLATFORM APPLICATION (Bachelor projekt)",
      description: "Udviklede en Proof of Concept for at genopbygge Totalview-platformen som en moderne cross-platform applikation i stedet for separate native apps til iOS og Android. Målet var at reducere vedligeholdelse og samle udviklingen i ét sprog og én kodebase, hvilket giver øget effektivitet og lavere omkostninger på sigt.",
    },
    {
      title: "Klatrespil til datteren",
      description: "Jeg udviklede et spil til min datters hjemmetræning, hvor hun skulle klatre på en ribbe. Hver gang hun nåede toppen, trykkede hun på en fysisk knap, der var forbundet til en ESP32-mikrocontroller. Når knappen blev trykket, sendte ESP32’en et signal via MQTT til en webapplikation, som vi kørte på en iPad foran ribben. På skærmen hoppede en lille kanin hver gang knappen blev trykket — som en visuel belønning — og samtidig blev en tæller øget med 1, så vi kunne holde styr på antallet af klatringer under træningen. Formålet var at gøre genoptræningen mere motiverende og legende ved hjælp af gamification, hvor fremgangen kunne ses direkte på skærmen. Derudover gemte systemet træningsdata, så vi kunne se statistik over hvor meget hun havde klatret over tid — fx dag for dag eller uge for uge — hvilket også gav motivation for både hende og os som forældre.",
    },
    {
      title: "Ruteoptimering for udskiftning af elmålere",
      description: "Der blev udviklet et Python-script, der anvendte nearest neighbor-algoritmen til at beregne den hurtigste rute mellem de 250 adresser, der skulle besøges. Ved hjælp af Leaflet, et populært JavaScript-bibliotek til kort, blev der både visualiseret adresserne og ruten på et interaktivt kort, hvilket gav et klart og letforståeligt billede af hele ruten.",
    },
    {
      title: "Portfolio website (du er her nu)",
      description: "Mit personlige CV- og portfolio site bygget med React og Tailwind. Simpelt, men fleksibelt.",
    },
    
  ], []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const handleModalClick = (e) => {
    // Luk modal hvis klik er udenfor modalindholdet
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Projekter</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-300 dark:border-gray-600 mb-4">
            <button
              onClick={() => openModal(project)}
              className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-700 dark:text-gray-200 focus:outline-none
                transition duration-300 ease-in-out 
                hover:text-blue-500 hover:-translate-y-0.5"
            >
              {project.title}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleModalClick} // Håndter klik udenfor modal
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <button 
  onClick={closeModal} 
  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition duration-300"
>
  Luk
</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
