import { useState, useEffect, useRef } from 'react'
import { Send, Linkedin, Github, Globe, Copy, Check } from 'lucide-react'

const terminalLines = [
  { text: '> initializing contact protocol...', delay: 0 },
  { text: '> loading contact information...', delay: 300 },
  { text: '> user.name: Coleen Stanley, M.Ed.', delay: 600 },
  { text: '> user.location: Atlanta, GA', delay: 800 },
  { text: '> user.role: Staff Technical Content Architect', delay: 1000 },
  { text: '> user.cert: AWS Cloud Certified', delay: 1200 },
  { text: '> status: ready to connect', delay: 1600 },
  { text: '> _', delay: 1800 },
]

const contactLinks = [
  {
    icon: Linkedin,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/coleenstanley',
    href: 'https://linkedin.com/in/coleenstanley',
  },
  {
    icon: Github,
    label: 'GITHUB',
    value: 'github.com/coursecoder',
    href: 'https://github.com/coursecoder',
  },
  {
    icon: Globe,
    label: 'WEBSITE',
    value: 'coursecoder.com',
    href: 'https://coursecoder.com',
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleLines, setVisibleLines] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            terminalLines.forEach((line, i) => {
              setTimeout(() => {
                setVisibleLines(i + 1)
              }, line.delay)
            })
          }
        })
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value)
    setCopiedLabel(label)
    setTimeout(() => setCopiedLabel(null), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await fetch("https://formspree.io/f/xnjbgovz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    setSending(false)
    setSent(true)
    setForm({ name: "", email: "", message: "" })
    setTimeout(() => setSent(false), 5000)
  }

  const getLineClass = (text: string) => {
    if (text.includes('name:') || text.includes('location:') || text.includes('role:') || text.includes('cert:')) return 'text-emerald-600'
    if (text.includes('status:')) return 'text-rose'
    if (text === '> _') return 'text-slate-400 animate-pulse'
    return 'text-slate-500'
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 reveal-section">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-rose" />
            <span className="font-mono text-xs text-rose tracking-wider">CONTACT</span>
            <div className="w-8 h-px bg-rose" />
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Send a <span className="text-rose">Signal</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to build systems that multiply impact? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="reveal-section">
            <div className="border border-slate-200 bg-white shadow-sm overflow-hidden rounded-lg mb-6">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50">
                <div className="w-3 h-3 rounded-full bg-rose/60" />
                <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                <span className="ml-4 font-mono text-xs text-slate-400">contact.sh</span>
              </div>
              <div className="p-6 font-mono text-sm min-h-[220px]">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className={`mb-1 ${getLineClass(line.text)}`}>
                    {line.text}
                    {i === visibleLines - 1 && line.text === '> _' && (
                      <span className="inline-block w-2 h-4 bg-rose/70 ml-0.5 align-middle animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-slate-200 hover:border-rose/40 transition-colors group bg-white shadow-sm rounded-lg">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 flex-1">
                    <div className="p-2 bg-slate-100 group-hover:bg-rose/10 transition-colors rounded">
                      <link.icon className="w-4 h-4 text-rose" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-slate-400">{link.label}</div>
                      <div className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">{link.value}</div>
                    </div>
                  </a>
                  <button onClick={() => handleCopy(link.value, link.label)} className="p-2 text-slate-400 hover:text-rose transition-colors" aria-label={`Copy ${link.label}`}>
                    {copiedLabel === link.label ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-section">
            <div className="p-6 md:p-8 border border-slate-200 bg-white shadow-sm rounded-lg">
              <h3 className="font-mono text-lg font-semibold mb-6 text-slate-800">TRANSMIT MESSAGE</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs text-slate-500 mb-2">NAME</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:border-rose focus:outline-none transition-colors rounded-md" />
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-500 mb-2">EMAIL</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="your@email.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:border-rose focus:outline-none transition-colors rounded-md" />
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-500 mb-2">MESSAGE</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} placeholder="What are you building, and how can I help?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:border-rose focus:outline-none transition-colors resize-none rounded-md" />
                </div>
                <button type="submit" disabled={sending || sent} className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-mono text-sm tracking-wider transition-all duration-300 rounded-md ${sent ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'bg-rose text-white hover:bg-rose/90'}`}>
                  {sending ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />TRANSMITTING...</>
                  ) : sent ? (
                    <><Check className="w-4 h-4" />MESSAGE SENT</>
                  ) : (
                    <><Send className="w-4 h-4" />TRANSMIT</>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
