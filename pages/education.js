export default function Education() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-16">
      <section className="max-w-5xl mx-auto">

        {/* Section Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-14">
          Education
        </h1>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 space-y-12">

          {/* MSc */}
          <div className="relative pl-10">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600"></span>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Master of Science in Computer Science & Engineering
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Major: Data Science
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              United International University
            </p>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Nov 2024 – Present</span>
              <span>CGPA: 3.78</span>
            </div>
          </div>

          {/* BSc */}
          <div className="relative pl-10">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></span>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bachelor of Science in Textile Engineering
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Specialization: Wet Processing Engineering
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Bangladesh University of Textiles (BUTEX)
            </p>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Jan 2018 – Oct 2023</span>
              <span>CGPA: 3.34</span>
            </div>
          </div>

          {/* HSC */}
          <div className="relative pl-10">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></span>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Higher Secondary Certificate (HSC)
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Science — B.A.F. Shaheen College
            </p>
            <div className="mt-2 flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>2017</span>
              <span>GPA: 4.75</span>
            </div>
          </div>

          {/* SSC */}
          <div className="relative pl-10">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></span>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Secondary School Certificate (SSC)
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Science — Govt. Muslim High School
            </p>
            <div className="mt-2 flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>2015</span>
              <span>GPA: 5.00</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
