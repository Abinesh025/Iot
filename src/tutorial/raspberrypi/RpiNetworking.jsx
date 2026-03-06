import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const topics = [
    { title: 'SSH Remote Access', desc: 'Connect to your Pi from any computer over the local network — no monitor required.', icon: '🔐' },
    { title: 'Static IP Address', desc: 'Assign your Pi a permanent IP so you always know how to reach it over the network.', icon: '🌐' },
    { title: 'Wi-Fi Configuration', desc: 'Connect via GUI, raspi-config, or wpa_supplicant.conf for headless setups.', icon: '📶' },
    { title: 'systemd Services', desc: 'Run Python scripts automatically at boot as background services.', icon: '⚙️' },
    { title: 'File Transfer (SCP)', desc: 'Copy files to and from your Pi securely via SCP or rsync.', icon: '📁' },
    { title: 'Firewall with ufw', desc: 'Secure your Pi — only expose the ports you need: SSH (22), HTTP (80).', icon: '🛡️' },
]

const linuxCommands = [
    { cmd: 'sudo apt update && sudo apt upgrade -y', note: 'Update all packages' },
    { cmd: 'df -h', note: 'Check disk space' },
    { cmd: 'free -h', note: 'Check RAM usage' },
    { cmd: 'htop', note: 'Monitor running processes' },
    { cmd: 'ip a', note: 'Show network interfaces & IPs' },
    { cmd: 'ping google.com', note: 'Test internet connectivity' },
    { cmd: 'sudo journalctl -u myservice', note: 'View service logs' },
    { cmd: 'sudo reboot', note: 'Reboot the Pi' },
]

export default function RpiNetworking() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Networking & Linux</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Networking & Linux on Raspberry Pi</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        Raspberry Pi runs a full Debian-based Linux OS — which means SSH, systemd, a firewall, and the
                        entire Linux networking stack. Mastering these skills lets you run your Pi <strong className="text-raspberry">headlessly</strong>,
                        serve web apps, and build always-on IoT endpoints.
                    </p>
                </div>

                <YoutubeEmbed id="cSFUH0p8R1Y" title="Raspberry Pi Networking and Linux" />

                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    Key Topics
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {topics.map(({ title, desc, icon }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-lg">{icon}</span>
                                <h3 className="text-sm font-semibold text-surface-50">{title}</h3>
                            </div>
                            <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    SSH Setup
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">terminal</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`# Enable SSH on the Pi
sudo systemctl enable ssh && sudo systemctl start ssh

# Find your Pi's IP
hostname -I

# Connect from your PC
ssh pi@raspberrypi.local

# Copy SSH key for passwordless login
ssh-copy-id pi@raspberrypi.local`}</pre>
                </div>

                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Static IP & systemd Service
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-2">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">/etc/dhcpcd.conf — static IP</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`interface eth0
static ip_address=192.168.1.50/24
static routers=192.168.1.1
static domain_name_servers=8.8.8.8`}</pre>
                </div>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-8">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">/etc/systemd/system/myapp.service</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`[Unit]
Description=My IoT App
After=network.target

[Service]
ExecStart=/usr/bin/python3 /home/pi/myapp/main.py
Restart=always
User=pi

[Install]
WantedBy=multi-user.target`}</pre>
                </div>

                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                    Essential Linux Commands
                </h2>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Command</th>
                                <th className="text-left py-2 text-surface-300 font-semibold">Purpose</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {linuxCommands.map(({ cmd, note }) => (
                                <tr key={cmd}>
                                    <td className="py-2 pr-4 font-mono text-xs text-raspberry">{cmd}</td>
                                    <td className="py-2 text-surface-500">{note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi/python-libraries" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Python Libraries
                    </Link>
                    <Link to="/tutorial/raspberry-pi/iot-projects" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        IoT Projects
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
