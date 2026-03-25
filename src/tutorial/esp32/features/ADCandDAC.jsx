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

export default function ADCandDAC() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/features" className="hover:text-primary-400 transition-colors">Features</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">ADC & DAC</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">ADC & DAC</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                The ESP32 features an 18-channel 12-bit ADC for reading analog sensors and 2-channel 8-bit DAC for generating true analog voltage output — enabling both sensing and signal generation without external components.
            </p>

            <PlaceholderImage label="ESP32 ADC/DAC — analog-to-digital (ADC1/ADC2) and digital-to-analog (DAC1/DAC2) channels" />

            <SectionCard number="1" title="What is this Feature?">
                <strong className="text-surface-200">ADC (Analog-to-Digital Converter)</strong> reads a continuous voltage (0–3.3 V) and maps it to a <strong className="text-surface-200">12-bit integer (0–4095)</strong>. The ESP32 has two SAR ADC units: <strong className="text-surface-200">ADC1</strong> (GPIO32–39, 8 channels — safe to use) and <strong className="text-surface-200">ADC2</strong> (10 channels, shared with Wi-Fi — unreliable when Wi-Fi is active).
                <br /><br />
                <strong className="text-surface-200">DAC (Digital-to-Analog Converter)</strong> converts a digital value (0–255) to an analog voltage (0–3.3 V). Only two pins support DAC: <strong className="text-surface-200">GPIO25 (DAC1)</strong> and <strong className="text-surface-200">GPIO26 (DAC2)</strong>.
            </SectionCard>

            <SectionCard number="2" title="Why it is Important in ESP32">
                The 12-bit ADC resolution gives 4096 distinct values across 3.3 V — a step size of ~0.8 mV — fine enough for most sensor readings without external conversion chips. The on-chip DAC eliminates R-2R ladder networks or external MCP4725 DAC chips for generating audio sine waves, analog servo control signals, or bias voltages. Together they make the ESP32 a complete analog interface solution for IoT sensor systems.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The ADC uses a <strong className="text-surface-200">Successive Approximation Register (SAR)</strong> architecture. A sample-and-hold circuit captures the input voltage, then a binary search algorithm compares it against an internal reference, narrowing down the 12-bit result in 12 clock cycles. The DAC uses a resistor string (R-string) topology, producing a voltage proportional to the 8-bit input between GND and VDD_A (3.3 V). Call <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">analogRead(pin)</code> for ADC and <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">dacWrite(pin, value)</code> for DAC in Arduino.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'ADC: Reading LDR (light), potentiometer, soil moisture sensors',
                        'ADC: MQ-2 gas sensor analog concentration measurement',
                        'ADC: Battery voltage monitoring via resistor divider',
                        'DAC: Generating audio tones / sine waves for a small speaker',
                        'DAC: Variable reference voltage for op-amp comparator circuits',
                        'DAC: Analog LED brightness control via true voltage (not PWM)',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">

                <Link to="/tutorial/esp32/features/bluetooth" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    Bluetooth Support
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
