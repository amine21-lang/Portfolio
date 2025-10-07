

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
      className="bg-gradient-to-r from-[#000957] to-[#4e2c54] text-white py-12 sm:py-16 px-4 sm:px-6"
      id="experience"
    >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white text-center"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        Professional Experience
      </h2>

      {/* Desktop Timeline View */}
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
            <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-2 border-white z-10"></div>

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

      {/* Mobile Card View */}
      <div className="md:hidden space-y-6 w-[90%] mx-auto">
        {experienceData.map((item, index) => (
          <motion.div
            key={`exp-mobile-${index}`}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="flex-shrink-0 bg-blue-500 p-2 sm:p-3 rounded-lg text-white">
                <FaBriefcase className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-blue-300 text-xs sm:text-sm font-medium mb-2">
                  {item.date}
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium mb-3">
                  {item.company}
                </p>
              </div>
            </div>

            <ul className="space-y-2 pl-4">
              {item.description.map((line, i) => (
                <li
                  key={i}
                  className="text-gray-300 text-xs sm:text-sm leading-relaxed list-disc"
                >
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperienceSection;
