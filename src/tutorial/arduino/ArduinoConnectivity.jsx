import { Link } from 'react-router-dom'

const protocols = [
    {
        name: 'WiFi (ESP8266 Shield)',
        desc: 'Add wireless internet connectivity to any Arduino board using an ESP8266 WiFi module or shield.',
        features: ['HTTP / MQTT support', '2.4 GHz 802.11 b/g/n', 'TCP/UDP sockets'],
    },
    {
        name: 'Bluetooth (HC-05)',
        desc: 'Classic Bluetooth communication for short-range data transfer between Arduino and mobile devices.',
        features: ['Serial data at 9600+ baud', 'Master / Slave modes', '10 m range'],
    },
    {
        name: 'Bluetooth Low Energy (HM-10)',
        desc: 'BLE 4.0 module for low-power, always-on connections ideal for wearable and sensor applications.',
        features: ['Low power consumption', 'BLE 4.0 compatible', 'iOS & Android support'],
    },
    {
        name: 'LoRa (SX1278)',
        desc: 'Long-range, low-power wireless technology for IoT networks spanning several kilometres.',
        features: ['Up to 15 km range', '433 / 868 / 915 MHz', 'Low data rate, long battery life'],
    },
    {
        name: 'Ethernet (W5100 Shield)',
        desc: 'Wired internet access with full TCP/IP stack for reliable, always-connected IoT devices.',
        features: ['10/100 Mbps', 'Built-in MAC & TCP/IP', 'SD card slot on shield'],
    },
]

export default function ArduinoConnectivity() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Connectivity</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">Arduino Connectivity</h1>
            <p className="text-surface-400 text-lg mb-10 leading-relaxed max-w-2xl">
                Connect your Arduino to the world. Learn about wireless and wired communication protocols for IoT.
            </p>

            <div className="space-y-5">
                {protocols.map((p) => (
                    <div key={p.name} className="p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                        <h3 className="text-base font-semibold text-surface-50 mb-2">{p.name}</h3>
                        <p className="text-surface-400 text-sm leading-relaxed mb-3">{p.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {p.features.map((f) => (
                                <span key={f} className="px-2.5 py-1 rounded-md bg-primary-500/10 text-primary-400 text-xs font-medium">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between">
                <Link to="/tutorial/arduino/sensors" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Previous: Sensors
                </Link>
                <Link to="/tutorial/arduino/install/windows" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Next: Installation
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
