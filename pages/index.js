import { useEffect } from "react";
import { useRouter } from "next/router";
import Skills from "../components/Skills";
import Contact from "../components/contact";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiKaggle, SiCoursera, SiCodeforces, SiLeetcode } from "react-icons/si";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Scroll to contact section if query param exists
    if (router.query.scrollTo === "contact") {
      const el = document.getElementById("contact");
      if (el) {
        // Scroll instantly for cross-page jump
        el.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [router.query]);

  return (
    <main className="min-h-screen flex flex-col">
      <section className="mt-6 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
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
          <h1 className="text-5xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Md. Mahir Uddin
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-500 dark:text-gray-300">
            Data Scientist <span className="text-gray-400 dark:text-gray-500">|</span> Machine Learning & Gen AI
          </h2>
          <p className="text-lg md:text-1.5xl text-gray-500 dark:text-gray-400 font-medium">
            Codeforces 1270 <span className="mx-1">·</span> IYMC Gold Medalist
          </p>

          {/* Profile Links */}
          <div className="flex justify-center md:justify-start gap-5 text-gray-600 dark:text-gray-300 text-2xl pt-2">
            <a href="https://www.linkedin.com/in/mahir-uddin-b1aa1a156/" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Mahir-Uddin0" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <FaGithub />
            </a>
            <a href="https://codeforces.com/profile/Mahir_Uddin" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <SiCodeforces />
            </a>
            <a href="https://leetcode.com/u/oqoA8jMD6H/" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <SiLeetcode />
            </a>
            <a href="https://www.kaggle.com/mahiruddin" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <SiKaggle />
            </a>
            <a href="https://www.coursera.org/learner/mahir-uddin-1309" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <SiCoursera />
            </a>
          </div>

          {/* About Me */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-4 text-sm md:text-base text-justify">
            I’m a Data Scientist focused on delivering business value through advanced analytics and predictive modeling,
            leveraging Machine Learning and Deep Learning techniques. I transitioned into the field of Data Science and AI
            by pursuing a Master’s in CSE with a major in Data Science, driven by a long-standing love for Mathematics and
            problem-solving. I’m currently working on an ADB-funded project that uses AI and IoT to reduce water consumption
            in textile dyeing factories. Beyond this, I’ve worked on various projects ranging from fabric defect detection
            using CNNs to fine-tuning models and building RAG applications. I’m currently doing two research works. One is
            inventing a noble clustering algorithm based on density and the second one is optimization of backpropagation
            in neural networks. Additionally, I was a Mathematics lecturer at Sunrise Coaching Centre and UCC. Apart from
            this, I bring discipline, reliability and a “get things done” attitude with a strong analytical mindset.
          </p>

          {/* Resume Button */}
          <div className="pt-4">
            <a
              href="/Md_Mahir_Uddin_Resume.pdf"
              download
              className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 dark:hover:bg-indigo-500 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />
      <Contact />
    </main>
  );
}
