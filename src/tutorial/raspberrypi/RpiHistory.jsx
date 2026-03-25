import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const timeline = [
    {
        year: '2006',
        title: 'The Idea is Born',
        detail:
            'Eben Upton and colleagues at the University of Cambridge noticed a sharp decline in the programming skills of students applying to computer science. They wanted an affordable, hackable computer to rekindle interest in computing among young people.',
    },
    {
        year: '2008',
        title: 'Prototype Development',
        detail:
            'The team began developing hardware prototypes based on Atmel microcontrollers. These early designs evolved significantly, eventually settling on the Broadcom BCM2835 ARM processor for its price, power, and multimedia capabilities.',
    },
    {
        year: '2012',
        title: 'Raspberry Pi Model B Launches',
        detail:
            'On 29 February 2012, the Raspberry Pi Model B was officially released. The $35 computer sold out almost instantly, with over 100,000 units ordered on the first day. It featured a 700 MHz ARM processor, 256 MB of RAM, and an HDMI port.',
    },
    {
        year: '2014',
        title: 'Raspberry Pi Model B+ & Compute Module',
        detail:
            'The improved Model B+ added more USB ports, a full 40-pin GPIO header, and a microSD slot. The first Compute Module was also introduced, targeting industrial and embedded applications.',
    },
    {
        year: '2015',
        title: 'Raspberry Pi 2 & Pi Zero',
        detail:
            'Raspberry Pi 2 delivered a huge performance leap with a quad-core ARMv7 processor. Later that year, the $5 Raspberry Pi Zero became the most affordable programmable computer ever sold.',
    },
    {
        year: '2016',
        title: 'Raspberry Pi 3 — Wireless Built In',
        detail:
            'Raspberry Pi 3 Model B added onboard Wi-Fi and Bluetooth for the first time. This made headless IoT deployments far simpler and pushed the Pi into mainstream home automation and maker projects.',
    },
    {
        year: '2019',
        title: 'Raspberry Pi 4 — Desktop-Class Power',
        detail:
            'Raspberry Pi 4 Model B delivered up to 8 GB RAM, USB 3.0, dual 4K HDMI, Gigabit Ethernet, and a 64-bit quad-core Cortex-A72. For the first time, the Pi could genuinely replace a desktop PC for everyday tasks.',
    },
    {
        year: '2023',
        title: 'Raspberry Pi 5 — Next Generation',
        detail:
            'Raspberry Pi 5 arrived with the custom-designed RP1 southbridge chip, a Cortex-A76 processor at 2.4 GHz, PCIe support, and a real-time clock. It is the most powerful Pi ever built while still retaining the iconic form factor.',
    },
]

const purposes = [
    {
        icon: '🎓',
        title: 'Education',
        desc: 'The primary purpose of the Raspberry Pi was to make learning programming accessible to students of all ages. It ships with Scratch, Python, and numerous coding tools pre-installed, making it an ideal classroom tool.',
    },
    {
        icon: '🔧',
        title: 'Maker & Hobbyist Projects',
        desc: 'Its GPIO pins and affordable price make it the go-to platform for home automation, retro gaming consoles, weather stations, media centres, and thousands of creative maker projects.',
    },
    {
        icon: '🏭',
        title: 'Industrial & Commercial Use',
        desc: 'The Compute Module variants are widely used in industry — from digital signage and point-of-sale systems to robotics and edge computing gateways in manufacturing environments.',
    },
    {
        icon: '🌍',
        title: 'Bridging the Digital Divide',
        desc: 'In developing countries and under-resourced schools, the Pi provides an affordable computer that can run on low power. It has been deployed in schools across Africa, Asia, and Latin America.',
    },
    {
        icon: '🤖',
        title: 'Robotics & AI at the Edge',
        desc: 'With enough processing power to run TensorFlow Lite, OpenCV, and ROS, the Raspberry Pi powers robots, drones, and machine-vision systems in research labs and classrooms worldwide.',
    },
    {
        icon: '🖥️',
        title: 'Desktop Replacement',
        desc: 'Running a full Linux desktop environment, the Pi 4 and Pi 5 are capable daily drivers for web browsing, document editing, software development, and media playback.',
    },
]

export default function RpiHistory() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi" className="hover:text-primary-400 transition-colors">Raspberry Pi</Link>
                <span>/</span>
                <Link to="/tutorial/raspberry-pi/introduction" className="hover:text-primary-400 transition-colors">Introduction</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">History &amp; Purpose</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">
                History &amp; Purpose of Raspberry Pi
            </h1>

            <div className="prose max-w-none">
                {/* Intro banner */}
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-10">
                    <p className="text-surface-300 leading-relaxed">
                        The <strong className="text-raspberry">Raspberry Pi</strong> was born from a simple observation —
                        fewer and fewer students were arriving at university with strong programming skills. What started as
                        a small charity project became the best-selling British computer of all time, fundamentally changing
                        how people around the world learn and build with technology.
                    </p>
                </div>

                {/* History Video */}
                {/* <YoutubeEmbed id="uXWRu6PgMgI" title="The Story of Raspberry Pi" /> */}

                {/* Timeline */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    A Timeline of Raspberry Pi
                </h2>
                <div className="relative pl-4 border-l-2 border-raspberry/30 space-y-8 mb-10">
                    {timeline.map((entry) => (
                        <div key={entry.year} className="relative">
                            {/* Dot on the timeline */}
                            <span className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-raspberry border-2 border-surface-900 flex items-center justify-center" />
                            <p className="text-xs font-bold text-raspberry mb-1 ml-2">{entry.year}</p>
                            <div className="ml-2 p-4 rounded-xl bg-surface-900/40 border border-surface-800/50">
                                <h3 className="text-sm font-semibold text-surface-50 mb-1">{entry.title}</h3>
                                <p className="text-sm text-surface-400 leading-relaxed">{entry.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Purpose section */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    The Purpose of Raspberry Pi
                </h2>
                <p className="text-surface-400 leading-relaxed mb-6">
                    The Raspberry Pi Foundation's mission is to put the power of computing and digital making into the hands
                    of people all over the world. The Pi serves many purposes across education, industry, and the maker community:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {purposes.map(({  title, desc }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            {/* <div className="text-2xl mb-2">{icon}</div> */}
                            <h3 className="text-sm font-semibold text-surface-50 mb-1">{title}</h3>
                            <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Key milestone stats */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Key Milestones at a Glance
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {[
                        { value: '2012', label: 'Year launched' },
                        { value: '60M+', label: 'Units sold' },
                        { value: '$35', label: 'Original price' },
                        { value: '4 Gen', label: 'Generations (1→5)' },
                    ].map(({ value, label }) => (
                        <div key={label} className="p-4 rounded-xl bg-surface-900/50 border border-raspberry/10 text-center">
                            <p className="text-2xl font-bold text-raspberry">{value}</p>
                            <p className="text-xs text-surface-500 mt-1">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link
                        to="/tutorial/raspberry-pi/introduction"
                        className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Introduction
                    </Link>
                    <Link
                        to="/tutorial/raspberry-pi/introduction/foundation"
                        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                    >
                        Raspberry Pi Foundation
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
