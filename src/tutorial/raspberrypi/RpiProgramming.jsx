import { Link } from 'react-router-dom'

const sections = [
    {
        icon: '🐍',
        name: 'Python Basics',
        tag: 'Start Here',
        desc: 'Variables, loops, functions, classes, and file I/O — the essential Python skills needed for Raspberry Pi programming.',
        to: '/tutorial/raspberry-pi/programming/python',
        color: 'border-raspberry/30',
    },
    {
        icon: '⚡',
        name: 'GPIO Programming',
        tag: 'Hardware Control',
        desc: 'Control LEDs, read buttons, drive motors, and interface sensors using the 40-pin GPIO header with Python.',
        to: '/tutorial/raspberry-pi/programming/gpio',
        color: 'border-raspberry/30',
    },
    {
        icon: '⚙️',
        name: 'C Programming',
        tag: 'Low-Level',
        desc: 'Write fast, low-latency C programs for GPIO control using WiringPi and the bcm2835 library.',
        to: '/tutorial/raspberry-pi/programming/c',
        color: 'border-raspberry/30',
    },
    {
        icon: '📋',
        name: 'Sample Codes',
        tag: 'Ready to Use',
        desc: 'Copy-paste ready code snippets covering blinking LEDs, reading sensors, UART, I2C, SPI, PWM, and more.',
        to: '/tutorial/raspberry-pi/programming/samples',
        color: 'border-raspberry/30',
    },
]

export default function RpiProgramming() {
    return (
        <div>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Programming</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">
                Raspberry Pi <span className="text-raspberry">Programming</span>
            </h1>
            <p className="text-surface-400 text-lg mb-10 max-w-2xl leading-relaxed">
                From Python fundamentals to hardware-level C programming — everything you need to write
                real code for your Raspberry Pi projects.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
                {sections.map((s) => (
                    <Link
                        key={s.to}
                        to={s.to}
                        className="group p-5 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/30 hover:bg-surface-800/30 transition-all duration-200"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <span className="text-2xl">{s.icon}</span>
                            <span className="text-xs font-semibold text-raspberry bg-raspberry/10 px-2 py-0.5 rounded-full">{s.tag}</span>
                        </div>
                        <h3 className="text-base font-semibold text-surface-50 mb-1 group-hover:text-raspberry transition-colors">{s.name}</h3>
                        <p className="text-surface-400 text-sm leading-relaxed">{s.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
