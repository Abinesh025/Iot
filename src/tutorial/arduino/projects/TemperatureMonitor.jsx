import { Link } from 'react-router-dom'

const code = `// Temperature Monitor using DHT11 Sensor
// Install DHT sensor library by Adafruit first!
// DHT11 Data Pin → Arduino pin 2

#include <DHT.h>

#define DHTPIN 2        // Data pin connected to pin 2
#define DHTTYPE DHT11   // Change to DHT22 if you use that sensor

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);   // Start serial communication
  dht.begin();          // Initialize the sensor
  Serial.println("DHT11 Temperature Monitor Started!");
}

void loop() {
  delay(2000);  // Wait 2 seconds between readings

  float humidity    = dht.readHumidity();
  float temperature = dht.readTemperature();  // Celsius

  // Check if readings are valid
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("ERROR: Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Humidity   : ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" °C");
  Serial.println("-------------------");
}`.trim()

export default function TemperatureMonitor() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <Link to="/tutorial/arduino/projects/beginner" className="hover:text-primary-400 transition-colors">Projects — Beginner</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Temperature Monitor</span>
            </nav>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20 uppercase tracking-wide">Beginner</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">🌡️ Temperature Monitor</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Read real-world temperature and humidity data using a DHT11 sensor and display it on the Serial Monitor.
                This project introduces you to <strong className="text-surface-300">sensors, libraries, and serial communication</strong> — key skills for any IoT project.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">🌡️</div>
                <p className="text-surface-500 text-sm">Temperature Monitor Circuit Diagram</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Uno + DHT11 Sensor + 10kΩ Pull-up Resistor</p>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How to install and use a third-party Arduino library (DHT by Adafruit)',
                        'How to read data from a digital sensor using a library function',
                        'How to use Serial.begin() and Serial.print() to send data to your computer',
                        'How to check for sensor errors using isnan()',
                        'How to use #define and #include preprocessor directives',
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
                        { name: 'Arduino Uno', qty: '×1', note: 'Any Arduino board works' },
                        { name: 'DHT11 Sensor', qty: '×1', note: 'Or DHT22 for higher accuracy' },
                        { name: '10kΩ Resistor', qty: '×1', note: 'Pull-up resistor for the data line' },
                        { name: 'Breadboard', qty: '×1', note: 'For easy connections' },
                        { name: 'Jumper Wires', qty: '×3', note: 'Male-to-male' },
                        { name: 'USB Cable', qty: '×1', note: 'Also used to read Serial output' },
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
                <p className="text-surface-400 text-sm mb-4">The DHT11 has 3 active pins. Looking at the front of the sensor (the plastic mesh side), from left to right:</p>
                <ol className="space-y-3">
                    {[
                        'DHT11 Pin 1 (VCC) → Connect to Arduino 5V pin.',
                        'DHT11 Pin 2 (DATA) → Connect to Arduino digital pin 2.',
                        'DHT11 Pin 4 (GND) → Connect to Arduino GND pin.',
                        'Add the 10kΩ resistor between the DATA pin (pin 2) and VCC (5V). This is a pull-up resistor that ensures stable readings.',
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
                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 mb-4">
                    <p className="text-blue-300 text-sm font-semibold mb-1">📦 Library Required</p>
                    <p className="text-surface-400 text-sm">In the Arduino IDE: go to <strong className="text-surface-200">Sketch → Include Library → Manage Libraries</strong>, search for <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">DHT sensor library</code> by Adafruit, and click Install.</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">temperature_monitor.ino</span>
                        <span className="text-xs text-green-400">Arduino C++</span>
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
                        The DHT11 sensor measures temperature and humidity and encodes the values as a digital signal on its DATA pin.
                        The <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">DHT</code> library does all the hard work of decoding this signal, giving you ready-to-use float values.
                    </p>
                    <p>
                        In <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">setup()</code>, we call <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">Serial.begin(9600)</code> to open a communication channel between the Arduino and your computer at 9600 baud (bits per second).
                    </p>
                    <p>
                        In <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">loop()</code>, every 2 seconds we call <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">dht.readHumidity()</code> and <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">dht.readTemperature()</code>.
                        If either returns NaN (Not a Number — meaning a bad read), we print an error. Otherwise, we print the values to the Serial Monitor.
                    </p>
                    <p>
                        Open the Serial Monitor in Arduino IDE (<strong className="text-surface-200">Tools → Serial Monitor</strong> or Ctrl+Shift+M) and set the baud rate to <strong className="text-surface-200">9600</strong> to see the output.
                    </p>
                </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Beginner Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'Wait before reading', detail: 'The DHT11 needs at least 2 seconds between readings. Calling it faster will give you NaN errors. The delay(2000) in the code handles this.' },
                        { tip: 'DHT11 vs DHT22', detail: 'DHT22 is more accurate but slightly more expensive. Just change #define DHTTYPE DHT11 to DHT22 and the library handles the rest.' },
                        { tip: 'Fahrenheit conversion', detail: 'Use dht.readTemperature(true) to get Fahrenheit directly, or calculate: float tempF = temperature * 9.0 / 5.0 + 32;' },
                        { tip: 'Check your baud rate', detail: 'If your Serial Monitor shows garbled text, make sure the baud rate dropdown in the monitor matches Serial.begin(9600).' },
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
                <Link to="/tutorial/arduino/projects/beginner/traffic-light" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Traffic Light Simulator
                </Link>
                <Link to="/tutorial/arduino/projects/beginner/servo-sweep" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Next: Servo Sweep
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
