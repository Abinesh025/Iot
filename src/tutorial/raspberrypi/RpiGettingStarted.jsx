import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const steps = [
    {
        num: '1',
        title: 'Choose Your Raspberry Pi Model',
        desc: 'Pick the right board for your project. The Raspberry Pi 4 (4GB) is the best all-rounder; the Pi Zero 2W for ultra-compact builds.',
    },
    {
        num: '2',
        title: 'Download Raspberry Pi Imager',
        desc: 'Grab the official Raspberry Pi Imager from raspberrypi.com/software. Available for Windows, macOS, and Ubuntu.',
    },
    {
        num: '3',
        title: 'Flash the OS to a microSD Card',
        desc: 'Insert a ≥16 GB Class-10 microSD card, open Imager, choose "Raspberry Pi OS (64-bit)", select your card, and click Write.',
    },
    {
        num: '4',
        title: 'Configure Wi-Fi & SSH (Optional)',
        desc: 'In Imager\'s advanced settings (⚙), set a hostname, enable SSH, and enter Wi-Fi credentials before flashing for a headless setup.',
    },
    {
        num: '5',
        title: 'First Boot & Desktop',
        desc: 'Insert the card, connect power (5V USB-C). Wait ~90 seconds. Connect an HDMI monitor or find your Pi\'s IP and SSH in.',
    },
    {
        num: '6',
        title: 'Update the System',
        desc: 'Open a terminal and run: sudo apt update && sudo apt full-upgrade -y. This ensures you have the latest packages and security patches.',
    },
]

const hardware = [
    { item: 'Raspberry Pi board', note: 'Pi 4 Model B recommended' },
    { item: 'microSD card (≥16 GB, Class-10)', note: 'Faster the better' },
    { item: 'USB-C power supply (5V 3A)', note: 'Official adapter preferred' },
    { item: 'HDMI / micro-HDMI cable', note: 'For initial desktop setup' },
    { item: 'USB keyboard & mouse', note: 'Only for desktop first boot' },
    { item: 'Ethernet cable (optional)', note: 'More reliable than Wi-Fi' },
]

export default function RpiGettingStarted() {
    return (
        <article>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Getting Started</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">Getting Started with Raspberry Pi</h1>

            <div className="prose max-w-none">
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-8">
                    <p className="text-surface-300 leading-relaxed">
                        Setting up a Raspberry Pi for the first time takes less than 15 minutes. This guide walks you through
                        flashing the OS, connecting your hardware, and getting to a working desktop or headless SSH session —
                        ready to start building.
                    </p>
                </div>

                <YoutubeEmbed id="ntaXWS8Lk34" title="Raspberry Pi Getting Started Guide" />

                {/* Hardware you need */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    What You'll Need
                </h2>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Item</th>
                                <th className="text-left py-2 text-surface-300 font-semibold">Note</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {hardware.map(({ item, note }) => (
                                <tr key={item}>
                                    <td className="py-2 pr-4 text-surface-200">{item}</td>
                                    <td className="py-2 text-surface-500">{note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Steps */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    Step-by-Step Setup
                </h2>
                <div className="space-y-4 mb-8">
                    {steps.map(({ num, title, desc }) => (
                        <div key={num} className="flex gap-4 p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-raspberry/15 flex items-center justify-center text-raspberry font-bold text-sm">{num}</div>
                            <div>
                                <h3 className="text-sm font-semibold text-surface-50 mb-1">{title}</h3>
                                <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* First commands */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Essential First Commands
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-6">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">terminal</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`# Update all packages
sudo apt update && sudo apt full-upgrade -y

# Check your Pi model and OS
cat /proc/device-tree/model
uname -a

# Enable SSH (if not done during flash)
sudo systemctl enable ssh && sudo systemctl start ssh

# Check your IP address
hostname -I

# Change default password (security best practice!)
passwd

# Install useful tools
sudo apt install -y git vim curl htop`}</pre>
                </div>

                {/* Headless SSH */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                    Headless SSH Access
                </h2>
                <div className="rounded-xl bg-surface-900 border border-surface-800/50 overflow-hidden mb-8">
                    <div className="px-4 py-2 bg-surface-800/50 text-xs text-surface-500 font-mono">from your computer</div>
                    <pre className="p-4 text-sm text-surface-300 font-mono overflow-x-auto">{`# Connect over SSH (default hostname: raspberrypi.local)
ssh pi@raspberrypi.local

# Or use the IP address directly
ssh pi@192.168.1.XX

# Copy files to your Pi using SCP
scp myfile.py pi@raspberrypi.local:/home/pi/

# Run VS Code remotely via Remote-SSH extension
# Host: raspberrypi.local  User: pi`}</pre>
                </div>

                <p className="text-surface-500 text-xs mb-8">
                    💡 Use <code className="bg-surface-800 px-1.5 py-0.5 rounded text-raspberry">sudo raspi-config</code> to enable I2C, SPI, Camera, and other interfaces from the terminal.
                </p>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link to="/tutorial/raspberry-pi" className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Raspberry Pi Overview
                    </Link>
                    <Link to="/tutorial/raspberry-pi/gpio" className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors">
                        GPIO & Hardware
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
