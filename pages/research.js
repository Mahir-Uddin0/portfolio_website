export default function Research() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-neutral-950">

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Research Work
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
            The following are IEEE-format conference-style research papers
            completed as part of my university coursework and independent study.
            These papers are not published. Ongoing and
            publishable research works are not included here.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Paper 1 */}
          <a
            href="/research/paper1.pdf"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800
                       bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-lg transition"
          >
            {/* PDF Preview (always white) */}
            <div className="h-52 bg-neutral-50 overflow-hidden border-b border-gray-200">
              <embed
                src="/research/paper1.pdf"
                type="application/pdf"
                className="w-full h-full"
              />
            </div>

            <div className="p-5">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white
                             group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition text-justify">
                Fabric Defect Detection Using Histogram Equalization and
                Convolutional Neural Network
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-justify">
                A vision-based defect detection approach combining contrast
                enhancement techniques with CNNs for automated textile quality inspection.
              </p>
            </div>
          </a>

          {/* Paper 2 */}
          <a
            href="/research/paper2.pdf"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800
                       bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-lg transition"
          >
            <div className="h-52 bg-neutral-50 overflow-hidden border-b border-gray-200">
              <embed
                src="/research/paper2.pdf"
                type="application/pdf"
                className="w-full h-full"
              />
            </div>

            <div className="p-5">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white
                             group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition text-justify">
                Automated Density-Based Splitting of Merged Clusters
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-justify">
                A clustering refinement framework that detects low-density
                regions to recursively split incorrectly merged clusters.
              </p>
            </div>
          </a>

          {/* Paper 3 */}
          <a
            href="/research/paper3.pdf"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800
                       bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-lg transition"
          >
            <div className="h-52 bg-neutral-50 overflow-hidden border-b border-gray-200">
              <embed
                src="/research/paper3.pdf"
                type="application/pdf"
                className="w-full h-full"
              />
            </div>

            <div className="p-5">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white
                             group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition text-justify">
                An Intelligent Irrigation Decision Support System Using IoT and
                Weather Data
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-justify">
                A data-driven decision support system integrating IoT sensors
                and weather data to optimize irrigation and water usage.
              </p>
            </div>
          </a>

        </div>
      </section>
    </main>
  );
}
