import { Link } from 'react-router-dom'

const projects = [
    {
        title: 'LCD Weather Station',
        desc: 'Display real-time temperature and humidity on a 16×2 LCD using DHT22 sensor and I2C adapter.',
        components: ['Arduino Uno', 'DHT22', 'LCD 16×2 (I2C)', 'Breadboard'],
        difficulty: 'Medium',
    },
    {
        title: 'Ultrasonic Range Finder',
        desc: 'Measure distance with HC-SR04 and display results on an OLED screen. Add a buzzer alert for proximity warning.',
        components: ['Arduino Uno', 'HC-SR04', 'OLED SSD1306', 'Passive Buzzer'],
        difficulty: 'Medium',
    },
    {
        title: 'IR Remote-Controlled Car',
        desc: 'Build a small robot car controlled via an IR remote. Uses L298N motor driver and IR receiver.',
        components: ['Arduino Uno', 'L298N Driver', '2× DC Motors', 'IR Receiver', 'IR Remote'],
        difficulty: 'Medium',
    },
    {
        title: 'Bluetooth Serial Chat',
        desc: 'Send and receive text messages between your phone and Arduino via HC-05 Bluetooth module.',
        components: ['Arduino Uno', 'HC-05 Module', 'Jumper Wires'],
        difficulty: 'Medium',
    },
]

export default function ProjectsIntermediate() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Projects — Intermediate</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">Intermediate Projects</h1>
            <p className="text-surface-400 text-lg mb-6 leading-relaxed max-w-2xl">
                Level up your skills with these projects that combine multiple sensors, modules, and communication protocols.
            </p>

            <div className="flex gap-2 mb-8">
                <Link to="/tutorial/arduino/projects/beginner" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">Beginner</Link>
                <span className="px-4 py-2 rounded-lg bg-yellow-500/10 text-yellow-400 text-sm font-medium border border-yellow-500/20">Intermediate</span>
                <Link to="/tutorial/arduino/projects/advanced" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">Advanced</Link>
            </div>

            <div className="space-y-4">
                {projects.map((p) => (
                    <div key={p.title} className="p-5 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-yellow-500/20 transition-colors">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-base font-semibold text-surface-50 mb-1">{p.title}</h3>
                                <p className="text-surface-400 text-sm leading-relaxed mb-3">{p.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {p.components.map((c) => (
                                        <span key={c} className="px-2 py-0.5 rounded bg-surface-800/60 text-surface-400 text-xs font-mono">{c}</span>
                                    ))}
                                </div>
                            </div>
                            <span className="shrink-0 px-2.5 py-1 rounded-md bg-yellow-500/10 text-yellow-400 text-xs font-medium">
                                {p.difficulty}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between">
                <Link to="/tutorial/arduino/projects/beginner" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Beginner Projects
                </Link>
                <Link to="/tutorial/arduino/projects/advanced" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Advanced Projects
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
