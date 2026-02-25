import { Link } from 'react-router-dom'

export default function WhatIsArduino() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">What is Arduino?</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">What is Arduino?</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-arduino/5 border border-arduino/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        <strong className="text-arduino">Arduino</strong> is an open-source electronics platform based on
                        easy-to-use hardware and software. Arduino boards read inputs — light on a sensor, a finger on a
                        button, a Twitter message — and turn them into outputs — activating a motor, turning on an LED,
                        publishing something online.
                    </p>
                </div>

                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    History & Origin
                </h2>
                <p className="text-surface-400 leading-relaxed mb-4">
                    Arduino was born in 2005 at the Interaction Design Institute Ivrea in Italy. It was designed to
                    provide an inexpensive and easy way for novices and professionals to create devices that interact
                    with their environment using sensors and actuators.
                </p>

                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Why Arduino?
                </h2>
                <ul className="space-y-3 text-surface-400 mb-4">
                    {[
                        'Open-source hardware and software',
                        'Huge community and extensive documentation',
                        'Wide range of compatible sensors and modules',
                        'Cross-platform IDE (Windows, macOS, Linux)',
                        'Perfect for beginners and rapid prototyping',
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-arduino shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>

                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Popular Arduino Boards
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        { name: 'Arduino Uno', chip: 'ATmega328P', pins: '14 Digital, 6 Analog' },
                        { name: 'Arduino Mega', chip: 'ATmega2560', pins: '54 Digital, 16 Analog' },
                        { name: 'Arduino Nano', chip: 'ATmega328P', pins: '14 Digital, 8 Analog' },
                        { name: 'Arduino Leonardo', chip: 'ATmega32U4', pins: '20 Digital, 12 Analog' },
                    ].map((board) => (
                        <div key={board.name} className="p-4 rounded-xl bg-surface-900/50 border border-surface-800/50">
                            <h4 className="font-semibold text-surface-50 text-sm">{board.name}</h4>
                            <p className="text-xs text-surface-500 mt-1">Chip: {board.chip}</p>
                            <p className="text-xs text-surface-500">Pins: {board.pins}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                    Arduino Programming Basics
                </h2>
                <p className="text-surface-400 leading-relaxed mb-4">
                    Arduino uses a simplified version of C/C++. Every Arduino program (sketch) has two required functions:
                </p>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-4">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">sketch.ino</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">
                        {`void setup() {
  // Runs once when board powers on
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // Runs repeatedly
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`}
                    </pre>
                </div>

                {/* Next page link */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-end">
                    <Link
                        to="/tutorial/arduino/modules"
                        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                    >
                        Next: Arduino Modules
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
