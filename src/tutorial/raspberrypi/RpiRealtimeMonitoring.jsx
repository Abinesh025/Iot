import { Link } from 'react-router-dom'

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

export default function RpiRealtimeMonitoring() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/web-server" className="hover:text-primary-400 transition-colors">Web Server Setup</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Real-Time Data Monitoring</span>
            </nav>

            <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-raspberry/10 text-raspberry border border-raspberry/20">Dashboard</span>
                <span className="text-xs text-surface-500">Topic 5 of 5</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">Real-Time Data Monitoring</h1>
            <p className="text-surface-400 text-base leading-relaxed mb-8">
                The final piece of the LAMP IoT stack: a <strong className="text-surface-200">live web dashboard</strong> that shows
                sensor readings updating automatically. We'll cover two approaches — simple HTML meta-refresh and
                the modern AJAX method using JavaScript's {ic('fetch()')} API.
            </p>

            {/* 1 — Why real-time */}
            <h2 className="text-xl font-bold text-surface-50 mt-8 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                Why Real-Time Monitoring?
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-4">
                A database that stores sensor readings is only useful if you can <em>see</em> the data.
                Real-time monitoring lets you watch temperature and humidity trends as they happen,
                spot anomalies immediately, and build an impressive IoT dashboard — all viewable from any device on your network.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
                <InfoCard  title="Meta Refresh" text="HTML tag that reloads the entire page every N seconds. Simple, no JavaScript. Best for quick prototypes." />
                <InfoCard  title="AJAX / fetch()" text="JavaScript requests data in the background; only the table rows update. Smooth, professional, no flicker." />
                <InfoCard  title="WebSockets" text="Advanced: Pi pushes data to the browser in real-time. Overkill for most IoT projects — AJAX is usually enough." />
            </div>

            {/* 2 — Meta refresh */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                Method 1 — HTML Meta Refresh
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                The simplest approach: one {ic('<meta http-equiv="refresh" content="5">')} tag causes the browser
                to reload the whole page every 5 seconds. PHP re-queries MySQL on each load, so you always see fresh data.
                Save this as {ic('/var/www/html/monitor.php')}.
            </p>
            <CodeBlock filename="monitor.php">{`<?php
require 'db_connect.php';

// Fetch latest 15 readings
$result = $conn->query(
    "SELECT * FROM sensor_readings ORDER BY recorded_at DESC LIMIT 15"
);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Reload every 5 seconds -->
    <meta http-equiv="refresh" content="5">
    <title>Live Sensor Dashboard — Raspberry Pi</title>
    <style>
        * { box-sizing:border-box; margin:0; padding:0; }
        body  { font-family:'Segoe UI',Arial,sans-serif; background:#0d1117;
                color:#e6edf3; padding:30px; }
        h1    { color:#e91e63; margin-bottom:6px; }
        .meta { color:#484f58; font-size:13px; margin-bottom:24px; }
        table { width:100%; border-collapse:collapse; }
        th,td { padding:12px 16px; text-align:left; border-bottom:1px solid #21262d; }
        th    { background:#161b22; color:#8b949e; font-size:12px;
                text-transform:uppercase; letter-spacing:.05em; }
        tr:hover { background:#161b2280; }
        .temp { color:#ff7b72; font-weight:600; }
        .hum  { color:#79c0ff; font-weight:600; }
        .badge{ padding:2px 10px; border-radius:20px; font-size:11px; font-weight:600;
                background:rgba(233,30,99,.15); color:#e91e63;
                border:1px solid rgba(233,30,99,.3); }
    </style>
</head>
<body>
    <h1>🌡️ Live Sensor Dashboard</h1>
    <p class="meta">
        Auto-refreshes every 5 seconds &bull; Last load: <?= date('H:i:s') ?>
    </p>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Device</th>
                <th>Temperature</th>
                <th>Humidity</th>
                <th>Location</th>
                <th>Recorded At</th>
            </tr>
        </thead>
        <tbody>
        <?php while ($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?= $row['id'] ?></td>
                <td><span class="badge"><?= htmlspecialchars($row['device_id']) ?></span></td>
                <td class="temp"><?= $row['temperature'] ?> °C</td>
                <td class="hum"><?= $row['humidity'] ?> %</td>
                <td><?= htmlspecialchars($row['location']) ?></td>
                <td style="color:#484f58;font-size:13px"><?= $row['recorded_at'] ?></td>
            </tr>
        <?php endwhile; ?>
        </tbody>
    </table>
</body>
</html>
<?php $conn->close(); ?>`}
            </CodeBlock>

            {/* 3 — AJAX JSON API */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                Method 2 — AJAX with fetch() (Recommended)
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-4">
                AJAX separates the data-fetching from the page rendering. JavaScript calls your PHP API endpoint every few seconds
                in the background, then updates only the table rows — no page flicker, no scroll-position reset.
                This requires two files: a JSON API script and the dashboard HTML.
            </p>

            <p className="text-surface-400 text-xs mb-1 font-semibold uppercase tracking-wide">Step 1 — JSON API endpoint</p>
            <CodeBlock filename="get_data.php">{`<?php
header('Content-Type: application/json');
require 'db_connect.php';

$limit = min(intval($_GET['limit'] ?? 10), 50);

$result = $conn->query(
    "SELECT id, device_id, temperature, humidity, location, recorded_at
     FROM sensor_readings ORDER BY recorded_at DESC LIMIT $limit"
);

$rows = [];
while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}

echo json_encode($rows);
$conn->close();
?>`}
            </CodeBlock>

            <p className="text-surface-400 text-xs mb-1 mt-6 font-semibold uppercase tracking-wide">Step 2 — AJAX dashboard HTML</p>
            <CodeBlock filename="dashboard.html">{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX IoT Dashboard — Raspberry Pi</title>
    <style>
        * { box-sizing:border-box; margin:0; padding:0; }
        body   { font-family:'Segoe UI',Arial,sans-serif; background:#0d1117;
                 color:#e6edf3; padding:30px; }
        h1     { color:#e91e63; margin-bottom:4px; }
        #status{ color:#484f58; font-size:13px; margin-bottom:24px; }

        /* Status dot */
        .dot   { display:inline-block; width:8px; height:8px; border-radius:50%;
                 background:#3fb950; margin-right:6px;
                 animation:pulse 2s ease-in-out infinite; }
        @keyframes pulse {
            0%,100% { opacity:1; }
            50%      { opacity:.3; }
        }

        table { width:100%; border-collapse:collapse; }
        th,td { padding:12px 16px; text-align:left; border-bottom:1px solid #21262d; }
        th    { background:#161b22; color:#8b949e; font-size:12px;
                text-transform:uppercase; letter-spacing:.05em; }
        tr:hover { background:#161b2280; transition:background .15s; }
        .temp  { color:#ff7b72; font-weight:600; }
        .hum   { color:#79c0ff; font-weight:600; }
        .badge { padding:2px 10px; border-radius:20px; font-size:11px; font-weight:600;
                 background:rgba(233,30,99,.15); color:#e91e63;
                 border:1px solid rgba(233,30,99,.3); }

        .controls { display:flex; gap:12px; margin-bottom:20px; align-items:center; }
        select, button { padding:8px 14px; border-radius:8px; border:1px solid #30363d;
                         background:#161b22; color:#e6edf3; font-size:13px; cursor:pointer; }
        button { background:#e91e63; border-color:#e91e63; font-weight:600; }
    </style>
</head>
<body>
    <h1>📡 Live IoT Dashboard</h1>
    <p id="status"><span class="dot"></span>Connecting to server...</p>

    <div class="controls">
        <label>Rows: </label>
        <select id="limit">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        <button onclick="fetchData()">🔄 Refresh Now</button>
    </div>

    <table>
        <thead>
            <tr>
                <th>#</th><th>Device</th><th>Temp (°C)</th>
                <th>Humidity (%)</th><th>Location</th><th>Recorded At</th>
            </tr>
        </thead>
        <tbody id="data-body">
            <tr><td colspan="6" style="color:#484f58;padding:20px">Loading...</td></tr>
        </tbody>
    </table>

    <script>
        let intervalId = null;

        function fetchData() {
            const limit = document.getElementById('limit').value;

            fetch('get_data.php?limit=' + limit)
                .then(res => {
                    if (!res.ok) throw new Error('HTTP ' + res.status);
                    return res.json();
                })
                .then(rows => {
                    const tbody = document.getElementById('data-body');

                    if (rows.length === 0) {
                        tbody.innerHTML = '<tr><td colspan="6" style="color:#484f58;padding:20px">No data yet — submit some sensor readings first.</td></tr>';
                        return;
                    }

                    tbody.innerHTML = rows.map(r => \`
                        <tr>
                            <td style="color:#484f58">\${r.id}</td>
                            <td><span class="badge">\${r.device_id}</span></td>
                            <td class="temp">\${parseFloat(r.temperature).toFixed(2)}</td>
                            <td class="hum">\${parseFloat(r.humidity).toFixed(2)}</td>
                            <td>\${r.location}</td>
                            <td style="color:#484f58;font-size:13px">\${r.recorded_at}</td>
                        </tr>
                    \`).join('');

                    document.getElementById('status').innerHTML =
                        '<span class="dot"></span>Last updated: ' + new Date().toLocaleTimeString();
                })
                .catch(err => {
                    document.getElementById('status').textContent = '❌ Error: ' + err.message;
                });
        }

        // Initial fetch
        fetchData();

        // Auto-refresh every 3 seconds
        intervalId = setInterval(fetchData, 3000);

        // Change interval when limit changes
        document.getElementById('limit').addEventListener('change', fetchData);
    </script>
</body>
</html>`}
            </CodeBlock>

            {/* 4 — Python auto-poster */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                Automating — Python Sensor Poster
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                Run this Python script in the background on the Pi. It reads a DHT22 and POSTs to your PHP server every 10 seconds,
                so the dashboard always shows fresh data without any manual input.
            </p>
            <CodeBlock filename="auto_poster.py">{`#!/usr/bin/env python3
"""
auto_poster.py — reads DHT22 sensor and POSTs to LAMP server every 10 sec.
Run:  python3 auto_poster.py
Background: nohup python3 auto_poster.py &
"""
import time, requests
import adafruit_dht, board

SERVER   = "http://localhost/save_data.php"
DEVICE   = "DHT22_GPIO4"
LOCATION = "greenhouse"
INTERVAL = 10   # seconds

sensor = adafruit_dht.DHT22(board.D4)

print(f"Posting to {SERVER} every {INTERVAL}s. Press Ctrl+C to stop.")

while True:
    try:
        temp = sensor.temperature
        hum  = sensor.humidity

        r = requests.post(SERVER, data={
            "device_id":   DEVICE,
            "temperature": round(temp, 2),
            "humidity":    round(hum, 2),
            "location":    LOCATION
        }, timeout=5)

        print(f"[{time.strftime('%H:%M:%S')}] {temp:.1f}°C {hum:.1f}%  → {r.json().get('status','?')}")

    except RuntimeError as e:
        print(f"Sensor error: {e}")  # DHT22 occasional misread — safe to ignore
    except Exception as e:
        print(f"POST error: {e}")

    time.sleep(INTERVAL)`}
            </CodeBlock>
            <p className="text-xs text-surface-400 mt-1 mb-8">
                Run as background service: {ic('nohup python3 auto_poster.py > /home/pi/sensor.log 2>&1 &')}
            </p>

            {/* 5 — Full flow summary */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">5</span>
                Complete IoT Data Flow — End to End
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
                <InfoCard  title="1. DHT22 / DS18B20" text="Sensor on a GPIO pin reads temperature and humidity values." />
                <InfoCard  title="2. Python POSTs data" text="auto_poster.py sends readings to save_data.php via HTTP POST every 10 seconds." />
                <InfoCard  title="3. PHP validates" text="save_data.php sanitizes input, validates ranges, and runs a prepared INSERT statement." />
                <InfoCard  title="4. MySQL stores row" text="MariaDB adds a new row to sensor_readings with an auto-stamped recorded_at timestamp." />
                <InfoCard  title="5. JS fetches JSON" text="dashboard.html calls get_data.php every 3 seconds using fetch() to retrieve the latest rows." />
                <InfoCard  title="6. Table updates" text="JavaScript rewrites the table rows in-place — no page flicker, always showing the freshest data." />
            </div>

            {/* File structure */}
            <div className="p-4 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                <h4 className="text-sm font-bold text-raspberry mb-2">📁 Complete File Structure on Your Pi</h4>
                <CodeBlock filename="/var/www/html/">{`/var/www/html/
├── index.html         ← HTML form (Topic 2) — manual sensor submission
├── save_data.php      ← PHP handler (Topic 3) — validates & inserts to MySQL
├── db_connect.php     ← DB credentials & connection (Topics 3 & 4)
├── get_data.php       ← JSON API (Topic 4 & 5) — returns latest readings
├── monitor.php        ← Meta-refresh dashboard (Topic 5 — Method 1)
└── dashboard.html     ← AJAX live dashboard  (Topic 5 — Method 2)

/home/pi/
└── auto_poster.py     ← Python DHT22 auto-poster (Topic 5)`}
                </CodeBlock>
            </div>

            {/* Nav */}
            <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between flex-wrap gap-4">
                <Link to="/tutorial/raspberry-pi/web-server/mysql-database"
                    className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Previous: MySQL Database
                </Link>
                <Link to="/tutorial/raspberry-pi/web-server"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Web Server Overview
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </article>
    )
}
