import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-r from-[#000957] to-[#4e2c54] rounded-lg text-white font-times">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact & Info</h2>
      <ul className="space-y-4 text-lg">
        <li className="flex items-center gap-3">
          <MdLocationOn className="text-2xl text-yellow-400" />
          <span>
            <strong>Based in:</strong> Morocco
          </span>
        </li>
        <li className="flex items-center gap-3">
          <MdEmail className="text-2xl text-yellow-400" />
          <span>
            <strong>Email:</strong> aaa@example.com
          </span>
        </li>
        <li className="flex items-center gap-3">
          <FaLanguage className="text-2xl text-yellow-400" />
          <span>
            <strong>Languages:</strong> English, Arabic, French
          </span>
        </li>
      </ul>
    </section>
  );
};

export default ContactInfo;
