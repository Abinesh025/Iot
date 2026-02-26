import { Link } from 'react-router-dom'

const projects = [
    {
        title: 'IoT Smart Home Dashboard',
        desc: 'Build a web-controlled smart home system. Arduino reads sensors, ESP8266 WiFi module sends data to a cloud dashboard with real-time monitoring.',
        components: ['Arduino Mega', 'ESP8266 WiFi', 'Relay Module', 'DHT22', 'PIR Sensor', 'OLED Display'],
        difficulty: 'Hard',
        slug: 'smart-home',
    },
    {
        title: 'GPS Tracker with LoRa',
        desc: 'Create a long-range GPS tracking device that transmits location data via LoRa to a base station with live map display.',
        components: ['Arduino Nano', 'NEO-6M GPS', 'SX1278 LoRa', 'Li-Po Battery', 'Antenna'],
        difficulty: 'Hard',
        slug: 'gps-tracker',
    },
    {
        title: 'Plant Monitoring System',
        desc: 'Automated plant care with soil moisture, light, and temperature sensors. Triggers water pump and sends alerts via MQTT.',
        components: ['Arduino Uno', 'Soil Moisture Sensor', 'LDR', 'DHT11', 'Water Pump', 'Relay', 'ESP8266'],
        difficulty: 'Hard',
        slug: 'plant-monitor',
    },
    {
        title: 'Security System with Face Detection',
        desc: 'Combine Arduino with a camera module and OpenCV (via serial to PC) for a DIY facial recognition door lock.',
        components: ['Arduino Mega', 'Servo Lock', 'PIR Sensor', 'Buzzer', 'USB Camera', 'Python/OpenCV'],
        difficulty: 'Expert',
        slug: 'security-system',
    },
]

export default function ProjectsAdvanced() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Projects — Advanced</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">Advanced Projects</h1>
            <p className="text-surface-400 text-lg mb-6 leading-relaxed max-w-2xl">
                Push your limits with complex, real-world IoT projects that combine hardware, networking, and cloud services.
            </p>

            <div className="flex gap-2 mb-8">
                <Link to="/tutorial/arduino/projects/beginner" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">Beginner</Link>
                <Link to="/tutorial/arduino/projects/intermediate" className="px-4 py-2 rounded-lg text-surface-400 text-sm font-medium hover:bg-surface-800/40 transition-colors">Intermediate</Link>
                <span className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 text-sm font-medium border border-red-500/20">Advanced</span>
            </div>

            <div className="space-y-4">
                {projects.map((p) => (
                    <Link
                        key={p.title}
                        to={`/tutorial/arduino/projects/advanced/${p.slug}`}
                        className="block p-5 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-red-500/30 hover:bg-surface-900/60 transition-all group"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-base font-semibold text-surface-50 mb-1 group-hover:text-red-300 transition-colors">{p.title}</h3>
                                <p className="text-surface-400 text-sm leading-relaxed mb-3">{p.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {p.components.map((c) => (
                                        <span key={c} className="px-2 py-0.5 rounded bg-surface-800/60 text-surface-400 text-xs font-mono">{c}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${p.difficulty === 'Expert'
                                    ? 'bg-purple-500/10 text-purple-400'
                                    : 'bg-red-500/10 text-red-400'
                                    }`}>
                                    {p.difficulty}
                                </span>
                                <svg className="w-4 h-4 text-surface-600 group-hover:text-red-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between">
                <Link to="/tutorial/arduino/projects/intermediate" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Intermediate Projects
                </Link>
                <Link to="/tutorial/arduino" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Back to Arduino Overview
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
