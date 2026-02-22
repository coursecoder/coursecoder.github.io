import { Code2, Cloud, BookOpen } from 'lucide-react'

const toolkit = [
  {
    icon: Code2,
    title: 'ENGINEERING',
    items: ['Bash/Zsh', 'Python', 'Boto3 (AWS SDK)', 'Docker', 'CI/CD', 'GitHub/GitLab', 'REST APIs'],
    color: 'text-blue-600',
  },
  {
    icon: Cloud,
    title: 'AWS SERVICES',
    items: ['S3', 'Lambda', 'DynamoDB', 'API Gateway', 'IAM', 'VPC', 'CloudFormation'],
    color: 'text-rose',
  },
  {
    icon: BookOpen,
    title: 'INSTRUCTIONAL AUTHORING',
    items: ['Xyleme Create (LCMS)', 'Rise/Storyline', 'Camtasia/Snagit', 'HTML/CSS', 'DITA', 'Markdown'],
    color: 'text-amber-600',
  },
]

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal-section">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-rose" />
            <span className="font-mono text-xs text-rose tracking-wider">THE TOOLKIT</span>
            <div className="w-8 h-px bg-rose" />
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Technical <span className="text-rose">Expertise</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I don't just use tools — I architect the right toolkit for the challenge. From Python automation and AWS Boto3 to enterprise LCMS platforms, every choice is deliberate, modular, and built to scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-cards">
          {toolkit.map((item, i) => (
            <div
              key={i}
              className="stagger-card group relative p-6 border border-slate-200 hover:border-rose/40 transition-all duration-300 card-lift bg-white rounded-lg shadow-sm"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8">
                <div className="absolute top-0 right-0 w-4 h-px bg-slate-200 group-hover:bg-rose/50 transition-colors" />
                <div className="absolute top-0 right-0 w-px h-4 bg-slate-200 group-hover:bg-rose/50 transition-colors" />
              </div>

              <div className="mb-4">
                <item.icon className={`w-8 h-8 ${item.color} group-hover:scale-110 transition-transform`} />
              </div>

              <h3 className="font-mono text-sm font-semibold mb-4 tracking-wider text-slate-800">{item.title}</h3>

              <div className="flex flex-wrap gap-2">
                {item.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs font-mono bg-slate-100 text-slate-600 border border-slate-200 group-hover:border-rose/20 transition-colors rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-rose/5 to-transparent rounded-lg" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal-section">
          <p className="text-xs text-slate-400 font-mono">
            Curriculum engineered like software. Designed to scale.
          </p>
        </div>
      </div>
    </section>
  )
}
