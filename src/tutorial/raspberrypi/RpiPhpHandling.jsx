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

export default function RpiPhpHandling() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/web-server" className="hover:text-primary-400 transition-colors">Web Server Setup</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">PHP Form Handling</span>
            </nav>

            <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-raspberry/10 text-raspberry border border-raspberry/20">Backend</span>
                <span className="text-xs text-surface-500">Topic 3 of 5</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">PHP Form Handling</h1>
            <p className="text-surface-400 text-base leading-relaxed mb-8">
                PHP is the <strong className="text-surface-200">server-side language</strong> that runs inside Apache on your Raspberry Pi.
                When a form is submitted, PHP reads the incoming data, validates it, connects to MySQL, and sends a response — all in one script.
            </p>

            {/* Warning */}
            <div className="flex gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 mb-8 text-sm">
                <span className="text-xl flex-shrink-0">⚠️</span>
                <p className="text-surface-300 leading-relaxed">
                    All PHP files must live in {ic('/var/www/html/')} on your Pi for Apache to run them.
                    Test PHP is working: create {ic('/var/www/html/test.php')} with {ic('<?php phpinfo(); ?>')} and open {ic('http://localhost/test.php')}.
                </p>
            </div>

            {/* 1 — What is PHP */}
            <h2 className="text-xl font-bold text-surface-50 mt-8 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                What is PHP?
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-4">
                <strong className="text-raspberry">PHP (Hypertext Preprocessor)</strong> is a server-side scripting language.
                Unlike HTML (which runs in the browser), PHP runs on the web server and <em>generates</em> HTML output.
                In a LAMP IoT stack, PHP handles all the logic between the web form and the MySQL database.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
                <InfoCard  title="Receives form data" text="Reads $_POST or $_GET superglobal arrays populated by Apache when the form is submitted." />
                <InfoCard  title="Validates & sanitizes" text="Checks ranges, strips dangerous characters, and rejects malformed input before touching the DB." />
                <InfoCard  title="Talks to MySQL" text="Uses mysqli extension to execute prepared SQL statements and return results as JSON or HTML." />
            </div>

            {/* 2 — $_POST and $_GET */}
            <h2 className="text-xl font-bold text-surface-50 mt-8 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                Reading Form Data — $_POST and $_GET
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                PHP automatically populates two superglobal arrays from the incoming request. The {ic('name')} attribute
                on every HTML input becomes the array key.
            </p>
            <CodeBlock filename="read_form.php">{`<?php
// ── Reading POST data (from method="POST" form) ──
$device_id   = $_POST['device_id'];    // e.g. "DHT22_01"
$temperature = $_POST['temperature'];  // e.g. "28.5"
$humidity    = $_POST['humidity'];     // e.g. "65.2"
$location    = $_POST['location'];     // e.g. "indoor"

echo "Device: "      . $device_id;
echo " | Temp: "     . $temperature . "°C";
echo " | Humidity: " . $humidity    . "%";
echo " | Location: " . $location;

// ── Reading GET data (from URL ?key=value or method="GET" form) ──
$device_filter = $_GET['device'] ?? 'all';  // default "all" if missing
$from_date     = $_GET['from']   ?? '';
echo "Filter: " . $device_filter . " from " . $from_date;
?>`}
            </CodeBlock>
            <div className="grid sm:grid-cols-2 gap-3 my-4">
                <InfoCard icon="📥" title='$_POST["key"]'
                    text="Reads values sent in the request body (method=POST). Not visible in the URL. Ideal for sensor data." />
                <InfoCard icon="🔗" title='$_GET["key"]'
                    text="Reads URL query parameters (?key=value) or method=GET form data. Visible in the URL bar." />
            </div>

            {/* 3 — Validation */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                Validating and Sanitizing Input
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                <strong>Never trust raw input</strong>. Always validate on the server — HTML5 {ic('required')} can be bypassed
                with browser dev tools. Server-side validation ensures correct data and prevents SQL injection.
            </p>
            <CodeBlock filename="validate.php">{`<?php
// ── Step 1: Verify the request method ─────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die("Method Not Allowed — use POST.");
}

// ── Step 2: Check required fields are not empty ────
if (empty($_POST['temperature']) || empty($_POST['humidity'])) {
    http_response_code(400);
    die("Error: temperature and humidity are required.");
}

// ── Step 3: Sanitize — remove HTML tags & special chars ──
$device_id = htmlspecialchars(strip_tags(trim($_POST['device_id'] ?? '')));
$location  = htmlspecialchars(strip_tags(trim($_POST['location']  ?? 'indoor')));

// ── Step 4: Cast to correct numeric types ──────────
$temperature = floatval($_POST['temperature']);
$humidity    = floatval($_POST['humidity']);

// ── Step 5: Range validation ───────────────────────
if ($temperature < -50 || $temperature > 100) {
    http_response_code(422);
    die("Error: Temperature must be between -50 and 100°C. Got: $temperature");
}
if ($humidity < 0 || $humidity > 100) {
    http_response_code(422);
    die("Error: Humidity must be 0-100%. Got: $humidity");
}
if (empty($device_id)) {
    http_response_code(422);
    die("Error: device_id cannot be empty.");
}

// ✅ All checks passed — safe to store in database
echo "Validation passed: $device_id | {$temperature}°C | {$humidity}%";
?>`}
            </CodeBlock>

            {/* 4 — DB connection */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                Connecting PHP to MySQL
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                Create a separate {ic('db_connect.php')} file. Include it in every script with {ic('require')} —
                this keeps your credentials in one place so you only need to update them once.
            </p>
            <CodeBlock filename="db_connect.php">{`<?php
// ── Database credentials ───────────────────────────
define('DB_HOST', 'localhost');    // MariaDB on the same Pi
define('DB_USER', 'pi_user');      // User you created in MySQL
define('DB_PASS', 'yourpassword'); // Secure password
define('DB_NAME', 'iot_data');     // Database name

// ── Open connection ────────────────────────────────
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// ── Check for errors ──────────────────────────────
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode([
        "status"  => "error",
        "message" => "DB connection failed: " . $conn->connect_error
    ]));
}

// Set character encoding — prevents encoding issues
$conn->set_charset('utf8mb4');

// $conn is now available to all scripts that require this file
?>`}
            </CodeBlock>

            {/* 5 — Complete handler */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">5</span>
                Complete Form Handler — save_data.php
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                This combines validation, sanitization, and MySQL insertion into one production-ready script.
                It also returns JSON — so it works both from an HTML form and from a Python {ic('requests.post()')} call.
            </p>
            <CodeBlock filename="save_data.php">{`<?php
header('Content-Type: application/json');
require 'db_connect.php';   // opens $conn

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Use POST"]);
    exit;
}

// ── Sanitize ─────────────────────────────────────
$device_id   = htmlspecialchars(strip_tags(trim($_POST['device_id']   ?? '')));
$temperature = floatval($_POST['temperature'] ?? 0);
$humidity    = floatval($_POST['humidity']    ?? 0);
$location    = htmlspecialchars(strip_tags(trim($_POST['location'] ?? 'indoor')));
$notes       = htmlspecialchars(strip_tags(trim($_POST['notes']    ?? '')));

// ── Validate ─────────────────────────────────────
if (empty($device_id)) {
    http_response_code(422);
    echo json_encode(["status"=>"error","message"=>"device_id required"]);
    exit;
}
if ($temperature < -50 || $temperature > 100 || $humidity < 0 || $humidity > 100) {
    http_response_code(422);
    echo json_encode(["status"=>"error","message"=>"Value out of range"]);
    exit;
}

// ── Insert using prepared statement (prevents SQL injection) ──
$sql  = "INSERT INTO sensor_readings
             (device_id, temperature, humidity, location, notes)
         VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sddss", $device_id, $temperature, $humidity, $location, $notes);

if ($stmt->execute()) {
    echo json_encode([
        "status"    => "success",
        "message"   => "Reading saved",
        "insert_id" => $conn->insert_id,
        "data"      => compact('device_id','temperature','humidity','location')
    ]);
} else {
    http_response_code(500);
    echo json_encode(["status"=>"error","message"=>$stmt->error]);
}

$stmt->close();
$conn->close();
?>`}
            </CodeBlock>

            {/* Security note */}
            <div className="flex gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20 mt-4 mb-8 text-sm">
                <span className="text-xl flex-shrink-0">🛡️</span>
                <div className="text-surface-300 leading-relaxed space-y-1">
                    <p><strong className="text-green-400">Security checklist:</strong></p>
                    <p>✅ {ic('strip_tags()')} — removes any HTML/JS injected in input fields</p>
                    <p>✅ {ic('htmlspecialchars()')} — converts {`<>`} to safe HTML entities</p>
                    <p>✅ {ic('floatval()')} — forces numeric type, blocks text injection in number fields</p>
                    <p>✅ <strong>Prepared statements</strong> with {ic('bind_param()')} — prevents SQL injection entirely</p>
                </div>
            </div>

            {/* 6 — Testing */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">6</span>
                Testing Your PHP Script
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                Test your PHP endpoint from the Pi terminal using {ic('curl')} — no browser needed:
            </p>
            <CodeBlock filename="terminal">{`# Test your PHP endpoint with curl — simulates a form POST
curl -X POST http://localhost/save_data.php \
     -d "device_id=DHT22_TEST" \
     -d "temperature=28.5" \
     -d "humidity=65.2" \
     -d "location=indoor"

# Expected response (JSON):
# {"status":"success","message":"Reading saved","insert_id":1,...}

# Test error handling — temperature out of range
curl -X POST http://localhost/save_data.php \
     -d "device_id=DHT22_TEST&temperature=999&humidity=65"
# Expected: {"status":"error","message":"Value out of range"}

# Check Apache error logs if something fails
sudo tail -f /var/log/apache2/error.log`}
            </CodeBlock>

            {/* Nav */}
            <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between flex-wrap gap-4">
                <Link to="/tutorial/raspberry-pi/web-server/html-form"
                    className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Previous: HTML Form
                </Link>
                <Link to="/tutorial/raspberry-pi/web-server/mysql-database"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Next: Storing in MySQL
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </article>
    )
}
