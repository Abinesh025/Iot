import { Link } from 'react-router-dom'

export default function ModuleContent({ title, images, description, features, howItWorks, pinout, code }) {
    return (
        <article className="max-w-4xl">
            {/* ── Breadcrumb ── */}

                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-8 flex-wrap">
            <button type="button" aria-label="Home" className="hover:text-primary-400 transition-colors">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7.609c.352 0 .69.122.96.343l.111.1 6.25 6.25v.001a1.5 1.5 0 0 1 .445 1.071v7.5a.89.89 0 0 1-.891.891H9.125a.89.89 0 0 1-.89-.89v-7.5l.006-.149a1.5 1.5 0 0 1 .337-.813l.1-.11 6.25-6.25c.285-.285.67-.444 1.072-.444Zm5.984 7.876L16 9.5l-5.984 5.985v6.499h11.968z" fill="#475569" stroke="#475569" strokeWidth=".094"/>
                </svg>
            </button>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1"/>
            </svg>
            <a href="#" className="hover:text-primary-400 transition-colors">Tutorial</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1"/>
            </svg>
            <a href="#" className="hover:text-primary-400 transition-colors">Ardino</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1"/>
            </svg>
            <a href="#" className="hover:text-primary-400 transition-colors">modules</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1"/>
            </svg>
            <a href="#" className="text-indigo-500">{title}</a>
        </div>


            {/* ── Title ── */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-6">
                {title}
            </h1>

            {/* ── Image Gallery ── */}
            {images && images.length > 0 && (
                <div className="flex gap-4 overflow-x-auto pb-4 mb-10 scrollbar-thin">
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`${title} image ${i + 1}`}
                            className="h-56 sm:h-64 w-auto rounded-xl border-2 border-surface-800/50 object-cover shrink-0 bg-surface-900/60"
                        />
                    ))}
                </div>
            )}

            {/* ── Description ── */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold text-surface-100 mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 rounded-full bg-arduino inline-block" />
                    Description
                </h2>
                <p className="text-surface-400 leading-relaxed">{description}</p>
            </section>

            {/* ── Features ── */}
            {features && features.length > 0 && (
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-surface-100 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 rounded-full bg-primary-500 inline-block" />
                        Features
                    </h2>
                    <ul className="space-y-2 pl-1">
                        {features.map((f, i) => (
                            <li key={i} className="flex items-start gap-3 text-surface-400">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-arduino shrink-0" />
                                <span className="leading-relaxed">{f}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* ── How It Works ── */}
            
                               <section className="mb-10">
                    <h2 className="text-xl font-semibold text-surface-100 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 rounded-full bg-primary-400 inline-block" />
                        How It Works
                    </h2>
                    {howItWorks && howItWorks.map((point,i)=>(

                                           <li className="flex items-start gap-3 text-surface-400">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-arduino shrink-0" />
                                <span className="leading-relaxed">{point.point}</span>
                            </li>
                    // <div className="p-5 rounded-xl bg-surface-900/40 border border-surface-800/50">
                    //     <p className="text-surface-400 leading-relaxed">{howItWorks.point}</p>
                    // </div>
            )
            )}
             </section>

            {/* ── Pinout ── */}
            {pinout && pinout.length > 0 && (
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-surface-100 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 rounded-full bg-arduino inline-block" />
                        Pinout
                    </h2>
                    <div className="overflow-x-auto rounded-xl border border-surface-800/50">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-surface-900/60">
                                    <th className="text-left px-4 py-3 text-surface-300 font-semibold">Pin</th>
                                    <th className="text-left px-4 py-3 text-surface-300 font-semibold">Function</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-800/40">
                                {pinout.map((p, i) => (
                                    <tr key={i} className="hover:bg-surface-900/30 transition-colors">
                                        <td className="px-4 py-2.5 font-mono text-arduino">{p.pin}</td>
                                        <td className="px-4 py-2.5 text-surface-400">{p.function}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            {/* ── Example Code ── */}
            {code && (
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-surface-100 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 rounded-full bg-primary-500 inline-block" />
                        Basic Example Code
                    </h2>
                    <div className="rounded-xl border border-surface-800/50 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 bg-surface-900/80 border-b border-surface-800/50">
                            <span className="text-xs font-mono text-surface-500">Arduino (.ino)</span>
                            <button
                                onClick={() => navigator.clipboard.writeText(code)}
                                className="text-xs text-surface-500 hover:text-arduino transition-colors cursor-pointer flex items-center gap-1"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy
                            </button>
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm leading-relaxed bg-surface-900/40">
                            <code className="font-mono text-surface-300">{code}</code>
                        </pre>
                    </div>
                </section>
            )}

            {/* ── Bottom nav ── */}
            <div className="pt-6 border-t border-surface-800/50">
                <Link
                    to="/tutorial/arduino/modules"
                    className="inline-flex items-center gap-2 text-surface-400 hover:text-primary-400 font-medium transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Back to Modules
                </Link>
            </div>
        </article>
    )
}
