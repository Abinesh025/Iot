import { Link } from 'react-router-dom'

const modules = [
    {
        slug: 'wroom32',
        name: 'ESP32-WROOM-32',
        tagline: 'The standard — dual-core LX6, 4 MB flash, PCB antenna',
        category: 'General Purpose',
        badge: 'bg-blue-500/20 text-blue-400',
        color: 'from-blue-500/10 to-esp32/10',
        core: 'Xtensa LX6 Dual @ 240 MHz',
        memory: '520 KB SRAM | 4 MB Flash',
        radio: 'Wi-Fi + BT 4.2 / BLE',
        desc: 'The most widely used ESP32 module. Integrates the ESP32 chip, 4 MB flash, RF shield can, and PCB antenna in a compact, FCC-certified 18 × 25.5 mm package — found on virtually every ESP32 devboard.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
    },
    {
        slug: 'wrover',
        name: 'ESP32-WROVER',
        tagline: 'WROOM-32 + 8 MB PSRAM for camera and ML workloads',
        category: '+ 8 MB PSRAM',
        badge: 'bg-purple-500/20 text-purple-400',
        color: 'from-purple-500/10 to-esp32/10',
        core: 'Xtensa LX6 Dual @ 240 MHz',
        memory: '520 KB SRAM | 4 MB Flash | 8 MB PSRAM',
        radio: 'Wi-Fi + BT 4.2 / BLE',
        desc: 'Extends the WROOM-32 with 8 MB of external SPI PSRAM — enabling large frame buffers, ML model weights, and complex data structures far beyond the 520 KB internal SRAM limit.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.854c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.854V12.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-2.587" />
            </svg>
        ),
    },
    {
        slug: 's2',
        name: 'ESP32-S2',
        tagline: 'Single-core LX7 with native USB OTG and 43 GPIOs',
        category: 'USB OTG',
        badge: 'bg-indigo-500/20 text-indigo-400',
        color: 'from-indigo-500/10 to-esp32/10',
        core: 'Xtensa LX7 Single @ 240 MHz',
        memory: '320 KB SRAM | 4 MB Flash',
        radio: 'Wi-Fi only | NO Bluetooth',
        desc: 'Security-focused with native USB full-speed OTG — no USB bridge chip needed. Highest GPIO count (43 pins) and hardware crypto (AES, RSA-3072). Ideal for USB HID devices and secure IoT nodes.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
            </svg>
        ),
    },
    {
        slug: 's3',
        name: 'ESP32-S3',
        tagline: 'Dual LX7 + AI vector extensions + Bluetooth 5.0',
        category: 'AI + BT5',
        badge: 'bg-orange-500/20 text-orange-400',
        color: 'from-orange-500/10 to-esp32/10',
        core: 'Xtensa LX7 Dual @ 240 MHz',
        memory: '512 KB SRAM | 8 MB Flash',
        radio: 'Wi-Fi + Bluetooth 5.0 / BLE Mesh',
        desc: 'Flagship module with dedicated AI/ML vector instructions for neural network acceleration, Bluetooth 5.0, native USB OTG, and a parallel camera / LCD interface for edge-AI video applications.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        slug: 'c3',
        name: 'ESP32-C3',
        tagline: 'First RISC-V ESP32 — tiny 5×5 mm, Wi-Fi + BLE 5.0',
        category: 'RISC-V',
        badge: 'bg-green-500/20 text-green-400',
        color: 'from-green-500/10 to-esp32/10',
        core: 'RISC-V RV32IMC @ 160 MHz',
        memory: '400 KB SRAM | 4 MB Flash',
        radio: 'Wi-Fi + Bluetooth 5.0 / BLE',
        desc: 'Espressif\'s first RISC-V chip in a tiny 5 × 5 mm package. Lowest BOM cost in the family, hardware security engine, USB Serial/JTAG, and BLE 5.0 with long-range coded PHY support.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
    },
    {
        slug: 'cam',
        name: 'ESP32-CAM',
        tagline: 'All-in-one board: ESP32 + OV2640 camera + MicroSD',
        category: 'Camera',
        badge: 'bg-red-500/20 text-red-400',
        color: 'from-red-500/10 to-esp32/10',
        core: 'Xtensa LX6 Dual @ 240 MHz',
        memory: '520 KB SRAM | 16 MB Flash | 8 MB PSRAM',
        radio: 'Wi-Fi + BT 4.2 / BLE',
        desc: 'Integrates an OV2640 2MP camera, 8 MB PSRAM, 16 MB flash, MicroSD slot, and LED flash on a 40.5 × 27 mm board. Enables MJPEG streaming, face detection, and wildlife camera traps for under $10.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
        ),
    },
]

export default function ESP32Modules() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Modules</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">Modules</span>
            </h1>
            <p className="text-surface-400 text-base mb-10 leading-relaxed">
                The ESP32 family spans multiple chip variants and ready-to-use modules — from the ubiquitous WROOM-32 to the AI-capable S3 and the camera-integrated CAM board. Select a module to explore its specifications, use cases, and code examples.
            </p>

            <h2 className="text-lg font-bold text-surface-100 mb-5">ESP32 Module Variants</h2>
            <div className="space-y-4">
                {modules.map(m => (
                    <Link
                        key={m.slug}
                        to={`/tutorial/esp32/modules/${m.slug}`}
                        className={`group flex items-start gap-5 p-5 rounded-xl border border-surface-800/60 bg-gradient-to-br ${m.color} hover:border-esp32/40 transition-all duration-200`}
                    >
                        {/* Icon */}
                        <div className="shrink-0 w-14 h-14 rounded-xl bg-surface-900/70 border border-surface-800/50 flex items-center justify-center text-esp32/70 group-hover:text-esp32 transition-colors">
                            {m.icon}
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="text-surface-100 font-bold text-base group-hover:text-esp32 transition-colors">{m.name}</span>
                                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${m.badge}`}>{m.category}</span>
                            </div>
                            <p className="text-surface-300 text-xs font-medium mb-1.5">{m.tagline}</p>
                            <p className="text-surface-500 text-xs leading-relaxed">{m.desc}</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-2">
                                <span className="text-surface-600 text-[11px]">{m.core}</span>
                                <span className="text-surface-600 text-[11px]">{m.memory}</span>
                                <span className="text-surface-600 text-[11px]">{m.radio}</span>
                            </div>
                        </div>

                        {/* Arrow */}
                        <svg className="w-5 h-5 text-surface-600 group-hover:text-esp32 shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                ))}
            </div>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/introduction" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    What is ESP32?
                </Link>
                <Link to="/tutorial/esp32/protocols" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    ESP32 Protocols
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
