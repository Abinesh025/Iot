import { Link } from 'react-router-dom'

const projects = [
    {
        title: 'LED Blink',
        desc: 'The classic first project — make an LED blink on and off. Learn about digital output and timing.',
        components: ['Arduino Uno', 'LED', '220Ω Resistor', 'Breadboard'],
        difficulty: 'Easy',
    },
    {
        title: 'Traffic Light Simulator',
        desc: 'Build a miniature traffic light that cycles through red, yellow, and green LEDs with proper timing.',
        components: ['Arduino Uno', '3 LEDs (R/Y/G)', '3× 220Ω Resistor'],
        difficulty: 'Easy',
    },
    {
        title: 'Temperature Monitor',
        desc: 'Read temperature from a DHT11 sensor and display it on the Serial Monitor.',
        components: ['Arduino Uno', 'DHT11 Sensor', '10kΩ Resistor'],
        difficulty: 'Easy',
    },
    {
        title: 'Servo Sweep',
        desc: 'Control a servo motor to sweep back and forth. Introduction to PWM and the Servo library.',
        components: ['Arduino Uno', 'SG90 Servo Motor'],
        difficulty: 'Easy',
    },
]

export default function ProjectsBeginner() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Projects — Beginner</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">Beginner Projects</h1>
            <p className="text-surface-400 text-lg mb-6 leading-relaxed max-w-2xl">
                Start your Arduino journey with these simple, fun projects. No prior experience required!
            </p>

            <div className="flex gap-2 mb-8">
                <span className="px-4 py-2 rounded-lg bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">Beginner</span>
                <Link to="/tutorial/arduino/projects/intermediate" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">Intermediate</Link>
                <Link to="/tutorial/arduino/projects/advanced" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">Advanced</Link>
            </div>

            <div className="space-y-4">
                {projects.map((p) => (
                    <div key={p.title} className="p-5 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-green-500/20 transition-colors">
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
                            <span className="shrink-0 px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-xs font-medium">
                                {p.difficulty}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-end">
                <Link to="/tutorial/arduino/projects/intermediate" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Next: Intermediate Projects
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
