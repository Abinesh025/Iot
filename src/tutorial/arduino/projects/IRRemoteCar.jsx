import { Link } from 'react-router-dom'

const code = `// IR Remote-Controlled Robot Car
// Libraries: IRremote by shirriff
// IR Receiver → pin 11
// L298N IN1 → pin 5, IN2 → pin 6, IN3 → pin 7, IN4 → pin 8
// ENA → pin 9 (PWM), ENB → pin 10 (PWM)

#include <IRremote.h>

// Adjust these hex codes to match YOUR remote
#define IR_UP    0x00FF629D
#define IR_DOWN  0x00FFA857
#define IR_LEFT  0x00FF22DD
#define IR_RIGHT 0x00FFC23D
#define IR_STOP  0x00FF02FD

const int IR_PIN = 11;
const int IN1 = 5, IN2 = 6, IN3 = 7, IN4 = 8;
const int ENA = 9, ENB = 10;

IRrecv irReceiver(IR_PIN);
decode_results results;

void motorLeft(int speed) {
  analogWrite(ENA, speed);
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
}

void motorRight(int speed) {
  analogWrite(ENB, speed);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}

void stopAll() {
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);
}

void setup() {
  Serial.begin(9600);
  irReceiver.enableIRIn();
  pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);
  Serial.println("IR Car Ready");
}

void loop() {
  if (irReceiver.decode(&results)) {
    unsigned long code = results.value;
    Serial.println(code, HEX);

    switch (code) {
      case IR_UP:    motorLeft(200); motorRight(200); break;
      case IR_DOWN:  motorLeft(-200); motorRight(-200); break;
      case IR_LEFT:  motorLeft(0); motorRight(200); break;
      case IR_RIGHT: motorLeft(200); motorRight(0); break;
      case IR_STOP:  stopAll(); break;
    }
    irReceiver.resume();  // Receive next signal
  }
}`.trim()

export default function IRRemoteCar() {
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
                <span className="text-surface-300 font-medium">IR Remote Car</span>
            </nav>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-semibold border border-yellow-500/20 uppercase tracking-wide">Intermediate</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">🚗 IR Remote-Controlled Car</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Build a small robot car you can drive with a TV remote! This project combines
                <strong className="text-surface-300"> infrared communication, motor control with L298N</strong>, and PWM speed control —
                a giant leap into the world of robotics.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">🚗</div>
                <p className="text-surface-500 text-sm">IR Remote-Controlled Car Circuit</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Uno + L298N + 2× DC Motors + IR Receiver + IR Remote</p>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How IR (infrared) communication works and how to decode signals',
                        'How to use the L298N motor driver to control DC motors',
                        'How to use PWM (analogWrite) to control motor speed',
                        'How to use a switch-case statement for command-based control',
                        'How to write modular helper functions for motor direction control',
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
                        { name: 'Arduino Uno', qty: '×1', note: 'The brain of the car' },
                        { name: 'L298N Motor Driver', qty: '×1', note: 'Controls direction and speed of motors' },
                        { name: 'DC Motors (TT Gear)', qty: '×2', note: 'With wheels attached' },
                        { name: 'IR Receiver (TSOP1838)', qty: '×1', note: 'Reads the remote signal' },
                        { name: 'IR Remote', qty: '×1', note: 'Any standard TV or DVD remote' },
                        { name: 'Car Chassis Kit', qty: '×1', note: 'Plastic 2-wheel chassis with caster' },
                        { name: 'Battery Pack (6V-9V)', qty: '×1', note: 'To power the motors separately' },
                        { name: 'Jumper Wires', qty: '×10+', note: 'For all the connections' },
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
                        'L298N IN1 → Arduino pin 5 | IN2 → pin 6 | IN3 → pin 7 | IN4 → pin 8',
                        'L298N ENA → Arduino pin 9 (PWM) | ENB → pin 10 (PWM)',
                        'Left motor wires → L298N OUT1 & OUT2 | Right motor wires → OUT3 & OUT4',
                        'L298N VCC → Battery pack positive (6–9V) | GND → Battery GND and Arduino GND',
                        'IR Receiver: VCC → 5V | GND → GND | OUT → Arduino pin 11',
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
                    <p className="text-surface-400 text-sm">Install <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">IRremote</code> by shirriff in the Library Manager. Then decode your remote's button codes first by printing <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">results.value</code> to Serial Monitor.</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">ir_remote_car.ino</span>
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
                        When you press a button on the IR remote, it sends rapid pulses of infrared light.
                        The TSOP1838 IR receiver decodes these pulses into a unique hex code (like <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">0x00FF629D</code>).
                        Each button always sends the same code, so you can map them to actions.
                    </p>
                    <p>
                        The L298N motor driver is an H-bridge — it can reverse the direction of current through each motor,
                        allowing forward and reverse rotation. Setting IN1 HIGH and IN2 LOW makes the left motor spin forward;
                        flipping them reverses it. <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">analogWrite(ENA, speed)</code> controls power to set the overall speed.
                    </p>
                </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Beginner Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'Decode your remote first', detail: 'Before writing movement code, print results.value in HEX to Serial Monitor for each button press and note down the codes to replace the #define values.' },
                        { tip: 'Motor direction may be reversed', detail: 'If a motor spins the wrong way, simply swap the two wires going to that motor on the L298N output terminals.' },
                        { tip: 'Keep GNDs common', detail: 'Always connect the battery pack GND to the Arduino GND. Without a common ground, the motor driver signals won\'t be interpreted correctly.' },
                        { tip: 'Line-of-sight required', detail: 'IR signals need a clear path between the remote and receiver. Don\'t block the sensor.' },
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
                <Link to="/tutorial/arduino/projects/intermediate/ultrasonic-range-finder" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Ultrasonic Range Finder
                </Link>
                <Link to="/tutorial/arduino/projects/intermediate/bluetooth-chat" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Next: Bluetooth Serial Chat
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
