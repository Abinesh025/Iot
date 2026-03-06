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

function CodeSnippet({ children }) {
    return (
        <pre className="mt-3 bg-surface-950/70 border border-surface-800/50 rounded-lg p-4 overflow-x-auto text-xs text-esp32/90 leading-relaxed font-mono whitespace-pre">
            {children}
        </pre>
    )
}

/* ═══════════════════════════════════════════════
   LDR Light Sensor — Full Page
═══════════════════════════════════════════════ */
export default function LDRSensor() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/sensors" className="hover:text-primary-400 transition-colors">Sensors</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">LDR</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                LDR <span className="text-esp32">Light Dependent Resistor</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                A passive analog sensor whose electrical resistance decreases as the surrounding light intensity increases — simple yet powerful for light-sensing IoT applications.
            </p>

            <PlaceholderImage label="LDR in voltage divider circuit — connected to ESP32 ADC pin (GPIO 34)" />

            <SectionCard number="1" title="What is this Sensor?">
                An <strong className="text-surface-200">LDR (Light Dependent Resistor)</strong>, also called a photoresistor or photocell, is a variable resistor that changes its resistance inversely proportional to light intensity. Made from high-resistance semiconductor material (cadmium sulfide), its resistance can vary from <strong className="text-surface-200">~1 MΩ in complete darkness</strong> to as low as <strong className="text-surface-200">~1 kΩ in bright sunlight</strong>.
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Output: Analog (voltage divider) | Resistance range: 1 kΩ–1 MΩ | Supply: 3.3 V or 5 V | Interface: ESP32 ADC pin.
            </SectionCard>

            <SectionCard number="2" title="How it Works">
                The LDR is wired in a <strong className="text-surface-200">voltage divider</strong> with a fixed resistor (typically 10 kΩ). As light increases, the LDR's resistance drops, causing the midpoint voltage to rise. The ESP32 reads this midpoint voltage via its 12-bit ADC (GPIO 32–39 are input-only ADC pins), producing a value from <strong className="text-surface-200">0 (dark) to 4095 (bright)</strong>. The value can be mapped to a percentage or lux estimate.
            </SectionCard>

            <SectionCard number="3" title="Why it is Used with ESP32">
                The ESP32 has a built-in 12-bit SAR ADC on multiple pins, making it straightforward to read the LDR voltage without any external conversion chip. Using <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">analogRead()</code>, the ESP32 can sample thousands of times per second. Combined with Wi-Fi, readings can be streamed to a cloud dashboard to create smart lighting systems or solar tracking logs.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Automatic street and garden lighting (dusk-to-dawn control)',
                        'Daylight harvesting in smart building energy systems',
                        'Solar panel tilt and orientation tracking',
                        'Plant sunlight exposure monitoring in smart gardens',
                        'Display brightness auto-adjustment in embedded UIs',
                        'Photography light meter projects',
                    ].map(app => (
                        <li key={app} className="flex items-start gap-2">
                            <span className="text-esp32 mt-0.5 shrink-0">▸</span>
                            <span>{app}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example with ESP32">
                Wire: <strong className="text-surface-200">3.3 V → LDR → midpoint → 10 kΩ → GND</strong>. Connect the midpoint to <strong className="text-surface-200">GPIO 34</strong> (ADC1_CH6). Upload this sketch to read light level and control an LED:
                <CodeSnippet>{`#define LDR_PIN   34   // ADC input
#define LED_PIN   2    // Built-in LED

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  int rawValue = analogRead(LDR_PIN);  // 0 (dark) – 4095 (bright)
  int percent  = map(rawValue, 0, 4095, 0, 100);

  Serial.printf("Light Level: %d%%  (raw: %d)\\n", percent, rawValue);

  // Turn LED on when dark (below 30%)
  if (percent < 30) {
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }

  delay(500);
}`}</CodeSnippet>
            </SectionCard>

            {/* Navigation */}
            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/sensors/pir" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    PIR Motion Sensor
                </Link>
                <Link to="/tutorial/esp32/sensors/gas" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    Gas Sensor
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
