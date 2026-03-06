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
   ESP32 Wi-Fi Protocol — Full Page
═══════════════════════════════════════════════ */
export default function WifiProtocol() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/protocols" className="hover:text-primary-400 transition-colors">Protocols</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Wi-Fi</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">Wi-Fi</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                The ESP32's built-in IEEE 802.11 b/g/n Wi-Fi radio enables seamless connection to local networks and the internet — the backbone of cloud-connected IoT devices.
            </p>

            <PlaceholderImage label="ESP32 Wi-Fi — Station, Access Point, and AP+STA operating modes diagram" />

            <SectionCard number="1" title="What is this Protocol?">
                <strong className="text-surface-200">Wi-Fi (IEEE 802.11)</strong> is a family of wireless networking standards that enable devices to exchange data over a local area network (LAN) using radio waves on the 2.4 GHz (or 5 GHz) band. The ESP32 supports <strong className="text-surface-200">802.11 b/g/n</strong> on the 2.4 GHz band with data rates up to 150 Mbps.
                <br /><br />
                The ESP32 can operate in three Wi-Fi modes:
                <ul className="mt-2 space-y-1">
                    <li className="flex gap-2"><span className="text-esp32">▸</span><span><strong className="text-surface-200">Station (STA)</strong> — connects to an existing router or access point</span></li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><span><strong className="text-surface-200">Access Point (AP)</strong> — acts as a router, hosts its own Wi-Fi network</span></li>
                    <li className="flex gap-2"><span className="text-esp32">▸</span><span><strong className="text-surface-200">AP + STA</strong> — both simultaneously (mesh-like setups)</span></li>
                </ul>
            </SectionCard>

            <SectionCard number="2" title="Why it is Used in ESP32">
                Wi-Fi gives the ESP32 full internet access, enabling it to communicate with <strong className="text-surface-200">cloud platforms</strong> (AWS IoT, Firebase, Azure), send HTTP/HTTPS requests to REST APIs, receive OTA firmware updates, and serve web pages from its own built-in web server. No additional hardware is needed — the radio is integrated on the chip itself, keeping BOM cost low.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The ESP32's Wi-Fi stack handles all low-level 802.11 management: <strong className="text-surface-200">beacon scanning</strong>, authentication (WPA/WPA2/WPA3), association, DHCP address assignment, and automatic reconnection on link loss. The application layer simply calls high-level Arduino or IDF APIs. Once connected, the TCP/IP stack (LwIP) provides sockets for HTTP, MQTT, WebSocket, and other protocols.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {['Sending sensor data to cloud dashboards (ThingSpeak, Grafana)', 'Hosting a local web UI for device control and monitoring', 'OTA (Over-The-Air) firmware update delivery', 'HTTP REST API calls to external services', 'Smart home device integration (Google Home, Alexa)', 'Industrial telemetry gateways'].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example with ESP32">
                Install no extra library — Wi-Fi support is built into the ESP32 Arduino core. Connect to a network and make an HTTP GET request:
                <CodeSnippet>{`#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid     = "YourSSID";
const char* password = "YourPassword";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500); Serial.print(".");
  }
  Serial.println("\\nConnected! IP: " + WiFi.localIP().toString());

  HTTPClient http;
  http.begin("http://api.example.com/data");
  int code = http.GET();
  if (code > 0) Serial.println(http.getString());
  http.end();
}

void loop() {}`}</CodeSnippet>
            </SectionCard>

            {/* Navigation */}
            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/protocols" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    All Protocols
                </Link>
                <Link to="/tutorial/esp32/protocols/mqtt" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    MQTT Protocol
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
