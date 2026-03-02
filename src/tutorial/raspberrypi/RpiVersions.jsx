import { Link } from 'react-router-dom'

const models = [
    {
        icon: '🟢',
        name: 'Raspberry Pi 3 Model B',
        tag: 'Legacy / Budget',
        desc: 'The first Pi with built-in Wi-Fi and Bluetooth. Great for classrooms, retro gaming, and basic IoT.',
        to: '/tutorial/raspberry-pi/versions/pi3',
        price: '$35',
    },
    {
        icon: '🔵',
        name: 'Raspberry Pi 4 Model B',
        tag: 'Recommended',
        desc: 'USB 3.0, Gigabit Ethernet, dual 4K HDMI, and up to 8 GB RAM — a true desktop-class computer.',
        to: '/tutorial/raspberry-pi/versions/pi4',
        price: '$35–$75',
    },
    {
        icon: '🔴',
        name: 'Raspberry Pi 5',
        tag: 'Latest & Fastest',
        desc: 'Custom RP1 chip, PCIe for NVMe SSD, Cortex-A76 CPU, and onboard RTC — the most powerful Pi ever.',
        to: '/tutorial/raspberry-pi/versions/pi5',
        price: '$60–$80',
    },
    {
        icon: '⚪',
        name: 'Raspberry Pi Zero',
        tag: 'Ultra-Compact',
        desc: 'Tiny 65×30mm form factor. The Zero 2 W adds quad-core power and wireless at just $15.',
        to: '/tutorial/raspberry-pi/versions/pi-zero',
        price: '$5–$15',
    },
    {
        icon: '📊',
        name: 'Comparison Table',
        tag: 'Side-by-side',
        desc: 'Can\'t decide? Compare all models across CPU, RAM, USB, Ethernet, display output, and more.',
        to: '/tutorial/raspberry-pi/versions/comparison',
        price: null,
    },
]

export default function RpiVersions() {
    return (
        <div>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Versions &amp; Models</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">
                Raspberry Pi <span className="text-raspberry">Versions &amp; Models</span>
            </h1>
            <p className="text-surface-400 text-lg mb-10 max-w-2xl leading-relaxed">
                The Raspberry Pi family spans from the ultra-affordable $5 Zero to the powerful Pi 5.
                Explore each model's specs, key features, and the projects they're best suited for.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
                {models.map((m) => (
                    <Link
                        key={m.to}
                        to={m.to}
                        className="group p-5 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/30 hover:bg-surface-800/30 transition-all duration-200"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <span className="text-2xl">{m.icon}</span>
                            <div className="flex items-center gap-2">
                                {m.price && (
                                    <span className="text-xs font-semibold text-surface-300 bg-surface-800 px-2 py-0.5 rounded-full">{m.price}</span>
                                )}
                                <span className="text-xs font-semibold text-raspberry bg-raspberry/10 px-2 py-0.5 rounded-full">{m.tag}</span>
                            </div>
                        </div>
                        <h3 className="text-base font-semibold text-surface-50 mb-1 group-hover:text-raspberry transition-colors">{m.name}</h3>
                        <p className="text-surface-400 text-sm leading-relaxed">{m.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
