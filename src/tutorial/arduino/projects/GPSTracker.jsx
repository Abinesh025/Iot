import { Link } from 'react-router-dom'

const code = `// GPS Tracker with LoRa – Arduino Nano
// NEO-6M GPS: TX → pin 4 (SoftSerial RX), RX → pin 5 (SoftSerial TX)
// SX1278 LoRa: SCK → pin 13, MISO → pin 12, MOSI → pin 11, NSS → pin 10, RST → pin 9, DIO0 → pin 2

#include <TinyGPS++.h>
#include <SoftwareSerial.h>
#include <SPI.h>
#include <LoRa.h>

TinyGPSPlus gps;
SoftwareSerial gpsSerial(4, 5);  // RX, TX

#define LORA_FREQ  433E6  // 433 MHz band

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(9600);

  Serial.println("GPS Tracker starting...");
  if (!LoRa.begin(LORA_FREQ)) {
    Serial.println("ERROR: LoRa init failed!");
    while (true);
  }
  LoRa.setSpreadingFactor(10);   // SF10 for longer range
  LoRa.setTxPower(17);           // 17 dBm
  Serial.println("LoRa ready!");
}

void loop() {
  // Feed GPS data into TinyGPS++ library
  while (gpsSerial.available()) {
    gps.encode(gpsSerial.read());
  }

  if (gps.location.isUpdated()) {
    float lat = gps.location.lat();
    float lng = gps.location.lng();
    float alt = gps.altitude.meters();
    int   sats = gps.satellites.value();

    Serial.print("GPS Fix! Lat: "); Serial.print(lat, 6);
    Serial.print(" Lng: "); Serial.print(lng, 6);
    Serial.print(" Alt: "); Serial.print(alt);
    Serial.print(" Sats: "); Serial.println(sats);

    // Transmit location via LoRa
    LoRa.beginPacket();
    LoRa.print(lat, 6);
    LoRa.print(",");
    LoRa.print(lng, 6);
    LoRa.print(",");
    LoRa.print(alt);
    LoRa.print(",");
    LoRa.print(sats);
    LoRa.endPacket();
  }

  delay(5000);  // Transmit every 5 seconds
}`.trim()

