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

export default function ESP32S2Module() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/modules" className="hover:text-primary-400 transition-colors">Modules</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">S2</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">S2</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                A single-core, security-focused ESP32 variant with native USB OTG — eliminating the USB-to-UART bridge chip and providing 43 GPIO pins and hardware cryptographic acceleration.
            </p>

            <PlaceholderImage label="ESP32-S2 chip — native USB D+/D– pins, 43 GPIOs, and AES/RSA hardware accelerators" />

            <SectionCard number="1" title="What is this Module?">
                The <strong className="text-surface-200">ESP32-S2</strong> is a single-core Xtensa LX7 @ 240 MHz chip with Wi-Fi 802.11 b/g/n but <strong className="text-surface-200">no Bluetooth</strong>. Its headline feature is <strong className="text-surface-200">native USB OTG</strong> (full-speed, 12 Mbps), enabling the chip to appear directly as a USB HID, CDC, MSC, or MIDI device without a CP2102/CH340 bridge chip. It also delivers the highest GPIO count in the family: <strong className="text-surface-200">43 programmable GPIOs</strong>.
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Core: Xtensa LX7 single-core 240 MHz | SRAM: 320 KB | Flash: 4 MB typical | GPIO: 43 | USB: Full-speed OTG.
            </SectionCard>

            <SectionCard number="2" title="Why it is Used">
                The S2 shines in applications that need USB device emulation — keyboards, mice, MIDI controllers, USB mass storage — without any external chips. Its hardware security features (eFuse key storage, digital signature, RSA-3072, AES-128/256) make it ideal for products requiring firmware signing and encrypted booting. The extra GPIO count suits complex wiring projects with many peripherals.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                On power-up with GPIO0 pulled LOW, the S2 enters a built-in <strong className="text-surface-200">USB DFU bootloader</strong> — no UART programmer needed. In application mode, the <code className="text-esp32 bg-esp32/10 px-1 rounded">USB-OTG</code> peripheral enumerates as any target USB device class. The TinyUSB stack (bundled in ESP-IDF and Arduino) provides easy descriptors for HID, CDC, and MSC devices out of the box.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'USB HID keyboard / mouse / gamepad emulator',
                        'USB MIDI instrument controller',
                        'Secure OTA update gateway with signed firmware verification',
                        'USB mass storage device (SD card presented over USB)',
                        'High GPIO-count industrial controller panels',
                        'Touch-key matrices using the 14 built-in capacitive touch channels',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2">
                            <span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example Usage">
                Use the <strong className="text-surface-200">USB (TinyUSB)</strong> library to emulate a USB keyboard — type a message when a button is pressed:
                <pre className="mt-3 bg-surface-950/70 border border-surface-800/50 rounded-lg p-4 overflow-x-auto text-xs text-esp32/90 font-mono whitespace-pre">{`#include "USB.h"
#include "USBHIDKeyboard.h"

USBHIDKeyboard Keyboard;
#define BTN_PIN 0  // BOOT button = GPIO0

void setup() {
  pinMode(BTN_PIN, INPUT_PULLUP);
  Keyboard.begin();
  USB.begin();
}

void loop() {
  if (digitalRead(BTN_PIN) == LOW) {
    Keyboard.print("Hello from ESP32-S2!");
    delay(500); // debounce
  }
}`}</pre>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/modules/wrover" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    WROVER
                </Link>
                <Link to="/tutorial/esp32/modules/s3" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    ESP32-S3
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
