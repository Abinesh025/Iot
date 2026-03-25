import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const pins = [
    { num: '1, 17', name: '3.3V Power', type: 'Power' },
    { num: '2, 4', name: '5V Power', type: 'Power' },
    { num: '6, 9, 14, 20, 25, 30, 34, 39', name: 'Ground (GND)', type: 'Ground' },
    { num: '11 (GPIO 17)', name: 'Digital I/O', type: 'GPIO' },
    { num: '12 (GPIO 18)', name: 'PWM / Digital I/O', type: 'PWM' },
    { num: '3 (GPIO 2)', name: 'I2C SDA', type: 'I2C' },
    { num: '5 (GPIO 3)', name: 'I2C SCL', type: 'I2C' },
    { num: '8 (GPIO 14)', name: 'UART TX', type: 'UART' },
    { num: '10 (GPIO 15)', name: 'UART RX', type: 'UART' },
]

const typeColor = {
    Power: 'text-yellow-400',
    Ground: 'text-surface-500',
    GPIO: 'text-raspberry',
    PWM: 'text-blue-400',
    I2C: 'text-green-400',
    UART: 'text-purple-400',
}

const concepts = [
    {  title: 'Voltage Levels', desc: 'GPIO pins operate at 3.3V logic — NEVER connect 5V signals directly to GPIO pins without a level shifter.' },
    {  title: 'Input (Pull-up/down)', desc: 'Enable internal pull-up or pull-down resistors in software to avoid floating inputs on buttons and switches.' },
    {  title: 'Output', desc: 'Set a pin HIGH (3.3V) or LOW (0V) to control LEDs, relays, transistors, and other output devices.' },
    {  title: 'PWM', desc: 'Pulse Width Modulation lets you simulate analog output — dim LEDs, control servo angles, and vary motor speed.' },
    {  title: 'I2C Protocol', desc: 'Two-wire serial bus (SDA + SCL) for connecting multiple sensors — use smbus2 or the RPi.GPIO/gpiozero I2C API.' },
    {  title: 'SPI Protocol', desc: 'High-speed 4-wire serial protocol for ADCs, display drivers, and SD cards — use spidev library on Pi.' },
]

export default function RpiGPIO() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/programming" className="hover:text-primary-400 transition-colors">Programming</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">GPIO Programming</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">GPIO Programming</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        <strong className="text-raspberry">GPIO (General Purpose Input/Output)</strong> is the 40-pin
                        header on every Raspberry Pi that lets you connect and control external hardware. Using Python
                        libraries like <strong className="text-surface-200">RPi.GPIO</strong> and{' '}
                        <strong className="text-surface-200">gpiozero</strong>, you can blink LEDs, read buttons, drive
                        motors, and communicate with sensors — all from just a few lines of code.
                    </p>
                </div>

                {/* GPIO Video */}
                {/* <YoutubeEmbed id="bbI43MqPE-I" title="Raspberry Pi GPIO Tutorial for Beginners" /> */}

                {/* Key concepts */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    GPIO Key Concepts
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {concepts.map(({ title, desc }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                     
                            <h3 className="text-sm font-semibold text-surface-50 mb-1">{title}</h3>
                            <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Pinout reference */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Key GPIO Pins Reference
                </h2>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Physical Pin</th>
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Function</th>
                                <th className="text-left py-2 text-surface-300 font-semibold">Type</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {pins.map(({ num, name, type }) => (
                                <tr key={num}>
                                    <td className="py-2 pr-4 font-mono text-xs text-surface-300">{num}</td>
                                    <td className="py-2 pr-4">{name}</td>
                                    <td className={`py-2 font-semibold text-xs ${typeColor[type]}`}>{type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-surface-500 text-xs mb-8">
                    💡 Run <code className="bg-surface-800 px-1.5 py-0.5 rounded text-raspberry">pinout</code> in your Pi terminal for the full interactive pinout diagram.
                </p>

                {/* RPi.GPIO */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    RPi.GPIO — LED Blink &amp; Button Read
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">gpio_basics.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`import RPi.GPIO as GPIO
import time

# Use BCM (Broadcom) pin numbering
GPIO.setmode(GPIO.BCM)

LED_PIN   = 17   # GPIO 17 → physical pin 11
BTN_PIN   = 27   # GPIO 27 → physical pin 13

# Setup
GPIO.setup(LED_PIN, GPIO.OUT)
GPIO.setup(BTN_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)

try:
    while True:
        if GPIO.input(BTN_PIN) == GPIO.LOW:   # Button pressed
            GPIO.output(LED_PIN, GPIO.HIGH)   # LED ON
        else:
            GPIO.output(LED_PIN, GPIO.LOW)    # LED OFF
        time.sleep(0.05)

except KeyboardInterrupt:
    print("Stopping...")
finally:
    GPIO.cleanup()   # Always reset GPIO on exit`}
                    </pre>
                </div>

                {/* gpiozero */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                    gpiozero — Simpler GPIO API
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">gpiozero_demo.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`from gpiozero import LED, Button, MotionSensor
from signal import pause

led    = LED(17)
btn    = Button(27)
motion = MotionSensor(4)

# Link button to LED — no loop needed!
btn.when_pressed  = led.on
btn.when_released = led.off

# Motion-activated LED
motion.when_motion    = led.on
motion.when_no_motion = led.off

print("Running — press Ctrl+C to stop")
pause()   # Keeps the script alive`}
                    </pre>
                </div>

                {/* PWM */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">5</span>
                    PWM — LED Dimming &amp; Servo Control
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">pwm_demo.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)          # GPIO 18 supports hardware PWM

# Create PWM instance — 1000 Hz frequency
pwm = GPIO.PWM(18, 1000)
pwm.start(0)                      # Start with 0% duty cycle (off)

try:
    # Fade LED in and out
    while True:
        for duty in range(0, 101, 5):    # 0% → 100%
            pwm.ChangeDutyCycle(duty)
            time.sleep(0.05)
        for duty in range(100, -1, -5):  # 100% → 0%
            pwm.ChangeDutyCycle(duty)
            time.sleep(0.05)

except KeyboardInterrupt:
    pass
finally:
    pwm.stop()
    GPIO.cleanup()`}
                    </pre>
                </div>

                {/* I2C */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">6</span>
                    I2C Communication — Reading a Sensor
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-8">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">i2c_scan.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`import smbus2

# Enable I2C: sudo raspi-config → Interface Options → I2C → Yes
bus = smbus2.SMBus(1)   # I2C bus 1 (pins 3 & 5)

# Scan for connected I2C devices
print("Scanning I2C bus 1...")
for address in range(0x03, 0x78):
    try:
        bus.read_byte(address)
        print(f"  Device found at 0x{address:02X}")
    except OSError:
        pass

# Example: read a single register from device at 0x48
DEVICE_ADDR = 0x48
REGISTER    = 0x00
value = bus.read_word_data(DEVICE_ADDR, REGISTER)
print(f"Register 0x{REGISTER:02X} = {value}")`}
                    </pre>
                </div>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi/programming/python" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Python Basics
                    </Link>
                    <Link to="/tutorial/raspberry-pi/programming/c" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        C Programming
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
