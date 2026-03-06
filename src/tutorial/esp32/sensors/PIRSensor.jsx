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
   PIR Motion Sensor (HC-SR501) — Full Page
═══════════════════════════════════════════════ */
export default function PIRSensor() {
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
                <span className="text-surface-300 font-medium">PIR</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                PIR Motion Sensor <span className="text-esp32">HC-SR501</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                A passive infrared sensor that detects motion by sensing changes in infrared radiation emitted by warm bodies — no active transmission required.
            </p>

            <PlaceholderImage label="HC-SR501 PIR sensor — dome lens, sensitivity & delay adjustment potentiometers" />

            <SectionCard number="1" title="What is this Sensor?">
                The <strong className="text-surface-200">HC-SR501</strong> is a passive infrared (PIR) motion detector. "Passive" means it does not emit any energy — it only detects changes in the infrared radiation emitted by moving warm bodies within its field of view. When movement is detected, the digital output pin goes <strong className="text-surface-200">HIGH</strong> for an adjustable hold time.
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Supply: 5–20 V | Output: Digital HIGH/LOW (3.3 V compatible) | Detection range: up to 7 m | Field of view: ~110° | Hold time: adjustable 3 s – 5 min.
            </SectionCard>

            <SectionCard number="2" title="How it Works">
                The dome-shaped Fresnel lens focuses infrared radiation onto two parallel <strong className="text-surface-200">pyroelectric sensor elements</strong> wired in opposition. When a warm body (human) moves across the field of view, it creates an imbalance between the two elements as radiation hits first one, then the other. The BISS0001 IC amplifies this differential signal and drives the OUT pin HIGH. Two onboard potentiometers allow tuning of <strong className="text-surface-200">sensitivity</strong> (range) and <strong className="text-surface-200">time delay</strong> (how long OUT stays HIGH after motion).
            </SectionCard>

            <SectionCard number="3" title="Why it is Used with ESP32">
                The HC-SR501's digital output is directly readable by the ESP32's <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">digitalRead()</code> — no ADC or library needed. The ESP32 can also use its deep-sleep mode and wake on a GPIO interrupt from the PIR sensor, consuming only ~10 µA while idle and waking only when motion is detected. This makes the combination ideal for battery-powered security devices.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Security alarm systems with SMS or MQTT alerts',
                        'Automatic lighting — lights on when entering a room',
                        'Occupancy detection in smart building energy management',
                        'Wildlife camera traps triggered by animal movement',
                        'Touchless display wake-up for kiosk systems',
                        'Visitor counters and people flow analytics',
                    ].map(app => (
                        <li key={app} className="flex items-start gap-2">
                            <span className="text-esp32 mt-0.5 shrink-0">▸</span>
                            <span>{app}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example with ESP32">
                Connect <strong className="text-surface-200">VCC → 5 V</strong>, <strong className="text-surface-200">OUT → GPIO 13</strong>, <strong className="text-surface-200">GND → GND</strong>. The OUT pin is 3.3 V compatible despite the 5 V supply. Upload this sketch to print a motion alert and send an MQTT message:
                <CodeSnippet>{`#define PIR_PIN 13

void setup() {
  Serial.begin(115200);
  pinMode(PIR_PIN, INPUT);
  Serial.println("PIR sensor ready. Waiting for motion...");
}

void loop() {
  int motionDetected = digitalRead(PIR_PIN);

  if (motionDetected == HIGH) {
    Serial.println("🚨 Motion Detected!");
    // Add MQTT publish or buzzer trigger here
    delay(1000); // debounce
  }
}`}</CodeSnippet>
            </SectionCard>

            {/* Navigation */}
            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/sensors/ultrasonic" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Ultrasonic Sensor
                </Link>
                <Link to="/tutorial/esp32/sensors/ldr" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    LDR Light Sensor
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
