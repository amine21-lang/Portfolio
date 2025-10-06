// const Navbar = () => (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
//         <a href="" className="text-white text-2xl font-bold tracking-wide">
//           ABBACH
//         </a>
//         <div className="flex space-x-8">
//           <a href="#about" className="text-white hover:text-[#000957] transition">About</a>
//           <a href="#projects" className="text-white hover:text-[#000957]  transition">Projects</a>
//           <a href="#contact" className="text-white hover:text-[#000957]  transition">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
  
//   export default Navbar;


const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <a href="#" className="text-white text-2xl font-bold tracking-wide">
        ABBACH
      </a>
      <div className="flex space-x-8">
        <a 
          href="#about" 
          className="text-white hover:text-[#000957] transition"
        >
          About
        </a>
        <a 
          href="#education" 
          className="text-white hover:text-[#000957] transition"
        >
          Education
        </a>
        <a 
          href="#experience" 
          className="text-white hover:text-[#000957] transition"
        >
          Experience
        </a>
        <a 
          href="#skills" 
          className="text-white hover:text-[#000957] transition"
        >
          Skills
        </a>
        <a 
          href="#projects" 
          className="text-white hover:text-[#000957] transition"
        >
          Projects
        </a>
        <a 
          href="#contact" 
          className="text-white hover:text-[#000957] transition"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;