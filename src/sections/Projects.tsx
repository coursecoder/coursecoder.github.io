import { Github, ExternalLink, Terminal } from 'lucide-react'

const projects = [
  {
    title: 'AWS Game Leaderboard',
    description: 'Serverless leaderboard system using AWS SDK & Python automation',
    longDescription: 'A complete serverless leaderboard infrastructure built with Python scripts using the AWS SDK (Boto3). Deploys S3 for static hosting, API Gateway for REST endpoints, Lambda for compute, DynamoDB for data persistence, and IAM for security. Demonstrates infrastructure-as-code principles with automated deployment scripts.',
    bullets: [],
    github: 'https://github.com/coursecoder/leaderboard-aws',
    live: 'https://leaderboard-aws.s3.amazonaws.com/index.html',
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

        {/* Featured project — two column layout */}
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card group relative border border-slate-200 hover:border-rose/40 transition-all duration-500 bg-white shadow-sm rounded-lg mb-8"
          >
            {/* FEATURED badge */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-rose text-white text-xs font-mono rounded-full tracking-wider">
              FEATURED PROJECT
            </div>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose/20 to-pink-400/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg pointer-events-none" />

            <div className="relative grid md:grid-cols-2 gap-8 p-8">

              {/* LEFT: text content */}
              <div>
                {/* Icon + links row */}
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
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="font-mono text-2xl font-semibold mb-2 group-hover:text-rose transition-colors text-slate-800">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{project.description}</p>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">{project.longDescription}</p>


              </div>

              {/* RIGHT: architecture diagram */}
              <div className="flex items-center justify-center">
                <div className="relative w-full rounded-lg overflow-hidden border border-slate-200">
                  {/* Mini terminal header */}
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100 bg-slate-50">
                    <div className="w-2 h-2 rounded-full bg-rose/60" />
                    <span className="font-mono text-xs text-slate-400">FIG 2.1: AWS SERVERLESS ARCHITECTURE</span>
                  </div>
                  <img
                    src="/Playdough-AWS-Architecture.png"
                    alt="AWS Serverless Architecture Diagram"
                    className="w-full h-auto"
                  />
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

        <div className="text-center reveal-section">
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
