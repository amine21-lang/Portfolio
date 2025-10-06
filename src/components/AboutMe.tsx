

import { ChevronDown } from "lucide-react";
import ContactBar from "./ContactBar";

const AboutMe = () => (
  <section
    className="min-h-screen bg-gradient-to-r from-[#000957] to-[#4e2c54] flex flex-col justify-center py-20 px-6 relative"
    id="about"
  >
    {/* Triangle ou ligne décorative en haut */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full mt-4 opacity-40" />

    <div className="max-w-4xl mx-auto text-center">
      <h2
        className="text-4xl md:text-5xl font-bold mb-10 text-white"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        About Me
      </h2>
      <p
        className="text-gray-300 text-xl leading-8 md:leading-9 mb-12"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        I am a passionate software engineering student who enjoys turning ideas
        into working solutions. By working on different projects, I improve my
        skills and learn new technologies like React, TypeScript, and Next.js. I
        am also curious about new fields like machine learning and artificial
        intelligence. I find these technologies interesting because they can
        solve real problems and create new possibilities. I like to face
        challenges, keep learning, and work with others to build useful
        software. My goal is to create efficient and innovative systems that can
        make a difference. I am always ready to take on new projects where I can
        contribute and grow as a developer.
        <br />
        <br />
        Outside of coding, I enjoy playing video games, practicing design, and
        doing sports like football and kickboxing. I also like to keep improving
        by reading books, listening to podcasts, and watching documentaries.
      </p>
    </div>

    <ContactBar />

    {/* Chevron bas pour signaler qu’il y a une suite */}
    <div className="flex justify-center mt-10">
      <ChevronDown size={36} className="text-white animate-bounce opacity-70" />
    </div>
  </section>
);

export default AboutMe;


