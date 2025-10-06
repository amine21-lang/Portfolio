export default function Footer() {
  return (
    <footer className="text-center text-blue-200 text-sm border-t border-blue-400/20 pt-6 pb-6">
      <p>
        &copy; {new Date().getFullYear()} ABBACH AHMED AMINE. All rights
        reserved.
      </p>
      <p className="mt-2">
        Built with <span className="text-blue-300 font-semibold">React</span>{" "}
        &amp; ❤️ — Design inspired by creativity.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="mailto:abbachahmedamine@gmail.com"
          className="hover:text-white transition-colors duration-200"
        >
          Contact me
        </a>
        <span className="text-blue-400">|</span>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          Portfolio
        </a>
      </div>
    </footer>
  );
}
