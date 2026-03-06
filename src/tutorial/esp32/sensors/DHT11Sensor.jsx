import { Link } from 'react-router-dom'

/* ── Shared helpers ── */
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
   DHT11 Temperature & Humidity Sensor — Full Page
═══════════════════════════════════════════════ */
export default function DHT11Sensor() {
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
                <span className="text-surface-300 font-medium">DHT11</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                DHT11 <span className="text-esp32">Temperature & Humidity Sensor</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                A low-cost digital sensor for measuring ambient temperature and relative humidity, widely used in IoT and embedded systems.
            </p>

            <PlaceholderImage label="DHT11 sensor module — front view and pinout (VCC, DATA, GND)" />

            {/* Section 1 */}
            <SectionCard number="1" title="What is this Sensor?">
                The <strong className="text-surface-200">DHT11</strong> is a digital temperature and humidity sensor with a built-in ADC and a single-wire serial interface. It consists of a resistive humidity sensing element and a NTC thermistor (temperature-sensing element). The on-chip signal processing circuit outputs pre-calibrated digital data directly, eliminating the need for external analog conversion.
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Temperature: 0–50 °C (±2 °C) | Humidity: 20–80% RH (±5%) | Supply voltage: 3.3 V / 5 V | Interface: Single-wire digital.
            </SectionCard>

            {/* Section 2 */}
            <SectionCard number="2" title="How it Works">
                When triggered, the DHT11 starts a measurement cycle. The MCU pulls the data line LOW for at least 18 ms to signal the start. The DHT11 responds by pulling LOW for 80 µs then HIGH for 80 µs. It then transmits <strong className="text-surface-200">40 bits</strong> of data — 8 bits of integer humidity, 8 bits of decimal humidity, 8 bits of integer temperature, 8 bits of decimal temperature, and 8 bits checksum — using pulse-width encoding (26–28 µs = 0, 70 µs = 1).
            </SectionCard>

            {/* Section 3 */}
            <SectionCard number="3" title="Why it is Used with ESP32">
                The ESP32's GPIO pins can toggle fast enough to meet the DHT11's tight timing requirements. The sensor runs on both 3.3 V and 5 V, making it compatible with the ESP32's power rails. Popular libraries like <code className="text-esp32 bg-esp32/10 px-1 rounded">DHT sensor library</code> by Adafruit abstract the timing protocol, letting developers read temperature and humidity in a single function call. The ESP32's Wi-Fi and MQTT support then makes it trivial to publish the readings to the cloud.
            </SectionCard>

            {/* Section 4 */}
            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Indoor climate monitoring dashboards',
                        'Smart greenhouse and agricultural automation',
                        'HVAC system feedback and control loops',
                        'Weather station projects',
                        'Server room environmental alerting',
                        'Home automation with humidity-triggered ventilation',
                    ].map(app => (
                        <li key={app} className="flex items-start gap-2">
                            <span className="text-esp32 mt-0.5 shrink-0">▸</span>
                            <span>{app}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            {/* Section 5 */}
            <SectionCard number="5" title="Example with ESP32">
                Connect <strong className="text-surface-200">VCC → 3.3 V</strong>, <strong className="text-surface-200">DATA → GPIO 4</strong> (with a 10 kΩ pull-up resistor to 3.3 V), <strong className="text-surface-200">GND → GND</strong>. Install the <em>DHT sensor library</em> by Adafruit from the Arduino library manager, then upload this sketch:
                <CodeSnippet>{`#include <DHT.h>

#define DHTPIN  4        // GPIO pin connected to DATA
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();
}

void loop() {
  delay(2000);  // DHT11 sampling rate: max 1 Hz

  float humidity    = dht.readHumidity();
  float temperature = dht.readTemperature(); // Celsius

  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.printf("Temp: %.1f°C  |  Humidity: %.1f%%\\n",
                temperature, humidity);
}`}</CodeSnippet>
            </SectionCard>

            {/* Navigation */}
            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/sensors" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    All Sensors
                </Link>
                <Link to="/tutorial/esp32/sensors/ultrasonic" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    Ultrasonic Sensor
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
