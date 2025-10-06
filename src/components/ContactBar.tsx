import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactBar = () => {
  return (
    <div className="from-[#000957] to-[#4e2c54] text-white   flex flex-wrap items-start justify-center gap-6 md:gap-12  rounded-xl mt-5  max-w-5xl mx-auto align-middle ">
      <a
        href="https://github.com/amine21-lang"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#6e95ff] transition"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/ahmed-amine-abbach-659988220 "
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#6e95ff] transition"
      >
        <FaLinkedin size={20} />
      </a>

      <div className="flex items-center gap-2">
        <a
          href="tel:+212772336141"
          className="flex items-center gap-2 hover:text-[#6e95ff] transition"
        >
          <FaPhone size={20} />
        </a>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="mailto:abbachahmedamine@gmail.com"
          className="flex items-center gap-2 hover:text-[#6e95ff] transition"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </div>
  );
};

export default ContactBar;
