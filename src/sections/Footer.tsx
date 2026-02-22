export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm font-bold text-slate-900">COLEEN STANLEY</div>
          <div className="font-mono text-xs text-slate-400">
            DESIGNED & BUILT WITH{' '}
            <span className="text-rose">♥</span>
            {' '}& CHAI
          </div>
          <div className="font-mono text-xs text-slate-400">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  )
}
