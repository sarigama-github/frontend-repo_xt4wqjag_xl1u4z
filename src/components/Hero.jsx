import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(37,99,235,0.15),rgba(2,6,23,0))]"></div>
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              Digital-first business solutions
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Transform your brand with design, web, and growth marketing
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              We partner with ambitious teams to craft high-impact websites, identities, and campaigns that drive measurable results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 transition-all">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10">
                View our work
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
              <span>Web design & development</span>
              <span>•</span>
              <span>Brand identity</span>
              <span>•</span>
              <span>Performance marketing</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto h-[420px] max-w-xl rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur"></div>
              <div className="relative grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-video rounded-xl border border-white/10 bg-slate-800/60"></div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
