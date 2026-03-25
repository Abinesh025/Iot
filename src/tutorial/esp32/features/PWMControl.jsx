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

export default function PWMControl() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/features" className="hover:text-primary-400 transition-colors">Features</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">PWM Control</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">PWM Control</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                The ESP32 provides 16 independent hardware PWM channels (LEDC peripheral) mappable to any GPIO, supporting resolutions from 1 to 20 bits and frequencies from 1 Hz to 40 MHz — enabling precise LED dimming, servo control, and motor speed regulation.
            </p>

            <PlaceholderImage label="ESP32 PWM — LEDC peripheral with 16 channels, duty cycle and frequency configuration" />

            <SectionCard number="1" title="What is this Feature?">
                <strong className="text-surface-200">PWM (Pulse Width Modulation)</strong> is a technique for encoding an analog value as a digital square wave by varying its <em>duty cycle</em> — the fraction of each period that the signal is HIGH. The ESP32's <strong className="text-surface-200">LEDC (LED Control) peripheral</strong> provides <strong className="text-surface-200">16 independent hardware PWM channels</strong>, each with a configurable:
                <ul className="mt-2 space-y-1">
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Frequency:</strong> 1 Hz – 40 MHz</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Resolution:</strong> 1–20 bits (e.g., 8-bit = 256 steps, 12-bit = 4096 steps)</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Output pin:</strong> Any GPIO via the GPIO Matrix</li>
                </ul>
            </SectionCard>

            <SectionCard number="2" title="Why it is Important in ESP32">
                Hardware PWM is generated entirely by the LEDC peripheral — the CPU sets the parameters once and the hardware runs indefinitely without CPU intervention. This is critical for real-time applications: servo pulses must arrive every 20 ms precisely, and motor speed control must not jitter. The 16-channel count allows simultaneously controlling multiple servos, RGB LED channels, motor drivers, and buzzers — far more than classic Arduino's 6 PWM pins.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The developer calls <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">ledcSetup(channel, freq, resolution)</code> to configure a channel, then <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">ledcAttachPin(pin, channel)</code> to route it to a GPIO, and finally <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">ledcWrite(channel, duty)</code> to set duty cycle. Each of the 8 high-speed and 8 low-speed channels has an independent 20-bit timer. The LEDC peripheral's clock source is selectable (APB, REF_TICK, or RTC8M) — REF_TICK allows PWM to continue during light-sleep.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'LED dimming — smooth brightness control for status indicators',
                        'RGB LED colour mixing with 3 PWM channels',
                        'Servo motor position control (50 Hz, 1–2 ms pulse width)',
                        'DC motor speed control via L298N or DRV8833 motor driver',
                        'Buzzer tone generation at configurable frequencies',
                        'Fan speed control in temperature-regulated enclosures',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Back to Overview 
                </Link>
            </div>
        </article>
    )
}
