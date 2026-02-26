import { Link } from 'react-router-dom'

const code = `// Plant Monitoring System
// Soil Moisture → A0, LDR → A1, DHT11 → pin 7
// Water Pump via Relay IN → pin 6

#include <DHT.h>
#include <SoftwareSerial.h>

#define DHTPIN    7
#define DHTTYPE   DHT11
#define RELAY_PIN 6
#define SOIL_PIN  A0
#define LDR_PIN   A1
#define SOIL_DRY  700
#define SOIL_WET  300

DHT dht(DHTPIN, DHTTYPE);
SoftwareSerial esp(10, 11);

void setup() {
  Serial.begin(9600);
  esp.begin(9600);
  dht.begin();
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  Serial.println("Plant Monitor Ready!");
}

void loop() {
  int soilRaw  = analogRead(SOIL_PIN);
  int lightRaw = analogRead(LDR_PIN);
  float temp   = dht.readTemperature();
  float hum    = dht.readHumidity();

  int soilPct  = constrain(map(soilRaw, SOIL_DRY, SOIL_WET, 0, 100), 0, 100);
  int lightPct = map(lightRaw, 0, 1023, 0, 100);

  Serial.print("Soil: "); Serial.print(soilPct); Serial.print("% ");
  Serial.print("Light: "); Serial.print(lightPct); Serial.print("% ");
  Serial.print("Temp: "); Serial.print(temp); Serial.print("C ");
  Serial.print("Hum: "); Serial.print(hum); Serial.println("%");

  // Auto-water: pump ON if dry (<30%), OFF if sufficiently wet (>60%)
  if (soilPct < 30) {
    digitalWrite(RELAY_PIN, HIGH);
    Serial.println("Watering plant...");
  } else if (soilPct > 60) {
    digitalWrite(RELAY_PIN, LOW);
  }

  // Send to ESP8266 for MQTT
  esp.print("S:"); esp.print(soilPct);
  esp.print(",L:"); esp.print(lightPct);
  esp.print(",T:"); esp.print(temp);
  esp.print(",H:"); esp.println(hum);

  delay(10000);
}`.trim()

