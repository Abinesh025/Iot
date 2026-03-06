import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const topics = [
    {
        title: 'GPIO Pin Types',
        desc: 'Understand digital input/output, power pins (3.3V & 5V), ground pins, and special function pins (I2C, SPI, UART, PWM).',
        badge: 'Fundamentals',
    },
    {
        title: 'RPi.GPIO Library',
        desc: 'The classic low-level Python GPIO library. Control pins directly with GPIO.setup(), GPIO.input(), and GPIO.output().',
        badge: 'Python',
    },
    {
        title: 'gpiozero Library',
        desc: 'Higher-level library with device abstractions: LED, Button, MotionSensor, Servo. Write less code and read more naturally.',
        badge: 'Python',
    },
    {
        title: 'PWM (Pulse Width Modulation)',
        desc: 'Simulate analog signals to control LED brightness, servo motor angles, and DC motor speed using digital GPIO pins.',
        badge: 'Control',
    },
    {
        title: 'I2C Protocol',
        desc: 'Two-wire serial bus (SDA + SCL) for connecting multiple sensors like BME280, OLED displays, and ADC chips on one bus.',
        badge: 'Protocol',
    },
    {
        title: 'SPI Protocol',
        desc: 'High-speed 4-wire protocol for ADCs (MCP3008), displays (ILI9341), and SD cards. Uses MOSI, MISO, CLK, and CS lines.',
        badge: 'Protocol',
    },
    {
        title: 'UART Serial',
        desc: 'Serial communication over TX/RX pins for GPS modules, GSM modems, and external microcontrollers like Arduino.',
        badge: 'Protocol',
    },
    {
        title: 'Real Hardware Projects',
        desc: 'Connect sensors, relays, stepper motors, LCDs, and more. We cover wiring diagrams and complete Python code for each.',
        badge: 'Projects',
    },
]

const badgeColor = {
    Fundamentals: 'bg-raspberry/15 text-raspberry',
    Python: 'bg-blue-500/15 text-blue-400',
    Control: 'bg-yellow-500/15 text-yellow-400',
    Protocol: 'bg-green-500/15 text-green-400',
    Projects: 'bg-purple-500/15 text-purple-400',
}

const quickref = [
    { pin: '1', label: '3.3V', color: 'text-yellow-400' },
    { pin: '2', label: '5V', color: 'text-red-400' },
    { pin: '3', label: 'GPIO 2 (I2C SDA)', color: 'text-green-400' },
    { pin: '5', label: 'GPIO 3 (I2C SCL)', color: 'text-green-400' },
    { pin: '6', label: 'GND', color: 'text-surface-500' },
    { pin: '8', label: 'GPIO 14 (UART TX)', color: 'text-purple-400' },
    { pin: '11', label: 'GPIO 17 (Digital I/O)', color: 'text-raspberry' },
    { pin: '12', label: 'GPIO 18 (PWM)', color: 'text-blue-400' },
    { pin: '19', label: 'GPIO 10 (SPI MOSI)', color: 'text-orange-400' },
]

export default function RpiGpioOverview() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">GPIO & Hardware</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">GPIO & Hardware Control</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        The <strong className="text-raspberry">40-pin GPIO header</strong> is what makes Raspberry Pi different
                        from a regular computer. It gives you direct hardware access to connect LEDs, buttons, sensors, relays,
                        motors, and almost any electronic component — and control them from Python.
                    </p>
                </div>

                <YoutubeEmbed id="bbI43MqPE-I" title="Raspberry Pi GPIO Tutorial" />

                {/* Topics grid */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    What You'll Learn
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {topics.map(({ title, desc, badge }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-semibold text-surface-50">{title}</h3>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeColor[badge]}`}>{badge}</span>
                            </div>
                            <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Quick Pin Reference */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Quick Pin Reference
                </h2>
                <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Physical Pin</th>
                                <th className="text-left py-2 text-surface-300 font-semibold">Function</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {quickref.map(({ pin, label, color }) => (
                                <tr key={pin}>
                                    <td className="py-2 pr-4 font-mono text-xs text-surface-300">Pin {pin}</td>
                                    <td className={`py-2 font-medium text-xs ${color}`}>{label}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-surface-500 text-xs mb-8">
                    💡 Run <code className="bg-surface-800 px-1.5 py-0.5 rounded text-raspberry">pinout</code> in your Pi terminal for the full interactive 40-pin diagram.
                </p>

                {/* Quick LED example */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Your First GPIO Script — Blink an LED
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">blink.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`# Connect: LED anode → 330Ω resistor → GPIO 17 (pin 11)
#          LED cathode → GND (pin 6)

from gpiozero import LED
from time import sleep

led = LED(17)        # GPIO 17

while True:
    led.on()         # LED on
    sleep(1)
    led.off()        # LED off
    sleep(1)`}</pre>
                </div>

                {/* Go deeper link */}
                <div className="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20 mb-8">
                    <p className="text-surface-300 text-sm">
                        Ready to dive deeper?{' '}
                        <Link to="/tutorial/raspberry-pi/programming/gpio" className="text-primary-400 hover:text-primary-300 underline font-medium">
                            Visit the full GPIO Programming page
                        </Link>{' '}
                        for PWM, I2C, SPI, UART, and complete project wiring examples.
                    </p>
                </div>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi/getting-started" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Getting Started
                    </Link>
                    <Link to="/tutorial/raspberry-pi/python-libraries" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        Python Libraries
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
