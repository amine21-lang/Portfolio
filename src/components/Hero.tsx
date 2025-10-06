import { useState } from "react";
import profil from "../assets/me.jpg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"en" | "fr" | null>(null);

  const handleLangClick = (lang: "en" | "fr") => {
    setSelectedLang(lang);
    setShowLangMenu(false);
    setShowModal(true);
  };

  const handleConfirmDownload = () => {
    let filePath = "";

    if (selectedLang === "en") {
      filePath = "/assets/resume.pdf";
    } else if (selectedLang === "fr") {
      filePath = "/assets/cv.pdf";
    }

    if (filePath) {
      const link = document.createElement("a");
      link.href = filePath;
      link.download = filePath.split("/").pop() || "cv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setShowModal(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#000957] to-[#4e2c54] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-8 md:px-16 lg:px-24 py-20">
        <div className="flex-shrink-0">
          <img
            src={profil}
            alt="Your photo"
            className="w-96 rounded-full object-cover shadow-2xl border-8 border-[#2A4759]"
          />
        </div>

        <div className="flex-1 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            ABBACH Ahmed Amine
          </h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-gray-400 mb-6"
          >
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Full Stack Developer",
                  "Java / Spring Boot Developer",
                  "Agile Practitioner",
                  "Problem Solver",
                  "Tech Explorer",
                  "Passionate Learner",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
              }}
            />
          </motion.h2>
          <p className="text-gray-300 mb-6 max-w-2xl">
            "Code with purpose, design with clarity."
          </p>
          <p className="text-gray-300 mb-10 max-w-2xl">
            I'm a software engineering student with a passion for building
            scalable and efficient systems. I'm currently looking for
            opportunities to work on exciting projects and learn new
            technologies.
          </p>

          <div className="flex space-x-6 relative">
           
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="px-6 py-2 bg-[#2A4759] text-white rounded-lg font-semibold shadow-lg hover:bg-[#243c4b] transition"
              >
                Download CV
              </button>

              {showLangMenu && (
                <div className="absolute mt-2 bg-white text-black shadow-lg rounded-lg overflow-hidden z-20 w-48">
                  <button
                    onClick={() => handleLangClick("en")}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  >
                     English
                  </button>
                  <button
                    onClick={() => handleLangClick("fr")}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  >
                    Frensh
                  </button>
                </div>
              )}
            </div>

            
            <a
              href="#contact"
              className="px-6 py-2 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#4e2c54] transition"
            >
              Contact Me
            </a>
            
          </div>
          
          
        </div>
        
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black max-w-sm text-center">
            <h2 className="text-xl font-semibold mb-4">Confirm Download</h2>
            <p className="mb-6">
              Do you want to download your CV in{" "}
              <strong>{selectedLang === "en" ? "English" : "Frensh"}</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmDownload}
                className="px-4 py-2 bg-[#2A4759] text-white rounded hover:bg-[#243c4b]"
              >
                Yes, download
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
    </section>
  );
};

export default Hero;
