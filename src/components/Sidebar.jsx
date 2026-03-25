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
            {
                label: 'Introduction',
                children: [
                    { label: 'What is Raspberry Pi?', to: '/tutorial/raspberry-pi/introduction' },
                    { label: 'History & Purpose', to: '/tutorial/raspberry-pi/introduction/history' },
                    { label: 'Developed by Raspberry Pi Foundation', to: '/tutorial/raspberry-pi/introduction/foundation' },
                ],
            },
            {
                label: 'Versions & Models',
                children: [
                    { label: 'Raspberry Pi 3 Model B', to: '/tutorial/raspberry-pi/versions/pi3' },
                    { label: 'Raspberry Pi 4 Model B', to: '/tutorial/raspberry-pi/versions/pi4' },
                    { label: 'Raspberry Pi 5', to: '/tutorial/raspberry-pi/versions/pi5' },
                    { label: 'Raspberry Pi Zero', to: '/tutorial/raspberry-pi/versions/pi-zero' },
                    { label: 'Comparison Table', to: '/tutorial/raspberry-pi/versions/comparison' },
                ],
            },
            {
                label: 'Programming',
                children: [
                    { label: 'Python Basics', to: '/tutorial/raspberry-pi/programming/python' },
                    { label: 'GPIO Programming', to: '/tutorial/raspberry-pi/programming/gpio' },
                    { label: 'C Programming', to: '/tutorial/raspberry-pi/programming/c' },
                    { label: 'Sample Codes', to: '/tutorial/raspberry-pi/programming/samples' },
                ],
            },
            {
                label: 'Web Server Setup & IoT',
                children: [
                    { label: 'Overview', to: '/tutorial/raspberry-pi/web-server' },
                    { label: 'HTTP GET & POST Methods', to: '/tutorial/raspberry-pi/web-server/http-methods' },
                    { label: 'Creating HTML Form', to: '/tutorial/raspberry-pi/web-server/html-form' },
                    { label: 'PHP Form Handling', to: '/tutorial/raspberry-pi/web-server/php-handling' },
                    { label: 'Storing Data in MySQL', to: '/tutorial/raspberry-pi/web-server/mysql-database' },
                    { label: 'Real-Time Monitoring', to: '/tutorial/raspberry-pi/web-server/realtime-monitoring' },
                ],
            },
        ],
    },
    esp32: {
        title: 'ESP32',
        color: 'text-esp32',
        items: [
            { label: 'Overview', to: '/tutorial/esp32' },
            { label: 'What is ESP32?', to: '/tutorial/esp32/introduction' },
            {
                label: 'Modules',
                children: [
                    { label: 'All Modules', to: '/tutorial/esp32/modules' },
                    { label: 'ESP32-WROOM-32', to: '/tutorial/esp32/modules/wroom32' },
                    { label: 'ESP32-WROVER', to: '/tutorial/esp32/modules/wrover' },
                    { label: 'ESP32-S2', to: '/tutorial/esp32/modules/s2' },
                    { label: 'ESP32-S3', to: '/tutorial/esp32/modules/s3' },
                    { label: 'ESP32-C3', to: '/tutorial/esp32/modules/c3' },
                    { label: 'ESP32-CAM', to: '/tutorial/esp32/modules/cam' },
                ],
            },
            {
                label: 'Protocols',
                children: [
                    { label: 'All Protocols', to: '/tutorial/esp32/protocols' },
                    { label: 'ESP32 Wi-Fi', to: '/tutorial/esp32/protocols/wifi' },
                    { label: 'ESP32 MQTT', to: '/tutorial/esp32/protocols/mqtt' },
                    { label: 'ESP32 Bluetooth', to: '/tutorial/esp32/protocols/bluetooth' },
                    { label: 'ESP32 BLE', to: '/tutorial/esp32/protocols/ble' },
                    { label: 'ESP32 ESP-NOW', to: '/tutorial/esp32/protocols/espnow' },
                    { label: 'ESP32 WebSocket', to: '/tutorial/esp32/protocols/websocket' },
                ],
            },
            {
                label: 'Sensors',
                children: [
                    { label: 'All Sensors', to: '/tutorial/esp32/sensors' },
                    { label: 'DHT11 Temperature Sensor', to: '/tutorial/esp32/sensors/dht11' },
                    { label: 'Ultrasonic Sensor (HC-SR04)', to: '/tutorial/esp32/sensors/ultrasonic' },
                    { label: 'PIR Motion Sensor (HC-SR501)', to: '/tutorial/esp32/sensors/pir' },
                    { label: 'LDR Light Sensor', to: '/tutorial/esp32/sensors/ldr' },
                    { label: 'Gas Sensor (MQ-2)', to: '/tutorial/esp32/sensors/gas' },
                ],
            },
            {
                label: 'Features',
                children: [
                    { label: 'ADC & DAC', to: '/tutorial/esp32/features/adc-dac' },
                    { label: 'Bluetooth Support', to: '/tutorial/esp32/features/bluetooth' },
                    { label: 'Built-In Wi-Fi', to: '/tutorial/esp32/features/wifi' },
                    { label: 'Dual-Core Processor', to: '/tutorial/esp32/features/dual-core' },
                    { label: 'GPIO Pins', to: '/tutorial/esp32/features/gpio' },
                    { label: 'Low Power Consumption', to: '/tutorial/esp32/features/low-power' },
                    { label: 'PWM Control', to: '/tutorial/esp32/features/pwm' },
                ],
            }
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
