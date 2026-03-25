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

export default function BluetoothSupport() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/features" className="hover:text-primary-400 transition-colors">Features</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Bluetooth Support</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">Bluetooth Support</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                The ESP32 supports both <strong className="text-surface-200">Bluetooth Classic (BR/EDR)</strong> for wireless serial links and <strong className="text-surface-200">BLE (Low Energy)</strong> for wearables and beacons — all on a single chip sharing the 2.4 GHz antenna with Wi-Fi.
            </p>

            <PlaceholderImage label="ESP32 Bluetooth — Classic SPP serial link and BLE GATT server/client diagram" />

            <SectionCard number="1" title="What is this Feature?">
                The ESP32 integrates a <strong className="text-surface-200">dual-mode Bluetooth 4.2</strong> controller (BT Classic + BLE) on-chip. Bluetooth Classic uses the <strong className="text-surface-200">Serial Port Profile (SPP)</strong> to create a wireless UART link, while BLE uses the <strong className="text-surface-200">GATT protocol</strong> (Generic Attribute Profile) to expose named characteristics that smartphone apps can read, write, or subscribe to. Both modes share the 2.4 GHz antenna and coexist with Wi-Fi through hardware-managed time-division multiplexing.
            </SectionCard>

            <SectionCard number="2" title="Why it is Important in ESP32">
                Bluetooth eliminates wired connections to smartphones and embedded peripherals without requiring a Wi-Fi router. <strong className="text-surface-200">Classic BT</strong> gives the ESP32 a drop-in wireless UART (BluetoothSerial) with ~3 Mbps throughput, ideal for robot control and data logging. <strong className="text-surface-200">BLE</strong> drops power consumption to single-digit µA in advertising mode, making it perfect for coin-cell powered sensor tags that pair with a phone app. No extra hardware is required — both modes are fully on chip.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The Bluetooth controller runs on Core 0 alongside the Wi-Fi stack. In <strong className="text-surface-200">Classic BT</strong> mode, <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">BluetoothSerial.begin()</code> registers an SPP service and waits for a paired device to connect — after which <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">SerialBT.read()</code> / <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">SerialBT.write()</code> work exactly like Serial. In <strong className="text-surface-200">BLE</strong> mode, the application creates GATT services and characteristics using the <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">BLEDevice</code> API, then starts advertising so clients can discover and connect.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Wireless serial terminal — replace the USB cable during field testing',
                        'Bluetooth RC robot controlled by an Android/iOS app',
                        'BLE fitness tracker sending heart rate to a phone app',
                        'BLE beacon for indoor navigation and proximity detection',
                        'Bluetooth audio streaming (A2DP) to wireless speakers',
                        'BLE-to-Wi-Fi gateway bridging sensor nodes to the MQTT cloud',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/features/adc-dac" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    ADC & DAC
                </Link>
                <Link to="/tutorial/esp32/features/wifi" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    Built-In Wi-Fi
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
