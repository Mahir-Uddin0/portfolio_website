import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  // FaCode,
  // FaLaptopCode,
} from "react-icons/fa";
import { SiKaggle, SiCoursera, SiCodeforces, SiLeetcode } from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-white">
      <section className="mt-2 max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Left: Profile Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
            <img
              src="/images/profile-photo/casual.jpg"
              alt="Md. Mahir Uddin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: About Content */}
        <div className="space-y-4 text-center md:text-left">

          {/* Name */}
          <h1 className="text-5xl md:text-4.5xl font-bold text-gray-900 tracking-tight">
            Md. Mahir Uddin
          </h1>

          {/* Title */}
          <h2 className="text-lg md:text-2xl font-semibold text-gray-500">
            Data Scientist <span className="text-gray-400">|</span> Machine Learning & Gen AI
          </h2>

          {/* Credentials */}
          <p className="text-lg md:text-1.5xl text-gray-500 font-medium">
            Codeforces 1242 <span className="mx-1">·</span> IYMC Gold Medalist
          </p>

          {/* Profile Links */}
          <div className="flex justify-center md:justify-start gap-5 text-gray-600 text-2xl pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
              <FaGithub />
            </a>
            <a href="https://codeforces.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
              <SiCodeforces />
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
              <SiLeetcode />
            </a>
            <a href="https://kaggle.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
              <SiKaggle />
            </a>
            <a href="https://coursera.org" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition">
              <SiCoursera />
            </a>
          </div>

          {/* About Me */}
          <p className="text-gray-700 leading-relaxed pt-4 text-sm md:text-base text-justify">
            I’m a Data Scientist focused on delivering business value through advanced analytics
            and predictive modeling, leveraging Machine Learning and Deep Learning techniques.
            I transitioned into the field of Data Science and AI by pursuing a Master’s in CSE
            with a major in Data Science, driven by a long-standing love for Mathematics and
            problem-solving. I’m currently working on an ADB-funded project that applies AI
            and IoT to reduce water consumption in textile dyeing factories. Beyond this,
            I’ve worked on projects ranging from fabric defect detection using CNNs to
            fine-tuning models and building RAG applications. I’m also conducting research
            on density-based clustering algorithms and optimization of backpropagation in
            neural networks. Previously, I taught Mathematics at Sunrise Coaching Centre
            and UCC. I bring discipline, reliability, a strong analytical mindset, and a
            “get things done” attitude to every challenge.
          </p>

          {/* Resume Button */}
          <div className="pt-4">
            <a
              href="/Md_Mahir_Uddin_Resume.pdf"
              download
              className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
