import { Link } from 'react-router-dom'

const models = [
    {
        name: 'Pi 3 Model B+',
        cpu: 'A53 @ 1.4 GHz',
        cores: 4,
        ram: '1 GB',
        usb: 'USB 2.0 ×4',
        ethernet: '300 Mbps',
        wifi: '2.4 / 5 GHz',
        bt: '4.2',
        display: '1× HDMI (full)',
        power: 'Micro-USB 2.5A',
        price: '$35',
        best: 'Retro gaming, classrooms',
    },
    {
        name: 'Pi 4 Model B (4GB)',
        cpu: 'A72 @ 1.8 GHz',
        cores: 4,
        ram: '1/2/4/8 GB',
        usb: 'USB 3.0 ×2 + USB 2.0 ×2',
        ethernet: '1 Gbps',
        wifi: '2.4 / 5 GHz',
        bt: '5.0',
        display: '2× Micro-HDMI 4K',
        power: 'USB-C 3A',
        price: '$35–$75',
        best: 'Desktop, NAS, dev machine',
    },
    {
        name: 'Pi 5 (8GB)',
        cpu: 'A76 @ 2.4 GHz',
        cores: 4,
        ram: '4/8 GB',
        usb: 'USB 3.0 ×2 + USB 2.0 ×2',
        ethernet: '1 Gbps',
        wifi: '2.4 / 5 GHz',
        bt: '5.0',
        display: '2× Micro-HDMI 4K',
        power: 'USB-C 5A (PD)',
        price: '$60–$80',
        best: 'ML, NVMe SSD, PCIe expansion',
    },
    {
        name: 'Pi Zero 2 W',
        cpu: 'A53 @ 1 GHz',
        cores: 4,
        ram: '512 MB',
        usb: 'Micro-USB OTG ×1',
        ethernet: 'None',
        wifi: '2.4 GHz',
        bt: '4.2',
        display: 'Mini-HDMI ×1',
        power: 'Micro-USB 2.5A',
        price: '$15',
        best: 'Wearables, sensors, embedded',
    },
]

const colHeaders = ['Spec', 'Pi 3 B+', 'Pi 4 B', 'Pi 5', 'Pi Zero 2 W']

const rows = [
    ['CPU', 'A53 @ 1.4 GHz', 'A72 @ 1.8 GHz', 'A76 @ 2.4 GHz', 'A53 @ 1 GHz'],
    ['Cores', '4', '4', '4', '4'],
    ['Max RAM', '1 GB', '8 GB', '8 GB', '512 MB'],
    ['USB', 'USB 2.0 ×4', 'USB 3.0 ×2 + 2.0 ×2', 'USB 3.0 ×2 + 2.0 ×2', 'OTG ×1'],
    ['Ethernet', '300 Mbps', 'Gigabit', 'Gigabit', 'None'],
    ['Wi-Fi', '2.4/5 GHz', '2.4/5 GHz', '2.4/5 GHz', '2.4 GHz'],
    ['Bluetooth', '4.2', '5.0', '5.0', '4.2'],
    ['HDMI', '1× Full', '2× Micro 4K', '2× Micro 4K', '1× Mini'],
    ['PCIe', '—', '—', 'PCIe 2.0 ×1', '—'],
    ['RTC', '—', '—', '✓ Built-in', '—'],
    ['Power', 'Micro-USB', 'USB-C 3A', 'USB-C 5A', 'Micro-USB'],
    ['Price (USD)', '~$35', '$35–$75', '$60–$80', '$15'],
    ['Size (mm)', '85 × 56', '85 × 56', '85 × 56', '65 × 30'],
]

