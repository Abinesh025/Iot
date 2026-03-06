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

export default function ESP32S3Module() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/modules" className="hover:text-primary-400 transition-colors">Modules</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">S3</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">S3</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                Espressif's most powerful module — dual Xtensa LX7 cores with dedicated AI vector instructions, Bluetooth 5.0, native USB OTG, and a parallel camera/LCD interface for edge AI applications.
            </p>

            <PlaceholderImage label="ESP32-S3 — dual LX7 cores, AI vector extensions, USB OTG, and parallel camera interface" />

            <SectionCard number="1" title="What is this Module?">
                The <strong className="text-surface-200">ESP32-S3</strong> is Espressif's flagship high-performance chip, combining dual Xtensa LX7 cores running at 240 MHz with <strong className="text-surface-200">AI/ML vector extensions</strong> (PIE) for neural network inference acceleration. It adds Bluetooth 5.0 + BLE Mesh, native USB OTG, and a parallel camera / LCD RGB interface over the S2, while retaining Wi-Fi 802.11 b/g/n.
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Cores: Dual LX7 @ 240 MHz | SRAM: 512 KB | Flash: 8 MB typical | GPIO: 45 | Bluetooth: 5.0 / BLE Mesh | USB: OTG + Serial/JTAG.
            </SectionCard>

            <SectionCard number="2" title="Why it is Used">
                The S3's vector instructions speed up matrix multiplications and convolutions used in TensorFlow Lite models — enabling real-time face detection, keyword spotting, and image classification directly on the chip without a cloud call. Its parallel LCD interface can drive high-resolution color displays at up to 16 bpp, and the camera interface accepts up to 16-bit DVP sensors. It replaces the WROVER for any project combining camera, display, and ML.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                Both LX7 cores access a shared 512 KB SRAM with independent L1 instruction and data caches. The AI extensions operate on 128-bit wide SIMD registers, processing 16 × 8-bit values simultaneously. The USB OTG controller uses the same physical D+/D– pads as the USB Serial/JTAG controller — a mux selects the active peripheral at runtime. Optional PSRAM (up to 8 MB octal SPI) expands heap for large model weights and frame buffers.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Edge AI camera (face detection, object recognition)',
                        'TensorFlow Lite keyword spotting / voice assistant',
                        'High-resolution TFT / IPS display controller',
                        'Bluetooth 5.0 audio streaming and BLE Mesh gateway',
                        'USB audio / video class devices',
                        'Gesture and human-pose recognition systems',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2">
                            <span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example Usage">
                Run a TensorFlow Lite person detection model using ESP-NN (auto-optimised for S3 vector extensions):
                <pre className="mt-3 bg-surface-950/70 border border-surface-800/50 rounded-lg p-4 overflow-x-auto text-xs text-esp32/90 font-mono whitespace-pre">{`// Install: Arduino_TensorFlowLite-ESP32 board support
#include <TensorFlowLite_ESP32.h>
#include "model_data.h"       // your .tflite model as a C array

#include "tensorflow/lite/micro/micro_interpreter.h"
#include "tensorflow/lite/micro/all_ops_resolver.h"

constexpr int kTensorArenaSize = 80 * 1024;
uint8_t tensor_arena[kTensorArenaSize];

void setup() {
  Serial.begin(115200);

  // Load model and build interpreter
  const tflite::Model* model = tflite::GetModel(g_model_data);
  tflite::AllOpsResolver resolver;
  tflite::MicroInterpreter interpreter(
      model, resolver, tensor_arena, kTensorArenaSize);
  interpreter.AllocateTensors();

  Serial.println("ESP32-S3 TFLite ready.");
}

void loop() {
  // Feed input tensor, invoke, read output
}`}</pre>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/modules/s2" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    ESP32-S2
                </Link>
                <Link to="/tutorial/esp32/modules/c3" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    ESP32-C3
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
