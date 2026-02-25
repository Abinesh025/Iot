import AccordionMenu from './AccordionMenu'

/* ── Menu tree configs per category ── */
const menuConfigs = {
    arduino: {
        title: 'Arduino',
        color: 'text-arduino',
        items: [
            { label: 'Overview', to: '/tutorial/arduino' },
            { label: 'What is Arduino?', to: '/tutorial/arduino/what-is-arduino' },
            {
                label: "Modules",
                children: [
                    { label: "Arduino Relay Module", to: "/tutorial/arduino/modules/relay" },
                    { label: "Arduino PIR Sensor (HC-SR501)", to: "/tutorial/arduino/modules/pir" },
                    { label: "Arduino RFID MFRC522", to: "/tutorial/arduino/modules/rfid" },
                    { label: "Arduino RTC Module (DS3231)", to: "/tutorial/arduino/modules/rtc" },
                    { label: "Arduino Ultrasonic Sensor (HC-SR04)", to: "/tutorial/arduino/modules/ultrasonic" }
                ]
            },
            { label: 'Sensors', to: '/tutorial/arduino/sensors' },
            { label: 'Connectivity', to: '/tutorial/arduino/connectivity' },
            {
                label: 'Installation',
                children: [
                    { label: 'Windows', to: '/tutorial/arduino/install/windows' },
                    { label: 'Linux', to: '/tutorial/arduino/install/linux' },
                    { label: 'macOS', to: '/tutorial/arduino/install/macos' },
                ],
            },
            {
                label: 'Projects',
                children: [
                    { label: 'Beginner', to: '/tutorial/arduino/projects/beginner' },
                    { label: 'Intermediate', to: '/tutorial/arduino/projects/intermediate' },
                    { label: 'Advanced', to: '/tutorial/arduino/projects/advanced' },
                ],
            },
        ],
    },
    raspberrypi: {
        title: 'Raspberry Pi',
        color: 'text-raspberry',
        items: [
            { label: 'Overview', to: '/tutorial/raspberry-pi' },
        ],
    },
    esp32: {
        title: 'ESP32',
        color: 'text-esp32',
        items: [
            { label: 'Overview', to: '/tutorial/esp32' },
        ],
    },
}

export default function Sidebar({ category, onNavigate }) {
    const config = menuConfigs[category] || menuConfigs.arduino

    return (
        <aside className="h-full flex flex-col">
            {/* Category heading */}
            <div className="px-4 py-4 border-b border-surface-800/50">
                <h2 className={`text-lg font-bold ${config.color}`}>{config.title}</h2>
                <p className="text-xs text-surface-500 mt-0.5">Tutorial Navigation</p>
            </div>

            {/* Navigation tree */}
            <div className="flex-1 overflow-y-auto px-2 py-3">
                <AccordionMenu items={config.items} onNavigate={onNavigate} />
            </div>

            {/* Back link */}
            <div className="px-4 py-3 border-t border-surface-800/50">
                <a
                    href="/"
                    className="flex items-center gap-2 text-sm text-surface-500 hover:text-primary-400 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    All categories
                </a>
            </div>
        </aside>
    )
}