const highlights = [
    { icon: '🏆', title: 'Best Overall Performance', board: 'Raspberry Pi 5', detail: 'Fastest CPU, PCIe SSD support, dual cameras, and onboard RTC.' },
    { icon: '💰', title: 'Best Value / Budget', board: 'Raspberry Pi 4 (2 GB)', detail: 'Ample RAM for most tasks, gigabit ethernet, USB 3.0 — the "sweet spot" board.' },
    { icon: '📦', title: 'Most Compact', board: 'Raspberry Pi Zero 2 W', detail: 'Half the area of a credit card with wireless connectivity and quad-core power.' },
    { icon: '🏫', title: 'Best for Education', board: 'Raspberry Pi 4 (4 GB)', detail: 'Smooth desktop, Scratch & Python pre-installed, and plenty of memory for student projects.' },
    { icon: '🤖', title: 'Best for IoT / Embedded', board: 'Raspberry Pi Zero 2 W', detail: 'Low cost, tiny size, and wireless make it ideal for sensor nodes and wearables.' },
    { icon: '🖥️', title: 'Best Desktop Replacement', board: 'Raspberry Pi 5 (8 GB)', detail: 'NVMe SSD, Vulkan GPU, and max RAM make it genuinely usable as a daily driver.' },
]

export default function RpiComparison() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/versions" className="hover:text-primary-400 transition-colors">Versions &amp; Models</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Comparison Table</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Raspberry Pi Model Comparison</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-10">
                    <p className="text-surface-300 leading-relaxed">
                        Not sure which Raspberry Pi to choose? This page compares the most popular models —
                        <strong className="text-raspberry"> Pi 3 B+</strong>, <strong className="text-raspberry">Pi 4 Model B</strong>,
                        <strong className="text-raspberry"> Pi 5</strong>, and <strong className="text-raspberry">Pi Zero 2 W</strong> —
                        across every important specification so you can pick the right board for your project.
                    </p>
                </div>

                {/* Full comparison table */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    Full Specification Comparison
                </h2>
                <div className="overflow-x-auto mb-10">
                    <table className="w-full text-sm text-surface-400 border-collapse min-w-[640px]">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Spec</th>
                                <th className="text-left py-2 pr-4 text-raspberry font-semibold">Pi 3 B+</th>
                                <th className="text-left py-2 pr-4 text-raspberry font-semibold">Pi 4 Model B</th>
                                <th className="text-left py-2 pr-4 text-raspberry font-semibold">Pi 5</th>
                                <th className="text-left py-2 text-raspberry font-semibold">Pi Zero 2 W</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {rows.map(([spec, ...values]) => (
                                <tr key={spec}>
                                    <td className="py-2 pr-4 text-surface-300 font-medium whitespace-nowrap">{spec}</td>
                                    {values.map((v, i) => (
                                        <td key={i} className="py-2 pr-4 text-xs">{v}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Recommendation cards */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Which Pi Should You Choose?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {highlights.map(({ icon, title, board, detail }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            <div className="text-2xl mb-2">{icon}</div>
                            <p className="text-xs font-bold text-raspberry uppercase tracking-wide mb-0.5">{title}</p>
                            <h3 className="text-sm font-semibold text-surface-50 mb-1">{board}</h3>
                            <p className="text-xs text-surface-400 leading-relaxed">{detail}</p>
                        </div>
                    ))}
                </div>

                {/* Quick-pick guide */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Quick-Pick Guide
                </h2>
                <ul className="space-y-3 text-surface-400 mb-10">
                    {[
                        'I want the fastest Pi available → Raspberry Pi 5',
                        'I want a capable desktop on a budget → Raspberry Pi 4 (4 GB)',
                        'I\'m building a compact IoT sensor node → Raspberry Pi Zero 2 W',
                        'I need NVMe SSD or PCIe expansion → Raspberry Pi 5',
                        'I\'m teaching beginners in a classroom → Raspberry Pi 4 (2 GB)',
                        'I need the smallest possible board → Raspberry Pi Zero 2 W',
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-raspberry shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi/versions/pi-zero" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Raspberry Pi Zero
                    </Link>
                    <Link to="/tutorial/raspberry-pi/getting-started" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        Next: Getting Started
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
