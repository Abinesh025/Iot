import { Link } from 'react-router-dom'

/* ── Protocol card data ── */
const protocols = [
    {
        slug: 'wifi',
        name: 'Wi-Fi',
        full: 'IEEE 802.11 b/g/n',
        category: 'Network',
        range: '2.4 GHz | Up to 150 Mbps',
        color: 'from-blue-500/10 to-esp32/10',
        badge: 'bg-blue-500/20 text-blue-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
        ),
        desc: 'Built-in IEEE 802.11 b/g/n radio connecting the ESP32 to local networks and the internet. Enables cloud APIs, OTA updates, and web-based dashboards.',
    },
    {
        slug: 'mqtt',
        name: 'MQTT',
        full: 'Message Queuing Telemetry Transport',
        category: 'Messaging',
        range: 'Over TCP/IP | 2-byte header',
        color: 'from-purple-500/10 to-esp32/10',
        badge: 'bg-purple-500/20 text-purple-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
        ),
        desc: 'Lightweight publish/subscribe protocol for IoT messaging. The ESP32 publishes sensor data to topics and subscribes to control topics through a central broker.',
    },
    {
        slug: 'bluetooth',
        name: 'Bluetooth',
        full: 'Classic Bluetooth BR/EDR',
        category: 'Wireless',
        range: '~10 m | SPP Serial Link',
        color: 'from-indigo-500/10 to-esp32/10',
        badge: 'bg-indigo-500/20 text-indigo-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a3 3 0 00-3-3h-1.5a3 3 0 00-3 3v.75M9 12.75a3 3 0 100-6 3 3 0 000 6zM15 7.5l3 3-3 3m0-6V3" />
            </svg>
        ),
        desc: 'Classic Bluetooth (SPP) creates a wireless serial link between the ESP32 and phones or computers — ideal for robot control, wireless data logging, and device configuration.',
    },
    {
        slug: 'ble',
        name: 'BLE',
        full: 'Bluetooth Low Energy 4.x',
        category: 'Low Power',
        range: '~30 m | GATT / Advertising',
        color: 'from-cyan-500/10 to-esp32/10',
        badge: 'bg-cyan-500/20 text-cyan-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        desc: 'Ultra-low-power Bluetooth for wearables and beacons. The ESP32 exposes GATT characteristics that a phone app can read, write, or subscribe to for live notifications.',
    },
    {
        slug: 'espnow',
        name: 'ESP-NOW',
        full: 'Espressif Peer-to-Peer Protocol',
        category: 'Direct Link',
        range: '~200 m | <1 ms latency | 250 B',
        color: 'from-orange-500/10 to-esp32/10',
        badge: 'bg-orange-500/20 text-orange-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
        ),
        desc: 'Espressif\'s router-free peer-to-peer protocol using MAC addresses. Sub-millisecond latency, no TCP/IP overhead — perfect for multi-node sensor meshes and RC control.',
    },
    {
        slug: 'websocket',
        name: 'WebSocket',
        full: 'RFC 6455 Full-Duplex Protocol',
        category: 'Real-Time',
        range: 'Over TCP | Full-Duplex',
        color: 'from-green-500/10 to-esp32/10',
        badge: 'bg-green-500/20 text-green-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        desc: 'Persistent full-duplex TCP channel between the ESP32 and a browser. Both sides push data instantly — no polling needed. Ideal for live sensor dashboards and device control UIs.',
    },
]

/* ═══════════════════════════════════════════════
   ESP32 Protocols — Index / Listing Page
═══════════════════════════════════════════════ */
export default function ESP32Protocols() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Protocols</span>
            </nav>

            {/* Page heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">Communication Protocols</span>
            </h1>
            <p className="text-surface-400 text-base mb-10 leading-relaxed">
                The ESP32 supports a rich set of wireless and messaging protocols — from full internet connectivity to ultra-low-power peer-to-peer links. Select a protocol to explore how it works, its IoT applications, and a ready-to-run code example.
            </p>

            {/* ── Intro sections ── */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <section className="p-5 rounded-xl border border-surface-800/60 bg-surface-900/40">
                    <h2 className="text-sm font-bold text-surface-100 mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-esp32/20 text-esp32 flex items-center justify-center text-[10px] font-bold">1</span>
                        What is a Protocol?
                    </h2>
                    <p className="text-surface-400 text-xs leading-relaxed">
                        A communication protocol is a defined set of rules governing how data is transmitted between devices. Both sender and receiver must follow the same rules to correctly interpret exchanged information — format, timing, error-checking, and addressing.
                    </p>
                </section>
                <section className="p-5 rounded-xl border border-surface-800/60 bg-surface-900/40">
                    <h2 className="text-sm font-bold text-surface-100 mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-esp32/20 text-esp32 flex items-center justify-center text-[10px] font-bold">2</span>
                        Why Protocols Matter in IoT
                    </h2>
                    <p className="text-surface-400 text-xs leading-relaxed">
                        Protocols ensure <strong className="text-surface-300">reliable data transfer</strong>, enable <strong className="text-surface-300">device interoperability</strong>, and provide <strong className="text-surface-300">network connectivity</strong>. Choosing the right protocol balances range, latency, power consumption, and bandwidth for each IoT use case.
                    </p>
                </section>
            </div>

            {/* ── Protocol cards ── */}
            <h2 className="text-lg font-bold text-surface-100 mb-5">ESP32 Supported Protocols</h2>
            <div className="space-y-4">
                {protocols.map((p) => (
                    <Link
                        key={p.slug}
                        to={`/tutorial/esp32/protocols/${p.slug}`}
                        className={`group flex items-start gap-5 p-5 rounded-xl border border-surface-800/60 bg-gradient-to-br ${p.color} hover:border-esp32/40 transition-all duration-200`}
                    >
                        {/* Icon */}
                        <div className="shrink-0 w-14 h-14 rounded-xl bg-surface-900/70 border border-surface-800/50 flex items-center justify-center text-esp32/70 group-hover:text-esp32 transition-colors">
                            {p.icon}
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="text-surface-100 font-bold text-base group-hover:text-esp32 transition-colors">{p.name}</span>
                                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${p.badge}`}>{p.category}</span>
                            </div>
                            <p className="text-surface-300 text-xs font-medium mb-1.5">{p.full}</p>
                            <p className="text-surface-500 text-xs leading-relaxed">{p.desc}</p>
                            <p className="text-surface-600 text-[11px] mt-2">{p.range}</p>
                        </div>

                        {/* Arrow */}
                        <svg className="w-5 h-5 text-surface-600 group-hover:text-esp32 shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                ))}
            </div>

            {/* Navigation */}
            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/introduction" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    What is ESP32?
                </Link>
                <Link to="/tutorial/esp32/sensors" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    ESP32 Sensors
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
