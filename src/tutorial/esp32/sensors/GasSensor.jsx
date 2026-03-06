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
   Gas Sensor (MQ-2) — Full Page
═══════════════════════════════════════════════ */
export default function GasSensor() {
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
                <span className="text-surface-300 font-medium">Gas Sensor</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                Gas Sensor <span className="text-esp32">MQ-2</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                A semiconductor gas sensor capable of detecting LPG, propane, methane, hydrogen, alcohol, smoke, and other combustible gases — essential for IoT safety systems.
            </p>

            <PlaceholderImage label="MQ-2 gas sensor module — analog output (AOUT) and digital output (DOUT) pins" />

            <SectionCard number="1" title="What is this Sensor?">
                The <strong className="text-surface-200">MQ-2</strong> is a chemiresistive gas sensor using a tin dioxide (SnO₂) sensing element. In clean air, the SnO₂ has high resistance. When combustible gases are present, gas molecules adsorb on the surface and reduce its resistance — the greater the gas concentration, the lower the resistance, and the higher the analog output voltage.
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Supply: 5 V | Analog output: 0–5 V (use voltage divider for ESP32) | Digital output: TTL HIGH/LOW | Detects: LPG, propane, methane, H₂, alcohol, smoke | Warm-up time: ~20 s.
            </SectionCard>

            <SectionCard number="2" title="How it Works">
                The MQ-2 module has a built-in <strong className="text-surface-200">load resistor</strong> that forms a voltage divider with the sensing element. As gas concentration rises, sensing resistance drops, causing the AOUT voltage to rise. A built-in <strong className="text-surface-200">LM393 comparator</strong> compares AOUT against a reference set by the onboard potentiometer: when AOUT exceeds the threshold, DOUT goes LOW (alert). The ESP32 reads AOUT via ADC and DOUT via a digital pin simultaneously.
            </SectionCard>

            <SectionCard number="3" title="Why it is Used with ESP32">
                The MQ-2 provides both analog (concentration level) and digital (threshold alarm) outputs, giving the ESP32 two ways to respond. The analog reading allows the ESP32 to calculate approximate concentrations using <strong className="text-surface-200">Rs/Ro calibration curves</strong> from the datasheet. The digital alarm pin can trigger an interrupt to wake the ESP32 from deep sleep for ultra-low-power alert systems. Wi-Fi + MQTT integration enables instant push notifications on gas detection.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Home LPG/natural gas leak detector with automatic valve shutoff',
                        'Industrial factory safety monitoring systems',
                        'Smart kitchen safety — alert and exhaust fan automation',
                        'Underground parking CO and combustible gas monitors',
                        'Air quality index (AQI) monitoring stations',
                        'Exhaust gas analysis in automotive diagnostics',
                    ].map(app => (
                        <li key={app} className="flex items-start gap-2">
                            <span className="text-esp32 mt-0.5 shrink-0">▸</span>
                            <span>{app}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example with ESP32">
                Connect MQ-2 <strong className="text-surface-200">VCC → 5 V</strong>, <strong className="text-surface-200">GND → GND</strong>. Use a <strong className="text-surface-200">voltage divider (2 kΩ + 1 kΩ)</strong> on AOUT → <strong className="text-surface-200">GPIO 35</strong> (ADC). Connect <strong className="text-surface-200">DOUT → GPIO 26</strong>. Allow 20 s warm-up before reading.
                <CodeSnippet>{`#define GAS_AOUT 35   // Analog – gas concentration
#define GAS_DOUT 26   // Digital – threshold alarm (LOW = danger)
#define BUZZER   27

void setup() {
  Serial.begin(115200);
  pinMode(GAS_DOUT, INPUT);
  pinMode(BUZZER, OUTPUT);
  Serial.println("Warming up MQ-2 sensor (20 seconds)...");
  delay(20000); // Required warm-up time
  Serial.println("MQ-2 ready.");
}

void loop() {
  int rawValue  = analogRead(GAS_AOUT);   // 0–4095
  bool alarm    = !digitalRead(GAS_DOUT); // LOW = gas detected

  Serial.printf("Gas Level: %d / 4095 | Alarm: %s\\n",
                rawValue, alarm ? "YES" : "No");

  if (alarm) {
    digitalWrite(BUZZER, HIGH);  // Sound buzzer
    // mqtt.publish("home/gas/alert", "1");
  } else {
    digitalWrite(BUZZER, LOW);
  }

  delay(1000);
}`}</CodeSnippet>
            </SectionCard>

            {/* Navigation */}
            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/sensors/ldr" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    LDR Light Sensor
                </Link>
                <Link to="/tutorial/esp32/sensors" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    All Sensors
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
