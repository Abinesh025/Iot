import { Link } from 'react-router-dom'

const code = `// Ultrasonic Range Finder with OLED + Buzzer Alert
// HC-SR04 TRIG → pin 9, ECHO → pin 10
// OLED SSD1306 (I2C): SDA → A4, SCL → A5
// Passive Buzzer → pin 8

#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_W 128
#define SCREEN_H 64
#define OLED_ADDR 0x3C

#define TRIG_PIN   9
#define ECHO_PIN   10
#define BUZZER_PIN 8
#define ALERT_DIST 10  // Buzz if object closer than 10 cm

Adafruit_SSD1306 oled(SCREEN_W, SCREEN_H, &Wire, -1);

long measureDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH);
  return duration * 0.034 / 2;  // Convert to cm
}

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  if (!oled.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR)) {
    Serial.println("OLED not found!");
    while (true);
  }
  oled.clearDisplay();
  oled.setTextColor(SSD1306_WHITE);
}

void loop() {
  long distance = measureDistance();

  oled.clearDisplay();
  oled.setTextSize(2);
  oled.setCursor(0, 0);
  oled.print("Distance:");
  oled.setTextSize(3);
  oled.setCursor(10, 28);
  oled.print(distance);
  oled.print(" cm");
  oled.display();

  // Buzzer alert for close objects
  if (distance < ALERT_DIST) {
    tone(BUZZER_PIN, 1000, 200);
  }

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  delay(200);
}`.trim()

export default function UltrasonicRangeFinder() {
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
                <span className="text-surface-300 font-medium">Ultrasonic Range Finder</span>
            </nav>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-semibold border border-yellow-500/20 uppercase tracking-wide">Intermediate</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">📡 Ultrasonic Range Finder</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Measure distances using the HC-SR04 ultrasonic sensor and display results on an OLED screen.
                A buzzer alerts when an object gets too close. This project teaches you
                <strong className="text-surface-300"> pulse timing, OLED graphics, and audio output</strong>.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">📡</div>
                <p className="text-surface-500 text-sm">Ultrasonic Range Finder Circuit</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Uno + HC-SR04 + OLED SSD1306 + Passive Buzzer</p>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How the HC-SR04 sensor measures distance using ultrasonic pulses',
                        'How to calculate distance using the speed of sound formula',
                        'How to display graphics and text on an OLED SSD1306 display',
                        'How to generate tones with a passive buzzer using tone()',
                        'How to write reusable helper functions to organise your code',
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
                        { name: 'Arduino Uno', qty: '×1', note: 'Or any compatible board' },
                        { name: 'HC-SR04 Sensor', qty: '×1', note: 'Ultrasonic distance sensor' },
                        { name: 'OLED SSD1306', qty: '×1', note: '0.96" 128×64 I2C OLED display' },
                        { name: 'Passive Buzzer', qty: '×1', note: 'For proximity alert sounds' },
                        { name: 'Breadboard', qty: '×1', note: 'Half-size is sufficient' },
                        { name: 'Jumper Wires', qty: '×8', note: 'Male-to-male' },
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
                        'HC-SR04 VCC → Arduino 5V | HC-SR04 GND → Arduino GND',
                        'HC-SR04 TRIG → Arduino pin 9 | HC-SR04 ECHO → Arduino pin 10',
                        'OLED SSD1306 VCC → 3.3V or 5V | GND → GND | SDA → A4 | SCL → A5',
                        'Passive Buzzer positive pin → Arduino pin 8 | Buzzer GND → Arduino GND',
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
                    <p className="text-surface-400 text-sm">Install via Library Manager: <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">Adafruit SSD1306</code> and <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">Adafruit GFX Library</code>.</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">range_finder.ino</span>
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
                        The HC-SR04 sends a 10µs ultrasonic pulse from the TRIG pin.
                        The pulse bounces off an object and returns to the ECHO pin.
                        <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">pulseIn()</code> measures how long the ECHO pin stays HIGH (in microseconds).
                    </p>
                    <p>
                        Distance is calculated using: <strong className="text-surface-200">distance = duration × 0.034 / 2</strong>.
                        The 0.034 converts µs to cm (speed of sound ≈ 340 m/s), and dividing by 2 accounts for the round trip (there and back).
                    </p>
                    <p>
                        The result is displayed on the OLED with large text. If the measured distance is less than 10 cm,
                        <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">tone()</code> triggers a short beep on the buzzer.
                    </p>
                </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Beginner Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'Max reliable range', detail: 'HC-SR04 works best between 2 cm and 400 cm. Below 2 cm or above 4 m the readings become unreliable.' },
                        { tip: 'OLED address may vary', detail: 'Some OLED modules use address 0x3D instead of 0x3C. If the display is blank, try the I2C Scanner sketch to find your correct address.' },
                        { tip: 'Active vs Passive buzzer', detail: 'A passive buzzer needs tone() to produce sound (you choose the frequency). An active buzzer just needs HIGH/LOW. Make sure you use a passive one.' },
                        { tip: 'Smooth readings', detail: 'Take 5 measurements and average them to reduce noise and get more stable distance values.' },
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
                <Link to="/tutorial/arduino/projects/intermediate/lcd-weather-station" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    LCD Weather Station
                </Link>
                <Link to="/tutorial/arduino/projects/intermediate/ir-remote-car" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Next: IR Remote Car
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
