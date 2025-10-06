import ContactForm from "./ContactForm";

export default function MessageComponent() {
  return (
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
       Let's Connect
      </h2>
      <ContactForm />
      
    </div>

    

   
  </section>
  );
}
