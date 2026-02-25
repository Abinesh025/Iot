import { Link } from 'react-router-dom'

const steps = [
    {
        step: 1,
        title: 'Install via Package Manager',
        content: 'On Ubuntu/Debian: sudo apt update && sudo apt install arduino. On Fedora: sudo dnf install arduino. Alternatively, download the AppImage from arduino.cc.',
    },
    {
        step: 2,
        title: 'Add User to dialout Group',
        content: 'Run: sudo usermod -aG dialout $USER — then log out and log back in. This grants serial port access without root.',
    },
    {
        step: 3,
        title: 'Connect Your Board',
        content: 'Plug in your Arduino. Run: ls /dev/ttyACM* or ls /dev/ttyUSB* to find the serial port. Note the port name (e.g., /dev/ttyACM0).',
    },
    {
        step: 4,
        title: 'Configure & Upload',
        content: 'Open Arduino IDE → Tools → Board → select your board. Set the Port to the one you found. Open File → Examples → Blink → Upload.',
    },
]

export default function InstallLinux() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Install — Linux</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">Arduino IDE — Linux Installation</h1>
            <p className="text-surface-400 text-lg mb-10 leading-relaxed max-w-2xl">
                Set up the Arduino development environment on your Linux distribution.
            </p>

            <div className="flex gap-2 mb-8">
                <Link to="/tutorial/arduino/install/windows" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">Windows</Link>
                <span className="px-4 py-2 rounded-lg bg-primary-500/10 text-primary-400 text-sm font-medium border border-primary-500/20">Linux</span>
                <Link to="/tutorial/arduino/install/macos" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">macOS</Link>
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

            <div className="mt-10 p-4 rounded-xl bg-surface-900/60 border border-surface-800/50">
                <h4 className="text-sm font-semibold text-surface-50 mb-2">💡 Tip: Using Arduino CLI</h4>
                <p className="text-surface-400 text-sm">
                    For headless / CI environments, the <code className="text-primary-400 bg-primary-500/10 px-1.5 py-0.5 rounded text-xs font-mono">arduino-cli</code> tool is an excellent alternative. Install it via: <code className="text-primary-400 bg-primary-500/10 px-1.5 py-0.5 rounded text-xs font-mono">curl -fsSL https://raw.githubusercontent.com/arduino/arduino-cli/master/install.sh | sh</code>
                </p>
            </div>

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between">
                <Link to="/tutorial/arduino/install/windows" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Windows
                </Link>
                <Link to="/tutorial/arduino/install/macos" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    macOS
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
