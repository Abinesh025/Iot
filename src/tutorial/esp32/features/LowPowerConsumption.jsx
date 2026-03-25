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

export default function LowPowerConsumption() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/features" className="hover:text-primary-400 transition-colors">Features</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Low Power Consumption</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">Low Power Consumption</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                The ESP32 offers multiple sleep modes — from light-sleep at ~800 µA down to deep-sleep at just ~5–10 µA — enabling battery-powered IoT devices to run for months or years on a single charge.
            </p>

            <PlaceholderImage label="ESP32 power modes — Active, Modem-Sleep, Light-Sleep, Deep-Sleep, and Hibernation current diagram" />

            <SectionCard number="1" title="What is this Feature?">
                The ESP32 implements <strong className="text-surface-200">five power modes</strong> managed by its Power Management Unit (PMU):
                <ul className="mt-2 space-y-1 text-xs">
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Active:</strong> Full performance — both cores on, all peripherals active (~160-240 mA with Wi-Fi Tx)</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Modem-Sleep:</strong> CPU runs, radio turns off between DTIM beacons (~20 mA)</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Light-Sleep:</strong> CPU paused, RAM retained, wakes on timer/GPIO/UART (~800 µA)</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Deep-Sleep:</strong> Only RTC memory and ULP co-processor active (~5–10 µA)</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Hibernation:</strong> Only RTC timer running, all else off (~2.5 µA)</li>
                </ul>
            </SectionCard>

            <SectionCard number="2" title="Why it is Important in ESP32">
                Battery life is critical for deployed IoT sensors. By spending 99% of the time in deep-sleep (~5 µA) and waking only to sample a sensor and transmit data (~150 mA for ~0.5 s every 10 min), average current drops to just <strong className="text-surface-200">~20–30 µA</strong> — enabling a 2000 mAh LiPo battery to last <strong className="text-surface-200">over 3 years</strong>. This makes the ESP32 viable for remote agricultural sensors, wildlife trackers, and smart meters without mains power.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                In deep-sleep, the main CPU, SRAM, and all digital peripherals are powered off. Only the <strong className="text-surface-200">RTC (Real-Time Clock) domain</strong> remains active — maintaining a 8 KB RTC fast memory for persistence across sleep cycles. Wake-up sources include:  RTC timer, external GPIO rising/falling edge, touchpad capacitance threshold, and ULP co-processor interrupt. On wake, the chip reboots from the reset vector but can read RTC memory to resume context.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Solar-powered remote weather stations (wake every 10 min)',
                        'Wildlife GPS tracker — deep-sleep between GNSS fixes',
                        'Smart agricultural soil moisture sensor on AA batteries',
                        'Industrial vibration logger — wakes on vibration GPIO interrupt',
                        'Smart door sensor — deep-sleep, wake on reed switch trigger',
                        'Wearable step counter using ULP co-processor for pedometry',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/features/gpio" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    GPIO Pins
                </Link>
                <Link to="/tutorial/esp32/features/pwm" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                        PWM Control
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
