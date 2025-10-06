import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    title: "Intern in the IT Department",
    company: "SofiMed, Casablanca, Morocco",
    date: "July 2025 – September 2025 (3 months)",
    description: [
      "Designed and developed the SofiMedTransfer application for secure file transfer.",
      "Implemented real-time communication features using WebSocket.",
      "Built and optimized back-end services with Spring Boot and MySQL.",
      "Integrated JWT-based authentication and role-based authorization.",
      "Designed the database schema and contributed to system architecture decisions.",
      "Conducted testing, debugging, and deployment to ensure reliability and performance.",
    ],
    icon: <FaBriefcase />,
  },

  {
    title: "Intern in the IT Department",
    company: "Wedomatic, Casablanca, Morocco",
    date: "May 2024 – August 2024 (3 months)",
    description: [
      "Update the WEEASYORDER application with a new, optimized version.",
      "Develop the user interface using React and TypeScript.",
      "Optimize user experience and ensure compatibility with new features.",
      "Perform tests and corrections to guarantee front-end performance and stability.",
    ],
    icon: <FaBriefcase />,
  },
  {
    title: "Final Year Internship (PFE)",
    company: "Wedomatic, Casablanca, Morocco",
    date: "April 2023 – June 2023 (2 months)",
    description: [
      "Development of WEEASYORDER, a web application for managing table orders in restaurants and cafés.",
    ],
    icon: <FaBriefcase />,
  },
];

const ProfessionalExperienceSection = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#000957] to-[#4e2c54] text-white py-16 px-6"
      id="experience"
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-6 text-white text-center"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        Professional Experience
      </h2>

      <div className="hidden md:flex relative flex-col items-center before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:border-l-2 before:border-dashed before:border-blue-500">
        {experienceData.map((item, index) => (
          <motion.div
            key={`exp-${index}`}
            className="relative mb-10 w-full flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Cercle bleu centré */}
            <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-2 border-white z-10"></div>

            {/* Contenu à gauche */}
            <div className="w-1/2 pl-8 mr-auto pr-10 text-right">
              <div className="text-blue-400 mb-1 flex justify-end items-center gap-2">
                <span>{item.date}</span>
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-gray-300 font-medium">{item.company}</p>
              {item.description.map((line, i) => (
                <p key={i} className="text-gray-400">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperienceSection;
