import { useState } from 'react'
import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'What we do', href: '#features' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <a href="#" className="group inline-flex items-center gap-2">
            <span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/30">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-white font-semibold tracking-tight">DF4</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 transition-all">
              Let’s talk
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white">
                Let’s talk
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
