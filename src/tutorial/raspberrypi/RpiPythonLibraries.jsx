import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const libraries = [
    {
        name: 'RPi.GPIO',
        purpose: 'Low-level GPIO control',
        install: 'pre-installed',
        desc: 'The foundational library for controlling GPIO pins. Gives you raw control over pin direction, state reading, PWM, and interrupts.',
        color: 'border-raspberry/30 bg-raspberry/5',
        accent: 'text-raspberry',
    },
    {
        name: 'gpiozero',
        purpose: 'High-level GPIO abstraction',
        install: 'pre-installed',
        desc: 'Wraps GPIO in friendly device classes: LED, Button, MotionSensor, Servo, Motor. Ideal for beginners and rapid prototyping.',
        color: 'border-blue-500/30 bg-blue-500/5',
        accent: 'text-blue-400',
    },
    {
        name: 'pigpio',
        purpose: 'Precision & daemon-based GPIO',
        install: 'sudo apt install pigpio',
        desc: 'Uses a background daemon for highly accurate timing. Best for bit-banging protocols, precise PWM, and remote GPIO over the network.',
        color: 'border-green-500/30 bg-green-500/5',
        accent: 'text-green-400',
    },
    {
        name: 'smbus2 / smbus',
        purpose: 'I2C communication',
        install: 'pip3 install smbus2',
        desc: 'Read and write I2C device registers. Used with sensors like BME280, MPU-6050, OLED displays, and ADC chips.',
        color: 'border-yellow-500/30 bg-yellow-500/5',
        accent: 'text-yellow-400',
    },
    {
        name: 'spidev',
        purpose: 'SPI communication',
        install: 'pip3 install spidev',
        desc: 'Interface with SPI devices: MCP3008 ADC, MAX31855 thermocouple, SSD1306 displays, and other high-speed peripherals.',
        color: 'border-purple-500/30 bg-purple-500/5',
        accent: 'text-purple-400',
    },
    {
        name: 'pyserial',
        purpose: 'UART / Serial communication',
        install: 'pip3 install pyserial',
        desc: 'Send and receive data over the UART serial port. Common for GPS modules (NEO-6M), GSM modems, and Arduino communication.',
        color: 'border-orange-500/30 bg-orange-500/5',
        accent: 'text-orange-400',
    },
    {
        name: 'Adafruit Libraries',
        purpose: 'Sensor-specific drivers',
        install: 'pip3 install adafruit-circuitpython-*',
        desc: 'CircuitPython-compatible sensor libraries for DHT11/22, BME280, SSD1306, NeoPixels, and hundreds of other Adafruit products.',
        color: 'border-pink-500/30 bg-pink-500/5',
        accent: 'text-pink-400',
    },
    {
        name: 'OpenCV (cv2)',
        purpose: 'Computer vision & camera',
        install: 'pip3 install opencv-python',
        desc: 'Process images and video from the Pi Camera Module. Face detection, object tracking, QR code scanning, and more.',
        color: 'border-cyan-500/30 bg-cyan-500/5',
        accent: 'text-cyan-400',
    },
]

export default function RpiPythonLibraries() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Python Libraries</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Python Libraries for Raspberry Pi</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        Python is the primary language for Raspberry Pi hardware programming. A rich ecosystem of libraries makes it
                        straightforward to control GPIO, talk to sensors via I2C/SPI, capture camera imagery, and build complete
                        IoT applications — often in just a few lines of code.
                    </p>
                </div>

                <YoutubeEmbed id="GzKYCk4ER34" title="Python GPIO Libraries for Raspberry Pi" />

                {/* Libraries grid */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    Essential Libraries
                </h2>
                <div className="space-y-4 mb-8">
                    {libraries.map(({ name, purpose, install, desc, color, accent }) => (
                        <div key={name} className={`p-4 rounded-xl border ${color} hover:opacity-90 transition-opacity`}>
                            <div className="flex flex-wrap items-center gap-3 mb-1">
                                <h3 className={`font-bold text-base ${accent}`}>{name}</h3>
                                <span className="text-xs text-surface-500 bg-surface-800/60 px-2 py-0.5 rounded-full">{purpose}</span>
                                <code className="text-xs font-mono text-surface-400 bg-surface-900/60 px-2 py-0.5 rounded">{install}</code>
                            </div>
                            <p className="text-sm text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Install snippet */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Installing Libraries
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">terminal</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`# Update pip first
python3 -m pip install --upgrade pip

# Install commonly-used Pi libraries
pip3 install smbus2 spidev pyserial

# Adafruit CircuitPython sensor drivers
pip3 install adafruit-circuitpython-dht
pip3 install adafruit-circuitpython-bme280
pip3 install adafruit-circuitpython-ssd1306

# Computer vision
pip3 install opencv-python

# pigpio daemon (needs to be started as a service)
sudo apt install -y pigpio
sudo systemctl enable pigpiod
sudo systemctl start pigpiod`}</pre>
                </div>

                {/* Virtual environment */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Using Virtual Environments
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">terminal</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`# Create a virtual environment for your project
python3 -m venv ~/myproject/venv

# Activate the environment
source ~/myproject/venv/bin/activate

# Install packages inside the env
pip install smbus2 spidev

# Deactivate when done
deactivate

# Run your script inside the venv
~/myproject/venv/bin/python3 myproject/main.py`}</pre>
                </div>

                {/* Comparison tip */}
                <div className="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20 mb-8">
                    <p className="text-surface-300 text-sm font-medium mb-1">🎯 Which GPIO library should I use?</p>
                    <ul className="text-surface-400 text-sm space-y-1 list-disc list-inside">
                        <li><strong className="text-surface-200">Beginners:</strong> use <code className="text-raspberry bg-surface-800 px-1 rounded">gpiozero</code> — it's intuitive and hides complexity</li>
                        <li><strong className="text-surface-200">Projects needing fine control:</strong> use <code className="text-blue-400 bg-surface-800 px-1 rounded">RPi.GPIO</code> for direct pin manipulation</li>
                        <li><strong className="text-surface-200">Timing-critical:</strong> use <code className="text-green-400 bg-surface-800 px-1 rounded">pigpio</code> — microsecond accuracy via daemon</li>
                    </ul>
                </div>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi/gpio" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        GPIO & Hardware
                    </Link>
                    <Link to="/tutorial/raspberry-pi/networking" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        Networking & Linux
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
