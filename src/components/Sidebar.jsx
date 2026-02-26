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
            {
                label: 'Sensors',
                children: [
                    { label: 'DHT11 / DHT22', to: '/tutorial/arduino/sensors/dht' },
                    { label: 'BME280 Environmental', to: '/tutorial/arduino/sensors/bme280' },
                    { label: 'DS18B20 Temperature', to: '/tutorial/arduino/sensors/ds18b20' },
                    { label: 'MQ-2 Gas / Smoke', to: '/tutorial/arduino/sensors/mq2' },
                    { label: 'MPU-6050 Motion', to: '/tutorial/arduino/sensors/mpu6050' },
                ]
            },
            {
                label: 'Connectivity',
                children: [
                    { label: 'WiFi (ESP8266)', to: '/tutorial/arduino/connectivity/wifi' },
                    { label: 'Bluetooth (HC-05)', to: '/tutorial/arduino/connectivity/bluetooth' },
                    { label: 'BLE (HM-10)', to: '/tutorial/arduino/connectivity/ble' },
                    { label: 'LoRa (SX1278)', to: '/tutorial/arduino/connectivity/lora' },
                    { label: 'Ethernet (W5100)', to: '/tutorial/arduino/connectivity/ethernet' },
                ],
            },
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
                    {
                        label: 'Beginner',
                        to: '/tutorial/arduino/projects/beginner',
                        children: [
                            { label: 'LED Blink', to: '/tutorial/arduino/projects/beginner/led-blink' },
                            { label: 'Traffic Light', to: '/tutorial/arduino/projects/beginner/traffic-light' },
                            { label: 'Temperature Monitor', to: '/tutorial/arduino/projects/beginner/temperature-monitor' },
                            { label: 'Servo Sweep', to: '/tutorial/arduino/projects/beginner/servo-sweep' },
                        ],
                    },
                    {
                        label: 'Intermediate',
                        to: '/tutorial/arduino/projects/intermediate',
                        children: [
                            { label: 'LCD Weather Station', to: '/tutorial/arduino/projects/intermediate/lcd-weather-station' },
                            { label: 'Ultrasonic Range Finder', to: '/tutorial/arduino/projects/intermediate/ultrasonic-range-finder' },
                            { label: 'IR Remote Car', to: '/tutorial/arduino/projects/intermediate/ir-remote-car' },
                            { label: 'Bluetooth Chat', to: '/tutorial/arduino/projects/intermediate/bluetooth-chat' },
                        ],
                    },
                    {
                        label: 'Advanced',
                        to: '/tutorial/arduino/projects/advanced',
                        children: [
                            { label: 'IoT Smart Home', to: '/tutorial/arduino/projects/advanced/smart-home' },
                            { label: 'GPS Tracker', to: '/tutorial/arduino/projects/advanced/gps-tracker' },
                            { label: 'Plant Monitor', to: '/tutorial/arduino/projects/advanced/plant-monitor' },
                            { label: 'Security System', to: '/tutorial/arduino/projects/advanced/security-system' },
                        ],
                    },
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
