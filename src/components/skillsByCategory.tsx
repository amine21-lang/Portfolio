import {
  SiC,
  SiDart,
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiSpringboot,
  SiMysql,
  SiOracle,
  SiUml,
  SiPhp,
  SiGitlab,
  SiGithub,
  SiDocker,
  SiLinux,
  SiAdobeillustrator,
  SiSpring,
  SiHibernate,
  SiSharp,
  SiFigma,
  SiMongodb,
} from "react-icons/si";

import { FaPython, FaJava } from "react-icons/fa";
import { TbCloudCog } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiReact } from "react-icons/si";

const skillsByCategory = [
  {
    category: "Backend",
    items: [
      { name: "Java", icon: <FaJava className="text-red-400" /> },
      { name: "JavaFX" },
      { name: "JEE Servlet" },
      { name: "JPA" },
      { name: "CDI" },
      { name: "Spring", icon: <SiSpring className="text-green-500" /> },
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="text-green-400" />,
      },
      { name: "Spring MVC" },
      { name: "Hibernate", icon: <SiHibernate className="text-purple-600" /> },
      { name: "PHP", icon: <SiPhp className="text-purple-700" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <SiJavascript className="text-orange-500" /> },
      { name: "CSS", icon: <SiTailwindcss className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
      { name: "Flutter", icon: <SiFlutter className="text-blue-300" /> },
    ],
  },
  {
    category: "Langages de Programmation",
    items: [
      { name: "C", icon: <SiC className="text-gray-400" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "Java", icon: <FaJava className="text-red-400" /> },
      { name: "C#", icon: <SiSharp className="text-purple-700" /> },
      { name: "Dart", icon: <SiDart className="text-blue-500" /> },
    ],
  },
  {
    category: "Base de données",
    items: [
      { name: "Oracle", icon: <SiOracle className="text-red-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
  },
  {
    category: "Méthodes d'analyse et de modélisation",
    items: [
      { name: "UML", icon: <SiUml className="text-gray-400" /> },
      { name: "Merise" },
      {
        name: "Design Patterns (Singleton, Observer, MVC, Chain of Responsibility...)",
      },
    ],
  },
  {
    category: "DevOps & Outils de Déploiement",
    items: [
      { name: "GitHub", icon: <SiGithub className="text-gray-400" /> },
      { name: "GitLab", icon: <SiGitlab className="text-pink-600" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "CI/CD", icon: <TbCloudCog className="text-indigo-500" /> },
    ],
  },
  {
    category: "Systèmes d'Exploitation",
    items: [
      { name: "Linux", icon: <SiLinux className="text-green-600" /> },
      { name: "Windows" },
    ],
  },
  {
    category: "Outils de Design",
    items: [
      { name: "Figma", icon: <SiFigma className="text-rose-300" /> },
      {
        name: "Adobe Illustrator",
        icon: <SiAdobeillustrator className="text-orange-600" />,
      },
    ],
  },
];



const SkillsCategorized = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-[#000957] to-[#4e2c54] text-white py-12 sm:py-16 px-4 sm:px-6"
      style={{ fontFamily: "'Times New Roman', serif" }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
        Skills
      </h2>

      <div className="w-[90%] lg:max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {skillsByCategory.map(({ category, items }) => (
          <div key={category}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-white/90">
              {category}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {items.map(({ name, icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default border border-white/10"
                >
                  <div className="text-xl sm:text-2xl flex-shrink-0">
                    {icon || <span className="w-6 h-6" />}
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-semibold">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCategorized;
