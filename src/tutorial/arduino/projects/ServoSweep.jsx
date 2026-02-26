import { Link } from 'react-router-dom'

const code = `// Servo Sweep – Arduino Project
// Servo Signal (Orange/Yellow) wire → Arduino pin 9
// Servo Power (Red) wire           → Arduino 5V
// Servo Ground (Brown/Black) wire  → Arduino GND

#include <Servo.h>

Servo myServo;  // Create a servo object

void setup() {
  myServo.attach(9);  // Attach servo to pin 9
}

void loop() {
  // Sweep from 0° to 180°
  for (int angle = 0; angle <= 180; angle++) {
    myServo.write(angle);  // Move servo to angle
    delay(15);             // Small delay for smooth movement
  }

  // Sweep back from 180° to 0°
  for (int angle = 180; angle >= 0; angle--) {
    myServo.write(angle);
    delay(15);
  }
}`.trim()

export default function ServoSweep() {
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
                <span className="text-surface-300 font-medium">Servo Sweep</span>
            </nav>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20 uppercase tracking-wide">Beginner</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">⚙️ Servo Sweep</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Control a servo motor to smoothly sweep back and forth from 0° to 180°.
                This project introduces you to <strong className="text-surface-300">PWM (Pulse Width Modulation)</strong> and the Arduino Servo library —
                the foundation for robotics, camera gimbals, and automated systems.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">⚙️</div>
                <p className="text-surface-500 text-sm">Servo Sweep Circuit Diagram</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Uno + SG90 Servo Motor</p>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'What PWM (Pulse Width Modulation) is and how servos use it',
                        'How to include and use the built-in Arduino Servo library',
                        'How to use a for loop to create smooth, incremental movement',
                        'How to read servo motor wire colour codes (signal/power/ground)',
                        'How to control the exact angle of a servo motor',
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
                        { name: 'SG90 Servo Motor', qty: '×1', note: 'Small, cheap, and beginner-friendly' },
                        { name: 'Jumper Wires', qty: '×3', note: 'To connect servo to Arduino' },
                        { name: 'USB Cable', qty: '×1', note: 'For power and uploading' },
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
                <p className="text-surface-400 text-sm mb-4">The SG90 servo has three wires. Match each wire to the correct Arduino pin:</p>
                <ol className="space-y-3">
                    {[
                        'Servo Orange / Yellow wire (Signal) → Connect to Arduino digital pin 9 (this must be a PWM pin, marked with ~).',
                        'Servo Red wire (Power/VCC) → Connect to Arduino 5V pin.',
                        'Servo Brown / Black wire (Ground/GND) → Connect to Arduino GND pin.',
                        'No breadboard is needed — use 3 jumper wires directly from the servo connector to the Arduino headers.',
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
                <p className="text-surface-400 text-sm mb-3">The Servo library is already included with the Arduino IDE — no installation needed!</p>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">servo_sweep.ino</span>
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
                        A servo motor uses <strong className="text-surface-200">PWM (Pulse Width Modulation)</strong> to set its angle.
                        The Arduino sends a pulse to the signal wire, and the pulse width tells the servo exactly where to position itself.
                        The Servo library abstracts all this complexity — you just call <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">myServo.write(angle)</code> with an angle from 0 to 180.
                    </p>
                    <p>
                        In the <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">loop()</code>, a <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">for</code> loop increments the angle from 0° to 180°, pausing 15ms between each step for smooth motion.
                        Then a second loop decrements from 180° back to 0°. This back-and-forth motion repeats forever.
                    </p>
                    <p>
                        The 15ms delay per degree gives a full sweep in about 2.7 seconds. Reduce the delay to speed it up, increase it to slow it down.
                    </p>
                </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Beginner Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'Use a PWM pin', detail: 'Servos MUST be connected to a PWM pin (marked with ~ on the Arduino). Pins 3, 5, 6, 9, 10, and 11 are PWM on Arduino Uno.' },
                        { tip: 'Power limitation', detail: 'The Arduino 5V pin can usually power one small SG90 servo. For larger servos or multiple servos, use an external 5V power supply.' },
                        { tip: 'myServo.write() range', detail: 'Values outside 0–180 may damage your servo. Always clamp your angle values within this range.' },
                        { tip: 'Extend it', detail: 'Try controlling the servo with a potentiometer! Read the pot with analogRead(), map it to 0–180, and pass it to myServo.write().' },
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
                <Link to="/tutorial/arduino/projects/beginner/temperature-monitor" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Temperature Monitor
                </Link>
                <Link to="/tutorial/arduino/projects/intermediate/lcd-weather-station" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Next: LCD Weather Station
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
