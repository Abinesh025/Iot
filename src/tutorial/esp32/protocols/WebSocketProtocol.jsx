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
   ESP32 WebSocket — Full Page
═══════════════════════════════════════════════ */
export default function WebSocketProtocol() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/protocols" className="hover:text-primary-400 transition-colors">Protocols</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">WebSocket</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">WebSocket</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                WebSocket enables full-duplex, real-time communication between the ESP32 and a web browser over a single persistent TCP connection — powering live dashboards without any page reloads.
            </p>

            <PlaceholderImage label="ESP32 WebSocket — bi-directional full-duplex connection between ESP32 server and browser client" />

            <SectionCard number="1" title="What is this Protocol?">
                <strong className="text-surface-200">WebSocket</strong> (RFC 6455) is an application-layer protocol that upgrades an HTTP/1.1 connection into a <strong className="text-surface-200">persistent, full-duplex TCP channel</strong>. Unlike HTTP, where the client must poll the server repeatedly, a WebSocket connection stays open — either the ESP32 or the browser can send data at any time without waiting for a request.
                <br /><br />
                The connection starts with an HTTP <strong className="text-surface-200">Upgrade</strong> handshake, then switches to the efficient binary WebSocket framing format. Frames can carry text (JSON) or raw binary data.
            </SectionCard>

            <SectionCard number="2" title="Why it is Used in ESP32">
                With Wi-Fi enabled, the ESP32 can run an <strong className="text-surface-200">AsyncWebServer</strong> and serve a web UI while simultaneously maintaining WebSocket connections to multiple browser clients. Sensor readings, relay states, and control commands are pushed the instant they change — no polling, no latency. This eliminates the overhead of creating a new HTTP connection every time data changes, which was the main limitation of traditional REST-based dashboards.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The browser opens <code className="text-esp32 bg-esp32/10 px-1 rounded">new WebSocket("ws://&lt;esp32-ip&gt;/ws")</code>. The ESP32 accepts the handshake and keeps the socket open. Both sides can now <strong className="text-surface-200">push frames</strong> at will. On the ESP32 side, <code className="text-esp32 bg-esp32/10 px-1 rounded">ws.textAll()</code> broadcasts to all connected clients simultaneously — useful for multi-tab dashboards showing the same live data.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {['Live sensor dashboards (temperature, humidity, power usage)', 'Browser-based robot / drone control with instant feedback', 'Interactive home automation panels (toggle relays, read states)', 'Real-time oscilloscope / waveform visualisers', 'Multi-user chat or messaging over ESP32 local network', 'OTA progress bars and system health monitors in the browser'].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example with ESP32">
                Install <strong className="text-surface-200">ESPAsyncWebServer</strong> + <strong className="text-surface-200">AsyncTCP</strong> via Library Manager. The ESP32 pushes a sensor value every 500 ms; the browser receives it via <code className="text-esp32 bg-esp32/10 px-1 rounded">ws.onmessage</code>:
                <CodeSnippet>{`#include <WiFi.h>
#include <ESPAsyncWebServer.h>

AsyncWebServer server(80);
AsyncWebSocket  ws("/ws");

void onWsEvent(AsyncWebSocket*, AsyncWebSocketClient* client,
               AwsEventType type, void*, uint8_t* data, size_t len) {
  if (type == WS_EVT_CONNECT) Serial.println("Client connected");
  if (type == WS_EVT_DATA)    Serial.printf("Received: %.*s\\n", len, data);
}

void setup() {
  Serial.begin(115200);
  WiFi.begin("SSID", "PASSWORD");
  while (WiFi.status() != WL_CONNECTED) delay(300);
  Serial.println("IP: " + WiFi.localIP().toString());

  ws.onEvent(onWsEvent);
  server.addHandler(&ws);
  server.begin();
}

void loop() {
  ws.cleanupClients();
  // Push sensor reading every 500 ms to all connected browsers
  static unsigned long t = 0;
  if (millis() - t > 500) {
    t = millis();
    String json = "{\\"temp\\":25.4,\\"hum\\":60}";
    ws.textAll(json);
  }
}

// Browser JS (paste in DevTools console while on ESP32 page):
// const ws = new WebSocket("ws://<ESP32_IP>/ws");
// ws.onmessage = e => console.log(JSON.parse(e.data));`}</CodeSnippet>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/protocols/espnow" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    ESP-NOW Protocol
                </Link>
                <Link to="/tutorial/esp32/protocols" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    All Protocols
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
