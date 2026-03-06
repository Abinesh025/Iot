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

/* ═══════════════════════════════════════════
   ESP32-WROOM-32 — Full Standalone Page
═══════════════════════════════════════════ */
export default function WROOM32Module() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/modules" className="hover:text-primary-400 transition-colors">Modules</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">WROOM-32</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">WROOM-32</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                The most widely used ESP32 module — a self-contained System-in-Package integrating the ESP32 chip, 4 MB flash, PCB antenna, and RF shield in a compact, production-ready form factor.
            </p>

            <PlaceholderImage label="ESP32-WROOM-32 — top view showing RF shield can, PCB antenna, and module pinout" />

            <SectionCard number="1" title="What is this Module?">
                The <strong className="text-surface-200">ESP32-WROOM-32</strong> is Espressif's flagship general-purpose module. It packages the ESP32-D0WDQ6 dual-core chip, 4 MB SPI NOR flash, a 2.4 GHz PCB antenna, and all passive components inside a metal RF shielding can. The module is fully certified (FCC, CE, SRRC) and is the default module fitted on most ESP32 development boards worldwide.
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Size: 18 × 25.5 × 3.1 mm | Flash: 4 MB | SRAM: 520 KB | Supply: 3.0–3.6 V | Interface: 38 castellated pads.
            </SectionCard>

            <SectionCard number="2" title="Why it is Used">
                Its combination of Wi-Fi + Bluetooth 4.2/BLE in a single certified, soldering-ready module eliminates the need for separate radio components. The built-in PCB antenna means no external antenna is required for typical indoor ranges. Massive community support, extensive library availability, and a very low price per unit make it the first choice for prototyping and low-to-medium volume production.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The WROOM-32 exposes the ESP32's 38 GPIO pads as castellated edges for SMD soldering onto a carrier PCB. Inside, the RF section handles Wi-Fi 802.11 b/g/n (up to 150 Mbps) and Bluetooth 4.2 / BLE using a shared 2.4 GHz antenna switched between radios. The SPI flash stores firmware and file system data. The module integrates the 40 MHz crystal oscillator and decoupling capacitors, so the host PCB needs only power filtering and a flash button circuit.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Wi-Fi sensor nodes for cloud IoT platforms (AWS, Firebase)',
                        'MQTT data loggers for temperature, humidity, or energy',
                        'Bluetooth serial bridges replacing USB-UART cables',
                        'OTA-updatable smart home devices',
                        'Industrial telemetry gateways',
                        'Hobbyist development boards (DevKitC, NodeMCU-32S)',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2">
                            <span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example Usage">
                The WROOM-32 is pin-compatible with the ESP32-WROVER. Solder it to your PCB, connect 3.3 V power with decoupling capacitors, add a 10 kΩ pull-up on EN and a boot button on GPIO0. Program via UART0 (GPIO1 TX / GPIO3 RX):
                <pre className="mt-3 bg-surface-950/70 border border-surface-800/50 rounded-lg p-4 overflow-x-auto text-xs text-esp32/90 font-mono whitespace-pre">{`#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.begin("MySSID", "MyPassword");
  while (WiFi.status() != WL_CONNECTED) delay(300);
  Serial.println("WROOM-32 connected: " + WiFi.localIP().toString());
}

void loop() {
  // Your IoT application logic here
}`}</pre>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/modules" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    All Modules
                </Link>
                <Link to="/tutorial/esp32/modules/wrover" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    ESP32-WROVER
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
