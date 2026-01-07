import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Machine Learning Specialization",
    provider: "Coursera · Stanford",
    pdf: "/certificates/ML Specialization/Main.pdf",
    credential: "https://coursera.org/verify/example",
    courses: [
      {
        name: "1. Supervised Machine Learning: Regression and Classification",
        pdf: "/certificates/ML Specialization/1. Supervised ML.pdf",
      },
      {
        name: "2. Advanced Learning Algorithms",
        pdf: "/certificates/ML Specialization/2. Advanced Learning Algorithms.pdf",
      },
      {
        name: "3. Unsupervised Learning, Recommenders, Reinforcement Learning",
        pdf: "/certificates/ML Specialization/3. Unsupervised Learning.pdf",
      },
    ],
  },
  {
    title: "Deep Learning Specialization",
    provider: "Coursera · DeepLearning.AI",
    pdf: "/certificates/dl_specialization.pdf",
    credential: "https://coursera.org/verify/example",
    courses: [
      {
        name: "Neural Networks and Deep Learning",
        pdf: "/certificates/dl_nn.pdf",
      },
      {
        name: "Improving Deep Neural Networks",
        pdf: "/certificates/dl_optimization.pdf",
      },
      {
        name: "Structuring Machine Learning Projects",
        pdf: "/certificates/dl_structuring.pdf",
      },
    ],
  },
  {
    title: "IBM Gen AI Engineering Professional Certificate",
    provider: "Coursera · DeepLearning.AI",
    pdf: "/certificates/IBN Gen AI/Main.pdf",
    credential: "https://coursera.org/verify/example",
    courses: [
      {
        name: "1. Intro to Artificial Intelligence (AI)",
        pdf: "/certificates/IBN Gen AI/1. Intro to AI.pdf",
      },
      {
        name: "2. Generative AI: Introduction and Applications",
        pdf: "/certificates/IBN Gen AI/2. Gen AI Intro and Application.pdf",
      },
      {
        name: "3. Generative AI: Prompt Engineering Basics",
        pdf: "/certificates/IBN Gen AI/3. Prompt Engineering.pdf",
      },
      {
        name: "4. Python for Data Science, AI & Development",
        pdf: "/certificates/IBN Gen AI/4. Python.pdf",
      },
      {
        name: "5. Developing AI application with Python and Flask",
        pdf: "/certificates/IBN Gen AI/5. AI application with Flask.pdf",
      },
      {
        name: "6. Building Generative AI-Powered Applications with Python",
        pdf: "/certificates/IBN Gen AI/6. Building Gen AI applications.pdf",
      },
      {
        name: "7. Data Analysis with Python",
        pdf: "/certificates/IBN Gen AI/7. Data Analysis with Python.pdf",
      },
      {
        name: "8. Machine Learning with Python",
        pdf: "/certificates/IBN Gen AI/8. ML with Python.pdf",
      },
      {
        name: "9. Introduction to Deep Learning & Neural Networks with Keras",
        pdf: "/certificates/IBN Gen AI/9. Deep Learning with Keras.pdf",
      },
      {
        name: "10. Generative AI and LLMs: Architecture and Data Preparation",
        pdf: "/certificates/IBN Gen AI/10. Gen AI Architectures .pdf",
      },
      {
        name: "11. Gen AI Foundational Models for NLP & Language Understanding",
        pdf: "/certificates/IBN Gen AI/11. Gen AI Foundational Models.pdf",
      },
      {
        name: "12. Generative AI Language Modeling with Transformers",
        pdf: "/certificates/IBN Gen AI/12. Language Modeling with Transformers.pdf",
      },
      {
        name: "13. Generative AI Engineering and Fine-Tuning Transformers",
        pdf: "/certificates/IBN Gen AI/13. Fine Tuning Transformers.pdf",
      },
      {
        name: "14. Generative AI Advance Fine-Tuning for LLMs",
        pdf: "/certificates/IBN Gen AI/14. Advanced Fine Tuning of LLMs.pdf",
      },
      {
        name: "15. Fundamentals of AI Agents Using RAG and LangChain",
        pdf: "/certificates/IBN Gen AI/15. AI Agents using RAG and LangChain.pdf",
      },
      {
        name: "16. Project: GenerativeAI Applications with RAG and LangChain",
        pdf: "/certificates/IBN Gen AI/16. Gen AI App with RAG and LangChain.pdf",
      },
    ],
  },
  {
    title: "Mathematics for Machine Learning and Data Science Specialization",
    provider: "Coursera · DeepLearning.AI",
    pdf: "/certificates/dl_specialization.pdf",
    credential: "https://coursera.org/verify/example",
    courses: [
      {
        name: "Neural Networks and Deep Learning",
        pdf: "/certificates/dl_nn.pdf",
      },
      {
        name: "Improving Deep Neural Networks",
        pdf: "/certificates/dl_optimization.pdf",
      },
      {
        name: "Structuring Machine Learning Projects",
        pdf: "/certificates/dl_structuring.pdf",
      },
    ],
  },
  {
    title: "Deep Learning Specialization",
    provider: "Coursera · DeepLearning.AI",
    pdf: "/certificates/dl_specialization.pdf",
    credential: "https://coursera.org/verify/example",
    courses: [
      {
        name: "Neural Networks and Deep Learning",
        pdf: "/certificates/dl_nn.pdf",
      },
      {
        name: "Improving Deep Neural Networks",
        pdf: "/certificates/dl_optimization.pdf",
      },
      {
        name: "Structuring Machine Learning Projects",
        pdf: "/certificates/dl_structuring.pdf",
      },
    ],
  },
  {
    title: "Deep Learning Specialization",
    provider: "Coursera · DeepLearning.AI",
    pdf: "/certificates/dl_specialization.pdf",
    credential: "https://coursera.org/verify/example",
    courses: [
      {
        name: "Neural Networks and Deep Learning",
        pdf: "/certificates/dl_nn.pdf",
      },
      {
        name: "Improving Deep Neural Networks",
        pdf: "/certificates/dl_optimization.pdf",
      },
      {
        name: "Structuring Machine Learning Projects",
        pdf: "/certificates/dl_structuring.pdf",
      },
    ],
  },
];

export default function CertificatesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white dark:bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Certificates & Online Courses
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            I have completed multiple online specializations and professional
            certificates to strengthen my foundation in Machine Learning,
            Deep Learning, and AI. Below are the specialization certificates
            along with their individual course credentials.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-gray-50 dark:bg-neutral-900"
            >
              {/* PDF Preview */}
              <a href={cert.pdf} target="_blank" rel="noreferrer">
                <div className="h-64 w-full overflow-hidden border-b border-gray-200 dark:border-gray-800">
                  <iframe
                    src={`${cert.pdf}#page=1&zoom=90`}
                    className="w-full h-full"
                    title={cert.title}
                  />
                </div>
              </a>

              {/* Text Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.provider}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    View Certificate PDF
                  </a>
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    View Credentials <FaExternalLinkAlt size={12} />
                  </a>
                </div>

                {/* Expandable Courses */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                >
                  {openIndex === index ? "Hide sub-courses" : "Show sub-courses"}
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {/* Sub-course List */}
                {openIndex === index && (
                  <ul className="pl-4 space-y-2 text-sm">
                    {cert.courses.map((course, i) => (
                      <li key={i}>
                        <a
                          href={course.pdf}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                        >
                          {course.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
