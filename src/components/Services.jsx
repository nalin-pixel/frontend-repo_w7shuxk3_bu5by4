import { Search, PenLine, Megaphone, Settings, Globe2, LineChart } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'SEO',
    desc: 'Technical audits, on-page optimization, schema, and link strategy to rank and convert.'
  },
  {
    icon: PenLine,
    title: 'Content Creation',
    desc: 'Research-backed articles, landing pages, video scripts, and social content tailored to your ICP.'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Full-funnel growth: paid media, email, lifecycle, and remarketing tuned for ROI.'
  },
  {
    icon: Settings,
    title: 'Platform Management',
    desc: 'End-to-end channel ops: websites, CMS, ecommerce, analytics, and marketing platforms.'
  },
  {
    icon: Globe2,
    title: 'Web Experiences',
    desc: 'High-performance sites and landing pages with modern UX, accessibility, and SEO foundations.'
  },
  {
    icon: LineChart,
    title: 'Analytics & CRO',
    desc: 'Tracking, dashboards, and experimentation frameworks to turn insights into growth.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">Marketing and platform services that drive measurable growth and durable brand equity.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
