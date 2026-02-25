import { Link } from 'react-router-dom'

const sensors = [
    { name: 'DHT11 / DHT22', type: 'Temperature & Humidity', range: '-40°C to 80°C, 0-100% RH', protocol: 'Digital' },
    { name: 'HC-SR04', type: 'Ultrasonic Distance', range: '2 cm – 400 cm', protocol: 'Digital (Trig/Echo)' },
    { name: 'PIR (HC-SR501)', type: 'Motion Detection', range: 'Up to 7 m', protocol: 'Digital' },
    { name: 'LDR', type: 'Light Intensity', range: 'Variable resistance', protocol: 'Analog' },
    { name: 'Soil Moisture', type: 'Soil Humidity', range: '0–1023 (analog)', protocol: 'Analog' },
    { name: 'MQ-2 Gas Sensor', type: 'Gas & Smoke Detection', range: 'LPG, Propane, Methane', protocol: 'Analog / Digital' },
    { name: 'IR Sensor', type: 'Infrared Proximity', range: '2 cm – 30 cm', protocol: 'Digital' },
    { name: 'BMP280', type: 'Barometric Pressure', range: '300 – 1100 hPa', protocol: 'I2C / SPI' },
]

export default function ArduinoSensors() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Sensors</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">Arduino Sensors</h1>
            <p className="text-surface-400 text-lg mb-10 leading-relaxed max-w-2xl">
                Sensors allow Arduino to perceive the physical world. Here are the most popular sensors for IoT projects.
            </p>

            {/* Sensor table */}
            <div className="overflow-x-auto rounded-xl border border-surface-800/50">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-surface-900/60">
                            <th className="text-left px-4 py-3 text-surface-400 font-semibold">Sensor</th>
                            <th className="text-left px-4 py-3 text-surface-400 font-semibold">Type</th>
                            <th className="text-left px-4 py-3 text-surface-400 font-semibold hidden sm:table-cell">Range</th>
                            <th className="text-left px-4 py-3 text-surface-400 font-semibold hidden md:table-cell">Protocol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sensors.map((s, i) => (
                            <tr
                                key={s.name}
                                className={`border-t border-surface-800/30 ${i % 2 === 0 ? 'bg-surface-950/30' : 'bg-surface-900/20'}`}
                            >
                                <td className="px-4 py-3 text-surface-50 font-medium">{s.name}</td>
                                <td className="px-4 py-3 text-surface-400">{s.type}</td>
                                <td className="px-4 py-3 text-surface-500 hidden sm:table-cell font-mono text-xs">{s.range}</td>
                                <td className="px-4 py-3 hidden md:table-cell">
                                    <span className="px-2 py-0.5 rounded bg-surface-800/60 text-surface-400 text-xs font-mono">
                                        {s.protocol}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between">
                <Link to="/tutorial/arduino/modules" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Previous: Modules
                </Link>
                <Link to="/tutorial/arduino/connectivity" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Next: Connectivity
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
