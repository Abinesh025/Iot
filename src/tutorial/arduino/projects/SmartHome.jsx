import { Link } from 'react-router-dom'

const code = `// IoT Smart Home Dashboard
// Arduino Mega + ESP8266 + DHT22 + PIR + Relay + OLED
// This sketch runs on Arduino Mega. ESP8266 handles WiFi separately.

#include <DHT.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define DHTPIN     22
#define DHTTYPE    DHT22
#define PIR_PIN    24
#define RELAY_PIN  26

DHT dht(DHTPIN, DHTTYPE);
Adafruit_SSD1306 oled(128, 64, &Wire, -1);

bool autoLight = false;  // Auto light mode based on PIR

void updateOLED(float temp, float hum, bool motion, bool relay) {
  oled.clearDisplay();
  oled.setTextSize(1);
  oled.setTextColor(SSD1306_WHITE);

  oled.setCursor(0, 0);  oled.print("Temp: "); oled.print(temp, 1); oled.print(" C");
  oled.setCursor(0, 12); oled.print("Humi: "); oled.print(hum, 1); oled.print(" %");
  oled.setCursor(0, 24); oled.print("Motion: "); oled.print(motion ? "YES" : "NO");
  oled.setCursor(0, 36); oled.print("Light:  "); oled.print(relay ? "ON" : "OFF");
  oled.display();
}

void setup() {
  Serial.begin(9600);
  Serial1.begin(9600);   // ESP8266 on hardware Serial1 (Mega)
  dht.begin();
  pinMode(PIR_PIN, INPUT);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);

  oled.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  oled.clearDisplay();
  oled.setTextSize(2);
  oled.setCursor(0, 20);
  oled.print("Smart Home");
  oled.display();
  delay(2000);
}

void loop() {
  float temp = dht.readTemperature();
  float hum  = dht.readHumidity();
  bool motion = digitalRead(PIR_PIN);

  // Auto light: turn on if motion detected
  if (autoLight) {
    digitalWrite(RELAY_PIN, motion ? HIGH : LOW);
  }

  // Read commands from ESP8266 (WiFi dashboard)
  if (Serial1.available()) {
    String cmd = Serial1.readStringUntil('\\n');
    cmd.trim();
    if (cmd == "LIGHT_ON")  { autoLight = false; digitalWrite(RELAY_PIN, HIGH); }
    if (cmd == "LIGHT_OFF") { autoLight = false; digitalWrite(RELAY_PIN, LOW);  }
    if (cmd == "AUTO")      { autoLight = true; }
  }

  bool relayState = digitalRead(RELAY_PIN);
  updateOLED(temp, hum, motion, relayState);

  // Send data to ESP8266 for cloud dashboard
  Serial1.print("T:");  Serial1.print(temp);
  Serial1.print(",H:"); Serial1.print(hum);
  Serial1.print(",M:"); Serial1.print(motion);
  Serial1.print(",R:"); Serial1.println(relayState);

  delay(2000);
}`.trim()

