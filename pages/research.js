export default function Research() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">

      {/* Research Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Research Work
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            This section showcases my academic and course-based research work.
            Although these papers are not yet published, they reflect my ability
            to explore problems deeply, design algorithms, and apply analytical
            thinking to real-world and theoretical challenges.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Research Card 1 */}
          <a
            href="/research/paper1.pdf"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition"
          >
            {/* PDF Preview (Always Light) */}
            <div className="h-52 bg-white overflow-hidden">
              <embed
                src="/research/paper1.pdf"
                type="application/pdf"
                className="w-full h-full"
              />
            </div>

            {/* Text Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                Fabric Defect Detection Using Histogram Equalization and Convolutional Neural Network
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                A novel clustering refinement technique that detects low-density
                regions to dynamically split incorrectly merged clusters.
              </p>
            </div>
          </a>

          {/* Research Card 2 */}
          <a
            href="/research/paper2.pdf"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition"
          >
            <div className="h-52 bg-white overflow-hidden">
              <embed
                src="/research/paper2.pdf"
                type="application/pdf"
                className="w-full h-full"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                Recursive Density-Based Refinement of K-Means for Automatic Cluster Splitting
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                An experimental study proposing modifications to gradient updates
                for improved convergence and training stability.
              </p>
            </div>
          </a>

          {/* Research Card 3 */}
          <a
            href="/research/paper3.pdf"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition"
          >
            <div className="h-52 bg-white overflow-hidden">
              <embed
                src="/research/paper3.pdf"
                type="application/pdf"
                className="w-full h-full"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                An Intelligent Irrigation Decision Support System using IoT and Weather Data
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                A course research paper exploring AI and IoT-based systems to
                reduce water consumption in industrial textile processes.
              </p>
            </div>
          </a>

        </div>
      </section>
    </main>
  );
}
