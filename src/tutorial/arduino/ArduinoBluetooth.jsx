import ModuleContent from "../../components/ModuleContent";
import bl1 from "../../assets/ArdinoConnectivity/Bluetooth/bl1.jpg";
import bl2 from "../../assets/ArdinoConnectivity/Bluetooth/bl2.jpg";
import bl3 from "../../assets/ArdinoConnectivity/Bluetooth/bl3.jpg";

export default function ArduinoBluetooth() {
    const images = [
        bl1,
        bl2,
        bl3
    ];

    const description =
        "The HC-05 is a classic Bluetooth 2.0 module that enables wireless serial communication between an Arduino and other Bluetooth-enabled devices like smartphones, laptops, or other microcontrollers. It supports both Master and Slave modes, making it extremely versatile for wireless data transfer over short distances (up to 10 meters). It communicates with Arduino via UART serial, replacing wired serial connections with a wireless link.";

    const features = [
        "Operating Voltage: 3.6V – 6V (onboard 3.3V regulator)",
        "Bluetooth Standard: v2.0 + EDR (Enhanced Data Rate)",
        "Default baud rate: 9600 bps (configurable via AT commands)",
        "Supports Master and Slave modes",
        "Communication range: up to 10 meters",
        "Configurable via AT commands (device name, PIN, baud rate)",
        "Built-in LED indicators for connection status",
        "Low power consumption — suitable for battery-powered projects",
    ];

    const howItWorks = [
        { point: "The HC-05 module creates a Serial Port Profile (SPP) that emulates a virtual serial port over Bluetooth." },
        { point: "When paired with a device (phone or another HC-05), data sent from the Arduino TX pin is wirelessly transmitted to the connected device." },
        { point: "Similarly, data received by the HC-05 from the paired device is forwarded to the Arduino via the RX pin." },
        { point: "In AT command mode (triggered by holding the KEY button during power-up), you can configure settings like device name, PIN code, and baud rate." },
    ];

    const pinout = [
        { pin: "VCC", function: "Power supply (3.6V – 6V)" },
        { pin: "GND", function: "Ground connection" },
        { pin: "TX", function: "Transmit data to Arduino RX" },
        { pin: "RX", function: "Receive data from Arduino TX (use voltage divider for 5V)" },
        { pin: "STATE", function: "Connection status output (HIGH when connected)" },
        { pin: "KEY (EN)", function: "AT command mode — hold HIGH at power-up to enter AT mode" },
    ];

    const code = `// Arduino HC-05 Bluetooth — Send & Receive Data
// Wiring: HC-05 TX -> Arduino Pin 10 (SoftwareSerial RX)
//         HC-05 RX -> Arduino Pin 11 via voltage divider

#include <SoftwareSerial.h>

SoftwareSerial btSerial(10, 11); // RX, TX

void setup() {
  Serial.begin(9600);
  btSerial.begin(9600);  // HC-05 default baud rate
  Serial.println("HC-05 Bluetooth Ready!");
  Serial.println("Pair with device and send data...");
}

void loop() {
  // Read from Bluetooth and print to Serial Monitor
  if (btSerial.available()) {
    char received = btSerial.read();
    Serial.print("Received: ");
    Serial.println(received);

    // Toggle LED based on received command
    if (received == '1') {
      digitalWrite(13, HIGH);
      btSerial.println("LED ON");
      Serial.println("LED turned ON");
    }
    else if (received == '0') {
      digitalWrite(13, LOW);
      btSerial.println("LED OFF");
      Serial.println("LED turned OFF");
    }
  }

  // Send data from Serial Monitor to Bluetooth
  if (Serial.available()) {
    char toSend = Serial.read();
    btSerial.write(toSend);
  }
}`;

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
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">HC-05 Pin</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Arduino Pin</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-800/40">
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">VCC</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">5V</td>
                            <td className="px-4 py-2.5 text-surface-400">Module has onboard 3.3V regulator</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">GND</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">GND</td>
                            <td className="px-4 py-2.5 text-surface-400">Common ground</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">TX</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 10</td>
                            <td className="px-4 py-2.5 text-surface-400">SoftwareSerial RX</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">RX</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 11</td>
                            <td className="px-4 py-2.5 text-surface-400">Via voltage divider (5V → 3.3V)</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">KEY</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Not connected</td>
                            <td className="px-4 py-2.5 text-surface-400">Connect to 3.3V for AT mode</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Schematics Explanation */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Circuit Connection Overview</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                    Connect HC-05 VCC to Arduino 5V and GND to GND. The TX pin of HC-05 goes directly to Arduino pin 10 (SoftwareSerial RX) since the output is already at 3.3V logic. For the RX pin, create a voltage divider using a 1kΩ resistor from Arduino pin 11 and a 2kΩ resistor to GND, connecting the midpoint to HC-05 RX. This steps down the 5V signal to ~3.3V. Connect an LED to pin 13 for testing Bluetooth control.
                </p>
            </div>

            {/* Step-by-Step Setup */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Step-by-Step Setup</h3>
                <ol className="text-surface-400 text-sm leading-relaxed space-y-1.5 list-decimal list-inside">
                    <li>Wire the HC-05 to Arduino as shown in the connection table above.</li>
                    <li>Upload the example code to your Arduino board.</li>
                    <li>Open Serial Monitor at 9600 baud.</li>
                    <li>Power on the HC-05 — the LED will blink rapidly (pairing mode).</li>
                    <li>On your phone, enable Bluetooth and pair with &quot;HC-05&quot; (default PIN: 1234).</li>
                    <li>Use a Bluetooth terminal app (e.g., &quot;Serial Bluetooth Terminal&quot; on Android).</li>
                    <li>Send &apos;1&apos; to turn LED ON, &apos;0&apos; to turn LED OFF.</li>
                </ol>
            </div>

            {/* YouTube Tutorial */}
                        <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50 w-fit">
                <h3 className="text-base font-semibold text-surface-100 mb-2">
                    📺 Recommended Video Tutorial
                </h3>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aQcJ4uHdQEA?si=gPoRLA0bH92fk82"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            ></iframe>

    <p className="mt-2 text-sm text-surface-200">
        Arduino Bluetooth HC-05 — Wireless Control Tutorial  (YouTube)
    </p>
</div>
            {/* Expected Output */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Expected Output</h3>
                <pre className="text-surface-400 text-sm font-mono leading-relaxed">
                    {`HC-05 Bluetooth Ready!
Pair with device and send data...

Received: 1
LED turned ON

Received: 0
LED turned OFF`}
                </pre>
            </div>

            {/* Conclusion */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Conclusion</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                    The HC-05 Bluetooth module is an excellent choice for wireless serial communication. It enables you to control Arduino-based devices from your smartphone, transfer sensor data wirelessly, and create remote control systems. Its ability to operate in both Master and Slave modes makes it ideal for multi-device Bluetooth networks in IoT applications.
                </p>
            </div>
        </section>
    );

    return (
        <ModuleContent
            title="Arduino Bluetooth — HC-05 Module"
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

