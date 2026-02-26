import { useState } from 'react'
import logo from "../assets/egs logo.webp"
import nba from "../assets/nba-logo.svg"
import annau from "../assets/annau.svg"
import Nacc from "../assets/NAAC.png"
import Nirf from "../assets/NIRF.webp"
import Aicte from "../assets/aicte.png"

const accreditationLogos = [
    { src: nba, alt: 'NBA' },
    { src: Aicte, alt: 'AICTE' },
    { src: annau, alt: 'Anna University' },
    { src: Nacc, alt: 'NAAC' },
    { src: Nirf, alt: 'NIRF' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-16 py-3">

                {/* College logo */}
                <a href="/" className="shrink-0">
                    <img
                        src={logo}
                        alt="EGS Logo"
                        className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                    />
                </a>

                {/* Desktop accreditation logos */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 flex-wrap justify-end">
                    {accreditationLogos.map((item) => (
                        
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="h-8 lg:h-10 xl:h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
                            />
                        
                    ))}
                </div>

                {/* Mobile hamburger button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile dropdown for accreditation logos */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex items-center justify-center flex-wrap gap-4 px-4 py-4 bg-gray-50 border-t border-gray-200">
                    {accreditationLogos.map((item) => (
                        <a key={item.alt} href="#" className="shrink-0">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="h-8 w-auto object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
