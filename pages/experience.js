export default function Experience() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-16 bg-white dark:bg-gray-900">
      <section className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Experience
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 space-y-10">

          {/* ADB Project */}
          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600"></span>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Data Scientist <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">(Part-time)</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              ADB-Funded AI & IoT Project
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Jan 2026 – Present
            </p>
          </div>


          {/* Epyllion Group */}
          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-500"></span>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Executive <span className="text-sm font-medium text-gray-500">(Full-time)</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Epyllion Group  · On-site
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              May 2024 – Jul 2024 · 3 mos
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Gazipur, Dhaka
            </p>
          </div>
          {/* Management Trainee */}
          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-400"></span>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Management Trainee Officer <span className="text-sm font-medium text-gray-500">(Full-time)</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Epyllion Group · On-site
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Nov 2023 – Apr 2024 · 6 mos
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Gazipur, Dhaka
            </p>
          </div>

          {/* Sunrise Coaching */}
          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-500"></span>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Mathematics & Physics Lecturer <span className="text-sm font-medium text-gray-500">(Part-time)</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Sunrise Coaching Centre
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Aug 2018 – Sep 2022 · 4 yrs 2 mos
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Farmgate, Dhaka
            </p>
          </div>

          {/* UCC */}
          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-400"></span>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Mathematics Lecturer <span className="text-sm font-medium text-gray-500">(Seasonal)</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              UCC (University Coaching Center)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Apr 2019 – Aug 2022 · 3 yrs 5 mos
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Farmgate, Dhaka
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
