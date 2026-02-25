import { Link } from 'react-router-dom'

export default function ESP32Home() {
    return (
        <div>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <span className="text-esp32 font-medium">ESP32</span>
            </nav>

            <div className="text-center py-16">
                <div className="w-20 h-20 rounded-2xl bg-esp32/10 flex items-center justify-center text-esp32 mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.5h.01" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-surface-50 mb-3">ESP32 Tutorials</h1>
                <p className="text-surface-400 text-lg mb-6 max-w-md mx-auto">
                    ESP32 tutorials are coming soon. Topics will include WiFi, BLE, dual-core programming, deep sleep, and cloud integration.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {['WiFi Station/AP', 'BLE Communication', 'MQTT', 'Deep Sleep', 'OTA Updates', 'ESP-NOW'].map((t) => (
                        <span key={t} className="px-3 py-1 rounded-md bg-esp32/10 text-esp32 text-xs font-medium">{t}</span>
                    ))}
                </div>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-esp32 text-surface-50 font-semibold hover:bg-esp32/90 transition-colors"
                >
                    ← Back to All Tutorials
                </Link>
            </div>
        </div>
    )
}
