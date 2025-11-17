import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Process />
        <CTA />
      </main>
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ethronix Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#solutions" className="hover:text-gray-900">Solutions</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
