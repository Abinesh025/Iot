import { Link } from 'react-router-dom'

const code = `// Security System with PIR + Servo Lock + Buzzer
// PIR → pin 7, Servo → pin 9, Buzzer → pin 8
// Serial command to unlock: send 'U' via Serial Monitor

#include <Servo.h>

Servo lockServo;
const int PIR_PIN    = 7;
const int BUZZER_PIN = 8;
const int SERVO_PIN  = 9;

int LOCKED   = 90;  // Servo angle = locked
int UNLOCKED = 0;   // Servo angle = unlocked

bool isLocked = true;
unsigned long alertTime = 0;

void lockDoor()   { lockServo.write(LOCKED);   isLocked = true;  }
void unlockDoor() { lockServo.write(UNLOCKED); isLocked = false; }

void triggerAlarm() {
  tone(BUZZER_PIN, 1500, 3000);  // 3-second 1.5kHz alarm
  alertTime = millis();
  Serial.println("⚠ INTRUDER ALERT!");
}

void setup() {
  Serial.begin(9600);
  lockServo.attach(SERVO_PIN);
  pinMode(PIR_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  lockDoor();
  Serial.println("Security System Armed.");
  Serial.println("Commands: U=Unlock, L=Lock");
}

void loop() {
  // Check for serial commands
  if (Serial.available()) {
    char cmd = Serial.read();
    if (cmd == 'U') { unlockDoor(); Serial.println("Door UNLOCKED"); }
    if (cmd == 'L') { lockDoor();   Serial.println("Door LOCKED");   }
  }

  // PIR motion detection
  if (isLocked && digitalRead(PIR_PIN) == HIGH) {
    if (millis() - alertTime > 10000) {  // Cooldown 10 seconds
      triggerAlarm();
    }
  }

  // Status report every 5 seconds
  static unsigned long lastPrint = 0;
  if (millis() - lastPrint > 5000) {
    Serial.print("Status: "); Serial.print(isLocked ? "LOCKED" : "UNLOCKED");
    Serial.print(" | Motion: "); Serial.println(digitalRead(PIR_PIN) ? "YES" : "NO");
    lastPrint = millis();
  }
}`.trim()

export default function SecuritySystem() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <Link to="/tutorial/arduino/projects/advanced" className="hover:text-primary-400 transition-colors">Projects — Advanced</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Security System</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20 uppercase tracking-wide">Expert</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">🔒 Security System with Face Detection</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Build a DIY security system with motion detection, servo door lock, and buzzer alarm.
                The Arduino handles real-time hardware control while a Python/OpenCV script on your PC adds
                <strong className="text-surface-300"> facial recognition as a premium unlock mechanism</strong> — communicating via Serial.
            </p>

            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">🔒</div>
                <p className="text-surface-500 text-sm">Security System Circuit</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Mega + PIR + Servo Lock + Buzzer + USB Camera + Python/OpenCV</p>
            </div>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How to build a hardware security alarm with PIR motion detection',
                        'How to use a servo as a physical door lock actuator',
                        'How to implement alarm cooldown logic using millis() (non-blocking timing)',
                        'How to communicate between Python (OpenCV) and Arduino via USB Serial',
                        'How to design a layered security system (hardware + software recognition)',
                    ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-surface-300 text-sm">
                            <span className="text-green-400 mt-0.5">✓</span>{item}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">🛠️ Components Required</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { name: 'Arduino Mega 2560', qty: '×1', note: 'More pins for expanding system' },
                        { name: 'PIR Sensor (HC-SR501)', qty: '×1', note: 'Motion detection' },
                        { name: 'SG90 Servo Motor', qty: '×1', note: 'Physical door lock actuator' },
                        { name: 'Passive Buzzer', qty: '×1', note: 'Alarm sound' },
                        { name: 'USB Webcam', qty: '×1', note: 'For face detection via Python/OpenCV' },
                        { name: 'A PC / Laptop', qty: '×1', note: 'Runs Python + OpenCV + pyserial' },
                        { name: 'Jumper Wires', qty: '×6', note: 'For sensor connections' },
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

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">🔌 Circuit Connection</h2>
                <ol className="space-y-3">
                    {[
                        'PIR Sensor OUT → Arduino pin 7 | VCC → 5V | GND → GND',
                        'Passive Buzzer positive → Arduino pin 8 | negative → GND',
                        'SG90 Servo Orange (Signal) → Arduino pin 9 (PWM) | Red → 5V | Brown → GND',
                        'USB Camera plugs into your PC (not Arduino) — Python script reads it via OpenCV',
                        'Arduino connects to PC via USB cable — Python uses pyserial to send U/L commands',
                    ].map((step, i) => (
                        <li key={i} className="flex items-start gap-4 p-3 rounded-xl bg-surface-900/30 border border-surface-800/40">
                            <span className="shrink-0 w-7 h-7 rounded-full bg-primary-500/10 text-primary-400 text-xs font-bold flex items-center justify-center border border-primary-500/20">{i + 1}</span>
                            <p className="text-surface-300 text-sm leading-relaxed">{step}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">🖥️ Arduino Code</h2>
                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 mb-4">
                    <p className="text-purple-300 text-sm font-semibold mb-1">🐍 Python Required</p>
                    <p className="text-surface-400 text-sm">Install Python packages: <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">pip install opencv-python face_recognition pyserial</code>. The Python script sends 'U' to unlock or 'L' to lock based on face recognition results.</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">security_system.ino</span>
                        <span className="text-xs text-purple-400">Arduino C++ (Hardware Controller)</span>
                    </div>
                    <pre className="p-5 bg-surface-900/60 overflow-x-auto text-sm leading-relaxed">
                        <code className="text-surface-200 font-mono">{code}</code>
                    </pre>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">⚙️ How It Works</h2>
                <div className="space-y-4 text-surface-300 text-sm leading-relaxed">
                    <p>
                        The Arduino runs as the <strong className="text-surface-200">real-time hardware controller</strong>. When PIR detects motion and the door is locked, it triggers a buzzer alarm with a 10-second cooldown so it doesn't fire repeatedly.
                    </p>
                    <p>
                        The Python script on your PC continuously reads the webcam with OpenCV.
                        When it recognises an authorised face (from a pre-enrolled image), it sends 'U' via pyserial to unlock the door.
                        After a timeout, it sends 'L' to re-lock. This decouples the computationally heavy face recognition from the time-critical hardware control.
                    </p>
                    <p>
                        <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">millis()</code>-based non-blocking timing is used throughout so the loop never stalls — critical for responsive security hardware.
                    </p>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Advanced Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'Test without face detection first', detail: 'Use the Serial Monitor to send U and L manually to verify the servo and buzzer work correctly before adding the Python layer.' },
                        { tip: 'Enroll multiple faces', detail: 'The face_recognition library lets you load multiple known face encodings. Store each authorised person\'s photo and name in a folder and loop through all of them.' },
                        { tip: 'Add a keypad fallback', detail: 'Include a 4x4 membrane keypad so you can unlock with a PIN code even if face recognition fails or the camera is blocked.' },
                        { tip: 'Log events to SD card', detail: 'Add an SD card module to record timestamps and event types (motion detected, unlocked, alarm triggered) for audit purposes.' },
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

            <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-between flex-wrap gap-4">
                <Link to="/tutorial/arduino/projects/advanced/plant-monitor" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Plant Monitor
                </Link>
                <Link to="/tutorial/arduino/projects/advanced" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Advanced Projects
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
