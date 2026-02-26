import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
    {
        id: 'arduino',
        name: 'Arduino',
        description: 'Learn microcontroller programming, sensors, modules, and build amazing projects with Arduino.',
        to: '/tutorial/arduino',
        color: 'from-arduino/20 to-arduino/5',
        borderColor: 'border-arduino/40',
        textColor: 'text-arduino',
        glowColor: 'shadow-arduino/20',
        bgAccent: 'bg-arduino/10',
        topics: ['What is Arduino?', 'Modules', 'Sensors', 'Installation', 'Projects'],
        specs: [
            { label: 'Microcontroller', value: 'ATmega328P' },
            { label: 'Operating Voltage', value: '5V' },
            { label: 'Digital Pins', value: '14 (6 PWM)' },
            { label: 'Analog Pins', value: '6' },
            { label: 'Clock Speed', value: '16 MHz' },
            { label: 'Flash Memory', value: '32 KB' },
        ],
        badge: 'Most Popular',
        badgeColor: 'bg-arduino/20 text-arduino border-arduino/30',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M16 3v1.5m0 15V21m-8-7.5h3v-3m3 0v3h3" />
            </svg>
        ),
    },
    {
        id: 'raspberrypi',
        name: 'Raspberry Pi',
        description: 'Explore single-board computing, Linux, GPIO programming, and IoT server projects.',
        to: '/tutorial/raspberry-pi',
        color: 'from-raspberry/20 to-raspberry/5',
        borderColor: 'border-raspberry/40',
        textColor: 'text-raspberry',
        glowColor: 'shadow-raspberry/20',
        bgAccent: 'bg-raspberry/10',
        topics: ['Getting Started', 'GPIO Basics', 'Python Projects', 'Networking'],
        specs: [
            { label: 'CPU', value: 'Cortex-A72 (ARM)' },
            { label: 'RAM', value: '1GB – 8GB' },
            { label: 'GPIO Pins', value: '40' },
            { label: 'OS', value: 'Raspberry Pi OS' },
            { label: 'USB Ports', value: '4 × USB 3.0' },
            { label: 'Connectivity', value: 'WiFi + BT 5.0' },
        ],
        badge: 'Linux SBC',
        badgeColor: 'bg-raspberry/20 text-raspberry border-raspberry/30',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        ),
    },
    {
        id: 'esp32',
        name: 'ESP32',
        description: 'Master WiFi & Bluetooth-enabled microcontrollers for wireless IoT applications.',
        to: '/tutorial/esp32',
        color: 'from-esp32/20 to-esp32/5',
        borderColor: 'border-esp32/40',
        textColor: 'text-esp32',
        glowColor: 'shadow-esp32/20',
        bgAccent: 'bg-esp32/10',
        topics: ['Introduction', 'WiFi Setup', 'BLE Basics', 'Cloud Integration'],
        specs: [
            { label: 'CPU', value: 'Dual-core 240 MHz' },
            { label: 'RAM', value: '520 KB SRAM' },
            { label: 'Flash', value: '4 MB' },
            { label: 'WiFi', value: '802.11 b/g/n' },
            { label: 'Bluetooth', value: 'BT 4.2 + BLE' },
            { label: 'GPIO Pins', value: '34' },
        ],
        badge: 'WiFi + BT',
        badgeColor: 'bg-esp32/20 text-esp32 border-esp32/30',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.5h.01" />
            </svg>
        ),
    },
    {
        id: 'raspberrypi-pico',
        name: 'Raspberry Pi Pico',
        description: 'Learn microcontroller programming with Raspberry Pi Pico, explore GPIO, sensors, MicroPython, and build embedded projects.',
        to: '/tutorial/raspberrypi-pico',
        color: 'from-primary-500/20 to-primary-500/5',
        borderColor: 'border-primary-500/40',
        textColor: 'text-primary-400',
        glowColor: 'shadow-primary-500/20',
        bgAccent: 'bg-primary-500/10',
        topics: ['What is Pico?', 'GPIO & Pinout', 'MicroPython Setup', 'Sensors & Modules', 'Projects'],
        specs: [
            { label: 'MCU', value: 'RP2040' },
            { label: 'CPU', value: 'Dual-core 133 MHz' },
            { label: 'RAM', value: '264 KB SRAM' },
            { label: 'Flash', value: '2 MB' },
            { label: 'GPIO Pins', value: '26' },
            { label: 'Language', value: 'MicroPython / C' },
        ],
        badge: 'MicroPython',
        badgeColor: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.25-9H21M3 12H2.25m15.364 6.364l-1.591-1.591M6.227 6.227L4.636 4.636m12.728 0l-1.591 1.591M6.227 17.773l-1.591 1.591M9 12h6M12 9v6" />
            </svg>
        ),
    },
    {
        id: 'esp8266',
        name: 'ESP8266',
        description: 'Learn IoT development using ESP8266, connect to WiFi, control devices remotely, and build smart projects.',
        to: '/tutorial/esp8266',
        color: 'from-amber-500/20 to-amber-500/5',
        borderColor: 'border-amber-500/40',
        textColor: 'text-amber-400',
        glowColor: 'shadow-amber-500/20',
        bgAccent: 'bg-amber-500/10',
        topics: ['What is ESP8266?', 'WiFi & Networking', 'NodeMCU Setup', 'Sensors & IoT', 'Projects'],
        specs: [
            { label: 'CPU', value: 'Tensilica L106' },
            { label: 'Clock Speed', value: '80 / 160 MHz' },
            { label: 'RAM', value: '80 KB' },
            { label: 'Flash', value: '1–4 MB' },
            { label: 'WiFi', value: '802.11 b/g/n' },
            { label: 'GPIO Pins', value: '17' },
        ],
        badge: 'WiFi SoC',
        badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h19.5M4.5 9.75c2.25-2.25 12.75-2.25 15 0M6.75 7.5c3.75-3.75 6.75-3.75 10.5 0M9 15h.01M12 15h.01M15 15h.01" />
            </svg>
        ),
    }
]

