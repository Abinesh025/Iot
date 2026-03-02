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

const inputTypes = [
    { type: 'text', use: 'Device names, labels, descriptions', example: 'name="device_id"' },
    { type: 'number', use: 'Temperature, humidity, numeric values', example: 'step="0.01"' },
    { type: 'email', use: 'Alert email address', example: 'name="email"' },
    { type: 'date', use: 'Date filters for data queries', example: 'name="from_date"' },
    { type: 'select', use: 'Dropdowns — location, sensor type', example: '<option value="indoor">Indoor</option>' },
    { type: 'hidden', use: 'Pass device ID without user seeing it', example: 'name="sensor_type" value="DHT22"' },
    { type: 'submit', use: 'The submit button', example: 'type="submit"' },
]

export default function RpiHtmlForm() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/web-server" className="hover:text-primary-400 transition-colors">Web Server Setup</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Creating an HTML Form</span>
            </nav>

            <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-raspberry/10 text-raspberry border border-raspberry/20">Frontend</span>
                <span className="text-xs text-surface-500">Topic 2 of 5</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">Creating an HTML Form</h1>
            <p className="text-surface-400 text-base leading-relaxed mb-8">
                HTML forms are the <strong className="text-surface-200">bridge between your user and the server</strong>.
                They let you manually submit sensor values, control settings, or filter dashboard data from a web page served by Apache on your Pi.
            </p>

            {/* 1 — What is a form */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                What is an HTML Form?
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-4">
                An HTML {ic('<form>')} element wraps input controls. When the user clicks <em>Submit</em>, the browser packages all
                input values into an HTTP request (GET or POST) and sends it to the URL in the {ic('action')} attribute.
                PHP on the server then reads and processes the data.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
                <InfoCard  title="Input fields" text="Collect data — text, numbers, dropdowns, dates, checkboxes." />
                <InfoCard  title="action attribute" text='Where to send data: action="save_data.php" routes it to your PHP script.' />
                <InfoCard  title="method attribute" text='GET appends data to the URL. POST hides it in the request body.' />
            </div>

            {/* 2 — Basic structure */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                Basic Form Structure
            </h2>
            <CodeBlock filename="basic_form.html">{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sensor Submit</title>
</head>
<body>
  <!-- action = PHP script  |  method = HTTP method -->
  <form action="save_data.php" method="POST">

    <label for="device">Device Name:</label>
    <input type="text"   id="device" name="device_id"   placeholder="DHT22_01" required>

    <label for="temp">Temperature (°C):</label>
    <input type="number" id="temp"   name="temperature" step="0.01" required>

    <label for="hum">Humidity (%):</label>
    <input type="number" id="hum"    name="humidity"    step="0.01" required>

    <button type="submit">💾 Save Reading</button>

  </form>
</body>
</html>

<!-- After submit, PHP reads:        -->
<!--   $_POST["device_id"]           -->
<!--   $_POST["temperature"]         -->
<!--   $_POST["humidity"]            -->`}
            </CodeBlock>

            {/* 3 — Input types */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                Input Types Reference
            </h2>
            <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm text-surface-400 border-collapse">
                    <thead>
                        <tr className="border-b border-surface-800/60">
                            <th className="text-left py-3 pr-4 text-surface-300 font-semibold">type=</th>
                            <th className="text-left py-3 pr-4 text-surface-300 font-semibold">IoT Use-case</th>
                            <th className="text-left py-3 text-surface-300 font-semibold">Example</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-800/40">
                        {inputTypes.map(r => (
                            <tr key={r.type} className="hover:bg-surface-800/20 transition-colors">
                                <td className="py-2.5 pr-4 text-raspberry font-mono font-semibold text-xs">{r.type}</td>
                                <td className="py-2.5 pr-4 text-xs">{r.use}</td>
                                <td className="py-2.5 text-xs font-mono text-surface-500">{r.example}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 4 — Key attributes */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                Key Attributes Explained
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
                <InfoCard  title='name="temperature"' text='Every input must have a name. It becomes the key PHP reads: $_POST["temperature"].' />
                <InfoCard  title="required" text="HTML5 validation — browser blocks submission if empty. No JavaScript needed." />
                <InfoCard  title='step="0.01"' text="Controls decimal precision for number inputs. Allows two decimal places for sensor readings." />
                <InfoCard  title='type="hidden"' text='Passes extra data (sensor_type, firmware_version) invisibly alongside the visible form fields.' />
            </div>

            {/* 5 — Complete styled form */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">5</span>
                Complete Styled IoT Sensor Form
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                Deploy this directly to {ic('/var/www/html/index.html')} on your Pi. It includes styled inputs, dropdown,
                two-column layout, hidden fields, and client-side HTML5 validation.
            </p>
            <CodeBlock filename="/var/www/html/index.html">{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IoT Sensor Input — Raspberry Pi</title>
    <style>
        * { box-sizing: border-box; margin:0; padding:0; }
        body { font-family:'Segoe UI',Arial,sans-serif; background:#0d1117;
               color:#e6edf3; min-height:100vh; display:flex;
               align-items:center; justify-content:center; padding:20px; }
        .card { background:#161b22; border:1px solid #30363d;
                border-radius:14px; padding:36px; width:100%; max-width:430px; }
        h1 { font-size:20px; margin-bottom:24px; }
        label { display:block; font-size:11px; font-weight:600; color:#8b949e;
                margin-bottom:6px; text-transform:uppercase; letter-spacing:.05em; }
        input, select { width:100%; padding:10px 14px; margin-bottom:18px;
                        background:#0d1117; border:1px solid #30363d;
                        border-radius:8px; color:#e6edf3; font-size:14px; }
        input:focus, select:focus { outline:none; border-color:#e91e63; }
        .row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        button { width:100%; padding:13px; background:linear-gradient(135deg,#e91e63,#c2185b);
                 color:#fff; border:none; border-radius:8px;
                 font-size:15px; font-weight:600; cursor:pointer; }
        button:hover { opacity:.85; }
    </style>
</head>
<body>
<div class="card">
    <h1>🌡️ Submit Sensor Reading</h1>

    <form action="save_data.php" method="POST">

        <!-- Hidden: passed silently with every submission -->
        <input type="hidden" name="sensor_type" value="DHT22">

        <label>Device ID</label>
        <input type="text" name="device_id" value="DHT22_01" required>

        <div class="row">
            <div>
                <label>Temperature (°C)</label>
                <input type="number" name="temperature"
                       step="0.01" min="-50" max="100" required placeholder="28.50">
            </div>
            <div>
                <label>Humidity (%)</label>
                <input type="number" name="humidity"
                       step="0.01" min="0" max="100" required placeholder="65.00">
            </div>
        </div>

        <label>Location</label>
        <select name="location">
            <option value="indoor">🏠 Indoor</option>
            <option value="outdoor">🌳 Outdoor</option>
            <option value="greenhouse">🌿 Greenhouse</option>
            <option value="server_room">💻 Server Room</option>
        </select>

        <label>Notes (optional)</label>
        <input type="text" name="notes" placeholder="e.g. Near window, fan on">

        <button type="submit">💾 Save to Database</button>
    </form>
</div>
</body>
</html>`}
            </CodeBlock>

            {/* 6 — GET filter form */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">6</span>
                GET Form — Filtering Dashboard Data
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                For <em>reading</em> or <em>filtering</em> data, use {ic('method="GET"')}. The URL will include your parameters
                so results can be bookmarked or shared.
            </p>
            <CodeBlock filename="filter_form.html">{`<form action="monitor.php" method="GET">

    <label>Filter by Device:</label>
    <select name="device">
        <option value="">All Devices</option>
        <option value="DHT22_01">DHT22 Sensor 01</option>
        <option value="DS18B20_01">DS18B20 Temperature</option>
    </select>

    <label>From Date:</label>
    <input type="date" name="from">

    <label>To Date:</label>
    <input type="date" name="to">

    <button type="submit">🔍 Search</button>
</form>

<!-- Resulting URL: monitor.php?device=DHT22_01&from=2026-01-01&to=2026-01-31 -->
<!-- PHP reads:     $_GET['device'], $_GET['from'], $_GET['to']                -->`}
            </CodeBlock>

            <div className="flex gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 mt-2 mb-8 text-sm">
                <span className="text-xl flex-shrink-0">⚠️</span>
                <p className="text-surface-300 leading-relaxed">
                    Place all {ic('.html')} and {ic('.php')} files in {ic('/var/www/html/')} on your Pi.
                    Restart Apache after changes: {ic('sudo systemctl restart apache2')}
                </p>
            </div>

            {/* Nav */}
            <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between flex-wrap gap-4">
                <Link to="/tutorial/raspberry-pi/web-server/http-methods"
                    className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Previous: HTTP Methods
                </Link>
                <Link to="/tutorial/raspberry-pi/web-server/php-handling"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Next: PHP Form Handling
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </article>
    )
}
