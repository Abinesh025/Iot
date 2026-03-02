import { Link } from 'react-router-dom'

const sections = [
    {
        title: 'Introduction to Raspberry Pi',
        desc: 'Understand what Raspberry Pi is, its history, purpose, and why it\'s the favourite single-board computer for makers and engineers.',
        to: '/tutorial/raspberry-pi/introduction',
    },
    {
 
        title: 'Getting Started',
        desc: 'Flash Raspberry Pi OS, connect peripherals, and boot your Pi for the first time — step by step.',
        to: '/tutorial/raspberry-pi/getting-started',
    },
    {
        title: 'GPIO & Hardware',
        desc: 'Control LEDs, buttons, sensors, and motors through the 40-pin GPIO header using Python.',
        to: '/tutorial/raspberry-pi/gpio',
    },
    {
        title: 'Python Libraries',
        desc: 'Master RPi.GPIO, gpiozero, pigpio and other essential libraries for hardware programming.',
        to: '/tutorial/raspberry-pi/python-libraries',
    },
    {
        title: 'Networking & Linux',
        desc: 'Set up SSH, static IPs, systemd services, and manage your Pi headlessly over the network.',
        to: '/tutorial/raspberry-pi/networking',
    },
    {
        title: 'IoT Projects',
        desc: 'Build real-world IoT projects with MQTT, Node-RED, InfluxDB, and Grafana dashboards.',
        to: '/tutorial/raspberry-pi/iot-projects',
    },
]

export default function RaspberryPiHome() {
    return (
        <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <span className="text-raspberry font-medium">Raspberry Pi</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">
                Raspberry Pi <span className="text-raspberry">Tutorials</span>
            </h1>
            <p className="text-surface-400 text-lg mb-10 max-w-2xl leading-relaxed">
                From your very first boot to building full IoT systems — master Raspberry Pi
                development with our comprehensive, hands-on guide.
            </p>

            {/* Section grid */}
            <div className="grid sm:grid-cols-2 gap-4">
                {sections.map((s) => (
                    <Link
                        key={s.to}
                        to={s.to}
                        className="group p-5 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/30 hover:bg-surface-800/30 transition-all duration-200"
                    >
                        {/* <div className="text-2xl mb-3">{s.icon}</div> */}
                        <h3 className="text-base font-semibold text-surface-50 mb-1 group-hover:text-raspberry transition-colors">
                            {s.title}
                        </h3>
                        <p className="text-surface-400 text-sm leading-relaxed">{s.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
