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

export default function ESP32CAMModule() {
    return (
        <article>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <Link to="/tutorial/esp32/modules" className="hover:text-primary-400 transition-colors">Modules</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">CAM</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">CAM</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                A compact all-in-one board combining an ESP32-S chip, OV2640 2MP camera, 8 MB PSRAM, 16 MB flash, MicroSD slot, and LED flash — enabling Wi-Fi-connected image and video streaming for under $10.
            </p>

            <PlaceholderImage label="ESP32-CAM board — OV2640 camera module, MicroSD slot, LED flash, and PCB antenna" />

            <SectionCard number="1" title="What is this Module?">
                The <strong className="text-surface-200">ESP32-CAM</strong> is a development board by AI-Thinker that integrates an ESP32-S chip (dual-core Xtensa LX6 @ 240 MHz), a pre-mounted <strong className="text-surface-200">OV2640 2-megapixel CMOS camera</strong>, 8 MB SPI PSRAM, 16 MB Flash, a MicroSD card slot, and a built-in LED flash on a compact 40.5 × 27 mm PCB. It does not include a USB programmer — a separate FTDI or CP2102 module is needed for flashing unless using OTA.
                <br /><br />
                <strong className="text-surface-200">Key Specs:</strong> Camera: OV2640 2MP (up to 1600×1200) | PSRAM: 8 MB | Flash: 16 MB | SD: MicroSD slot | Power: 5 V USB | Size: 40.5 × 27 mm.
            </SectionCard>

            <SectionCard number="2" title="Why it is Used">
                The ESP32-CAM provides a complete camera + Wi-Fi solution at a fraction of the cost of dedicated camera modules. The 8 MB PSRAM allows storing full JPEG frames (typical QVGA JPEG ≈ 15–30 KB) or buffering multiple frames for motion JPEG streaming. The MicroSD slot enables local recording without cloud dependency. The built-in LED flash makes it suitable for low-light surveillance applications.
            </SectionCard>

            <SectionCard number="3" title="How it Works">
                The OV2640 camera connects to the ESP32 via a <strong className="text-surface-200">parallel DVP interface</strong> (8-bit data + HREF, VSYNC, PCLK, XCLK). The ESP32's I²S peripheral captures pixel data synchronised to PCLK. Frames are stored in PSRAM. The <code className="text-esp32 bg-esp32/10 px-1 rounded">esp32-camera</code> library handles sensor configuration (resolution, JPEG quality, brightness) and provides a simple <code className="text-esp32 bg-esp32/10 px-1 rounded">esp_camera_fb_get()</code> / <code className="text-esp32 bg-esp32/10 px-1 rounded">esp_camera_fb_return()</code> API.
            </SectionCard>

            <SectionCard number="4" title="Applications">
                <ul className="space-y-1.5">
                    {[
                        'Wi-Fi IP camera with live MJPEG browser streaming',
                        'Doorbell camera with MQTT snapshot on motion trigger',
                        'Wildlife camera trap — PIR triggered, MicroSD recording',
                        'Face detection and recognition with ESP-WHO library',
                        'QR / barcode scanner for inventory systems',
                        'Time-lapse photography stored to MicroSD',
                    ].map(a => (
                        <li key={a} className="flex items-start gap-2">
                            <span className="text-esp32 shrink-0 mt-0.5">▸</span><span>{a}</span>
                        </li>
                    ))}
                </ul>
            </SectionCard>

            <SectionCard number="5" title="Example Usage">
                Use the <strong className="text-surface-200">ESP32 Camera Web Server</strong> example (built into Arduino ESP32 core) for instant MJPEG streaming to a browser. Or capture a single frame programmatically:
                <pre className="mt-3 bg-surface-950/70 border border-surface-800/50 rounded-lg p-4 overflow-x-auto text-xs text-esp32/90 font-mono whitespace-pre">{`#include "esp_camera.h"

// AI-Thinker ESP32-CAM pin map
#define PWDN_GPIO_NUM  32
#define RESET_GPIO_NUM -1
#define XCLK_GPIO_NUM   0
#define SIOD_GPIO_NUM  26
#define SIOC_GPIO_NUM  27
#define Y9_GPIO_NUM    35
#define Y8_GPIO_NUM    34
// ... (full map from AI-Thinker datasheet)

void setup() {
  Serial.begin(115200);

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer   = LEDC_TIMER_0;
  config.pin_d0       = Y2_GPIO_NUM;
  // ... set all pins
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size   = FRAMESIZE_VGA;   // 640x480
  config.jpeg_quality = 12;              // 0-63 lower=better
  config.fb_count     = 1;
  config.fb_location  = CAMERA_FB_IN_PSRAM;

  esp_camera_init(&config);

  camera_fb_t* fb = esp_camera_fb_get();
  if (fb) {
    Serial.printf("JPEG size: %u bytes\\n", fb->len);
    esp_camera_fb_return(fb);
  }
}

void loop() {}`}</pre>
            </SectionCard>

            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link to="/tutorial/esp32/modules/c3" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                    ESP32-C3
                </Link>
                <Link to="/tutorial/esp32/modules" className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm">
                    All Modules
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
        </article>
    )
}
