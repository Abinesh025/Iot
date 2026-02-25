import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function TutorialLayout({ category }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex min-h-screen">
            {/* Desktop sidebar */}
            <div className="hidden lg:block w-72 border-r border-surface-800/50 bg-surface-950/50 shrink-0">
                <div className="sticky top-0 h-screen overflow-y-auto">
                    <Sidebar category={category} />
                </div>
            </div>

            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div className="absolute left-0 top-0 bottom-0 w-72 bg-surface-950 border-r border-surface-800/50 shadow-2xl overflow-y-auto animate-slide-in">
                        <Sidebar category={category} onNavigate={() => setSidebarOpen(false)} />
                    </div>
                </div>
            )}

            {/* Content area */}
            <div className="flex-1 min-w-0">
                {/* Mobile toggle */}
                <div className="lg:hidden sticky top-0 z-30 bg-surface-950/90 backdrop-blur-sm border-b border-surface-800/50 px-4 py-2">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="flex items-center gap-2 text-sm text-surface-400 hover:text-surface-50 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        Menu
                    </button>
                </div>

                {/* Page content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
