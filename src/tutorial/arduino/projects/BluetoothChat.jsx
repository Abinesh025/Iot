import { Link } from 'react-router-dom'

const code = `// Bluetooth Serial Chat – HC-05 Module
// HC-05 TX → Arduino pin 10 (SoftwareSerial RX)
// HC-05 RX → Arduino pin 11 (SoftwareSerial TX) via voltage divider
// HC-05 VCC → 5V | HC-05 GND → GND

#include <SoftwareSerial.h>

// Create a software serial port on pins 10 and 11
SoftwareSerial bluetooth(10, 11);  // RX, TX

void setup() {
  Serial.begin(9600);       // PC Serial Monitor
  bluetooth.begin(9600);    // HC-05 default baud rate

  Serial.println("Bluetooth Chat Ready!");
  Serial.println("Open a Bluetooth Serial app on your phone.");
  bluetooth.println("Hello from Arduino! Type a message...");
}

void loop() {
  // Forward data from phone → Arduino → Serial Monitor
  if (bluetooth.available()) {
    char received = bluetooth.read();
    Serial.print("[Phone]: ");
    Serial.println(received);

    // Echo it back to the phone
    bluetooth.print("Echo: ");
    bluetooth.println(received);
  }

  // Forward data from Serial Monitor → Arduino → Phone
  if (Serial.available()) {
    char toSend = Serial.read();
    bluetooth.print(toSend);
  }
}`.trim()

export default function BluetoothChat() {
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
                <span className="text-surface-300 font-medium">Bluetooth Serial Chat</span>
            </nav>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-semibold border border-yellow-500/20 uppercase tracking-wide">Intermediate</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">📱 Bluetooth Serial Chat</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Send and receive text messages between your smartphone and Arduino wirelessly via the HC-05 Bluetooth module.
                This project introduces you to <strong className="text-surface-300">wireless serial communication</strong> —
                the foundation for Bluetooth-controlled devices and IoT apps.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">📱</div>
                <p className="text-surface-500 text-sm">Bluetooth Serial Chat Circuit</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Uno + HC-05 Bluetooth Module</p>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How the HC-05 Bluetooth module works and how to pair it with a phone',
                        'How to create a virtual serial port using SoftwareSerial library',
                        'How to bridge two serial ports (hardware + software) for communication',
                        'How to send and receive text data wirelessly between devices',
                        'How to use a voltage divider to protect the HC-05s 3.3V RX pin',
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
                        { name: 'Arduino Uno', qty: '×1', note: 'Any Arduino with serial port' },
                        { name: 'HC-05 Bluetooth Module', qty: '×1', note: 'Classic Bluetooth (not BLE)' },
                        { name: '1kΩ Resistor', qty: '×1', note: 'Part of voltage divider for RX' },
                        { name: '2kΩ Resistor', qty: '×1', note: 'Part of voltage divider for RX' },
                        { name: 'Breadboard', qty: '×1', note: 'For wire organisation' },
                        { name: 'Jumper Wires', qty: '×5', note: 'Male-to-male' },
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
                        'HC-05 VCC → Arduino 5V | HC-05 GND → Arduino GND',
                        'HC-05 TX → Arduino pin 10 (this is our SoftwareSerial RX — direct connection is fine)',
                        'For HC-05 RX: build a voltage divider between Arduino pin 11 and HC-05 RX. Arduino pin 11 → 1kΩ → junction → 2kΩ → GND. Connect junction to HC-05 RX. This drops 5V to ~3.3V to protect the module.',
                        'On your phone: go to Bluetooth settings, pair with "HC-05". Default PIN is 1234 or 0000.',
                        'Install a "Bluetooth Serial Terminal" app on your phone (e.g., Serial Bluetooth Terminal on Android).',
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
                <p className="text-surface-400 text-sm mb-3">SoftwareSerial is included with the Arduino IDE — no extra library needed!</p>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">bluetooth_chat.ino</span>
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
                        The HC-05 module acts as a <strong className="text-surface-200">wireless serial bridge</strong>.
                        It receives data via Bluetooth from your phone and forwards it to its TX pin as a serial signal.
                        <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">SoftwareSerial</code> lets the Arduino use any two digital pins as an extra serial port — no need to use the hardware TX/RX pins (which are needed for uploading code).
                    </p>
                    <p>
                        In <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">loop()</code>, if the Bluetooth port has incoming data, it reads and prints to the Serial Monitor while echoing back to the phone.
                        If the Serial Monitor has data (typed by you), it forwards it over Bluetooth to the connected phone app.
                        This creates a two-way chat bridge.
                    </p>
                </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text=surface-50 mb-4">💡 Beginner Tips</h2>
            <div className="space-y-3">
                {[
                    { tip: 'Disconnect HC-05 when uploading', detail: 'If HC-05 is on pins 0/1 (hardware serial), it will interfere with uploading. Using SoftwareSerial on pins 10/11 avoids this — but always safe to disconnect anyway.' },
                    { tip: 'Baud rate must match', detail: 'HC-05 default baud rate is 9600. Both Serial.begin() and bluetooth.begin() must use the same value.' },
                    { tip: 'Voltage divider is important', detail: 'HC-05 RX pin only accepts 3.3V signals. Sending 5V from Arduino continuously will damage the module. The 1kΩ + 2kΩ divider is not optional.' },
                    { tip: 'AT Command mode', detail: 'To change the HC-05 name or baud rate, hold the button on the module while powering it to enter AT Command mode. Use 38400 baud for AT commands.' },
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

      {/* Footer nav */ }
    <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between flex-wrap gap-4">
        <Link to="/tutorial/arduino/projects/intermediate/ir-remote-car" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
            IR Remote Car
        </Link>
        <Link to="/tutorial/arduino/projects/advanced/smart-home" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
            Next: IoT Smart Home
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </Link>
    </div>
    </article >
  )
}
