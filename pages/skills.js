export default function Skills() {
  const categories = [
    { title: 'ML & AI', items: ['ML','DL','NLP','CV','Gen AI','AI'] },
    { title: 'Languages', items: ['Python','SQL','C','C++','JavaScript','HTML','CSS'] },
    { title: 'Libraries', items: ['TensorFlow','PyTorch','NumPy','Pandas','Matplotlib','Scikit-learn'] },
    { title: 'Tools', items: ['Git','Linux','Excel','Word','Docker','VS Code'] },
  ]

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold">Skills & Technologies</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(cat => (
          <div key={cat.title}>
            <h3 className="font-medium text-lg">{cat.title}</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {cat.items.map(i => (
                <div key={i} className="flex items-center gap-2 bg-white border rounded-md px-3 py-1 shadow-sm">
                  {/* optional small icon here */}
                  <span className="text-sm text-gray-700">{i}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
