import { Link } from 'react-router-dom'

/* ── Sensor card data ── */
const sensors = [
    {
        slug: 'dht11',
        name: 'DHT11',
        full: 'Temperature & Humidity Sensor',
        type: 'Digital',
        range: '0–50 °C | 20–80% RH',
        color: 'from-blue-500/10 to-esp32/10',
        badge: 'bg-blue-500/20 text-blue-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ),
        desc: 'Measures ambient temperature and relative humidity with a calibrated digital output over a single-wire interface. Ideal for climate monitoring and HVAC automation.',
    },
    {
        slug: 'ultrasonic',
        name: 'HC-SR04',
        full: 'Ultrasonic Distance Sensor',
        type: 'Digital',
        range: '2–400 cm',
        color: 'from-purple-500/10 to-esp32/10',
        badge: 'bg-purple-500/20 text-purple-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
        ),
        desc: 'Detects objects and measures distance using 40 kHz ultrasonic sound pulses. Used in robotics, parking systems, and tank-level monitoring — no contact required.',
    },
    {
        slug: 'pir',
        name: 'HC-SR501',
        full: 'PIR Motion Sensor',
        type: 'Digital',
        range: 'Up to 7 m | 110° FOV',
        color: 'from-orange-500/10 to-esp32/10',
        badge: 'bg-orange-500/20 text-orange-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        desc: 'Passively detects movement by sensing infrared radiation changes from warm bodies. Powers security alarms, automatic lighting, and occupancy detection systems.',
    },
    {
        slug: 'ldr',
        name: 'LDR',
        full: 'Light Dependent Resistor',
        type: 'Analog',
        range: '1 kΩ – 1 MΩ',
        color: 'from-yellow-500/10 to-esp32/10',
        badge: 'bg-yellow-500/20 text-yellow-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
        desc: 'A photoresistor whose resistance drops as light increases. Read via the ESP32 ADC to build auto-dimming lights, daylight sensors, and solar tracking systems.',
    },
    {
        slug: 'gas',
        name: 'MQ-2',
        full: 'Gas & Smoke Sensor',
        type: 'Analog + Digital',
        range: 'LPG, CH₄, H₂, Smoke',
        color: 'from-red-500/10 to-esp32/10',
        badge: 'bg-red-500/20 text-red-400',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
        ),
        desc: 'Detects combustible gases and smoke via a chemiresistive SnO₂ element. Provides both analog concentration readings and a digital threshold alarm — critical for IoT safety.',
    },
]

/* ═══════════════════════════════════════════════
   ESP32 Sensors — Index / Listing Page
═══════════════════════════════════════════════ */
export default function ESP32Sensors() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Sensors</span>
            </nav>

            {/* Page heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">Sensors</span>
            </h1>
            <p className="text-surface-400 text-base mb-10 leading-relaxed">
                The ESP32's analog and digital GPIO pins make it an excellent hub for a wide range of sensors.
                Select a sensor below to explore how it works, its IoT use cases, and a ready-to-use ESP32 code example.
            </p>

            {/* ── Introduction card ── */}
            <section className="mb-10 p-6 rounded-xl border border-surface-800/60 bg-surface-900/40">
                <h2 className="text-lg font-bold text-surface-100 mb-3">Introduction to ESP32 Sensors</h2>
                <p className="text-surface-400 text-sm leading-relaxed mb-3">
                    Sensors are the eyes and ears of any IoT system. They translate real-world physical phenomena —
                    temperature, movement, light, gas concentration — into electrical signals that the ESP32 can read, process, and act upon.
                </p>
                <p className="text-surface-400 text-sm leading-relaxed">
                    The ESP32 supports <strong className="text-surface-200">digital sensors</strong> (HIGH/LOW output, I²C, SPI) and{' '}
                    <strong className="text-surface-200">analog sensors</strong> (variable voltage read by its 12-bit ADC, producing values 0–4095).
                    This section covers the five most common sensors used in ESP32 IoT projects.
                </p>
            </section>

            {/* ── Sensor cards ── */}
            <h2 className="text-lg font-bold text-surface-100 mb-5">Common ESP32 Sensors</h2>
            <div className="space-y-4">
                {sensors.map((s) => (
                    <Link
                        key={s.slug}
                        to={`/tutorial/esp32/sensors/${s.slug}`}
                        className={`group flex items-start gap-5 p-5 rounded-xl border border-surface-800/60 bg-gradient-to-br ${s.color} hover:border-esp32/40 transition-all duration-200`}
                    >
                        {/* Icon */}
                        <div className="shrink-0 w-14 h-14 rounded-xl bg-surface-900/70 border border-surface-800/50 flex items-center justify-center text-esp32/70 group-hover:text-esp32 transition-colors">
                            {s.icon}
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="text-surface-100 font-bold text-base group-hover:text-esp32 transition-colors">{s.name}</span>
                                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${s.badge}`}>{s.type}</span>
                            </div>
                            <p className="text-surface-300 text-xs font-medium mb-1.5">{s.full}</p>
                            <p className="text-surface-500 text-xs leading-relaxed">{s.desc}</p>
                            <p className="text-surface-600 text-[11px] mt-2">Range / Output: {s.range}</p>
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
                <Link
                    to="/tutorial/esp32/protocols"
                    className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    ESP32 Protocols
                </Link>
                <Link
                    to="/tutorial/esp32"
                    className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm"
                >
                    ESP32 Overview
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </article>
    )
}
