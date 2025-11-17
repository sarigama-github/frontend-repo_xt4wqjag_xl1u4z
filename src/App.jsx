import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(37,99,235,0.15),transparent),radial-gradient(1200px_600px_at_90%_20%,rgba(99,102,241,0.12),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Work />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-slate-400">© {new Date().getFullYear()} DF4 — All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
