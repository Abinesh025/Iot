import { Link } from 'react-router-dom'

const categories = [
    {
        id: 'arduino',
        name: 'Arduino',
        description: 'Learn microcontroller programming, sensors, modules, and build amazing projects with Arduino.',
        to: '/tutorial/arduino',
        color: 'from-arduino/20 to-arduino/5',
        borderColor: 'hover:border-arduino/40',
        textColor: 'text-arduino',
        topics: ['What is Arduino?', 'Modules', 'Sensors', 'Installation', 'Projects'],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M16 3v1.5m0 15V21m-8-7.5h3v-3m3 0v3h3" />
            </svg>
        ),
    },
    {
        id: 'raspberrypi',
        name: 'Raspberry Pi',
        description: 'Explore single-board computing, Linux, GPIO programming, and IoT server projects.',
        to: '/tutorial/raspberry-pi',
        color: 'from-raspberry/20 to-raspberry/5',
        borderColor: 'hover:border-raspberry/40',
        textColor: 'text-raspberry',
        topics: ['Getting Started', 'GPIO Basics', 'Python Projects', 'Networking'],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        ),
    },
    {
        id: 'esp32',
        name: 'ESP32',
        description: 'Master WiFi & Bluetooth-enabled microcontrollers for wireless IoT applications.',
        to: '/tutorial/esp32',
        color: 'from-esp32/20 to-esp32/5',
        borderColor: 'hover:border-esp32/40',
        textColor: 'text-esp32',
        topics: ['Introduction', 'WiFi Setup', 'BLE Basics', 'Cloud Integration'],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.5h.01" />
            </svg>
        ),
    },
]

export default function TutorialHome() {
    return (
        <div className="min-h-[calc(100vh-64px)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-surface-50">
                        Choose Your Platform
                    </h1>
                    <p className="mt-4 text-surface-400 text-lg max-w-2xl mx-auto">
                        Select an IoT platform to begin your learning journey. Each section
                        includes structured tutorials, hands-on projects, and installation guides.
                    </p>
                </div>

                {/* Category Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to={cat.to}
                            className={`group relative p-6 rounded-2xl bg-gradient-to-br ${cat.color} border border-surface-800/50 ${cat.borderColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl bg-surface-950/60 flex items-center justify-center ${cat.textColor} mb-5`}>
                                {cat.icon}
                            </div>

                            {/* Title & description */}
                            <h2 className="text-xl font-bold text-surface-50 mb-2">{cat.name}</h2>
                            <p className="text-surface-400 text-sm leading-relaxed mb-5">{cat.description}</p>

                            {/* Topic pills */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {cat.topics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="px-2.5 py-1 rounded-md bg-surface-950/40 text-surface-400 text-xs font-medium"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>

                            {/* Arrow */}
                            <div className={`flex items-center gap-1 text-sm font-medium ${cat.textColor} group-hover:gap-2 transition-all`}>
                                Explore tutorials
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
