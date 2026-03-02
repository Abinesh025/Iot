import { Link } from 'react-router-dom'

/* ── Shared helpers ── */
function CodeBlock({ filename, children }) {
    return (
        <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden my-4">
            {filename && (
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-800/50 border-b border-surface-800/50">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs text-surface-500 font-mono">{filename}</span>
                </div>
            )}
            <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto leading-relaxed">{children}</pre>
        </div>
    )
}

function InfoCard({ icon, title, text }) {
    return (
        <div className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
            <div className="text-xl mb-1">{icon}</div>
            <h4 className="text-sm font-semibold text-surface-50 mb-1">{title}</h4>
            <p className="text-xs text-surface-400 leading-relaxed">{text}</p>
        </div>
    )
}

const ic = (t) => <code className="px-1.5 py-0.5 rounded bg-surface-800 text-raspberry font-mono text-xs">{t}</code>

const getPostRows = [
    { feature: 'Visibility', get: 'Data visible in URL', post: 'Data hidden in request body' },
    { feature: 'Security', get: 'Less secure', post: 'More secure' },
    { feature: 'Data size', get: 'Limited (~2 KB)', post: 'No practical limit' },
    { feature: 'Caching', get: 'Can be cached / bookmarked', post: 'Not cached' },
    { feature: 'Use case', get: 'Fetching / reading data', post: 'Submitting / storing data' },
    { feature: 'Idempotent', get: 'Yes', post: 'No' },
    { feature: 'Form method', get: 'method="GET"', post: 'method="POST"' },
    { feature: 'PHP access', get: '$_GET["key"]', post: '$_POST["key"]' },
]

