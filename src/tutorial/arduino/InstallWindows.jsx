import { Link } from 'react-router-dom'

const steps = [
    {
        step: 1,
        title: 'Download Arduino IDE',
        content: 'Visit the official Arduino website at arduino.cc/en/software and download the latest Windows installer (.exe) or the ZIP version for portable use.',
    },
    {
        step: 2,
        title: 'Run the Installer',
        content: 'Double-click the downloaded .exe file. Accept the license agreement, choose the installation directory, and ensure "Install USB driver" is checked.',
    },
    {
        step: 3,
        title: 'Install USB Drivers',
        content: 'Windows should automatically detect and install the required USB-to-serial drivers. If not, install the CH340 or FTDI driver manually from the manufacturer\'s website.',
    },
    {
        step: 4,
        title: 'Connect Your Board',
        content: 'Plug your Arduino board into a USB port. Open Device Manager and verify the board appears under "Ports (COM & LPT)" — e.g., "Arduino Uno (COM3)".',
    },
    {
        step: 5,
        title: 'Configure the IDE',
        content: 'Open Arduino IDE → Tools → Board → select your board model. Then go to Tools → Port → select the correct COM port.',
    },
    {
        step: 6,
        title: 'Upload Your First Sketch',
        content: 'Open File → Examples → 01.Basics → Blink. Click the Upload button (→). The on-board LED should start blinking!',
    },
]

export default function InstallWindows() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Install — Windows</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">Arduino IDE — Windows Installation</h1>
            <p className="text-surface-400 text-lg mb-10 leading-relaxed max-w-2xl">
                Get Arduino IDE up and running on Windows in just a few minutes.
            </p>

            {/* OS tabs */}
            <div className="flex gap-2 mb-8">
                <span className="px-4 py-2 rounded-lg bg-primary-500/10 text-primary-400 text-sm font-medium border border-primary-500/20">Windows</span>
                <Link to="/tutorial/arduino/install/linux" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">Linux</Link>
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

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between">
                <Link to="/tutorial/arduino/connectivity" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Previous: Connectivity
                </Link>
                <Link to="/tutorial/arduino/projects/beginner" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Next: Projects
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
