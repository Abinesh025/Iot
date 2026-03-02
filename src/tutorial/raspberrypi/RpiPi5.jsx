import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import pi5 from "../../assets/Rasperry Pi/pi 5.webp";

const specs = [
    { label: 'Released', value: 'October 2023' },
    { label: 'CPU', value: 'Broadcom BCM2712, Cortex-A76 64-bit @ 2.4 GHz (Quad-core)' },
    { label: 'RAM Options', value: '4 GB / 8 GB LPDDR4X-4267 SDRAM' },
    { label: 'GPU', value: 'VideoCore VII @ 800 MHz (OpenGL ES 3.1, Vulkan 1.2)' },
    { label: 'Storage', value: 'MicroSD card slot + M.2 HAT support (PCIe 2.0)' },
    { label: 'USB', value: '2 × USB 3.0 + 2 × USB 2.0' },
    { label: 'Ethernet', value: 'Gigabit Ethernet' },
    { label: 'Wireless', value: 'Wi-Fi 802.11 b/g/n/ac (dual-band) + Bluetooth 5.0 / BLE' },
    { label: 'GPIO', value: '40-pin header (3.3V logic, fully backward-compatible)' },
    { label: 'Video Output', value: '2 × Micro-HDMI (up to 4K 60fps)' },
    { label: 'Camera / Display', value: '2 × 4-lane MIPI camera / display connectors' },
    { label: 'PCIe', value: 'PCIe 2.0 × 1 via FPC connector (for NVMe SSD HAT)' },
    { label: 'Real-Time Clock', value: 'Yes — onboard RTC with backup battery connector' },
    { label: 'Power Button', value: 'Yes — dedicated power button with soft shutdown' },
    { label: 'Power', value: '5V / 5A via USB-C (PD required for full speed)' },
    { label: 'Dimensions', value: '85 × 56 mm' },
]

const features = [
    { title: 'Cortex-A76 CPU', desc: 'The A76 core is roughly 2.5× faster than the Pi 4\'s A72, bringing near-laptop performance to the Pi form factor.' },
    {  title: 'PCIe for NVMe SSDs', desc: 'The Pi 5 exposes a PCIe 2.0 lane via an FPC connector. Paired with the official M.2 HAT, it supports NVMe SSDs for dramatically faster storage.' },
    {  title: 'Vulkan 1.2 GPU', desc: 'The VideoCore VII supports Vulkan 1.2, enabling hardware-accelerated 3D graphics and modern game engine compatibility.' },
    {  title: 'Onboard RTC', desc: 'A built-in real-time clock with a backup battery header keeps time accurate even when the Pi is powered off — essential for IoT and logging.' },
    {  title: 'RP1 Southbridge', desc: 'A custom-designed RP1 chip (built on a 40 nm process) handles USB, GPIO, camera, and display I/O — reducing bottlenecks from Pi 4.' },
    { title: 'Dual Camera / Display', desc: 'Two 4-lane MIPI connectors allow simultaneous dual cameras or camera + display, with hardware ISP for real-time image processing.' },
]

const useCases = [
    'High-performance desktop computing and software development',
    'NVMe SSD-based network-attached storage',
    'Real-time computer vision with dual cameras',
    'AI/ML workloads with TensorFlow Lite and ONNX runtime',
    'Kubernetes cluster with fast local storage',
    'Emulation up to PS3 / Nintendo Wii era',
    'Industrial edge computing with PCIe expansion',
]

export default function RpiPi5() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/versions" className="hover:text-primary-400 transition-colors">Versions &amp; Models</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Raspberry Pi 5</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Raspberry Pi 5</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        The <strong className="text-raspberry">Raspberry Pi 5</strong>, launched in October 2023, is the
                        most powerful Raspberry Pi ever made. Featuring a custom-designed RP1 southbridge, a blazing
                        Cortex-A76 processor, PCIe support for NVMe SSDs, and a real-time clock — it represents a
                        genuine generational leap over the Pi 4.
                    </p>
                </div>

                {/* Highlight stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                    {[
                        { value: '2.4 GHz', label: 'A76 Quad-core CPU' },
                        { value: '8 GB', label: 'Max LPDDR4X RAM' },
                        { value: 'PCIe', label: 'NVMe SSD support' },
                        { value: '2×', label: 'Camera / Display ports' },
                    ].map(({ value, label }) => (
                        <div key={label} className="p-4 rounded-xl bg-surface-900/50 border border-raspberry/20 text-center">
                            <p className="text-xl font-bold text-raspberry">{value}</p>
                            <p className="text-xs text-surface-500 mt-1">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Pi 5 Video */}
                
                <div className="flex gap-4 overflow-x-auto pb-4 mb-10 scrollbar-thin">
                                    
                <img
                    src={pi5}
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
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold w-44">Specification</th>
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
                    What's New in Raspberry Pi 5
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {features.map(({icon,title, desc }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            <div className="text-2xl mb-2">{icon}</div>
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
                    <Link to="/tutorial/raspberry-pi/versions/pi4" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Raspberry Pi 4 Model B
                    </Link>
                    <Link to="/tutorial/raspberry-pi/versions/pi-zero" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        Raspberry Pi Zero
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
