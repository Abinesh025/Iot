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

export default function ESP32C3Module() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/modules" className="hover:text-primary-400 transition-colors">Modules</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">C3</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">C3</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                Espressif's first RISC-V chip — compact 5 × 5 mm QFN32 package with Wi-Fi + Bluetooth 5.0, hardware security, and USB Serial/JTAG at the lowest price point in the ESP32 family.
            </p>

            <PlaceholderImage label="ESP32-C3 — 5×5 mm QFN32 with RISC-V core, Wi-Fi + BLE 5.0 antenna, and USB pins" />

            <SectionCard number="1" title="What is this Module?">
                The <strong className="text-surface-200">ESP32-C3</strong> is Espressif's first chip based on the open-source <strong className="text-surface-200">RISC-V</strong> ISA (RV32IMC), clocked at 160 MHz. Despite the single-core design, it delivers Wi-Fi 802.11 b/g/n and Bluetooth 5.0 / BLE in a tiny <strong className="text-surface-200">5 × 5 mm QFN32</strong> package at the lowest BOM cost in the family. It includes USB Serial/JTAG for programming without a bridge chip.
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Core: RISC-V 160 MHz | SRAM: 400 KB | Flash: 4 MB | GPIO: 22 | Package: QFN32 5 × 5 mm | Deep-sleep: ~5 µA.
            </SectionCard>

            <SectionCard number="2" title="Why it is Used">
                The C3's small package and low cost make it ideal for mass-production IoT nodes where space and BOM cost are critical. Its hardware security engine (secure boot v2, flash encryption, RSA-3072, SHA-2, AES-128/256) is equivalent to the S2/S3 — advanced security without a cost premium. RISC-V toolchain availability means it can also be built with open-source GCC without a commercial Xtensa licence.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The RISC-V core uses the RV32IMC ISA subset (integer, multiply, compressed instructions). Programs compile with the standard <code className="text-esp32 bg-esp32/10 px-1 rounded">riscv32-esp-elf-gcc</code> toolchain included in ESP-IDF. The USB Serial/JTAG peripheral shares GPIO18/19 (D– / D+) and allows both flashing and debug sessions without any external USB chip. BLE 5.0 advertising extensions support long-range (coded PHY, 125 kbps) and 2 Mbps high-throughput modes.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Cost-sensitive mass-production smart home nodes',
                        'BLE 5.0 beacons with long-range coded PHY',
                        'Secure OTA-updatable cloud-connected sensors',
                        'Low-power wearables using deep-sleep + BLE advertising',
                        'USB Serial/JTAG debug-accessible production firmware',
                        'Matter-protocol smart home devices (officially supported)',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2">
                            <span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example Usage">
                The C3 is fully supported in the Arduino ESP32 core. Use it exactly like any other ESP32 — Wi-Fi and BLE APIs are identical:
                <pre className="mt-3 bg-surface-950/70 border border-surface-800/50 rounded-lg p-4 overflow-x-auto text-xs text-esp32/90 font-mono whitespace-pre">{`#include <WiFi.h>
#include <BLEDevice.h>

void setup() {
  Serial.begin(115200);

  // Wi-Fi connect
  WiFi.begin("SSID", "PASSWORD");
  while (WiFi.status() != WL_CONNECTED) delay(300);
  Serial.println("Wi-Fi OK: " + WiFi.localIP().toString());

  // BLE advertise
  BLEDevice::init("ESP32-C3-Node");
  BLEServer* pServer = BLEDevice::createServer();
  BLEDevice::getAdvertising()->start();
  Serial.println("BLE advertising started.");
}

void loop() {}`}</pre>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/modules/s3" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    ESP32-S3
                </Link>
                <Link to="/tutorial/esp32/modules/cam" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    ESP32-CAM
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
