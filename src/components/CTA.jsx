export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-indigo-600 to-fuchsia-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Have a challenge? Let’s solve it.</h2>
            <p className="mt-3 text-white/90">Tell us about your product or growth goals. We’ll come back with a clear plan, timeline, and budget.</p>
            <p className="mt-6 text-sm text-white/80">Or email us directly at hello@ethronixlabs.com</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-white/10 backdrop-blur rounded-2xl p-6 shadow-xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Your name" className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"/>
              <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"/>
              <input placeholder="Company" className="sm:col-span-2 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"/>
              <textarea required rows="4" placeholder="What do you want to build or grow?" className="sm:col-span-2 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"/>
            </div>
            <button className="mt-4 inline-flex items-center rounded-full bg-white px-6 py-3 text-gray-900 font-semibold shadow hover:shadow-md transition">Request a proposal</button>
          </form>
        </div>
      </div>
    </section>
  )
}
