export default function Education() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-20">

      {/* ================= Education Section ================= */}
      <section className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Education
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            My academic journey reflects a transition into Computer Science and Data
            Science, driven by a strong foundation in mathematics and a growing interest
            in machine learning, research, and real-world problem solving.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 space-y-12">

          {/* MSc */}
          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600"></span>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Master of Science (MSc) in Computer Science & Engineering
            </h2>

            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Major in Data Science
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
              United International University · 2023 – Present
            </p>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              Focused on machine learning, deep learning, advanced analytics, and
              research-oriented coursework, with active involvement in academic
              and applied research projects.
            </p>
          </div>

          {/* BSc */}
          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></span>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bachelor of Science (BSc)
            </h2>

            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Wet Processing Engineering
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
              Bangladesh University of Textiles · Graduated 2023
            </p>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              Built strong analytical thinking and problem-solving skills, along
              with a solid mathematical foundation that later supported my
              transition into data science and machine learning.
            </p>
          </div>

        </div>
        {/* ================= End Timeline ================= */}

      </section>
      {/* ================= End Education Section ================= */}

    </main>
  );
}
