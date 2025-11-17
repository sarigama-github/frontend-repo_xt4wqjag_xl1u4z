import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks — we’ll be in touch!')
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-300/70">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Have a project in mind?</h2>
          <p className="mt-3 max-w-2xl text-slate-300">Tell us a bit about your goals and timeline. We typically reply within 1–2 business days.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="block text-sm text-slate-300">Name</label>
            <input required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jane Doe" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-slate-300">Email</label>
            <input type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="jane@company.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-slate-300">Project details</label>
            <textarea rows="5" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="What are you trying to achieve?" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <button type="submit" className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 transition-all">Send message</button>
            <span className="text-sm text-blue-300/80">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
