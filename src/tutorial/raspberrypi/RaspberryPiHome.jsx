import { Link } from 'react-router-dom'

export default function RaspberryPiHome() {
    return (
        <div>
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <span className="text-raspberry font-medium">Raspberry Pi</span>
            </nav>

            <div className="text-center py-16">
                <div className="w-20 h-20 rounded-2xl bg-raspberry/10 flex items-center justify-center text-raspberry mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-surface-50 mb-3">Raspberry Pi Tutorials</h1>
                <p className="text-surface-400 text-lg mb-6 max-w-md mx-auto">
                    Comprehensive Raspberry Pi tutorials are coming soon. Topics will include GPIO, Python, Linux, networking, and full-stack IoT projects.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {['Getting Started', 'GPIO Programming', 'Python Scripts', 'Server Setup', 'Camera Module', 'Home Automation'].map((t) => (
                        <span key={t} className="px-3 py-1 rounded-md bg-raspberry/10 text-raspberry text-xs font-medium">{t}</span>
                    ))}
                </div>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-raspberry text-surface-50 font-semibold hover:bg-raspberry/90 transition-colors"
                >
                    ← Back to All Tutorials
                </Link>
            </div>
        </div>
    )
}
