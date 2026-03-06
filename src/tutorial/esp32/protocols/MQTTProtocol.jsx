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
   ESP32 MQTT Protocol — Full Page
═══════════════════════════════════════════════ */
export default function MQTTProtocol() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/protocols" className="hover:text-primary-400 transition-colors">Protocols</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">MQTT</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">MQTT</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                MQTT is the industry-standard lightweight messaging protocol for IoT — enabling the ESP32 to publish sensor data and subscribe to control commands through a central broker with minimal bandwidth.
            </p>

            <PlaceholderImage label="ESP32 MQTT — publish/subscribe model with Mosquitto broker and cloud dashboard" />

            <SectionCard number="1" title="What is this Protocol?">
                <strong className="text-surface-200">MQTT</strong> (Message Queuing Telemetry Transport) is a lightweight, <strong className="text-surface-200">publish/subscribe</strong> messaging protocol designed for constrained devices and low-bandwidth, unreliable networks. It operates over TCP/IP and was developed by IBM in the late 1990s for monitoring oil pipelines via satellite. Today it is an <strong className="text-surface-200">OASIS</strong> open standard (ISO/IEC 20922).
                <br /><br />
                Key concepts: <strong className="text-surface-200">Broker</strong> — central message server (e.g., Mosquitto, HiveMQ) | <strong className="text-surface-200">Publisher</strong> — sends messages to a topic | <strong className="text-surface-200">Subscriber</strong> — receives messages from a topic | <strong className="text-surface-200">Topic</strong> — hierarchical message channel (e.g., <code className="text-esp32 bg-esp32/10 px-1 rounded">home/living-room/temp</code>).
            </SectionCard>

            <SectionCard number="2" title="Why it is Used in ESP32">
                MQTT's minimal protocol overhead (as little as <strong className="text-surface-200">2 bytes</strong> per message header) makes it ideal for battery-powered ESP32 devices on slow connections. The broker handles routing — the ESP32 only needs to maintain one TCP connection, publish readings, and listen for commands. QoS levels 0, 1, and 2 give fine-grained control over delivery guarantees without implementing custom retry logic.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The ESP32 connects to an MQTT broker and <strong className="text-surface-200">publishes</strong> messages to named <em>topics</em>. Other devices or dashboards that have <strong className="text-surface-200">subscribed</strong> to that topic receive the message instantly. The broker acts as an intermediary — publishers and subscribers never communicate directly. Retained messages allow new subscribers to immediately receive the last known value on connection.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {['Real-time sensor dashboards (Node-RED, Grafana)', 'Smart home automation (Home Assistant, openHAB)', 'Industrial telemetry and SCADA systems', 'Fleet monitoring with AWS IoT Core or Azure IoT Hub', 'Wearable health monitors publishing vitals', 'Remote relay control via subscribed command topics'].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example with ESP32">
                Install <strong className="text-surface-200">PubSubClient</strong> by Nick O'Leary from the Arduino Library Manager. Connect to a Mosquitto broker and publish / subscribe:
                <CodeSnippet>{`#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid     = "YourSSID";
const char* password = "YourPassword";
const char* broker   = "broker.hivemq.com";

WiFiClient   espClient;
PubSubClient mqtt(espClient);

void callback(char* topic, byte* payload, unsigned int len) {
  String msg = String((char*)payload).substring(0, len);
  Serial.printf("[%s] %s\\n", topic, msg.c_str());
}

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) delay(500);

  mqtt.setServer(broker, 1883);
  mqtt.setCallback(callback);
  mqtt.connect("esp32-client");
  mqtt.subscribe("control/led");
}

void loop() {
  mqtt.loop();
  // Publish temperature every 10 s
  static unsigned long t = 0;
  if (millis() - t > 10000) {
    t = millis();
    mqtt.publish("sensors/temp", "25.4");
  }
}`}</CodeSnippet>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/protocols/wifi" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Wi-Fi Protocol
                </Link>
                <Link to="/tutorial/esp32/protocols/bluetooth" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    Bluetooth Protocol
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
