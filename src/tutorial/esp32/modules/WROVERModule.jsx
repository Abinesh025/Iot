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

export default function WROVERModule() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/modules" className="hover:text-primary-400 transition-colors">Modules</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">WROVER</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">WROVER</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                The WROOM-32 extended with 8 MB of PSRAM — enabling large frame buffers, ML model weights, and complex data structures far beyond the internal 520 KB SRAM limit.
            </p>

            <PlaceholderImage label="ESP32-WROVER — RF shield can, IPEX antenna connector, and 8 MB PSRAM chip location" />

            <SectionCard number="1" title="What is this Module?">
                The <strong className="text-surface-200">ESP32-WROVER</strong> is functionally identical to the WROOM-32 but adds an <strong className="text-surface-200">8 MB SPI PSRAM</strong> (Pseudo-Static RAM) chip on the underside of the module. PSRAM is mapped into the ESP32's address space via the SPI flash controller, giving applications up to 4 MB of additional heap. Variants include WROVER-B (PCB antenna) and WROVER-IB (IPEX connector for external antenna).
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Size: 18 × 31.4 mm | Flash: 4 MB | SRAM: 520 KB | PSRAM: 8 MB | Supply: 3.0–3.6 V.
            </SectionCard>

            <SectionCard number="2" title="Why it is Used">
                Standard ESP32 applications are limited to ~300 KB of usable heap. Camera JPEGs, BMP frame buffers, large JSON payloads, audio buffers, and TensorFlow Lite model weights regularly exceed this. The WROVER's 8 MB PSRAM raises the usable memory ceiling dramatically — enabling tasks that are impossible on the WROOM-32 without significant code restructuring.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The PSRAM chip communicates with the ESP32 over a dedicated <strong className="text-surface-200">quad-SPI bus</strong> at up to 80 MHz. The ESP32's MMU maps it into virtual address space so <code className="text-esp32 bg-esp32/10 px-1 rounded">malloc()</code> can allocate from it transparently. Enable PSRAM support in the Arduino IDE board settings (<em>PSRAM: Enabled</em>) or via the <code className="text-esp32 bg-esp32/10 px-1 rounded">sdkconfig</code> in ESP-IDF. Then use <code className="text-esp32 bg-esp32/10 px-1 rounded">ps_malloc()</code> to explicitly allocate from PSRAM.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'JPEG camera streaming with large capture buffers',
                        'TensorFlow Lite inference (image classification, object detection)',
                        'Audio buffering for I²S-based music players or voice assistants',
                        'Large web server with multi-client HTML/CSS asset serving',
                        'Complex JSON/XML document processing',
                        'Bitmap display rendering for TFT/IPS screens',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2">
                            <span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example Usage">
                Enable PSRAM in board settings, then allocate a large buffer from PSRAM using <code className="text-esp32 bg-esp32/10 px-1 rounded">ps_malloc()</code>:
                <pre className="mt-3 bg-surface-950/70 border border-surface-800/50 rounded-lg p-4 overflow-x-auto text-xs text-esp32/90 font-mono whitespace-pre">{`void setup() {
  Serial.begin(115200);

  if (psramFound()) {
    Serial.printf("PSRAM size: %u bytes\\n", ESP.getPsramSize());

    // Allocate 1 MB buffer from PSRAM
    uint8_t* buf = (uint8_t*) ps_malloc(1024 * 1024);
    if (buf) {
      Serial.println("1 MB PSRAM buffer allocated successfully!");
      free(buf);
    }
  } else {
    Serial.println("PSRAM not found — check board settings.");
  }
}

void loop() {}`}</pre>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/modules/wroom32" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    WROOM-32
                </Link>
                <Link to="/tutorial/esp32/modules/s2" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    ESP32-S2
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
