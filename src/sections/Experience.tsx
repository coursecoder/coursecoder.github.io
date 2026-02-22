import { BookOpen, MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Staff Technical Curriculum Developer',
    company: 'Cisco (formerly Splunk)',
    location: 'Atlanta, GA (Remote)',
    period: '2021 - Present',
    description: 'Leading the development of technical curriculum and learning systems for enterprise customers.',
    achievements: [
      'Served as a lead Subject Matter Expert (SME) for the Splunk Observability Cloud certification exam, architecting high-stakes assessment items to validate technical proficiency for global partners and customers',
      'Architected high-fidelity, scenario-based lab environments by developing custom automation scripts for data generators and Java-based applications, enabling SREs and DevOps engineers to master complex observability workflows',
      "Engineered a centralized 'Content Library' utilizing Markdown, GitLab, and JIRA automation, streamlining the development lifecycle and establishing a single source of truth for modular curriculum components",
      'Delivered high-impact technical training to global audiences at Splunk .conf (annual user conference), driving product adoption and community engagement through live, hands-on instruction',
      'Post-Cisco acquisition, expanded scope to design training frameworks for global Customer Success, Sales Enablement, and Technical Delivery teams supporting AI-integrated services',
      'Earned accelerated promotion from Senior to Staff level within 3 years, recognized for technical impact and curriculum leadership',
    ],
    technologies: ['Python', 'AWS', 'Splunk O11y SME', 'Content-as-Code'],
  },
  {
    title: 'IT Instructional Designer/Trainer',
    company: 'Georgia Department of Transportation',
    location: 'Atlanta, GA',
    period: '2019 - 2021',
    description: 'Led cross-functional technical training initiatives for integrated enterprise systems, transforming complex architectural requirements into high-impact learning solutions for statewide product go-lives.',
    achievements: [
      'Orchestrated cross-functional collaboration with system architects, database engineers, and network teams to translate complex enterprise data architectures (Oracle, Microsoft, Esri) into scalable learning frameworks',
      'Engineered high-fidelity training for mission-critical systems, including Oracle Golden Gate, SQL Server, and ArcGIS, ensuring seamless integration with statewide data infrastructure and systems architecture',
      'Applied rigorous instructional design theories to develop multi-modal learning assets—including interactive video and hands-on practical scenarios—optimized for real-world technical application',
      'Led statewide product go-lives and technical workshops, driving adoption for large-scale IT infrastructure launches through targeted webinars and on-site stakeholder engagement',
    ],
    technologies: ['Oracle OBIEE', 'ArcGIS Data Visualization', 'Oracle Databases / SQL'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal-section">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-rose" />
            <span className="font-mono text-xs text-rose tracking-wider">EXPERIENCE</span>
            <div className="w-8 h-px bg-rose" />
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Career <span className="text-rose">Timeline</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Engineering the systems. Teaching the people. Scaling both.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`exp-card relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? '' : 'md:text-right'}`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 bg-rose rounded-full border-4 border-white md:-translate-x-1/2 node-pulse shadow-sm" />

                {/* Card */}
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  <div className="p-6 border border-slate-200 hover:border-rose/40 transition-all duration-300 bg-white shadow-sm group rounded-lg">
                    {/* Title row */}
                    <div className={`flex items-start gap-4 mb-4 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-2 bg-slate-100 group-hover:bg-rose/10 transition-colors rounded">
                        <BookOpen className="w-5 h-5 text-rose" />
                      </div>
                      <div className={i % 2 === 1 ? 'md:text-right' : ''}>
                        <h3 className="font-mono text-lg font-semibold text-slate-800 mb-1">{exp.title}</h3>
                        <div className="font-medium text-slate-700 text-sm mb-1">{exp.company}</div>
                        <div className={`flex items-center gap-4 text-xs text-slate-400 ${i % 2 === 1 ? 'md:justify-end' : ''}`}>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />{exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />{exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className={`flex items-start gap-2 text-xs text-slate-600 ${i % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-rose/60 mt-1.5 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 1 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech, j) => (
                        <span key={j} className="px-2 py-1 text-xs font-mono bg-slate-100 text-slate-600 border border-slate-200 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
