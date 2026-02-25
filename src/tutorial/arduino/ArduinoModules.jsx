import { Link } from 'react-router-dom'

const modules = [
    { name: 'Relay Module', desc: 'Control high-voltage devices like lights, fans, and motors.', pins: 'VCC, GND, IN' },
    { name: 'Motor Driver (L298N)', desc: 'Drive DC motors and stepper motors in both directions.', pins: 'ENA, IN1, IN2, IN3, IN4, ENB' },
    { name: 'LCD 16×2 (I2C)', desc: 'Display text and data with a compact 2-line liquid crystal display.', pins: 'SDA, SCL, VCC, GND' },
    { name: 'Servo Motor (SG90)', desc: 'Precision angular positioning for robotics and automation.', pins: 'Signal, VCC, GND' },
    { name: 'Buzzer Module', desc: 'Generate tones and alerts for user feedback.', pins: '+, -, Signal' },
    { name: 'OLED Display (SSD1306)', desc: '128×64 pixel display for rich graphics and text.', pins: 'SDA, SCL, VCC, GND' },
]

export default function ArduinoModules() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Modules</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">Arduino Modules</h1>
            <p className="text-surface-400 text-lg mb-10 leading-relaxed max-w-2xl">
                Modules extend Arduino's capabilities. Below are popular modules used in IoT projects.
            </p>

            <div className="space-y-4">
                {modules.map((mod) => (
                    <div
                        key={mod.name}
                        className="p-5 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-arduino/20 transition-colors"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                            <div>
                                <h3 className="text-base font-semibold text-surface-50">{mod.name}</h3>
                                <p className="text-surface-400 text-sm mt-1">{mod.desc}</p>
                            </div>
                            <span className="shrink-0 px-3 py-1 rounded-md bg-surface-800/60 text-xs text-surface-400 font-mono">
                                {mod.pins}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between">
                <Link to="/tutorial/arduino/what-is-arduino" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Previous: What is Arduino?
                </Link>
                <Link to="/tutorial/arduino/sensors" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Next: Sensors
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
