import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-20 bg-white dark:bg-black">

      {/* Page Container */}
      <section className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Projects
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            A selection of hands-on projects focused on Machine Learning, Deep Learning,
            and applied AI. Each project emphasizes problem formulation, modeling,
            and practical implementation. Source code is available on GitHub.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project Card */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between">
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Fabric Defect Detection using CNN
              </h3>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Designed and trained a convolutional neural network to automatically
                identify fabric defects from image data, improving inspection accuracy
                and reducing manual effort.
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-pill">PyTorch</span>
                <span className="skill-pill">CNN</span>
                <span className="skill-pill">Computer Vision</span>
              </div>
            </div>

            {/* GitHub */}
            <div className="mt-6">
              <a
                href="https://github.com/yourusername/fabric-defect-detection"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>

          {/* Project Card */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between">
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Retrieval-Augmented Generation (RAG) System
              </h3>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Built a RAG-based system integrating vector search and large language
                models to provide grounded, domain-specific answers.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-pill">LLM</span>
                <span className="skill-pill">LangChain</span>
                <span className="skill-pill">Vector Database</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://github.com/yourusername/rag-project"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>

          {/* Project Card */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between">
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Spam Email Classification
              </h3>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Implemented classical machine learning models to classify spam emails,
                focusing on feature engineering and model evaluation.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-pill">Scikit-learn</span>
                <span className="skill-pill">NLP</span>
                <span className="skill-pill">Naive Bayes</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://github.com/yourusername/spam-classification"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
