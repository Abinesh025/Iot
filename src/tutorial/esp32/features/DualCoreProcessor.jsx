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

export default function DualCoreProcessor() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/features" className="hover:text-primary-400 transition-colors">Features</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Dual-Core Processor</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">Dual-Core Processor</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                The ESP32 features two independent Xtensa LX6 (or LX7) processor cores that run at up to 240 MHz — enabling true parallel execution of communication protocols and application logic simultaneously.
            </p>

            <PlaceholderImage label="ESP32 dual-core architecture — Core 0 (PRO_CPU) and Core 1 (APP_CPU) with shared memory" />

            <SectionCard number="1" title="What is this Feature?">
                The ESP32 integrates <strong className="text-surface-200">two Xtensa LX6 32-bit cores</strong> (LX7 in S3) clocked at up to 240 MHz, referred to as <strong className="text-surface-200">Core 0 (PRO_CPU)</strong> and <strong className="text-surface-200">Core 1 (APP_CPU)</strong>. Both cores share the same memory bus, flash, SRAM, and peripherals, but execute code independently — allowing genuine simultaneous multi-threading without time-slicing between tasks.
                <br /><br />
                <strong className="text-surface-200">Key specs:</strong> 2× Xtensa LX6 @ 80 / 160 / 240 MHz (configurable) | 32-bit | Shared 520 KB SRAM | Independent L1 instruction caches | FreeRTOS SMP scheduler.
            </SectionCard>

            <SectionCard number="2" title="Why it is Important in ESP32">
                Most microcontrollers are single-core — the CPU must time-share between Wi-Fi stack management, sensor polling, display updates, and user application code. On the ESP32, <strong className="text-surface-200">Core 0 is dedicated to the Wi-Fi / Bluetooth radio stack</strong> by default (managed by Espressif's SDK), leaving <strong className="text-surface-200">Core 1 fully available</strong> for user application code. This separation eliminates radio interference with time-critical sensor tasks and eliminates the need for complex interrupt-based scheduling.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The ESP32 runs <strong className="text-surface-200">FreeRTOS with SMP (Symmetric Multi-Processing)</strong> support. Tasks can be pinned to a specific core using <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">xTaskCreatePinnedToCore()</code>, or left unpinned for the scheduler to assign dynamically. Both cores share a unified address space — inter-core communication uses FreeRTOS queues, semaphores, or the dedicated <strong className="text-surface-200">inter-processor interrupt (IPC)</strong> mechanism for sub-microsecond signalling.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Core 0: Wi-Fi MQTT publishing | Core 1: Real-time PID motor control',
                        'Core 0: Radio stack | Core 1: Audio DSP processing (I²S)',
                        'Core 0: BLE data streaming | Core 1: Camera frame capture',
                        'Core 0: Network stack | Core 1: RTOS task scheduler for sensors',
                        'Parallel computation: FFT on one core, data logging on the other',
                        'Watchdog independence — each core has its own hardware watchdog',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/features/wifi" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Built-In Wi-Fi
                </Link>
                <Link to="/tutorial/esp32/features/gpio" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    GPIO Pins
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
