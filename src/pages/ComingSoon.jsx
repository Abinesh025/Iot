import { Link } from 'react-router-dom'

export default function ComingSoon() {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="text-center px-4">
                <div className="w-20 h-20 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19A1.5 1.5 0 005 13.298V18.3a1.5 1.5 0 001.036 1.318l5.384 3.19a1.5 1.5 0 001.16 0l5.384-3.19A1.5 1.5 0 0019 18.3v-4.992a1.5 1.5 0 00-1.036-1.318l-5.384-3.19a1.5 1.5 0 00-1.16 0z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-surface-50 mb-3">Coming Soon</h1>
                <p className="text-surface-400 text-lg mb-8 max-w-md mx-auto">
                    This section is currently under development. Check back soon for new content!
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-surface-50 font-semibold hover:bg-primary-500 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Tutorials
                </Link>
            </div>
        </div>
    )
}
