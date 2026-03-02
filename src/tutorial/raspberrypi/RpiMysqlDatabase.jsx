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

const columns = [
    { col: 'id', type: 'INT AUTO_INCREMENT PRIMARY KEY', desc: 'Unique row identifier, auto-incremented' },
    { col: 'device_id', type: 'VARCHAR(50) NOT NULL', desc: 'Name or ID of the IoT device' },
    { col: 'temperature', type: 'FLOAT NOT NULL', desc: 'Temperature reading in °C' },
    { col: 'humidity', type: 'FLOAT NOT NULL', desc: 'Relative humidity in %' },
    { col: 'location', type: "VARCHAR(50) DEFAULT 'indoor'", desc: 'Where the sensor is deployed' },
    { col: 'notes', type: 'TEXT', desc: 'Optional free-text notes' },
    { col: 'recorded_at', type: 'TIMESTAMP DEFAULT NOW()', desc: 'Auto-stamped when row is inserted' },
]

export default function RpiMysqlDatabase() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/web-server" className="hover:text-primary-400 transition-colors">Web Server Setup</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Storing Data in MySQL</span>
            </nav>

            <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-raspberry/10 text-raspberry border border-raspberry/20">Database</span>
                <span className="text-xs text-surface-500">Topic 4 of 5</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">Storing Data in MySQL Database</h1>
            <p className="text-surface-400 text-base leading-relaxed mb-8">
                MySQL (MariaDB on Raspberry Pi OS) is where all your IoT sensor readings live permanently.
                This topic covers <strong className="text-surface-200">creating a database and table, inserting rows with PHP, and querying data</strong> — the full storage lifecycle.
            </p>

            {/* 1 — MariaDB setup */}
            <h2 className="text-xl font-bold text-surface-50 mt-8 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                Setting Up MariaDB on Raspberry Pi
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                Raspberry Pi OS ships with <strong className="text-raspberry">MariaDB</strong> — a drop-in compatible MySQL replacement.
                Run these commands once to secure your installation and create a dedicated database user for PHP.
            </p>
            <CodeBlock filename="terminal — one-time setup">{`# Install MariaDB (skip if already installed with LAMP)
sudo apt install mariadb-server -y

# Run the security wizard (set root password, remove test DB)
sudo mysql_secure_installation

# ── Log in as root ──────────────────────────────────────────
sudo mysql -u root -p

# ── Inside the MariaDB shell ────────────────────────────────

-- 1. Create database for IoT data
CREATE DATABASE iot_data CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2. Create a dedicated user (don't use root in PHP scripts)
CREATE USER 'pi_user'@'localhost' IDENTIFIED BY 'StrongPass123!';

-- 3. Grant full access to iot_data only
GRANT ALL PRIVILEGES ON iot_data.* TO 'pi_user'@'localhost';

-- 4. Apply changes
FLUSH PRIVILEGES;

-- 5. Switch to the new database
USE iot_data;`}
            </CodeBlock>

            {/* 2 — Create table */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                Creating the sensor_readings Table
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                A database <strong>table</strong> works like a spreadsheet: each column has a name and data type,
                and each inserted row is one sensor reading. Run this inside the MariaDB shell (or paste it into a {ic('.sql')} file).
            </p>
            <CodeBlock filename="create_table.sql">{`USE iot_data;

CREATE TABLE IF NOT EXISTS sensor_readings (
    id          INT          UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    device_id   VARCHAR(50)  NOT NULL,
    temperature FLOAT        NOT NULL,
    humidity    FLOAT        NOT NULL,
    location    VARCHAR(50)  NOT NULL DEFAULT 'indoor',
    notes       TEXT,
    recorded_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- Index on device_id speeds up filtering by device
    INDEX idx_device (device_id),
    -- Index on recorded_at speeds up date-range queries
    INDEX idx_time   (recorded_at)
);

-- Verify:
DESCRIBE sensor_readings;`}
            </CodeBlock>

            {/* Column reference table */}
            <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm text-surface-400 border-collapse">
                    <thead>
                        <tr className="border-b border-surface-800/60">
                            <th className="text-left py-3 pr-4 text-surface-300 font-semibold">Column</th>
                            <th className="text-left py-3 pr-4 text-surface-300 font-semibold">SQL Type</th>
                            <th className="text-left py-3 text-surface-300 font-semibold">Description</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-800/40">
                        {columns.map(r => (
                            <tr key={r.col} className="hover:bg-surface-800/20 transition-colors">
                                <td className="py-2.5 pr-4 text-raspberry font-mono font-semibold text-xs">{r.col}</td>
                                <td className="py-2.5 pr-4 text-xs font-mono text-surface-400">{r.type}</td>
                                <td className="py-2.5 text-xs">{r.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 3 — INSERT */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                Inserting Data — SQL INSERT Statement
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                The {ic('INSERT INTO')} statement adds a new row. You can test this directly in the MariaDB shell.
                PHP does exactly the same thing using {ic('$conn->prepare()')} and {ic('$stmt->execute()')}.
            </p>
            <CodeBlock filename="insert_examples.sql">{`-- Insert a single reading manually (for testing)
INSERT INTO sensor_readings (device_id, temperature, humidity, location)
VALUES ('DHT22_01', 28.5, 65.2, 'indoor');

-- Insert another row
INSERT INTO sensor_readings (device_id, temperature, humidity, location, notes)
VALUES ('DHT22_02', 22.1, 78.4, 'outdoor', 'Near window');

-- Verify the inserted rows
SELECT * FROM sensor_readings;

-- Insert multiple rows in one statement (efficient batch insert)
INSERT INTO sensor_readings (device_id, temperature, humidity, location) VALUES
    ('DHT22_01', 29.0, 63.0, 'indoor'),
    ('DHT22_02', 21.5, 80.0, 'outdoor'),
    ('DS18B20_01', 25.3, 0.0, 'greenhouse');   -- DS18B20 has no humidity`}
            </CodeBlock>

            {/* 4 — PHP insert */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                Inserting from PHP — save_data.php
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                This complete script accepts a POST request (from an HTML form or Python), validates the data, and inserts it using a <strong>prepared statement</strong>.
            </p>
            <CodeBlock filename="save_data.php">{`<?php
header('Content-Type: application/json');
require 'db_connect.php';   // opens $conn

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "POST required"]);
    exit;
}

// Sanitize
$device_id   = htmlspecialchars(strip_tags(trim($_POST['device_id']   ?? '')));
$temperature = floatval($_POST['temperature'] ?? 0);
$humidity    = floatval($_POST['humidity']    ?? 0);
$location    = htmlspecialchars(strip_tags(trim($_POST['location'] ?? 'indoor')));
$notes       = htmlspecialchars(strip_tags(trim($_POST['notes']    ?? '')));

// Validate ranges
if (empty($device_id) || $temperature < -50 || $temperature > 100
                       || $humidity    <   0  || $humidity    > 100) {
    http_response_code(422);
    echo json_encode(["error" => "Invalid input data"]);
    exit;
}

// Prepared statement — "sdds" means: string, double, double, string
$stmt = $conn->prepare(
    "INSERT INTO sensor_readings (device_id, temperature, humidity, location, notes)
     VALUES (?, ?, ?, ?, ?)"
);
$stmt->bind_param("sddss", $device_id, $temperature, $humidity, $location, $notes);

if ($stmt->execute()) {
    echo json_encode([
        "status"    => "success",
        "insert_id" => $conn->insert_id,
        "device"    => $device_id,
        "temp"      => $temperature,
        "humidity"  => $humidity
    ]);
} else {
    http_response_code(500);
    echo json_encode(["error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>`}
            </CodeBlock>

            {/* 5 — Useful SQL queries */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">5</span>
                Useful SQL Queries for IoT Data
            </h2>
            <CodeBlock filename="useful_queries.sql">{`-- ── Latest 10 readings (newest first) ─────────────────
SELECT * FROM sensor_readings
ORDER BY recorded_at DESC
LIMIT 10;

-- ── All readings from a specific device ────────────────
SELECT * FROM sensor_readings
WHERE device_id = 'DHT22_01'
ORDER BY recorded_at DESC;

-- ── Readings from the last 24 hours ────────────────────
SELECT * FROM sensor_readings
WHERE recorded_at >= NOW() - INTERVAL 24 HOUR
ORDER BY recorded_at DESC;

-- ── Average + min + max per device ─────────────────────
SELECT
    device_id,
    COUNT(*)                   AS total_readings,
    ROUND(AVG(temperature), 2) AS avg_temp,
    ROUND(MIN(temperature), 2) AS min_temp,
    ROUND(MAX(temperature), 2) AS max_temp,
    ROUND(AVG(humidity),    2) AS avg_humidity
FROM sensor_readings
GROUP BY device_id;

-- ── Daily average temperature for last 7 days ──────────
SELECT
    DATE(recorded_at)          AS day,
    ROUND(AVG(temperature), 2) AS avg_temp,
    ROUND(AVG(humidity),    2) AS avg_humidity,
    COUNT(*)                   AS readings
FROM sensor_readings
WHERE recorded_at >= NOW() - INTERVAL 7 DAY
GROUP BY DATE(recorded_at)
ORDER BY day DESC;

-- ── Delete readings older than 30 days ─────────────────
DELETE FROM sensor_readings
WHERE recorded_at < NOW() - INTERVAL 30 DAY;`}
            </CodeBlock>

            {/* 6 — PHP fetch example */}
            <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">6</span>
                Fetching Data with PHP
            </h2>
            <p className="text-surface-300 text-sm leading-relaxed mb-3">
                This {ic('get_data.php')} script queries the database and returns the latest readings as JSON — ready to be consumed by a JavaScript dashboard.
            </p>
            <CodeBlock filename="get_data.php">{`<?php
header('Content-Type: application/json');
require 'db_connect.php';

// Optional device filter via GET param: ?device=DHT22_01
$device_filter = htmlspecialchars(strip_tags($_GET['device'] ?? ''));
$limit         = intval($_GET['limit'] ?? 10);
$limit         = min(max($limit, 1), 100);   // clamp 1-100

if ($device_filter) {
    $stmt = $conn->prepare(
        "SELECT id, device_id, temperature, humidity, location, recorded_at
         FROM sensor_readings
         WHERE device_id = ?
         ORDER BY recorded_at DESC LIMIT ?"
    );
    $stmt->bind_param("si", $device_filter, $limit);
    $stmt->execute();
    $result = $stmt->get_result();
} else {
    $result = $conn->query(
        "SELECT id, device_id, temperature, humidity, location, recorded_at
         FROM sensor_readings ORDER BY recorded_at DESC LIMIT $limit"
    );
}

$rows = [];
while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}

echo json_encode($rows);
$conn->close();
?>`}
            </CodeBlock>

            <div className="grid sm:grid-cols-3 gap-3 mb-8 mt-4">
                <InfoCard  title="Query by device" text="GET /get_data.php?device=DHT22_01 — returns readings for one device only." />
                <InfoCard  title="Limit rows" text="GET /get_data.php?limit=50 — controls how many rows are returned (max 100)." />
                <InfoCard  title="JSON output" text="Returns a JSON array — plug this into any JavaScript dashboard, chart library, or mobile app." />
            </div>

            {/* Nav */}
            <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between flex-wrap gap-4">
                <Link to="/tutorial/raspberry-pi/web-server/php-handling"
                    className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Previous: PHP Form Handling
                </Link>
                <Link to="/tutorial/raspberry-pi/web-server/realtime-monitoring"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Next: Real-Time Monitoring
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </article>
    )
}
