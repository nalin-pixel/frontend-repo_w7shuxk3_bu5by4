const solutions = [
  {
    title: 'Startup Sprint',
    desc: 'Design, build, and launch your MVP in weeks, not months.',
    tags: ['Discovery', 'MVP', 'Launch']
  },
  {
    title: 'SaaS Core',
    desc: 'Auth, billing, dashboards, and multi-tenant foundations.',
    tags: ['SaaS', 'Stripe', 'Multi-tenant']
  },
  {
    title: 'Growth Engine',
    desc: 'SEO, content, and paid channels that compound over time.',
    tags: ['SEO', 'Ads', 'Analytics']
  },
  {
    title: 'Data & AI',
    desc: 'Data pipelines, LLM integrations, and automation flows.',
    tags: ['LLM', 'ETL', 'Agents']
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Tailored solutions</h2>
          <p className="mt-3 text-gray-600">Pick a track or mix and match. We adapt to your stage and goals.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
