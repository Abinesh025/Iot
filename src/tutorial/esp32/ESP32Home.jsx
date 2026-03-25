import { useState } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../../components/MetaData'

/* ── Accordion Item ── */
function AccordionItem({ title, children }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="border border-surface-800/60 rounded-xl overflow-hidden mb-3">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-4 bg-surface-900/60 hover:bg-surface-800/50 transition-colors text-left"
            >
                <span className="text-surface-100 font-semibold text-sm">{title}</span>
                <svg
                    className={`w-4 h-4 text-esp32 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="px-5 py-4 bg-surface-900/30 border-t border-surface-800/40 text-surface-400 text-sm leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    )
}

/* ── Feature Tag ── */
function FeatureTag({ label }) {
    return (
        <span className="px-3 py-1 rounded-md bg-esp32/10 text-esp32 text-xs font-medium border border-esp32/20">
            {label}
        </span>
    )
}

/* ═══════════════════════════════════════════════
   Main Component
═══════════════════════════════════════════════ */
export default function ESP32Home() {
    return (
        <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <span className="text-esp32 font-medium">ESP32</span>
            </nav>
             <MetaData title={"Esp32"} />
            {/* Hero */}
            <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-esp32/10 flex items-center justify-center text-esp32 shrink-0">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.5h.01" />
                    </svg>
                </div>
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-1">
                        What is <span className="text-esp32">ESP32</span>?
                    </h1>
                    <p className="text-surface-400 text-lg leading-relaxed max-w-2xl">
                        A comprehensive overview of the ESP32 — the world's most popular dual-core
                        Wi-Fi + Bluetooth microcontroller for IoT and embedded systems.
                    </p>
                </div>
            </div>

            {/* Intro banner */}
            <div className="p-5 rounded-xl bg-esp32/5 border border-esp32/20 mb-8">
                <p className="text-surface-300 leading-relaxed">
                    <strong className="text-esp32">ESP32</strong> is a low-cost, low-power system-on-chip (SoC) with
                    integrated Wi-Fi and dual-mode Bluetooth, developed by{' '}
                    <strong className="text-surface-200">Espressif Systems</strong> — a Shanghai-based semiconductor
                    company. Released in 2016 as the successor to the ESP8266, it quickly became the
                    de-facto standard microcontroller in the IoT and maker community worldwide.
                </p>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-8">
                {[
                    'Wi-Fi 802.11 b/g/n', 'Bluetooth 4.2 + BLE', 'Dual-Core 240 MHz',
                    '34 GPIO Pins', 'ADC / DAC', 'SPI / I2C / UART / I2S',
                    'Touch Sensors', 'Deep Sleep < 10 µA',
                ].map((f) => <FeatureTag key={f} label={f} />)}
            </div>

            {/* ── Accordion ── */}
            <AccordionItem title="Definition — What is ESP32?">
                <p className="mb-3">
                    ESP32 is a feature-rich System-on-Chip (SoC) that combines a high-performance dual-core processor,
                    a Wi-Fi transceiver, a Bluetooth / BLE radio, and a rich set of peripherals — all in a single chip
                    smaller than a thumbnail.
                </p>
                <p>
                    It can act as a Wi-Fi station, an access point, or both simultaneously. Its ultra-low-power modes
                    make it suitable for battery-operated applications, while its 240 MHz clock speed handles real-time
                    signal processing, audio codecs, and machine-learning inference.
                </p>
            </AccordionItem>

            <AccordionItem title="Who Developed ESP32?">
                <p>
                    ESP32 was designed and manufactured by <strong className="text-surface-200">Espressif Systems</strong>,
                    a publicly listed fabless semiconductor company founded in 2008 and headquartered in Shanghai, China.
                    The chip was first announced in 2015 and began mass production in 2016. Espressif provides a fully
                    open-source SDK (ESP-IDF), a FreeRTOS port, and official Arduino &amp; MicroPython support, fostering
                    a massive global community of developers.
                </p>
            </AccordionItem>

            <AccordionItem title="Why is it Popular in IoT & Embedded Systems?">
                <ul className="space-y-2">
                    {[
                        'All-in-one wireless connectivity — no external radio modules needed',
                        'Extremely affordable (< $2 per chip at volume)',
                        'Powerful dual-core processor handles concurrent tasks easily',
                        'Rich peripheral set: 34 GPIO, 18 ADC, 2 DAC, 3 SPI, 2 I2C, 3 UART, I2S, SDMMC, and more',
                        'Multiple SDK options: Arduino IDE, ESP-IDF, MicroPython, CircuitPython, Rust',
                        'Vast community documentation, libraries, and project examples',
                        'Industrial-grade operating temperature range (–40 °C to +85 °C)',
                        'Ultra-low power deep sleep mode (~10 µA) for battery-powered deployments',
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-esp32 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </AccordionItem>

            <AccordionItem title="CPU Architecture — Dual-Core Design">
                <p className="mb-4">
                    At the heart of the ESP32 sit <strong className="text-surface-200">two identical Xtensa LX6 CPU cores</strong> —
                    Core 0 and Core 1. Both share access to internal memory via a high-speed bus.
                    Core 0 typically runs the Wi-Fi and Bluetooth stacks (handled automatically by the SDK),
                    while Core 1 runs your application code. This separation ensures wireless operations do not stall
                    your main program.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                    {[
                        { num: '1', title: 'CPU Subsystem', desc: 'Dual-core LX6 with a shared L1 cache. Each core runs independently with FreeRTOS tasks.' },
                        { num: '2', title: 'Radio Subsystem', desc: 'Integrated RF transceiver for 2.4 GHz Wi-Fi and Bluetooth/BLE with antenna switch.' },
                        { num: '3', title: 'Peripheral Matrix', desc: 'A flexible IO MUX allows almost any GPIO to be mapped to any peripheral function.' },
                    ].map(({ num, title, desc }) => (
                        <div key={num} className="p-3 rounded-xl bg-esp32/5 border border-esp32/15">
                            <div className="w-6 h-6 rounded-md bg-esp32/20 flex items-center justify-center text-esp32 text-xs font-bold mb-2">{num}</div>
                            <h5 className="text-surface-200 font-semibold text-xs mb-1">{title}</h5>
                            <p className="text-surface-500 text-xs leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </AccordionItem>

            <AccordionItem title="Built-in Wi-Fi & Bluetooth">
                <p className="mb-3">
                    The ESP32 integrates both <strong className="text-surface-200">Wi-Fi (802.11 b/g/n)</strong> and{' '}
                    <strong className="text-surface-200">Bluetooth 4.2 (BR/EDR + BLE)</strong> in a single chip.
                    This means no separate radio modules are needed — saving cost, PCB space, and design complexity.
                </p>
                <ul className="space-y-2">
                    {[
                        'Wi-Fi Station mode — connect to any 2.4 GHz router',
                        'Wi-Fi Access Point mode — create its own Wi-Fi hotspot',
                        'AP + STA simultaneously — act as both at the same time',
                        'Classic Bluetooth (BR/EDR) — for serial communication with phones or HC-05 style',
                        'Bluetooth Low Energy (BLE) — GATT server/client for wearables, beacons, and sensors',
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-esp32 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </AccordionItem>

            <AccordionItem title="Power Management & Deep Sleep">
                <p className="mb-3">
                    The ESP32 supports multiple power modes, making it ideal for battery-operated and energy-harvesting
                    applications:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        { mode: 'Active Mode', current: '~240 mA', desc: 'CPU + Wi-Fi TX/RX running at full speed' },
                        { mode: 'Modem Sleep', current: '~20 mA', desc: 'CPU active; Wi-Fi radio off between DTIM intervals' },
                        { mode: 'Light Sleep', current: '~0.8 mA', desc: 'CPU paused; RAM retained; fast wake-up' },
                        { mode: 'Deep Sleep', current: '~10 µA', desc: 'Only RTC memory & ULP coprocessor active' },
                    ].map(({ mode, current, desc }) => (
                        <div key={mode} className="p-3 rounded-lg bg-surface-800/30 border border-surface-700/30">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-surface-200 text-xs font-semibold">{mode}</span>
                                <span className="text-esp32 text-xs font-mono">{current}</span>
                            </div>
                            <p className="text-surface-500 text-xs">{desc}</p>
                        </div>
                    ))}
                </div>
                <p className="text-surface-500 text-xs mt-3">
                    Wake-up sources include: timer, touch pad, external signals (ext0 / ext1), ULP program, and UART.
                </p>
            </AccordionItem>

            <AccordionItem title="GPIO & Peripherals">
                <p className="mb-3">
                    The ESP32 exposes up to <strong className="text-surface-200">34 programmable GPIO pins</strong> (GPIO0 – GPIO39).
                    Via the IO MUX, nearly any GPIO can serve any peripheral function.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                        ['18 × 12-bit ADC', 'Analog input channels (ADC1 & ADC2)'],
                        ['2 × 8-bit DAC', 'Analog output on GPIO25 & GPIO26'],
                        ['10 Touch Pins', 'Capacitive touch sensing'],
                        ['3× UART', 'Serial communication'],
                        ['3× SPI', 'High-speed peripheral bus'],
                        ['2× I2C', 'Sensor & display bus'],
                        ['2× I2S', 'Audio codec interface'],
                        ['16× LED PWM', 'Servo, LED brightness control'],
                        ['Hall Sensor', 'Detects magnetic fields'],
                        ['CAN / SDMMC', 'Automotive / SD card interfaces'],
                    ].map(([label, desc]) => (
                        <div key={label} className="p-2.5 rounded-lg bg-surface-800/30 border border-surface-700/30">
                            <p className="text-esp32 font-semibold mb-0.5">{label}</p>
                            <p className="text-surface-500">{desc}</p>
                        </div>
                    ))}
                </div>
            </AccordionItem>

            <AccordionItem title="Security Features">
                <p className="mb-3">
                    Despite being a low-cost chip, the ESP32 includes a robust set of hardware security peripherals
                    for production IoT deployments:
                </p>
                <ul className="space-y-2">
                    {[
                        'Secure Boot — cryptographically verifies firmware before execution',
                        'Flash Encryption — AES-128 XTS encryption of external SPI flash',
                        'AES-128/256 accelerator — hardware-accelerated symmetric encryption',
                        'SHA-2 accelerator — fast hashing for message integrity',
                        'RSA-4096 / ECC — asymmetric-key operations for TLS & certificates',
                        'True Random Number Generator (TRNG) — entropy source for keys',
                        'One-Time Programmable (OTP) eFuses — device identity & key storage',
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-esp32 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </AccordionItem>

            {/* Next navigation */}
            <div className="mt-10 pt-6 border-t border-surface-800/50 flex justify-end">
                <Link
                    to="/tutorial/esp32/introduction"
                    className="flex items-center gap-2 text-esp32 hover:text-esp32/80 font-medium transition-colors text-sm"
                >
                    Next: Introduction to ESP32
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