export default function PlantMonitor() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <Link to="/tutorial/arduino/projects/advanced" className="hover:text-primary-400 transition-colors">Projects — Advanced</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Plant Monitoring System</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold border border-red-500/20 uppercase tracking-wide">Advanced</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">🌱 Plant Monitoring System</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Build an automated plant care system that monitors soil moisture, light level, temperature, and humidity.
                When the soil dries out it triggers a water pump via relay, and publishes all data to an MQTT cloud
                dashboard via ESP8266 — a complete <strong className="text-surface-300">closed-loop IoT control system</strong>.
            </p>

            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">🌱</div>
                <p className="text-surface-500 text-sm">Plant Monitoring System Circuit</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Uno + Soil + LDR + DHT11 + Relay + ESP8266</p>
            </div>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How capacitive soil moisture sensors work and how to calibrate them',
                        'How to use an LDR (Light Dependent Resistor) to measure ambient light level',
                        'How to implement hysteresis-based auto-control (pump on/off thresholds)',
                        'How analogRead() and map() convert raw ADC values to meaningful percentages',
                        'How to relay sensor data to a WiFi module for cloud MQTT publishing',
                    ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-surface-300 text-sm">
                            <span className="text-green-400 mt-0.5">✓</span>{item}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">🛠️ Components Required</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { name: 'Arduino Uno', qty: '×1', note: 'Central controller' },
                        { name: 'Soil Moisture Sensor', qty: '×1', note: 'Capacitive type preferred over resistive' },
                        { name: 'LDR (Photoresistor)', qty: '×1', note: 'With 10kΩ pull-down resistor' },
                        { name: 'DHT11 Sensor', qty: '×1', note: 'Temperature and humidity' },
                        { name: '5V Relay Module', qty: '×1', note: 'Controls the water pump' },
                        { name: 'Mini Water Pump (5V)', qty: '×1', note: 'Submersible type for pots' },
                        { name: 'ESP8266 NodeMCU', qty: '×1', note: 'WiFi + MQTT publishing' },
                        { name: 'Silicone Tubing', qty: '×1', note: 'To direct water from reservoir to plant' },
                    ].map((c) => (
                        <div key={c.name} className="flex items-start gap-3 p-3 rounded-xl bg-surface-900/40 border border-surface-800/50">
                            <span className="text-primary-400 mt-0.5 text-lg">⚡</span>
                            <div>
                                <p className="text-surface-100 text-sm font-semibold">{c.name} <span className="text-surface-500 font-normal">{c.qty}</span></p>
                                <p className="text-surface-500 text-xs mt-0.5">{c.note}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">🔌 Circuit Connection</h2>
                <ol className="space-y-3">
                    {[
                        'Soil Moisture Sensor AOUT → Arduino A0 | VCC → 5V | GND → GND',
                        'LDR one leg → Arduino A1 and 10kΩ resistor to GND | Other LDR leg → 5V (voltage divider)',
                        'DHT11 DATA → pin 7 + 10kΩ pull-up to 5V | VCC → 5V | GND → GND',
                        'Relay IN → pin 6 | VCC → 5V | GND → GND. Connect pump to Relay COM and NO terminals.',
                        'ESP8266 TX → pin 10 (SoftSerial RX) via 1kΩ+2kΩ voltage divider | RX → pin 11',
                    ].map((step, i) => (
                        <li key={i} className="flex items-start gap-4 p-3 rounded-xl bg-surface-900/30 border border-surface-800/40">
                            <span className="shrink-0 w-7 h-7 rounded-full bg-primary-500/10 text-primary-400 text-xs font-bold flex items-center justify-center border border-primary-500/20">{i + 1}</span>
                            <p className="text-surface-300 text-sm leading-relaxed">{step}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">🖥️ Arduino Code</h2>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">plant_monitor.ino</span>
                        <span className="text-xs text-red-400">Arduino C++</span>
                    </div>
                    <pre className="p-5 bg-surface-900/60 overflow-x-auto text-sm leading-relaxed">
                        <code className="text-surface-200 font-mono">{code}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">⚙️ How It Works</h2>
                <div className="space-y-4 text-surface-300 text-sm leading-relaxed">
                    <p>
                        The soil moisture sensor outputs an analog voltage that decreases as moisture increases.
                        <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">map()</code> converts the raw ADC value to a 0–100% scale using calibrated dry/wet thresholds.
                    </p>
                    <p>
                        A <strong className="text-surface-200">hysteresis control loop</strong> prevents the pump from rapid cycling:
                        the pump activates below 30% moisture and only turns off above 60%. This is used in real industrial control systems.
                    </p>
                    <p>
                        Every 10 seconds, all readings are forwarded via SoftwareSerial to the ESP8266, which publishes them to an MQTT broker for remote monitoring and alerts.
                    </p>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Advanced Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'Calibrate the soil sensor', detail: 'Read the sensor with completely dry soil (SOIL_DRY) and submerged in water (SOIL_WET). Update the #define values to match your sensor.' },
                        { tip: 'Use capacitive sensors', detail: 'Resistive sensors corrode quickly. Capacitive sensors (flat PCB, no exposed metal) last far longer for permanent installations.' },
                        { tip: 'Add a pump timeout', detail: 'Always add a maximum watering timer (e.g., 15 seconds) so the pump cannot run indefinitely if the sensor fails or reservoir runs dry.' },
                        { tip: 'MQTT broker options', detail: 'Use free brokers like HiveMQ Cloud or a local Mosquitto broker. Pair with Home Assistant for full smart-home integration.' },
                    ].map((t) => (
                        <div key={t.tip} className="flex items-start gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/15">
                            <span className="text-yellow-400 text-lg shrink-0">💡</span>
                            <div>
                                <p className="text-surface-200 text-sm font-semibold">{t.tip}</p>
                                <p className="text-surface-400 text-sm mt-0.5">{t.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between flex-wrap gap-4">
                <Link to="/tutorial/arduino/projects/advanced/gps-tracker" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    GPS Tracker
                </Link>
                <Link to="/tutorial/arduino/projects/advanced/security-system" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Next: Security System
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
