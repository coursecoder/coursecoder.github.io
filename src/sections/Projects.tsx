import { Github, ExternalLink, Terminal } from 'lucide-react'

type ImagePanel = {
  type: 'image'
  src: string
  alt: string
  caption: string
}

type TerminalPanel = {
  type: 'terminal'
  caption: string
  lines: string[]
}

type Project = {
  title: string
  description: string
  longDescription: string
  badge: string
  github: string
  live?: string
  tags: string[]
  panel: ImagePanel | TerminalPanel
}

const projects: Project[] = [
  {
    title: 'MTAT — AI-Adaptive Learning Content Engine',
    badge: 'FEATURED PROJECT',
    description: 'CLI system that generates audience-specific curriculum variants using the Claude API',
    longDescription:
      'Built a modular content-as-code pipeline where a single base module is adapted by Claude into developer, executive, trainer, and technical-writer variants. Includes YAML-tracked provenance manifest, Moodle LMS integration via Docker, and SHA-hashed prompt versioning for full audit trails — translating pedagogical goals directly into production learning infrastructure.',
    github: 'https://github.com/coursecoder/mtat',
    tags: ['Python', 'Claude API', 'Anthropic SDK', 'Docker', 'Moodle', 'Adaptive Learning', 'Content-as-Code'],
    panel: {
      type: 'terminal',
      caption: 'FIG 1.1: MTAT ADAPTIVE CONTENT PIPELINE',
      lines: [
        '$ python generate-variant.py \\',
        '    --module example-course/01-concept \\',
        '    --audience developer',
        '',
        '  Model   : claude-opus-4-6',
        '  Audience: developer  |  Locale: en-US',
        '  Calling Claude API...',
        '',
        '  Done.',
        '  Variant : variants/01-concept/developer-en-US.md',
        '  Manifest: variants/manifest.yaml',
        '',
        '$ cat variants/manifest.yaml | tail -6',
        '  model: claude-opus-4-6',
        '  prompt_sha256: 3a9f1c...',
        '  input_tokens: 1842',
        '  output_tokens: 967',
      ],
    },
  },
  {
    title: 'AWS Game Leaderboard',
    badge: 'FEATURED PROJECT',
    description: 'Serverless leaderboard system using AWS SDK & Python automation',
    longDescription:
      'A complete serverless leaderboard infrastructure built with Python scripts using the AWS SDK (Boto3). Deploys S3 for static hosting, API Gateway for REST endpoints, Lambda for compute, DynamoDB for data persistence, and IAM for security. Demonstrates infrastructure-as-code principles with automated deployment scripts.',
    github: 'https://github.com/coursecoder/leaderboard-aws',
    live: 'https://leaderboard-aws.s3.amazonaws.com/index.html',
    tags: ['Python', 'Boto3', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'IAM'],
    panel: {
      type: 'image',
      src: '/Playdough-AWS-Architecture.png',
      alt: 'AWS Serverless Architecture Diagram',
      caption: 'FIG 2.1: AWS SERVERLESS ARCHITECTURE',
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal-section">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-rose" />
            <span className="font-mono text-xs text-rose tracking-wider">PROJECTS</span>
            <div className="w-8 h-px bg-rose" />
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Featured <span className="text-rose">Work</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            When I'm not architecting learning systems at work, I'm building the real thing. These projects are how I stay sharp.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card group relative border border-slate-200 hover:border-rose/40 transition-all duration-500 bg-white shadow-sm rounded-lg"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-rose text-white text-xs font-mono rounded-full tracking-wider">
                {project.badge}
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose/20 to-pink-400/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg pointer-events-none" />

              <div className="relative grid md:grid-cols-2 gap-8 p-8">

                {/* LEFT: text content */}
                <div>
                  <div className="flex items-start gap-4 mb-6 mt-6">
                    <div className="p-3 bg-slate-100 group-hover:bg-rose/10 transition-colors rounded-lg">
                      <Terminal className="w-8 h-8 text-rose" />
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
                          aria-label="View demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-mono text-xl font-semibold mb-2 group-hover:text-rose transition-colors text-slate-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{project.description}</p>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">{project.longDescription}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 text-xs font-mono bg-slate-100 text-slate-600 border border-slate-200 group-hover:border-rose/20 transition-colors rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT: panel */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full rounded-lg overflow-hidden border border-slate-200">
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100 bg-slate-50">
                      <div className="w-2 h-2 rounded-full bg-rose/60" />
                      <span className="font-mono text-xs text-slate-400">{project.panel.caption}</span>
                    </div>

                    {project.panel.type === 'image' ? (
                      <img
                        src={project.panel.src}
                        alt={project.panel.alt}
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="bg-slate-950 p-5 font-mono text-xs leading-relaxed min-h-[220px]">
                        {project.panel.lines.map((line, j) => (
                          <div key={j} className={line === '' ? 'h-3' : ''}>
                            {line !== '' && (
                              <span className={
                                line.startsWith('$') ? 'text-rose' :
                                line.startsWith('  Done') ? 'text-emerald-400' :
                                line.startsWith('  Model') || line.startsWith('  Audience') || line.startsWith('  Variant') || line.startsWith('  Manifest') ? 'text-slate-300' :
                                line.startsWith('  Calling') ? 'text-amber-400' :
                                'text-slate-500'
                              }>
                                {line}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Bottom-right hover accent lines */}
              <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-rose/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-rose/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal-section mt-8">
          <a
            href="https://github.com/coursecoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-rose hover:text-rose/80 transition-colors border border-rose/40 hover:border-rose px-6 py-3 rounded"
          >
            <Github className="w-3 h-3" /> VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  )
}
