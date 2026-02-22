import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 400)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div className={`fixed inset-0 z-[10000] bg-slate-950 flex items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="font-mono text-rose text-xs tracking-widest mb-6">INITIALIZING SYSTEM</div>
        <div className="w-48 h-px bg-slate-800 mx-auto mb-2">
          <div
            className="h-full bg-rose transition-all duration-100"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="font-mono text-slate-500 text-xs">{Math.min(Math.round(progress), 100)}%</div>
      </div>
    </div>
  )
}
