// import { useState, ChangeEvent, FormEvent } from "react";
// import { MapPin, Mail, Globe, Send, Loader2 } from "lucide-react";

// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// type SubmitStatus = "success" | "error" | null;

// const ContactInfo: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ): void => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitStatus("success");
//       setFormData({ name: "", email: "", subject: "", message: "" });

//       setTimeout(() => setSubmitStatus(null), 3000);
//     }, 1500);
//   };

//   return (
//     <section className="max-w-6xl mx-auto mt-10 p-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Contact Information */}
//         <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 translate-y-32 -translate-x-32"></div>

//           <div className="relative z-10">
//             <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Get In Touch
//             </h2>
//             <p className="text-gray-300 mb-8">
//               Feel free to reach out for collaborations or just a friendly hello
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
//                 <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
//                   <MapPin className="w-6 h-6" />
//                 </div>
//                 <div className="text-left">
//                   <h3 className="font-semibold text-lg mb-1">Location</h3>
//                   <p className="text-gray-300">Morocco</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
//                 <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg">
//                   <Mail className="w-6 h-6" />
//                 </div>
//                 <div className="text-left">
//                   <h3 className="font-semibold text-lg mb-1">Email</h3>
//                   <p className="text-gray-300">abbachahmedamine@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
//                 <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-lg">
//                   <Globe className="w-6 h-6" />
//                 </div>
//                 <div className="text-left">
//                   <h3 className="font-semibold text-lg mb-1">Languages</h3>
//                   <p className="text-gray-300">English, Arabic, French</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
//           <h2 className="text-3xl font-bold mb-2 text-gray-900">
//             Send a Message
//           </h2>
//           <p className="text-gray-600 mb-6">
//             I'll get back to you as soon as possible
//           </p>

//           <div className="space-y-5">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
//                 placeholder="Ahmed Amine"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
//                 placeholder="abbachahmedamine@gmail.com"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="subject"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
//                 placeholder="Project Inquiry"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
//                 placeholder="Tell me about your project..."
//               />
//             </div>

//             <button
//               onClick={handleSubmit}
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <Send className="w-5 h-5" />
//                   Send Message
//                 </>
//               )}
//             </button>

//             {submitStatus === "success" && (
//               <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
//                 Message sent successfully! I'll get back to you soon.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInfo;
import { useState, ChangeEvent, FormEvent } from "react";
import { MapPin, Mail, Globe, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "success" | "error" | null;

const ContactInfo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7bzcslf", // Service ID depuis EmailJS
        "template_3rb6r8h", // Template ID depuis EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "abbachahmedamine@gmail.com",
        },
        "ZA_05xBy10tqPeGTQ" // Public Key depuis EmailJS
      );

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");

      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section className="max-w-6xl mx-auto mt-10 p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full  blur-3xl opacity-20 -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full  blur-3xl opacity-20 translate-y-32 -translate-x-32"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-8">
              Feel free to reach out for collaborations or just a friendly hello
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-gray-300">Morocco</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-300">abbachahmedamine@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-lg">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Languages</h3>
                  <p className="text-gray-300">English, Arabic, French</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Send a Message
          </h2>
          <p className="text-gray-600 mb-6">
            I'll get back to you as soon as possible
          </p>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                placeholder="Ahmed Amine"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                placeholder="aaa@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
                Failed to send message. Please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
