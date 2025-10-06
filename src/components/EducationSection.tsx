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
      className=" bg-gradient-to-r from-[#000957] to-[#4e2c54] text-white py-16 px-6"
      id="education"
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-6 text-white text-center "
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        {" "}
        Education
      </h2>
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

            <div className="w-1/2 pr-8  ml-auto pl-10 ">
              <div className="text-blue-400 mb-1 flex m-1  gap-2">
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
    </section>
  );
};

export default EducationSection;