export default function SmartHome() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <Link to="/tutorial/arduino/projects/advanced" className="hover:text-primary-400 transition-colors">Projects — Advanced</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">IoT Smart Home</span>
            </nav>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold border border-red-500/20 uppercase tracking-wide">Advanced</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">🏠 IoT Smart Home Dashboard</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Build a web-controlled smart home system! Arduino Mega reads sensors and controls a relay,
                while ESP8266 creates a WiFi dashboard for remote monitoring and control.
                This project combines <strong className="text-surface-300">sensors, actuators, wireless communication, and cloud connectivity</strong>.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">🏠</div>
                <p className="text-surface-500 text-sm">IoT Smart Home System Diagram</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Mega + ESP8266 + DHT22 + PIR + Relay + OLED</p>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How to architect a multi-chip IoT system (Arduino + ESP8266)',
                        'How to control a relay module to switch mains-voltage appliances safely',
                        'How to implement auto-control and manual override logic',
                        'How to use hardware Serial1 on Arduino Mega to communicate with ESP8266',
                        'How to design a sensor data pipeline from hardware to cloud dashboard',
                        'How to parse and respond to string commands over serial',
                    ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-surface-300 text-sm">
                            <span className="text-green-400 mt-0.5">✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Components Required */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">🛠️ Components Required</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { name: 'Arduino Mega 2560', qty: '×1', note: 'Needed for multiple hardware Serial ports' },
                        { name: 'ESP8266 (NodeMCU)', qty: '×1', note: 'Handles WiFi and web dashboard' },
                        { name: 'DHT22 Sensor', qty: '×1', note: 'Temperature and humidity' },
                        { name: 'PIR Sensor (HC-SR501)', qty: '×1', note: 'Motion detection' },
                        { name: 'Relay Module (5V)', qty: '×1', note: 'Controls lights or appliances' },
                        { name: 'OLED SSD1306 (I2C)', qty: '×1', note: 'Local status display' },
                        { name: 'Breadboard + Wires', qty: '×1', note: 'For prototyping connections' },
                        { name: 'USB Cable (Type-B)', qty: '×1', note: 'For Mega + micro-USB for ESP8266' },
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

            {/* Circuit Connection */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">🔌 Circuit Connection</h2>
                <ol className="space-y-3">
                    {[
                        'DHT22 DATA → Mega pin 22 + 10kΩ pull-up to 5V | VCC → 5V | GND → GND',
                        'PIR Sensor OUT → Mega pin 24 | VCC → 5V | GND → GND',
                        'Relay IN → Mega pin 26 | VCC → 5V | GND → GND (use relay NO/COM terminals for load)',
                        'OLED SDA → Mega pin 20 (SDA) | SCL → pin 21 (SCL) | VCC → 3.3V or 5V | GND → GND',
                        'ESP8266 TX → Mega Serial1 RX (pin 19) | ESP8266 RX → Mega Serial1 TX (pin 18) via 1kΩ+2kΩ divider',
                        '⚠️ SAFETY: Never connect relay load terminals while Arduino is powered via USB without proper isolation.',
                    ].map((step, i) => (
                        <li key={i} className="flex items-start gap-4 p-3 rounded-xl bg-surface-900/30 border border-surface-800/40">
                            <span className="shrink-0 w-7 h-7 rounded-full bg-primary-500/10 text-primary-400 text-xs font-bold flex items-center justify-center border border-primary-500/20">{i + 1}</span>
                            <p className="text-surface-300 text-sm leading-relaxed">{step}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Code */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">🖥️ Arduino Code</h2>
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 mb-4">
                    <p className="text-red-300 text-sm font-semibold mb-1">⚠️ Two Sketches Required</p>
                    <p className="text-surface-400 text-sm">This project uses two separate programs: one uploaded to Arduino Mega (shown below) and one to the ESP8266 (NodeMCU) that serves the web dashboard. Flash the Mega first, then set up the ESP8266 with a separate WiFi server sketch.</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">smart_home_mega.ino</span>
                        <span className="text-xs text-red-400">Arduino C++ (Mega)</span>
                    </div>
                    <pre className="p-5 bg-surface-900/60 overflow-x-auto text-sm leading-relaxed">
                        <code className="text-surface-200 font-mono">{code}</code>
                    </pre>
                </div>
            </section>

            {/* How It Works */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">⚙️ How It Works</h2>
                <div className="space-y-4 text-surface-300 text-sm leading-relaxed">
                    <p>
                        The Arduino Mega is the <strong className="text-surface-200">sensor hub and actuator controller</strong>. It reads DHT22 and PIR sensors, controls the relay, and updates the OLED every 2 seconds.
                    </p>
                    <p>
                        In automatic mode, PIR motion detection controls the relay (light on when motion detected).
                        The ESP8266 sends commands over serial (<code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">LIGHT_ON</code>, <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">LIGHT_OFF</code>, <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">AUTO</code>) to override or restore auto mode.
                    </p>
                    <p>
                        The Mega sends sensor data back to ESP8266 every cycle. The ESP8266 serves a simple HTML dashboard accessible on your local WiFi network where you can monitor and control everything from your browser.
                    </p>
                </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Advanced Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'Relay safety first', detail: 'Use the relay\'s NO (Normally Open) and COM terminals. Never touch relay load terminals when mains power is connected. Consider optocoupler isolation for production.' },
                        { tip: 'ESP8266 voltage levels', detail: 'ESP8266 GPIO pins are 3.3V. Never connect them directly to 5V Arduino signals. Always use a logic level converter or voltage divider.' },
                        { tip: 'Extend to MQTT/cloud', detail: 'Replace the simple serial dashboard with MQTT and connect to ThingSpeak, Blynk, or Home Assistant for a professional IoT setup.' },
                        { tip: 'Watchdog timer', detail: 'For 24/7 deployments, implement a software watchdog timer on the Mega to auto-reset if the loop hangs. Use the Watchdog.h library.' },
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

            {/* Footer nav */}
            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between flex-wrap gap-4">
                <Link to="/tutorial/arduino/projects/intermediate/bluetooth-chat" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Bluetooth Chat
                </Link>
                <Link to="/tutorial/arduino/projects/advanced/gps-tracker" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Next: GPS Tracker
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
