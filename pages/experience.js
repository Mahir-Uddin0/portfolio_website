export default function Experience() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-16 bg-white dark:bg-gray-900">
      <section className="max-w-5xl mx-auto space-y-12">

        {/* Page Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Experience
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
            A combination of applied data science work, industrial exposure, and strong teaching experience that
            reflects both technical depth and real-world understanding.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">

          {/* ADB Project */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Data Scientist <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">(Part-time)</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              ADB-Funded AI & IoT Project
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Jan 2026 – Present
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>
                Working on an Asian Development Bank (ADB) funded project to reduce water consumption in textile dyeing factories using AI and IoT.
              </li>
              <li>
                Analyzing industrial sensor and process data to support predictive modeling and optimization.
              </li>
              <li>
                Translating real-world operational problems into data-driven and machine learning solutions.
              </li>
              <li>
                Collaborating with domain experts to ensure practical and deployable outcomes.
              </li>
            </ul>
          </div>

          {/* Epyllion Group */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Management Trainee → Executive
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Epyllion Group — Textile Dyeing Division
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Nov 2023 – Jul 2024 · On-site · Gazipur, Dhaka
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>
                Completed a structured management trainee program followed by an executive role in factory operations.
              </li>
              <li>
                Assisted in monitoring dyeing processes, production flow, and operational coordination.
              </li>
              <li>
                Gained hands-on exposure to industrial systems, constraints, and real manufacturing environments.
              </li>
              <li>
                Developed process-oriented thinking relevant to applied analytics and optimization problems.
              </li>
            </ul>
          </div>

          {/* Sunrise Coaching Centre */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Mathematics & Physics Lecturer <span className="text-sm font-medium text-gray-500">(Part-time)</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Sunrise Coaching Centre
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Aug 2018 – Sep 2022
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>
                Taught Mathematics and Physics to higher secondary and admission test students.
              </li>
              <li>
                Focused on analytical thinking, structured problem-solving, and conceptual clarity.
              </li>
              <li>
                Strengthened communication skills by breaking down complex ideas into simple explanations.
              </li>
            </ul>
          </div>

          {/* UCC */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Mathematics Lecturer <span className="text-sm font-medium text-gray-500">(Seasonal)</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              UCC (University Coaching Center)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Apr 2019 – Aug 2022
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>
                Delivered Mathematics lectures for university admission candidates.
              </li>
              <li>
                Helped students develop strong logical reasoning and exam-focused problem-solving skills.
              </li>
              <li>
                Built discipline, consistency, and mentorship ability over multiple academic cycles.
              </li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
