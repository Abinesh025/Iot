import { Link } from 'react-router-dom'

function SectionCard({ number, title, children }) {
    return (
        <section className="mb-6 p-5 rounded-xl border border-surface-800/60 bg-surface-900/40">
            <h2 className="text-base font-bold text-surface-100 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-esp32/20 text-esp32 flex items-center justify-center text-xs font-bold shrink-0">{number}</span>
                {title}
            </h2>
            <div className="text-surface-400 text-sm leading-relaxed">{children}</div>
        </section>
    )
}

function PlaceholderImage({ label }) {
    return (
        <div className="my-5 rounded-xl border border-surface-800/60 bg-surface-900/60 flex flex-col items-center justify-center py-12 gap-3">
            <svg className="w-12 h-12 text-esp32/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H3a.75.75 0 00-.75.75v15c0 .414.336.75.75.75z" />
            </svg>
            <span className="text-surface-600 text-xs text-center px-4">{label}</span>
        </div>
    )
}

function CodeSnippet({ children }) {
    return (
        <pre className="mt-3 bg-surface-950/70 border border-surface-800/50 rounded-lg p-4 overflow-x-auto text-xs text-esp32/90 leading-relaxed font-mono whitespace-pre">
            {children}
        </pre>
    )
}

/* ═══════════════════════════════════════════════
   ESP32 Bluetooth (Classic) — Full Page
═══════════════════════════════════════════════ */
export default function BluetoothProtocol() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/protocols" className="hover:text-primary-400 transition-colors">Protocols</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Bluetooth</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">Bluetooth Classic</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                Classic Bluetooth (BR/EDR) gives the ESP32 a wireless serial link to phones, computers, and Bluetooth peripherals — ideal for data logging, wireless configuration, and device control.
            </p>

            <PlaceholderImage label="ESP32 Bluetooth Classic — Serial Port Profile (SPP) pairing with smartphone" />

            <SectionCard number="1" title="What is this Protocol?">
                <strong className="text-surface-200">Bluetooth Classic</strong> (BR/EDR — Basic Rate / Enhanced Data Rate) is the original Bluetooth standard, operating on the 2.4 GHz ISM band with <strong className="text-surface-200">frequency hopping</strong> across 79 channels to avoid interference. The ESP32 supports Bluetooth 4.2 (Classic + BLE). Classic Bluetooth uses the <strong className="text-surface-200">Serial Port Profile (SPP)</strong> to create a virtual serial link — making it behave exactly like a UART cable, wirelessly.
            </SectionCard>

            <SectionCard number="2" title="Why it is Used in ESP32">
                Classic Bluetooth is perfectly suited for streaming moderate amounts of data (up to ~3 Mbps) between the ESP32 and a paired device — no Wi-Fi router needed. The SPP profile means existing UART-based code can be ported to wireless with minimal changes. It is the go-to choice for robot control apps, Bluetooth serial monitors, and wireless configuration tools that run on Android or desktop.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The ESP32 advertises itself by name and waits for a paired device to connect. Once a <strong className="text-surface-200">bonded connection</strong> is established, data flows bidirectionally over the SPP RFCOMM channel — the application reads and writes it just like Serial. The Bluetooth stack handles link management, error correction (ERTM), and frequency hopping transparently.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {['Wireless serial monitor — replace USB cable during field testing', 'Bluetooth RC car / robot control via Android app', 'Wireless data logging to a smartphone spreadsheet app', 'Device configuration interface (set Wi-Fi credentials over BT)', 'Printing to Bluetooth thermal receipt printers', 'Audio streaming to Bluetooth speakers (A2DP profile)'].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example with ESP32">
                Use the built-in <strong className="text-surface-200">BluetoothSerial</strong> library (no install needed). Pair with the ESP32 on your phone using a Bluetooth terminal app:
                <CodeSnippet>{`#include "BluetoothSerial.h"

BluetoothSerial SerialBT;

void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP32-Classic"); // Bluetooth device name
  Serial.println("Bluetooth started. Pair with 'ESP32-Classic'.");
}

void loop() {
  // Echo data from phone back to USB Serial
  if (SerialBT.available()) {
    char c = SerialBT.read();
    Serial.write(c);
  }

  // Send a message to phone every 3 seconds
  static unsigned long t = 0;
  if (millis() - t > 3000) {
    t = millis();
    SerialBT.println("Hello from ESP32!");
  }
}`}</CodeSnippet>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/protocols/mqtt" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    MQTT Protocol
                </Link>
                <Link to="/tutorial/esp32/protocols/ble" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    BLE Protocol
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
