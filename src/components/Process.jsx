const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Clarify goals, audiences, and constraints. Define success.'
  },
  { num: '02', title: 'Design', desc: 'User flows, UI, and technical blueprint for fast execution.' },
  { num: '03', title: 'Build', desc: 'Iterative delivery with CI/CD and clear milestones.' },
  { num: '04', title: 'Grow', desc: 'Measure, optimize, and scale what works.' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How we work</h2>
          <p className="mt-3 text-gray-600">A simple, transparent process designed for speed and outcomes.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-mono text-indigo-600">{s.num}</p>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
