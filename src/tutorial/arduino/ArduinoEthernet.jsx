import ModuleContent from "../../components/ModuleContent";
import ether1 from "../../assets/ArdinoConnectivity/Ethernet/ether1.jpg";
import ether2 from "../../assets/ArdinoConnectivity/Ethernet/ether2.jpg";
import ethernet from "../../assets/ArdinoConnectivity/Ethernet/ethrnet.webp";

export default function ArduinoEthernet() {
    const images = [
        ether1,
        ether2,
        ethernet
    ];

    const description =
        "The Arduino Ethernet Shield (W5100) provides wired internet connectivity to your Arduino board. It plugs directly onto an Arduino Uno and uses the SPI bus for communication. With a built-in TCP/IP stack (TCP, UDP, IPv4, ICMP, ARP, DHCP, DNS), it handles all network protocols internally, so you can easily create web servers, HTTP clients, and IoT devices with reliable, always-on wired connections.";

    const features = [
        "Chipset: WIZnet W5100 with hardwired TCP/IP stack",
        "Speed: 10/100 Mbps Ethernet",
        "Supports 4 simultaneous socket connections",
        "Protocols: TCP, UDP, ICMP, ARP, IGMP, PPPoE",
        "Built-in DHCP and DNS client support",
        "Micro SD card slot for data logging",
        "RJ45 jack with integrated magnetics and LEDs",
        "Stacks directly on Arduino Uno — no extra wiring needed",
    ];

    const howItWorks = [
        { point: "The W5100 chip has a hardwired TCP/IP stack, meaning the Arduino doesn't need to process network protocols in software — the shield handles it all." },
        { point: "The shield communicates with Arduino via SPI (pins 10, 11, 12, 13). Pin 10 is the Chip Select for the Ethernet chip, and Pin 4 is the CS for the SD card." },
        { point: "Using the Ethernet library, you can assign an IP (or use DHCP), open server/client sockets, send HTTP requests, and serve web pages — all with a few lines of code." },
        { point: "The RJ45 connector plugs into your network router or switch using a standard Ethernet cable, providing a stable, low-latency wired connection." },
    ];

    const pinout = [
        { pin: "Pin 10", function: "SPI Chip Select — Ethernet (W5100)" },
        { pin: "Pin 4", function: "SPI Chip Select — SD Card" },
        { pin: "Pin 11", function: "SPI MOSI (shared)" },
        { pin: "Pin 12", function: "SPI MISO (shared)" },
        { pin: "Pin 13", function: "SPI SCK (shared)" },
        { pin: "ICSP Header", function: "Alternative SPI connection on Mega" },
        { pin: "RJ45", function: "Ethernet cable connector" },
        { pin: "SD Slot", function: "Micro SD for data logging" },
    ];

    const code = `// Arduino Ethernet Shield — Simple Web Server
// The shield stacks on the Arduino — no extra wiring needed

#include <SPI.h>
#include <Ethernet.h>

// MAC address (printed on your shield's sticker)
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };

// Set a static IP (or use DHCP — see below)
IPAddress ip(192, 168, 1, 177);

EthernetServer server(80);  // Web server on port 80

void setup() {
  Serial.begin(9600);
  while (!Serial);

  Serial.println("Ethernet Shield Initializing...");

  // Start Ethernet with DHCP (fallback to static IP)
  if (Ethernet.begin(mac) == 0) {
    Serial.println("DHCP failed, using static IP...");
    Ethernet.begin(mac, ip);
  }

  server.begin();
  Serial.print("Web server running at: http://");
  Serial.println(Ethernet.localIP());
}

void loop() {
  EthernetClient client = server.available();

  if (client) {
    Serial.println("New client connected!");
    boolean currentLineIsBlank = true;
    String request = "";

    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        request += c;

        if (c == '\\n' && currentLineIsBlank) {
          // Send HTTP response
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");
          client.println();

          // HTML page with sensor data
          int sensorValue = analogRead(A0);
          client.println("<!DOCTYPE html><html>");
          client.println("<head><title>Arduino Web Server</title>");
          client.println("<meta http-equiv='refresh' content='5'>");
          client.println("<style>body{font-family:Arial;background:#1a1a2e;");
          client.println("color:#eee;padding:40px;text-align:center;}");
          client.println("h1{color:#00d4aa;}.val{font-size:48px;");
          client.println("color:#4fc3f7;margin:20px;}</style></head>");
          client.println("<body><h1>Arduino Ethernet Server</h1>");
          client.print("<p class='val'>");
          client.print(sensorValue);
          client.println("</p><p>Analog Sensor (A0)</p>");
          client.println("<p>Auto-refreshes every 5 seconds</p>");
          client.println("</body></html>");
          break;
        }

        if (c == '\\n') currentLineIsBlank = true;
        else if (c != '\\r') currentLineIsBlank = false;
      }
    }
    delay(1);
    client.stop();
    Serial.println("Client disconnected.");
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
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Shield Pin</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Arduino Pin</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-800/40">
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">Stack</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">All pins</td>
                            <td className="px-4 py-2.5 text-surface-400">Shield stacks directly on Arduino Uno</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">ETH CS</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 10</td>
                            <td className="px-4 py-2.5 text-surface-400">Ethernet chip select (reserved)</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">SD CS</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pin 4</td>
                            <td className="px-4 py-2.5 text-surface-400">SD card chip select (reserved)</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">SPI</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">Pins 11, 12, 13</td>
                            <td className="px-4 py-2.5 text-surface-400">Shared SPI bus (MOSI, MISO, SCK)</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-arduino">RJ45</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">—</td>
                            <td className="px-4 py-2.5 text-surface-400">Connect Ethernet cable to router/switch</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Schematics Explanation */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Circuit Connection Overview</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                    The Ethernet Shield is designed to stack directly onto the Arduino Uno — simply align the headers and press down. No additional wiring is required. Connect an Ethernet cable from the shield&apos;s RJ45 jack to your network router or switch. The shield uses SPI pins (10, 11, 12, 13) internally and pin 4 for the SD card. Avoid using these pins for other purposes when the shield is attached. If using the SD card, insert a FAT16/FAT32-formatted micro SD card.
                </p>
            </div>

            {/* Step-by-Step Setup */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Step-by-Step Setup</h3>
                <ol className="text-surface-400 text-sm leading-relaxed space-y-1.5 list-decimal list-inside">
                    <li>Stack the Ethernet Shield on top of the Arduino Uno.</li>
                    <li>Connect an Ethernet cable from the shield to your router.</li>
                    <li>Connect the Arduino to your computer via USB.</li>
                    <li>Upload the example code.</li>
                    <li>Open Serial Monitor at 9600 baud to see the assigned IP.</li>
                    <li>Open a web browser and type the IP address shown in Serial Monitor.</li>
                    <li>The web page will display the analog sensor value, refreshing every 5 seconds.</li>
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
        src="https://www.youtube.com/embed/9ja6DzO0MMc"
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
                    {`Ethernet Shield Initializing...
Web server running at: http://192.168.1.177

New client connected!
Client disconnected.

New client connected!
Client disconnected.`}
                </pre>
                <p className="text-surface-400 text-sm mt-2">
                    Opening <code className="text-primary-400">http://192.168.1.177</code> in a browser will show a styled page with the live analog sensor reading, auto-refreshing every 5 seconds.
                </p>
            </div>

            {/* Conclusion */}
            <div className="mt-6 p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                <h3 className="text-base font-semibold text-surface-100 mb-2">Conclusion</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                    The Arduino Ethernet Shield (W5100) is the most reliable way to connect your Arduino to the internet. Its wired connection offers stable, low-latency communication — ideal for industrial IoT, home automation control panels, and data logging servers. Combined with the built-in SD card slot, you can create self-contained IoT devices that serve web pages and log data simultaneously.
                </p>
            </div>
        </section>
    );

    return (
        <ModuleContent
            title="Arduino Ethernet — W5100 Shield"
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
