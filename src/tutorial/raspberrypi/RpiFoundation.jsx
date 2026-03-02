import { Link } from 'react-router-dom'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const founders = [
    {
        name: 'Eben Upton',
        role: 'Co-founder & CEO, Raspberry Pi Ltd',
        desc: 'Eben Upton is the primary creator of the Raspberry Pi. While at the University of Cambridge, he led the project from an initial idea into reality. He now leads Raspberry Pi Trading Ltd and oversees hardware design.',
    },
    {
        name: 'Jack Lang',
        role: 'Co-founder & Trustee',
        desc: 'A serial entrepreneur and long-time Cambridge computer scientist, Jack helped turn the early concept into a viable commercial product and contributed to the Foundation\'s governance and strategy.',
    },
    {
        name: 'Alan Mycroft',
        role: 'Co-founder & Trustee',
        desc: 'Professor of Computer Science at the University of Cambridge, Alan brought deep academic expertise in programming languages and computing education to the Foundation.',
    },
    {
        name: 'Pete Lomas',
        role: 'Co-founder & Hardware Engineer',
        desc: 'Pete designed the original Raspberry Pi PCB. His hardware engineering expertise was crucial in bringing the first prototype boards to life, translating the vision into physical hardware.',
    },
    {
        name: 'David Braben',
        role: 'Co-founder & Trustee',
        desc: 'Legendary creator of the game Elite, David Braben co-founded the Raspberry Pi Foundation to help create the next generation of programmers, mirroring the influence of home computers like the BBC Micro in the 1980s.',
    },
    {
        name: 'Rob Mullins',
        role: 'Co-founder & Trustee',
        desc: 'A researcher in computer architecture at Cambridge, Rob contributed academic rigour to the Foundation\'s educational mission and continues to help shape the Pi\'s role in STEM education.',
    },
]

const programs = [
    {
        icon: '🏫',
        title: 'Raspberry Pi in Schools',
        desc: 'The Foundation works with thousands of schools globally, donating hardware and curriculum materials to bring coding and digital making into classrooms.',
    },
    {
        icon: '💻',
        title: 'Code Club & CoderDojo',
        desc: 'Through its subsidiaries Code Club and CoderDojo, the Foundation runs free coding clubs for young people in over 160 countries, reaching millions of children.',
    },
    {
        icon: '📚',
        title: 'Free Learning Resources',
        desc: 'The Foundation publishes the MagPi magazine, HackSpace magazine, and hundreds of free project guides and tutorials on raspberrypi.com — all available free online.',
    },
    {
        icon: '🎓',
        title: 'Raspberry Pi Educator Training',
        desc: 'The Foundation runs certified teacher training programmes and online courses through FutureLearn, helping educators worldwide teach computing with confidence.',
    },
    {
        icon: '🌍',
        title: 'Global Outreach',
        desc: 'Partnering with NGOs and governments, the Foundation supplies Pis to under-resourced communities in Africa, Asia, and Latin America to bridge the digital divide.',
    },
    {
        icon: '🔬',
        title: 'Research & Innovation',
        desc: 'The Foundation invests in research into computing education, measuring the impact of its programmes and publishing findings to advance the field of digital literacy.',
    },
]

const products = [
    { name: 'Raspberry Pi 5', use: 'High-performance desktop & AI edge' },
    { name: 'Raspberry Pi 4 Model B', use: 'General-purpose computing & IoT' },
    { name: 'Raspberry Pi Zero 2 W', use: 'Ultra-compact embedded projects' },
    { name: 'Raspberry Pi Pico W', use: 'Microcontroller / wireless IoT' },
    { name: 'Raspberry Pi Compute Module 4', use: 'Industrial & commercial products' },
    { name: 'Raspberry Pi 400', use: 'All-in-one keyboard computer' },
]

