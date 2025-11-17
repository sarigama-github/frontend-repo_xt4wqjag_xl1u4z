import { Wand2, Globe2, LineChart, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Wand2,
    title: 'Brand & Identity',
    desc: 'Naming, identity systems, and brand playbooks that scale with you.'
  },
  {
    icon: Globe2,
    title: 'Websites & Product',
    desc: 'High-performance websites and web apps built with modern stacks.'
  },
  {
    icon: LineChart,
    title: 'Growth Marketing',
    desc: 'Acquisition strategy, SEO, paid media, and conversion optimization.'
  },
  {
    icon: ShieldCheck,
    title: 'Ongoing Support',
    desc: 'Retainers for continuous improvements, content, and experiments.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-300/70">What we do</p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">A studio for modern teams</h2>
            <p className="mt-3 max-w-2xl text-slate-300">End-to-end capabilities to take you from idea to launch, and beyond. We blend strategy, design, and engineering to ship quickly and iterate.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow shadow-blue-600/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
