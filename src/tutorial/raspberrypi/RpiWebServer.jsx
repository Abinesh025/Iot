import { Link } from 'react-router-dom'

const topics = [
    {
        num: '01', icon: '🌐', badge: 'Fundamentals', color: 'primary',
        title: 'HTTP GET and POST Methods',
        desc: 'Understand how data travels between IoT devices and a web server. Learn when to use GET vs POST, read URL parameters and request bodies, and send sensor data from Python.',
        to: '/tutorial/raspberry-pi/web-server/http-methods',
        tags: ['HTTP', 'GET', 'POST', 'Python requests'],
    },
    {
        num: '02', icon: '📝', badge: 'Frontend', color: 'blue',
        title: 'Creating an HTML Form',
        desc: 'Build web forms that collect sensor data from the browser. Covers input types, action/method attributes, HTML5 validation, and a complete styled IoT sensor submission form.',
        to: '/tutorial/raspberry-pi/web-server/html-form',
        tags: ['HTML', 'form', 'input', 'action', 'method'],
    },
    {
        num: '03', icon: '🐘', badge: 'Backend', color: 'purple',
        title: 'PHP Form Handling',
        desc: 'Process form submissions server-side using PHP. Read $_POST and $_GET data, validate and sanitize inputs, connect to MySQL with mysqli, and return JSON responses.',
        to: '/tutorial/raspberry-pi/web-server/php-handling',
        tags: ['PHP', '$_POST', 'validation', 'mysqli', 'security'],
    },
    {
        num: '04', icon: '🗄️', badge: 'Database', color: 'green',
        title: 'Storing Data in MySQL',
        desc: 'Set up MariaDB on Raspberry Pi, create a sensor_readings table, insert rows with prepared statements, and write useful SQL queries for filtering and aggregating IoT data.',
        to: '/tutorial/raspberry-pi/web-server/mysql-database',
        tags: ['MySQL', 'MariaDB', 'INSERT', 'SELECT', 'SQL'],
    },
    {
        num: '05', icon: '📊', badge: 'Dashboard', color: 'raspberry',
        title: 'Real-Time Data Monitoring',
        desc: 'Build a live dashboard that auto-updates without page reloads. Covers HTML meta-refresh and the modern AJAX fetch() approach, plus a Python auto-poster to keep data flowing continuously.',
        to: '/tutorial/raspberry-pi/web-server/realtime-monitoring',
        tags: ['AJAX', 'fetch()', 'JSON', 'meta-refresh', 'dashboard'],
    },
]

const colorMap = {
    primary: { bg: 'bg-primary-500/10', border: 'border-primary-500/20', text: 'text-primary-400', badge: 'bg-primary-500/10 text-primary-400 border-primary-500/20' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400', badge: 'bg-green-500/10 text-green-400 border-green-500/20' },
    raspberry: { bg: 'bg-raspberry/10', border: 'border-raspberry/20', text: 'text-raspberry', badge: 'bg-raspberry/10 text-raspberry border-raspberry/20' },
}

export default function RpiWebServer() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Web Server Setup &amp; IoT Data Communication</span>
            </nav>

            {/* Hero */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
                Web Server Setup &amp; IoT Data Communication
            </h1>
            <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-6">
                <p className="text-surface-300 leading-relaxed">
                    The <strong className="text-raspberry">Raspberry Pi LAMP stack</strong> (Linux · Apache · MySQL · PHP) turns
                    your Pi into a fully-featured IoT web server. This module walks you through the entire stack
                    from HTTP fundamentals all the way to a live-updating sensor dashboard.
                </p>
            </div>

            {/* Prereq tip */}
            <div className="flex gap-3 p-4 rounded-xl bg-primary-500/5 border border-primary-500/20 mb-10">
                <span className="text-xl flex-shrink-0">💡</span>
                <div className="text-sm text-surface-300">
                    <strong className="text-primary-400">Prerequisites — Install LAMP:</strong>
                    <div className="rounded-lg bg-surface-900 border border-surface-800/60 p-3 mt-2 font-mono text-xs text-surface-300 overflow-x-auto">
                        sudo apt update && sudo apt install apache2 php php-mysql mariadb-server -y
                    </div>
                    <p className="mt-2 text-xs text-surface-400">Test: open <code className="px-1 rounded bg-surface-800 text-raspberry">http://localhost</code> in the Pi's browser — you should see the Apache default page.</p>
                </div>
            </div>

            {/* Topic cards */}
            <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-surface-800/60" />
                <span className="text-xs text-surface-500 font-medium uppercase tracking-widest">5 Topics</span>
                <div className="flex-1 h-px bg-surface-800/60" />
            </div>

            <div className="space-y-4">
                {topics.map((t) => {
                    const c = colorMap[t.color]
                    return (
                        <Link
                            key={t.num}
                            to={t.to}
                            className={`group flex gap-5 p-5 rounded-xl bg-surface-900/40 border ${c.border} hover:bg-surface-800/40 transition-all duration-200`}
                        >
                            {/* Number badge */}
                            {/* <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center`}>
                                <span className="text-xl">{t.icon}</span>
                            </div> */}

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${c.badge}`}>
                                        {t.badge}
                                    </span>
                                    <span className="text-xs text-surface-600">Topic {t.num}</span>
                                </div>
                                <h2 className={`text-base font-bold ${c.text} group-hover:underline mb-1.5`}>
                                    {t.title}
                                </h2>
                                <p className="text-sm text-surface-400 leading-relaxed mb-3">{t.desc}</p>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {t.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-0.5 rounded bg-surface-800/70 text-surface-500 font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex-shrink-0 flex items-center">
                                <svg className={`w-5 h-5 ${c.text} opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </Link>
                    )
                })}
            </div>

            {/* Bottom nav */}
            <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between flex-wrap gap-4">
                <Link to="/tutorial/raspberry-pi/programming/samples"
                    className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Sample Codes
                </Link>
                <Link to="/tutorial/raspberry-pi/web-server/http-methods"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                    Start: HTTP Methods
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </article>
    )
}