export default function RpiFoundation() {
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
                <span className="text-surface-300 font-medium">Developed by Raspberry Pi Foundation</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">
                Developed by the Raspberry Pi Foundation
            </h1>

            <div className="prose max-w-none">
                {/* Intro banner */}
                <div className="p-5 rounded-xl bg-raspberry/5 border border-raspberry/20 mb-10">
                    <p className="text-surface-300 leading-relaxed">
                        The <strong className="text-raspberry">Raspberry Pi Foundation</strong> is a UK-based educational
                        charity registered in 2008. Its mission is to put the power of computing and digital making into
                        the hands of people all over the world. The Foundation develops hardware, software, and educational
                        resources — all in service of making computing accessible to everyone.
                    </p>
                </div>

                {/* Foundation Video */}
                {/* <YoutubeEmbed id="s_RqXOGEFyc" title="Raspberry Pi Foundation — Mission & Impact" /> */}

                {/* What is the Foundation */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">1</span>
                    What is the Raspberry Pi Foundation?
                </h2>
                <p className="text-surface-400 leading-relaxed mb-4">
                    Founded in 2008 and launched publicly in 2012, the Raspberry Pi Foundation operates as a charity
                    with a dual mission: developing affordable hardware and providing free computing education resources.
                    Commercial activities are handled by <strong className="text-surface-300">Raspberry Pi Ltd</strong> (formerly
                    Raspberry Pi Trading), whose profits flow back into the charitable Foundation.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {[
                        { value: '2008', label: 'Foundation established' },
                        { value: '£1', label: 'UK registered charity' },
                        { value: '160+', label: 'Countries with Code Clubs' },
                        { value: '6M+', label: 'Children reached' },
                    ].map(({ value, label }) => (
                        <div key={label} className="p-4 rounded-xl bg-surface-900/50 border border-raspberry/10 text-center">
                            <p className="text-2xl font-bold text-raspberry">{value}</p>
                            <p className="text-xs text-surface-500 mt-1">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Co-founders */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">2</span>
                    The Co-Founders
                </h2>
                <p className="text-surface-400 leading-relaxed mb-5">
                    Six visionaries from the University of Cambridge joined forces to create Raspberry Pi —
                    a mix of academics, engineers, and entrepreneurs united by a passion for computing education.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {founders.map(({ name, role, desc }) => (
                        <div key={name} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-raspberry/10 flex items-center justify-center text-raspberry font-bold text-sm shrink-0">
                                    {name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-surface-50">{name}</h3>
                                    <p className="text-xs text-raspberry mb-2">{role}</p>
                                    <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Educational Programs */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">3</span>
                    Educational Programmes &amp; Initiatives
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {programs.map(({ icon, title, desc }) => (
                        <div key={title} className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/50 hover:border-raspberry/20 transition-colors">
                            <div className="text-2xl mb-2">{icon}</div>
                            <h3 className="text-sm font-semibold text-surface-50 mb-1">{title}</h3>
                            <p className="text-xs text-surface-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Products */}
                <h2 className="text-xl font-bold text-surface-50 mt-10 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm">4</span>
                    Products Developed by the Foundation
                </h2>
                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-surface-400 border-collapse">
                        <thead>
                            <tr className="border-b border-surface-800/60">
                                <th className="text-left py-2 pr-4 text-surface-300 font-semibold">Product</th>
                                <th className="text-left py-2 text-surface-300 font-semibold">Primary Use Case</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-800/40">
                            {products.map(({ name, use }) => (
                                <tr key={name}>
                                    <td className="py-2 pr-4 text-raspberry font-medium">{name}</td>
                                    <td className="py-2">{use}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mission quote */}
                <div className="p-5 rounded-xl bg-surface-900/40 border-l-4 border-raspberry mb-8">
                    <p className="text-surface-300 italic leading-relaxed">
                        "Our mission is to put the power of computing and digital making into the hands of people
                        all over the world. We do this so that more people are able to harness the power of computing
                        and digital technologies for work, to solve problems that matter to them, and to express
                        themselves creatively."
                    </p>
                    <p className="text-raspberry text-sm font-semibold mt-3">— Raspberry Pi Foundation</p>
                </div>

                {/* Nav */}
                <div className="mt-12 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                    <Link
                        to="/tutorial/raspberry-pi/introduction/history"
                        className="flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        History &amp; Purpose
                    </Link>
                    <Link
                        to="/tutorial/raspberry-pi/getting-started"
                        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                    >
                        Next: Getting Started
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
