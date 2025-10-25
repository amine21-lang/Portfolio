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
        I'm a software engineering student passionate about transforming ideas
        into elegant, functional solutions. Through hands-on project experience,
        I continuously expand my technical expertise while exploring emerging
        fields that push the boundaries of what's possible in software
        development.
        <br />
        <br />
        I thrive on solving complex problems, value collaborative development,
        and approach each challenge as an opportunity for growth. My focus is on
        building scalable, efficient systems that deliver real value and
        meaningful impact.
        <br />
        <br />
        Beyond coding, I maintain balance through gaming, design work, and
        athletics. I'm committed to continuous learning through reading,
        podcasts, and staying curious about the world around me.
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
