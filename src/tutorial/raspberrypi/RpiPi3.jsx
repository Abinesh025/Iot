import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import pi3 from "../../assets/Rasperry Pi/pi 3.webp";

const specs = [
    { label: 'Released', value: 'March 2018' },
    { label: 'CPU', value: 'Broadcom BCM2837B0, Cortex-A53 64-bit @ 1.4 GHz (Quad-core)' },
    { label: 'RAM', value: '1 GB LPDDR2 SDRAM' },
    { label: 'GPU', value: 'Broadcom VideoCore IV @ 400 MHz' },
    { label: 'Storage', value: 'MicroSD card slot' },
    { label: 'USB', value: '4 × USB 2.0' },
    { label: 'Ethernet', value: '10/100 Mbps' },
    { label: 'Wireless', value: 'Wi-Fi 802.11 b/g/n/ac + Bluetooth 4.2 / BLE' },
    { label: 'GPIO', value: '40-pin header' },
    { label: 'Video Output', value: 'Full-size HDMI' },
    { label: 'Camera / Display', value: 'CSI camera port, DSI display port' },
    { label: 'Power', value: '5V / 2.5A via Micro-USB' },
    { label: 'Operating Temp', value: '0°C to 50°C' },
    { label: 'Dimensions', value: '85 × 56 mm' },
]

const features = [
    {  title: 'Dual-Band Wi-Fi', desc: 'First Pi with 2.4 GHz and 5 GHz Wi-Fi support, great for faster wireless streaming.' },
    {  title: 'Bluetooth 4.2 / BLE', desc: 'Onboard Bluetooth for wireless peripherals, IoT sensors, and BLE beacons.' },
    {  title: '10× Faster than Pi 1', desc: 'The A53 CPU delivers roughly 10× the performance of the original Raspberry Pi Model B.' },
    {  title: 'Full HD Video', desc: 'Capable of decoding H.264 and H.265 video up to 1080p60 for media centre builds.' },
    {  title: 'Camera Support', desc: 'CSI interface supports the Official Raspberry Pi Camera Module v2 (8 MP Sony IMX219).' },
    {  title: 'PoE Header', desc: 'Optional Power over Ethernet HAT support lets you power the Pi via a PoE-enabled network switch.' },
]

const useCases = [
    'Retro gaming console (RetroPie)',
    'Home media centre (Kodi / LibreELEC)',
    'School classroom computer',
    'Pi-hole network-level ad blocker',
    'Wireless IoT gateway',
    'Desktop web browsing and coding',
]

export default function RpiPi3() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/versions" className="hover:text-primary-400 transition-colors">Versions &amp; Models</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Raspberry Pi 3 Model B</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Raspberry Pi 3 Model B</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        The <strong className="text-raspberry">Raspberry Pi 3 Model B</strong> (released 2016) and its
                        upgraded sibling the <strong className="text-raspberry">Pi 3 Model B+</strong> (2018) were groundbreaking
                        releases — they were the first Pi boards to include onboard Wi-Fi and Bluetooth, making them the
                        go-to choice for wireless IoT and network-connected projects without extra hardware.
                    </p>
                </div>

          
                {/* Section 4 -Image of RasperryPi */}

                <div className="flex gap-4 overflow-x-auto pb-4 mb-10 scrollbar-thin">
                    
                    <img
                        src={pi3}
                        alt={"resperry pi 3"}
                        className="h-56 sm:h-64 w-auto rounded-xl  object-cover "
                    />

                </div>

                {/* Specs */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    Technical Specifications (Model B+)
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
                    Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {features.map(({ title, desc }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            {/* <div className="text-2xl mb-2">{icon}</div> */}
                            <h3 className="text-sm font-semibold text-surface-50 mb-1">{title}</h3>
                            <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Use Cases */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
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
                    <Link to="/tutorial/raspberry-pi/versions" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Versions &amp; Models
                    </Link>
                    <Link to="/tutorial/raspberry-pi/versions/pi4" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        Raspberry Pi 4 Model B
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
