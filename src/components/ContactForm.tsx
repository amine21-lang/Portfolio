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
        "service_7bzcslf",
        "template_3rb6r8h",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "abbachahmedamine@gmail.com",
        },
        "ZA_05xBy10tqPeGTQ"
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
    <section className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Contact Information */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500 rounded-full blur-3xl opacity-20 -translate-y-16 translate-x-16 sm:-translate-y-32 sm:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full blur-3xl opacity-20 translate-y-16 -translate-x-16 sm:translate-y-32 sm:-translate-x-32"></div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              Feel free to reach out for collaborations or just a friendly hello
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg mb-1">
                    Location
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">Morocco</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg mb-1">
                    Email
                  </h3>
                  <p className="text-gray-300 break-all text-xs sm:text-sm md:text-base">
                    abbachahmedamine@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg mb-1">
                    Languages
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    English, Arabic, French
                  </p>
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
                className="block text-sm font-medium text-gray-700 mb-2 text-left"
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
                className="block text-sm font-medium text-gray-700 mb-2 text-left"
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
                className="block text-sm font-medium text-gray-700 mb-2 text-left"
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
                className="block text-sm font-medium text-gray-700 mb-2 text-left"
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
