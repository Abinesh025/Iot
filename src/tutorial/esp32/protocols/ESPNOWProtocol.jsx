function InfoRow({ label, children }) {
    return (
        <div className="mb-4">
            <span className="text-xs font-semibold text-esp32 uppercase tracking-wider">{label}</span>
            <div className="mt-1 text-surface-400 text-sm leading-relaxed">{children}</div>
        </div>
    )
}

function PlaceholderImage({ label }) {
    return (
        <div className="my-4 rounded-lg border border-surface-800/60 bg-surface-900/60 flex flex-col items-center justify-center py-8 gap-2">
            <svg className="w-10 h-10 text-esp32/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H3a.75.75 0 00-.75.75v15c0 .414.336.75.75.75z" />
            </svg>
            <span className="text-surface-600 text-xs">{label}</span>
        </div>
    )
}

export default function ESPNOWProtocol() {
    return (
        <div className="text-surface-400 text-sm leading-relaxed">
            <InfoRow label="What is it?">
                <strong className="text-surface-200">ESP-NOW</strong> is Espressif's proprietary connectionless wireless communication protocol. Unlike Wi-Fi or Bluetooth, it does not require a router or pairing handshake — ESP32 and ESP8266 devices communicate <strong className="text-surface-200">directly</strong> using MAC addresses, with payloads up to 250 bytes and latency as low as 1 ms. It can operate alongside Wi-Fi at the same time.
            </InfoRow>

            <InfoRow label="Use Case in IoT">
                Wireless sensor mesh networks, remote control of robotic systems, low-latency data collection from multiple field sensors to a central gateway, and multi-room smart-home devices that need to communicate without internet access.
            </InfoRow>

            <PlaceholderImage label="ESP32 ESP-NOW — peer-to-peer mesh topology" />

            <InfoRow label="Example">
                On the sender, register the receiver's MAC address with <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">esp_now_add_peer()</code> and transmit a struct of sensor readings using <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">esp_now_send()</code>. On the receiver, register a callback with <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">esp_now_register_recv_cb()</code> to process incoming packets instantly — no router or cloud required.
            </InfoRow>
        </div>
    )
}
