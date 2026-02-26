import ModuleContent from "../../components/ModuleContent";
import wifi1 from "../../assets/ArdinoConnectivity/WIFI/wifi-1.jpg"
import wifi2 from "../../assets/ArdinoConnectivity/WIFI/wifi-2.jpg"
import wifi3 from "../../assets/ArdinoConnectivity/WIFI/wifi-3.jpg"

export default function ArduinoWiFi() {
    const images = [
        wifi1,
        wifi2,
        wifi3
    ];

    const description =
        "The ESP8266 WiFi module (or shield) adds wireless internet connectivity to any Arduino board. It operates on the 2.4 GHz band and supports 802.11 b/g/n standards, allowing your Arduino to connect to Wi-Fi networks, host web servers, send HTTP requests, and communicate over MQTT. It is widely used in IoT projects for remote monitoring and cloud-based data logging.";

    const features = [
        "Operating Voltage: 3.3V (use level shifter with 5V Arduino)",
        "Wi-Fi Standard: 802.11 b/g/n — 2.4 GHz band",
        "Supports TCP/UDP protocols and HTTP/MQTT communication",
        "Built-in AT firmware — controlled via serial AT commands",
        "Can act as Station (STA), Access Point (AP), or both (STA+AP)",
        "Flash memory for storing firmware and configuration",
        "Low cost and widely available",
        "Large community support and extensive libraries",
    ];

    const howItWorks = [
        { point: "The ESP8266 module communicates with the Arduino via UART serial (TX/RX pins) using AT commands." },
        { point: "When the Arduino sends an AT command (e.g., AT+CWJAP to join a network), the ESP8266 processes it and connects to the specified Wi-Fi access point." },
        { point: "Once connected, data can be sent or received over TCP/UDP sockets — enabling HTTP requests, MQTT publishing, or hosting a simple web server." },
        { point: "The module handles all Wi-Fi protocol layers internally, so the Arduino only needs to send and receive serial data." },
    ];

    const pinout = [
        { pin: "VCC", function: "Power supply input (3.3V only)" },
        { pin: "GND", function: "Ground connection" },
        { pin: "TX", function: "Transmit data to Arduino RX" },
        { pin: "RX", function: "Receive data from Arduino TX (use voltage divider for 5V boards)" },
        { pin: "CH_PD (EN)", function: "Chip enable — connect to 3.3V for normal operation" },
        { pin: "RST", function: "Reset pin (active LOW)" },
        { pin: "GPIO0", function: "General purpose I/O / boot mode select" },
        { pin: "GPIO2", function: "General purpose I/O" },
    ];

    const code = `// Arduino ESP8266 WiFi — Connect to Network & Send HTTP GET
// Wiring: ESP8266 TX -> Arduino Pin 2 (SoftwareSerial RX)
//         ESP8266 RX -> Arduino Pin 3 via voltage divider (SoftwareSerial TX)

#include <SoftwareSerial.h>

SoftwareSerial espSerial(2, 3); // RX, TX

void setup() {
  Serial.begin(9600);
  espSerial.begin(115200);  // Default ESP8266 baud rate
  delay(1000);

  Serial.println("Initializing ESP8266...");
  sendCommand("AT", 2000);             // Test connection
  sendCommand("AT+CWMODE=1", 2000);    // Set Station mode
  sendCommand("AT+CWJAP=\\"YourSSID\\",\\"YourPassword\\"", 8000); // Connect to Wi-Fi

  Serial.println("WiFi Connected!");
}

void loop() {
  // Send HTTP GET request every 10 seconds
  sendCommand("AT+CIPSTART=\\"TCP\\",\\"httpbin.org\\",80", 5000);
  
  String httpRequest = "GET /get HTTP/1.1\\r\\nHost: httpbin.org\\r\\n\\r\\n";
  sendCommand("AT+CIPSEND=" + String(httpRequest.length()), 2000);
  espSerial.print(httpRequest);
  
  delay(5000);
  
  while (espSerial.available()) {
    Serial.write(espSerial.read());
  }
  
  sendCommand("AT+CIPCLOSE", 2000);
  delay(10000);
}

void sendCommand(String cmd, int timeout) {
  espSerial.println(cmd);
  long int time = millis();
  while ((millis() - time) < timeout) {
    while (espSerial.available()) {
      char c = espSerial.read();
      Serial.write(c);
    }
  }
  Serial.println();
}`;

    /* ── Connection Table ── */
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
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">ESP8266 Pin</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Arduino Pin</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-800/40">
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">VCC</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">3.3V</td>
                            <td className="px-4 py-2.5 text-surface-400">Do NOT connect to 5V</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">GND</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">GND</td>
                            <td className="px-4 py-2.5 text-surface-400">Common ground</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">TX</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 2</td>
                            <td className="px-4 py-2.5 text-surface-400">SoftwareSerial RX</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">RX</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 3</td>
                            <td className="px-4 py-2.5 text-surface-400">Via voltage divider (5V → 3.3V)</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">CH_PD</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">3.3V</td>
                            <td className="px-4 py-2.5 text-surface-400">Enable pin — must be HIGH</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">RST</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Not connected</td>
                            <td className="px-4 py-2.5 text-surface-400">Optional — pull HIGH for stability</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Schematics Explanation */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Circuit Connection Overview</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                    Connect the ESP8266 VCC to Arduino&apos;s 3.3V output and GND to GND. The TX pin of the ESP8266 goes directly to Arduino digital pin 2 (SoftwareSerial RX). For the RX pin, use a voltage divider (two resistors: 1kΩ and 2kΩ) to step down the Arduino&apos;s 5V TX signal to 3.3V. Connect CH_PD (EN) to 3.3V to keep the module enabled. Optionally pull RST high with a 10kΩ resistor for stability.
                </p>
            </div>

            {/* YouTube Tutorial */}
                        <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50 w-fit">
                <h3 className="text-base font-semibold text-surface-100 mb-2">
                    📺 Recommended Video Tutorial
                </h3>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cja6T7BgP2Q?si=Kjnno1tXx7mSEl2y"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            ></iframe>

    <p className="mt-2 text-sm text-surface-200">
        Arduino + ESP8266 — WiFi Web Server Project Tutorial (YouTube)
    </p>
</div>

            {/* Expected Output */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Expected Output</h3>
                <pre className="text-surface-400 text-sm font-mono leading-relaxed">
                    {`Initializing ESP8266...
AT — OK
AT+CWMODE=1 — OK
AT+CWJAP="YourSSID","YourPassword" — WIFI CONNECTED
WiFi Connected!

HTTP/1.1 200 OK
{
  "origin": "203.x.x.x",
  "url": "http://httpbin.org/get"
}`}
                </pre>
            </div>

            {/* Conclusion */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Conclusion</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                    The ESP8266 WiFi module is one of the most affordable and versatile ways to add internet connectivity to your Arduino projects. With simple AT commands over serial, you can connect to Wi-Fi, send HTTP requests, and build full IoT applications. For more advanced use, consider programming the ESP8266 directly using the Arduino IDE with the ESP8266 board package.
                </p>
            </div>
        </section>
    );

    return (
        <ModuleContent
            title="Arduino WiFi — ESP8266 Shield"
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

