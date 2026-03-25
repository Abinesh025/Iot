import { Link } from 'react-router-dom'

function SectionCard({ number, title, children }) {
    return (
        <section className="mb-6 p-5 rounded-xl border border-surface-800/60 bg-surface-900/40">
            <h2 className="text-base font-bold text-surface-100 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-esp32/20 text-esp32 flex items-center justify-center text-xs font-bold shrink-0">{number}</span>
                {title}
            </h2>
            <div className="text-surface-400 text-sm leading-relaxed">{children}</div>
        </section>
    )
}

function PlaceholderImage({ label }) {
    return (
        <div className="my-5 rounded-xl border border-surface-800/60 bg-surface-900/60 flex flex-col items-center justify-center py-12 gap-3">
            <svg className="w-12 h-12 text-esp32/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H3a.75.75 0 00-.75.75v15c0 .414.336.75.75.75z" />
            </svg>
            <span className="text-surface-600 text-xs text-center px-4">{label}</span>
        </div>
    )
}

export default function BuiltInWiFi() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/features" className="hover:text-primary-400 transition-colors">Features</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Built-In Wi-Fi</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">Built-In Wi-Fi</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                The ESP32 integrates a complete IEEE 802.11 b/g/n Wi-Fi radio on-chip — giving it full internet connectivity with no external hardware, enabling cloud data publishing, OTA updates, and web servers.
            </p>

            <PlaceholderImage label="ESP32 Wi-Fi — STA, AP, and AP+STA modes with TCP/IP stack diagram" />

            <SectionCard number="1" title="What is this Feature?">
                The ESP32 includes a <strong className="text-surface-200">2.4 GHz IEEE 802.11 b/g/n Wi-Fi transceiver</strong> built directly into the chip die. It supports data rates up to <strong className="text-surface-200">150 Mbps</strong> and three operating modes:
                <ul className="mt-2 space-y-1">
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Station (STA)</strong> — connects to an existing router</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Access Point (AP)</strong> — creates its own Wi-Fi network (up to 10 clients)</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">AP + STA</strong> — both simultaneously for mesh or repeater setups</li>
                </ul>
                The full TCP/IP stack (LwIP) runs on the chip, providing BSD sockets for HTTP, MQTT, WebSocket, and TLS connections.
            </SectionCard>

            <SectionCard number="2" title="Why it is Important in ESP32">
                Embedding Wi-Fi on-chip eliminates the cost, PCB area, and design complexity of an external radio module. The ESP32 can connect directly to <strong className="text-surface-200">cloud platforms</strong> (AWS IoT, Google Cloud, Azure, Firebase), publish sensor data to REST APIs or MQTT brokers, receive OTA firmware updates, and serve a full web dashboard — all from a chip that costs a few dollars.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The Wi-Fi MAC and PHY layers are handled by a dedicated hardware subsystem running on Core 0. The application calls high-level <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">WiFi.begin()</code> APIs; the SDK handles beacon scanning, 4-way WPA2 handshake, DHCP, and automatic reconnection on link drop. Once connected, the LwIP TCP/IP stack provides standard socket APIs used by HTTP, MQTT, and WebSocket libraries transparently.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Publishing temperature/humidity to ThingSpeak or Grafana Cloud',
                        'Hosting a real-time sensor dashboard web server',
                        'OTA firmware updates via HTTP or HTTPS',
                        'REST API calls to third-party services (weather, IoT platforms)',
                        'Smart home device integration (Google Home, Alexa via cloud)',
                        'ESP32 as a Wi-Fi access point for device setup portals',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/features/bluetooth" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Bluetooth Support                </Link>
                <Link to="/tutorial/esp32/features/dual-core" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    Dual Core Processor
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
