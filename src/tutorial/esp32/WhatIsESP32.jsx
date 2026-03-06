import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ── Reusable Accordion Item ── */
function AccordionItem({ title, children }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="border border-surface-800/60 rounded-xl overflow-hidden mb-3">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-4 bg-surface-900/60 hover:bg-surface-800/50 transition-colors text-left"
            >
                <span className="text-surface-100 font-semibold text-sm">{title}</span>
                <svg
                    className={`w-4 h-4 text-esp32 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="px-5 py-4 bg-surface-900/30 border-t border-surface-800/40 text-surface-400 text-sm leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    )
}

/* ═══════════════════════════════════════
   Introduction Page
═══════════════════════════════════════ */
export default function WhatIsESP32() {
    return (
        <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
                <Link to="/" className="hover:text-primary-400 transition-colors">Tutorials</Link>
                <span>/</span>
                <Link to="/tutorial/esp32" className="hover:text-primary-400 transition-colors">ESP32</Link>
                <span>/</span>
                <span className="text-surface-300 font-medium">Introduction</span>
            </nav>

            {/* Page heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-2">
                ESP32 <span className="text-esp32">Introduction</span>
            </h1>
            <p className="text-surface-400 text-base mb-8 leading-relaxed">
                Get started with the ESP32 — learn what it is, how to set up your development
                environment, and how to use the official ESP-IDF framework.
            </p>

            {/* Accordion sections */}
            <AccordionItem title="What is ESP32?">
                <p className="mb-2">
                    <strong className="text-surface-200">ESP32</strong> is a powerful, low-cost microcontroller
                    developed by <strong className="text-surface-200">Espressif Systems</strong> with built-in
                    Wi-Fi and Bluetooth connectivity.
                </p>
                <p className="mb-2">
                    It features a dual-core 32-bit processor running up to 240 MHz, making it well suited for
                    demanding IoT, embedded systems, and smart device applications.
                </p>
                <p>
                    Its combination of wireless connectivity, rich GPIO peripherals, and affordable price has
                    made it one of the most widely used microcontrollers in the maker and professional IoT community.
                </p>
            </AccordionItem>

            <AccordionItem title="ESP32 IDE">
                <p className="mb-2">
                    Developers can program the ESP32 using several popular Integrated Development Environments (IDEs)
                    depending on their preference and project requirements.
                </p>
                <ul className="space-y-2 mb-2">
                    {[
                        ['Arduino IDE', 'The simplest option for beginners. Install the ESP32 board package and upload sketches using familiar C++ syntax with thousands of compatible libraries.'],
                        ['PlatformIO', 'A professional IDE extension for VS Code with built-in dependency management, debugging, and multi-framework support for ESP32.'],
                        ['ESP-IDF (Eclipse / VS Code)', 'The official Espressif toolchain plugin, providing full FreeRTOS integration and access to every hardware feature.'],
                    ].map(([name, desc]) => (
                        <li key={name} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-esp32 shrink-0" />
                            <span><strong className="text-surface-200">{name}</strong> — {desc}</span>
                        </li>
                    ))}
                </ul>
                <p>
                    For beginners, the Arduino IDE is the recommended starting point. For production or
                    advanced projects, PlatformIO or ESP-IDF provides greater control.
                </p>
            </AccordionItem>

            <AccordionItem title="ESP-IDF 2.0">
                <p className="mb-2">
                    <strong className="text-surface-200">ESP-IDF</strong> (Espressif IoT Development Framework)
                    is the official development framework provided by Espressif for building advanced ESP32
                    applications.
                </p>
                <p className="mb-2">
                    It is built on top of <strong className="text-surface-200">FreeRTOS</strong> and provides
                    a rich component library covering Wi-Fi, Bluetooth, OTA updates, TLS/SSL, MQTT, and more —
                    all configurable via the <code className="text-esp32 bg-esp32/10 px-1 rounded text-xs">menuconfig</code> system.
                </p>
                <p className="mb-2">
                    ESP-IDF 2.0 introduced a cleaner component manager, improved build system (CMake-based),
                    better documentation, and more stable Wi-Fi and Bluetooth APIs compared to earlier versions.
                </p>
                <p>
                    It is the recommended framework for production-grade and industrial ESP32 deployments
                    where full control over the hardware and operating system is required.
                </p>
            </AccordionItem>

            {/* Navigation */}
            <div className="mt-10 pt-6 border-t border-surface-800/50 flex items-center justify-between">
                <Link
                    to="/tutorial/esp32"
                    className="flex items-center gap-2 text-surface-500 hover:text-primary-400 font-medium transition-colors text-sm"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    ESP32 Overview
                </Link>
            </div>
        </article>
    )
}