function CategoryCard({ cat }) {
    const [hovered, setHovered] = useState(false)

    return (
        <Link
            to={cat.to}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.color} border border-surface-800/50 transition-all duration-400 block`}
            style={{
                borderColor: hovered ? undefined : undefined,
                boxShadow: hovered ? `0 20px 60px -10px var(--tw-shadow-color, rgba(0,0,0,0.4))` : '0 4px 24px rgba(0,0,0,0.2)',
                transform: hovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.3s ease',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Animated border glow */}
            <div
                className={`absolute inset-0 rounded-2xl border-2 ${cat.borderColor} transition-opacity duration-300 pointer-events-none`}
                style={{ opacity: hovered ? 1 : 0 }}
            />

            {/* Background shimmer on hover */}
            <div
                className={`absolute inset-0 ${cat.bgAccent} transition-opacity duration-300 pointer-events-none`}
                style={{ opacity: hovered ? 1 : 0 }}
            />

            {/* Main content */}
            <div className="relative p-6">
                {/* Header: Icon + Badge */}
                <div className="flex items-start justify-between mb-5">
                    <div
                        className={`w-14 h-14 rounded-xl bg-surface-950/60 flex items-center justify-center ${cat.textColor} transition-all duration-300`}
                        style={{ transform: hovered ? 'scale(1.12) rotate(-4deg)' : 'scale(1) rotate(0deg)' }}
                    >
                        {cat.icon}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${cat.badgeColor} transition-all duration-300`}
                        style={{ opacity: hovered ? 1 : 0.7, transform: hovered ? 'scale(1.05)' : 'scale(1)' }}>
                        {cat.badge}
                    </span>
                </div>

                {/* Title & Description */}
                <h2 className="text-xl font-bold text-surface-50 mb-2">{cat.name}</h2>
                <p
                    className="text-surface-400 text-sm leading-relaxed mb-5 transition-all duration-300"
                    style={{
                        maxHeight: hovered ? '0px' : '72px',
                        opacity: hovered ? 0 : 1,
                        marginBottom: hovered ? '0' : '',
                        overflow: 'hidden',
                    }}
                >
                    {cat.description}
                </p>

                {/* ── Specs Detail Panel (slides in on hover) ── */}
                <div
                    className="overflow-hidden transition-all duration-400"
                    style={{
                        maxHeight: hovered ? '220px' : '0px',
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? 'translateY(0)' : 'translateY(12px)',
                        transition: 'max-height 0.35s ease, opacity 0.3s ease 0.05s, transform 0.35s ease',
                    }}
                >
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {cat.specs.map((spec, i) => (
                            <div
                                key={spec.label}
                                className="p-2.5 rounded-lg bg-surface-950/50 border border-surface-800/40"
                                style={{
                                    transition: `opacity 0.25s ease ${i * 0.04}s, transform 0.3s ease ${i * 0.04}s`,
                                    opacity: hovered ? 1 : 0,
                                    transform: hovered ? 'translateY(0)' : 'translateY(8px)',
                                }}
                            >
                                <p className="text-surface-500 text-[10px] font-medium uppercase tracking-wide">{spec.label}</p>
                                <p className={`${cat.textColor} text-xs font-bold mt-0.5`}>{spec.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Topic pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {cat.topics.map((topic, i) => (
                        <span
                            key={topic}
                            className="px-2.5 py-1 rounded-md bg-surface-950/40 text-surface-400 text-xs font-medium transition-all duration-200"
                            style={{
                                transitionDelay: `${i * 30}ms`,
                                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                                borderColor: hovered ? 'currentColor' : 'transparent',
                            }}
                        >
                            {topic}
                        </span>
                    ))}
                </div>

                {/* Arrow CTA */}
                <div className={`flex items-center gap-1 text-sm font-semibold ${cat.textColor} transition-all duration-300`}
                    style={{ gap: hovered ? '8px' : '4px' }}>
                    Explore tutorials
                    <svg
                        className="w-4 h-4 transition-transform duration-300"
                        style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export default function TutorialHome() {
    return (
        <div className="min-h-[calc(100vh-54px)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-10">

                {/* Header */}
                <div className="text-center mb-16 mt-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-surface-50">
                        Choose Your Platform
                    </h1>
                    <p className="mt-4 text-surface-400 text-lg max-w-2xl mx-auto">
                        Select an IoT platform to begin your learning journey. Each section
                        includes structured tutorials, hands-on projects, and installation guides.
                    </p>
                </div>

                {/* Category Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <CategoryCard key={cat.id} cat={cat} />
                    ))}
                </div>
            </div>
        </div>
    )
}
