import { motion } from 'framer-motion'
import { ArrowRight, Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-300/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-indigo-300/40 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Build. Launch. Scale.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">Ethronix Labs</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              A full-stack partner for product engineering and digital growth. We craft custom software, launch SaaS, and run high-ROI campaigns.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 text-base font-semibold text-white shadow hover:shadow-md transition">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 hover:border-gray-400">
                Explore services
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {["Custom Software", "SaaS", "Growth"].map((k) => (
                <div key={k} className="rounded-xl border border-gray-200 bg-white/60 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-gray-700">{k}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white/10 backdrop-blur p-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <Rocket className="mx-auto mb-3 h-10 w-10" />
                  <p className="text-xl font-semibold">Ship faster with a world-class team</p>
                  <p className="mt-1 text-white/80">Strategy, design, engineering, and growth under one roof.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
