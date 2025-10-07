import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Software Engineering Student",
    institution: "Faculty of Sciences and Techniques, Settat",
    date: "Since 2023",
    description: "Currently in the last year of engineering studies.",
    icon: <FaGraduationCap />,
    type: "education",
  },
  {
    title: "Bachelor's Degree in Mathematics and Computer Science",
    institution: "Graduated in 2023",
    date: "2022 – 2023",
    description: "",
    icon: <FaGraduationCap />,
    type: "education",
  },
  {
    title: "DEUST in Mathematics, Physics and Computer Science",
    institution: "Faculty of Sciences and Techniques, Al Hoceima",
    date: "2020 – 2022",
    description: "",
    icon: <FaGraduationCap />,
    type: "education",
  },
  {
    title: "Baccalaureate in Physical Sciences",
    institution: "Lycée 2 Octobre 1955",
    date: "2020",
    description: "",
    icon: <FaGraduationCap />,
    type: "education",
  },
];

const EducationSection = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#000957] to-[#4e2c54] text-white py-12 sm:py-16 px-4 sm:px-6"
      id="education"
    >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white text-center"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        Education
      </h2>

      {/* Desktop Timeline View */}
      <div className="hidden md:flex relative flex-col items-center before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:border-l-2 before:border-dashed before:border-blue-500">
        {educationData.map((item, index) => (
          <motion.div
            key={`edu-${index}`}
            className="relative mb-10 w-full flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-2 border-white z-10"></div>

            <div className="w-1/2 pr-8 ml-auto pl-10">
              <div className="text-blue-400 mb-1 flex m-1 gap-2">
                {item.icon}
                <span>{item.date}</span>
              </div>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              {item.description && (
                <p className="text-gray-400">{item.description}</p>
              )}
              <p className="text-gray-300 font-medium">{item.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-6 w-[90%] mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={`edu-mobile-${index}`}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 bg-blue-500 p-2 sm:p-3 rounded-lg text-white">
                <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-blue-300 text-xs sm:text-sm font-medium mb-2">
                  {item.date}
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 leading-tight">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-300 text-sm mb-2">
                    {item.description}
                  </p>
                )}
                <p className="text-gray-400 text-sm font-medium">
                  {item.institution}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
