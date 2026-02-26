import { Link } from 'react-router-dom'

const code = `// LED Blink – First Arduino Project
// Connect LED positive leg (long) to pin 13
// Connect LED negative leg (short) through 220Ω resistor to GND

void setup() {
  pinMode(13, OUTPUT);   // Set pin 13 as output
}

void loop() {
  digitalWrite(13, HIGH);  // Turn LED ON
  delay(1000);              // Wait 1 second
  digitalWrite(13, LOW);   // Turn LED OFF
  delay(1000);              // Wait 1 second
}`.trim()

export default function LedBlink() {
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
                <span className="text-surface-300 font-medium">LED Blink</span>
            </nav>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20 uppercase tracking-wide">Beginner</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">💡 LED Blink – First Arduino Project</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Welcome to your very first Arduino project! Making an LED blink is the "Hello, World!" of electronics.
                It teaches you the most fundamental skill — <strong className="text-surface-300">controlling a digital output pin</strong> to turn something on and off.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">💡</div>
                <p className="text-surface-500 text-sm">LED Blink Circuit Diagram</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Uno + LED + 220Ω Resistor</p>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How to set up a digital output pin with pinMode()',
                        'How to turn a pin HIGH (on) and LOW (off) using digitalWrite()',
                        'How to add delays between actions using delay()',
                        'How to connect an LED and resistor to a breadboard',
                        'How the Arduino void loop() runs code repeatedly',
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
                        { name: 'LED (any colour)', qty: '×1', note: 'Red or green recommended' },
                        { name: '220Ω Resistor', qty: '×1', note: 'Protects the LED from burning out' },
                        { name: 'Breadboard', qty: '×1', note: 'For easy connections' },
                        { name: 'Jumper Wires', qty: '×2', note: 'Male-to-male' },
                        { name: 'USB Cable', qty: '×1', note: 'Type-A to Type-B for Arduino Uno' },
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
                <p className="text-surface-400 text-sm mb-4">Follow these steps carefully. Take your time — getting the wiring right is the most important part!</p>
                <ol className="space-y-3">
                    {[
                        'Place the LED on the breadboard. The longer leg is the positive (+) anode, the shorter leg is the negative (−) cathode.',
                        'Connect a 220Ω resistor between the positive (long) leg of the LED and a free row on the breadboard.',
                        'Connect a jumper wire from that resistor row to Arduino pin 13.',
                        'Connect another jumper wire from the negative (short) leg of the LED to the GND (Ground) pin on the Arduino.',
                        'Plug the Arduino into your computer using the USB cable.',
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
                <p className="text-surface-400 text-sm mb-3">Open the Arduino IDE, paste the code below, select your board and port, then click <strong className="text-surface-200">Upload</strong>.</p>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">led_blink.ino</span>
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
                        When the Arduino powers on, it runs <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">setup()</code> once.
                        Here we call <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">pinMode(13, OUTPUT)</code> to tell the Arduino that pin 13 should be used to <strong className="text-surface-200">send</strong> electricity, not receive it.
                    </p>
                    <p>
                        The <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">loop()</code> function runs continuously, forever. Inside it, we first
                        call <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">digitalWrite(13, HIGH)</code> — this sends 5V to pin 13, which lights up the LED.
                        Then <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">delay(1000)</code> pauses the program for 1000 milliseconds (1 second).
                    </p>
                    <p>
                        Next, <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">digitalWrite(13, LOW)</code> drops the voltage to 0V (off), followed by another 1-second delay.
                        This on-off-on-off cycle repeats endlessly, creating the blinking effect.
                    </p>
                    <p>
                        The resistor limits the current so the LED doesn't burn out — LEDs need around 20mA, and without a resistor the full 5V would push far more current than that.
                    </p>
                </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Beginner Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'LED polarity matters', detail: 'If your LED doesn\'t light up, flip it around. The long leg must point toward the positive (pin 13) side.' },
                        { tip: 'Change the blink speed', detail: 'Try changing the delay value — delay(200) will blink very fast, delay(2000) will blink slowly.' },
                        { tip: 'No breadboard? No problem', detail: 'Arduino Uno has a built-in LED on pin 13. Upload the code and the on-board LED will blink without any extra wiring.' },
                        { tip: 'Check your port', detail: 'In the Arduino IDE, go to Tools → Port and select the COM port that shows "Arduino Uno". If you don\'t see it, reinstall the USB driver.' },
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
                <Link to="/tutorial/arduino/projects/beginner" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Beginner Projects
                </Link>
                <Link to="/tutorial/arduino/projects/beginner/traffic-light" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Next: Traffic Light Simulator
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
