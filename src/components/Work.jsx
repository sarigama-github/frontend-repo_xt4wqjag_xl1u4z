export default function Work() {
  const projects = [
    {
      name: 'Fintech platform',
      tag: 'Web app',
      desc: 'Modern UI, design system, and growth experiments for a Series A startup.'
    },
    {
      name: 'Consumer brand',
      tag: 'Ecommerce',
      desc: 'Identity refresh, headless storefront, and conversion optimization.'
    },
    {
      name: 'SaaS website',
      tag: 'Marketing',
      desc: 'Positioning, storytelling, and a blazing-fast site that converts.'
    },
    {
      name: 'B2B analytics',
      tag: 'Product',
      desc: 'Interactive dashboards and self-serve onboarding funnels.'
    }
  ]

  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-300/70">Selected work</p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Results over aesthetics</h2>
            <p className="mt-3 max-w-2xl text-slate-300">A snapshot of outcomes we’ve delivered across industries. We focus on impact, speed, and clarity.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-16 aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900"></div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-300/80">{p.tag}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{p.name}</h3>
                  <p className="mt-1 text-slate-300">{p.desc}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">Case study</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
