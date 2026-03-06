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
   Ultrasonic Sensor (HC-SR04) — Full Page
═══════════════════════════════════════════════ */
export default function UltrasonicSensor() {
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
                <span className="text-surface-300 font-medium">Ultrasonic</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                Ultrasonic Sensor <span className="text-esp32">HC-SR04</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                A non-contact distance measurement sensor using ultrasonic sound waves, capable of detecting objects from 2 cm to 400 cm.
            </p>

            <PlaceholderImage label="HC-SR04 ultrasonic sensor — front view with TRIG and ECHO pins labeled" />

            <SectionCard number="1" title="What is this Sensor?">
                The <strong className="text-surface-200">HC-SR04</strong> is an ultrasonic ranging module that measures distance by emitting 40 kHz ultrasonic pulses and measuring the time it takes for the echo to return. It has four pins: VCC, TRIG (trigger input), ECHO (echo output), and GND.
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Range: 2–400 cm | Accuracy: ~3 mm | Operating voltage: 5 V | Measuring angle: 15° | Interface: 2 digital GPIO pins.
            </SectionCard>

            <SectionCard number="2" title="How it Works">
                A 10 µs HIGH pulse on the TRIG pin causes the sensor to emit <strong className="text-surface-200">8 bursts of 40 kHz sound</strong>. When the sound bounces off an object and returns, the ECHO pin goes HIGH for a duration proportional to the travel time. Distance is calculated as:
                <br /><br />
                <code className="text-esp32 bg-esp32/10 px-2 py-1 rounded text-xs">Distance (cm) = (ECHO pulse duration in µs × 0.034) / 2</code>
                <br /><br />
                Dividing by 2 accounts for the round-trip travel of the sound wave (to the object and back).
            </SectionCard>

            <SectionCard number="3" title="Why it is Used with ESP32">
                The ESP32's <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">pulseIn()</code> function accurately captures the ECHO pulse duration in microseconds. Because the HC-SR04 normally requires 5 V but its ECHO pin outputs 5 V logic, a simple voltage divider (1 kΩ + 2 kΩ) is used to bring ECHO down to 3.3 V safe for the ESP32. Libraries like <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">NewPing</code> simplify timing and add features like median filtering.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Smart parking systems (vehicle presence detection)',
                        'Robotic obstacle avoidance and navigation',
                        'Water tank level monitoring and auto-pump control',
                        'People counters at building entrances',
                        'Industrial conveyor belt object detection',
                        'Visitor detection for interactive art installations',
                    ].map(app => (
                        <li key={app} className="flex items-start gap-2">
                            <span className="text-esp32 mt-0.5 shrink-0">▸</span>
                            <span>{app}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example with ESP32">
                Connect <strong className="text-surface-200">VCC → 5 V</strong>, <strong className="text-surface-200">TRIG → GPIO 5</strong>, <strong className="text-surface-200">ECHO → GPIO 18</strong> (via voltage divider), <strong className="text-surface-200">GND → GND</strong>. Upload this sketch:
                <CodeSnippet>{`#define TRIG_PIN 5
#define ECHO_PIN 18

void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}

void loop() {
  // Send a 10µs trigger pulse
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  // Measure the echo pulse duration
  long duration = pulseIn(ECHO_PIN, HIGH);

  // Calculate distance in cm
  float distance = (duration * 0.034) / 2.0;

  Serial.printf("Distance: %.1f cm\\n", distance);
  delay(500);
}`}</CodeSnippet>
            </SectionCard>

            {/* Navigation */}
            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/sensors/dht11" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    DHT11 Sensor
                </Link>
                <Link to="/tutorial/esp32/sensors/pir" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    PIR Motion Sensor
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
