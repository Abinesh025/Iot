import { Link } from 'react-router-dom'

const samples = [
    {
        title: 'LED Blink (Python)',
        file: 'led_blink.py',
        code: `import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)

try:
    while True:
        GPIO.output(17, GPIO.HIGH)
        time.sleep(1)
        GPIO.output(17, GPIO.LOW)
        time.sleep(1)
except KeyboardInterrupt:
    GPIO.cleanup()`,
    },
    {
        title: 'Read Button with Pull-up',
        file: 'button_read.py',
        code: `import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(27, GPIO.IN, pull_up_down=GPIO.PUD_UP)

try:
    while True:
        if GPIO.input(27) == GPIO.LOW:
            print("Button pressed!")
        time.sleep(0.05)
except KeyboardInterrupt:
    GPIO.cleanup()`,
    },
    {
        title: 'PWM LED Fade',
        file: 'pwm_fade.py',
        code: `import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
pwm = GPIO.PWM(18, 1000)
pwm.start(0)

try:
    while True:
        for dc in range(0, 101, 5):
            pwm.ChangeDutyCycle(dc)
            time.sleep(0.05)
        for dc in range(100, -1, -5):
            pwm.ChangeDutyCycle(dc)
            time.sleep(0.05)
except KeyboardInterrupt:
    pwm.stop()
    GPIO.cleanup()`,
    },
    {
        title: 'I2C Device Scanner',
        file: 'i2c_scan.py',
        code: `import smbus2

bus = smbus2.SMBus(1)
print("Scanning I2C bus...")
found = []
for addr in range(0x03, 0x78):
    try:
        bus.read_byte(addr)
        found.append(hex(addr))
        print(f"  Found device at {hex(addr)}")
    except OSError:
        pass
print(f"\\nTotal: {len(found)} device(s) found")`,
    },
    {
        title: 'UART Serial Communication',
        file: 'uart_demo.py',
        code: `import serial
import time

# Enable UART: sudo raspi-config → Interfaces → Serial
ser = serial.Serial('/dev/ttyS0', 9600, timeout=1)

try:
    while True:
        ser.write(b"Hello from Pi!\\n")
        line = ser.readline()
        if line:
            print("Received:", line.decode('utf-8').strip())
        time.sleep(1)
finally:
    ser.close()`,
    },
    {
        title: 'SPI Communication (spidev)',
        file: 'spi_demo.py',
        code: `import spidev
import time

# Enable SPI: sudo raspi-config → Interfaces → SPI
spi = spidev.SpiDev()
spi.open(0, 0)          # Bus 0, Device 0
spi.max_speed_hz = 1_000_000
spi.mode = 0

try:
    # Read MCP3008 ADC channel 0
    while True:
        resp = spi.xfer2([1, 0x80, 0])   # Start, CH0, dummy
        value = ((resp[1] & 3) << 8) | resp[2]
        voltage = (value / 1023.0) * 3.3
        print(f"ADC: {value}  Voltage: {voltage:.2f}V")
        time.sleep(0.5)
finally:
    spi.close()`,
    },
    {
        title: 'DHT11 Temperature & Humidity',
        file: 'dht11_read.py',
        code: `import adafruit_dht
import board
import time

# Connect DHT11 DATA pin to GPIO4 (physical pin 7)
sensor = adafruit_dht.DHT11(board.D4)

while True:
    try:
        temp = sensor.temperature
        hum  = sensor.humidity
        print(f"Temp: {temp:.1f}°C | Humidity: {hum:.1f}%")
    except RuntimeError as e:
        print(f"Read error: {e}")
    time.sleep(2)`,
    },
    {
        title: 'CPU Temperature Monitor',
        file: 'cpu_temp.py',
        code: `import subprocess
import time

def get_cpu_temp():
    result = subprocess.run(
        ["vcgencmd", "measure_temp"],
        capture_output=True, text=True
    )
    # Output: "temp=45.1'C"
    return float(result.stdout.strip().replace("temp=","").replace("'C",""))

while True:
    temp = get_cpu_temp()
    status = "HOT!" if temp > 70 else "OK"
    print(f"CPU Temp: {temp:.1f}°C  [{status}]")
    time.sleep(5)`,
    },
]

export default function RpiSamples() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/programming" className="hover:text-primary-400 transition-colors">Programming</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Sample Codes</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Sample Codes</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        Ready-to-use <strong className="text-raspberry">copy-paste code snippets</strong> covering the most
                        common Raspberry Pi tasks — from GPIO basics to I2C, SPI, UART, sensors, and system monitoring.
                        All examples are tested on Raspberry Pi OS with Python 3.
                    </p>
                </div>

                {/* Code samples */}
                <div className="space-y-8">
                    {samples.map(({ title, file, code }, idx) => (
                        <div key={title}>
                            <h2 className="text-lg font-bold text-surface-50 mb-3 flex items-center gap-2">
                                <span className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-xs">{idx + 1}</span>
                                {title}
                            </h2>
                            <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden">
                                <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono flex items-center justify-between">
                                    <span>{file}</span>
                                    <span className="text-raspberry">Python 3</span>
                                </div>
                                <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{code}</pre>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi/programming/c" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        C Programming
                    </Link>
                    <Link to="/tutorial/raspberry-pi" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        Back to Overview
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
