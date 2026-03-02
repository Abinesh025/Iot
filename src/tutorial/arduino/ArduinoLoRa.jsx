import ModuleContent from "../../components/ModuleContent";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import lora1 from "../../assets/ArdinoConnectivity/lora/lora1.jpg";
import lora2 from "../../assets/ArdinoConnectivity/lora/lora2.jpg";
import lora3 from "../../assets/ArdinoConnectivity/lora/lora3.jpg";

export default function ArduinoLoRa() {

    const images = [
        lora1,
        lora2,
        lora3
    ];

    const description =
        "LoRa (Long Range) is a wireless communication technology designed for long-range, low-power IoT networks. The SX1278 module operates on sub-GHz frequencies (433 MHz / 868 MHz / 915 MHz) and can transmit data over distances of 2–15+ km in open areas. It uses spread spectrum modulation for excellent noise immunity and penetration through obstacles. LoRa is ideal for remote sensor networks, smart agriculture, asset tracking, and environmental monitoring.";

    const features = [
        "Operating Voltage: 1.8V – 3.7V (use 3.3V with Arduino)",
        "Frequency Bands: 433 / 868 / 915 MHz (region-dependent)",
        "Communication range: 2–15+ km (line of sight)",
        "Very low power consumption — years of battery life possible",
        "Spread spectrum modulation — high interference immunity",
        "Data rate: 0.3 – 50 kbps (trade-off: higher range = lower data rate)",
        "SPI interface for communication with Arduino",
        "Supports point-to-point and star network topologies",
    ];

    const howItWorks = [
        { point: "LoRa uses Chirp Spread Spectrum (CSS) modulation. Data is encoded into chirp signals that sweep across a frequency range, making them resistant to interference and multipath fading." },
        { point: "The SX1278 module communicates with Arduino via the SPI bus (MOSI, MISO, SCK, NSS). The Arduino sends data to the module, which modulates it and transmits it through the antenna." },
        { point: "A receiving LoRa module demodulates the chirp signals back into digital data and forwards it to the connected Arduino via SPI." },
        { point: "The Spreading Factor (SF) parameter controls the trade-off between range and data rate — higher SF means longer range but slower speed." },
    ];

    const pinout = [
        { pin: "VCC", function: "Power supply (3.3V)" },
        { pin: "GND", function: "Ground connection" },
        { pin: "SCK", function: "SPI Clock" },
        { pin: "MISO", function: "SPI Master In Slave Out" },
        { pin: "MOSI", function: "SPI Master Out Slave In" },
        { pin: "NSS (CS)", function: "SPI Chip Select" },
        { pin: "RST", function: "Module reset (active LOW)" },
        { pin: "DIO0", function: "Interrupt output — signals TX/RX done" },
    ];

    const code = `// Arduino LoRa SX1278 — Sender (Transmitter)
// Library: LoRa by Sandeep Mistry
// Install via: Sketch > Include Library > Manage Libraries > "LoRa"

#include <SPI.h>
#include <LoRa.h>

// Pin definitions for SX1278
#define SS_PIN    10
#define RST_PIN   9
#define DIO0_PIN  2

int counter = 0;

void setup() {
  Serial.begin(9600);
  while (!Serial);

  Serial.println("LoRa Sender Initializing...");

  LoRa.setPins(SS_PIN, RST_PIN, DIO0_PIN);

  if (!LoRa.begin(433E6)) {  // 433 MHz — change for your region
    Serial.println("LoRa init failed!");
    while (1);
  }

  LoRa.setSpreadingFactor(7);   // SF7 for faster data rate
  LoRa.setSignalBandwidth(125E3);
  LoRa.setCodingRate4(5);

  Serial.println("LoRa Sender Ready!");
}

void loop() {
  Serial.print("Sending packet #");
  Serial.println(counter);

  // Send LoRa packet
  LoRa.beginPacket();
  LoRa.print("Hello LoRa #");
  LoRa.print(counter);
  LoRa.endPacket();

  counter++;
  delay(3000);  // Send every 3 seconds
}

/* ─── RECEIVER CODE (upload to second Arduino) ───
#include <SPI.h>
#include <LoRa.h>

#define SS_PIN    10
#define RST_PIN   9
#define DIO0_PIN  2

void setup() {
  Serial.begin(9600);
  while (!Serial);
  Serial.println("LoRa Receiver Initializing...");

  LoRa.setPins(SS_PIN, RST_PIN, DIO0_PIN);
  if (!LoRa.begin(433E6)) {
    Serial.println("LoRa init failed!");
    while (1);
  }
  Serial.println("LoRa Receiver Ready!");
}

void loop() {
  int packetSize = LoRa.parsePacket();
  if (packetSize) {
    String received = "";
    while (LoRa.available()) {
      received += (char)LoRa.read();
    }
    Serial.print("Received: ");
    Serial.print(received);
    Serial.print(" | RSSI: ");
    Serial.println(LoRa.packetRssi());
  }
}
*/`;

    /* ── Connection Table + Extra Sections ── */
    const connectionTable = (
        <section className="mb-10">
            <h2 className="text-xl font-semibold text-surface-100 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-yellow-500 inline-block" />
                Connection Table
            </h2>
            <div className="overflow-x-auto rounded-xl border border-surface-800/50">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-surface-900/60">
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">SX1278 Pin</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Arduino Uno Pin</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-800/40">
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">VCC</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">3.3V</td>
                            <td className="px-4 py-2.5 text-surface-400">Do NOT use 5V — will damage module</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">GND</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">GND</td>
                            <td className="px-4 py-2.5 text-surface-400">Common ground</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">SCK</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 13</td>
                            <td className="px-4 py-2.5 text-surface-400">SPI Clock</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">MISO</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 12</td>
                            <td className="px-4 py-2.5 text-surface-400">SPI Data Out</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">MOSI</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 11</td>
                            <td className="px-4 py-2.5 text-surface-400">SPI Data In</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">NSS</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 10</td>
                            <td className="px-4 py-2.5 text-surface-400">SPI Chip Select</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">RST</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 9</td>
                            <td className="px-4 py-2.5 text-surface-400">Module reset</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">DIO0</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 2</td>
                            <td className="px-4 py-2.5 text-surface-400">Interrupt — TX/RX complete signal</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Schematics Explanation */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Circuit Connection Overview</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                    Connect the SX1278 VCC to Arduino 3.3V (never 5V) and GND to GND. Wire the SPI pins: SCK → Pin 13, MISO → Pin 12, MOSI → Pin 11, NSS → Pin 10. Connect RST to Pin 9 and DIO0 to Pin 2 for interrupt handling. Attach a proper antenna (wire or SMA) to the ANT pad — operating without an antenna can damage the module. For two-way communication, build two identical circuits.
                </p>
            </div>

            {/* Required Components */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Required Components</h3>
                <ul className="text-surface-400 text-sm leading-relaxed space-y-1.5 list-disc list-inside">
                    <li>2× Arduino Uno (or compatible boards)</li>
                    <li>2× SX1278 LoRa Module (433 MHz)</li>
                    <li>2× Antenna (spring antenna or SMA with cable)</li>
                    <li>Jumper wires and breadboard</li>
                    <li>USB cables for programming</li>
                </ul>
            </div>

            {/* YouTube Tutorial */}
            <div className="mt-6">
                <h3 className="text-base font-semibold text-surface-100 mb-3">📺 Recommended Video Tutorial</h3>
                <YoutubeEmbed id="7TRaUO3egsE" title="Arduino LoRa SX1278 — Long Range Communication Tutorial" />
            </div>

            {/* Expected Output */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Expected Output</h3>
                <pre className="text-surface-400 text-sm font-mono leading-relaxed">
                    {`--- Sender Serial Monitor ---
LoRa Sender Ready!
Sending packet #0
Sending packet #1
Sending packet #2

--- Receiver Serial Monitor ---
LoRa Receiver Ready!
Received: Hello LoRa #0 | RSSI: -45
Received: Hello LoRa #1 | RSSI: -48
Received: Hello LoRa #2 | RSSI: -52`}
                </pre>
            </div>

            {/* Conclusion */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Conclusion</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                    LoRa is the best choice for long-range, low-power wireless communication in IoT. With the SX1278 module, you can build sensor networks spanning several kilometres — perfect for smart agriculture, weather stations, and remote asset tracking. For large-scale deployments, consider using LoRaWAN with a gateway for managing hundreds of devices.
                </p>
            </div>
        </section>
    );

    return (
        <ModuleContent
            title="Arduino LoRa — SX1278 Module"
            images={images}
            description={description}
            features={features}
            howItWorks={howItWorks}
            pinout={pinout}
            code={code}
            backTo={{ label: "Back to Connectivity", to: "/tutorial/arduino/connectivity" }}
        >
            {connectionTable}
        </ModuleContent>
    );
}