export default function RpiHttpMethods() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/web-server" className="hover:text-primary-400 transition-colors">Web Server Setup</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">HTTP GET &amp; POST Methods</span>
            </nav>

            {/* Badge + Title */}
            <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-raspberry/10 text-raspberry border border-raspberry/20">
                    Fundamentals
                </span>
                <span className="text-xs text-surface-500">Topic 1 of 5</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
                HTTP GET and POST Methods
            </h1>
            <p className="text-surface-400 text-base leading-relaxed mb-8">
                Before writing any server code, it's essential to understand <strong className="text-surface-200">how data travels</strong> between
                your IoT device and a web server. HTTP methods define <em>what kind of operation</em> the client is asking the server to perform.
            </p>

            {/* ─── Section 1: What is HTTP ─── */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                What is HTTP?
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-4">
                <strong className="text-raspberry">HTTP (HyperText Transfer Protocol)</strong> is the foundation of
                data communication on the internet. When your browser — or your Raspberry Pi's Python script — wants to send
                or receive data from a web server, it sends an <em>HTTP request</em>. The server processes it and sends back
                an <em>HTTP response</em>.
            </p>
            <p className="text-surface-300 text-sm leading-relaxed mb-4">
                Every HTTP request has a <strong>method</strong> — a word that tells the server what you intend to do.
                The most common methods in IoT are {ic('GET')} (retrieve data) and {ic('POST')} (send data).
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
                <InfoCard icon="📬" title="Request" text="The client (browser or Pi script) sends an HTTP request with a method, URL, headers, and optional body." />
                <InfoCard icon="⚙️" title="Processing" text="The server (Apache + PHP on your Pi) reads the request, runs PHP logic, queries MySQL, etc." />
                <InfoCard icon="📨" title="Response" text="The server replies with a status code (200 OK, 404 Not Found…) plus the response body (HTML, JSON, etc.)." />
            </div>

            {/* ─── Section 2: GET ─── */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                The GET Method — Reading Data
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                The <strong className="text-primary-400">GET</strong> method requests data from a server.
                Any parameters you send are <strong>appended to the URL</strong> after a <code className="px-1 rounded bg-surface-800 text-raspberry font-mono text-xs">?</code> character.
                GET requests can be bookmarked, cached, and are suitable for reading/fetching without modifying data.
            </p>
            <CodeBlock filename="get_example_url.txt">{`Full GET URL:
  http://raspberrypi.local/read_sensor.php?device=DHT22&unit=celsius

Breaking it down:
  Protocol  →  http://
  Host      →  raspberrypi.local
  Script    →  /read_sensor.php
  ?         →  Start of query string
  Key=Value →  device=DHT22
  &         →  Separator between parameters
  Key=Value →  unit=celsius`}
            </CodeBlock>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                On the server, PHP reads these URL parameters using the {ic('$_GET')} superglobal array:
            </p>
            <CodeBlock filename="read_sensor.php">{`<?php
// Read URL parameters from a GET request
// URL: /read_sensor.php?device=DHT22&unit=celsius

$device = $_GET['device'] ?? 'unknown';   // "DHT22"
$unit   = $_GET['unit']   ?? 'celsius';   // "celsius"

echo "Reading from device: " . htmlspecialchars($device);
echo " in " . htmlspecialchars($unit);

// Typical GET use-case: return a JSON response
header('Content-Type: application/json');
echo json_encode([
    "device"      => $device,
    "temperature" => 28.5,
    "unit"        => $unit
]);
?>`}
            </CodeBlock>

            <div className="flex gap-3 p-4 rounded-xl bg-primary-500/5 border border-primary-500/20 mb-8 text-sm">
                <span className="text-xl flex-shrink-0">💡</span>
                <p className="text-surface-300 leading-relaxed">
                    <strong className="text-primary-400">Good for:</strong> Fetching the latest sensor reading, querying a list of devices,
                    filtering data by date range. Think "read-only" operations. In a browser you can type the full URL directly to test it!
                </p>
            </div>

            {/* ─── Section 3: POST ─── */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                The POST Method — Sending Data
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                The <strong className="text-raspberry">POST</strong> method sends data <strong>inside the request body</strong> —
                not visible in the URL. This makes it ideal for submitting IoT sensor readings, login forms, configuration updates,
                or anything that <em>changes state</em> on the server.
            </p>
            <CodeBlock filename="raw_post_request.txt">{`POST /save_sensor.php HTTP/1.1
Host: raspberrypi.local
Content-Type: application/x-www-form-urlencoded
Content-Length: 47

device_id=DHT22_01&temperature=28.5&humidity=65

↑ Data is in the REQUEST BODY, NOT in the URL.
  You won't see it in browser history or server logs.`}
            </CodeBlock>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                PHP reads POSTed form data using the {ic('$_POST')} superglobal:
            </p>
            <CodeBlock filename="save_sensor.php">{`<?php
// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die("Method Not Allowed");
}

// Read the form / body data
$device_id   = $_POST['device_id']   ?? '';
$temperature = $_POST['temperature'] ?? '';
$humidity    = $_POST['humidity']    ?? '';

echo "✅ Received from: " . htmlspecialchars($device_id);
echo " | Temp: " . $temperature . "°C";
echo " | Humidity: " . $humidity . "%";

// Next step: validate + store in MySQL (covered in later topics)
?>`}
            </CodeBlock>

            <div className="flex gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20 mb-8 text-sm">
                <span className="text-xl flex-shrink-0">✅</span>
                <p className="text-surface-300 leading-relaxed">
                    <strong className="text-green-400">Good for:</strong> Submitting sensor readings to be stored in MySQL, posting configuration data,
                    sending credentials, or any write/modify operations. Use POST whenever data shouldn't appear in the URL.
                </p>
            </div>

            {/* ─── Section 4: Comparison table ─── */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                GET vs POST — Full Comparison
            </h2>
            <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm text-surface-400 border-collapse">
                    <thead>
                        <tr className="border-b border-surface-800/60">
                            <th className="text-left py-3 pr-4 text-surface-300 font-semibold w-32">Feature</th>
                            <th className="text-left py-3 pr-4 text-primary-400 font-semibold">GET</th>
                            <th className="text-left py-3 text-raspberry font-semibold">POST</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-800/40">
                        {getPostRows.map(r => (
                            <tr key={r.feature} className="hover:bg-surface-800/20 transition-colors">
                                <td className="py-2.5 pr-4 text-surface-300 font-medium text-xs">{r.feature}</td>
                                <td className="py-2.5 pr-4 text-xs font-mono">{r.get}</td>
                                <td className="py-2.5 text-xs font-mono">{r.post}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ─── Section 5: Raspberry Pi IoT example ─── */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">5</span>
                Raspberry Pi IoT Example — Python POST
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                A typical IoT pattern on the Raspberry Pi: a Python script reads a DHT22 sensor every 30 seconds and
                POSTs the data to a PHP script running on the same Pi's Apache server. The PHP script stores it in MySQL.
            </p>
            <CodeBlock filename="sensor_poster.py">{`import time
import requests
# pip3 install requests Adafruit-Blinka adafruit-circuitpython-dht
import adafruit_dht
import board

# ── Config ──────────────────────────────────────
SERVER_URL = "http://localhost/save_sensor.php"  # Apache on same Pi
DEVICE_ID  = "DHT22_GPIO4"
INTERVAL   = 30   # seconds between readings

# ── Sensor setup ─────────────────────────────────
sensor = adafruit_dht.DHT22(board.D4)   # DHT22 on GPIO 4

# ── Main loop ────────────────────────────────────
while True:
    try:
        temperature = sensor.temperature   # float, °C
        humidity    = sensor.humidity      # float, %

        payload = {
            "device_id":   DEVICE_ID,
            "temperature": round(temperature, 2),
            "humidity":    round(humidity, 2),
            "location":    "greenhouse"
        }

        # HTTP POST — data goes in request body
        response = requests.post(SERVER_URL, data=payload, timeout=5)

        if response.status_code == 200:
            print(f"✅ Sent: {temperature:.1f}°C, {humidity:.1f}%")
        else:
            print(f"❌ Server error: {response.status_code}")

    except RuntimeError as e:
        # DHT22 occasionally fails — just retry
        print(f"Sensor read error: {e}")

    time.sleep(INTERVAL)`}
            </CodeBlock>
            <p className="text-surface-400 text-xs mt-1 mb-8">
                Install dependencies: {ic('pip3 install requests adafruit-circuitpython-dht')}
            </p>

            {/* ─── Section 6: HTTP Status codes ─── */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">6</span>
                Common HTTP Status Codes
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
                <InfoCard  title="200 OK" text="Request succeeded. PHP ran fine, data was saved or returned correctly." />
                <InfoCard  title="404 Not Found" text="The URL path doesn't exist. Check your PHP filename and Apache document root." />
                <InfoCard  title="405 Method Not Allowed" text="Your PHP script rejected the wrong HTTP method (e.g., you sent GET but PHP only allows POST)." />
                <InfoCard  title="500 Internal Server Error" text="PHP threw an exception or has a syntax error. Check /var/log/apache2/error.log on your Pi." />
            </div>

            {/* Nav */}
            <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between flex-wrap gap-4">
                <Link to="/tutorial/raspberry-pi/web-server"
                    className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Web Server Overview
                </Link>
                <Link to="/tutorial/raspberry-pi/web-server/html-form"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Next: Creating HTML Form
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </article>
    )
}
