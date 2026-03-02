import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import pi from "../../assets/Rasperry Pi/pi 0.webp";

const models = [
    {
        name: 'Pi Zero (2015)',
        cpu: 'BCM2835 Single-core 1 GHz',
        ram: '512 MB',
        wireless: 'None',
        price: '$5',
        key: 'Ultra-minimal, lowest cost Pi ever',
    },
    {
        name: 'Pi Zero W (2017)',
        cpu: 'BCM2835 Single-core 1 GHz',
        ram: '512 MB',
        wireless: 'Wi-Fi + BT 4.1',
        price: '$10',
        key: 'Wireless-capable tiny Pi',
    },
    {
        name: 'Pi Zero 2 W (2021)',
        cpu: 'RP3A0 Quad-core Cortex-A53 @ 1 GHz',
        ram: '512 MB',
        wireless: 'Wi-Fi + BT 4.2',
        price: '$15',
        key: '5× faster than Zero W, same tiny size',
    },
]

const zeroSpecs = [
    { label: 'Released', value: 'October 2021 (Zero 2 W)' },
    { label: 'CPU', value: 'RP3A0 SiP — Quad-core Cortex-A53 @ 1 GHz' },
    { label: 'RAM', value: '512 MB LPDDR2 SDRAM' },
    { label: 'Storage', value: 'MicroSD card slot' },
    { label: 'USB', value: '1 × Micro-USB OTG + 1 × Micro-USB power' },
    { label: 'Wireless', value: 'Wi-Fi 802.11 b/g/n 2.4 GHz + Bluetooth 4.2 / BLE' },
    { label: 'GPIO', value: '40-pin unpopulated header (solderable)' },
    { label: 'Video Output', value: 'Mini-HDMI' },
    { label: 'Camera', value: 'CSI camera connector (Zero 2 W)' },
    { label: 'Power', value: '5V / 2.5A via Micro-USB' },
    { label: 'Dimensions', value: '65 × 30 mm' },
]

const features = [
    {  title: 'Ultra-Low Cost', desc: 'Starting at $5, the Pi Zero is the most affordable Linux computer ever sold, perfect for tight-budget embedded projects.' },
    {  title: 'Tiny Form Factor', desc: 'At just 65 × 30 mm, the Zero fits inside enclosures, props, toys, and wearable devices that a full Pi cannot.' },
    {  title: 'Wireless (Zero W / 2W)', desc: 'The W variants add Wi-Fi and Bluetooth without sacrificing the compact size, enabling headless IoT deployments.' },
    {  title: 'Low Power Draw', desc: 'The Zero consumes as little as 0.4W idle — ideal for battery-powered projects and solar-powered remote sensors.' },
    {  title: 'USB OTG', desc: 'The single Micro-USB port supports USB On-The-Go. Connect a USB hub, keyboard, or even emulate USB devices.' },
    {  title: 'Camera Support', desc: 'The Zero 2 W has a CSI camera port compatible with the Official Pi Camera — great for timelapse and security cameras.' },
]

const useCases = [
    'Wearable computing (badge, smart watch display)',
    'Miniature retro gaming handheld (Pi Zero 2 W + screen)',
    'Headless Wi-Fi sensor node (temperature, humidity logging)',
    'USB gadget mode — emulate keyboard, mouse, or USB drive',
    'Camera trap / timelapse photography in remote locations',
    'Drone flight controller companion computer',
    'Network badge / conference name tag',
]

export default function RpiPiZero() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/versions" className="hover:text-primary-400 transition-colors">Versions &amp; Models</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Raspberry Pi Zero</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Raspberry Pi Zero</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        The <strong className="text-raspberry">Raspberry Pi Zero</strong> family are the smallest and most
                        affordable members of the Raspberry Pi line-up. Designed for ultra-compact embedded projects, wearables,
                        and budget-constrained applications, the Zero packs a full Linux environment into a tiny 65 × 30 mm board.
                    </p>
                </div>

                {/* Pi Zero Video */}
                
                    <div className="flex gap-4 overflow-x-auto pb-4 mb-10 scrollbar-thin">
                                    
                        <img
                            src={pi}
                            alt={"resperry pi 3"}
                            className="h-56 sm:h-64 w-auto rounded-xl  object-cover "
                        />
                
                    </div>

                {/* Zero Models Comparison */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    Pi Zero Model Comparison
                </h2>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-3 text-surface-300 font-semibold">Model</th>
                                <th className="text-left py-2 pr-3 text-surface-300 font-semibold">CPU</th>
                                <th className="text-left py-2 pr-3 text-surface-300 font-semibold">RAM</th>
                                <th className="text-left py-2 pr-3 text-surface-300 font-semibold">Wireless</th>
                                <th className="text-left py-2 text-surface-300 font-semibold">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {models.map((m) => (
                                <tr key={m.name}>
                                    <td className="py-2 pr-3 text-raspberry font-medium">{m.name}</td>
                                    <td className="py-2 pr-3 text-xs">{m.cpu}</td>
                                    <td className="py-2 pr-3">{m.ram}</td>
                                    <td className="py-2 pr-3">{m.wireless}</td>
                                    <td className="py-2 font-semibold text-surface-300">{m.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Specs — Zero 2 W */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Technical Specifications (Zero 2 W)
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
                            {zeroSpecs.map(({ label, value }) => (
                                <tr key={label}>
                                    <td className="py-2 pr-4 text-raspberry font-medium whitespace-nowrap">{label}</td>
                                    <td className="py-2">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Features */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Key Features
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
                    <Link to="/tutorial/raspberry-pi/versions/pi5" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Raspberry Pi 5
                    </Link>
                    <Link to="/tutorial/raspberry-pi/versions/comparison" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        Comparison Table
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
