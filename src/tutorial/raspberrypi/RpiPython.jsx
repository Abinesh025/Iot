import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const datatypes = [
    { type: 'int', example: 'age = 25', desc: 'Whole numbers' },
    { type: 'float', example: 'temp = 36.6', desc: 'Decimal numbers' },
    { type: 'str', example: 'name = "Pi"', desc: 'Text / String' },
    { type: 'bool', example: 'on = True', desc: 'True or False' },
    { type: 'list', example: 'pins = [17, 18, 27]', desc: 'Ordered, mutable collection' },
    { type: 'dict', example: 'sensor = {"temp": 25}', desc: 'Key-value pairs' },
]

const topics = [
    {  title: 'Variables & Data Types', desc: 'Python is dynamically typed — no need to declare types. Assign a value and Python infers the type.' },
    {  title: 'Loops', desc: 'Use for loops to iterate over lists or ranges, and while loops for condition-based repetition — common in GPIO polling.' },
    {  title: 'Functions', desc: 'Encapsulate reusable logic in functions with def. Essential for organising sensor-reading and GPIO-control code.' },
    {  title: 'Classes & Objects', desc: 'OOP lets you model sensors and devices as objects. Create a Sensor class with read() and calibrate() methods.' },
    {  title: 'File I/O', desc: 'Read config files, log sensor data to CSV, or write JSON with built-in open(), read(), and write() functions.' },
    {  title: 'Modules & imports', desc: 'Import any library with import. The Pi ecosystem relies heavily on RPi.GPIO, gpiozero, time, and smbus2.' },
]

export default function RpiPython() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/programming" className="hover:text-primary-400 transition-colors">Programming</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Python Basics</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Python Basics for Raspberry Pi</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        <strong className="text-raspberry">Python</strong> is the official language of the Raspberry Pi.
                        It comes pre-installed on Raspberry Pi OS, has a huge ecosystem of hardware libraries, and its
                        clean syntax makes it ideal for beginners and experts alike. This guide covers the fundamentals
                        you need before diving into GPIO programming.
                    </p>
                </div>

                {/* Python Tutorial Video */}
                {/* <YoutubeEmbed id="_uQrJ0TkZlc" title="Python Tutorial for Beginners" /> */}

                {/* Section 1 — Why Python */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    Why Python on Raspberry Pi?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {topics.map(({title, desc }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            {/* <div className="text-2xl mb-2">{icon}</div> */}
                            <h3 className="text-sm font-semibold text-surface-50 mb-1">{title}</h3>
                            <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Section 2 — Variables */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Variables &amp; Data Types
                </h2>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Type</th>
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Example</th>
                                <th className="text-left py-2 text-surface-300 font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {datatypes.map(({ type, example, desc }) => (
                                <tr key={type}>
                                    <td className="py-2 pr-4 text-raspberry font-mono font-semibold">{type}</td>
                                    <td className="py-2 pr-4 font-mono text-xs text-surface-300">{example}</td>
                                    <td className="py-2 text-xs">{desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Section 3 — Control flow */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Control Flow — if, for, while
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">control_flow.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`# if / elif / else
temperature = 35

if temperature > 30:
    print("Too hot!")
elif temperature < 10:
    print("Too cold!")
else:
    print("Comfortable")

# for loop — iterate over GPIO pins
pins = [17, 18, 27, 22]
for pin in pins:
    print(f"Setting up pin {pin}")

# while loop — keep reading sensor
import time
running = True
while running:
    data = read_sensor()   # your function
    print(data)
    time.sleep(1)          # wait 1 second`}
                    </pre>
                </div>

                {/* Section 4 — Functions */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                    Functions
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">functions.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`# Define a reusable function
def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit."""
    return (celsius * 9 / 5) + 32

# Call the function
temp_c = 25
temp_f = celsius_to_fahrenheit(temp_c)
print(f"{temp_c}°C = {temp_f}°F")   # 25°C = 77.0°F

# Default parameter values
def blink_led(pin, times=3, delay=0.5):
    import RPi.GPIO as GPIO, time
    for _ in range(times):
        GPIO.output(pin, GPIO.HIGH)
        time.sleep(delay)
        GPIO.output(pin, GPIO.LOW)
        time.sleep(delay)`}
                    </pre>
                </div>

                {/* Section 5 — Classes */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">5</span>
                    Classes &amp; Objects
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">sensor_class.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`class TemperatureSensor:
    """Models a simple temperature sensor on a GPIO pin."""

    def __init__(self, pin, name="Sensor"):
        self.pin = pin
        self.name = name
        self._last_reading = None

    def read(self):
        # Simulate reading (replace with real library call)
        import random
        self._last_reading = round(random.uniform(20.0, 30.0), 2)
        return self._last_reading

    def __repr__(self):
        return f"TemperatureSensor(pin={self.pin}, last={self._last_reading}°C)"

# Usage
sensor = TemperatureSensor(pin=4, name="Room Sensor")
print(sensor.read())   # e.g. 24.37
print(sensor)          # TemperatureSensor(pin=4, last=24.37°C)`}
                    </pre>
                </div>

                {/* Section 6 — File I/O */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">6</span>
                    File I/O — Logging Sensor Data
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">log_data.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`import csv, time
from datetime import datetime

LOG_FILE = "/home/pi/sensor_log.csv"

def log_reading(temperature, humidity):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(LOG_FILE, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow([timestamp, temperature, humidity])

# Write header on first run
with open(LOG_FILE, "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Timestamp", "Temp (°C)", "Humidity (%)"])

# Log every 10 seconds
while True:
    log_reading(25.3, 60.1)
    time.sleep(10)`}
                    </pre>
                </div>

                {/* Section 7 — Installing packages */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">7</span>
                    Installing Python Packages
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">terminal</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`# Update package lists first
sudo apt update

# Install RPi.GPIO (usually pre-installed)
pip3 install RPi.GPIO

# Install gpiozero (also pre-installed)
pip3 install gpiozero

# Install smbus2 for I2C communication
pip3 install smbus2

# Install Adafruit DHT library
pip3 install adafruit-circuitpython-dht

# List installed packages
pip3 list`}
                    </pre>
                </div>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi/programming" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Programming Overview
                    </Link>
                    <Link to="/tutorial/raspberry-pi/programming/gpio" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        GPIO Programming
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
