import ModuleContent from "../../components/ModuleContent";
import ble1 from "../../assets/ArdinoConnectivity/BLE/ble1.png";
import ble2 from "../../assets/ArdinoConnectivity/BLE/ble2.jpg";
import ble3 from "../../assets/ArdinoConnectivity/BLE/ble3.webp";

export default function ArduinoBLE() {
    const images = [
      ble1,
      ble2,
      ble3
    ];

    const description =
        "The HM-10 is a Bluetooth Low Energy (BLE 4.0) module designed for low-power, always-on connections. Unlike classic Bluetooth (HC-05), BLE is optimized for periodic, small data transfers — perfect for wearable devices, health monitors, beacons, and smart home sensors. It works natively with iOS (iPhone/iPad) and Android, making it the go-to choice for mobile app integration.";

    const features = [
        "Operating Voltage: 3.3V (some breakouts accept 5V via regulator)",
        "Bluetooth Standard: BLE 4.0 (Bluetooth Low Energy)",
        "Ultra-low power consumption — ideal for battery-powered devices",
        "Compatible with iOS (CoreBluetooth) and Android (BLE API)",
        "Default baud rate: 9600 bps (configurable via AT commands)",
        "Acts as a BLE peripheral (GATT server)",
        "Supports UART transparent data transfer",
        "No manual pairing required — auto-connects with BLE apps",
    ];

    const howItWorks = [
        { point: "The HM-10 advertises itself as a BLE peripheral. When a central device (phone/tablet) scans for BLE devices, it discovers the HM-10." },
        { point: "Once connected, data is exchanged through GATT (Generic Attribute Profile) characteristics — the HM-10 maps UART data to a BLE characteristic." },
        { point: "The Arduino sends serial data to the HM-10 via UART TX/RX. The HM-10 transmits this data over BLE to the connected device." },
        { point: "BLE uses very short, infrequent data bursts instead of maintaining a continuous connection, significantly reducing power consumption compared to classic Bluetooth." },
    ];

    const pinout = [
        { pin: "VCC", function: "Power supply input (3.3V)" },
        { pin: "GND", function: "Ground connection" },
        { pin: "TX", function: "Transmit data to Arduino RX" },
        { pin: "RX", function: "Receive data from Arduino TX (3.3V logic)" },
        { pin: "STATE", function: "Connection status (HIGH when connected)" },
        { pin: "BRK", function: "Break connection / enter AT mode" },
    ];

    const code = `// Arduino HM-10 BLE — Send Sensor Data to Phone
// Wiring: HM-10 TX -> Arduino Pin 8 (SoftwareSerial RX)
//         HM-10 RX -> Arduino Pin 9 (via voltage divider if 5V board)

#include <SoftwareSerial.h>

SoftwareSerial bleSerial(8, 9); // RX, TX

int sensorPin = A0;

void setup() {
  Serial.begin(9600);
  bleSerial.begin(9600);  // HM-10 default baud rate
  Serial.println("HM-10 BLE Module Ready!");
  Serial.println("Connect via BLE app (e.g., nRF Connect)...");
}

void loop() {
  // Read analog sensor value
  int sensorValue = analogRead(sensorPin);
  float voltage = sensorValue * (5.0 / 1023.0);

  // Send data over BLE
  String data = "Sensor: " + String(sensorValue) + " | V: " + String(voltage, 2) + "V";
  bleSerial.println(data);
  Serial.println(data);

  // Check for incoming BLE commands
  if (bleSerial.available()) {
    String command = bleSerial.readStringUntil('\\n');
    command.trim();
    Serial.print("BLE Command: ");
    Serial.println(command);

    if (command == "LED_ON") {
      digitalWrite(13, HIGH);
      bleSerial.println("LED is ON");
    }
    else if (command == "LED_OFF") {
      digitalWrite(13, LOW);
      bleSerial.println("LED is OFF");
    }
  }

  delay(1000);  // Send data every 1 second
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
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">HM-10 Pin</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Arduino Pin</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-800/40">
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">VCC</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">3.3V</td>
                            <td className="px-4 py-2.5 text-surface-400">Use 3.3V only (or breakout with regulator)</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">GND</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">GND</td>
                            <td className="px-4 py-2.5 text-surface-400">Common ground</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">TX</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 8</td>
                            <td className="px-4 py-2.5 text-surface-400">SoftwareSerial RX</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">RX</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 9</td>
                            <td className="px-4 py-2.5 text-surface-400">Via voltage divider if using 5V Arduino</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Schematics Explanation */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Circuit Connection Overview</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                    Connect HM-10 VCC to Arduino 3.3V and GND to GND. The TX pin of the HM-10 connects directly to Arduino pin 8 (SoftwareSerial RX). For the RX connection, use a voltage divider (1kΩ + 2kΩ) to step down the Arduino&apos;s 5V output on pin 9 to 3.3V. Connect a potentiometer or any analog sensor to A0 for testing data transmission. Optionally connect an LED to pin 13 for remote control testing.
                </p>
            </div>

            {/* Step-by-Step Setup */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Step-by-Step Setup</h3>
                <ol className="text-surface-400 text-sm leading-relaxed space-y-1.5 list-decimal list-inside">
                    <li>Wire the HM-10 module to Arduino as shown above.</li>
                    <li>Upload the example code to your Arduino.</li>
                    <li>Open Serial Monitor at 9600 baud.</li>
                    <li>On your phone, install &quot;nRF Connect&quot; or &quot;LightBlue&quot; app.</li>
                    <li>Scan for BLE devices — look for &quot;HMSoft&quot; or &quot;BLE Module&quot;.</li>
                    <li>Connect and navigate to the UART service characteristic.</li>
                    <li>You should see sensor data streaming. Send &quot;LED_ON&quot; or &quot;LED_OFF&quot; to control the LED.</li>
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
                src="https://www.youtube.com/embed/MV7EUEoc9dI?si=oUtBQoElN0__5Scg"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            ></iframe>

    <p className="mt-2 text-sm text-surface-200">
        Arduino Ethernet Shield W5100 — Web Server Tutorial (YouTube)
    </p>
</div>

            {/* Expected Output */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Expected Output</h3>
                <pre className="text-surface-400 text-sm font-mono leading-relaxed">
                    {`HM-10 BLE Module Ready!
Connect via BLE app (e.g., nRF Connect)...

Sensor: 512 | V: 2.50V
Sensor: 530 | V: 2.59V
BLE Command: LED_ON
Sensor: 498 | V: 2.43V`}
                </pre>
            </div>

            {/* Conclusion */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Conclusion</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                    The HM-10 BLE module is the best choice when you need to connect Arduino to modern smartphones, especially iPhones (which don&apos;t support classic Bluetooth SPP). Its ultra-low power consumption makes it perfect for battery-operated wearables, environmental monitors, and smart home sensors that need to communicate with mobile apps.
                </p>
            </div>
        </section>
    );

    return (
        <ModuleContent
            title="Arduino BLE — HM-10 Module"
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
