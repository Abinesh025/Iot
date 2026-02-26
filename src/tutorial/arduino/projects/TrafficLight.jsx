import { Link } from 'react-router-dom'

const code = `// Traffic Light Simulator – Arduino Project
// Red LED   → pin 9
// Yellow LED → pin 10
// Green LED  → pin 11
// All LEDs share a common GND through 220Ω resistors

void setup() {
  pinMode(9, OUTPUT);   // Red
  pinMode(10, OUTPUT);  // Yellow
  pinMode(11, OUTPUT);  // Green
}

void loop() {
  // RED – Stop (4 seconds)
  digitalWrite(9, HIGH);
  digitalWrite(10, LOW);
  digitalWrite(11, LOW);
  delay(4000);

  // YELLOW – Get ready (1 second)
  digitalWrite(9, LOW);
  digitalWrite(10, HIGH);
  digitalWrite(11, LOW);
  delay(1000);

  // GREEN – Go (3 seconds)
  digitalWrite(9, LOW);
  digitalWrite(10, LOW);
  digitalWrite(11, HIGH);
  delay(3000);

  // YELLOW – Slow down (1 second)
  digitalWrite(9, LOW);
  digitalWrite(10, HIGH);
  digitalWrite(11, LOW);
  delay(1000);
}`.trim()

export default function TrafficLight() {
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
                <span className="text-surface-300 font-medium">Traffic Light Simulator</span>
            </nav>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20 uppercase tracking-wide">Beginner</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">🚦 Traffic Light Simulator</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Build a miniature traffic light using three LEDs! This project teaches you to control <strong className="text-surface-300">multiple output pins</strong> in sequence
                and understand how timing creates real-world behaviour — just like the traffic lights on your street.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">🚦</div>
                <p className="text-surface-500 text-sm">Traffic Light Circuit Diagram</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Uno + 3 LEDs (R/Y/G) + 3× 220Ω Resistors</p>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How to control multiple digital output pins simultaneously',
                        'How to create timed sequences with delay()',
                        'How real-world systems use simple logic (state machines)',
                        'How to wire multiple LEDs sharing a common ground',
                        'How the order of digitalWrite() calls matters for your output',
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
                        { name: 'Red LED', qty: '×1', note: 'For the STOP signal' },
                        { name: 'Yellow LED', qty: '×1', note: 'For the READY / SLOW signal' },
                        { name: 'Green LED', qty: '×1', note: 'For the GO signal' },
                        { name: '220Ω Resistors', qty: '×3', note: 'One per LED to limit current' },
                        { name: 'Breadboard', qty: '×1', note: 'Half-size or full-size' },
                        { name: 'Jumper Wires', qty: '×6', note: 'Male-to-male' },
                        { name: 'USB Cable', qty: '×1', note: 'To upload and power the Arduino' },
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
                <p className="text-surface-400 text-sm mb-4">Each LED needs its own resistor. Connect them one by one:</p>
                <ol className="space-y-3">
                    {[
                        'Place all three LEDs on the breadboard, with a gap between each one.',
                        'Connect a 220Ω resistor to the positive (long) leg of each LED.',
                        'Wire the Red LED resistor to Arduino pin 9.',
                        'Wire the Yellow LED resistor to Arduino pin 10.',
                        'Wire the Green LED resistor to Arduino pin 11.',
                        'Connect all three negative (short) LED legs together to one GND pin on the Arduino.',
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
                <p className="text-surface-400 text-sm mb-3">Upload this code to your Arduino. Watch the LEDs cycle through red → yellow → green → yellow!</p>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">traffic_light.ino</span>
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
                        The <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">setup()</code> function declares pins 9, 10, and 11 as outputs.
                        Each pin is physically connected to one LED.
                    </p>
                    <p>
                        The <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">loop()</code> function runs a 4-step sequence:
                        RED on for 4 seconds, YELLOW on for 1 second, GREEN on for 3 seconds, then YELLOW again for 1 second.
                        Before turning on each LED, the others are turned <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">LOW</code> — so only one LED lights at a time.
                    </p>
                    <p>
                        This pattern of turning a set of outputs on/off in sequence is called a <strong className="text-surface-200">state machine</strong> — a fundamental concept in embedded programming.
                    </p>
                </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Beginner Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'Adjust the timing', detail: 'Real traffic lights use different durations. Try changing the delay values to simulate a busy intersection vs. a quiet one.' },
                        { tip: 'Always turn off the others first', detail: 'Before setting a new LED HIGH, set all others LOW. This prevents two lights being on at the same time.' },
                        { tip: 'Color blindness hack', detail: 'Put small labels ("R", "Y", "G") on your breadboard next to each LED so you always know which is which while wiring.' },
                        { tip: 'Extend the project', detail: 'Add a second set of LEDs for the cross-traffic lane — a great next step after this project!' },
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
                <Link to="/tutorial/arduino/projects/beginner/led-blink" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    LED Blink
                </Link>
                <Link to="/tutorial/arduino/projects/beginner/temperature-monitor" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Next: Temperature Monitor
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
