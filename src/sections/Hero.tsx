import { MapPin, GraduationCap, BookOpen, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center grid-pattern">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100/60 via-transparent to-cream-100/80 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-slate-950 glitch-hover">
          COLEEN STANLEY
        </h1>

        {/* Title */}
        <div className="font-mono text-sm sm:text-base md:text-lg text-rose tracking-widest mb-2">
          STAFF TECHNICAL CONTENT ARCHITECT
        </div>

        {/* Certifications */}
        <div className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mt-4">
          AWS Cloud Certified | Cisco AI Certified | Splunk Observability Certified
          <br />
          Bridging the gap between Engineering and Education
        </div>

        {/* CTA */}
        <button
          onClick={scrollToAbout}
          className="mt-8 px-6 py-3 border border-rose/60 hover:border-rose text-xs font-mono tracking-wider transition-all duration-300 text-slate-800 hover:text-white hover:bg-rose"
        >
          EXPLORE SYSTEM
        </button>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-rose/50 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-rose/40 rounded-full opacity-40 animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-rose/45 rounded-full opacity-50 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-500">
              <MapPin className="w-3 h-3" />
              <span>ATLANTA, GA</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <GraduationCap className="w-3 h-3" />
              <span>B.S. Computer Science</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-3 h-3 text-rose" />
              <span className="text-slate-600">M.Ed. Instructional Design</span>
            </div>
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <span>[SCROLL TO EXPLORE]</span>
              <ChevronDown className="w-3 h-3 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
