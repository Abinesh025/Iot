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
   ESP32 BLE (Bluetooth Low Energy) — Full Page
═══════════════════════════════════════════════ */
export default function BLEProtocol() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/protocols" className="hover:text-primary-400 transition-colors">Protocols</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">BLE</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">BLE</span> — Bluetooth Low Energy
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                BLE allows the ESP32 to transmit small bursts of sensor data to smartphones with ultra-low power consumption — making it the protocol of choice for battery-operated IoT wearables and beacons.
            </p>

            <PlaceholderImage label="ESP32 BLE — GATT Server exposing characteristics to a phone app client" />

            <SectionCard number="1" title="What is this Protocol?">
                <strong className="text-surface-200">BLE (Bluetooth Low Energy)</strong>, introduced in Bluetooth 4.0, is a power-optimised variant of Bluetooth designed for short, infrequent data transfers. It is not backward compatible with Classic Bluetooth — they share the 2.4 GHz band but use different modulation and link layers.
                <br /><br />
                BLE uses the <strong className="text-surface-200">GATT</strong> (Generic Attribute Profile) model: a <em>Server</em> exposes data as named <em>Characteristics</em> inside <em>Services</em>. A <em>Client</em> (e.g., phone) reads, writes, or subscribes to notifications on those characteristics.
            </SectionCard>

            <SectionCard number="2" title="Why it is Used in ESP32">
                BLE's peak current is ~15 mA (vs. ~170 mA for Wi-Fi), and it can operate in connection intervals of 7.5 ms–4 s, dropping average consumption to <strong className="text-surface-200">single-digit µA</strong> on duty-cycled transmissions. The ESP32 supports simultaneous BLE Server and Client roles, iBeacon/Eddystone advertising, and BLE Mesh — all without additional hardware. This makes it ideal for battery-powered wearables and sensor tags that pair with a smartphone app.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                In advertising mode, the ESP32 broadcasts small <strong className="text-surface-200">advertisement packets</strong> every few hundred milliseconds, announcing its presence. A client scans, finds the device, and initiates a connection. Once connected, the client reads or subscribes to <strong className="text-surface-200">notifications</strong> on GATT characteristics — the ESP32 pushes updated values when they change, rather than requiring polling.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {['Fitness bands and wearable health monitors', 'Asset tracking beacons (iBeacon / Eddystone)', 'Smart door locks and proximity-based access control', 'Coin-cell-powered temperature loggers', 'BLE-to-Wi-Fi gateway (ESP32 bridges BLE sensors to MQTT)', 'Indoor navigation and room-presence detection'].map(a => (
                        <li key={a} className="flex items-start gap-2"><span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span></li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example with ESP32">
                Use the built-in <strong className="text-surface-200">BLEDevice</strong> library. Create a GATT server that notifies a phone with a temperature reading every second:
                <CodeSnippet>{`#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

BLECharacteristic* pChar;
bool deviceConnected = false;

class MyCallbacks : public BLEServerCallbacks {
  void onConnect(BLEServer*)    { deviceConnected = true; }
  void onDisconnect(BLEServer*) { deviceConnected = false; }
};

void setup() {
  BLEDevice::init("ESP32-BLE");
  BLEServer*  pServer  = BLEDevice::createServer();
  pServer->setCallbacks(new MyCallbacks());
  BLEService* pService = pServer->createService(SERVICE_UUID);
  pChar = pService->createCharacteristic(
    CHARACTERISTIC_UUID, BLECharacteristic::PROPERTY_NOTIFY);
  pChar->addDescriptor(new BLE2902());
  pService->start();
  BLEDevice::getAdvertising()->start();
}

void loop() {
  if (deviceConnected) {
    float temp = 25.6;  // Replace with real sensor read
    pChar->setValue(temp);
    pChar->notify();
  }
  delay(1000);
}`}</CodeSnippet>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/protocols/bluetooth" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    Bluetooth Classic
                </Link>
                <Link to="/tutorial/esp32/protocols/espnow" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    ESP-NOW Protocol
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
