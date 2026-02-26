import { Link } from 'react-router-dom'

const sections = [
    {
        title: 'What is Arduino?',
        desc: 'Understand the Arduino ecosystem, its history, and why it\'s the go-to platform for beginners.',
        to: '/tutorial/arduino/what-is-arduino'
    },
    {
        title: 'Arduino Modules',
        desc: 'Explore motors, relays, displays, and other hardware modules compatible with Arduino.',
        to: '/tutorial/arduino/modules'
    },
    {
        title: 'Arduino Sensors',
        desc: 'Learn to interface temperature, humidity, ultrasonic, IR, and many more sensors.',
        to: '/tutorial/arduino/sensors'
    },
    {
        title: 'Connectivity',
        desc: 'Connect your Arduino to WiFi, Bluetooth, LoRa, and the cloud.',
        to: '/tutorial/arduino/connectivity'
    },
    {
        title: 'Installation Guide',
        desc: 'Set up the Arduino IDE on Windows, Linux, or macOS in minutes.',
        to: '/tutorial/arduino/install/windows'
    },
    {
        title: 'Projects',
        desc: 'Build hands-on projects from beginner blinkers to advanced IoT systems.',
        to: '/tutorial/arduino/projects/beginner'
    },
]

export default function ArduinoHome() {
    return (
        <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <span className="text-arduino font-medium">Arduino</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">
                Arduino <span className="text-arduino">Tutorials</span>
            </h1>
            <p className="text-surface-400 text-lg mb-10 max-w-2xl leading-relaxed">
                Master Arduino development with our comprehensive guide. From understanding the basics
                to building advanced IoT projects — everything you need is right here.
            </p>

            {/* Section grid */}
            <div className="grid sm:grid-cols-2 gap-4">
                {sections.map((s) => (
                    <Link
                        key={s.to}
                        to={s.to}
                        className="group p-5 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-arduino/30 hover:bg-surface-800/30 transition-all duration-200"
                    >
                        <div className="text-2xl mb-3"></div>
                        <h3 className="text-base font-semibold text-surface-50 mb-1 group-hover:text-arduino transition-colors">
                            {s.title}
                        </h3>
                        <p className="text-surface-400 text-sm leading-relaxed">{s.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
