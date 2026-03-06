import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const projects = [
    {
        title: 'MQTT Temperature Monitor',
        diff: 'Beginner',
        stack: 'Python · paho-mqtt · Mosquitto',
        desc: 'Read a DHT22 sensor and publish readings to an MQTT broker every 10 seconds. Subscribe from any device on your network.',
        color: 'border-green-500/30',
        badge: 'bg-green-500/15 text-green-400',
    },
    {
        title: 'Node-RED Dashboard',
        diff: 'Beginner',
        stack: 'Node-RED · Dashboard',
        desc: 'Install Node-RED on your Pi, drag-and-drop GPIO nodes, and create a live web dashboard without writing a single line of code.',
        color: 'border-green-500/30',
        badge: 'bg-green-500/15 text-green-400',
    },
    {
        title: 'InfluxDB + Grafana Monitoring',
        diff: 'Intermediate',
        stack: 'Python · InfluxDB · Grafana',
        desc: 'Store time-series sensor data in InfluxDB and visualise it with beautiful Grafana dashboards — all running on your Pi.',
        color: 'border-blue-500/30',
        badge: 'bg-blue-500/15 text-blue-400',
    },
    {
        title: 'Home Automation with MQTT',
        diff: 'Intermediate',
        stack: 'Python · paho-mqtt · Relay',
        desc: 'Toggle relays and smart plugs by publishing MQTT commands from your phone, a Node-RED flow, or a Python script.',
        color: 'border-blue-500/30',
        badge: 'bg-blue-500/15 text-blue-400',
    },
    {
        title: 'Pi Camera Security System',
        diff: 'Advanced',
        stack: 'Python · OpenCV · Email',
        desc: 'Use the Pi Camera and OpenCV to detect motion. On motion, capture a snapshot and email it to you automatically.',
        color: 'border-raspberry/30',
        badge: 'bg-raspberry/15 text-raspberry',
    },
    {
        title: 'AWS IoT Core Integration',
        diff: 'Advanced',
        stack: 'Python · AWS IoT · MQTT',
        desc: 'Connect your Pi to AWS IoT Core, publish sensor data to the cloud, and trigger Lambda functions for serverless processing.',
        color: 'border-raspberry/30',
        badge: 'bg-raspberry/15 text-raspberry',
    },
]

const stack = [
    { name: 'Mosquitto', role: 'MQTT Broker', desc: 'Lightweight, fast MQTT broker — runs great on a Pi.' },
    { name: 'paho-mqtt', role: 'Python MQTT Client', desc: 'Publish and subscribe to MQTT topics from Python.' },
    { name: 'Node-RED', role: 'Visual Flow Editor', desc: 'Wire together IoT logic with drag-and-drop flows.' },
    { name: 'InfluxDB', role: 'Time-Series Database', desc: 'Store millions of sensor readings efficiently.' },
    { name: 'Grafana', role: 'Visualisation', desc: 'Build real-time dashboards from InfluxDB data.' },
]

export default function RpiIotProjects() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">IoT Projects</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">IoT Projects with Raspberry Pi</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        Raspberry Pi is the go-to platform for real IoT deployments. With a full Linux OS,
                        Wi-Fi, and Python, you can build systems that collect sensor data, send alerts,
                        control actuators, and visualise everything on live dashboards — all from a
                        <strong className="text-raspberry"> $35 board</strong>.
                    </p>
                </div>

                <YoutubeEmbed id="QjcHJiPBPGw" title="Raspberry Pi IoT Projects Tutorial" />

                {/* Stack */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    IoT Software Stack
                </h2>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Tool</th>
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Role</th>
                                <th className="text-left py-2 text-surface-300 font-semibold">Purpose</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {stack.map(({ name, role, desc }) => (
                                <tr key={name}>
                                    <td className="py-2 pr-4 font-semibold text-raspberry">{name}</td>
                                    <td className="py-2 pr-4 text-surface-300">{role}</td>
                                    <td className="py-2 text-surface-500">{desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Quick Mosquitto setup */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Install MQTT Broker (Mosquitto)
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">terminal</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`sudo apt install -y mosquitto mosquitto-clients
sudo systemctl enable mosquitto
sudo systemctl start mosquitto

# Test: publish and subscribe in two terminals
mosquitto_sub -t "sensor/temperature" &
mosquitto_pub -t "sensor/temperature" -m "24.5"`}</pre>
                </div>

                {/* MQTT publish example */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Publish Sensor Data via Python MQTT
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-8">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">sensor_publisher.py</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`import paho.mqtt.client as mqtt
import Adafruit_DHT
import time, json

SENSOR = Adafruit_DHT.DHT22
PIN    = 4          # GPIO 4

client = mqtt.Client()
client.connect("localhost", 1883)

while True:
    humidity, temperature = Adafruit_DHT.read_retry(SENSOR, PIN)
    if temperature is not None:
        payload = json.dumps({
            "temperature": round(temperature, 1),
            "humidity":    round(humidity, 1)
        })
        client.publish("home/dht22", payload)
        print(f"Published: {payload}")
    time.sleep(10)`}</pre>
                </div>

                {/* Project cards */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                    Project Ideas
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {projects.map(({ title, diff, stack: st, desc, color, badge }) => (
                        <div key={title} className={`p-4 rounded-xl bg-surface-900/40 border ${color} hover:opacity-90 transition-opacity`}>
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="text-sm font-semibold text-surface-50">{title}</h3>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${badge}`}>{diff}</span>
                            </div>
                            <p className="text-xs text-primary-400 font-mono mb-1">{st}</p>
                            <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi/networking" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Networking & Linux
                    </Link>
                    <Link to="/tutorial/raspberry-pi/web-server" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        Web Server Setup
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
