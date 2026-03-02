import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import pi4 from "../../assets/Rasperry Pi/pi 4.webp";

const specs = [
    { label: 'Released', value: 'June 2019 (rev 1.4 → 2020)' },
    { label: 'CPU', value: 'Broadcom BCM2711, Cortex-A72 64-bit @ 1.8 GHz (Quad-core)' },
    { label: 'RAM Options', value: '1 GB / 2 GB / 4 GB / 8 GB LPDDR4-3200 SDRAM' },
    { label: 'GPU', value: 'Broadcom VideoCore VI @ 500 MHz' },
    { label: 'Storage', value: 'MicroSD card slot' },
    { label: 'USB', value: '2 × USB 3.0 + 2 × USB 2.0' },
    { label: 'Ethernet', value: 'Gigabit Ethernet (via PCIe)' },
    { label: 'Wireless', value: 'Wi-Fi 802.11 b/g/n/ac (dual-band) + Bluetooth 5.0 / BLE' },
    { label: 'GPIO', value: '40-pin header' },
    { label: 'Video Output', value: '2 × Micro-HDMI (up to 4K 60fps each)' },
    { label: 'Camera / Display', value: 'CSI camera port (2-lane), DSI display port' },
    { label: 'Power', value: '5V / 3A via USB-C' },
    { label: 'Operating Temp', value: '0°C to 50°C' },
    { label: 'Dimensions', value: '85 × 56 mm' },
]

const features = [
    { title: 'USB 3.0 Support', desc: 'True USB 3.0 ports deliver up to 5 Gbps data transfer — great for external SSDs and high-speed peripherals.' },
    {  title: 'Gigabit Ethernet', desc: 'Full-speed GbE via dedicated PCIe bus — no longer throttled through the USB controller like on Pi 3.' },
    {  title: 'Dual 4K Display', desc: 'Two Micro-HDMI ports can drive two independent 4K displays simultaneously.' },
    {  title: 'Up to 8 GB RAM', desc: 'The 8 GB variant made the Pi a capable desktop machine for light development and multitasking.' },
    {  title: 'Bluetooth 5.0', desc: 'Improved range, speed, and broadcast capacity compared to Bluetooth 4.2 on Pi 3.' },
    {  title: 'USB-C Power', desc: 'Modern USB-C power connector with a dedicated PD chip for stable 3A supply.' },
]

const useCases = [
    'Desktop replacement for web browsing and document editing',
    'Home NAS (Network Attached Storage) with USB 3.0 drives',
    'Kubernetes cluster node',
    'Machine learning and computer vision with TensorFlow Lite',
    'Retro gaming and emulation (up to PlayStation 2 era)',
    'Digital signage and kiosk systems',
    'VPN server, Pi-hole, and home network services',
]

export default function RpiPi4() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/versions" className="hover:text-primary-400 transition-colors">Versions &amp; Models</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Raspberry Pi 4 Model B</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Raspberry Pi 4 Model B</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        The <strong className="text-raspberry">Raspberry Pi 4 Model B</strong> was a landmark release —
                        the biggest generational leap in Raspberry Pi history. With USB 3.0, Gigabit Ethernet, dual 4K
                        display support, and up to 8 GB of RAM, it finally made the Pi a true desktop-class computer while
                        retaining its iconic $35 starting price.
                    </p>
                </div>

                
                                <div className="flex gap-4 overflow-x-auto pb-4 mb-10 scrollbar-thin">
                                    
                                    <img
                                        src={pi4}
                                        alt={"resperry pi 3"}
                                        className="h-56 sm:h-64 w-auto rounded-xl  object-cover "
                                    />
                
                                </div>

                {/* Specs */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    Technical Specifications
                </h2>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold w-40">Specification</th>
                                <th className="text-left py-2 text-surface-300 font-semibold">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {specs.map(({ label, value }) => (
                                <tr key={label}>
                                    <td className="py-2 pr-4 text-raspberry font-medium whitespace-nowrap">{label}</td>
                                    <td className="py-2">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Key Features */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Key Features &amp; Improvements over Pi 3
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {features.map(({title, desc }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            {/* <div className="text-2xl mb-2">{icon}</div> */}
                            <h3 className="text-sm font-semibold text-surface-50 mb-1">{title}</h3>
                            <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* RAM Variants */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    RAM Variants &amp; Recommended Use
                </h2>
                <div className="grid sm:grid-cols-4 gap-3 mb-8">
                    {[
                        { ram: '1 GB', use: 'Lightweight server, Pi-hole, basic IoT' },
                        { ram: '2 GB', use: 'General desktop tasks, media centre' },
                        { ram: '4 GB', use: 'Recommended — smooth multitasking' },
                        { ram: '8 GB', use: 'Development, ML inference, Kubernetes' },
                    ].map(({ ram, use }) => (
                        <div key={ram} className="p-4 rounded-xl bg-surface-900/50 border border-raspberry/10 text-center">
                            <p className="text-xl font-bold text-raspberry">{ram}</p>
                            <p className="text-xs text-surface-500 mt-2 leading-relaxed">{use}</p>
                        </div>
                    ))}
                </div>

                {/* Use Cases */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                    Popular Use Cases
                </h2>
                <ul className="space-y-3 text-surface-400 mb-10">
                    {useCases.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-raspberry shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi/versions/pi3" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Raspberry Pi 3 Model B
                    </Link>
                    <Link to="/tutorial/raspberry-pi/versions/pi5" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        Raspberry Pi 5
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
