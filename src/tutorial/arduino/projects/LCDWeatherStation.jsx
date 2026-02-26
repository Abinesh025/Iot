import { Link } from 'react-router-dom'

const code = `// LCD Weather Station
// Libraries required: DHT by Adafruit, LiquidCrystal_I2C by Frank de Brabander
// DHT22 Data pin → Arduino pin 7
// LCD SCL → Arduino A5, LCD SDA → Arduino A4

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

#define DHTPIN  7
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);  // I2C address 0x27, 16 cols, 2 rows

void setup() {
  lcd.init();
  lcd.backlight();
  dht.begin();

  lcd.setCursor(0, 0);
  lcd.print("Weather Station");
  lcd.setCursor(0, 1);
  lcd.print("Starting...");
  delay(2000);
}

void loop() {
  float humidity    = dht.readHumidity();
  float temperature = dht.readTemperature();

  if (isnan(humidity) || isnan(temperature)) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Sensor Error!");
    delay(2000);
    return;
  }

  lcd.clear();

  // Row 0: Temperature
  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(temperature, 1);  // 1 decimal place
  lcd.print((char)223);       // Degree symbol
  lcd.print("C");

  // Row 1: Humidity
  lcd.setCursor(0, 1);
  lcd.print("Humi: ");
  lcd.print(humidity, 1);
  lcd.print("%");

  delay(3000);  // Update every 3 seconds
}`.trim()

export default function LCDWeatherStation() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <Link to="/tutorial/arduino/projects/intermediate" className="hover:text-primary-400 transition-colors">Projects — Intermediate</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">LCD Weather Station</span>
            </nav>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-semibold border border-yellow-500/20 uppercase tracking-wide">Intermediate</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">📺 LCD Weather Station</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Build a compact weather station that reads temperature and humidity from a DHT22 sensor
                and displays it on a 16×2 I2C LCD screen in real time.
                This project teaches you <strong className="text-surface-300">I2C communication</strong> and working with display modules.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">📺</div>
                <p className="text-surface-500 text-sm">LCD Weather Station Circuit</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Uno + DHT22 + 16×2 I2C LCD</p>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How to interface a 16×2 LCD display using the I2C protocol',
                        'How to use the LiquidCrystal_I2C library to display text',
                        'How to position text at specific rows and columns using setCursor()',
                        'How to combine a DHT22 sensor with an LCD display',
                        'How to print special characters (like the degree symbol °) on an LCD',
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
                        { name: 'Arduino Uno', qty: '×1', note: 'Any Arduino with I2C pins' },
                        { name: 'DHT22 Sensor', qty: '×1', note: 'More accurate than DHT11' },
                        { name: '16×2 LCD (I2C)', qty: '×1', note: 'I2C adapter simplifies wiring to 4 wires' },
                        { name: '10kΩ Resistor', qty: '×1', note: 'Pull-up for DHT22 data line' },
                        { name: 'Breadboard', qty: '×1', note: 'For connections' },
                        { name: 'Jumper Wires', qty: '×6', note: 'Male-to-male' },
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
                        'LCD VCC → Arduino 5V | LCD GND → Arduino GND',
                        'LCD SDA → Arduino A4 | LCD SCL → Arduino A5 (these are the I2C pins on Uno)',
                        'DHT22 VCC → Arduino 5V | DHT22 GND → Arduino GND',
                        'DHT22 DATA → Arduino pin 7 + connect 10kΩ resistor between DATA and 5V',
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
                    <p className="text-blue-300 text-sm font-semibold mb-1">📦 Libraries Required</p>
                    <p className="text-surface-400 text-sm">Install via Library Manager: <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">DHT sensor library</code> (Adafruit) and <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">LiquidCrystal I2C</code> (Frank de Brabander).</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">lcd_weather_station.ino</span>
                        <span className="text-xs text-yellow-400">Arduino C++</span>
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
                        The 16×2 I2C LCD communicates with the Arduino using the <strong className="text-surface-200">I2C protocol</strong> — a two-wire bus (SDA and SCL).
                        This reduces wiring from 12+ wires (parallel LCD) to just 4 wires total (VCC, GND, SDA, SCL).
                        The I2C module on the back of the LCD has a fixed address, typically <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">0x27</code>.
                    </p>
                    <p>
                        In <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">setup()</code>, we initialise the LCD and show a startup message.
                        In <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">loop()</code>, we read DHT22 data every 3 seconds, clear the display, and reprint the updated values.
                        <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">setCursor(col, row)</code> positions the text exactly where you want it.
                    </p>
                </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Beginner Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'LCD not displaying?', detail: 'Adjust the contrast using the small potentiometer on the back of the I2C module. Turn it slowly until text appears.' },
                        { tip: 'Wrong I2C address?', detail: 'If the display is blank, your I2C address may differ. Upload the I2C Scanner sketch to find the correct address.' },
                        { tip: 'lcd.clear() causes flicker', detail: 'For smoother updates, instead of clear(), overwrite specific positions with spaces using setCursor() + custom characters.' },
                        { tip: 'Extend it', detail: 'Add a third data point — heat index! DHT library provides a computeHeatIndex() function you can display on page 2 by scrolling.' },
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
                <Link to="/tutorial/arduino/projects/beginner/servo-sweep" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Servo Sweep
                </Link>
                <Link to="/tutorial/arduino/projects/intermediate/ultrasonic-range-finder" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Next: Ultrasonic Range Finder
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
