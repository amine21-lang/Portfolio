// import AboutMe from "./components/AboutMe";
// import EducationSection from "./components/EducationSection";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import MessageComponent from "./components/MessageComponent";
// import Navbar from "./components/Navbar";
// import ProfessionalExperienceSection from "./components/ProfessionalExperienceSection";
// import ProjectsSection from "./components/ProjectsSection";

// import SkillsCategorized from "./components/skillsByCategory";

// function App() {
//   return (
//     <div className="bg-gradient-to-r from-[#000957] to-[#4e2c54]">
//       <Navbar />
//       <Hero />
//       <AboutMe />
//       <EducationSection />
//       <ProfessionalExperienceSection />
//       <SkillsCategorized />
//       <ProjectsSection />
//       <MessageComponent />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import AboutMe from "./components/AboutMe";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MessageComponent from "./components/MessageComponent";
import Navbar from "./components/Navbar";
import ProfessionalExperienceSection from "./components/ProfessionalExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ScrollButton from "./components/ScrollButton ";

import SkillsCategorized from "./components/skillsByCategory";
function App() {
  return (
    <div className="bg-gradient-to-r from-[#000957] to-[#4e2c54]">
      <Navbar />
      <Hero />
      <div id="about">
        <AboutMe />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="experience">
        <ProfessionalExperienceSection />
      </div>
      <div id="skills">
        <SkillsCategorized />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <MessageComponent />
      </div>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;