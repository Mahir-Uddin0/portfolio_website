import { useState } from "react";
import { FaFilePdf, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const certificatesData = [
  {
    title: "Machine Learning Specialization",
    platform: "Coursera",
    pdfLink: "/certificates/ml_specialization.pdf",
    credentialLink: "https://coursera.org/verify/ML123",
    subCourses: [
      "Supervised Machine Learning",
      "Advanced Regression Models",
      "Unsupervised Learning and Clustering",
      "Capstone Project",
    ],
  },
  {
    title: "Deep Learning Specialization",
    platform: "Coursera",
    pdfLink: "/certificates/dl_specialization.pdf",
    credentialLink: "https://coursera.org/verify/DL456",
    subCourses: [
      "Neural Networks and Deep Learning",
      "Improving Deep Neural Networks",
      "Structuring ML Projects",
      "Convolutional Neural Networks",
      "Sequence Models",
    ],
  },
  {
    title: "IBM Generative AI Professional Certificate",
    platform: "IBM / Coursera",
    pdfLink: "/certificates/ibm_genai.pdf",
    credentialLink: "https://coursera.org/verify/IBM789",
    subCourses: [
      "Introduction to Generative AI",
      "GenAI Application Development",
      "Prompt Engineering",
      "AI Ethics and Governance",
    ],
  },
];

export default function Certificates() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen py-12 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <section className="max-w-6xl mx-auto text-center md:text-left mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Certificates & Online Courses
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
          I have completed multiple online specializations and professional certificates to strengthen my skills 
          in Machine Learning, Deep Learning, AI, and Data Science. Click on each certificate to view the full PDF 
          or explore the credentials. Expand to see the list of sub-courses.
        </p>
      </section>

      {/* Certificates Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Certificate Thumbnail */}
            <a href={cert.pdfLink} target="_blank" rel="noreferrer">
              <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-300 text-6xl">
                <FaFilePdf />
              </div>
            </a>

            {/* Certificate Info */}
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.platform}</p>

              {/* Links */}
              <div className="flex items-center gap-4 mt-2">
                <a
                  href={cert.pdfLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline transition"
                >
                  <FaFilePdf /> View PDF
                </a>
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline transition"
                >
                  <FaExternalLinkAlt /> Credential
                </a>
              </div>

              {/* Expandable Sub-courses */}
              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center justify-between w-full mt-3 text-gray-700 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                {expandedIndex === index ? "Hide Sub-Courses" : "Show Sub-Courses"}
                {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  expandedIndex === index ? "max-h-60 mt-2" : "max-h-0"
                }`}
              >
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  {cert.subCourses.map((sub, subIndex) => (
                    <li key={subIndex}>{sub}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
