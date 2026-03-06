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

export default function GPIOPins() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/features" className="hover:text-primary-400 transition-colors">Features</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">GPIO Pins</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">GPIO Pins</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                The ESP32 exposes up to 38 GPIO pins — many supporting multiple functions (digital I/O, ADC, DAC, PWM, UART, SPI, I²C, I²S, touch) configured in software, making it an extremely flexible interface hub.
            </p>

            <PlaceholderImage label="ESP32 DevKit GPIO pinout — digital, ADC, touch, SPI, I²C, UART, and PWM pin mapping" />

            <SectionCard number="1" title="What is this Feature?">
                GPIO (General Purpose Input/Output) pins are the ESP32's physical interface to the outside world. The WROOM-32 exposes <strong className="text-surface-200">38 GPIO pads</strong>, most of which are multi-function — the same pin can act as a digital output, PWM source, ADC input, SPI MOSI, or I²C SDA depending on software configuration. Key pin groups:
                <ul className="mt-2 space-y-1">
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Digital I/O:</strong> GPIO0–GPIO39 (some input-only)</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">ADC channels:</strong> GPIO32–39 (ADC1), GPIO0,2,4,12-15 (ADC2)</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">Touch sensors:</strong> 10 capacitive touch pins (T0–T9)</li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><strong className="text-surface-200">UART:</strong> 3× hardware UART | <strong className="text-surface-200">SPI:</strong> 4× | <strong className="text-surface-200">I²C:</strong> 2× | <strong className="text-surface-200">I²S:</strong> 2×</li>
                </ul>
            </SectionCard>

            <SectionCard number="2" title="Why it is Important in ESP32">
                The ability to <strong className="text-surface-200">remap most peripherals to any GPIO</strong> via the GPIO Matrix (a hardware crossbar switch) removes the rigid pin-function constraints of classical microcontrollers. Need UART on GPIO 25/26 instead of the default 1/3? Just reconfigure the matrix. This flexibility means PCB designers can route traces efficiently and developers can adapt code to different hardware revisions without board respins.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The <strong className="text-surface-200">GPIO Matrix</strong> is a switching fabric that connects any peripheral signal (UART TX, SPI MISO, I²C SDA, etc.) to any output-capable GPIO pin. Each GPIO also has configurable internal <strong className="text-surface-200">pull-up / pull-down resistors</strong> (45 kΩ), open-drain mode, interrupt triggers (rising, falling, both, high, low), and drive strength (5–40 mA). Input-only pins (GPIO34–39) lack the output driver and can only be read.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Digital output: LED blinking, relay switching, buzzer control',
                        'Digital input: push-button reading, reed switch detection',
                        'Interrupt-driven PIR motion detection on any GPIO',
                        'Capacitive touch buttons without external hardware',
                        'Flexible UART remap for GPS/GSM modules on custom PCBs',
                        'I²C / SPI bus on chosen pins for displays, sensors, and EEPROMs',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/features/low-power" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Low Power Consumption
                </Link>
                <Link to="/tutorial/esp32/features/adc-dac" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    ADC & DAC
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
