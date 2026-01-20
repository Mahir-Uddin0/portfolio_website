import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-blue-500 dark:bg-blue-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-around items-center gap-8">

        {/* Email */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-2xl md:text-3xl" />
          <div className="text-sm md:text-base">
            <h3 className="font-semibold">Email</h3>
            <p>your_email@gmail.com</p>
          </div>
        </div>

        {/* Phone / WhatsApp */}
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-2xl md:text-3xl" />
          <div className="text-sm md:text-base">
            <h3 className="font-semibold">Phone / WhatsApp</h3>
            <p>+880 1XXXXXXXXX</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-2xl md:text-3xl" />
          <div className="text-sm md:text-base">
            <h3 className="font-semibold">Location</h3>
            <p>Dhaka, Bangladesh (Open to Remote)</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-600 dark:bg-blue-800 text-center py-3 text-xs md:text-sm text-white">
        © {new Date().getFullYear()} Md. Mahir Uddin · All rights reserved
      </div>
    </section>
  );
}


