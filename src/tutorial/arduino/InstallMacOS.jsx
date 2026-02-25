import { Link } from 'react-router-dom'

const steps = [
    {
        step: 1,
        title: 'Download Arduino IDE',
        content: 'Go to arduino.cc/en/software and download the macOS version (.dmg). Alternatively, install via Homebrew: brew install --cask arduino.',
    },
    {
        step: 2,
        title: 'Install the Application',
        content: 'Open the downloaded .dmg file and drag the Arduino IDE icon to the Applications folder. Launch from Spotlight or Launchpad.',
    },
    {
        step: 3,
        title: 'Install USB Drivers (if needed)',
        content: 'Most modern Arduinos work out of the box on macOS. If you have a CH340-based clone, install the CH340 driver from the manufacturer\'s website.',
    },
    {
        step: 4,
        title: 'Grant Serial Port Permissions',
        content: 'macOS may prompt for permission to access USB devices. Click "Allow" when prompted. The board should appear under Tools → Port.',
    },
    {
        step: 5,
        title: 'Upload Your First Sketch',
        content: 'Select your board and port under Tools. Open File → Examples → 01.Basics → Blink. Click Upload. You should see the onboard LED blinking.',
    },
]

export default function InstallMacOS() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Install — macOS</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">Arduino IDE — macOS Installation</h1>
            <p className="text-surface-400 text-lg mb-10 leading-relaxed max-w-2xl">
                Get started with Arduino on your Mac.
            </p>

            <div className="flex gap-2 mb-8">
                <Link to="/tutorial/arduino/install/windows" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">Windows</Link>
                <Link to="/tutorial/arduino/install/linux" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">Linux</Link>
                <span className="px-4 py-2 rounded-lg bg-primary-500/10 text-primary-400 text-sm font-medium border border-primary-500/20">macOS</span>
            </div>

            <div className="space-y-4">
                {steps.map((s) => (
                    <div key={s.step} className="flex gap-4 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 font-bold text-sm">
                            {s.step}
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-surface-50 mb-1">{s.title}</h3>
                            <p className="text-surface-400 text-sm leading-relaxed">{s.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between">
                <Link to="/tutorial/arduino/install/linux" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Linux
                </Link>
                <Link to="/tutorial/arduino/projects/beginner" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Next: Projects
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