export default function GPSTracker() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/arduino" className="hover:text-primary-400 transition-colors">Arduino</Link>
                <span>/</span>
                <Link to="/tutorial/arduino/projects/advanced" className="hover:text-primary-400 transition-colors">Projects — Advanced</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">GPS Tracker with LoRa</span>
            </nav>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold border border-red-500/20 uppercase tracking-wide">Advanced</span>
                <span className="px-3 py-1 rounded-full bg-surface-800/60 text-surface-400 text-xs font-medium">Projects</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-3">🛰️ GPS Tracker with LoRa</h1>
            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-2xl">
                Create a long-range GPS tracking device that transmits location data via LoRa radio to a base station.
                This project dives into <strong className="text-surface-300">GNSS positioning, SPI communication, LoRa radio protocol, and low-power device design</strong>.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-surface-900/60 border border-surface-800/50 flex flex-col items-center justify-center mb-10 overflow-hidden">
                <div className="text-6xl mb-3">🛰️</div>
                <p className="text-surface-500 text-sm">GPS Tracker with LoRa Circuit</p>
                <p className="text-surface-600 text-xs mt-1">Arduino Nano + NEO-6M GPS + SX1278 LoRa Transceiver</p>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">✅ What You Will Learn</h2>
                <ul className="space-y-2">
                    {[
                        'How GPS receivers work and how to parse NMEA sentences with TinyGPS++',
                        'How LoRa (Long Range radio) enables kilometre-scale wireless data transmission',
                        'How SPI (Serial Peripheral Interface) is used to communicate with the SX1278 module',
                        'How to configure LoRa spreading factor and TX power for range vs. speed trade-offs',
                        'How to design a compact, battery-powered tracker payload',
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
                        { name: 'Arduino Nano', qty: '×1', note: 'Compact form factor for portable tracker' },
                        { name: 'NEO-6M GPS Module', qty: '×1', note: 'With ceramic patch antenna' },
                        { name: 'SX1278 LoRa Module', qty: '×1', note: '433 MHz version (Ra-02 or equivalent)' },
                        { name: 'LoRa Antenna (433 MHz)', qty: '×1', note: 'Wire or spring antenna for range' },
                        { name: 'Li-Po Battery (3.7V)', qty: '×1', note: '1000+ mAh for field use' },
                        { name: 'TP4056 Charger Module', qty: '×1', note: 'For Li-Po charging safety' },
                        { name: 'Breadboard + Wires', qty: '×1', note: 'Or custom PCB for compact design' },
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
                        'NEO-6M GPS TX → Arduino pin 4 (SoftSerial RX) | VCC → 3.3V | GND → GND',
                        'SX1278 NSS (CS) → pin 10 | SCK → pin 13 | MOSI → pin 11 | MISO → pin 12',
                        'SX1278 RST → pin 9 | DIO0 → pin 2 | VCC → 3.3V | GND → GND',
                        '⚠️ Both NEO-6M and SX1278 are 3.3V devices — do NOT connect to Arduino 5V pins.',
                        'Attach the 433 MHz antenna to the SX1278 ANT pin before powering — never transmit without antenna.',
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
                    <p className="text-surface-400 text-sm">Install: <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">TinyGPS++</code> by Mikal Hart, and <code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">LoRa</code> by Sandeep Mistry.</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-surface-700/50">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-800/80 border-b border-surface-700/50">
                        <span className="text-xs text-surface-400 font-mono">gps_tracker.ino</span>
                        <span className="text-xs text-red-400">Arduino C++ (Tracker Node)</span>
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
                        The NEO-6M GPS module continually receives signals from multiple satellites and outputs <strong className="text-surface-200">NMEA sentences</strong> over serial at 9600 baud.
                        TinyGPS++ parses these raw sentences and gives you clean latitude, longitude, altitude, and satellite count values.
                    </p>
                    <p>
                        When a fresh location fix arrives (<code className="px-1.5 py-0.5 rounded bg-surface-800 text-primary-300 text-xs font-mono">gps.location.isUpdated()</code>), the Nano packages the GPS coordinates as a comma-separated string and transmits it wirelessly via the SX1278 LoRa module.
                        LoRa uses chirp spread spectrum to achieve 1–10 km range (line-of-sight) with very low power.
                    </p>
                    <p>
                        A second identical base station (or second Arduino + SX1278) runs in receive mode to capture the transmitted location packets and display them on a map or Serial Monitor.
                    </p>
                </div>
            </section>

            {/* Tips */}
            <section className="mb-10">
                <h2 className="text-xl font-bold text-surface-50 mb-4">💡 Advanced Tips</h2>
                <div className="space-y-3">
                    {[
                        { tip: 'GPS fix takes time', detail: 'First fix (Cold Start) can take 1–5 minutes. Move outdoors with clear sky. Subsequent fixes (Warm Start) are faster. Use a saved "last known position" to shorten this.' },
                        { tip: 'Match LoRa parameters at both ends', detail: 'Spreading factor, bandwidth, and coding rate must be identical on transmitter and receiver. Different settings means they can\'t communicate.' },
                        { tip: 'Check local LoRa regulations', detail: '433 MHz LoRa is licence-free in most countries but has duty-cycle limits (e.g., 1% in EU). Always verify your local regulations before deploying.' },
                        { tip: 'Power optimisation', detail: 'For long battery life, put Arduino in deep sleep between transmissions using LowPower.h, and power-cycle the GPS module between fixes.' },
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
                <Link to="/tutorial/arduino/projects/advanced/smart-home" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    IoT Smart Home
                </Link>
                <Link to="/tutorial/arduino/projects/advanced/plant-monitor" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm">
                    Next: Plant Monitoring
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
