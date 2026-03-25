import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const libraries = [
    { name: 'WiringPi', status: 'Legacy', desc: 'The original C GPIO library for Pi. Deprecated but widely documented.' },
    { name: 'bcm2835', status: 'Active', desc: 'Low-level C library. Supports GPIO, SPI, I2C, PWM. Ideal for timing-critical applications.' },
    { name: 'pigpio', status: 'Active', desc: 'Feature-rich with precise PWM and hardware timers. Has both C API and Python bindings.' },
    { name: 'lgpio', status: 'Active (Pi 5+)', desc: 'The recommended modern replacement for WiringPi, officially supported on Pi 5 and later.' },
]

export default function RpiCProg() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/programming" className="hover:text-primary-400 transition-colors">Programming</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">C Programming</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">C Programming on Raspberry Pi</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        While Python is the most popular language on Raspberry Pi,{' '}
                        <strong className="text-raspberry">C</strong> is the go-to choice when you need maximum
                        performance, deterministic timing, or low memory usage. C is ideal for real-time sensor
                        polling, high-frequency PWM, and bare-metal-style embedded work — all while running under Linux.
                    </p>
                </div>

                {/* C Programming Video */}
                {/* <YoutubeEmbed id="KJgsSFOSQv0" title="C Programming Full Course for Beginners" /> */}

                {/* Why C */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    Why Use C on Raspberry Pi?
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                        {  title: 'Maximum Speed', desc: 'Toggling a GPIO in C is roughly 10× faster than Python — critical for bit-banged protocols.' },
                        {  title: 'Precise Timing', desc: 'Critical timing for 1-Wire and bit-banged SPI is far more reliable in C than Python.' },
                        {  title: 'Low Memory Footprint', desc: 'C programs use minimal RAM — essential when running many concurrent processes on a Pi Zero.' },
                        {  title: 'Hardware Register Access', desc: 'Access BCM283x registers directly for ultra-low-latency GPIO and DMA transfers.' },
                    ].map(({  title, desc }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                       
                            <h3 className="text-sm font-semibold text-surface-50 mb-1">{title}</h3>
                            <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Libraries */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    C GPIO Libraries
                </h2>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Library</th>
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Status</th>
                                <th className="text-left py-2 text-surface-300 font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {libraries.map(({ name, status, desc }) => (
                                <tr key={name}>
                                    <td className="py-2 pr-4 text-raspberry font-semibold">{name}</td>
                                    <td className="py-2 pr-4">
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${status.includes('Active') ? 'bg-green-500/10 text-green-400' : 'bg-surface-700 text-surface-500'}`}>
                                            {status}
                                        </span>
                                    </td>
                                    <td className="py-2 text-xs">{desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Setup */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Setup — Install GCC &amp; bcm2835
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">terminal</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`# GCC is pre-installed — verify:
gcc --version

# Install bcm2835
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.73.tar.gz
tar xvfz bcm2835-1.73.tar.gz
cd bcm2835-1.73 && ./configure && make && sudo make install

# Install lgpio (Pi 5 recommended)
sudo apt install -y lgpio`}</pre>
                </div>

                {/* LED Blink */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                    LED Blink with bcm2835
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">blink.c</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`#include <bcm2835.h>
#include <stdio.h>

#define LED_PIN RPI_GPIO_P1_11   // GPIO 17

int main(void) {
    if (!bcm2835_init()) return 1;
    bcm2835_gpio_fsel(LED_PIN, BCM2835_GPIO_FSEL_OUTP);

    while (1) {
        bcm2835_gpio_write(LED_PIN, HIGH);
        bcm2835_delay(500);
        bcm2835_gpio_write(LED_PIN, LOW);
        bcm2835_delay(500);
    }

    bcm2835_close();
    return 0;
}
// Compile: gcc -o blink blink.c -lbcm2835 && sudo ./blink`}</pre>
                </div>

                {/* Button */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">5</span>
                    Button Input with bcm2835
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">button.c</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`#include <bcm2835.h>
#include <stdio.h>

#define LED_PIN RPI_GPIO_P1_11   // GPIO 17
#define BTN_PIN RPI_GPIO_P1_13   // GPIO 27

int main(void) {
    if (!bcm2835_init()) return 1;

    bcm2835_gpio_fsel(LED_PIN, BCM2835_GPIO_FSEL_OUTP);
    bcm2835_gpio_fsel(BTN_PIN, BCM2835_GPIO_FSEL_INPT);
    bcm2835_gpio_set_pud(BTN_PIN, BCM2835_GPIO_PUD_UP);

    while (1) {
        if (bcm2835_gpio_lev(BTN_PIN) == LOW) {
            bcm2835_gpio_write(LED_PIN, HIGH);
            printf("Button pressed!\\n");
        } else {
            bcm2835_gpio_write(LED_PIN, LOW);
        }
        bcm2835_delay(50);
    }

    bcm2835_close();
    return 0;
}
// gcc -o button button.c -lbcm2835 && sudo ./button`}</pre>
                </div>

                {/* PWM */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">6</span>
                    Hardware PWM with bcm2835
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-8">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">pwm.c</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`#include <bcm2835.h>

int main(void) {
    if (!bcm2835_init()) return 1;

    // GPIO 18 (pin 12) supports hardware PWM
    bcm2835_gpio_fsel(18, BCM2835_GPIO_FSEL_ALT5);
    bcm2835_pwm_set_clock(BCM2835_PWM_CLOCK_DIVIDER_16);
    bcm2835_pwm_set_mode(0, 1, 1);
    bcm2835_pwm_set_range(0, 1024);

    // Sweep 0 -> 100%
    for (int i = 0; i <= 1024; i += 16) {
        bcm2835_pwm_set_data(0, i);
        bcm2835_delay(20);
    }

    bcm2835_close();
    return 0;
}
// gcc -o pwm pwm.c -lbcm2835 && sudo ./pwm`}</pre>
                </div>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi/programming/gpio" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        GPIO Programming
                    </Link>
                    <Link to="/tutorial/raspberry-pi/programming/samples" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        Sample Codes
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
