import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'


export default function WhatIsRaspberryPi() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Introduction to Raspberry Pi</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Introduction to Raspberry Pi</h1>

            <div className="prose max-w-none">
                {/* Overview */}
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        <strong className="text-raspberry">Raspberry Pi</strong> is a series of small, affordable single-board
                        computers developed by the Raspberry Pi Foundation in the UK. Despite their tiny size, they run a
                        full Linux operating system and are powerful enough to handle real-world computing tasks — from
                        web servers and media centres to robotics and IoT projects.
                    </p>
                </div>

                {/* Intro Video */}
                {/* <YoutubeEmbed id="uXWRu6PgMgI" title="What is Raspberry Pi? - Official Introduction" /> */}

                {/* Section 1 — History */}
                <h2 id="history" className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    History &amp; Origin
                </h2>
                <p className="text-surface-400 leading-relaxed mb-4">
                    The Raspberry Pi was first released in February 2012 by the{' '}
                    <span id="foundation" className="text-raspberry font-semibold">Raspberry Pi Foundation</span>,
                    a UK-based charity. The original goal was to provide an inexpensive computer to encourage children to learn
                    programming and computer science. The affordable price point (originally $35 USD) made it a hit with
                    hobbyists, educators, and professional engineers worldwide, eventually selling over 60 million units.
                </p>

                {/* Section 2 — Why Raspberry Pi */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Why Raspberry Pi?
                </h2>
                <ul className="space-y-3 text-surface-400 mb-4">
                    {[
                        'Runs a full Linux OS (Raspberry Pi OS, Ubuntu, and more)',
                        'General Purpose Input/Output (GPIO) pins for hardware interfacing',
                        'Supports Python, C/C++, Node.js, Java, and many more languages',
                        'Huge community, extensive libraries, and free learning resources',
                        'Built-in Wi-Fi, Bluetooth, USB, HDMI, and CSI camera interface',
                        'Perfect for servers, media centres, robotics, and IoT edge computing',
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-raspberry shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Section 3 — Popular Boards */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Popular Raspberry Pi Models
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {[
                        { name: 'Raspberry Pi 5', cpu: 'Cortex-A76 @ 2.4 GHz', ram: '4 GB / 8 GB LPDDR4X' },
                        { name: 'Raspberry Pi 4 Model B', cpu: 'Cortex-A72 @ 1.8 GHz', ram: '1 / 2 / 4 / 8 GB LPDDR4' },
                        { name: 'Raspberry Pi Zero 2 W', cpu: 'Cortex-A53 @ 1 GHz', ram: '512 MB LPDDR2' },
                        { name: 'Raspberry Pi Pico W', cpu: 'RP2040 Dual-core @ 133 MHz', ram: '264 KB SRAM (Microcontroller)' },
                    ].map((board) => (
                        <div key={board.name} className="p-4 rounded-xl bg-surface-900/50 border border-surface-800/50">
                            <h4 className="font-semibold text-surface-50 text-sm">{board.name}</h4>
                            <p className="text-xs text-surface-500 mt-1">CPU: {board.cpu}</p>
                            <p className="text-xs text-surface-500">RAM: {board.ram}</p>
                        </div>
                    ))}
                </div>

                {/* Section 4 — Arduino vs Raspberry Pi */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                    Raspberry Pi vs Arduino
                </h2>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Feature</th>
                                <th className="text-left py-2 pr-4 text-raspberry font-semibold">Raspberry Pi</th>
                                <th className="text-left py-2 text-arduino font-semibold">Arduino</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {[
                                ['Type', 'Single-board computer (SBC)', 'Microcontroller board'],
                                ['OS', 'Full Linux OS', 'No OS (bare metal)'],
                                ['Language', 'Python, C++, Node.js, …', 'C / C++ (Arduino IDE)'],
                                ['Processing', 'Multi-core, GHz speeds', 'Single-core, MHz speeds'],
                                ['Best for', 'Complex apps, networking, ML', 'Real-time hardware control'],
                                ['Power', '~3–7 W', '~0.1–0.5 W'],
                            ].map(([feat, rpi, ard]) => (
                                <tr key={feat}>
                                    <td className="py-2 pr-4 text-surface-300 font-medium">{feat}</td>
                                    <td className="py-2 pr-4">{rpi}</td>
                                    <td className="py-2">{ard}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Section 5 — First Python Script */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">5</span>
                    Your First Python Script on Raspberry Pi
                </h2>
                <p className="text-surface-400 leading-relaxed mb-4">
                    Once your Pi is set up with Raspberry Pi OS, open a terminal and create a simple Python script to
                    blink the onboard LED or print a message:
                </p>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-4">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">hello_pi.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">
                        {`import time

print("Hello from Raspberry Pi!")

# Blink the onboard LED (Pi 5 / Zero 2W)
import subprocess

for _ in range(5):
    subprocess.run(["pinctrl", "set", "42", "op", "dh"])
    time.sleep(0.5)
    subprocess.run(["pinctrl", "set", "42", "op", "dl"])
    time.sleep(0.5)

print("Done!")`}
                    </pre>
                </div>
                <p className="text-surface-500 text-sm mb-4">
                    Run it in your terminal with: <code className="bg-surface-800 px-1.5 py-0.5 rounded text-raspberry text-xs">python3 hello_pi.py</code>
                </p>

                {/* Section 6 — What's Next */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">6</span>
                    What You'll Learn Next
                </h2>
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                    {[
                        { topic: 'GPIO & Hardware', desc: 'Control LEDs, motors, and sensors using the GPIO pins.' },
                        { topic: 'Python Libraries', desc: 'RPi.GPIO, gpiozero, pigpio, and more.' },
                        { topic: 'Linux & Networking', desc: 'SSH, systemd services, and headless setup.' },
                        { topic: 'Camera Module', desc: 'Capture images and stream video with picamera2.' },
                        { topic: 'IoT Projects', desc: 'MQTT, Node-RED, InfluxDB dashboards.' },
                        { topic: 'Machine Learning', desc: 'Run TensorFlow Lite models on the Pi.' },
                    ].map(({ topic, desc }) => (
                        <div key={topic} className="p-4 rounded-xl bg-surface-900/50 border border-raspberry/10 hover:border-raspberry/30 transition-colors">
                            <h4 className="font-semibold text-raspberry text-sm mb-1">{topic}</h4>
                            <p className="text-xs text-surface-500 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Next page link */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex justify-end">
                    <Link
                        to="/tutorial/raspberry-pi/getting-started"
                        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                    >
                        Next: Getting Started
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
