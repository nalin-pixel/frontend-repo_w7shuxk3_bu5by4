import { Code, LineChart, Globe2, Shield, Bot, Layers } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Custom Software',
    desc: 'End-to-end product engineering across web, mobile, and cloud.'
  },
  {
    icon: Layers,
    title: 'SaaS Development',
    desc: 'From MVP to scale: multi-tenant architecture, billing, and ops.'
  },
  {
    icon: LineChart,
    title: 'Growth Marketing',
    desc: 'Performance campaigns, SEO, and CRO tuned for ROI.'
  },
  {
    icon: Globe2,
    title: 'Web Experiences',
    desc: 'Brand websites and headless CMS with blazing performance.'
  },
  {
    icon: Shield,
    title: 'Security & DevOps',
    desc: 'CI/CD, observability, and hardening for serious reliability.'
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    desc: 'Integrations, agents, and pipelines that unlock leverage.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">Full-service capabilities to take you from zero to one, then one to many.</p>
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
