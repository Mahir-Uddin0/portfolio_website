import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Column 1: Intro */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Feel free to reach out.
              I usually respond within 24 hours.
            </p>
          </div>

          {/* Column 2: Address (Centered) */}
          <div className="flex items-center justify-start md:justify-center">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
              <FaMapMarkerAlt className="text-red-500 dark:text-red-400" />
              Dhaka, Bangladesh
            </div>
          </div>

          {/* Column 3: Contact Links */}
          <div className="flex flex-col gap-2 md:items-end text-sm font-medium text-gray-700 dark:text-gray-300">
            <a
              href="mailto:your_email@gmail.com"
              className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FaEnvelope />
              mahir.uddin.0@gmail.com
            </a>

            <a
              href="https://wa.me/8801859990434"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-green-500 transition"
            >
              <FaWhatsapp />
              +880 185 999 0434
            </a>

            <a
              href="https://www.linkedin.com/in/mahir-uddin-b1aa1a156/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FaLinkedin />
              Linkedin Md. Mahir Uddin
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Md. Mahir Uddin. All rights reserved.
        </div>

      </div>
    </section>
  );
}
