import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-2xl dark:text-white font-semibold mb-2">Kontakt</h2>
      
      <p className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
        <FaEnvelope className="text-gray-600 dark:text-gray-300" />
        Email: <a href="mailto:bordoyborgar@gmail.com" className="text-blue-600 dark:text-blue-400 underline">bordoyborgar@gmail.com</a>
      </p>
      
      <p className="text-gray-800 dark:text-gray-200 flex items-center gap-2 mt-2">
        <FaLinkedin className="text-gray-600 dark:text-gray-300" />
        LinkedIn: <a href="https://www.linkedin.com/in/borgar-bordoy" className="text-blue-600 dark:text-blue-400 underline">linkedin.com/in/borgar-bordoy</a>
      </p>
      
      <p className="text-gray-800 dark:text-gray-200 flex items-center gap-2 mt-2">
        <FaGithub className="text-gray-600 dark:text-gray-300" />
        GitHub: <a href="https://github.com/bobor16" className="text-blue-600 dark:text-blue-400 underline">github.com/bobor16</a>
      </p>
    </section>
  );
}

export default Contact;
