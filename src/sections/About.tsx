import { useRef } from 'react'
import { Zap, Code2, Users } from 'lucide-react'

const cards = [
  {
    icon: Zap,
    title: 'HIGH GROWTH SAAS STRATEGY',
    description: 'Keeping technical curriculum accurate and current inside fast-moving SaaS release cycles.',
  },
  {
    icon: Code2,
    title: 'CONTENT-AS-CODE AUTOMATION',
    description: 'Using Python and Bash to automate the curriculum pipeline — from content creation to deployment.',
  },
  {
    icon: Users,
    title: 'MULTI-PERSONA LEARNING',
    description: 'Building learning paths for Developers, SREs, and Customer Experience teams — same content, different lenses.',
  },
]

export default function About() {
  const svgRef = useRef<SVGSVGElement>(null)

  return (
    <section id="about" className="relative py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Blueprint Diagram */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              <svg
                ref={svgRef}
                viewBox="0 0 400 400"
                className="w-full h-full"
                stroke="currentColor"
                strokeWidth="1"
              >
                {/* Outer frame */}
                <rect x="20" y="20" width="360" height="360" className="text-slate-300" fill="none" />

                {/* Inner grid */}
                <line x1="20" y1="100" x2="380" y2="100" className="text-slate-200" />
                <line x1="20" y1="200" x2="380" y2="200" className="text-slate-200" />
                <line x1="20" y1="300" x2="380" y2="300" className="text-slate-200" />
                <line x1="100" y1="20" x2="100" y2="380" className="text-slate-200" />
                <line x1="200" y1="20" x2="200" y2="380" className="text-slate-200" />
                <line x1="300" y1="20" x2="300" y2="380" className="text-slate-200" />

                {/* Central node */}
                <circle cx="200" cy="200" r="40" className="text-rose" strokeWidth="2" fill="none" />
                <circle cx="200" cy="200" r="30" className="text-rose" strokeWidth="1" fill="none" strokeOpacity="0.6" />
                <circle cx="200" cy="200" r="5" className="text-rose" fill="currentColor" />

                {/* Connection lines to skill nodes */}
                <line x1="200" y1="160" x2="200" y2="80" className="text-rose" strokeOpacity="0.7" />
                <line x1="240" y1="200" x2="320" y2="200" className="text-rose" strokeOpacity="0.7" />
                <line x1="200" y1="240" x2="200" y2="320" className="text-rose" strokeOpacity="0.7" />

                {/* Skill nodes */}
                <circle cx="200" cy="80" r="25" className="text-slate-300" fill="none" />
                <circle cx="320" cy="200" r="25" className="text-slate-300" fill="none" />
                <circle cx="200" cy="320" r="25" className="text-slate-300" fill="none" />

                {/* Labels — with inline fill so they are always visible */}
                <text x="200" y="45" textAnchor="middle" className="text-slate-500" fontSize="10" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  ARCHITECT
                </text>
                <text x="368" y="205" textAnchor="middle" className="text-slate-500" fontSize="10" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  EDUCATE
                </text>
                <text x="200" y="365" textAnchor="middle" className="text-slate-500" fontSize="10" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  AUTOMATE
                </text>

                {/* Decorative corner brackets */}
                <path d="M 30 30 L 50 30 L 50 35 L 35 35 L 35 50 L 30 50 Z" className="text-rose" fill="currentColor" />
                <path d="M 370 30 L 350 30 L 350 35 L 365 35 L 365 50 L 370 50 Z" className="text-rose" fill="currentColor" />
                <path d="M 30 370 L 50 370 L 50 365 L 35 365 L 35 350 L 30 350 Z" className="text-rose" fill="currentColor" />
                <path d="M 370 370 L 350 370 L 350 365 L 365 365 L 365 350 L 370 350 Z" className="text-rose" fill="currentColor" />
              </svg>

              {/* Floating label */}
              <div className="absolute top-4 left-4 font-mono text-xs text-slate-400">
                FIG 1.1: SYSTEM ARCHITECTURE
              </div>
            </div>
          </div>

          {/* Right: About text */}
          <div className="order-1 lg:order-2 reveal-section">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-rose" />
              <span className="font-mono text-xs text-rose tracking-wider">ABOUT ME</span>
            </div>

            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
              Knowledge Systems.
              <span className="text-rose"> Built to Scale.</span>
            </h2>

            <p className="text-slate-500 leading-relaxed mb-8">
              I've spent my career at the crossroads of two disciplines most people treat as separate — software engineering and instructional design. At Cisco, I build the learning systems that help engineers master observability, infrastructure, and AI-integrated tooling. The best technical training doesn't just explain a product. It changes how engineers think.
            </p>

            {/* Feature cards */}
            <div className="space-y-4 mb-8">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 border border-slate-200 hover:border-rose/40 transition-colors group bg-white rounded-md shadow-sm"
                >
                  <div className="p-2 bg-slate-100 group-hover:bg-rose/10 transition-colors rounded">
                    <card.icon className="w-5 h-5 text-rose" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-semibold text-slate-800 mb-1">{card.title}</div>
                    <div className="text-xs text-slate-500">{card.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/coursecoder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-rose hover:text-rose/80 transition-colors border border-rose/40 hover:border-rose px-4 py-2 rounded"
            >
              VIEW GITHUB PROFILE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
